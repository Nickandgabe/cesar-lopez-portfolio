import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSES = {
  elevated: "bg-surface-container-low shadow-elevation-1",
  filled: "bg-surface-container-highest",
  outlined: "bg-surface border border-outline-variant",
} as const;

type Variant = keyof typeof VARIANT_CLASSES;

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  interactive?: boolean;
  padding?: boolean;
  children: ReactNode;
};

export function Card({
  variant = "elevated",
  interactive,
  padding = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-m3-lg transition-shadow duration-200",
        padding && "p-6",
        VARIANT_CLASSES[variant],
        interactive && "state-layer cursor-pointer hover:shadow-elevation-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
