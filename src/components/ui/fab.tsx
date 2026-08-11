import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type FabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  label?: string;
  size?: "regular" | "small";
};

export function Fab({ icon, label, size = "regular", className, ...props }: FabProps) {
  return (
    <button
      type="button"
      className={cn(
        "state-layer inline-flex items-center justify-center gap-3 rounded-hud bg-cyan-glow text-cyan border border-hud-line shadow-hud-3 transition-shadow hover:shadow-hud-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan",
        size === "regular" ? "h-14 min-w-14" : "h-10 min-w-10",
        label ? "px-5" : size === "regular" ? "w-14" : "w-10",
        className,
      )}
      {...props}
    >
      {icon}
      {label && <span className="text-label-lg font-medium">{label}</span>}
    </button>
  );
}
