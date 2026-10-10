# AJ Creationz website

Website for **AJ Creationz** at [ajcreationz.co.uk](https://ajcreationz.co.uk): a digital agency serving UK and US businesses (websites, brand identity, SEO, Meta and Google Ads, video editing, GoHighLevel CRM). The main studio site is [ajcreationz.co](https://ajcreationz.co) and has different content.

**Stack:** Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Framer Motion, Lenis. Hosted on Hostinger as a Node.js app, auto-deployed from GitHub `main`.

> This repo uses a version of Next.js with breaking changes. Read `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

## Getting started

```bash
nvm use            # Node 22 (see .nvmrc)
npm ci
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

| Script                 | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Local dev server                              |
| `npm run build`        | Production build (webpack)                    |
| `npm run start`        | Serve the production build                    |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | TypeScript, no emit                           |
| `npm run format`       | Prettier, write                               |
| `npm run format:check` | Prettier, check only (used in CI)             |
| `npm run check`        | Lint + typecheck + build, run before a commit |

## Project structure

```
src/
  app/                  Routes (App Router) and route-level metadata
    layout.tsx          Root layout: fonts, global metadata, Organization/WebSite JSON-LD, GA4, verification tag
    page.tsx            Home
    about/ contact/ work/ privacy/ terms/
    services/           Index page and [slug] detail pages (generated from content/services.ts)
    api/contact/        Contact form endpoint (SMTP)
    sitemap.ts robots.ts opengraph-image.tsx icon.png
  components/
    layout/             Site chrome: navbar, footer, page-shell, cursor, smooth scroll, scroll helpers
    sections/           Page sections: hero, home-overview, services, work, case-studies, about, testimonials, contact
    ui/                 Small reusable pieces: magnetic, marquee, count-up, tilt-card
    seo/                JsonLd (structured-data script)
  content/              Page content as data: services.ts (11 service pages), projects.ts (case studies)
  config/site.ts        Site-wide constants: name, URL, email, team, markets, verification token
  hooks/                React hooks
  lib/                  Pure helpers (utils.ts)
docs/seo/               SEO audit, SERP analysis, blog topics, Search Console and sitemap guide
public/images/          Logos and work images
.github/                CI workflow, PR and issue templates, Dependabot, CODEOWNERS
```

Where things go:

- **Change copy on a service page** -> `src/content/services.ts`. The page template in `src/app/services/[slug]/page.tsx` renders it.
- **Add a case study** -> `src/content/projects.ts` and an image in `public/images/work/`.
- **Change the email, team or tagline** -> `src/config/site.ts`.
- **Add a page** -> new folder in `src/app/`, then add it to `src/app/sitemap.ts` and bump `SITE.contentUpdated`.

## Content and SEO rules

- One H1 per page. Titles 50-60 characters, meta descriptions 140-155.
- Headings, titles and URLs never mention the UK or the US; the audience is stated in body copy, meta descriptions, pricing notes and structured data.
- Every page needs a unique canonical (set via `alternates.canonical`).
- Prices on the site are market figures with named sources, not quotes.
- Strategy, SERP analysis and blog plans live in `docs/seo/`.

## Environment variables

See `.env.example`. Set the same names in Hostinger's environment variables for production, then rebuild (variables starting with `NEXT_PUBLIC_` are baked in at build time).

| Variable                   | Purpose                                                           |
| -------------------------- | ----------------------------------------------------------------- |
| `SMTP_HOST/PORT/USER/PASS` | Hostinger SMTP for the contact form                               |
| `CONTACT_TO`               | Inbox that receives contact-form messages                         |
| `GOOGLE_SITE_VERIFICATION` | Optional override for the Search Console tag (default is in code) |
| `NEXT_PUBLIC_GA_ID`        | GA4 measurement ID; analytics is off until set                    |

## Workflow and deployment

- `main` is production. Hostinger builds and deploys every push to `main` (Node 24 runtime, `npm run build`, `npm run start`).
- Work on a branch, open a pull request, and let CI pass (format, lint, typecheck, build) before merging. See `CONTRIBUTING.md`.
- After a deploy, check the live pages and `/sitemap.xml`.
- Search Console: the verification meta tag is rendered on every page. Do not remove it. Sitemap to submit: `https://ajcreationz.co.uk/sitemap.xml`. Details in `docs/seo/search-console-and-sitemap.md`.
