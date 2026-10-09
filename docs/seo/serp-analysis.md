# SERP & Competitor Analysis: AJ Creationz (UK)

Prepared 9 October 2026 using the Ajcreationz SEO Operating Playbook v6.0 (Sections 3, 8, 9), the SEO Content Playbook v7.0 (Sections 3, 4, 7) and the No-Tool Audit Playbook v2.0 (Sections 1, 4, 5).

Evidence labels: **OBSERVED** (seen in a dated search result), **RESEARCH** (third-party claim, directional), **OPERATING STANDARD** (our recommended workflow), **HYPOTHESIS** (to test), **LIMITED CONFIDENCE** (could not be fully verified).

---

## 0. Read this first: limits of this analysis

| Limit | Effect |
|---|---|
| Search was run through a **US-based search tool**, not a UK browser. | UK result order, local packs, "People also ask" boxes and ad blocks were **not observed**. Treat all result lists as *which sites appear for UK-worded queries*, not as ranked positions. **LIMITED CONFIDENCE.** |
| This environment's network policy **blocked fetching competitor pages** (and our own live domain). | I could not read competitors' headings, word counts, schema or Core Web Vitals. What follows about page structure comes only from search-result titles and summaries. **LIMITED CONFIDENCE.** |
| No keyword-volume or difficulty data (no Search Console or paid tool). | Query priorities are based on commercial intent and SERP shape, not volume. |
| Our own live site could not be crawled. | The on-site notes in Section 6 come from the repository code, not a live crawl. |

**To close these gaps (about 45 minutes):** run each query in Section 3 in an incognito UK browser, record the top 10, screenshot the People Also Ask box and local pack, and open the top 3 competitor pages to record H1/H2s and word count. The templates in Section 8 are set up for this.

---

## 1. What the SERPs look like (OBSERVED, US search tool, 9 Oct 2026)

Across all eight service queries, the same three result types dominate:

1. **Agency directories**: Sortlist, DesignRush, Gartner's agency directory, Clutch-style listings. They appeared for brand identity, Shopify, WordPress, video editing, Google Ads and Meta ads queries.
2. **"Best agencies" listicles**, almost all published by agencies that rank themselves. Examples: Softomate (GoHighLevel), Seahawk Media (WordPress), The Social Shepherd and Tenet (Google Ads), Prowess Journal (SEO).
3. **Agency service pages**, often location-led ("London Shopify design agency", "Web design Birmingham").

**Implications**

- **RESEARCH:** Directories and listicles occupy much of the page. Winning a spot against them means being more specific (platform, sector or location) than a generic "best agency" list, and getting *listed* on the directories that rank.
- **HYPOTHESIS:** For a new agency domain, the quickest early wins are long-tail and cost-led queries ("how much does X cost UK") where the ranking pages are agency blog posts and guides rather than directories.
- The SERPs for "WordPress agency" and "Shopify agency" returned different sets of sites, so they should be separate pages (done: see Section 4).
- Price guides ("how much does X cost UK") appeared for every service, and every one was published by a vendor. That is a gap we can fill with clearly sourced ranges (done on-page).

---

## 2. Competitor set (OBSERVED in results; claims are the competitors' own)

| Service | Competitors surfaced | Type | Notes |
|---|---|---|---|
| Brand identity | Fabrik Brands, Agency UK, Brainiac Media | Agency guides / pages | Directory pages (Sortlist, Gartner, Hello Darwin) also present. Typical price band quoted on Sortlist: £2,000–£10,000 for smaller agencies. |
| Shopify | Web Tonic, We Make Websites, Webpop Design, Velstar, 67 Commerce, Create8, Folio3, CartCoders | Agency pages + directories | Many lead with **Shopify Plus partner** status and brand counts. Web Tonic claims 500+ Shopify brands (its own claim). |
| WordPress | Finn Partners (London), 6B Digital, Wbcom Designs, Nicho Media, Seahawk Media | Agency pages + directories | Mostly location- or "top agencies" content. |
| Video editing | LOCALiQ, Kapibara Social, Superstore Media, Pepper Agency, ProfileTree | Agencies + subscription service | **Subscription-style editing** (Kapibara: monthly plan, unlimited revisions) is a distinct model. |
| SEO | The SEO Works, Reboot Online, Search Expert, Cloudswitched, Impression, Koozai, ClickSlice (local) | Agencies + listicles | "Small business" modifier is common. Prowess Journal list is a ranking listicle. |
| Google Ads | The Social Shepherd, Push Group, NOVI Digital, DPOM, Growth Agency, Circus PPC, Tenet | Agencies + listicles | **Google Partner / Premier Partner** is the dominant trust signal. |
| Meta ads | Finsbury Media, LOCALiQ, Web Tonic, VKNG Digital, Priority Pixels (guide), Aware Digital | Agencies + guide | Priority Pixels guide stresses Conversions API and UK GDPR/PECR. |
| GoHighLevel | Softomate Solutions (many pages), Marc Andrews review, Fiverr freelancers | Vendor pages | Softomate owns most GHL-UK results, with many near-duplicate city pages. |

