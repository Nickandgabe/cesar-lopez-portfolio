"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// SELECTED_WORKS and ABOUT used to anchor to homepage sections; both were
// removed when the hero was rebuilt. WORK points at the standalone /work
// index page instead of an in-page anchor.
const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

/** Floating pill nav — replaces the old full-width HUD bar. Always
 * translucent/rounded rather than only on scroll, matching the "Studio"
 * design system's device-frame-card language instead of console chrome. */
export function Navbar() {
  return (
    <header className="sticky top-4 z-40 flex justify-center px-4">
      <nav
        className="hud-glass flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-hud-line px-5 py-2.5 shadow-card"
        aria-label="Primary"
      >
        <Link href="/" className="state-layer rounded-full px-2 py-1 font-display text-title-md font-bold text-ink">
          CESAR LOPEZ
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="state-layer rounded-full px-4 py-2 text-label-lg text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden items-center justify-center rounded-full bg-ink px-5 py-2 text-label-lg font-medium text-void transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
