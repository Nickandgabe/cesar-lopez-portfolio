import { Reveal } from "@/components/motion/reveal";

const NARRATIVE = `Leveraging a foundational background in Industrial Design, I approach UX/UI design through a lens of strict operational rigor and structural logic. With over a decade of experience, I specialize in leading cross-functional teams to untangle fragmented systems and build cohesive, end-to-end digital products that scale globally. My hybrid expertise in product management and front-end development allows me to seamlessly bridge the gap between high-level UX strategy and complex technical implementation.`;

export function Narrative() {
  return (
    <section id="about" className="border-t border-outline-variant bg-surface-container-low px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-display text-headline-sm leading-relaxed text-on-surface md:text-headline-md">
            {NARRATIVE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
