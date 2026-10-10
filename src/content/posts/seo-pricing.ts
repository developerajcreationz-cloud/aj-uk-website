import type { Post } from "./types";

export const seoPricing: Post = {
  slug: "seo-pricing",
  title: "SEO pricing: how much does SEO cost for a small business?",
  metaTitle: "SEO Pricing: What Small Businesses Should Pay in 2026",
  metaDescription:
    "SEO pricing explained: monthly retainer ranges in pounds and dollars, what each tier should include, and a break-even formula to test if SEO is worth it.",
  primaryKeyword: "seo pricing",
  secondaryKeywords: [
    "how much does seo cost",
    "cheap seo packages",
    "is seo worth it",
    "local seo cost",
    "seo retainer cost",
    "small business seo cost per month",
  ],
  parent: "seo-growth",
  related: ["how-much-does-a-website-cost", "google-ads-vs-facebook-ads"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  takeaways: [
    "Typical monthly SEO prices for small businesses, in pounds and dollars, with named sources",
    "What you should receive at each price, so you can spot a package that is mostly automation",
    "A break-even formula, with the arithmetic shown, to decide if SEO is worth it for your business",
  ],
  answer: [
    "SEO pricing for a small business usually lands between £500 and £2,000 a month in UK guides, and between $500 and $5,000 a month in US guides. Local-only work can start lower, around £300 a month, and competitive national or ecommerce campaigns run higher, from about £2,000 to £8,000 a month. Freelancers are cheaper, at roughly £300 to £1,000 or $300 to $1,500 a month, but you rely on one person.",
    "How much does SEO cost in practice depends on what you are paying for: technical fixes, content, links and reporting all take different amounts of time. Prices under about £400 a month are treated with suspicion by several UK providers, who say they usually cover automated tasks with little strategy. This guide shows the ranges, what each tier should include, and a formula to test whether SEO is worth it for your numbers. If you want a scoped plan, see our [SEO and growth service](/services/seo-growth).",
  ],
  disclosure:
    "AJ Creationz sells SEO, and nearly every price guide we found is also published by an SEO provider. Treat all ranges as indicative and compare written quotes.",
  sections: [
    {
      h2: "SEO pricing by type of provider",
      blocks: [
        {
          type: "table",
          caption: "Indicative monthly SEO prices",
          head: ["Type", "UK guides (£ per month)", "US guides ($ per month)"],
          rows: [
            [
              "Typical small-business retainer",
              "£500 – £2,000 (one guide says most land at £500 – £900)",
              "$500 – $5,000",
            ],
            ["Local-only SEO", "from about £300", "$500 – $2,500"],
            ["Freelancer", "£300 – £1,000 (another guide: £50 – £500)", "$300 – $1,500"],
            ["Agency", "£500 – £5,000+", "$1,500 – $5,000 for mid-size agencies"],
            ["Competitive national or ecommerce", "£2,000 – £8,000", "not separated in the guides we reviewed"],
            ["One-off audit, rebuild or migration", "not separated", "$1,000 – $5,000"],
          ],
          note: "Sources are listed at the end. One UK agency claims prices rose 15% to 30% since 2024; that is a single agency's statement, not an independent survey.",
        },
      ],
    },
    {
      h2: "What you should get for the money",
      blocks: [
        {
          type: "p",
          text: "Package names mean little. Ask for the list of work and the monthly hours, and check it against this.",
        },
        {
          type: "ul",
          items: [
            "**Technical audit and fixes:** crawling, indexing, speed and mobile problems, with a list of what was changed.",
            "**Keyword and page plan:** which page targets which search, based on the searches your customers use.",
            "**Content:** new or improved pages with a named author, not filler.",
            "**Local SEO, if you serve a place:** a complete Google Business Profile, consistent name, address and phone, and review handling.",
            "**Authority work:** earned mentions and links from real sites, not bulk directory submissions.",
            "**Reporting:** leads and calls from search, not only rankings, in a monthly report you can understand.",
          ],
        },
        {
          type: "callout",
          title: "Cheap SEO packages",
          text: "Several UK providers say packages under about £400 a month, and a blogger's £150 to £250 packages, are mostly automated citation submissions with little strategy. That is their opinion, but it is a useful test: ask what a person actually does each month. Google also says no one can guarantee a top ranking, so be wary of anyone who promises one.",
        },
      ],
    },
    {
      h2: "Is SEO worth it? A break-even test",
      blocks: [
        {
          type: "p",
          text: "SEO is worth it when the gross profit from the customers it brings in exceeds what you pay. Work it out with three numbers from your own business.",
        },
        {
          type: "callout",
          title: "Monthly gross profit from SEO = leads × close rate × gross profit per customer",
          text: "Break-even month = total SEO spend to date ÷ monthly gross profit from SEO.",
        },
        {
          type: "p",
          text: "This worked example is illustrative; the figures are assumptions, not a forecast or a promise.",
        },
        {
          type: "table",
          caption: "Illustrative break-even for a £1,000 monthly retainer",
          head: ["Step", "Number", "Arithmetic"],
          rows: [
            ["Search leads per month once the work has built up", "12", "assumption"],
            ["Share of those leads that become customers", "25%", "assumption"],
            ["Gross profit per customer", "£800", "assumption"],
            ["Monthly gross profit from SEO", "£2,400", "12 × 0.25 × 800"],
            ["Monthly profit after the £1,000 fee", "£1,400", "2,400 − 1,000"],
            ["Spend before leads arrive (first 4 months at £1,000)", "£4,000", "4 × 1,000"],
            ["Months of £1,400 profit needed to repay that", "about 3", "4,000 ÷ 1,400 = 2.9"],
          ],
          note: "If your real numbers are 4 leads, 20% and £500, monthly profit is 4 × 0.20 × 500 = £400, which is below a £1,000 fee. SEO would not pay for itself at that price. Run your own numbers before you buy.",
        },
        {
          type: "p",
          text: "Search results take time, so always include months with no return in the formula. Ask any provider to put expected timing and what you will see in the first 90 days in writing.",
        },
      ],
    },
    {
      h2: "Local SEO cost and when it is enough",
      blocks: [
        {
          type: "p",
          text: "If you serve customers in a town or region, local SEO is often enough on its own: guides put it at about £300 a month in the UK and $500 to $2,500 in the US. It focuses on your Google Business Profile, reviews, consistent business details and location-relevant pages. If you sell nationally or online, you need the broader work above, which costs more. Our [website development](/services/website-development) work covers the technical side if your site is the bottleneck.",
        },
      ],
    },
    {
      h2: "Questions to ask before you sign",
      blocks: [
        {
          type: "ol",
          items: [
            "What exactly will be done each month, and by whom?",
            "How will you measure success: leads and revenue, or rankings only?",
            "Do I own the content, the accounts and the reports if we part ways?",
            "What is the contract length and notice period?",
            "Which links or mentions will you pursue, and how?",
            "Can I see two clients in a similar situation I can contact?",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Fill in the break-even table with your own lead count, close rate and gross profit. If the monthly profit is below the fee you were quoted, either lower the scope or fix your website or sales process first.",
  },
  faqs: [
    {
      q: "How much does SEO cost per month for a small business?",
      a: "UK guides mostly give £500 to £2,000 a month, and US guides $500 to $5,000. Local-only work can start around £300 a month.",
    },
    {
      q: "Is SEO worth it for a small business?",
      a: "It can be, if the profit from the customers it brings exceeds the fee after the waiting period. Use the break-even formula in this guide with your own numbers.",
    },
    {
      q: "What is the difference between a freelancer and an agency?",
      a: "Freelancers are cheaper, roughly £300 to £1,000 or $300 to $1,500 a month, but you depend on one person. Agencies cost more and split the work across a team.",
    },
    {
      q: "Are cheap SEO packages worth it?",
      a: "Several UK providers say packages under about £400 a month are mostly automated work. Ask what a person does each month before you buy.",
    },
    {
      q: "How long does SEO take?",
      a: "It takes months, not days, and results vary with competition and your site's starting point. Ask for the expected timing in writing and treat guaranteed rankings as a warning sign.",
    },
  ],
  sources: [
    { label: "whitehat-seo.co.uk: SEO costs UK", url: "https://whitehat-seo.co.uk/blog/seo-costs-uk" },
    { label: "whitehat-seo.co.uk: SEO pricing UK 2026", url: "https://whitehat-seo.co.uk/blog/seo-package-prices" },
    {
      label: "Epic Edits: how much does SEO cost in the UK?",
      url: "https://epicedits.co.uk/blog/how-much-does-seo-cost-uk/",
    },
    { label: "whito.co.uk: UK SEO costs", url: "https://whito.co.uk/research/uk-seo-costs/" },
    {
      label: "Polaris Agency: SEO pricing guide",
      url: "https://www.polarisagency.com/marketing-insights/seo-pricing-guide/",
    },
    { label: "SEO.com: SEO pricing", url: "https://www.seo.com/pricing/" },
    { label: "SEOProfy: SEO pricing", url: "https://seoprofy.com/blog/seo-pricing/" },
    { label: "W3Era: SEO cost for small business", url: "https://www.w3era.com/blog/seo/seo-cost-small-business-usa/" },
  ],
};