**Direct competitors for AJ Creationz's size and positioning** (small UK full-service studios): Applied (Huddersfield), Create8 (Stockport), The SEO Works, Nicho Media, Search Expert, Kapibara Social.

---

## 3. Search query map

Priority: **P1** = head term for a service page we now publish; **P2** = supporting query for the same page (answer in the page); **P3** = needs its own reference or blog page (planned, not yet written).

### Brand identity
| Query | Intent | Target | Priority |
|---|---|---|---|
| brand identity agency UK | Commercial | `/services/brand-identity` | P1 |
| branding agency for small business | Commercial | same | P2 |
| logo design cost UK / how much does branding cost UK | Informational + commercial | same (pricing section) | P2 |
| brand guidelines what to include | Informational | Blog | P3 |
| rebrand vs refresh | Informational | Blog | P3 |

### Website development
| Query | Intent | Target | Priority |
|---|---|---|---|
| website development agency UK / web design agency UK | Commercial | `/services/website-development` | P1 |
| WordPress web design agency UK | Commercial | `/services/wordpress-web-design` | P1 |
| Shopify web design agency UK / Shopify agency UK | Commercial | `/services/shopify-web-design` | P1 |
| custom website development UK | Commercial | `/services/custom-website-development` | P1 |
| how much does a website cost UK | Informational | pillar pricing section + blog | P2 / P3 |
| how much does Shopify cost UK | Informational | Shopify page pricing | P2 |
| Shopify vs WordPress / WooCommerce | Comparison | Reference page | P3 |
| website migration without losing SEO | Informational | Blog | P3 |

### Video editing
| Query | Intent | Target | Priority |
|---|---|---|---|
| video editing services UK | Commercial | `/services/video-editing` | P1 |
| social media video editing agency | Commercial | same | P2 |
| reels / TikTok editing service | Commercial | same | P2 |
| how much does video editing cost UK | Informational | same (pricing) | P2 |
| video editing subscription UK | Commercial | Reference page (offer decision needed) | P3 |
| video ad creative for Meta | Informational | Blog | P3 |

### SEO and growth
| Query | Intent | Target | Priority |
|---|---|---|---|
| SEO agency UK / SEO agency for small business | Commercial | `/services/seo-growth` | P1 |
| local SEO agency UK | Commercial | Reference page | P3 |
| how much does SEO cost UK | Informational | same (pricing) | P2 |
| technical SEO audit | Commercial | Reference page | P3 |
| SEO for AI search / AI Overviews | Informational | Blog | P3 |

### Paid ads
| Query | Intent | Target | Priority |
|---|---|---|---|
| PPC agency UK | Commercial | `/services/meta-google-ads` | P1 |
| Google Ads agency UK | Commercial | `/services/google-ads-management` | P1 |
| Meta ads agency UK / Facebook ads agency UK | Commercial | `/services/meta-ads-management` | P1 |
| Google Ads vs Facebook ads | Comparison | pillar section; Blog | P2 / P3 |
| Meta Conversions API setup | Informational | Blog | P3 |
| Performance Max explained | Informational | Blog | P3 |

### GoHighLevel CRM
| Query | Intent | Target | Priority |
|---|---|---|---|
| GoHighLevel agency UK | Commercial | `/services/gohighlevel-crm` | P1 |
| GoHighLevel setup / GHL consultant UK | Commercial | same | P2 |
| GoHighLevel vs HubSpot | Comparison | same (section); Reference page | P2 / P3 |
| GoHighLevel UK GDPR / SMS UK | Informational | Reference page | P3 |
| GoHighLevel pricing UK | Informational | same (pricing) | P2 |

---

## 4. Page architecture (pillar to reference), per the Content Playbook

**Pillar pages** (own the head term and convert): brand-identity, website-development, video-editing, seo-growth, meta-google-ads, gohighlevel-crm.

