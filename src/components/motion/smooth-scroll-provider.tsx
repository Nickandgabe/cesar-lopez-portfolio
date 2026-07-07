"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import { useIsCompactViewport } from "@/lib/use-compact-viewport";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const ANCHOR_OFFSET = -72;

/**
 * Drives real native scroll position via Lenis. Skips Lenis entirely for
 * reduced-motion or compact (touch/narrow) viewports — those get native
 * scroll with no smoothing, and every `useScroll`/`useTransform` consumer
 * elsewhere keeps reading real scroll position either way.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompactViewport();
  const disabled = prefersReducedMotion || isCompact;

  useEffect(() => {
    document.documentElement.dataset.motion = disabled ? "reduced" : "full";

    if (disabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: ANCHOR_OFFSET, duration: 1.2 });
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [disabled]);

  return <>{children}</>;
}
