import type { Post } from "./types";

export const websiteMaintenanceCost: Post = {
  slug: "website-maintenance-cost",
  title: "Website maintenance cost: what a monthly care plan should include",
  metaTitle: "Website Maintenance Cost UK: Monthly Prices and Inclusions",
  metaDescription:
    "Website maintenance cost per month in pounds and dollars by site type, what a care plan should include, and a checklist to compare quotes like for like.",
  primaryKeyword: "website maintenance cost",
  secondaryKeywords: [
    "website maintenance cost per month",
    "website maintenance plans",
    "wordpress maintenance cost",
    "website care plan",
    "what is included in website maintenance",
    "website support cost",
    "do i need website maintenance",
  ],
  parent: "wordpress-web-design",
  scene: "platforms",
  related: [
    "how-much-does-a-website-cost",
    "technical-seo-audit-checklist",
    "shopify-vs-wordpress",
    "speed-up-wordpress-site",
  ],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-13",
  dateModified: "2026-10-23",
  takeaways: [
    "Monthly maintenance prices by site type in pounds and dollars, with sources and where they disagree",
    "A checklist of what a care plan should name in writing, so you can compare quotes like for like",
    "A simple break-even to decide between doing it yourself and paying for a plan",
  ],
  answer: [
    "Website maintenance usually costs £30 to £75 a month for a small brochure site, £75 to £150 for a WordPress business site, £150 to £300 for a lead-generation or custom site, and £200 to £500 or more for an online store, according to one UK guide. US guides give $35 to $500 a month for small and medium business sites and much more for ecommerce. Doing it yourself is cheaper in cash, typically under $100 a month, but costs your time.",
    "A plan is only worth its price if it names what it does: updates, backups you can restore, security checks, uptime monitoring and support. The sections below list the prices, what to ask for and how to compare two quotes. If you want one scoped for your site, see our [WordPress web design and support](/services/wordpress-web-design/).",
  ],
  disclosure:
    "AJ Creationz builds and supports WordPress, Shopify and custom sites, so we sell what this guide describes. Most pages that rank for this topic are written by agencies and hosts with the same interest. Treat every range as indicative and ask for written quotes.",
  sections: [
    {
      h2: "How much does website maintenance cost per month?",
      blocks: [
        {
          type: "table",
          caption: "Monthly website maintenance by site type, UK, in pounds",
          head: ["Site type", "Typical monthly cost", "What drives it"],
          rows: [
            [
              "Small brochure site (5 to 10 pages)",
              "£30 to £75",
              "Basic updates, security monitoring, backups, light support",
            ],
            [
              "WordPress business site with forms and plugins",
              "£75 to £150",
              "Plugin and theme updates, conflicts, security",
            ],
            [
              "Lead generation or custom site",
              "£150 to £300",
              "CRM links, custom forms, API connections, regular landing page changes",
            ],
            [
              "Online store",
              "From £200 to £300, and £300 to £500 or more on high-support plans",
              "Product volume, payments, support level",
            ],
          ],
          note: "Source: Just Digital Gurus, UK pricing guide (2026). Red Evolution describes £50 to £150 a month as the bare essentials and £500 or more as active improvement work such as SEO.",
        },
        {
          type: "table",
          caption: "Monthly website maintenance by site type, US, in dollars",
          head: ["Site type", "Typical monthly cost", "Source"],
          rows: [
            ["Personal site", "$5 to $25", "Hostinger (2026)"],
            ["Professional blog", "$25 to $75", "Hostinger (2026)"],
            ["Small to medium business site", "$35 to $500", "Hostinger and Belov Digital (2026)"],
            ["Medium business, growing", "$200 to $1,000", "Belov Digital (2026)"],
            [
              "Ecommerce",
              "$750 to $5,000 (Hostinger); $300 to $5,000 or more (Belov)",
              "Hostinger and Belov Digital (2026)",
            ],
          ],
          note: "Hostinger says total website maintenance runs from $5 to $5,000 a month depending on size and complexity. Both sources sell hosting or maintenance, and the ranges are wide because plans include different work.",
        },
        {
          type: "p",
          text: "Read the ranges as a menu, not a price. A £50 plan that only runs updates is a different product from a £50 plan that also tests restores and answers support tickets. That is why the next section matters more than the number.",
        },
      ],
    },
    {
      h2: "What a website maintenance plan should include",
      blocks: [
        {
          type: "p",
          text: "Providers describe similar core tasks. The difference between a cheap and a good plan is how specific the promise is. Ask for each line in writing.",
        },
        {
          type: "table",
          caption: "Care plan checklist: what to ask for",
          head: ["Item", "What it covers", "Ask for in writing"],
          rows: [
            [
              "Updates",
              "WordPress core, theme and plugin updates",
              "How often, and whether updates are tested before they go live. Careless updates can break forms, checkout pages or layouts",
            ],
            [
              "Backups",
              "Copies of your site and database",
              "How often they run, where they are stored (away from the site), and whether a restore has been tested. A backup that has never been restored is a theory",
            ],
            [
              "Security",
              "Malware scans, blocklist checks, login protection",
              "What is scanned, how often, and whether cleaning up a hack is included",
            ],
            [
              "Uptime monitoring",
              "Alerts if the site goes offline",
              "Check interval and who is told, so you hear before customers do",
            ],
            [
              "Support",
              "Help when something breaks",
              "Response time and whether you reach a developer or only a queue",
            ],
            [
              "Content changes",
              "Small edits such as a phone number or a photo",
              "How many hours or changes a month are included, and the rate beyond that",
            ],
            [
              "Performance and SEO checks",
              "Speed scans, broken links, search health",
              "What is checked and how it is reported. See our [technical SEO audit checklist](/blog/technical-seo-audit-checklist/)",
            ],
            ["Reporting", "A short monthly summary", "What changed, what was fixed and what needs a decision"],
          ],
          note: "Sources: Red Evolution, Just Digital Gurus, WPRiders and Your WP Guy. The descriptions are from providers that sell plans.",
        },
      ],
    },
    {
      h2: "Costs that sit outside the plan",
      blocks: [
        {
          type: "p",
          text: "Hostinger lists nine areas that make up a website's running costs. Several are not part of a care plan, so check who pays for each.",
        },
        {
          type: "ul",
          items: [
            "**Domain name:** an annual renewal.",
            "**Hosting:** monthly or yearly. Some managed plans include it, and some do not.",
            "**SSL certificate:** some hosts include it; a paid upgrade is a separate cost.",
            "**Business email:** addresses on your own domain.",
            "**Premium themes and plugins:** licences usually renew every year.",
            "**Ecommerce tools:** payment gateways, inventory and shipping add-ons.",
            "**Marketing and SEO:** ongoing work, separate from upkeep.",
          ],
        },
        {
          type: "p",
          text: "For build and first-year costs, see [how much a website costs](/blog/how-much-does-a-website-cost/), which includes a three-year cost worksheet.",
        },
      ],
    },
    {
      h2: "Do it yourself or pay for a plan?",
      blocks: [
        {
          type: "p",
          text: "Hostinger puts a do-it-yourself approach typically under $100 a month, mostly hosting and domain renewals, with the main cost being your time and a learning curve. It suggests daily or weekly backup and monitoring checks, monthly updates, broken-link and security checks, and a quarterly look at analytics, speed and content.",
        },
        {
          type: "callout",
          title: "Do-it-yourself cost = hours a month × what your hour is worth. Compare it with the plan price.",
          text: "Add the cost of a problem: if the site breaks and you cannot fix it, what does a day offline cost you?",
        },
        {
          type: "table",
          caption: "Illustrative break-even (assumed figures, not quotes)",
          head: ["Line", "UK example", "US example"],
          rows: [
            ["Hours a month you would spend", "3", "3"],
            ["Value of your hour (assumed)", "£40", "$50"],
            ["Do-it-yourself cost: 3 × hourly value", "£120", "$150"],
            ["Comparison plan price (sourced range)", "£75 to £150", "$35 to $500"],
          ],
          note: "Check: 3 × 40 = 120 and 3 × 50 = 150. At these assumptions a plan in the lower half of the range costs less than your time, and the gap widens if updates break something. If you enjoy the work or spend under an hour a month, doing it yourself can win.",
        },
      ],
    },
    {
      h2: "Do I need website maintenance?",
      blocks: [
        {
          type: "p",
          text: "Most providers say yes, but they sell it. The risks they list are consistent: outdated software and plugins are a common route for attacks, forms and checkout can stop working, slow pages drive visitors away, and neglected sites can drift down in search. One UK provider notes it is cheaper to prevent a hack than to cure one.",
        },
        {
          type: "p",
          text: "The honest version: sites built on a website builder or a hosted store platform need less upkeep because the provider handles updates. A WordPress site with several plugins needs regular attention. A site that takes payments or personal data needs the most. See [Shopify vs WordPress](/blog/shopify-vs-wordpress/) for how the running costs differ.",
        },
      ],
    },
    {
      h2: "How to compare two maintenance quotes",
      blocks: [
        {
          type: "ol",
          items: [
            "Ask each provider to list what is included against the care plan checklist above.",
            "Check how often backups run, where they are stored and when a restore was last tested.",
            "Ask for the response time to a problem, and whether weekends are covered.",
            "Find out how many content changes a month are included and the hourly rate after that.",
            "Ask what is excluded: hack clean-up, emergency fixes, plugin licences, hosting.",
            "Check who owns the accounts: hosting, domain and backups should be in your name.",
            "Ask about the notice period and whether you can leave without losing access.",
            "Compare the price for the same list, not the headline number.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "List your plugins, forms and payment tools, then ask two providers to price the checklist above for your site. If you want a written scope from us, send the site address and what it needs to do.",
  },
  faqs: [
    {
      q: "How much does website maintenance cost per month?",
      a: "One UK guide gives £30 to £75 for a small brochure site, £75 to £150 for a WordPress business site, £150 to £300 for a lead-generation or custom site, and £200 or more for ecommerce. US guides give $35 to $500 for small and medium business sites.",
    },
    {
      q: "What is included in a website maintenance plan?",
      a: "Usually software updates, backups, security scans, uptime monitoring, support and a few content changes. Better plans also test restores, report monthly and name response times.",
    },
    {
      q: "How much does WordPress maintenance cost?",
      a: "One UK guide gives £75 to £150 a month for a standard WordPress business site, and US guides give $35 to $500 for small and medium business sites. Cost rises with plugins, integrations and support level, so ask for the work in writing.",
    },
    {
      q: "Is website maintenance really necessary?",
      a: "For WordPress and custom sites, regular updates, backups and monitoring matter, because outdated software is a common way sites get hacked. Hosted builders and store platforms handle much of it for you.",
    },
    {
      q: "Can I maintain my website myself?",
      a: "Yes. Hostinger puts the do-it-yourself route typically under $100 a month in costs, plus your time. You need to run updates, keep tested backups and watch for downtime.",
    },
    {
      q: "How much does ecommerce website maintenance cost?",
      a: "More than a brochure site. UK guides start around £200 to £300 a month and US guides range from about $300 to $5,000 or more, depending on volume, payments and support.",
    },
    {
      q: "Is hosting included in website maintenance?",
      a: "Sometimes. Some managed plans include hosting and some do not, so check. Domain renewals and premium plugin licences are usually separate.",
    },
    {
      q: "How often does a website need maintenance?",
      a: "Backups and monitoring run daily or weekly, updates and security checks monthly, and analytics, speed and content reviews roughly quarterly.",
    },
  ],
  sources: [
    {
      label: "Just Digital Gurus: website maintenance cost UK (2026)",
      url: "https://justdigitalgurus.com/blog/website-maintenance-cost-uk/",
    },
    {
      label: "Hostinger: website maintenance cost, hiring a professional vs self-maintenance (14 October 2026)",
      url: "https://www.hostinger.com/tutorials/website-maintenance-cost",
    },
    {
      label: "Belov Digital: the true cost of WordPress website maintenance",
      url: "https://belovdigital.agency/the-true-cost-of-wordpress-website-maintenance/",
    },
    {
      label: "Red Evolution: how much does website management cost in the UK?",
      url: "https://www.redevolution.com/blog/how-much-does-website-management-cost-in-the-uk",
    },
    {
      label: "WPRiders: what a comprehensive WordPress maintenance plan includes",
      url: "https://wpriders.com/comprehensive-wordpress-maintenance-plan-inclusions/",
    },
    {
      label: "Your WP Guy: what is a WordPress maintenance plan?",
      url: "https://ishouldbeyourwpguy.com/what-is-a-wordpress-maintenance-plan/",
    },
    {
      label: "Central Technology: the importance of website maintenance",
      url: "https://www.ct.co.uk/blog/website-maintenance-updates/",
    },
  ],
};
