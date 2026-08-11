import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/sections/case-study-hero";
import { CaseStudyTemplate } from "@/components/sections/case-study-template";
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
    <article className="bg-void">
      <CaseStudyHero project={project} />
      <CaseStudyTemplate project={project} />
    </article>
  );
}
