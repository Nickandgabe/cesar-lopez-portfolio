import Link from "next/link";
import { Mail } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden focusable="false">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-headline-md text-on-surface">Let&apos;s build something unified.</h2>
            <p className="mt-2 max-w-md text-body-lg text-on-surface-variant">
              Open to conversations about design leadership, systems architecture, and
              enterprise product strategy.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="mailto:hello@example.com"
              className="state-layer inline-flex h-12 w-12 items-center justify-center rounded-m3-full border border-outline text-on-surface-variant"
              aria-label="Email"
            >
              <Mail size={20} aria-hidden />
            </Link>
            <Link
              href="https://www.linkedin.com"
              className="state-layer inline-flex h-12 w-12 items-center justify-center rounded-m3-full border border-outline text-on-surface-variant"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>

        <p className="mt-12 text-body-sm text-on-surface-variant">
          © {year} Cesar Lopez. Built with Next.js, Tailwind CSS, and Material Design 3 principles.
        </p>
      </div>
    </footer>
  );
}
