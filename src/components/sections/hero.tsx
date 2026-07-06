"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Magnetic } from "@/components/motion/magnetic";
import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { KineticText } from "@/components/motion/kinetic-text";
import { Marquee } from "@/components/motion/marquee";
import { projects } from "@/content/projects";

const clients = Array.from(new Set(projects.map((p) => p.client)));

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
      <CursorSpotlight />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <div className="relative z-[1] mx-auto flex max-w-4xl flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
        >
          <Chip variant="assist" glass>
            Senior Product Design Leader
          </Chip>
        </motion.div>

        <KineticText
          as="h1"
          delay={0.1}
          text="Senior Product Design Leader & Systems Architect"
          className="font-display text-display-sm text-on-surface md:text-display-md lg:text-display-lg"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl text-title-lg font-normal text-on-surface-variant"
        >
          Transforming massive enterprise complexity into unified, highly scalable digital
          ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Button href="#work" variant="filled">
              View Selected Works
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href="#about" variant="outlined">
              About Me
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-[1] mt-16 border-t border-outline-variant pt-6"
      >
        <p className="mb-3 px-1 text-label-md tracking-wide text-on-surface-variant uppercase">
          Trusted by
        </p>
        <Marquee durationSeconds={18}>
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-title-lg text-on-surface-variant/70 transition-colors hover:text-on-surface"
            >
              {client}
            </span>
          ))}
        </Marquee>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="state-layer absolute bottom-4 left-1/2 z-[1] hidden -translate-x-1/2 rounded-m3-full p-2 text-on-surface-variant md:inline-flex"
      >
        <ArrowDown size={20} aria-hidden />
      </a>
    </section>
  );
}
