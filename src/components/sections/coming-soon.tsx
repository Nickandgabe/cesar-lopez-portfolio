"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { KineticText } from "@/components/motion/kinetic-text";
import { Magnetic } from "@/components/motion/magnetic";
import { ThemeToggle } from "@/components/theme/theme-toggle";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden focusable="false">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function ComingSoon() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-6">
      <CursorSpotlight />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <header className="relative z-[1] flex items-center justify-between py-6">
        <span className="font-display text-title-lg text-on-surface">Cesar Lopez</span>
        <ThemeToggle />
      </header>

      <main className="relative z-[1] flex flex-1 flex-col items-start justify-center gap-6 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Chip variant="assist" glass>
            Portfolio refresh in progress
          </Chip>
        </motion.div>

        <KineticText
          as="h1"
          delay={0.1}
          text="Something new is on the way."
          className="max-w-3xl font-display text-display-sm text-on-surface md:text-display-md"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-xl text-title-lg font-normal text-on-surface-variant"
        >
          I&apos;m rebuilding this site around real project work — case studies, product
          visuals, and a few 3D pieces. Check back soon, or reach out directly in the meantime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0, 0, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="mailto:hello@example.com"
              className="state-layer inline-flex items-center gap-2 rounded-m3-full bg-primary px-6 py-2.5 text-label-lg font-medium text-on-primary"
            >
              <Mail size={18} aria-hidden />
              Get in touch
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="state-layer inline-flex items-center gap-2 rounded-m3-full border border-outline px-6 py-2.5 text-label-lg font-medium text-on-surface"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </Magnetic>
        </motion.div>
      </main>

      <footer className="relative z-[1] py-6 text-body-sm text-on-surface-variant">
        © {year} Cesar Lopez
      </footer>
    </div>
  );
}
