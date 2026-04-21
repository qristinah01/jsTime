"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Opens the user's email client with a prefilled message
    window.location.href = `mailto:hello@kristine.design?subject=Project%20inquiry&body=From%3A%20${encodeURIComponent(email)}%0A%0A`;
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="section-padding-x bg-bg-dark text-text-on-dark py-[160px] md:py-[200px] xl:py-[224px]"
    >
      <div className="flex flex-col items-center text-center gap-10 max-w-[1100px] mx-auto">
        <Reveal>
          <span className="font-mono text-eyebrow-mono uppercase text-text-on-dark-dim">
            ·&nbsp;&nbsp;Availability
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="type-display-cta">
            Two projects per quarter.
            <br />
            Both should be interesting.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-body-large text-text-on-dark-dim max-w-[640px]">
            Product design for SaaS and iGaming — structured interfaces,
            measurable outcomes. Intro call lasts 20 minutes.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 sm:rounded-full sm:border sm:border-border-on-dark sm:p-1.5 w-full sm:w-auto mt-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="bg-transparent px-6 py-4 sm:py-3 rounded-full sm:rounded-none border border-border-on-dark sm:border-none
                         text-body-default text-text-on-dark placeholder:text-text-on-dark-dim
                         focus:outline-none focus:border-text-on-dark/30
                         min-w-[280px]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-bg-base text-text-primary rounded-full px-6 py-4 sm:py-3
                         text-ui-button hover:bg-white transition-colors duration-180 ease-standard"
            >
              {submitted ? "Email opened ✓" : "Book a 20-min intro call"}
              <span>→</span>
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-body-default text-text-on-dark-dim">
            No decks, no hard sell, no follow-up emails.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 pt-12 font-mono text-meta-label uppercase text-text-on-dark-dim">
            <div className="flex items-center gap-3">
              <span>Found me on Upwork?</span>
              <a
                href="#"
                className="text-text-on-dark hover:opacity-80 transition-opacity duration-180"
              >
                Message me there →
              </a>
            </div>
            <span className="hidden md:block h-4 w-px bg-border-on-dark" />
            <div className="flex items-center gap-3">
              <span>Prefer email?</span>
              <a
                href="mailto:hello@kristine.design"
                className="text-text-on-dark hover:opacity-80 transition-opacity duration-180"
              >
                hello@kristine.design
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