**Reference pages published now** (each owns one narrower commercial intent; each links up to its pillar and is linked from it):
- `/services/wordpress-web-design`, `/services/shopify-web-design`, `/services/custom-website-development` (parent: website-development)
- `/services/google-ads-management`, `/services/meta-ads-management` (parent: meta-google-ads)

**Cannibalisation check (Content Playbook 4.3):** the pillar targets "website development agency UK" / "PPC agency UK"; each child targets a platform- or channel-specific head term that returned a *different* set of competitors in the SERP. The pillar summarises and links; the child goes deep. Keep it that way: do not add platform-specific pricing and process to the pillar.

**Still to be written (planned reference and blog pages).** Each needs its own non-commodity element before drafting:

| Page | Type | Parent | Information-gain idea |
|---|---|---|---|
| Shopify vs WordPress: which to choose | Reference | website-development | A decision checklist with scored criteria from real builds |
| How much does a website cost in the UK | Blog | website-development | Our own cost breakdown by scope |
| Website migration SEO checklist | Blog | website-development | Our redirect-mapping template |
| Local SEO for UK service businesses | Reference | seo-growth | A worked Google Business Profile audit |
| Technical SEO audit: what we check | Reference | seo-growth | Our audit checklist |
| SEO for AI search: what to do and not do | Blog | seo-growth | Observed AI citations for a fixed prompt set |
| Google Ads vs Meta Ads | Blog | meta-google-ads | Decision tree by business type |
| Meta Conversions API explained | Blog | meta-ads-management | Setup walkthrough with screenshots |
| GoHighLevel vs HubSpot for UK service businesses | Reference | gohighlevel-crm | Cost model by team size |
| GoHighLevel and UK GDPR/PECR | Reference | gohighlevel-crm | Consent workflow template (legal review required) |
| Brand guidelines: what to include | Blog | brand-identity | Our guidelines template |
| Reels editing: hooks and safe zones | Blog | video-editing | Annotated before/after edits |
| Case studies (3 existing clients) | Reference | by service | Real outcomes, with client permission |

---

## 5. Gap analysis: where we can credibly differ (HYPOTHESES to test)

1. **Transparent, sourced pricing.** Every competitor surfaced sells the service they are quoting prices for. We published ranges with named sources and an explicit "not our quote" caveat, which is more trustworthy and answers the cost queries directly.
2. **One team across the funnel.** Few competitors combine brand, site, video, ads, SEO and CRM. The pillar pages link these into a loop (brand to site to ads to CRM). This helps topical authority and conversion.
3. **Honest platform advice.** Competitors push their own platform. Our pages say when *not* to choose us or a platform (custom builds, GoHighLevel vs HubSpot).
4. **UK compliance detail.** Only the Meta guide and one GoHighLevel vendor addressed UK GDPR/PECR. We mention it on the ads and CRM pages.

**Gaps we cannot yet close (honest list):**
- **Proof.** Competitors lead with client counts, partner badges (Google Premier, Shopify Plus) and case studies. We have three portfolio items and no verified badges. Case studies, reviews and any real partner status should be added as soon as they exist. Do not claim badges you do not hold.
- **Authority.** New domain, few links and no directory listings. See Section 7.
- **Local pages.** Competitors rank on city names. We do not yet know AJ Creationz's base or target cities.

---

## 6. On-site audit notes (from repository code, not a live crawl; LIMITED CONFIDENCE)

| Area | Status |
|---|---|
| Crawlability | `robots.ts` and `sitemap.ts` exist; sitemap now lists all 11 service pages plus core pages. |
| Titles / descriptions | Service pages use unique, keyword-led titles (44–57 chars) and descriptions (143–156 chars). Home, About, Work and Contact have short, generic metadata. |
| Structured data | Organization/ProfessionalService and WebSite on every page; Service, BreadcrumbList and FAQPage on service pages. (FAQ rich results are deprecated, so the FAQ markup is harmless but gives no SERP feature.) |
| Headings | One H1 per service page, H2 per sub-intent. Home, Work and Contact use section headings that may lack a true H1; check. |
| Rendering | Pages are statically generated, which is good for crawlability. |
| Performance | Heavy client-side animation, 3D and custom cursor on the homepage. **Needs a PageSpeed / Core Web Vitals check** on the live URL (OPERATING STANDARD). |
| Domain mismatch | Site config uses `ajcreationz.co.uk`; the mailbox you gave is `@ajcreationz.co`. Make sure one canonical domain is used and the other redirects. |
| Not verified | Live indexing, Search Console, GA4, backlinks, review profiles, Google Business Profile. |

