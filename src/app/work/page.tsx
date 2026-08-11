"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/reveal";
import { DeviceFrameCard } from "@/components/motion/device-frame-card";
import { ProjectMedia } from "@/components/motion/project-media";
import { projects, type ProjectMode } from "@/content/projects";
import { cn } from "@/lib/cn";

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-label-md uppercase tracking-[0.08em] transition-colors duration-200",
        active ? "border-hud-line-strong bg-panel-high text-ink" : "border-hud-line text-ink-dim hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

/** Project index — landing point for "View Work" now that the hero no
 * longer doubles as a clickable project menu. Cards use the same
 * DeviceFrameCard language as the hero (floating chrome-bar frame, idle
 * bob, pointer tilt) for visual continuity between the two. */
export default function WorkIndexPage() {
  const [mode, setMode] = useState<ProjectMode>("practice");
  const filtered = projects.filter((p) => (p.mode ?? "practice") === mode);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Reveal>
        <p className="text-label-md uppercase tracking-[0.15em] text-ink-dim">Work</p>
        <h1 className="mt-2 font-display text-headline-lg text-ink md:text-display-sm">Selected Projects</h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Project type">
          <ModeButton active={mode === "practice"} onClick={() => setMode("practice")}>
            Case Studies
          </ModeButton>
          <ModeButton active={mode === "rd"} onClick={() => setMode("rd")}>
            R&amp;D
          </ModeButton>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <Reveal>
          <div className="hud-glass mt-10 flex flex-col items-start gap-2 rounded-hud p-8">
            <p className="text-label-md uppercase tracking-[0.1em] text-ink-dim">Nothing here yet</p>
            <p className="max-w-md text-body-md text-ink-dim">
              No independent R&amp;D case studies are published yet — check back soon, or switch to Case
              Studies for client engagement work.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-10 grid gap-x-6 gap-y-14 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link href={`/work/${project.slug}`} className="block">
                <DeviceFrameCard className="w-full" floatDuration={7 + i} floatDelay={i * 0.2} floatY={8} floatRotate={0.8} maxTilt={5}>
                  <ProjectMedia project={project} alt={`${project.name} preview`} className="aspect-[16/10] rounded-none" disable3d />

                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-label-lg text-ink-dim">
                        {project.category} · {project.year}
                      </p>
                      <ArrowUpRight size={20} aria-hidden className="ml-auto shrink-0 text-ink-dim" />
                    </div>

                    <h3 className="font-display text-title-lg text-ink">{project.name}</h3>

                    <p className="text-body-md text-ink-dim">{project.summary}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Chip key={tag} className="text-label-md">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </DeviceFrameCard>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </main>
  );
}
