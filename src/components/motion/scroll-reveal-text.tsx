"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

type WordProps = {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function Word({ word, index, total, progress }: WordProps): ReactNode {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

/** Word-by-word opacity reveal scrubbed to scroll position, not viewport entry. */
export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <Word word={word} index={i} total={words.length} progress={scrollYProgress} />
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
