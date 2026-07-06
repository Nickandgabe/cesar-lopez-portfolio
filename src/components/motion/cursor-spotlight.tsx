"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

type CursorSpotlightProps = {
  className?: string;
  size?: number;
};

/** Drop as the first child of a `relative` container to add a soft glow that follows the pointer. */
export function CursorSpotlight({ className, size = 480 }: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const bounds = parent.getBoundingClientRect();
    x.set(bounds.width / 2);
    y.set(bounds.height * 0.35);

    function handleMove(e: globalThis.PointerEvent) {
      const b = parent!.getBoundingClientRect();
      x.set(e.clientX - b.left);
      y.set(e.clientY - b.top);
    }

    parent.addEventListener("pointermove", handleMove);
    return () => parent.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      <motion.div
        style={{
          left: springX,
          top: springY,
          width: size,
          height: size,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--md-primary) 18%, transparent), transparent 70%)",
        }}
        className="absolute rounded-full blur-2xl"
      />
    </motion.div>
  );
}
