import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-on-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionConfig reducedMotion="user">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
