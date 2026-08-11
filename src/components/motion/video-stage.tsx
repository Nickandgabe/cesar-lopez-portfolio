"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";

type VideoStageProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  /** Use a taller, full-bleed frame (no rounded corners/aspect cap) for a case-study hero. */
  hero?: boolean;
};

/** Looping muted background clip. Falls back to a gradient placeholder if the source fails to load. */
export function VideoStage({ src, poster, alt, className, hero }: VideoStageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <GradientPlaceholder seed={alt} label={alt} className={className} hero={hero} />;
  }

  const frameClass = hero
    ? "relative h-[70vh] min-h-[480px] w-full overflow-hidden"
    : "relative aspect-[4/3] w-full overflow-hidden rounded-hud";

  return (
    <div className={cn(frameClass, "bg-charcoal", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
        onError={() => setErrored(true)}
        className="h-full w-full object-cover"
      >
        <source src={src} />
      </video>
    </div>
  );
}
