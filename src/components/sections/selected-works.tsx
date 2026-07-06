import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/content/projects";

export function SelectedWorks() {
  return (
    <section id="work" className="border-t border-outline-variant px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-headline-md text-on-surface md:text-headline-lg">
            Selected Works
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link href={`/work/${project.slug}`} className="block h-full">
                <Card
                  variant={project.flagship ? "elevated" : "outlined"}
                  interactive
                  className="flex h-full flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    {project.flagship && (
                      <Chip variant="assist" className="border-transparent bg-tertiary-container text-on-tertiary-container">
                        Flagship
                      </Chip>
                    )}
                    <ArrowUpRight
                      size={20}
                      aria-hidden
                      className="ml-auto shrink-0 text-on-surface-variant"
                    />
                  </div>

                  <div>
                    <p className="text-label-lg text-on-surface-variant">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-1 font-display text-title-lg text-on-surface">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-body-md text-on-surface-variant">{project.summary}</p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Chip key={tag} className="text-label-md">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
