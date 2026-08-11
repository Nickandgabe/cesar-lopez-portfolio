"use client";

import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type DeviceFrameCardProps = {
  children: ReactNode;
  className?: string;
  /** CSS width/height (e.g. "224px", "100%", "clamp(160px, 22vw, 288px)").
   * Applied via inline style rather than Tailwind height/width utility
   * classes, which weren't showing up reliably in this project's dev
   * server output. Inline style has no dependency on the CSS build at all,
   * so sizing here is deliberately kept out of Tailwind. */
  width?: string;
  height?: string;
  /** Seconds for one full idle bob cycle — vary slightly per card so a row
   * of them doesn't move in visible lockstep. */
  floatDuration?: number;
  floatDelay?: number;
  /** Vertical bob amplitude in px, and idle rotate amplitude in degrees. */
  floatY?: number;
  floatRotate?: number;
  /** Pointer-tilt amplitude in degrees. */
  maxTilt?: number;
  /** Show the macOS-style traffic-light chrome bar above the content. */
  chrome?: boolean;
};

/**
 * Floating "device/window" card — the shared visual language for the hero
 * and the /work grid, replacing every earlier WebGL hero concept. Two
 * independent transform layers, deliberately kept on separate elements so
 * they never fight over the same motion values: the outer layer runs a
 * slow, continuous idle float (translateY + a couple degrees of rotateZ)
 * via a plain declarative `animate` loop; the inner layer applies
 * pointer-tracked 3D tilt (rotateX/rotateY) via spring-driven motion
 * values, same technique as `tilt-card.tsx`. Reduced-motion disables the
 * idle loop but keeps the (much subtler, user-initiated) pointer tilt.
 */
export function DeviceFrameCard({
  children,
  className,
  width = "100%",
  height = "auto",
  floatDuration = 7,
  floatDelay = 0,
  floatY = 14,
  floatRotate = 1.5,
  maxTilt = 10,
  chrome = true,
}: DeviceFrameCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 260, damping: 24, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), spring);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    px.set((e.clientX - bounds.left) / bounds.width);
    py.set((e.clientY - bounds.top) / bounds.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      animate={reduced ? undefined : { y: [0, -floatY, 0], rotate: [-floatRotate, floatRotate, -floatRotate] }}
      transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      style={{ width, height }}
      className={cn("relative", className)}
    >
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        whileHover={{ scale: 1.025 }}
        transition={{ scale: { duration: 0.3, ease: [0.2, 0, 0, 1] } }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          borderRadius: 28,
          boxShadow: "var(--shadow-card-lg)",
        }}
        className="relative flex h-full w-full flex-col overflow-hidden border border-hud-line bg-panel"
      >
        {chrome && (
          <div aria-hidden className="flex shrink-0 items-center gap-1.5 border-b border-hud-line px-4 py-3">
            <span style={{ background: "var(--color-danger)" }} className="h-2.5 w-2.5 rounded-full opacity-60" />
            <span style={{ background: "var(--color-cyan)" }} className="h-2.5 w-2.5 rounded-full opacity-50" />
            <span style={{ background: "var(--color-ink-dim)" }} className="h-2.5 w-2.5 rounded-full opacity-40" />
          </div>
        )}
        <div className="relative min-h-0 flex-1">{children}</div>
      </motion.div>
    </motion.div>
  );
}
