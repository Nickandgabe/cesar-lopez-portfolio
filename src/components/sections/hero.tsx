"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DeviceFrameCard } from "@/components/motion/device-frame-card";
import { getProjectBySlug } from "@/content/projects";

// Only Toyota has real preview imagery today (poster + gallery) — the other
// two projects are still placeholder-only in content/projects.ts. Rather
// than block the rebuild on real screenshots, Toyota is featured center
// with the real image and the other two get simple typographic placeholder
// cards, swappable for real images the moment they're available. See
// PROJECT_LOG "Content gap" note.
const FEATURED_SLUG = "toyota-virtual-auto-show";
const SIDE_SLUGS = ["att-digital-transformation", "invited-club-golf"];

function PlaceholderScreen({ client, category }: { client: string; category: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center"
      style={{
        backgroundImage:
          "linear-gradient(160deg, var(--color-cyan-glow), var(--color-panel-high) 60%, var(--color-purple-glow))",
      }}
    >
      <p className="text-label-md uppercase tracking-wide text-ink-dim">{category}</p>
      <p className="font-display text-title-md text-ink">{client}</p>
    </div>
  );
}

/** Centered hero built from scratch around a floating device-card
 * composition — replaces every earlier iteration (console/HUD sidebar,
 * clickable brain node-graph, WebGL energy ring). No canvas, no
 * post-processing, no HDR/Bloom risk: the "alive" feeling comes entirely
 * from DeviceFrameCard's CSS-transform idle float + pointer tilt. */
export function Hero() {
  const featured = getProjectBySlug(FEATURED_SLUG);
  const sides = SIDE_SLUGS.map((slug) => getProjectBySlug(slug)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-void px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
        className="relative z-0 mx-auto max-w-4xl text-center"
      >
        <p className="text-label-md uppercase tracking-[0.15em] text-ink-dim">Product Design &amp; Systems Architecture</p>
        <h1
          className="mt-4 font-display font-bold text-ink [text-wrap:balance]"
          style={{ fontSize: "clamp(2.75rem, 1.7rem + 4.5vw, 6rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
        >
          <span className="block">Complex systems,</span>
          <span className="block text-ink-dim">made effortless.</span>
        </h1>
      </motion.div>

      <div
        className="relative z-[1] flex w-full max-w-4xl items-end justify-center"
        style={{ marginTop: "-2.5rem", gap: "1rem" }}
      >
        {sides[0] && (
          <div className="hidden sm:block" style={{ transform: "translateY(2.5rem) rotate(-6deg)" }}>
            <DeviceFrameCard
              width="clamp(120px, 16vw, 192px)"
              height="clamp(160px, 21vw, 256px)"
              floatDuration={6.5}
              floatDelay={0.2}
              floatY={10}
              floatRotate={2}
            >
              <PlaceholderScreen client={sides[0].client} category={sides[0].category} />
            </DeviceFrameCard>
          </div>
        )}

        {featured?.poster && (
          <div className="relative z-[1]">
            <DeviceFrameCard
              width="clamp(224px, 26vw, 288px)"
              height="clamp(288px, 34vw, 384px)"
              floatDuration={7.5}
              floatY={14}
              floatRotate={1.5}
            >
              <Image
                src={featured.poster}
                alt={`${featured.name} preview`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 768px) 320px, 240px"
                priority
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "1rem" }}
              >
                <p className="text-label-lg font-medium" style={{ color: "#fff" }}>{featured.client}</p>
                <p className="text-label-md" style={{ color: "rgba(255,255,255,0.7)" }}>{featured.category}</p>
              </div>
            </DeviceFrameCard>
          </div>
        )}

        {sides[1] && (
          <div className="hidden sm:block" style={{ transform: "translateY(3.5rem) rotate(5deg)" }}>
            <DeviceFrameCard
              width="clamp(112px, 14vw, 176px)"
              height="clamp(144px, 19vw, 240px)"
              floatDuration={7}
              floatDelay={0.5}
              floatY={10}
              floatRotate={2}
            >
              <PlaceholderScreen client={sides[1].client} category={sides[1].category} />
            </DeviceFrameCard>
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0, 0, 1] }}
        className="relative z-[1] mt-10 flex flex-col items-center gap-6 sm:mt-14"
      >
        <p className="max-w-lg text-center text-body-lg text-ink-dim">
          A decade turning fragmented enterprise complexity into cohesive, scalable products — bridging UX
          strategy and front-end execution.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-label-lg font-medium text-void transition-transform duration-200 hover:scale-[1.03]"
          >
            View Work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-hud-line-strong bg-transparent px-7 py-3 text-label-lg font-medium text-ink transition-colors duration-200 hover:bg-panel"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
