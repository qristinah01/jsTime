# Kristine Hakobyan — Portfolio

Editorial portfolio site built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Drop your images into public/images/
#    (see public/images/README.md for exact filenames)

# 3. Run locally
npm run dev

# Opens at http://localhost:3000
```

## Deploy to Vercel (free, ~2 minutes)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kristine-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. Click **Add New → Project → Import** your repo
4. Click **Deploy** (no config needed — Next.js is auto-detected)
5. Done. You get a `your-project.vercel.app` URL instantly

To connect a custom domain: Vercel dashboard → Project → Settings → Domains.

## Project structure

```
app/
├── layout.tsx       # Root layout, fonts, metadata
├── page.tsx         # Home (assembles all sections)
└── globals.css      # Tailwind + custom utilities

components/
├── Nav.tsx          # Sticky nav with scroll blur
├── Hero.tsx         # Hero — text + portrait
├── Strip.tsx        # Expertise marquee
├── Work.tsx         # Selected work — 1 big + 2 small cards
├── About.tsx        # About — portrait + text + meta
├── Approach.tsx     # 6 principles grid
├── CTA.tsx          # Dark CTA with email form
├── Footer.tsx       # Footer — tagline + 3 link columns
└── Reveal.tsx       # Scroll fade-in wrapper (shared)

public/images/       # Your photos go here
```

## Customization

### Edit copy
All text lives inline in each component file. Search for what you want to change.

### Edit colors
`tailwind.config.ts` → `theme.extend.colors`. Current palette is a warm neutral system
(`#F5F3EE`, `#F0EDE6`, `#FAF8F3`) with `#171619` for dark sections.

### Edit type sizes
`tailwind.config.ts` → `theme.extend.fontSize`. The `display-*` sizes use `clamp()` in
`app/globals.css` for responsive scaling.

### Email form
Currently uses `mailto:` — opens the user's email client when submitted. To use a real
backend (Resend, Formspree, etc.), edit `components/CTA.tsx` → `handleSubmit`.

### Case studies
The links on each Work card go to `#`. Create a route at `app/work/[slug]/page.tsx`
when you're ready to build case study pages.

## Design system reference

| Token | Value | Use |
|---|---|---|
| `bg-base` | `#F5F3EE` | page + Work + Footer |
| `bg-warm` | `#F0EDE6` | About section |
| `bg-light` | `#FAF8F3` | Approach section |
| `bg-dark` | `#171619` | CTA section |
| Display font | Fraunces (Light/Regular) | headlines |
| Body font | Inter (Regular/Medium/SemiBold) | body + UI |
| Mono font | JetBrains Mono (Regular) | eyebrows + meta |

## Performance

Lighthouse score target: **95+ on Performance**. The build uses:

- Next.js App Router with streaming
- Google Fonts via `next/font` (zero layout shift)
- `next/image` for automatic image optimization (AVIF + WebP)
- CSS-based animations where possible; Framer Motion only for scroll reveals
- Respects `prefers-reduced-motion`

## License

All yours.
