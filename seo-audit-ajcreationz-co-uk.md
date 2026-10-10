# SEO Audit — ajcreationz.co.uk (No-Tool Prospect Method, v2.0)

Audit date: 10 Oct 2026. Method: Ajcreationz No-Tool Audit Playbook v2.0.

## 0. Read this first: what could and couldn't be checked

| Item | Status |
|---|---|
| Live site `ajcreationz.co.uk` (and robots.txt / sitemap.xml) | **Not reachable from the audit environment** (DNS error: ENOTFOUND, from both curl and WebFetch). Nothing on the live domain was verified. |
| Source repo (`aj-uk-website`) | Audited in full. Production build run (`next build --webpack`) and the prerendered HTML inspected. Labelled **OBSERVED (build output)**. |
| Google search results | Run through a US-based search tool, not a UK-localised Google. They indicate who competes, not exact UK rankings. Single snapshot. Labelled **OBSERVED (single snapshot, US-geo tool)**. |
| PageSpeed Insights / CrUX / Rich Results Test | Not run (no live URL reachable). Core Web Vitals is **LIMITED CONFIDENCE**. |

Rule applied: none of the findings below are presented as live-site facts unless the evidence label says so. Please re-verify the "live" items once the domain resolves.

## 1. Executive summary

**Overall health score: about 31/100** (equal weights across the four assessable domains, since the playbook doesn't specify weights).
Technical/Core Web Vitals, Off-Site Presence and Measurement are LIMITED CONFIDENCE and are excluded. Their weight is redistributed proportionally across the four assessed domains.
No finding is confirmed CRITICAL, so the 59 cap is not triggered. That is only because the live site couldn't be inspected.

**Where you're lagging (top findings):**
1. **The site is configured for the wrong domain.** `metadataBase`, `og:url` and the OG/Twitter image URLs all point to `https://ajcreationz.com`. The site is `.co.uk`. No canonical tag is output at all.
2. **There is no robots.txt, no sitemap.xml and no structured data.** Both `/robots.txt` and `/sitemap.xml` return 404 in the production build, and there is no JSON-LD.
3. **It is a single page with no target keywords.** The H1 is "Ideas, engineered to move your audience." Services are 5 cards with one-line descriptions, and every CTA is `#contact`. There are no service pages, so nothing can rank for "web design agency [UK city]", "branding agency UK", and so on.
4. **There are no UK or local signals.** No address, phone number, UK city, Google Business Profile or UK-specific copy. The README says "US & UK audience", but nothing on the page says UK.
5. **There is no brand footprint in search.** Searching "AJ Creationz" returned no page for you, and results were polluted by similarly named businesses (AJ Creativez, AJ Digital Agency, AJ Creative Studios).
6. **There is no measurement.** No GA4/GTM tag in the rendered HTML (the playbook's tag-presence check only).

**Headline opportunity:** the UK small-business agency SERP is dominated by directories and "top agencies" listicles, plus small boutique studios. A site with proper service pages, a UK location, real case studies and a few directory listings can enter that set.

## 2. Scorecard

| # | Domain | Score | Confidence |
|---|---|---|---|
| 1 | Crawlability & Indexing | 45 | Good for the code. Live behaviour unverified. |
| 2 | Technical Health & CWV | — | LIMITED CONFIDENCE: no PSI/CrUX. Code risk noted below (three.js/WebGL, GSAP, Framer Motion, Lenis are all client-side). |
| 3 | On-Page & Content | 35 | Good |
| 4 | Architecture & Internal Linking | 30 | Good (small site, fully reviewed) |
| 5 | Off-Site Presence | — | LIMITED CONFIDENCE: no backlink data; SERP presence only (see §4) |
| 6 | Specialist: Local | 15 | Partial (no GBP access) |
| 7 | Measurement Integrity | — | LIMITED CONFIDENCE (tag presence only) |

Redistribution rule: domains 2, 5 and 7 are excluded and their weight is spread evenly over domains 1, 3, 4 and 6. Overall = (45 + 35 + 30 + 15) / 4 ≈ 31.

## 3. Prioritised findings

| # | Finding | Severity | Evidence | Impact | Recommendation | Effort |
|---|---|---|---|---|---|---|
| F1 | `metadataBase`, `og:url` and OG/Twitter image URLs point to `ajcreationz.com`, not `.co.uk`. No `<link rel="canonical">` is rendered. | **HIGH** | OBSERVED (`src/app/layout.tsx`; build HTML) | Social previews and URL resolution use the wrong domain. Search engines get no canonical signal, which risks duplicate/domain confusion if the `.com` ever resolves. | Set `metadataBase` to `https://ajcreationz.co.uk`, add `alternates.canonical: "/"`, and fix the OG URLs. | S |
| F2 | `/robots.txt` and `/sitemap.xml` both 404. | **HIGH** | OBSERVED (production build served locally) | No crawl guidance and no sitemap to submit to Search Console. | Add `src/app/robots.ts` and `src/app/sitemap.ts`. | S |
| F3 | The domain didn't resolve from the audit environment. | **HIGH (unverified)** | OBSERVED (DNS error) | If it doesn't resolve publicly, nothing is indexed. This may be a sandbox limit, but it must be checked. | Confirm DNS and SSL in Hostinger, then open the site from a normal browser. | S |
| F4 | One URL, no service/location/case-study pages. All nav links are in-page anchors and every CTA goes to `#contact`. | **HIGH** | OBSERVED (`page.tsx`, `navbar.tsx`; only `/` is built) | Only one page can rank, and its content is generic. | Create pages such as `/services/web-design`, `/services/branding`, `/services/seo`, `/work/[case-study]`, `/about`, `/contact`. | L |
| F5 | H1 and title contain no service or geography keywords. Title is "AJ Creationz — Creative & Digital Agency". H1 is a slogan. The `keywords` meta tag is ignored by Google. | **HIGH** | OBSERVED | Weak relevance for "web design agency UK" type queries. | Title e.g. "Web Design & Branding Agency | AJ Creationz" with a UK location or target market. Add a plain-language descriptor near the H1. | S |
| F6 | No UK/local signals: no address, phone, UK city, UK pricing/currency, Google Business Profile or `LocalBusiness`/`Organization` schema. | **HIGH** | OBSERVED (code) | No chance in "agency near me"/city queries. | Add NAP in footer/contact, schema, a GBP listing (if you have a UK presence that qualifies), and UK-specific copy. | M |
| F7 | Weak brand entity: "AJ Creationz" returned no site in the search I ran, and look-alike names crowd the results. Social links in the footer are `href="#"`. | **MEDIUM** | OBSERVED (single snapshot) | Branded searches won't reliably find you. | Create real social profiles and link them, and add `sameAs` in Organization schema. Claim directory profiles (see §5). | M |
| F8 | Trust claims are unsupported: "40+ brands launched", "5.0 average rating", "3+ years", testimonials with no links to real companies. | **MEDIUM** | OBSERVED (`hero.tsx`, `about.tsx`, `testimonials.tsx`) | Thin E-E-A-T. If any of this is placeholder content, remove it before launch. | Replace with verifiable case studies (client, problem, result), real linked reviews (Google/Trustpilot), and team names. | M |
| F9 | Work section has 4 images, each linking to `#contact`, with no case-study text. | **MEDIUM** | OBSERVED (`work.tsx`) | No indexable proof of work. | Build one page per project. | M |
| F10 | OG image is the logo (`logo-full.png`), not a 1200x630 share image. | **LOW** | OBSERVED | Poor link previews. | Add `opengraph-image`. | S |
| F11 | Heavy client-side stack (three.js hero scene, GSAP, Framer Motion, Lenis smooth scroll, custom cursor) on a one-page site. | **MEDIUM (unmeasured)** | OBSERVED (code; no CWV data) | Likely to hurt LCP/INP on mobile. This is a risk, not a measured result. | Run PageSpeed Insights on the live URL, lazy-load the 3D scene, and consider reduced-motion support. | M |
| F12 | No analytics or tag manager in the HTML. | **MEDIUM** | OBSERVED | No data on traffic or conversions. | Install GA4 and Search Console. Tracking-integrity check is the first engagement task. | S |
| F13 | Contact form has `onSubmit` handling, but I did not confirm where it posts (not checked end-to-end). | **LOW (unverified)** | OBSERVED (`contact.tsx`) | Leads could be silently lost. | Test a real submission. | S |

Positive: images have descriptive alt text, the HTML is server-prerendered (the headline and copy are in the HTML), there is a proper single H1, `lang="en"` is set, and the viewport meta is correct.

## 4. Live SERP snapshot

Conditions: Date 10 Oct 2026. Tool: web search (US-only), standard mode, no ads/local pack/AI Overview data captured. Not signed in. Query volumes unknown.
Result: **ajcreationz.co.uk (and the brand) did not appear in any of the results for the queries below.** Present as "not observed in this snapshot", not as a rank.

| Query | Types of results observed |
|---|---|
| web design agency UK | DesignRush profiles, Sortlist, listicles ("Top 5/8/9 web design agencies in the UK"), GrowthFolks |
| AJ Creationz digital agency | LinkedIn post (video production shop), AJ Creativez (logo.com), AJ Digital Agency (South Africa), AJ Creative Studios (NY) |
| "AJ Creationz" UK / ajcreationz.co.uk | Unrelated people and businesses |
| branding and web design agency UK for startups | Dribbble profile, DesignRush, The Modern Agency, Startups.co.uk |
| brand identity agency London small business | Semrush Agency Partners, Fabrik Brands, DesignRush, Gartner directory, Designmonks |
| SEO and web design agency for small businesses UK | DesignRush, GoodFirms, G2, Semrush directory, agency sites |
| creative digital agency UK brand identity social media | Sortlist, Cambridge Network, DesignRush, FreeIndex, LinkedIn |
| Next.js web design agency animated websites UK | Sortlist, StaticMania, Opace, GoodFirms |
| creative agency for ecommerce brands branding web design social media UK US | DesignRush, SE Ranking agencies, Gartner |
| social media creatives agency for DTC brands | Agency blogs/listicles (The Social Shepherd, Avenue Z), job listings |
| how much does a website cost UK agency | Agency blogs (Blue Whale Media, ProfileTree, Spotdev, Kwiboo, WebPop) |

**Takeaways:**
- Most commercial queries are won by **directories and listicles** (DesignRush, Sortlist, Semrush Agency Partners, GoodFirms, Gartner). Getting listed there is the quickest route to visibility.
- Cost queries are won by **agency blog content** ("how much does a website cost in the UK").
- Roughly 50% of the agencies surfaced are 2–10 person studios, which is your size class.
- One LinkedIn post describes "Ajcreationz" as an AI-powered video production agency (DTC/ecommerce, US/UK/CA/AU), which doesn't match the website's positioning (web, brand, SEO). Decide on one clear positioning and make site, LinkedIn and directories consistent.

## 5. Competitor snapshot

Confidence: OBSERVED (single snapshot). I did **not** open each competitor's landing page; the descriptions come from search summaries and directory listings, so treat them as leads to verify.

**Direct competitors (small UK creative/web studios):**

| Domain/Agency | Type | Seen for | Strength vs. you |
|---|---|---|---|
| Pick Me Creative Studio (London, 2 people, founded 2023) | Direct | creative / brand / social | Same size class. Clear service split, listed on Sortlist. |
| Bean Creative Marketing (Manchester & Huddersfield) | Direct | web design + SEO for small businesses | Has an `llms.txt`, UK locations, startups focus. |
| Brand Purist (London) | Direct | small-business branding | Clear positioning ("accessible branding"), government trade directory listing. |
| Russkin Bright (London) | Direct | startup branding + Webflow/Framer | Strategy-led positioning for startups. |
| Form Agency (Kent) | Direct | brand identity + social campaigns | Brand and social offer similar to yours. |
| Bitter Lemon Creative (Gloucestershire) | Direct | brand identity + digital | Established directory presence. |

**Aspirational (larger or award-style):** Fortnight Studio, Identify Digital (Wakefield), Tangent, Lighthouse London, KOTA, Cyber-Duck, Together (Nottingham), The Social Shepherd (social/paid, UK/US).

**Discovery intermediaries (rank above everyone; get listed):** DesignRush, Sortlist, Semrush Agency Partners, GoodFirms, Gartner/UpCity directory, FreeIndex, Cambridge Network, Dribbble, G2.

**What the leaders do better (plain terms):** clear niche (startups / small business / DTC), named services with their own pages, a city or region, directory profiles and reviews, published pricing guidance, and case studies with outcomes.

## 6. What a full audit would add

- Search Console: real index coverage, queries, impressions, and which URLs Google actually knows about.
- GA4: traffic, engagement and conversion tracking, plus data-quality checks.
- Paid crawler and backlink data: referring domains, anchor text and link risk (out of scope here; the off-site domain is LIMITED CONFIDENCE).
- UK-localised rank tracking and local pack/AI Overview observation.
- Measured Core Web Vitals (field data) on the live site.
- Verification of the live domain: DNS, SSL, redirects (`.com` vs `.co.uk`, www vs non-www).

## 7. Roadmap

**Now (this week):**
1. Confirm the `.co.uk` domain resolves over HTTPS, with one canonical host and redirects (F3).
2. Fix `metadataBase`/canonical/OG URLs (F1). Add `robots.ts` and `sitemap.ts` (F2).
3. Rewrite title/meta/H1 descriptor with service and UK targeting (F5).
4. Install GA4, and verify the site in Search Console and Bing Webmaster (F12).
5. Run PageSpeed Insights on the live URL (F11).

**Next (2–6 weeks):**
6. Build service pages (web design, branding, SEO, social) and 2–4 real case studies (F4, F9).
7. Add `Organization`/`LocalBusiness` schema with NAP and `sameAs`, plus UK contact details (F6, F7).
8. Replace placeholder trust claims with verifiable ones (F8). Claim profiles on Sortlist, DesignRush, GoodFirms, FreeIndex, Google Business Profile (if eligible).

**Later (quarter):**
9. Publish content for cost/comparison queries ("how much does a website cost in the UK", "web design vs. branding for startups") using the SEO Content Playbook page-type routing (pillar → reference → blog).
10. Build review and mention acquisition; repeat this SERP snapshot on a second date with UK-localised results.
