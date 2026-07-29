"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/reveal";
import { ProjectMedia } from "@/components/motion/project-media";
import type { Project } from "@/content/projects";

type CaseStudyHeroProps = {
  project: Project;
};

/**
 * Full-bleed case-study banner. Owns a scroll-track ref spanning its own
 * height so a real .glb model (Toyota's Supra) can start as a bare cyan
 * wireframe and materialize into the finished, textured car as the reader
 * scrolls through it — the schematic-to-product reveal is the "evolution"
 * story, not just a static hero shot. Projects without a model3d field
 * ignore the progress value entirely (ProjectMedia only forwards it to
 * Model3DViewer).
 */
export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  return (
    <div ref={heroRef} className="relative">
      <ProjectMedia
        project={project}
        alt={`${project.name} preview`}
        hero
        className="rounded-none"
        progress={scrollYProgress}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-scrim/95 via-scrim/20 to-transparent" />

      <div className="absolute inset-x-0 top-0 px-6 pt-6">
        <Link
          href="/#work"
          className="state-layer hud-glass inline-flex items-center gap-2 rounded-hud px-3 py-1.5 font-mono text-label-lg text-cyan"
        >
          <ArrowLeft size={16} aria-hidden />
          BACK_TO_SELECTED_WORKS
        </Link>
      </div>

      <Reveal className="absolute inset-x-0 bottom-0 px-6 pb-10">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-label-lg tracking-[0.15em] text-cyan/80 uppercase">
            CASE_FILE // {project.client} · {project.category} · {project.year}
          </p>
          <h1 className="mt-2 font-display text-display-sm text-white md:text-display-md">{project.name}</h1>
          <p className="mt-3 max-w-2xl text-title-md text-white/80">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag} className="border-cyan/30 bg-cyan/10 text-white">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
