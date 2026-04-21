import { Reveal } from "./Reveal";

const principles = [
  {
    n: "001",
    title: "Structure first.",
    body: "Hierarchy and information architecture before any visual decision.",
  },
  {
    n: "002",
    title: "Conversion-led.",
    body: "Every screen is designed to guide action and reduce friction.",
  },
  {
    n: "003",
    title: "iGaming craft.",
    body: "Betting flows, odds states, and real-time decisions under pressure.",
  },
  {
    n: "004",
    title: "Landings that land.",
    body: "Clear messaging, strong CTAs, and measurable outcomes.",
  },
  {
    n: "005",
    title: "Systems that hold.",
    body: "Tokens, components, and handoff engineers don't rename.",
  },
  {
    n: "006",
    title: "Clarity, every call.",
    body: "If a pixel can't earn its place, it goes. Restraint reads as confidence.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="section-padding-x section-padding-y bg-bg-light grain-overlay"
    >
      <Reveal className="flex flex-col gap-4 mb-16">
        <span className="font-mono text-eyebrow-mono uppercase text-text-secondary">
          ·&nbsp;&nbsp;03&nbsp;&nbsp;&nbsp;Approach
        </span>
        <h2 className="type-display-section">Approach.</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <div className="flex flex-col gap-3 pt-5 border-t border-border-hairline">
              <span className="font-mono text-eyebrow-mono text-text-secondary">
                {p.n}
              </span>
              <h3 className="text-heading-principle font-display">{p.title}</h3>
              <p className="text-body-default text-text-secondary">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
