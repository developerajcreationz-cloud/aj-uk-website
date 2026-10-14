import type { Post } from "./types";

export const technicalSeoAuditChecklist: Post = {
  slug: "technical-seo-audit-checklist",
  title: "Technical SEO audit checklist for small business websites",
  metaTitle: "Technical SEO Audit Checklist: 20 Checks and a Free Sheet",
  metaDescription:
    "A technical SEO audit checklist for small business sites: 20 checks for crawling, indexing, speed and markup, with severity ratings and an audit sheet.",
  primaryKeyword: "technical seo audit checklist",
  secondaryKeywords: [
    "technical seo checklist",
    "how to do a technical seo audit",
    "seo audit checklist",
    "technical seo audit template",
    "technical seo audit tools",
    "small business seo audit",
    "core web vitals thresholds",
  ],
  parent: "seo-growth",
  scene: "seo",
  related: ["seo-pricing", "website-migration-seo-checklist", "website-maintenance-cost"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  takeaways: [
    "Twenty checks in five groups, each with a free way to test it, what a pass looks like and how serious a failure is",
    "Current Google thresholds for Core Web Vitals, including why older checklists that list FID are out of date",
    "A way to record findings and a list of common false alarms, plus what we found when we ran this on our own site",
  ],
  answer: [
    "A technical SEO audit checks whether Google can find, load and understand your pages. For a small business site, you can run a useful first pass in an afternoon with free tools: Google Search Console, PageSpeed Insights, your browser and two files on your own domain, robots.txt and the sitemap. Work through five groups in order, crawling and indexing, redirects and security, speed, mobile and rendering, then structure and markup, and rate each failure Critical, High, Medium or Low so you fix the damaging problems first.",
    "The checklist below has 20 checks. If you would rather have someone run a deeper audit, see our [SEO and growth service](/services/seo-growth). Whoever does it, Google's advice is to give an auditor read-only access to Search Console, not write access.",
  ],
  disclosure:
    "AJ Creationz sells SEO audits, and most checklists on this topic are published by SEO tool vendors. This one uses only free methods, and the severity ratings are our own house standard, not a Google score. Fixing technical issues does not guarantee higher rankings.",
  sections: [
    {
      h2: "What a technical SEO audit covers",
      blocks: [
        {
          type: "p",
          text: "A technical audit looks at how search engines crawl, render and index your site. It does not judge your writing or count your backlinks. That keeps the job small enough to finish, and it matters because a page that Google cannot index cannot rank, however good it is.",
        },
        {
          type: "p",
          text: "Set expectations before you start. Google's SEO starter guide says changes can take a few hours to several months to show up, and suggests waiting a few weeks before judging whether your work helped.",
        },
        {
          type: "h3",
          text: "The free tools you need",
        },
        {
          type: "ul",
          items: [
            "**Google Search Console:** the source of truth for indexing, Core Web Vitals and manual actions. Verify your site and submit your sitemap.",
            "**PageSpeed Insights:** shows real-user (field) data when your site has enough traffic, and lab data otherwise.",
            "**Your browser:** view-source, the developer tools and a real phone for mobile checks.",
            "**Google's Rich Results Test:** validates structured data.",
            "**Two URLs on your own domain:** /robots.txt and /sitemap.xml.",
          ],
        },
      ],
    },
    {
      h2: "Group 1: crawling and indexing",
      blocks: [
        {
          type: "table",
          caption: "Checks 1 to 5",
          head: ["Check", "How to test it free", "A pass looks like", "If it fails"],
          rows: [
            [
              "1. robots.txt is not blocking important pages",
              "Open /robots.txt",
              "No Disallow: / and no blocks on key sections. Google says robots.txt manages crawling and does not reliably keep a page out of results",
              "Critical if key sections are blocked",
            ],
            [
              "2. No accidental noindex",
              "View source on key pages and look in the head for a robots meta tag; check Search Console",
              "No noindex on pages meant to rank. Google reads the tag from the head of the page",
              "Critical if site-wide",
            ],
            [
              "3. Sitemap is present and clean",
              "Open /sitemap.xml and submit it in Search Console",
              "Lists real, canonical pages that return 200, with believable last-modified dates. Google says well-linked sites can be found without one, but it helps larger sites",
              "Medium",
            ],
            [
              "4. Canonical tags are correct",
              "View source on key pages",
              "Each page points to itself or its single preferred version, and matches the sitemap and internal links",
              "High if conflicting",
            ],
            [
              "5. Important pages are indexed",
              "Search Console, Pages report; URL Inspection for single pages",
              "Key pages show as indexed. A site: search is only a rough check: Google says it may not list every URL and does not rank results",
              "High if key pages are missing",
            ],
          ],
        },
      ],
    },
    {
      h2: "Group 2: status codes, redirects and security",
      blocks: [
        {
          type: "table",
          caption: "Checks 6 to 10",
          head: ["Check", "How to test it free", "A pass looks like", "If it fails"],
          rows: [
            [
              "6. Key pages return 200",
              "Browser developer tools, Network tab; Search Console",
              "Live pages return 200, not 404 or 5xx errors",
              "High for key pages",
            ],
            [
              "7. Missing pages return a real 404",
              "Request a made-up URL on your site",
              "A genuine 404 or 410 status, not a 200 page that says not found, which Google reports as a soft 404, and not a redirect to the home page",
              "High if at scale",
            ],
            [
              "8. Permanent moves use 301 or 308",
              "Developer tools, Network tab",
              "Permanent redirects use 301 or 308, with at most one hop. Google treats a permanent redirect as a signal that the target should be the canonical URL",
              "Medium; Low for a single hop",
            ],
            [
              "9. One version of the site",
              "Try http://, https://, www and non-www",
              "All other versions redirect to one HTTPS address",
              "High",
            ],
            [
              "10. HTTPS works everywhere, nothing hacked",
              "Browser padlock; Search Console Security and Manual actions",
              "No mixed-content warnings, no manual actions, no spam pages injected into your site",
              "Critical if broken or hacked",
            ],
          ],
        },
      ],
    },
    {
      h2: "Group 3: speed and page experience",
      blocks: [
        {
          type: "table",
          caption: "Checks 11 to 14",
          head: ["Check", "How to test it free", "A pass looks like", "If it fails"],
          rows: [
            [
              "11. Core Web Vitals on key pages",
              "PageSpeed Insights, field data; Search Console Core Web Vitals report",
              "Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1 (Google's thresholds)",
              "High on key templates",
            ],
            [
              "12. Page weight is sane",
              "Developer tools, Network tab",
              "HTML well under 2 MB. Googlebot crawls the first 2 MB of a file, and each CSS or JavaScript file is fetched under the same limit",
              "Critical if key content sits beyond the limit",
            ],
            [
              "13. Images are sized and compressed",
              "PageSpeed Insights",
              "Images are sized for the screen and served in an efficient format, with descriptive alt text",
              "Low to Medium",
            ],
            [
              "14. No blocking pop-ups on mobile",
              "A real phone",
              "Nothing covers the main content when a visitor arrives",
              "Medium",
            ],
          ],
          note: "Many checklists still list First Input Delay. Google replaced it with Interaction to Next Paint, so a checklist that tests FID is out of date.",
        },
      ],
    },
    {
      h2: "Group 4: mobile and rendering",
      blocks: [
        {
          type: "table",
          caption: "Checks 15 to 17",
          head: ["Check", "How to test it free", "A pass looks like", "If it fails"],
          rows: [
            [
              "15. Mobile has the same content",
              "Browser device mode and a real phone",
              "Text, links, structured data and metadata match desktop. Google uses the mobile version of your content for indexing and ranking",
              "High",
            ],
            [
              "16. Main content is in the rendered page",
              "Compare view-source with the inspected page; URL Inspection, view crawled page",
              "Key text, links and metadata appear without depending on a script that can fail. Google processes JavaScript in crawling, rendering and indexing phases",
              "High if content is missing",
            ],
            [
              "17. Links are real links",
              "View source",
              "Navigation uses an a element with an href. Google generally cannot extract links that only work through script events",
              "Medium to High",
            ],
          ],
        },
      ],
    },
    {
      h2: "Group 5: structure and markup",
      blocks: [
        {
          type: "table",
          caption: "Checks 18 to 20",
          head: ["Check", "How to test it free", "A pass looks like", "If it fails"],
          rows: [
            [
              "18. Titles and descriptions are unique and clear",
              "View source; Search Console Performance, pages",
              "Each page has its own descriptive title and a description that summarises it. Google may rewrite either",
              "Medium if missing or duplicated",
            ],
            [
              "19. Important pages are linked internally",
              "Click through from the home page; check key pages for inbound links",
              "Each important page is reachable in a few clicks with descriptive link text, and none is an orphan",
              "Medium",
            ],
            [
              "20. Structured data matches the page",
              "Rich Results Test",
              "Markup describes content that is visible on the page, with no errors on types that still earn features. FAQ markup no longer earns rich results, so do not add it for visibility",
              "Medium; High for fake or hidden content",
            ],
          ],
        },
      ],
    },
    {
      h2: "How to rate and record what you find",
      blocks: [
        {
          type: "p",
          text: "Use four levels. They are our house scale, not a Google score, but they keep you fixing the right things in the right order.",
        },
        {
          type: "ul",
          items: [
            "**Critical:** stops pages being indexed or loaded now, such as a site-wide noindex, robots.txt blocking key sections, broken HTTPS, hacked content or key content beyond the 2 MB limit.",
            "**High:** a clear drag, such as poor field Core Web Vitals on key templates, conflicting canonicals, soft 404s at scale or main content that only appears after failing JavaScript.",
            "**Medium:** real but bounded, such as duplicate titles, shallow internal linking or intrusive pop-ups.",
            "**Low:** polish, such as minor alt text gaps or an occasional extra redirect.",
          ],
        },
        {
          type: "callout",
          title:
            "Audit sheet columns: URL, check number, what you saw, how you found it, severity, fix, owner, retest date",
          text: "Copy these eight columns into a spreadsheet. Keep what you saw separate from what you assume, and record the date, because results change.",
        },
      ],
    },
    {
      h2: "Common false alarms",
      blocks: [
        {
          type: "p",
          text: "Paid tools flag many items that Google's documentation does not treat as problems, and they give scores that are not Google data. Before you act on a flag, ask which Google page says it matters.",
        },
        {
          type: "ul",
          items: [
            "Third-party scores such as an authority or health score. They are vendor estimates, not Google metrics.",
            "Keyword density and word-count warnings.",
            "A site: result count treated as the number of indexed pages.",
            "An FID warning, which refers to a metric Google has replaced.",
          ],
        },
      ],
    },
    {
      h2: "What we found when we ran this on our own site",
      blocks: [
        {
          type: "p",
          text: "We ran this checklist on ajcreationz.co.uk on 13 and 14 October 2026. The sitemap, robots.txt, canonicals and structured data passed. Three things did not:",
        },
        {
          type: "ul",
          items: [
            "**Missing social images (check 18 area, Medium):** 19 of 27 pages had no share image and reused the home page's text. We fixed it the same day.",
            "**Mobile speed (check 11, High):** PageSpeed Insights reported a Largest Contentful Paint of 4.1 seconds on mobile, because the opening text waited for JavaScript before it appeared. We moved the entrance animation to CSS and are retesting.",
            "**Sitemap dates (check 3, Medium):** every page showed the same last-modified date. We switched blog posts to their own dates.",
          ],
        },
        {
          type: "p",
          text: "None of these is exotic. They are the kind of issue a first pass finds, which is why running the sheet is worth an afternoon.",
        },
      ],
    },
    {
      h2: "When to bring in a professional",
      blocks: [
        {
          type: "p",
          text: "Google's own guidance on hiring an SEO is a useful filter. A good time to hire is a redesign or new site launch, when search can be built in. If an auditor asks for access, give read-only Search Console access. If anyone guarantees first place, find someone else. Check their recommendations against Google's official documentation rather than a third-party tool's score. If you are moving to a new site, use our [website migration SEO checklist](/blog/website-migration-seo-checklist), and for pricing see [SEO pricing](/blog/seo-pricing).",
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Copy the audit sheet columns into a spreadsheet and work through the 20 checks on your five most important pages. Fix Critical items first. If you would rather have a written audit with a fix list, send us your site and we will scope it.",
  },
  faqs: [
    {
      q: "What is included in a technical SEO audit?",
      a: "Crawling and indexing, status codes and redirects, security, page speed and Core Web Vitals, mobile and rendering, internal links, metadata and structured data. It checks how search engines access your site, not the quality of your writing.",
    },
    {
      q: "How do I do a technical SEO audit myself?",
      a: "Verify Search Console, then work through the 20 checks above on your key pages using Search Console, PageSpeed Insights, your browser and your robots.txt and sitemap files. Record each finding with a severity and a fix.",
    },
    {
      q: "What are the Core Web Vitals thresholds?",
      a: "Google's thresholds are Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1.",
    },
    {
      q: "How often should I run a technical SEO audit?",
      a: "Run a full pass once or twice a year and after any redesign, migration or platform change. Check Search Console monthly for new indexing or security issues.",
    },
    {
      q: "How long do technical SEO fixes take to work?",
      a: "Google says changes can take from a few hours to several months to show. It suggests waiting a few weeks before judging whether a change helped.",
    },
    {
      q: "Do I need paid tools for a technical SEO audit?",
      a: "Not for a first pass on a small site. Search Console, PageSpeed Insights and your browser cover the main checks. Paid crawlers help on larger sites, but their scores are not Google data.",
    },
    {
      q: "What is the difference between crawling and indexing?",
      a: "Crawling is Google fetching a page. Indexing is Google storing it so it can appear in results. A page can be crawled and not indexed, and a page blocked in robots.txt can sometimes still appear without its content if it is linked from elsewhere.",
    },
    {
      q: "Is a technical SEO audit the same as an SEO audit?",
      a: "No. A full SEO audit also reviews content, links and how well pages match what people search for. A technical audit covers whether pages can be found, loaded and understood.",
    },
  ],
  sources: [
    {
      label: "Google Search Central: SEO starter guide",
      url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    },
    {
      label: "Google Search Central: robots.txt introduction",
      url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
    },
    {
      label: "Google Search Central: robots meta tag specifications",
      url: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag",
    },
    {
      label: "Google Search Central: what is URL canonicalization",
      url: "https://developers.google.com/search/docs/crawling-indexing/canonicalization",
    },
    {
      label: "Google Search Central: sitemaps overview",
      url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    },
    {
      label: "Google Search Central: how to use the site: search operator",
      url: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site",
    },
    {
      label: "Google Search Central: redirects and Google Search",
      url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
    },
    {
      label: "Google: how HTTP status codes affect Google's crawlers",
      url: "https://developers.google.com/crawling/docs/troubleshooting/http-status-codes",
    },
    {
      label: "Google Search Central: Core Web Vitals and Google search results",
      url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      label: "Google Search Central: Googlebot",
      url: "https://developers.google.com/search/docs/crawling-indexing/googlebot",
    },
    {
      label: "Google Search Central: mobile-first indexing best practices",
      url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
    },
    {
      label: "Google Search Central: JavaScript SEO basics",
      url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    },
    {
      label: "Google Search Central: SEO link best practices",
      url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
    },
    {
      label: "Google Search Central: do you need an SEO? Tips for hiring an SEO",
      url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo",
    },
    { label: "NUOPTIMA: technical SEO audit checklist", url: "https://nuoptima.com/technical-seo-audit-checklist" },
    {
      label: "LinkAssistant: 12-step technical SEO audit checklist",
      url: "https://www.link-assistant.com/news/technical-seo-guide.html",
    },
  ],
};
