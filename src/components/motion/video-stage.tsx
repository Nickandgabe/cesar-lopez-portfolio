"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";

type VideoStageProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

/** Looping muted background clip. Falls back to a gradient placeholder if the source fails to load. */
export function VideoStage({ src, poster, alt, className }: VideoStageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <GradientPlaceholder seed={alt} label={alt} className={className} />;
  }

  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-m3-lg bg-surface-container-highest", className)}>
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
