const expertise = [
  "UX / Product Design",
  "Landing Pages · CRO",
  "iGaming UX",
  "Design Systems",
];

export function Strip() {
  return (
    <section className="section-padding-x border-y border-border-hairline py-6">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-8">
        <span className="font-mono text-meta-label uppercase text-text-secondary shrink-0">
          Expertise
        </span>
        <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-2">
          {expertise.map((item) => (
            <span
              key={item}
              className="font-mono text-eyebrow-mono uppercase whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
