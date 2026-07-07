import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { ProjectMedia } from "@/components/motion/project-media";
import { FlagshipProjectShowcase } from "@/components/sections/flagship-showcase";
import { projects } from "@/content/projects";

export function SelectedWorks() {
  const flagshipProject = projects.find((p) => p.flagship);
  const otherProjects = projects.filter((p) => !p.flagship);

  return (
    <section id="work" className="border-t border-outline-variant">
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <h2 className="font-display text-headline-md text-on-surface md:text-headline-lg">
            Selected Works
          </h2>
        </Reveal>
      </div>

      {flagshipProject && <FlagshipProjectShowcase project={flagshipProject} />}

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <TiltCard className="group h-full rounded-m3-lg">
                <Link href={`/work/${project.slug}`} className="block h-full">
                  <Card variant="outlined" interactive padding={false} className="flex h-full flex-col gap-4 overflow-hidden">
                    <div className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                      <ProjectMedia
                        project={project}
                        alt={`${project.name} preview`}
                        className="aspect-[16/10] rounded-none"
                      />
                      <span className="glass pointer-events-none absolute left-3 top-3 rounded-m3-sm px-3 py-1.5 text-label-md text-on-surface">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-6 pt-2">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-label-lg text-on-surface-variant">
                          {project.category} · {project.year}
                        </p>
                        <ArrowUpRight
                          size={20}
                          aria-hidden
                          className="ml-auto shrink-0 text-on-surface-variant transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>

                      <h3 className="font-display text-title-lg text-on-surface">{project.name}</h3>

                      <p className="text-body-md text-on-surface-variant">{project.summary}</p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Chip key={tag} className="text-label-md">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
