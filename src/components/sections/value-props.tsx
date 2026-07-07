"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { valueProps } from "@/content/values";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function ValueProps() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <ParallaxLayer speed={0.2} className="absolute inset-0 z-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]"
        />
      </ParallaxLayer>

      <motion.div
        ref={ref}
        style={prefersReducedMotion ? undefined : { scale, opacity }}
        className="relative z-[1] mx-auto max-w-6xl"
      >
        <Reveal>
          <h2 className="font-display text-headline-md text-on-surface md:text-headline-lg">
            Core Value Proposition
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card
                variant="elevated"
                className="group flex h-full flex-col gap-4 transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-m3-md bg-primary-container text-on-primary-container transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="font-display text-title-lg text-on-surface">{title}</h3>
                <p className="text-body-md text-on-surface-variant">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
