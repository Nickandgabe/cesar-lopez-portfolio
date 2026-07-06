"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";
import { cn } from "@/lib/cn";

type ImageSequenceViewerProps = {
  /** Ordered frame URLs captured around the subject — drag horizontally to scrub through them. */
  frames?: string[];
  /** Fallback static image when no frame sequence is available yet. */
  poster?: string;
  alt: string;
  className?: string;
};

const SENSITIVITY = 6;

export function ImageSequenceViewer({ frames = [], poster, alt, className }: ImageSequenceViewerProps) {
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
        className={cn(
          "relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-m3-lg bg-surface-container-highest",
          dragging ? "cursor-grabbing" : "cursor-grab",
          className,
        )}
      >
        <Image
          src={frames[frameIndex]}
          alt={alt}
          fill
          draggable={false}
          className="pointer-events-none object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-m3-full bg-scrim/60 px-3 py-1.5 text-label-sm text-white">
          <RotateCw size={14} aria-hidden />
          Drag to rotate
        </div>
      </div>
    );
  }

  if (poster) {
    return (
      <div className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-m3-lg bg-surface-container-highest", className)}>
        <Image src={poster} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-m3-lg bg-gradient-to-br from-primary-container via-surface-container-highest to-tertiary-container",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <span className="text-label-md text-on-surface-variant">Visual coming soon</span>
    </div>
  );
}
