"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { PinnedSection } from "@/components/motion/pinned-section";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { ProjectMedia } from "@/components/motion/project-media";
import type { Project } from "@/content/projects";

type FlagshipProjectShowcaseProps = {
  project: Project;
};

/** Full-bleed pinned centerpiece for the flagship project — the "main product" moment. */
export function FlagshipProjectShowcase({ project }: FlagshipProjectShowcaseProps) {
  return (
    <PinnedSection length={2}>{(progress) => <ShowcaseContent project={project} progress={progress} />}</PinnedSection>
  );
}

function ShowcaseContent({ project, progress }: { project: Project; progress: MotionValue<number> }) {
  const words = project.name.split(" ");

  const detailsOpacity = useTransform(progress, [0.35, 0.6], [0, 1]);
  const detailsY = useTransform(progress, [0.35, 0.6], [24, 0]);
  const ctaOpacity = useTransform(progress, [0.6, 0.8], [0, 1]);
  const ctaY = useTransform(progress, [0.6, 0.8], [16, 0]);
  const scrimOpacity = useTransform(progress, [0, 1], [0.35, 0.55]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 [&>*]:h-full [&>*]:w-full [&>*]:aspect-auto! [&>*]:rounded-none">
        <ParallaxLayer speed={0.4} className="h-full w-full">
          <ProjectMedia project={project} alt={`${project.name} preview`} />
        </ParallaxLayer>
      </div>

      <motion.div aria-hidden style={{ opacity: scrimOpacity }} className="absolute inset-0 bg-scrim" />

      <div className="relative z-[1] mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-6 pb-20">
        <p className="text-label-lg tracking-wide text-white/70 uppercase">Flagship case study</p>

        <h2 className="font-display text-display-sm text-white md:text-display-md [perspective:1200px]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>
              <FlagshipWord word={word} index={i} total={words.length} progress={progress} />
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <motion.div style={{ opacity: detailsOpacity, y: detailsY }} className="flex flex-col gap-4">
          <p className="max-w-2xl text-title-lg text-white/85">{project.summary}</p>
          {project.metrics && (
            <div className="flex flex-wrap gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-headline-sm text-white">{metric.value}</p>
                  <p className="text-label-md text-white/70">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
          <Magnetic>
            <Button href={`/work/${project.slug}`} variant="filled">
              View case study
              <ArrowUpRight size={18} aria-hidden />
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
}

type FlagshipWordProps = {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

/** Builds a 4-point (or 3-point at the domain edges) keyframe pair spanning the
 * full 0-1 progress domain — a flat run-in, the word's own rise, then a flat
 * hold — rather than a `useTransform` call scoped to a tiny sub-range, which
 * is unreliable for values far outside that sub-range. */
function useStaggeredTransform(progress: MotionValue<number>, start: number, end: number, from: number, to: number) {
  const points = start === 0 ? [start, end, 1] : end === 1 ? [0, start, end] : [0, start, end, 1];
  const values = start === 0 ? [from, to, to] : end === 1 ? [from, from, to] : [from, from, to, to];
  return useTransform(progress, points, values);
}

function FlagshipWord({ word, index, total, progress }: FlagshipWordProps) {
  const start = (index / total) * 0.35;
  const end = start + 0.35 / total;
  const rotateX = useStaggeredTransform(progress, start, end, 90, 0);
  const z = useStaggeredTransform(progress, start, end, -400, 0);
  const opacity = useStaggeredTransform(progress, start, end, 0, 1);

  return (
    <motion.span
      style={{ rotateX, z, opacity, transformStyle: "preserve-3d" }}
      className="inline-block will-change-transform"
    >
      {word}
    </motion.span>
  );
}
