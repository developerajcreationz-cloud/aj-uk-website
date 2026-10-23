import type { Post } from "./types";

export const gohighlevelPricing: Post = {
  slug: "gohighlevel-pricing",
  title: "GoHighLevel pricing: plans, usage fees and the real monthly cost",
  metaTitle: "GoHighLevel Pricing 2026: Plans, Usage Fees and Real Cost",
  metaDescription:
    "GoHighLevel pricing explained: the $97, $297 and $497 plans, text and email usage fees, and a year-one cost for one business in dollars and pounds.",
  primaryKeyword: "gohighlevel pricing",
  secondaryKeywords: [
    "how much does gohighlevel cost",
    "gohighlevel cost per month",
    "gohighlevel plans",
    "gohighlevel sms pricing",
    "gohighlevel free trial",
    "gohighlevel a2p registration fee",
    "is gohighlevel worth it",
  ],
  parent: "gohighlevel-crm",
  scene: "crm",
  related: ["gohighlevel-vs-hubspot", "hubspot-alternatives", "website-maintenance-cost"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  takeaways: [
    "The three plan prices and who each one is for, taken from HighLevel's own pricing page",
    "Every usage fee that sits on top of the plan (texts, calls, email, AI, registration) in one table",
    "A year-one cost for a single business in two scenarios, with the arithmetic shown, in dollars and pounds",
  ],
  answer: [
    "GoHighLevel costs $97, $297 or $497 a month, depending on the plan, with no long-term contract and a 14-day free trial on any plan. Every plan includes unlimited contacts and users. For one business, the $97 Starter plan is the one that matters. The plan fee is not the whole bill: texts, calls, email and AI are charged on usage, so the realistic cost for one business is about $120 a month with light use and about $230 with heavy use. In pounds, that is roughly £96 and £179 at £1 = $1.27, before any VAT.",
    "This guide lists the three plans, every usage fee we could find in HighLevel's own help articles, and a worksheet to work out your own year-one cost. If you would rather have the system built for you, see our [GoHighLevel CRM service](/services/gohighlevel-crm/).",
  ],
  disclosure:
    "AJ Creationz sets up GoHighLevel, so we are not neutral. Plan prices come from HighLevel's pricing page, checked on 14 October 2026. Usage rates come from HighLevel help articles as collected by a third-party guide, and they change, so confirm them in your own account before you budget.",
  sections: [
    {
      h2: "GoHighLevel pricing: the three plans",
      blocks: [
        {
          type: "p",
          text: "HighLevel sells three published plans plus a custom Enterprise tier. The fee is per agency account, not per user, which is the biggest difference from tools such as HubSpot that charge per seat.",
        },
        {
          type: "table",
          caption: "GoHighLevel plans (HighLevel pricing page, checked 14 October 2026)",
          head: ["Plan", "Monthly", "Billed yearly", "Sub-accounts", "What changes"],
          rows: [
            ["Starter", "$97", "$970", "3", "All core features, unlimited contacts and users, 24/7 support"],
            [
              "Unlimited",
              "$297",
              "$2,970",
              "Unlimited",
              "Rebill phone and email usage with no markup, basic API access",
            ],
            [
              "Agency Pro",
              "$497",
              "$4,970",
              "Unlimited",
              "SaaS Mode, rebilling with markup, user and agent reporting, advanced API",
            ],
            [
              "Enterprise",
              "Custom",
              "Custom",
              "Unlimited",
              "Dedicated success manager, premium support, HIPAA included",
            ],
          ],
          note: "Paying yearly costs ten months of the monthly price: $970 is 10 × $97, so you get two months free. The pricing page says there is no long-term contract and you can upgrade, downgrade or cancel from the dashboard.",
        },
        {
          type: "p",
          text: "**Which plan does one business need?** Starter. The three sub-accounts only matter if you run separate brands or locations that each need their own numbers and pipelines. The Unlimited and Agency Pro plans exist for agencies that run many client accounts or want to resell GoHighLevel as their own software.",
        },
        {
          type: "h3",
          text: "Is there a free trial or a free plan?",
        },
        {
          type: "p",
          text: "There is a free 14-day trial on any plan, with full access to the tier you choose. There is no free plan: the cheapest option is $97 a month.",
        },
      ],
    },
    {
      h2: "The usage fees that sit on top of the plan",
      blocks: [
        {
          type: "p",
          text: "HighLevel states on its pricing page that the subscription covers the platform, and that phone numbers, texts, email and some AI are billed on usage. The rates sit in separate help articles, so most buyers never see them together. Here they are in one place, with the article dates a third-party guide recorded.",
        },
        {
          type: "table",
          caption: "Usage rates in dollars (US texting; rates recorded July to September 2026)",
          head: ["Item", "Rate", "Notes"],
          rows: [
            ["Local phone number", "$1.15 a month", "Toll-free numbers are $2.15 a month"],
            [
              "Text message, sent or received",
              "$0.00747 a segment",
              "Carrier fees of $0.003 to $0.005 a segment are added on registered traffic",
            ],
            ["Picture message (MMS)", "$0.022 a segment", ""],
            ["Outbound call", "$0.0166 a minute", "Inbound is $0.01165 a minute"],
            ["Email sent", "$0.675 per 1,000", "Verification is $2.50 per 1,000 checks; a dedicated IP is $59 a month"],
            [
              "US texting registration (A2P 10DLC)",
              "$24.50 once, or $71.91 once",
              "Lower figure for sole proprietors and low-volume standard brands; campaign fee $2 to $10 a month",
            ],
            ["Premium workflow actions", "100 free, then $0.01 each", "Or monthly tiers from $10 for 10,000 runs"],
            [
              "AI Employee",
              "$50 or $97 a month per sub-account",
              "Or pay per use; Voice AI is $0.045 a minute plus the voice and model costs",
            ],
            ["Markup on phone charges", "5%", "Applied at sub-account level whether or not you rebill it"],
          ],
          note: "Source: HighLevel help articles, collected by Apexure (2026). A text over 160 characters is two segments, and a message with an emoji is limited to 70 characters a segment, so 500 texts can show as 1,000 segments on the bill.",
        },
        {
          type: "p",
          text: "**Two lines surprise people.** The 5% on every phone charge, and registration before US texting works: a new account cannot send marketing texts until the carriers approve its brand and campaign, which takes days. Plan the launch date around that, not around the plan you bought.",
        },
        {
          type: "p",
          text: "**UK message rates differ.** The rates above are for texting US numbers. One UK agency page puts texts to UK numbers at about 3.5p to 4.5p each through Twilio, a vendor claim we could not check against HighLevel's own documents. Ask for UK rates in your account before you rely on them.",
        },
      ],
    },
    {
      h2: "Optional add-ons from the pricing page",
      blocks: [
        {
          type: "p",
          text: "Most single businesses need none of these. The ones people ask about are:",
        },
        {
          type: "ul",
          items: [
            "**AI Employee Growth, $50 a month per sub-account:** 1,000 chatbot replies and 100 voice minutes. AI Employee Unlimited is $97 a month.",
            "**Branded client portal app, $49 a month per sub-account.**",
            "**Dedicated email IP, $59 a month per IP**, only worth it at high send volumes.",
            "**Online listings management, $30 a month**, and **WhatsApp, $10 a month** per sub-account.",
            "**Premium support, $500 a month**, and **HIPAA compliance, $297 a month.**",
            "**White-label mobile app, $497 a month**, aimed at agencies.",
          ],
        },
      ],
    },
    {
      h2: "Worksheet: what GoHighLevel costs one business in year one",
      blocks: [
        {
          type: "p",
          text: "Use this formula, then replace our assumptions with your own volumes. We kept the assumptions simple and listed them so you can check each line.",
        },
        {
          type: "callout",
          title: "Monthly cost = plan + (numbers + texts) × 1.05 + email + registration campaign + AI add-on",
          text: "Year one = 12 × monthly cost + the one-off registration fee. The 1.05 is HighLevel's 5% on phone charges. Add VAT if it applies to you.",
        },
        {
          type: "table",
          caption: "Illustrative monthly cost, one business on the Starter plan",
          head: ["Line", "Light use", "Busy"],
          rows: [
            ["Assumption: texts a month (segments)", "1,000", "5,000"],
            ["Assumption: emails a month", "4,000", "20,000"],
            ["Assumption: local numbers", "1", "2"],
            ["Starter plan, billed monthly", "$97.00", "$97.00"],
            ["AI Employee Growth", "none", "$50.00"],
            ["Numbers: count × $1.15 × 1.05", "$1.21", "$2.42"],
            ["Texts: segments × ($0.00747 + $0.003 carrier) × 1.05", "$10.99", "$54.97"],
            ["Email: thousands × $0.675", "$2.70", "$13.50"],
            ["Registration campaign, standard brand", "$10.00", "$10.00"],
            ["Monthly total", "$121.90", "$227.89"],
            ["In pounds at £1 = $1.27", "about £96", "about £179"],
            ["Year one: 12 × monthly + $24.50 registration", "$1,487.30", "$2,759.18"],
            ["Year one in pounds", "about £1,171", "about £2,173"],
          ],
          note: "Check: 97 + 1.21 + 10.99 + 2.70 + 10 = 121.90, and 12 × 121.90 + 24.50 = 1,487.30. If you pay for the Starter plan yearly in the light scenario, year one is 970 + 12 × 24.90 + 24.50 = $1,293.30, about £1,018. The exchange rate moves daily, so recalculate with today's rate. Voice AI, calls, dedicated IPs, extra workflow actions and VAT are not included.",
        },
        {
          type: "p",
          text: "The point is not the exact figure. It is that the plan fee is about 80% of the bill in the light scenario and about 43% in the busy one, so the usage lines decide what you pay once you send real volume.",
        },
      ],
    },
    {
      h2: "Is GoHighLevel worth it for a small business?",
      blocks: [
        {
          type: "p",
          text: "It depends on what it replaces. HighLevel's own pricing page says most users replace their CRM, funnel builder, email tool, booking tool, SMS tool and review tool. That is a vendor claim, so test it with your own numbers: add up what you pay today for those tools, and compare the total with $122 to $228 a month.",
        },
        {
          type: "ul",
          items: [
            "**A good fit:** a service business paying for three or more separate tools, with leads arriving by phone, forms and ads, and someone willing to spend time on setup.",
            "**A weaker fit:** a solo operator with a short contact list who only needs a simple pipeline and invoices. Lighter tools cost less.",
            "**Check first:** online stores that depend on Shopify, and teams tied to deep Salesforce or accounting integrations.",
          ],
        },
        {
          type: "p",
          text: "For a head-to-head view against a per-seat CRM, read [GoHighLevel vs HubSpot](/blog/gohighlevel-vs-hubspot/). If you are leaving HubSpot because of cost, see [HubSpot alternatives for small business](/blog/hubspot-alternatives/).",
        },
      ],
    },
    {
      h2: "What a done-for-you GoHighLevel setup costs",
      blocks: [
        {
          type: "p",
          text: "Setup is a separate cost from the subscription. One UK agency's published page (updated 12 September 2026) lists a starter build with one pipeline and calendar from £2,000, with light support from £99 a month, and fuller implementations from £3,500 with monthly plans from £199. Its prices exclude VAT, calls, numbers, messages and AI.",
        },
        {
          type: "p",
          text: "Treat that as one data point, not a market price: it is a provider selling the service. When you compare quotes, ask each provider to list setup, platform subscription, usage allowances and support terms separately, so you can compare like for like.",
        },
      ],
    },
    {
      h2: "Before you pay: a short checklist",
      blocks: [
        {
          type: "ol",
          items: [
            "Open HighLevel's pricing page and confirm the plan prices, because they change.",
            "Start the 14-day trial on the plan you expect to use, and build one real pipeline in it.",
            "Decide whether you will text. If so, start brand and campaign registration on day one, because approval takes days.",
            "Estimate your texts and emails a month, then fill in the worksheet above.",
            "Ask whether VAT or sales tax is added to your invoice and whether you can reclaim it.",
            "Write down which tools you will cancel, and when, so the saving is real.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Fill in the worksheet with your own volumes, then add up the tools you would cancel. If the saving is clear and you want the pipeline, forms and follow-up built properly, send us your current process and we will scope it in writing.",
  },
  faqs: [
    {
      q: "How much does GoHighLevel cost per month?",
      a: "The plans cost $97, $297 and $497 a month, or $970, $2,970 and $4,970 when billed yearly. Usage fees for texts, calls, email and AI are extra. For one business on the Starter plan, our worksheet gives about $122 a month with light use and about $228 with heavy use.",
    },
    {
      q: "Is there a GoHighLevel free trial or free plan?",
      a: "There is a free 14-day trial on any plan, with full access to the plan you pick. There is no free plan.",
    },
    {
      q: "What is the difference between the $297 and $497 plans?",
      a: "Both have unlimited sub-accounts. The $497 Agency Pro plan adds SaaS Mode, so you can sell GoHighLevel under your own brand, rebill usage with a markup, and use advanced API access and user reporting.",
    },
    {
      q: "Are texts and emails included in the price?",
      a: "No. The plan covers the platform. Texts, calls, email and some AI are charged on usage, using a prepaid balance in your account.",
    },
    {
      q: "What is A2P 10DLC and what does it cost?",
      a: "It is the carrier registration US texting needs. Sources list a one-off brand fee of $24.50 for sole proprietors and low-volume brands, or $71.91 for high-volume brands, plus a campaign fee of $2 to $10 a month. Nothing sends until it is approved.",
    },
    {
      q: "Does GoHighLevel add VAT for UK customers?",
      a: "HighLevel prices in US dollars. Whether tax is added depends on your location and business status, so check the invoice in your trial. One UK agency states its own prices exclude VAT.",
    },
    {
      q: "Is GoHighLevel cheaper than HubSpot?",
      a: "GoHighLevel charges per account with unlimited users, while HubSpot charges per seat on paid plans. The answer depends on your team size and which channels you need. Our GoHighLevel vs HubSpot guide runs the numbers side by side.",
    },
    {
      q: "Can I cancel GoHighLevel at any time?",
      a: "HighLevel states it is month to month with no long-term contract, and you can upgrade, downgrade or cancel from the dashboard.",
    },
    {
      q: "How much does a GoHighLevel setup cost?",
      a: "It varies with scope. One UK provider lists a starter build from £2,000 and fuller builds from £3,500, excluding VAT and usage. Ask any provider to price setup, subscription, usage and support separately.",
    },
  ],
  sources: [
    { label: "HighLevel: pricing page, checked 14 October 2026", url: "https://www.gohighlevel.com/pricing" },
    {
      label: "Apexure: GoHighLevel pricing, usage rates from HighLevel help articles (2026)",
      url: "https://www.apexure.com/blog/gohighlevel-pricing",
    },
    {
      label: "Ecosire: GoHighLevel pricing, hidden costs and A2P (2026)",
      url: "https://ecosire.com/blog/gohighlevel-pricing-worth-it-2026",
    },
    {
      label: "GHL Experts: GoHighLevel plans and pricing (2026)",
      url: "https://www.ghlexperts.com/gohighlevel-plans-pricing",
    },
    {
      label: "SchedulingKit: GoHighLevel pricing guide (2026)",
      url: "https://schedulingkit.com/pricing-guides/gohighlevel-pricing",
    },
    {
      label: "Softomate Solutions: UK GoHighLevel setup pricing (updated 12 September 2026)",
      url: "https://www.softomatesolutions.com/ghl-automation-services-london/",
    },
  ],
};
