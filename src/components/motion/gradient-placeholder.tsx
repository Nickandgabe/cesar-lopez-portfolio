import { cn } from "@/lib/cn";

type GradientPlaceholderProps = {
  /** Deterministic seed (e.g. project slug) — same seed always renders the same look. */
  seed: string;
  label?: string;
  className?: string;
};

const COLOR_PAIRS = [
  ["var(--md-primary-container)", "var(--md-tertiary-container)"],
  ["var(--md-secondary-container)", "var(--md-tertiary-container)"],
  ["var(--md-primary-container)", "var(--md-secondary-container)"],
] as const;

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** Upgraded stand-in for real project media — a deterministic, per-project gradient rather than a generic "coming soon" box. */
export function GradientPlaceholder({ seed, label, className }: GradientPlaceholderProps) {
  const hash = hashString(seed);
  const angle = 15 + (hash % 31);
  const [from, to] = COLOR_PAIRS[hash % COLOR_PAIRS.length];

  return (
    <div
      role="img"
      aria-label={label ?? "Case study visual placeholder"}
      className={cn(
        "animate-gradient-drift relative flex aspect-[4/3] w-full items-start justify-center overflow-hidden rounded-m3-lg bg-surface-container-highest pt-10",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, var(--md-surface-container-highest), ${to})`,
        backgroundSize: "200% 200%",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <span className="relative text-label-md text-on-surface-variant">Case study visuals in production</span>
    </div>
  );
}
