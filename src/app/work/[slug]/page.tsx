import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ComingSoon } from "@/components/sections/coming-soon";
import { MAINTENANCE_MODE } from "@/config/site-mode";
import { projects, getProjectBySlug } from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  if (MAINTENANCE_MODE) return <ComingSoon />;

  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="state-layer inline-flex items-center gap-2 rounded-m3-sm px-2 py-1 text-label-lg text-on-surface-variant"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to selected works
        </Link>

        <Reveal className="mt-8">
          <p className="text-label-lg text-on-surface-variant">
            {project.client} · {project.category} · {project.year}
          </p>
          <h1 className="mt-2 font-display text-display-sm text-on-surface">{project.name}</h1>
          <p className="mt-4 text-title-md text-on-surface-variant">{project.role}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </Reveal>

        {project.metrics && (
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <Card key={metric.label} variant="filled" className="text-center">
                  <p className="font-display text-headline-md text-primary">{metric.value}</p>
                  <p className="mt-1 text-body-sm text-on-surface-variant">{metric.label}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-14 flex flex-col gap-12">
          <Reveal delay={0.15}>
            <section>
              <h2 className="font-display text-headline-sm text-on-surface">The Challenge</h2>
              <p className="mt-3 text-body-lg text-on-surface-variant">{project.challenge}</p>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section>
              <h2 className="font-display text-headline-sm text-on-surface">The Approach</h2>
              <ul className="mt-3 flex flex-col gap-3">
                {project.approach.map((step, i) => (
                  <li key={i} className="flex gap-3 text-body-lg text-on-surface-variant">
                    <span className="mt-1 shrink-0 text-label-md font-medium text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.25}>
            <section>
              <h2 className="font-display text-headline-sm text-on-surface">The Outcome</h2>
              <p className="mt-3 text-body-lg text-on-surface-variant">{project.outcome}</p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
