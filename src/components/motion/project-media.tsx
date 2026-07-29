import type { MotionValue } from "framer-motion";
import { ImageSequenceViewer } from "@/components/motion/image-sequence-viewer";
import { VideoStage } from "@/components/motion/video-stage";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";
import { Model3DViewer } from "@/components/motion/model-3d-viewer";
import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  alt: string;
  className?: string;
  /** Skip the interactive 3D viewer even if project.model3d is set — for contexts like small grid cards where an orbit-drag canvas would fight the card's own pointer interactions (e.g. TiltCard). Falls through to poster/frames/video instead. */
  disable3d?: boolean;
  /** Render the 3D/image stage as a tall full-bleed case-study hero instead of a boxed grid-card preview. */
  hero?: boolean;
  /** Scroll progress (0→1) driving the 3D model's wireframe→materialized reveal. Only consumed when the resolved media is a real .glb (Model3DViewer); ignored otherwise. */
  progress?: MotionValue<number>;
};

/**
 * Single fallback-priority resolver for a project's media stage: model3d →
 * frames (≥2) → video → poster → gradient placeholder. Adding any one field
 * to a `Project` entry changes what renders here with no other code changes.
 */
export function ProjectMedia({ project, alt, className, disable3d, hero, progress }: ProjectMediaProps) {
  if (project.model3d && !disable3d) {
    return <Model3DViewer src={project.model3d} poster={project.poster} alt={alt} className={className} hero={hero} progress={progress} />;
  }

  if (project.frames && project.frames.length > 1) {
    return <ImageSequenceViewer frames={project.frames} poster={project.poster} alt={alt} className={className} hero={hero} />;
  }

  if (project.video) {
    return <VideoStage src={project.video} poster={project.poster} alt={alt} className={className} hero={hero} />;
  }

  if (project.poster) {
    return <ImageSequenceViewer poster={project.poster} alt={alt} className={className} hero={hero} />;
  }

  return <GradientPlaceholder seed={project.slug} label={alt} className={className} hero={hero} />;
}
