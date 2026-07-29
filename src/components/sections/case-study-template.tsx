"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Project } from "@/content/projects";
import { LogicTreeCanvas } from "@/components/motion/logic-tree-canvas";
import { ProjectMedia } from "@/components/motion/project-media";

type CaseStudyTemplateProps = {
  project: Project;
};

/**
 * 2-column engineering-console layout: the narrative (Problem/Approach/Outcome)
 * scrolls in normal flow on the left, while the right column's "Radiograph"
 * stays `position: sticky` and fades in/out as the reader moves through the
 * text. The fade is driven by the same scroll-track + useScroll mechanism
 * PinnedSection uses elsewhere (a ref spanning the full track, offset
 * ["start start", "end end"]) — only the sticky column is native CSS instead
 * of a full pinned viewport, since the text must scroll while only the
 * visual holds still.
 */
export function CaseStudyTemplate({ project }: CaseStudyTemplateProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const radiographOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.3, 1, 1, 0.35]);

  return (
    <div ref={trackRef} className="relative border-t border-hud-line bg-void">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: narrative — normal document flow, scrolls past the sticky right column */}
        <div className="flex flex-col gap-16">
          <p className="font-mono text-hud-xs text-ink-dim uppercase">{project.role}</p>

          {project.metrics && (
            <div className="flex flex-wrap gap-8 border-b border-hud-line pb-8">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1">
                  <p className="font-display text-headline-sm text-cyan tabular-nums">{metric.value}</p>
                  <p className="font-mono text-hud-xs text-ink-dim uppercase">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          <NarrativeBlock index="01" label="Problem">
            <p className="text-body-lg text-ink-dim">{project.challenge}</p>
          </NarrativeBlock>

          <NarrativeBlock index="02" label="Approach">
            <ul className="flex flex-col gap-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-3 text-body-lg text-ink-dim">
                  <span className="mt-1 shrink-0 font-mono text-label-md text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </NarrativeBlock>

          <NarrativeBlock index="03" label="Outcome">
            <p className="text-body-lg text-ink-dim">{project.outcome}</p>
          </NarrativeBlock>

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-3 border-t border-hud-line pt-8">
              {project.gallery.map((src) => (
                <div key={src} className="hud-glass relative aspect-[4/3] overflow-hidden rounded-hud">
                  <Image src={src} alt={`${project.name} additional view`} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: sticky radiograph — holds still while the narrative scrolls past it */}
        <div className="lg:sticky lg:top-24 lg:h-[70vh]">
          <ProjectRadiograph project={project} opacity={radiographOpacity} />
        </div>
      </div>
    </div>
  );
}

function NarrativeBlock({ index, label, children }: { index: string; label: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <p className="font-mono text-hud-xs text-cyan uppercase tracking-[0.2em]">{`${index} // ${label}`}</p>
      {children}
    </section>
  );
}

function ProjectRadiograph({ project, opacity }: { project: Project; opacity: MotionValue<number> }) {
  const hasRealMedia = Boolean(project.model3d || project.frames?.length || project.video || project.poster);

  return (
    <motion.div style={{ opacity }} className="hud-glass relative h-full min-h-[420px] w-full overflow-hidden rounded-hud">
      <LogicTreeCanvas seed={project.slug} className="absolute inset-0" />

      {hasRealMedia && (
        <div className="absolute inset-5">
          <ProjectMedia project={project} alt={`${project.name} evidence`} className="h-full rounded-hud" />
        </div>
      )}

      <span className="pointer-events-none absolute left-3 top-3 font-mono text-hud-xs text-cyan uppercase">
        RADIOGRAPH // {project.slug}
      </span>
    </motion.div>
  );
}
