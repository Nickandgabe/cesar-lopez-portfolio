"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsCompactViewport } from "@/lib/use-compact-viewport";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type ParallaxLayerProps = {
  children: ReactNode;
  /** Relative speed. Positive = slower than scroll (background feel), negative = opposite direction. Default 0.3. */
  speed?: number;
  className?: string;
};

/** Self-contained scroll-linked depth layer — tracks its own transit through the viewport. */
export function ParallaxLayer({ children, speed = 0.3, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompactViewport();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const effectiveSpeed = isCompact ? speed * 0.5 : speed;
  const y = useTransform(scrollYProgress, [0, 1], [`${effectiveSpeed * -50}%`, `${effectiveSpeed * 50}%`]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
