import type { Post } from "./types";

export const websiteCost: Post = {
  slug: "how-much-does-a-website-cost",
  title: "How much does a website cost in 2026?",
  metaTitle: "How Much Does a Website Cost? A 2026 Price Guide by Type",
  metaDescription:
    "How much does a website cost? Sourced price ranges in pounds and dollars for freelancer, agency and ecommerce builds, plus a 3-year cost worksheet.",
  primaryKeyword: "how much does a website cost",
  secondaryKeywords: [
    "website design pricing",
    "website maintenance cost",
    "ecommerce website cost",
    "small business website cost",
    "web design agency pricing",
    "how much does a wordpress website cost",
  ],
  parent: "website-development",
  related: ["shopify-vs-wordpress", "website-migration-seo-checklist"],
  author: { name: "Athar", role: "Strategic Director" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  takeaways: [
    "Price ranges for freelancer, agency and ecommerce websites, in pounds and dollars, with the source of each figure",
    "A worksheet that turns a quote into a three-year cost, with the arithmetic shown",
    "A checklist for comparing two quotes that look the same but are not",
  ],
  answer: [
    'How much does a website cost? For a professionally built small-business site, published UK guides put the build at roughly £2,000 to £8,000, and US guides range from about $1,500 to $5,000 for a freelancer to $10,000 to $35,000 for a small agency. Online stores cost more: £5,000 to £15,000 is typical in UK guides, and US guides start around $10,000. The spread is wide because "a website" can mean a four-page brochure or a custom ecommerce build.',
    "The build price is only part of the answer. Hosting, a domain, updates and security fixes continue for as long as the site is live, and one UK guide notes that these can exceed the original build over a three to five year life. This guide gives you the ranges, then a worksheet to turn any quote into a three-year number you can compare. If you want a quote for a [website development project](/services/website-development), we will scope it in writing.",
  ],
  disclosure:
    "AJ Creationz builds websites, so we have an interest in this topic. The figures below come from third-party guides, most of which are also published by agencies, and are labeled as such.",
  sections: [
    {
      h2: "Website cost by type of site",
      blocks: [
        {
          type: "p",
          text: 'These are the ranges we found in published guides in October 2026. Definitions of "small agency" and "freelancer" differ between publishers, which is why the UK and US columns do not line up neatly.',
        },
        {
          type: "table",
          caption: "Indicative build costs by type",
          head: ["Type of site", "US guides", "UK guides", "What the range includes"],
          rows: [
            [
              "Very basic (templated, few pages)",
              "from about $50 on freelance marketplaces",
              "from £295 + VAT for 4 pages (one agency's advertised price)",
              "The bottom of the market; little or no strategy or support",
            ],
            [
              "Freelancer-built business site",
              "$1,500 – $5,000, or $2,000 – $8,000 in another guide",
              "£2,000 – £8,000 for a professionally built small-business site",
              "Design, build and launch; support varies",
            ],
            [
              "Small or regional agency",
              "$10,000 – $35,000 (3 to 10 staff, fixed price)",
              "£2,500 – £10,000",
              "Strategy, design, development, usually fixed-price",
            ],
            [
              "Ecommerce store",
              "from about $10,000 up to $30,000+",
              "£5,000 – £15,000 typical, up to £40,000",
              "Catalog, checkout, payments, shipping setup",
            ],
            [
              "Custom web application",
              "$50,000+",
              "not found in the guides we reviewed",
              "Bespoke functionality and integrations",
            ],
          ],
          note: "Sources are listed at the end. One UK guide reports London agencies charging 65% to 280% more than regional ones for comparable work, and UK agency hourly rates of roughly £80 to £150 or more. All figures are indicative, and most publishers sell web design.",
        },
      ],
    },
    {
      h2: "What drives the price",
      blocks: [
        {
          type: "ul",
          items: [
            "**Number and type of pages.** Ten templated pages cost far less than thirty pages with custom layouts.",
            "**Custom design versus a template.** A premium theme costs $30 to $100; custom design is billed in hours.",
            "**Functionality.** Bookings, memberships, a store, a CRM connection or a customer portal each add build and testing time.",
            "**Content.** Who writes the copy and sources images? If the agency does, it is a separate line item.",
            "**Who is building it.** A freelancer carries lower overhead than an agency, but also single-person risk.",
            "**Location.** Rates differ by country and city, and a UK quote may or may not include 20% VAT.",
          ],
        },
        {
          type: "p",
          text: "Platform matters too. A WordPress build and a Shopify build have different cost profiles; see [Shopify vs WordPress](/blog/shopify-vs-wordpress) for the running costs of each, or our service guides on [WordPress web design](/services/wordpress-web-design) and [Shopify web design](/services/shopify-web-design).",
        },
      ],
    },
    {
      h2: "Website maintenance cost and other costs after launch",
      blocks: [
        {
          type: "p",
          text: "Ongoing costs are where quotes differ most. A US guide gives upkeep as roughly $35 to about $500 a month, with hosting separate. For a self-managed WordPress site, guides put a domain at about $12 to $25 a year, hosting at $40 to $150 a year and a premium theme at $30 to $100. A UK guide makes the same point from the other side: a £3,000 quote that includes twelve months of support can beat a £2,000 quote where every change after launch is billed extra.",
        },
        {
          type: "ul",
          items: [
            "Domain renewal and hosting",
            "Security updates, backups and plugin or theme updates",
            "Content changes and new pages",
            "Performance and uptime monitoring",
            "Paid plugins, apps or licenses",
          ],
        },
      ],
    },
    {
      h2: "Worksheet: turn any quote into a three-year cost",
      blocks: [
        {
          type: "p",
          text: "Use this formula, then fill it in with the numbers from each quote. If a quote does not state a line, ask for it in writing.",
        },
        {
          type: "callout",
          title: "Three-year cost = build + one-time extras + 3 × (domain + hosting + 12 × monthly maintenance)",
          text: "Add content or photography if you are not supplying it yourself.",
        },
        {
          type: "p",
          text: "Here is an illustrative example. The numbers are assumptions chosen from the ranges above, not a quote from anyone, and the arithmetic is shown so you can swap in your own.",
        },
        {
          type: "table",
          caption: "Illustrative three-year cost, agency-built versus freelancer-built",
          head: ["Line", "Agency build", "Freelancer build"],
          rows: [
            ["Build", "$8,000", "$3,000"],
            ["Premium theme (one time)", "$60", "$60"],
            ["Domain, per year", "$20", "$20"],
            ["Hosting, per year", "$100", "$100"],
            ["Maintenance, per month", "$100", "$100"],
            ["Yearly running cost: 20 + 100 + 12 × 100", "$1,320", "$1,320"],
            [
              "Three-year cost: build + theme + 3 × 1,320",
              "$8,000 + 60 + 3,960 = $12,020",
              "$3,000 + 60 + 3,960 = $7,020",
            ],
            ["Share of the three-year cost that is maintenance (3,600 ÷ total)", "30%", "51%"],
          ],
          note: "Check: 3 × 1,320 = 3,960. 3,600 ÷ 12,020 = 30%; 3,600 ÷ 7,020 = 51%. The point is not that one is better; it is that running costs are a large share of the total, so compare what is included after launch.",
        },
      ],
    },
    {
      h2: "How to compare two website quotes",
      blocks: [
        {
          type: "ol",
          items: [
            "Ask for the page list and the functionality list in writing. Same price with fewer pages is a higher price.",
            "Check who owns the design files, the code and the content after payment.",
            "Ask what happens after launch: support period, response time, and the hourly rate for changes.",
            "Ask whether hosting, security updates and backups are included, and for how long.",
            "Ask for launch SEO basics: titles, redirects from the old site, and tracking. A rebuild can lose traffic; see our [website migration SEO checklist](/blog/website-migration-seo-checklist).",
            "Ask whether the quote includes VAT (UK) or sales tax (US), and whether you can reclaim it.",
            "Ask for two recent examples of similar work that you can open and test on your phone.",
          ],
        },
      ],
    },
    {
      h2: "When a cheaper option is the right choice",
      blocks: [
        {
          type: "p",
          text: "A $1,500 freelancer build or a template you set up yourself is a sensible choice for a new business that needs a simple, credible presence and has no integrations. Spend more when the site is how customers find and pay you, when you need ecommerce or CRM integration, or when downtime or errors would cost you sales. If you are not sure which side you are on, a written quote for the smallest version that works is a reasonable first step.",
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Write down your page list and must-have functions, fill in the three-year worksheet for two quotes, and compare the totals. If you would like one of those quotes from us, send us the list.",
  },
  faqs: [
    {
      q: "How much does a small business website cost?",
      a: "Published UK guides give about £2,000 to £8,000 for a professionally built small-business site. US guides range from about $1,500 to $5,000 for freelancers up to $10,000 to $35,000 for small agencies. The range reflects scope and who builds it.",
    },
    {
      q: "How much does a WordPress website cost?",
      a: "A self-managed WordPress site costs roughly a domain at $12 to $25 a year, hosting at $40 to $150 a year and an optional premium theme at $30 to $100. A freelancer build is quoted at about $1,500 to $5,000 and an agency build at about $5,000 to $15,000 in the guides we reviewed.",
    },
    {
      q: "How much does an ecommerce website cost?",
      a: "UK guides put typical agency builds at £5,000 to £15,000, and up to £40,000 for larger stores. US guides start around $10,000 and go to $30,000 or more.",
    },
    {
      q: "Do I have to pay monthly for a website?",
      a: "You pay for hosting and a domain, and you should budget for maintenance. Monthly maintenance is quoted from about $35 to $500 in one US guide. Whether it is optional depends on the platform and how much you can manage yourself.",
    },
    {
      q: "Why do agency quotes differ so much?",
      a: "Quotes differ in page count, custom design, functionality, content, support and ownership terms. Compare line by line using the worksheet above.",
    },
  ],
  sources: [
    {
      label: "Blue Whale Media: How much does a website cost to build? (UK)",
      url: "https://bluewhalemedia.co.uk/much-website-cost-build/",
    },
    { label: "ProfileTree: UK website design costs", url: "https://profiletree.com/uk-website-design-costs/" },
    {
      label: "Spotdev: average cost of website design in the UK",
      url: "https://www.spotdev.co.uk/blog/what-is-the-average-cost-of-website-design-in-the-uk",
    },
    {
      label: "Kwiboo: how much does a website cost in the UK, 2026 breakdown",
      url: "https://www.kwiboo.com/blog/How-much-does-a-website-cost-in-the-UK-A-2026-breakdown",
    },
    {
      label: "Dribbble: web design agency pricing",
      url: "https://dribbble.com/resources/tips/web-design-agency-pricing",
    },
    {
      label: "Bookipi: how much do agencies charge for website design?",
      url: "https://bookipi.com/marketing/agency-website-cost/",
    },
    {
      label: "Arounda: website design cost for a small business",
      url: "https://arounda.agency/blog/how-much-does-a-website-design-cost-for-a-small-business",
    },
    {
      label: "WebsiteSetup: how much does a website cost?",
      url: "https://websitesetup.org/how-much-does-a-website-cost/",
    },
    { label: "WPZoom: business website cost", url: "https://www.wpzoom.com/blog/business-website-cost/" },
  ],
};
