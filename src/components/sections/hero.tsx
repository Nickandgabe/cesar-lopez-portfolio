"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Chip variant="assist">Senior Product Design Leader</Chip>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="font-display text-display-sm text-on-surface md:text-display-md lg:text-display-lg"
        >
          Senior Product Design Leader &amp; Systems Architect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl text-title-lg font-normal text-on-surface-variant"
        >
          Transforming massive enterprise complexity into unified, highly scalable digital
          ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <Button href="#work" variant="filled">
            View Selected Works
          </Button>
          <Button href="#about" variant="outlined">
            About Me
          </Button>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="state-layer absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-m3-full p-2 text-on-surface-variant md:inline-flex"
      >
        <ArrowDown size={20} aria-hidden />
      </a>
    </section>
  );
}
