"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/cn";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";

type ImageSequenceViewerProps = {
  /** Ordered frame URLs captured around the subject — drag horizontally to scrub through them. */
  frames?: string[];
  /** Fallback static image when no frame sequence is available yet. */
  poster?: string;
  alt: string;
  className?: string;
  /** Use a taller, full-bleed frame (no rounded corners/aspect cap) for a case-study hero. */
  hero?: boolean;
};

const SENSITIVITY = 6;

export function ImageSequenceViewer({ frames = [], poster, alt, className, hero }: ImageSequenceViewerProps) {
  const frameClass = hero
    ? "relative h-[70vh] min-h-[480px] w-full overflow-hidden"
    : "relative aspect-[4/3] w-full overflow-hidden rounded-hud";
  const [frameIndex, setFrameIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartFrame = useRef(0);

  const hasSequence = frames.length > 1;

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (!hasSequence) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartFrame.current = frameIndex;
    setDragging(true);
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!hasSequence || !dragging) return;
    const delta = e.clientX - dragStartX.current;
    const framesMoved = Math.round(delta / SENSITIVITY);
    const next = (((dragStartFrame.current + framesMoved) % frames.length) + frames.length) % frames.length;
    setFrameIndex(next);
  }

  function handlePointerUp() {
    setDragging(false);
  }

  if (hasSequence) {
    return (
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={cn(frameClass, "touch-none select-none bg-charcoal", dragging ? "cursor-grabbing" : "cursor-grab", className)}
      >
        <Image
          src={frames[frameIndex]}
          alt={alt}
          fill
          draggable={false}
          className="pointer-events-none object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-hud bg-scrim/60 px-3 py-1.5 font-mono text-label-sm text-cyan">
          <RotateCw size={14} aria-hidden />
          Drag to rotate
        </div>
      </div>
    );
  }

  if (poster) {
    return (
      <div className={cn(frameClass, "bg-charcoal", className)}>
        <Image src={poster} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
    );
  }

  return <GradientPlaceholder seed={alt} label={alt} className={className} hero={hero} />;
}
