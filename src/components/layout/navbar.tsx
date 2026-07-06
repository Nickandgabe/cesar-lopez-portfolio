import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/#work", label: "Selected Works" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Primary">
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
              className="state-layer rounded-m3-sm px-4 py-2 text-label-lg text-on-surface-variant hover:text-on-surface"
            >
              {link.label}
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
    </header>
  );
}
