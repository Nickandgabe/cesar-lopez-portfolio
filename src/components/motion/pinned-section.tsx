"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { useMotionValue, useScroll, type MotionValue } from "framer-motion";
import { useIsCompactViewport } from "@/lib/use-compact-viewport";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { cn } from "@/lib/cn";

type PinnedSectionProps = {
  /** Render-prop: receives scroll progress through the pin (0 at pin start, 1 at pin end). */
  children: (progress: MotionValue<number>) => ReactNode;
  /** Scroll-track height as a multiple of 100vh. Default 1.6. */
  length?: number;
  /** Progress value to render when pinning is disabled (reduced-motion/compact) — whichever of 0/1 is the legible resting state for this transform. Default 1 (entrance-style: 0 = hidden, 1 = arrived). Pass 0 for exit-style transforms (1 = legible, 1 = receded). */
  restingProgress?: 0 | 1;
  className?: string;
};

/**
 * Pins its content for the viewport duration of a taller scroll track, feeding
 * scroll progress (0→1) to a render-prop so each call site authors its own 3D
 * choreography. Falls back to plain, unpinned flow (progress locked at
 * `restingProgress`) for reduced-motion and compact/touch viewports, where
 * sticky + heavy transforms are either unwanted or risk jank.
 */
export function PinnedSection({ children, length = 1.6, restingProgress = 1, className }: PinnedSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompactViewport();
  const settled = useMotionValue<number>(restingProgress);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const disabled = prefersReducedMotion || isCompact;

  return (
    <div ref={trackRef} style={disabled ? undefined : { height: `${length * 100}vh` }} className="relative">
      {disabled ? (
        <div className={className}>{children(settled)}</div>
      ) : (
        <div
          className={cn("sticky top-0 h-screen overflow-hidden", className)}
          style={{ perspective: 1200 }}
        >
          {children(scrollYProgress)}
        </div>
      )}
    </div>
  );
}
