"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type KineticTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
};

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const word = {
  hidden: { opacity: 0, y: "0.5em", rotateX: 40 },
  visible: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const },
  },
};

export function KineticText({ text, className, delay = 0, as = "h1" }: KineticTextProps) {
  const MotionTag = motion[as];
  const words = text.split(" ");

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={container}
      className={cn("[perspective:1000px]", className)}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="inline-block [transform-style:preserve-3d] will-change-transform"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
