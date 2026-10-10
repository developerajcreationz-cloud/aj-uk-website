import type { Post } from "./types";

export const websiteMigrationSeoChecklist: Post = {
  slug: "website-migration-seo-checklist",
  title: "Website migration SEO checklist: keep your rankings",
  metaTitle: "Website Migration SEO Checklist and Redirect Map Template",
  metaDescription:
    "A website migration SEO checklist with a redirect map template, rules for 301s and redirect chains, and what to monitor after launch so traffic holds.",
  primaryKeyword: "website migration seo checklist",
  secondaryKeywords: [
    "website redesign seo",
    "redirect chains",
    "301 redirect map",
    "change domain without losing seo",
    "migrate wordpress to shopify seo",
    "site migration traffic loss",
  ],
  parent: "website-development",
  related: ["how-much-does-a-website-cost", "shopify-vs-wordpress"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  takeaways: [
    "A before, during and after checklist you can hand to whoever is building the new site",
    "A redirect map template with worked examples, including the chain mistake to avoid",
    "What to watch in Search Console and analytics for the first weeks",
  ],
  answer: [
    "A website migration SEO checklist protects the rankings and traffic you already have when you redesign a site, change platform or move to a new domain. The biggest single cause of lost traffic, according to several migration guides, is an incomplete or wrong redirect map: old URLs that do not point to their closest equivalent on the new site. The rest of the checklist is about recording a baseline before launch, keeping on-page elements intact, and monitoring afterward.",
    "This guide gives you the checklist in three stages and a redirect map template. Expect a short dip in rankings after launch even when everything is done well; schedule the move for a quieter period. If you are planning a rebuild, our [website development service](/services/website-development) includes this work, and our [website cost guide](/blog/how-much-does-a-website-cost) shows why it should be in the quote.",
  ],
  disclosure:
    "AJ Creationz builds and migrates websites. The practices below recur across independent guides from Seer Interactive, Priority Pixels, Focus Reactive and others.",
  sections: [
    {
      h2: "Before launch: record the baseline",
      blocks: [
        {
          type: "ol",
          items: [
            "**Crawl the old site** and export every URL, with its title, description, H1 and status code. This is your redirect map's starting list.",
            "**Export performance data**: Search Console queries and pages, analytics traffic and conversions by page, and any rank tracking you have. You cannot judge the migration without a before.",
            "**Mark your top pages**: the ones with the most traffic, links or conversions. These get checked by hand after launch.",
            "**Keep on-page elements**: titles, meta descriptions, headings, image alt text, structured data and internal links do not carry over automatically when a site is rebuilt on a new platform.",
            "**Block the staging site** from search so it does not get indexed, and remove the block at launch.",
          ],
        },
      ],
    },
    {
      h2: "The 301 redirect map: template and rules",
      blocks: [
        {
          type: "p",
          text: "A 301 redirect tells browsers and search engines that a page has moved permanently. Use a 301, not a 302, for permanent moves. Map every old URL to the closest equivalent new page, not to the homepage; guides report that mass redirects to the homepage are treated as soft 404s and pass little value.",
        },
        {
          type: "table",
          caption: "Redirect map template",
          head: ["Old URL", "New URL", "Type", "Check", "Notes"],
          rows: [
            ["/services/web-design", "/services/website-development", "301", "Loads, one hop", "Closest equivalent"],
            ["/blog/2022/05/seo-tips", "/blog/seo-pricing", "301", "Loads, one hop", "Content merged"],
            ["/old-landing-page", "/contact", "301", "Loads, one hop", "Page retired; closest intent"],
            ["/shop/product-a?color=blue", "/products/product-a", "301", "Loads, one hop", "Parameters dropped"],
          ],
          note: "Example rows only. Add every URL with traffic, links or a ranking. Retire pages with no value with a 410 or let them 404, but only after checking they have no links.",
        },
        {
          type: "h3",
          text: "Redirect chains: the mistake to avoid",
        },
        {
          type: "p",
          text: "A chain happens when A redirects to B and B redirects to C. Each hop slows crawling and dilutes signals. If you have migrated before, the old redirect from A may point at a page you are now moving. Point every redirect directly at its final destination: A to C.",
        },
        {
          type: "table",
          head: ["Wrong (chain)", "Right (direct)"],
          rows: [["/old → /2023-page → /new-page", "/old → /new-page and /2023-page → /new-page"]],
        },
      ],
    },
    {
      h2: "Website redesign SEO: what else to check before launch",
      blocks: [
        {
          type: "ul",
          items: [
            "Page speed and mobile rendering on the new templates",
            "Canonical tags pointing to the new URLs, and one canonical host (with or without www)",
            "An updated XML sitemap listing only live, canonical URLs, and robots.txt that does not block key sections",
            "Structured data and Open Graph tags re-created on the new templates",
            "Analytics and conversion tracking working on the new site, tested with a real action",
            "Internal links updated to point at new URLs so users and crawlers do not hit redirects",
          ],
        },
      ],
    },
    {
      h2: "Changing domain without losing SEO",
      blocks: [
        {
          type: "p",
          text: "A domain move adds steps. Keep the old domain and its redirects live for as long as you can, and register the new domain in Search Console. Include the www and non-www and http and https variants, or verify a domain property. Use Search Console's change-of-address tool where it applies, and update links you control: social profiles, directory listings and email signatures.",
        },
      ],
    },
    {
      h2: "After launch: monitor for the first weeks",
      blocks: [
        {
          type: "ol",
          items: [
            "Check the top pages by hand: they load, redirect once, and show the right title and canonical.",
            "Submit the new sitemap and look at Search Console's page indexing report for new errors and 404s on pages that used to work.",
            "Compare traffic and conversions by page against your baseline weekly, not daily.",
            "Fix any broken redirects or chains you find, and add redirects for 404s that still receive visits or links.",
            "Expect an initial dip and judge recovery over weeks, not days. Keep notes of every change so you can tell the migration from other causes.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Crawl your current site and export the URL list now, before anyone starts the rebuild. That file is the most useful thing you can give a new developer, and it protects what you have already earned.",
  },
  faqs: [
    {
      q: "What is a website migration SEO checklist?",
      a: "A step-by-step list for moving or redesigning a site without losing search traffic: record a baseline, map redirects, keep on-page elements, launch carefully and monitor.",
    },
    {
      q: "Will I lose rankings when I redesign my website?",
      a: "Some dip is common even when done well, and a poor redirect map causes the worst losses. A tested redirect map and kept on-page elements reduce the risk.",
    },
    {
      q: "Should I use 301 or 302 redirects?",
      a: "Use 301 for permanent moves. A 302 signals a temporary move and is for short-term situations.",
    },
    {
      q: "What is a redirect chain and why is it bad?",
      a: "A chain is A to B to C. It slows crawling and dilutes signals, so redirect old URLs straight to the final page.",
    },
    {
      q: "How do I move to a new domain without losing SEO?",
      a: "Redirect every old URL to its equivalent on the new domain, verify the new domain in Search Console, use the change-of-address tool where it applies, and keep the redirects live.",
    },
  ],
  sources: [
    {
      label: "Seer Interactive: website migration SEO checklist",
      url: "https://www.seerinteractive.com/blog/website-migration-seo-checklist",
    },
    {
      label: "Priority Pixels: website migration SEO checklist",
      url: "https://prioritypixels.co.uk/insights/website-migration-seo-checklist/",
    },
    {
      label: "Focus Reactive: SEO migration checklist 2026",
      url: "https://focusreactive.com/blog/seo-migration-checklist/",
    },
    {
      label: "Centric DXB: site migration SEO checklist",
      url: "https://www.centricdxb.com/insights/site-migration-seo-checklist",
    },
    {
      label: "PBJ Marketing: SEO website migration checklist",
      url: "https://pbjmarketing.com/blog/seo-website-migration-checklist",
    },
    {
      label: "Hobo Web: how to change domain names and keep rankings",
      url: "https://www.hobo-web.co.uk/how-to-change-domain-names-keep-your-rankings-in-google/",
    },
  ],
};
