import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "assist" | "filter";
  selected?: boolean;
  children: ReactNode;
};

export function Chip({ variant = "assist", selected, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "state-layer inline-flex items-center gap-1.5 rounded-m3-sm border px-3 py-1.5 text-label-lg",
        selected
          ? "border-transparent bg-secondary-container text-on-secondary-container"
          : "border-outline-variant bg-surface-container-low text-on-surface-variant",
        variant === "filter" && "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
