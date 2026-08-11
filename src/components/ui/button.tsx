import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSES = {
  filled: "bg-cyan text-on-cyan shadow-hud-1 hover:shadow-hud-3",
  tonal: "bg-purple-glow text-purple border border-hud-line",
  outlined: "border border-hud-line-strong text-ink bg-transparent",
  text: "bg-transparent text-cyan",
  elevated: "bg-panel text-cyan shadow-hud-1 hover:shadow-hud-2",
} as const;

type Variant = keyof typeof VARIANT_CLASSES;

const BASE =
  "state-layer inline-flex items-center justify-center gap-2 rounded-hud px-6 py-2.5 text-label-lg font-medium tracking-wide transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:pointer-events-none disabled:opacity-[0.38]";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "filled", className, children, ...props }: ButtonProps) {
  const classes = cn(BASE, VARIANT_CLASSES[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
