import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { valueProps } from "@/content/values";

export function ValueProps() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-headline-md text-on-surface md:text-headline-lg">
            Core Value Proposition
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card
                variant="elevated"
                className="group flex h-full flex-col gap-4 transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-m3-md bg-primary-container text-on-primary-container transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="font-display text-title-lg text-on-surface">{title}</h3>
                <p className="text-body-md text-on-surface-variant">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
