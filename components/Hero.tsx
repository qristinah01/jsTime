"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const meta = [
  { label: "STATUS", value: "Available for Q3" },
  { label: "BASED", value: "Yerevan, AM" },
  { label: "EMAIL", value: "hello@kristine.design" },
];

const entrance = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay: i * 0.12,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export function Hero() {
  const reduce = useReducedMotion();
  const e = (i: number) => (reduce ? {} : entrance(i));

  return (
    <section className="relative pt-[100px] md:pt-[140px] grain-overlay">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,1.2fr)] gap-12 md:gap-0 items-center">
        {/* Left column */}
        <div className="section-padding-x md:pr-12 xl:pr-24 flex flex-col gap-8">
          <motion.div
            {...e(0)}
            className="flex items-center gap-3 text-text-secondary"
          >
            <span className="h-px w-8 bg-text-secondary/50" />
            <span className="font-mono text-eyebrow-hero uppercase">
              Kristine Hakobyan · Portfolio 2026
            </span>
          </motion.div>

          <motion.h1 {...e(1)} className="type-display-hero">
            Interfaces
            <br />
            that convert.
          </motion.h1>

          <motion.p
            {...e(2)}
            className="text-body-large text-text-secondary max-w-[520px]"
          >
            Product design for SaaS and iGaming. Structured interfaces,
            measurable outcomes.
          </motion.p>

          <motion.div {...e(3)} className="flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-primary">
              See selected work
              <span className="btn-primary-icon">→</span>
            </a>
            <a href="#cta" className="btn-ghost">
              hello@kristine.design
            </a>
          </motion.div>

          <motion.div
            {...e(4)}
            className="grid grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-border-hairline"
          >
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-mono text-meta-label uppercase text-text-secondary">
                  {m.label}
                </span>
                <span className="text-body-default">{m.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — portrait */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 1.02 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative aspect-[4/5] md:aspect-auto md:h-[920px] w-full overflow-hidden"
        >
          <Image
            src="/images/portrait.jpg"
            alt="Kristine Hakobyan"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
