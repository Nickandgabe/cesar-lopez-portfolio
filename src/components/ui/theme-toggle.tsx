"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

/** Toggles [data-theme] on <html> and persists the choice. The blocking
 * script in layout.tsx already sets the real attribute before paint — this
 * component just needs to read it back into React state on mount (client
 * only, hence the effect instead of a lazy useState initializer, which
 * would run during SSR where `document` doesn't exist) so its icon matches
 * what's already on screen. */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private-browsing/storage-disabled — theme just won't persist across reloads.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={cn(
        "state-layer inline-flex h-9 w-9 items-center justify-center rounded-full border border-hud-line text-ink-dim transition-colors duration-200 hover:text-ink",
        !mounted && "invisible",
        className,
      )}
    >
      {theme === "light" ? <Moon size={16} aria-hidden /> : <Sun size={16} aria-hidden />}
    </button>
  );
}
