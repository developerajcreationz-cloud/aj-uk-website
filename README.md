# AJ Creationz — Website

Creative & digital agency site for AJ Creationz, built section by section with heavy scroll-based interaction and motion. Targets a US & UK audience.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — brand tokens (`--brand-lime`, `--brand-green`, `--brand-olive`, `--brand-black`, `--brand-cream`) defined in `src/app/globals.css`
- **Framer Motion** — component-level animation, scroll-linked transforms, magnetic buttons
- **GSAP + ScrollTrigger** — wired up and synced to Lenis, ready for scroll-driven scenes in upcoming sections
- **Lenis** — smooth/inertia scrolling (`src/components/smooth-scroll.tsx`)

## Project status

Built incrementally, section by section, so each piece can be reviewed live before moving to the next:

- [x] Global shell: smooth scroll, custom cursor, scroll progress bar, fonts, color tokens, SEO metadata
- [x] Navbar with full-screen animated menu overlay
- [x] Hero section (headline reveal, parallax blobs, magnetic CTAs, marquee, stats)
- [ ] Services
- [ ] Work / case studies
- [ ] About
- [ ] Testimonials
- [ ] Contact
- [ ] Footer (full)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Brand assets

Source logo lockup lives at `public/images/`:

- `logo-full.png` — full lockup (icon + wordmark), dark text, transparent background — used on light surfaces (navbar)
- `logo-full-white.png` — same lockup with white wordmark — for dark surfaces
- `logo-icon.png` — arch mark only, transparent background
- `logo-icon-square.png` — arch mark centered on a square canvas — source for `src/app/icon.png` (site favicon)

## Deploying on Hostinger

This repo is connected to Hostinger via GitHub for deployment.

1. In Hostinger's website/hosting panel, connect this GitHub repository and branch.
2. **Framework preset:** `Next.js`.
3. **Build command:** `npm run build`
4. **Start / run command:** `npm run start` (Next.js is deployed as a Node app, not static export — the project uses Next's built-in Node runtime)
5. **Node version:** 20.x or later (developed against Node 22)
6. **Install command:** `npm install`
7. No environment variables are required yet. When a contact form / CMS / analytics integration is added later, document required env vars here and add them in Hostinger's environment variables panel.

After each merge to the deployed branch, Hostinger should auto-build and redeploy. Verify the live URL after every section is added so the interaction/animation experience is checked in a real browser, not just locally.
