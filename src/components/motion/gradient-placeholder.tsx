import { cn } from "@/lib/cn";
import { seedFromString } from "@/lib/prng";

type GradientPlaceholderProps = {
  /** Deterministic seed (e.g. project slug) — same seed always renders the same look. */
  seed: string;
  label?: string;
  className?: string;
  /** Use a taller, full-bleed frame (no rounded corners/aspect cap) for a case-study hero. */
  hero?: boolean;
};

const COLOR_PAIRS = [
  ["var(--color-cyan-glow)", "var(--color-purple-glow)"],
  ["var(--color-purple-glow)", "var(--color-cyan-glow)"],
  ["var(--color-cyan-glow)", "var(--color-cyan-glow)"],
] as const;

/** Upgraded stand-in for real project media — a deterministic, per-project gradient rather than a generic "coming soon" box. */
export function GradientPlaceholder({ seed, label, className, hero }: GradientPlaceholderProps) {
  const hash = seedFromString(seed);
  const angle = 15 + (hash % 31);
  const [from, to] = COLOR_PAIRS[hash % COLOR_PAIRS.length];

  return (
    <div
      role="img"
      aria-label={label ?? "Case study visual placeholder"}
      className={cn(
        "animate-gradient-drift relative flex w-full items-start justify-center overflow-hidden bg-charcoal pt-10",
        hero ? "h-[70vh] min-h-[480px] rounded-none" : "aspect-[4/3] rounded-hud",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, var(--color-panel-high), ${to})`,
        backgroundSize: "200% 200%",
      }}
    >
      <div aria-hidden className="hud-grid pointer-events-none absolute inset-0 opacity-60" />
      <span className="relative font-mono text-hud-xs text-ink-dim uppercase">Case study visuals in production</span>
    </div>
  );
}
