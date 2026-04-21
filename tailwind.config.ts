import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "810px",   // Tablet
      lg: "1024px",
      xl: "1440px",  // Desktop
    },
    extend: {
      colors: {
        bg: {
          base: "#F5F3EE",
          warm: "#F0EDE6",
          light: "#FAF8F3",
          dark: "#171619",
        },
        text: {
          primary: "#171619",
          secondary: "#5C5A55",
          "on-dark": "#F5F3EE",
          "on-dark-dim": "rgba(245,243,238,0.6)",
        },
        border: {
          hairline: "#E8E4DA",
          "on-dark": "rgba(245,243,238,0.1)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        // Display sizes — scale per breakpoint in components
        "display-hero": ["7rem", { lineHeight: "6.25rem", letterSpacing: "-0.05em", fontWeight: "400" }],    // 112/100
        "display-cta": ["6.5rem", { lineHeight: "6.75rem", letterSpacing: "-0.035em", fontWeight: "300" }],  // 104/108
        "display-section": ["4.5rem", { lineHeight: "4.75rem", letterSpacing: "-0.02em", fontWeight: "300" }], // 72/76
        "heading-about": ["3.25rem", { lineHeight: "3.625rem", letterSpacing: "-0.02em", fontWeight: "300" }], // 52/58
        "heading-card": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.02em", fontWeight: "400" }],      // 40/48
        "heading-principle": ["1.5rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em", fontWeight: "400" }], // 24/30
        "body-large": ["1.125rem", { lineHeight: "1.875rem", letterSpacing: "-0.004em" }],  // 18/30
        "body-default": ["0.9375rem", { lineHeight: "1.5rem", letterSpacing: "-0.003em" }], // 15/24
        "body-card": ["0.875rem", { lineHeight: "1.375rem", letterSpacing: "-0.003em" }],   // 14/22
        "ui-nav": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.005em", fontWeight: "500" }], // 14
        "ui-button": ["0.9375rem", { lineHeight: "1.25rem", letterSpacing: "-0.004em", fontWeight: "500" }], // 15
        "eyebrow-mono": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],        // 12
        "eyebrow-hero": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],     // 11
        "meta-label": ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],        // 10
        "tag-category": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.12em", fontWeight: "500" }], // 11
      },
      spacing: {
        "page-x-desktop": "8rem",  // 128
        "page-x-tablet": "3rem",   // 48
        "page-x-mobile": "1.5rem", // 24
        "section-y-desktop": "12rem", // 192
        "section-y-tablet": "8rem",   // 128
        "section-y-mobile": "6rem",   // 96
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "180": "180ms",
        "320": "320ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
