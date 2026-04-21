import Image from "next/image";
import { Reveal } from "./Reveal";

const aboutMeta = [
  { label: "BASED", value: "Yerevan, AM" },
  { label: "FOCUS", value: "UX / UI · CRO" },
  { label: "VERTICALS", value: "SaaS · iGaming" },
  { label: "AVAILABLE ON", value: "Upwork · Direct" },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding-x section-padding-y bg-bg-warm grain-overlay"
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-10 md:gap-20">
        {/* Monogram card / portrait */}
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E6E1D5]">
            <Image
              src="/images/portrait.jpg"
              alt="Kristine Hakobyan"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Text block */}
        <div className="flex flex-col gap-6 justify-center">
          <Reveal>
            <span className="font-mono text-eyebrow-mono uppercase text-text-secondary">
              ·&nbsp;&nbsp;02&nbsp;&nbsp;&nbsp;About
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="type-heading-about">
              Design as decisions, not decoration.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-body-large text-text-secondary max-w-prose">
              With 4+ years of experience across SaaS and iGaming, I design
              interfaces that reduce friction, strengthen hierarchy, and support
              conversation.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border-hairline">
              {aboutMeta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="font-mono text-meta-label uppercase text-text-secondary">
                    {m.label}
                  </span>
                  <span className="text-body-default">{m.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
