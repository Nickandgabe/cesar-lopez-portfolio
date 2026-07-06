import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANT_CLASSES = {
  filled: "bg-primary text-on-primary shadow-elevation-0 hover:shadow-elevation-1",
  tonal: "bg-secondary-container text-on-secondary-container",
  outlined: "border border-outline text-on-surface bg-transparent",
  text: "bg-transparent text-primary",
  elevated: "bg-surface-container-low text-primary shadow-elevation-1 hover:shadow-elevation-2",
} as const;

type Variant = keyof typeof VARIANT_CLASSES;

const BASE =
  "state-layer inline-flex items-center justify-center gap-2 rounded-m3-full px-6 py-2.5 text-label-lg font-medium transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-[0.38]";

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
