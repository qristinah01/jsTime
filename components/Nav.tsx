"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#cta" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 section-padding-x transition-all duration-320 ease-standard
        ${scrolled
          ? "bg-bg-base/85 backdrop-blur-xl border-b border-border-hairline"
          : "bg-transparent border-b border-transparent"}
      `}
    >
      <div className="flex h-[72px] md:h-[100px] items-center justify-between">
        <a href="#" className="text-[15px] font-semibold tracking-tight">
          Kristine Hakobyan
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ui-nav text-text-secondary hover:text-text-primary transition-colors duration-180 ease-standard"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full border border-border-hairline px-4 py-2 text-tag-category
                     hover:border-text-primary/40 transition-colors duration-320 ease-standard"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-600" />
          </span>
          <span className="uppercase">Available for projects</span>
        </a>
      </div>
    </header>
  );
}
