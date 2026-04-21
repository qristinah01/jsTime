"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

interface Project {
  id: string;
  image: string;
  tag: string;
  year: string;
  title: string;
  body: string;
  href: string;
  size: "lg" | "sm";
}

const projects: Project[] = [
  {
    id: "01",
    image: "/images/work-learning-galaxy.jpg",
    tag: "SaaS · Education",
    year: "2025",
    title: "The Learning Galaxy.",
    body: "Structured UX system for a 1st-grade learning platform — IA, hierarchy, and components end-to-end.",
    href: "#",
    size: "lg",
  },
  {
    id: "02",
    image: "/images/work-bet-slip.jpg",
    tag: "iGaming · Real-time",
    year: "2024",
    title: "BET SLIP UX.",
    body: "Bet slips, odds-change states, cashier flows — clarity under pressure.",
    href: "#",
    size: "sm",
  },
  {
    id: "03",
    image: "/images/work-landing.jpg",
    tag: "Landing · CRO",
    year: "2024",
    title: "High-converting landing.",
    body: "Hierarchy, CTA placement, friction cuts. Copy tuned with the founder.",
    href: "#",
    size: "sm",
  },
];

function Card({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const isLg = project.size === "lg";
  return (
    <motion.a
      href={project.href}
      className="group block"
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-black/5"
        style={{ aspectRatio: isLg ? "16/10" : "16/10" }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={reduce ? {} : { scale: 1.03 }}
          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={isLg ? "(max-width: 768px) 100vw, 62vw" : "(max-width: 768px) 100vw, 32vw"}
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="pt-6 flex flex-col gap-3">
        <div className="flex items-center justify-between font-mono text-tag-category uppercase text-text-secondary">
          <span>{project.tag}</span>
          <span>{project.year}</span>
        </div>
        <h3 className={isLg ? "text-heading-card font-display" : "text-[22px] leading-7 tracking-[-0.01em] font-display"}>
          {project.title}
        </h3>
        <p className="text-body-default text-text-secondary max-w-prose">
          {project.body}
        </p>
        <span className="inline-flex items-center gap-2 text-ui-button mt-2 group-hover:gap-3 transition-all duration-180 ease-standard">
          View case study
          <span className="transition-transform duration-180 ease-standard group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.a>
  );
}

export function Work() {
  const [lg, sm1, sm2] = projects;

  return (
    <section id="work" className="section-padding-x section-padding-y grain-overlay">
      <Reveal className="flex flex-col gap-4 mb-16">
        <span className="font-mono text-eyebrow-mono uppercase text-text-secondary">
          ·&nbsp;&nbsp;01&nbsp;&nbsp;&nbsp;Selected Work
        </span>
        <h2 className="type-display-section">Selected work.</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-[1.85fr_1fr] gap-8 md:gap-6">
        <Reveal>
          <Card project={lg} />
        </Reveal>
        <div className="flex flex-col gap-8 md:gap-10">
          <Reveal delay={0.08}>
            <Card project={sm1} />
          </Reveal>
          <Reveal delay={0.16}>
            <Card project={sm2} />
          </Reveal>
        </div>
      </div>

      <Reveal className="flex justify-center mt-16">
        <a
          href="#"
          className="text-ui-button border-b border-border-hairline pb-1 hover:border-text-primary transition-colors duration-180 ease-standard"
        >
          See the full archive
        </a>
      </Reveal>
    </section>
  );
}
