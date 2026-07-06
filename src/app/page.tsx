import { Hero } from "@/components/sections/hero";
import { Narrative } from "@/components/sections/narrative";
import { ValueProps } from "@/components/sections/value-props";
import { SelectedWorks } from "@/components/sections/selected-works";

export default function Home() {
  return (
    <>
      <Hero />
      <Narrative />
      <ValueProps />
      <SelectedWorks />
    </>
  );
}
