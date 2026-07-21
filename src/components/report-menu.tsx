"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "products_hub_data_v1";

type ProductRecord = {
  id: string;
  name: string;
  type: string;
  status: string;
  desc: string;
  url: string;
  specs: string;
  updated: string | null;
  slug?: string;
};

const STATUS_OPTIONS = ["Live", "In development", "Planning", "Paused"];

// Canonical list of known projects. Kept in sync with the `defaults` array in
// public/myproductdashboard.html. This exists so that saving from a single
// report page's menu can never silently drop the *other* projects from the
// dashboard — see the union-merge in loadAll() below.
const DEFAULT_PROJECTS: ProductRecord[] = [
  { id: "p_default_nexus", name: "Nexus", type: "Own product", status: "In development", desc: "", url: "", specs: "", updated: null, slug: "nexus" },
  { id: "p_default_nerve", name: "Nerve", type: "Own product", status: "In development", desc: "", url: "", specs: "", updated: null, slug: "nerve" },
  { id: "p_default_swapzone", name: "Swap Zone", type: "Own product", status: "In development", desc: "", url: "", specs: "", updated: null, slug: "swapzone" },
  { id: "p_default_together", name: "Together", type: "Own product", status: "In development", desc: "", url: "", specs: "", updated: null, slug: "together" },
  { id: "p_default_portfolio", name: "My Portfolio", type: "Own product", status: "Live", desc: "", url: "", specs: "", updated: null, slug: "portfolio" },
];

function loadAll(): ProductRecord[] {
  let existing: ProductRecord[] = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) existing = JSON.parse(raw);
  } catch {
    // ignore malformed storage
  }
  // Union-merge with the known defaults so this page's save() never ends up
  // being the *only* source of truth and erasing projects it doesn't know
  // about (e.g. if this report page loads before the dashboard has ever
  // seeded localStorage itself).
  const existingSlugs = new Set(existing.map((p) => p.slug).filter(Boolean));
  const missing = DEFAULT_PROJECTS.filter((d) => !existingSlugs.has(d.slug));
  return existing.concat(missing);
}

function saveAll(records: ProductRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export default function ReportMenu({
  slug,
  displayName,
  githubUrl,
}: {
  slug: string;
  displayName: string;
  githubUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("In development");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [specs, setSpecs] = useState("");
  const [saved, setSaved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const all = loadAll();
    const match = all.find((p) => p.slug === slug || p.name === displayName);
    if (match) {
      setStatus(match.status || "In development");
      setDesc(match.desc || "");
      setUrl(match.url || "");
      setSpecs(match.specs || "");
    }
  }, [slug, displayName]);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function handleSave() {
    const all = loadAll();
    const idx = all.findIndex((p) => p.slug === slug || p.name === displayName);
    const payload = {
      status,
      desc: desc.trim(),
      url: url.trim(),
      specs: specs.trim(),
      updated: new Date().toISOString(),
    };
    if (idx >= 0) {
      all[idx] = { ...all[idx], ...payload, slug: all[idx].slug || slug };
    } else {
      all.push({
        id: "p_" + Math.random().toString(36).slice(2, 10),
        name: displayName,
        type: "Own product",
        slug,
        ...payload,
      });
    }
    saveAll(all);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        className="state-layer flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-80 rounded-m3-lg border border-outline-variant bg-surface-container-low p-4 shadow-lg">
          <div className="mb-3 text-title-sm font-medium text-on-surface">Manage {displayName}</div>

          <label className="mb-1 block text-label-sm text-on-surface-variant">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mb-3 w-full rounded-m3-sm border border-outline-variant bg-surface px-2 py-1.5 text-body-sm text-on-surface"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label className="mb-1 block text-label-sm text-on-surface-variant">One-line description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="What is this / what does it do?"
            className="mb-3 w-full rounded-m3-sm border border-outline-variant bg-surface px-2 py-1.5 text-body-sm text-on-surface"
          />

          <label className="mb-1 block text-label-sm text-on-surface-variant">Link / URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            className="mb-3 w-full rounded-m3-sm border border-outline-variant bg-surface px-2 py-1.5 text-body-sm text-on-surface"
          />

          <label className="mb-1 block text-label-sm text-on-surface-variant">Notes</label>
          <textarea
            value={specs}
            onChange={(e) => setSpecs(e.target.value)}
            placeholder="Structure, stack, key decisions, roadmap notes..."
            className="mb-3 h-20 w-full resize-none rounded-m3-sm border border-outline-variant bg-surface px-2 py-1.5 text-body-sm text-on-surface"
          />

          <button
            type="button"
            onClick={handleSave}
            className="mb-3 w-full rounded-m3-sm bg-primary px-3 py-1.5 text-label-lg font-medium text-on-primary"
          >
            {saved ? "Saved ✓" : "Save"}
          </button>

          <div className="flex items-center justify-between border-t border-outline-variant pt-3 text-body-sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-2"
            >
              View on GitHub
            </a>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="text-on-surface-variant hover:text-on-surface"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
