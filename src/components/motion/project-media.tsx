import { ImageSequenceViewer } from "@/components/motion/image-sequence-viewer";
import { VideoStage } from "@/components/motion/video-stage";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";
import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  alt: string;
  className?: string;
};

/**
 * Single fallback-priority resolver for a project's media stage: frames (≥2)
 * → video → poster → gradient placeholder. Adding any one field to a
 * `Project` entry changes what renders here with no other code changes.
 */
export function ProjectMedia({ project, alt, className }: ProjectMediaProps) {
  if (project.frames && project.frames.length > 1) {
    return <ImageSequenceViewer frames={project.frames} poster={project.poster} alt={alt} className={className} />;
  }

  if (project.video) {
    return <VideoStage src={project.video} poster={project.poster} alt={alt} className={className} />;
  }

  if (project.poster) {
    return <ImageSequenceViewer poster={project.poster} alt={alt} className={className} />;
  }

  return <GradientPlaceholder seed={project.slug} label={alt} className={className} />;
}
