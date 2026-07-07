import { Hero } from "@/components/sections/hero";
import { Narrative } from "@/components/sections/narrative";
import { ValueProps } from "@/components/sections/value-props";
import { SelectedWorks } from "@/components/sections/selected-works";
import { ComingSoon } from "@/components/sections/coming-soon";
import { MAINTENANCE_MODE } from "@/config/site-mode";

export default function Home() {
  if (MAINTENANCE_MODE) return <ComingSoon />;

  return (
    <>
      <Hero />
      <Narrative />
      <ValueProps />
      <SelectedWorks />
    </>
  );
}