---

## 7. Next actions

**Before launch (blocking)**
1. Add a **named author** with a short bio to service pages (Content Playbook 2.4). I did not invent one.
2. Add the **four images per page** (photoreal, alt text 110–120 characters). Briefs are not written yet; I can draft them.
3. Replace the placeholder privacy and terms text after legal review.
4. Confirm the **primary domain** (.co.uk vs .co) and base city.

**Within 30 days**
5. Verify the site in **Google Search Console** and Bing Webmaster Tools; submit the sitemap; install GA4.
6. Create and complete a **Google Business Profile** and consistent business details (NAP) everywhere.
7. Get listed on the directories that actually ranked: Sortlist, DesignRush, Clutch.
8. Collect **3–5 real client reviews** and turn the three portfolio items into case studies.
9. Run the **UK incognito SERP check** and Core Web Vitals test, then update this document.

**Within 90 days**
10. Publish the highest-value planned pages (Section 4), starting with the cost guides and the platform comparison.
11. Refresh pricing ranges quarterly; they come from third-party guides and will date.

---

## 8. Templates for the manual UK SERP pass

For each query in Section 3, record:

```
Query:
Date / location / device:
Top 10 (URL | type: agency / directory / listicle / guide):
Ads present (Y/N, count):
Local pack (Y/N):
AI Overview present (Y/N), cited sources:
People Also Ask questions:
Top 3 pages: H1 | H2s | word count | pricing shown? | proof used | schema
Our target page:
Gap / angle:
```

---

## Sources (search results consulted 9 October 2026)

- Brand identity: [Fabrik Brands](https://fabrikbrands.com/insights/branding/best-branding-agencies-in-london), [Sortlist UK brand identity](https://www.sortlist.co.uk/s/brand-identity/united-kingdom-gb?page=2), [Whito branding costs](https://whito.co.uk/research/branding-design-costs-uk/), [Design Cloud](https://designcloud.app/blog/graphic-design-cost-uk)
- Shopify: [Web Tonic](https://www.webtonic.io/locations/london-shopify-design), [DesignRush UK Shopify](https://www.designrush.com/agency/profile/shopify-agency-uk), [Startups.co.uk Shopify pricing](https://startups.co.uk/websites/ecommerce/shopify-pricing/), [Project Cost Estimator](https://projectcostestimator.com/cost/shopify/uk)
- WordPress: [Seahawk Media](https://seahawkmedia.com/wordpress/find-top-wordpress-design-agencies-uk-in-2024/), [Startups.co.uk website cost](https://startups.co.uk/how-much-does-a-website-cost/), [ProfileTree](https://profiletree.com/uk-website-design-costs/)
- Video: [LOCALiQ](https://localiq.co.uk/digital-marketing-services/video-production/video-editing), [Sortlist video editing UK](https://www.sortlist.co.uk/s/video-editing/united-kingdom-gb), [Videotto](https://www.videotto.com/blog/how-much-does-video-editing-cost-uk-2026), [Solohourly](https://solohourly.com/rates/video-editor-rates-in-united-kingdom)
- SEO: [Prowess Journal](https://prowess.org.uk/top-uk-seo-agencies/), [Whitehat SEO pricing](https://whitehat-seo.co.uk/blog/seo-costs-uk), [Epic Edits](https://epicedits.co.uk/blog/how-much-does-seo-cost-uk/)
- Google Ads: [Priority Pixels](https://prioritypixels.co.uk/insights/google-ads-agencies-uk-comparison/), [Social Shepherd](https://thesocialshepherd.com/blog/google-ads-agencies-uk), [Sortlist Google Ads UK](https://www.sortlist.co.uk/s/google-adwords/united-kingdom-gb)
- Meta ads: [Priority Pixels Meta guide](https://prioritypixels.co.uk/insights/choosing-meta-ads-agency/), [LOCALiQ Facebook ads](https://localiq.co.uk/digital-marketing-services/paid-social/facebook)
- GoHighLevel: [Softomate GHL UK](https://www.softomatesolutions.com/gohighlevel-agency-uk/), [Softomate GHL vs HubSpot UK](https://www.softomatesolutions.com/blog/gohighlevel-vs-hubspot-uk/), [Softr comparison](https://softr.io/blog/gohighlevel-vs-hubspot)

Pricing figures on the site come from these third-party pages, most published by vendors. They are indicative only and are labelled as such on each page.
