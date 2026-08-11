import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "assist" | "filter";
  selected?: boolean;
  glass?: boolean;
  children: ReactNode;
};

export function Chip({ variant = "assist", selected, glass, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "state-layer inline-flex items-center gap-1.5 rounded-hud px-3 py-1.5 text-label-lg font-mono tracking-wide",
        glass
          ? "hud-glass text-ink"
          : selected
            ? "border border-hud-line-strong bg-purple-glow text-purple"
            : "border border-hud-line bg-panel text-ink-dim",
        variant === "filter" && "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
