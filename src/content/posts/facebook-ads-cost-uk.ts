import type { Post } from "./types";

export const facebookAdsCostUk: Post = {
  slug: "facebook-ads-cost-uk",
  title: "How much do Facebook and Instagram ads cost in the UK?",
  metaTitle: "Facebook Ads Cost UK: CPC, CPM and a Budget Formula",
  metaDescription:
    "What Facebook and Instagram ads cost in the UK: typical CPC and CPM ranges, hidden extras like tax, and a formula to set a monthly budget from your goal.",
  primaryKeyword: "facebook ads cost uk",
  secondaryKeywords: [
    "instagram ads cost uk",
    "meta ads cost",
    "how much do facebook ads cost",
    "facebook ads budget for small business",
    "facebook advertising cost per click uk",
    "meta ads management cost",
  ],
  parent: "meta-ads-management",
  scene: "ads",
  related: ["google-ads-cost", "google-ads-vs-facebook-ads", "facebook-lead-ads-vs-landing-page"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  takeaways: [
    "The typical UK ranges for cost per click (CPC) and cost per 1,000 impressions (CPM) on Facebook and Instagram, with the sources and their limits",
    "A formula that turns the number of customers you want into a monthly ad budget, with a worked example you can copy",
    "The costs beyond the ads themselves: tax, creative, landing pages and management",
  ],
  answer: [
    "Facebook and Instagram ads have no fixed price, because Meta sells them in an auction. UK sources we checked in October 2026 put the average cost per click at roughly £0.70 to £1.10 on Facebook and around £2.50 on Instagram, and the cost per 1,000 impressions at roughly £6 to £12 on Facebook and £8 to £16 on Instagram. Competitive industries pay more. These are marketing-site estimates with different methods, so treat them as a starting range, not a quote.",
    "A better question than the cost of a click is what you can afford to pay for a customer. The sections below give the benchmark ranges, a formula that turns your goal into a monthly budget, and the extra costs people forget. If you are choosing between channels first, read [Google Ads vs Facebook Ads](/blog/google-ads-vs-facebook-ads/). To have the account run for you, see our [Meta ads management service](/services/meta-ads-management/).",
  ],
  disclosure:
    "AJ Creationz manages Meta ad accounts for clients. The figures below come from third-party UK sources, listed at the end, and your own account data will differ.",
  sections: [
    {
      h2: "What the UK benchmarks say",
      blocks: [
        {
          type: "table",
          caption: "Facebook and Instagram ad cost benchmarks quoted by UK sources (October 2026)",
          head: ["Measure", "Facebook", "Instagram", "Notes"],
          rows: [
            [
              "Cost per click (CPC)",
              "About £0.70 to £1.10",
              "About £2.50",
              "One guide gives £0.80 to £1.10, rising to £2.70 in competitive industries",
            ],
            [
              "Cost per 1,000 impressions (CPM)",
              "About £3 to £12",
              "About £8 to £16",
              "Sources range from £3 to £8 up to £6 to £12; one gives a UK average of £8.50",
            ],
            [
              "By industry (CPC)",
              "£0.40 to £0.90 retail and ecommerce",
              "-",
              "£1.20 to £2.80 for property; competitive services cost more",
            ],
          ],
          note: "These come from agency and finance blogs, not from Meta. Methods and dates differ, so use them to sense-check a quote, not to predict your results.",
        },
        {
          type: "p",
          text: "Two points make the benchmarks less useful than they look. First, the price you pay depends on your audience, your offer, the quality of the ad and how many other advertisers want the same people that week. Second, a cheap click only helps if it turns into an enquiry. A £0.50 click that never converts costs more per customer than a £2.00 click that does.",
        },
      ],
    },
    {
      h2: "How to set a monthly budget from your goal",
      blocks: [
        {
          type: "callout",
          title: "Monthly ad spend = customers wanted ÷ lead-to-customer rate ÷ click-to-lead rate × cost per click",
          text: "Work backwards from the customers you need. Each rate is a number you can estimate from your own sales and website data.",
        },
        {
          type: "table",
          caption:
            "Worked example: a local service business that wants 5 new customers a month (assumptions, not benchmarks)",
          head: ["Step", "Assumption", "Result"],
          rows: [
            ["Customers wanted", "5 a month", "5"],
            ["Lead-to-customer rate", "20% of enquiries become customers", "5 ÷ 0.20 = 25 leads"],
            ["Click-to-lead rate", "8% of ad clicks send an enquiry", "25 ÷ 0.08 = 312.5 clicks"],
            ["Cost per click", "£1.00", "312.5 × £1.00 = £312.50 ad spend"],
            ["Tax (if charged to you)", "2% surcharge, see below", "£312.50 × 1.02 = £318.75"],
            ["Cost per customer", "£318.75 ÷ 5", "£63.75"],
          ],
          note: "Compare the cost per customer with your gross profit per customer. If a customer is worth £400 in profit, £63.75 is affordable. If it is worth £50, the numbers do not work however good the ads are.",
        },
        {
          type: "p",
          text: "Change one assumption at a time. If your click-to-lead rate is 3% instead of 8%, the same goal needs about 833 clicks and roughly £833 of spend. That is why fixing the page people land on often saves more money than adjusting the ads. Our guide to [Facebook lead ads vs a landing page](/blog/facebook-lead-ads-vs-landing-page/) compares the two ways of collecting the enquiry.",
        },
        {
          type: "h3",
          text: "How much to spend while you are still testing",
        },
        {
          type: "p",
          text: "Until you have real data, treat the first month as a test. Spend enough to collect at least a few hundred clicks across two or three ad variations, then use your own click-to-lead rate in the formula. Stopping after £50 of spend tells you almost nothing, because a handful of clicks cannot show which ad works.",
        },
      ],
    },
    {
      h2: "Costs beyond the ad spend",
      blocks: [
        {
          type: "ul",
          items: [
            "**Tax.** One UK finance source says to budget for a 2% Digital Services Tax surcharge on UK ad spend. Check whether it appears on your invoices before you add it to your plan.",
            "**Creative.** Images, video and copy for the ads. Short videos often outperform static images, so allow for filming or editing. See our [video editing cost guide](/blog/video-editing-cost/).",
            "**A landing page or form that converts.** Ads send people somewhere. A slow or confusing page wastes the clicks you paid for.",
            "**Follow-up.** Leads that wait a day to hear back go cold. A phone number that is answered, or an automated reply, protects your ad spend. See [speed to lead](/blog/speed-to-lead/).",
            "**Management.** A freelancer or agency fee on top of the ad spend. We did not find an independent UK source for Meta management fees. UK quotes for Google Ads management run from about £300 to £3,000 a month or 10 to 20% of spend, and Meta is usually quoted in a similar way. Ask for the scope in writing.",
          ],
        },
      ],
    },
    {
      h2: "How to tell if you are overpaying",
      blocks: [
        {
          type: "ol",
          items: [
            "Look at cost per lead and cost per customer in your own account, not only cost per click.",
            "Compare cost per lead with the maximum you calculated above. If it is higher, change the offer, the page or the audience before raising the budget.",
            "Check that the lead is qualified. A low cost per lead from people who never answer is not a saving.",
            "Review frequency. If the same people see your ad many times, your audience is too small or the ad is tired.",
            "Ask your agency for the reporting that shows leads and sales, not only clicks and reach.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Run the budget formula with your own three rates",
    text: "Estimate your lead-to-customer rate from last quarter's enquiries, then put your best guess for click-to-lead and cost per click into the formula. If the cost per customer is below your gross profit per customer, test it with a small budget. If you would like us to check your numbers or run the account, send us a message.",
  },
  faqs: [
    {
      q: "How much should a small business spend on Facebook ads per month?",
      a: "Work backwards from the customers you want using the formula above. Many small UK businesses start in the low hundreds of pounds a month, but the right figure depends on your cost per lead and what a customer is worth to you.",
    },
    {
      q: "Are Instagram ads more expensive than Facebook ads?",
      a: "UK sources generally report higher click and impression costs on Instagram. The better test is cost per lead in your own account, because Instagram can suit some audiences and offers better.",
    },
    {
      q: "Do I pay VAT on Facebook ads?",
      a: "Meta charges VAT to UK businesses on ad invoices, and some sources also mention a 2% Digital Services Tax surcharge. Check your Meta billing and ask your accountant how to treat both.",
    },
    {
      q: "Why are my Facebook ads so expensive?",
      a: "Common causes are a small or competitive audience, weak ad creative, a low-converting landing page or a goal that does not match your budget. Fix the page and the offer first, then test new ads.",
    },
    {
      q: "Is Facebook advertising worth it for a local business?",
      a: "It can be, if you can turn clicks into enquiries and follow up quickly. Run the formula: if the cost per customer is well below your profit per customer, it is worth testing.",
    },
  ],
  sources: [
    {
      label: "PhotonPay: Facebook advertising costs UK, benchmarks and FX fees (2026)",
      url: "https://www.photonpay.com/uk/blog/article/facebook-advertising-costs",
    },
    { label: "Startups.co.uk: Instagram ads cost", url: "https://startups.co.uk/marketing/instagram-ads-cost/" },
    {
      label: "Expert Market: cost of social media advertising (UK)",
      url: "https://www.expertmarket.com/uk/digital-marketing/cost-of-social-media-advertising",
    },
    { label: "Whito: UK PPC costs", url: "https://whito.co.uk/research/uk-ppc-costs/" },
  ],
};
