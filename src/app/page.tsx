import { Hero } from "@/components/sections/hero";
import { ComingSoon } from "@/components/sections/coming-soon";
import { MAINTENANCE_MODE } from "@/config/site-mode";

// Narrative, ValueProps, and SelectedWorks were removed from the homepage;
// Hero is a self-contained centered section with its own CTAs to /work and
// /#contact. Their component files are stubbed as dead code rather than
// deleted (sandbox couldn't delete files on the mounted drive) — see the
// stub comment in each file.
export default function Home() {
  if (MAINTENANCE_MODE) return <ComingSoon />;

  return <Hero />;
}
