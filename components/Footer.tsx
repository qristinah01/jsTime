const sitemap = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#cta" },
];

const elsewhere = [
  { label: "Upwork", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Read.cv", href: "#" },
];

const direct = [
  { label: "hello@kristine.design", href: "mailto:hello@kristine.design" },
  { label: "Yerevan, AM", href: null },
];

export function Footer() {
  return (
    <footer className="section-padding-x pt-16 pb-12 bg-bg-base border-t border-border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-16 mb-12">
        <div className="flex flex-col gap-2">
          <span className="text-[15px] font-semibold">Kristine Hakobyan</span>
          <span className="text-body-default text-text-secondary">
            Product designer.
            <br />
            SaaS · iGaming · CRO.
          </span>
        </div>

        <FooterColumn label="Sitemap" items={sitemap} />
        <FooterColumn label="Elsewhere" items={elsewhere} />
        <FooterColumn label="Direct" items={direct} />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8 border-t border-border-hairline font-mono text-meta-label uppercase text-text-secondary">
        <span>© 2026 Kristine Hakobyan</span>
        <span>Designed in Yerevan</span>
      </div>
    </footer>
  );
}

type Item = { label: string; href: string | null };

function FooterColumn({ label, items }: { label: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-meta-label uppercase text-text-secondary">
        {label}
      </span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="text-body-default hover:text-text-secondary transition-colors duration-180 ease-standard"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-body-default text-text-secondary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
