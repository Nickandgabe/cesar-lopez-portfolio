"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/#work", label: "Selected Works" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      animate={{ height: scrolled ? 60 : 72 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className={cn(
        "sticky top-0 z-40 flex items-center border-b transition-colors duration-300",
        scrolled ? "glass border-outline-variant shadow-elevation-1" : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <Link
          href="/"
          className="state-layer rounded-m3-sm px-2 py-1 font-display text-title-lg text-on-surface"
        >
          Cesar Lopez
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group state-layer relative rounded-m3-sm px-4 py-2 text-label-lg text-on-surface-variant hover:text-on-surface"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/#contact" variant="filled" className="hidden sm:inline-flex">
            Get in touch
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
