import type { Post } from "./types";

export const shopifyStoreCost: Post = {
  slug: "shopify-store-cost",
  title: "How much does a Shopify store cost? Setup, apps and monthly fees",
  metaTitle: "Shopify Store Cost UK: Setup, Apps and Monthly Fees",
  metaDescription:
    "How much does a Shopify store cost? Plan prices in pounds and dollars, apps, payment fees and build costs, and the sales needed to justify a bigger plan.",
  primaryKeyword: "how much does a shopify store cost",
  secondaryKeywords: [
    "shopify store cost",
    "shopify setup cost",
    "shopify monthly cost",
    "ecommerce website cost",
    "shopify pricing plans",
    "shopify transaction fees",
    "shopify apps cost",
  ],
  parent: "shopify-web-design",
  scene: "platforms",
  related: ["shopify-vs-wordpress", "how-much-does-a-website-cost", "website-maintenance-cost"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-23",
  takeaways: [
    "Shopify's current plan prices and card rates in pounds and dollars, from Shopify's own pricing pages",
    "Everything the plan does not cover: domain, theme, apps, email and payment fees, with a year-one cost for three store sizes",
    "A calculation that shows how much you must sell each month before a bigger plan pays for itself",
  ],
  answer: [
    "A Shopify plan costs $29, $79 or $299 a month in the US and £19, £49 or £259 in the UK on Shopify's own pricing pages, with prices shown for yearly billing, and Plus from $2,300 or £1,800. Most plans start with a free three-day trial and then $1 a month for three months, and there are no setup fees. The plan is not the whole bill: a small live store typically costs about $30 a month before payment fees, and about $93 to $113 once it has a paid theme and a few apps.",
    "Below are the plan prices, what each cost covers, a year-one worksheet and a calculation for when a bigger plan pays off. If you want a store built for you, see our [Shopify web design service](/services/shopify-web-design/).",
  ],
  disclosure:
    "AJ Creationz builds Shopify stores, so we sell what this guide describes. Plan prices come from Shopify's own pages, checked on 14 October 2026. App, theme and build costs come from third-party guides, many written by agencies, so treat them as indicative.",
  sections: [
    {
      h2: "Shopify pricing plans",
      blocks: [
        {
          type: "table",
          caption: "Shopify plans, prices shown for yearly billing (Shopify pricing pages, 14 October 2026)",
          head: ["Plan", "US price", "UK price", "Online card rate, US", "Online card rate, UK", "Staff accounts"],
          rows: [
            ["Basic", "$29 a month", "£19 a month", "2.9% + 30¢", "2% + 25p", "Solo"],
            ["Grow", "$79 a month", "£49 a month", "2.7% + 30¢", "1.7% + 25p", "Up to 5"],
            ["Advanced", "$299 a month", "£259 a month", "2.5% + 30¢", "1.5% + 25p", "Up to 15"],
            ["Plus", "From $2,300 a month", "From £1,800 a month", "2.25% + 30¢", "From 1.3% + 25p", "Unlimited"],
          ],
          note: "Shopify's pages show these prices with a pay-yearly option selected. Monthly billing costs more, so check the toggle before you budget. Shopify says there are no setup fees, and that most plans start with a free three-day trial and then $1 (or £1) a month for the first three months.",
        },
        {
          type: "p",
          text: "Every plan includes unlimited hosting, a free SSL certificate and the ability to use a custom domain. Basic suits solo stores and new businesses, Grow adds more staff accounts and a lower card rate, and Advanced adds the lowest published card rate and live third-party shipping rates.",
        },
      ],
    },
    {
      h2: "What the plan does not cover",
      blocks: [
        {
          type: "ul",
          items: [
            "**Domain name:** bought separately. A .com typically costs about $14 to $20 a year through Shopify, and $10 to $30 a year in other guides.",
            "**Theme:** free themes, including Dawn, are professionally designed and a sound starting point. Paid themes cost about $150 to $400 once.",
            "**Apps:** from nothing to $100 or more a month for a small store, and $80 to $150 or more for a store with a full marketing stack.",
            "**Email marketing:** Shopify Email is free up to 10,000 emails a month. A dedicated tool such as Klaviyo starts around $20 a month and climbs with your list.",
            "**Payment fees:** charged on every order. See the next section.",
            "**Your time:** managing apps, product data and updates.",
          ],
        },
        {
          type: "table",
          caption: "Common apps and typical prices (one third-party guide, 2026)",
          head: ["App type", "Free option", "Typical paid price"],
          rows: [
            ["Product reviews", "Yes", "About $15 a month"],
            ["Email marketing beyond the free tier", "Shopify Email", "$1 per 1,000 emails over 10,000"],
            ["Dedicated email tool", "Yes, up to 250 contacts", "$20 or more a month, rising with list size"],
            ["Loyalty programme", "Basic options", "$20 to $49 or more a month"],
            ["Abandoned cart recovery", "Built-in emails", "$10 to $20 or more a month"],
            ["Upsells and bundles", "Several", "$10 to $30 or more a month"],
          ],
          note: "Source: FS Code (2026). Trials convert to paid plans automatically, so review installed apps every month.",
        },
      ],
    },
    {
      h2: "Payment and transaction fees",
      blocks: [
        {
          type: "p",
          text: "Each order carries a card-processing fee, shown in the table above. If you use a third-party payment provider instead of Shopify Payments, Shopify charges an extra fee on top of what the provider charges: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. Check that Shopify Payments is available in your country before you commit, because without it the extra fee applies to every sale.",
        },
      ],
    },
    {
      h2: "Worksheet: what a Shopify store costs in year one",
      blocks: [
        {
          type: "callout",
          title: "Year one = 12 × (plan + apps + email) + domain + theme + build, plus payment fees on sales",
          text: "Payment fees depend on revenue, so they are left out of the totals. The scenarios below use US yearly-billed prices from FS Code's three store types.",
        },
        {
          type: "table",
          caption: "Illustrative year-one running cost, in dollars (build cost not included)",
          head: ["Line", "New store", "Small store, 6 to 12 months in", "Growing store"],
          rows: [
            ["Plan, 12 months", "$29 × 12 = $348", "$29 × 12 = $348", "$79 × 12 = $948"],
            ["Domain, a year", "$15", "$15", "$15"],
            ["Paid theme, one time", "$0 (free theme)", "$300", "$0 (already bought)"],
            ["Apps", "$0 (free only)", "$50 × 12 = $600", "$80 to $120 × 12 = $960 to $1,440"],
            ["Email tool", "$0", "$0 to $20 × 12 = $0 to $240", "$45 to $60 × 12 = $540 to $720"],
            ["Year-one total", "$363", "$1,263 to $1,503", "$2,463 to $3,123"],
          ],
          note: "Check: 348 + 15 = 363; 348 + 15 + 300 + 600 = 1,263, plus up to 240 gives 1,503; 948 + 15 + 960 + 540 = 2,463 and 948 + 15 + 1,440 + 720 = 3,123. In pounds at £1 = $1.27, the new store's year-one running cost is about £286. Payment fees, shipping, stock and marketing are extra.",
        },
      ],
    },
    {
      h2: "When does a bigger plan pay for itself?",
      blocks: [
        {
          type: "p",
          text: "A higher plan lowers the card-processing rate, so it pays off once your monthly card sales are high enough that the saving exceeds the extra plan fee. The fixed per-order part of the fee is the same on every plan, so only the percentage matters.",
        },
        {
          type: "callout",
          title: "Break-even monthly card sales = extra plan price ÷ drop in the card rate",
          text: "Assumes all sales go through Shopify Payments by card and that you use what the bigger plan offers.",
        },
        {
          type: "table",
          caption: "Break-even monthly card sales for each upgrade",
          head: ["Upgrade", "US: extra plan fee, rate drop, break-even", "UK: extra plan fee, rate drop, break-even"],
          rows: [
            ["Basic to Grow", "$50 ÷ 0.2% = $25,000", "£30 ÷ 0.3% = £10,000"],
            ["Basic to Advanced", "$270 ÷ 0.4% = $67,500", "£240 ÷ 0.5% = £48,000"],
            ["Grow to Advanced", "$220 ÷ 0.2% = $110,000", "£210 ÷ 0.2% = £105,000"],
          ],
          note: "Check: 50 ÷ 0.002 = 25,000, and 30 ÷ 0.003 = 10,000. Staff accounts, reporting and shipping features may justify a higher plan sooner. Start on Basic and upgrade when your sales reach the break-even and you need the features.",
        },
      ],
    },
    {
      h2: "What it costs to have someone build the store",
      blocks: [
        {
          type: "p",
          text: "Build cost is separate from the running costs above, and it depends on how much design and development you need. Third-party guides give these ranges:",
        },
        {
          type: "table",
          caption: "Shopify build costs from published guides, in dollars",
          head: ["Route", "Typical cost", "Source"],
          rows: [
            ["Do it yourself with a theme", "$0 to $1,000", "ShipAid and Ecomm.Design (2026)"],
            ["Basic development package: tweaks and integrations", "$500 to $2,000", "Ecomm.Design"],
            ["Intermediate: theme customisation, SEO, optimisation", "$2,000 to $5,000", "Ecomm.Design"],
            ["Advanced: comprehensive design and development", "$5,000 to $10,000 or more", "Ecomm.Design"],
            ["Fully custom theme", "$3,000 to $7,000", "Ecomm.Design"],
          ],
          note: "Ecomm.Design estimates the initial launch at $500 to $1,000 for a small business, $2,000 to $5,000 for a mid-sized one and $10,000 or more for a large one. UK agency ecommerce builds are covered in our [website cost guide](/blog/how-much-does-a-website-cost/), which gives £5,000 to £15,000 for typical agency builds.",
        },
        {
          type: "p",
          text: "If you hire developers for ongoing work after launch, one guide puts support at $300 to $1,500 or more a month. For upkeep costs across platforms see [website maintenance cost](/blog/website-maintenance-cost/), and for whether Shopify is the right platform see [Shopify vs WordPress](/blog/shopify-vs-wordpress/).",
        },
      ],
    },
    {
      h2: "Costs that surprise new store owners",
      blocks: [
        {
          type: "ul",
          items: [
            "Assuming the plan price is the monthly total. It covers the storefront, checkout and hosting. Apps, domain and fees are extra.",
            "App trials that turn into paid subscriptions you forget to cancel.",
            "Choosing Grow or Advanced before sales justify it. Use the break-even table.",
            "Email costs that climb as your list grows.",
            "Buying a premium theme when a free one would do.",
            "Not checking whether Shopify Payments is available in your country.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Pick the plan on Basic unless your sales already pass the break-even, list the apps you truly need, and fill in the year-one table. If you want the store built and set up properly, send us your products and goals and we will give you a written scope.",
  },
  faqs: [
    {
      q: "How much does it cost to start a Shopify store?",
      a: "The plan starts at $29 a month in the US or £19 in the UK with yearly billing, with no setup fees. A new store using a free theme and free apps runs about $30 a month before payment fees, plus a domain at roughly $14 to $20 a year.",
    },
    {
      q: "Is there a Shopify free trial?",
      a: "Shopify says it starts with a free three-day trial with no credit card needed. After that, most plans cost $1 (or £1 in the UK) a month for the first three months, then the standard price.",
    },
    {
      q: "How much are Shopify transaction fees?",
      a: "Online card rates are 2.9% + 30¢ on Basic, 2.7% on Grow, 2.5% on Advanced and 2.25% on Plus in the US, and from 2% + 25p on Basic in the UK. Using a third-party payment provider adds 2%, 1%, 0.6% or 0.2% depending on plan.",
    },
    {
      q: "Do I have to pay for a Shopify theme?",
      a: "No. Free themes such as Dawn are a legitimate starting point for most stores. Paid themes cost about $150 to $400 as a one-off.",
    },
    {
      q: "Is a domain included in the Shopify plan?",
      a: "No. You buy it separately, and a .com is typically about $14 to $20 a year through Shopify. The plan includes hosting and an SSL certificate.",
    },
    {
      q: "Should I choose Shopify Basic or Grow?",
      a: "Start on Basic and move up when your monthly card sales pass the break-even in this guide, or when you need more staff accounts. At the US rates that is about $25,000 a month, and in the UK about £10,000.",
    },
    {
      q: "What hidden costs does Shopify have?",
      a: "Apps and their trials, email as your list grows, payment fees that scale with sales, a premium theme if you choose one, and your own time. None is hidden by Shopify, but all are easy to miss in a budget.",
    },
    {
      q: "How much does it cost to have someone build a Shopify store?",
      a: "Third-party guides give $500 to $2,000 for a basic development package, $2,000 to $5,000 for an intermediate one and $5,000 to $10,000 or more for advanced work. UK agency ecommerce builds are often £5,000 to £15,000.",
    },
  ],
  sources: [
    { label: "Shopify: pricing (US), checked 14 October 2026", url: "https://www.shopify.com/pricing" },
    { label: "Shopify: pricing (UK), checked 14 October 2026", url: "https://www.shopify.com/uk/pricing" },
    {
      label: "FS Code: how much does it cost to run a Shopify store in 2026?",
      url: "https://www.fs-code.com/blog/shopify-store-cost",
    },
    {
      label: "Ecomm.Design: how much does it cost to design and build a Shopify website?",
      url: "https://ecomm.design/how-much-does-it-cost-to-build-a-shopify-website/",
    },
    {
      label: "Ecomm.Design: how much does it cost to run a Shopify store?",
      url: "https://ecomm.design/how-much-does-it-cost-to-run-a-shopify-store/",
    },
    {
      label: "ShipAid: understanding the costs of building a Shopify website",
      url: "https://www.shipaid.com/blogs/shopify-guides/understanding-the-costs-how-much-to-build-a-shopify-website",
    },
  ],
};
