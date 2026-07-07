"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const NARRATIVE = `Leveraging a foundational background in Industrial Design, I approach UX/UI design through a lens of strict operational rigor and structural logic. With over a decade of experience, I specialize in leading cross-functional teams to untangle fragmented systems and build cohesive, end-to-end digital products that scale globally. My hybrid expertise in product management and front-end development allows me to seamlessly bridge the gap between high-level UX strategy and complex technical implementation.`;

const SHADOW_RESTING = "0 1px 2px 0 hsl(var(--shadow-color) / 0.3), 0 1px 3px 1px hsl(var(--shadow-color) / 0.15)";
const SHADOW_ARRIVED = "0 1px 3px 0 hsl(var(--shadow-color) / 0.3), 0 4px 8px 3px hsl(var(--shadow-color) / 0.15)";

export function Narrative() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const boxShadow = useTransform(scrollYProgress, [0, 1], [SHADOW_RESTING, SHADOW_ARRIVED]);

  return (
    <section id="about" className="border-t border-outline-variant bg-surface-container-low px-6 py-24">
      <motion.div
        ref={ref}
        style={
          prefersReducedMotion
            ? undefined
            : { rotateX, y, scale, boxShadow, transformPerspective: 1200 }
        }
        className="mx-auto max-w-4xl rounded-m3-lg bg-surface-container-low p-8 md:p-10"
      >
        <ScrollRevealText
          text={NARRATIVE}
          className="font-display text-headline-sm leading-relaxed text-on-surface md:text-headline-md"
        />
      </motion.div>
    </section>
  );
}
