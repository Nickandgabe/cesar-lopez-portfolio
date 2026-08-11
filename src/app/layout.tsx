import type { Metadata } from "next";
import { Roboto, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MAINTENANCE_MODE } from "@/config/site-mode";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://cesarlopez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cesar Lopez — Senior Product Design Leader & Systems Architect",
    template: "%s — Cesar Lopez",
  },
  description:
    "Transforming massive enterprise complexity into unified, highly scalable digital ecosystems.",
  openGraph: {
    title: "Cesar Lopez — Senior Product Design Leader & Systems Architect",
    description:
      "Transforming massive enterprise complexity into unified, highly scalable digital ecosystems.",
    url: SITE_URL,
    siteName: "Cesar Lopez",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cesar Lopez — Senior Product Design Leader & Systems Architect",
    description:
      "Transforming massive enterprise complexity into unified, highly scalable digital ecosystems.",
  },
  ...(MAINTENANCE_MODE ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // The blocking theme script below sets data-theme on this element
      // before React hydrates, based on localStorage/system preference.
      // React can't know that value during SSR, so without this it flags a
      // (harmless, expected) hydration mismatch on every load.
      suppressHydrationWarning
    >
      <head>
        {/* Blocking (not next/script) — must run before first paint to set
            data-theme on <html> before CSS resolves color tokens, otherwise
            the page flashes the wrong theme for a frame on every load. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-on-background">
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            {MAINTENANCE_MODE ? (
              <main className="flex-1">{children}</main>
            ) : (
              <>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </>
            )}
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
