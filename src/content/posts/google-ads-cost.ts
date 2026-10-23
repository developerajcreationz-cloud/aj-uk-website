import type { Post } from "./types";

export const googleAdsCost: Post = {
  slug: "google-ads-cost",
  title: "How much does Google Ads cost? Budget, CPC and management fees",
  metaTitle: "Google Ads Cost UK 2026: CPC, Budget and Agency Fees",
  metaDescription:
    "How much does Google Ads cost? Typical click costs, monthly budgets and agency fees in pounds and dollars, plus a formula to set a budget you can defend.",
  primaryKeyword: "google ads cost",
  secondaryKeywords: [
    "how much does google ads cost",
    "google ads management fees",
    "average cpc google ads",
    "google ads budget for small business",
    "google ads cost per lead",
    "ppc pricing",
    "is google ads worth it",
  ],
  parent: "google-ads-management",
  scene: "ads",
  related: ["google-ads-vs-facebook-ads", "gohighlevel-pricing", "seo-pricing"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-23",
  takeaways: [
    "What you pay Google (clicks) and what you pay a manager (fees), kept separate, with sourced ranges",
    "Click costs by industry in pounds and dollars, and why the sources disagree",
    "A formula that turns a target number of leads into a monthly budget, and an all-in cost per lead that includes the management fee",
  ],
  answer: [
    "Google Ads has two separate costs. You pay Google for each click, and you pay a freelancer or agency to manage the account if you hire one. Published guides put typical small-business ad spend at about $1,000 to $5,000 a month in the US and £750 to £5,000 in the UK, with most UK small businesses paying roughly £1.50 to £2.50 a click. Management is separate: about 10% to 20% of spend in US guides, or a flat £200 to £1,500 a month for small UK accounts.",
    "Averages hide the number that matters, which is what a lead costs you all in. This guide gives the ranges, shows where sources disagree, and includes a formula for your own budget. If you want an account audited or managed, see our [Google Ads management service](/services/google-ads-management/).",
  ],
  disclosure:
    "AJ Creationz manages Google Ads, and most pages that rank for this topic are written by agencies that sell the same service. Treat every range as indicative. One UK source states plainly that no primary UK-wide survey of click costs exists. For your own keywords, Google's Keyword Planner is the best first estimate.",
  sections: [
    {
      h2: "How Google Ads pricing works",
      blocks: [
        {
          type: "p",
          text: "On Search campaigns billed per click, you pay when someone clicks your ad, not when it is shown. What each click costs is set by an auction that runs every time someone searches. Google's help page says the auction looks at your bid, the quality of your ad and landing page, the expected effect of ad assets such as phone numbers and extra links, minimum quality thresholds, and the context of the search, including the search terms, location, device and time.",
        },
        {
          type: "p",
          text: "Two points from that page change how you should think about cost. Your bid is the most you are willing to pay, and what you actually pay is often less. And a competitor with a higher bid can still lose position to you if your keywords, ads and assets are more relevant. That is why a better landing page can lower costs more than a bigger budget.",
        },
      ],
    },
    {
      h2: "How much does a click cost?",
      blocks: [
        {
          type: "p",
          text: "Click costs vary most by industry, and the sources disagree on the overall average, so use the tables below as a range, not a promise.",
        },
        {
          type: "table",
          caption: "Indicative cost per click, UK, in pounds",
          head: ["Sector or measure", "Cost per click", "Source"],
          rows: [
            ["Typical small business", "£1.50 to £2.50", "Whito (2026)"],
            ["Local trades", "£1.50 to £3.00", "Whito (2026)"],
            ["Ecommerce", "£1.50 to £4.00", "Whito (2026)"],
            ["Legal services", "£8.25 average, £5 to £12 or more", "Whito (2026)"],
            ["Lowest sector (charities)", "£0.85", "Whito (2026)"],
            ["UK average", "£3.50 to £3.65", "Whitehat (2026)"],
            ["London campaigns", "15% to 30% above the rest of the UK", "Whito (2026)"],
          ],
          note: "Whito and Whitehat disagree on the UK average (about £2 against about £3.60). Whito's own methodology note says its ranges come from agency figures and benchmarking platforms, not a primary UK survey.",
        },
        {
          type: "table",
          caption: "Indicative cost per click on Search, US, in dollars",
          head: ["Industry", "Cost per click"],
          rows: [
            ["Ecommerce", "$0.50 to $3"],
            ["Travel, beauty and fitness", "$1 to $5"],
            ["Education, auto, real estate", "$2 to $10"],
            ["B2B", "$3 to $15"],
            ["Health and medical", "$10 to $50"],
            ["Loans and finance", "$30 to $70"],
            ["Insurance", "$40 to $80"],
            ["Legal", "$50 to $150"],
          ],
          note: "Source: UniLink (2026). Two Minute Reports gives a much lower overall Search average of about $1 to $2 a click, which shows how far apart published figures are.",
        },
        {
          type: "p",
          text: "The practical reading: a click in a low-value niche costs a few pounds or less, and a click in law, insurance or finance can cost many times more because one customer is worth so much. Keyword intent matters too, since searches close to buying (for example, a service plus near me) usually cost more than research searches.",
        },
      ],
    },
    {
      h2: "How much should I spend on Google Ads each month?",
      blocks: [
        {
          type: "p",
          text: "There is no fixed minimum, and we found no source that sets a daily minimum. A monthly figure divided by 30 gives a rough daily budget: £750 a month is about £25 a day. These are the budget bands the sources give.",
        },
        {
          type: "table",
          caption: "Monthly ad spend bands from published guides",
          head: ["Stage", "UK, per month", "US, per month", "What it buys"],
          rows: [
            [
              "Test",
              "£750 to £1,500 (Whito: £500 to £1,000 can test a local business)",
              "$300 to $1,000 (solo)",
              "Enough data to learn if PPC works; expect two to three months",
            ],
            [
              "Growth",
              "£2,000 to £5,000",
              "$1,000 to $5,000 (small business)",
              "Wider keywords and areas once returns are proven",
            ],
            [
              "Scale",
              "£5,000 to £10,000 or more",
              "$5,000 to $25,000 (mid-size)",
              "Systematic testing and smart bidding with enough data",
            ],
          ],
          note: "Sources: Whitehat and Whito (UK, 2026); UniLink (US, 2026). Two Minute Reports says most small businesses spend $1,000 to $10,000 a month.",
        },
      ],
    },
    {
      h2: "What do Google Ads management fees cost?",
      blocks: [
        {
          type: "p",
          text: "Management fees are separate from your ad spend, and the three common models are a flat monthly fee, a percentage of spend, or a base fee plus a smaller percentage. Sources give different ranges, so compare the model before the number.",
        },
        {
          type: "table",
          caption: "Management fee models from published guides",
          head: ["Model", "UK sources", "US source"],
          rows: [
            [
              "Flat monthly fee",
              "Freelancer £200 to £800; agency £500 to £1,500 for £1,000 to £5,000 spend; £1,500 to £5,000 for £5,000 to £20,000 spend (Whito)",
              "$500 to $5,000 (ClicksGeek)",
            ],
            [
              "Percentage of spend",
              "5% to 15%, mostly over £5,000 a month (Whito); 5% to 10% with a £1,000 to £2,000 minimum (Whitehat)",
              "10% to 20%, minimums from about $500 (ClicksGeek)",
            ],
            ["Hybrid", "Not covered", "For example $1,000 plus 5% of spend (ClicksGeek)"],
            [
              "Setup, one off",
              "£250 to £500 is reasonable; ask for a breakdown above £1,000 (Whito)",
              "$500 to $2,500; landing pages $500 to $2,000 each (ClicksGeek)",
            ],
          ],
          note: "Whitehat also lists £3,000 to £5,000 a month for full-service flat retainers. The gap between sources is wide, so ask what each fee includes: reporting, landing pages, tracking set-up and how often the account is reviewed.",
        },
        {
          type: "p",
          text: "Percentage fees rise as you spend more, whether or not the work does. Flat fees stay predictable. One source suggests flat fees often give better value below about $3,000 a month of spend, which matches the UK pattern above.",
        },
      ],
    },
    {
      h2: "Worksheet: turn a lead target into a budget",
      blocks: [
        {
          type: "callout",
          title: "Monthly ad spend = leads wanted ÷ click-to-lead rate × cost per click",
          text: "All-in cost per lead = (ad spend + management fee) ÷ leads. Most guides quote cost per lead without the fee.",
        },
        {
          type: "p",
          text: "Here is an illustrative example. The rates are assumptions chosen from the ranges above, not a forecast, and the arithmetic is shown so you can swap in your own.",
        },
        {
          type: "table",
          caption: "Illustrative budget for 20 leads a month",
          head: ["Line", "UK example", "US example"],
          rows: [
            ["Leads wanted", "20", "20"],
            ["Assumed click-to-lead rate", "5%", "5%"],
            ["Clicks needed: 20 ÷ 0.05", "400", "400"],
            ["Assumed cost per click", "£2.00", "$5.00"],
            ["Ad spend: 400 × cost per click", "£800", "$2,000"],
            ["Assumed management fee", "£500", "$500"],
            ["Total: spend + fee", "£1,300", "$2,500"],
            ["Cost per lead on spend alone", "£40", "$100"],
            ["All-in cost per lead", "£65", "$125"],
          ],
          note: "Check: 800 ÷ 20 = 40 and 1,300 ÷ 20 = 65; 2,000 ÷ 20 = 100 and 2,500 ÷ 20 = 125. If one lead in four becomes a customer, the UK example makes five customers, so each costs £260 in ads and fees (1,300 ÷ 5). That is worth paying only if a customer brings in more than £260 of profit.",
        },
        {
          type: "h3",
          text: "The most you can afford to pay per click",
        },
        {
          type: "p",
          text: "Work backwards from profit. Maximum cost per click = profit per customer × the share of it you will spend on acquiring them × the rate at which clicks become customers. With £200 profit per sale, 25% spent on acquisition and 5% of clicks becoming customers, you can afford £200 × 0.25 × 0.05 = £2.50 a click. At a 2% rate, the same sum gives £1.00 a click. If typical clicks in your market cost more than that, Google Ads will lose money unless you improve the page, the offer or the margin.",
        },
      ],
    },
    {
      h2: "Hidden costs and when Google Ads is not worth it",
      blocks: [
        {
          type: "ul",
          items: [
            "**Landing pages.** A dedicated page per service lifts results, and some agencies charge for each one.",
            "**Tracking.** Without conversion tracking you cannot tell which clicks became enquiries, so you cannot judge the spend.",
            "**Creative and extras.** Images, video and call tracking are sometimes billed separately.",
            "**Your time.** Following up leads quickly matters as much as the click, which is why we connect ads to a CRM. See [GoHighLevel pricing](/blog/gohighlevel-pricing/) for the cost of that follow-up system.",
          ],
        },
        {
          type: "p",
          text: "Whito lists four cases where it says not to start: the website does not convert, you cannot track leads, the margins do not support the click cost, or the offer is not clear yet. Its example: a £20 product with a £5 margin, a £1.50 click and a 5% conversion rate costs £30 in clicks per sale, a loss on every order (£1.50 ÷ 0.05 = £30).",
        },
      ],
    },
    {
      h2: "How to lower your Google Ads cost",
      blocks: [
        {
          type: "ol",
          items: [
            "Match each ad group to one theme and one landing page, so the ad, keyword and page agree. Google rewards relevance with lower costs.",
            "Check the search terms report weekly and add irrelevant searches as negative keywords.",
            "Restrict locations to the areas you serve, and review results by device and time of day.",
            "Make sure conversion tracking counts real enquiries before you move to automated bidding.",
            "Compare Google with other channels before you commit the whole budget. Our [Google Ads vs Facebook Ads](/blog/google-ads-vs-facebook-ads/) guide shows when each fits.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Fill in the worksheet with your own click cost and conversion rate, then check it against your profit per customer. If the sums work and you want the account built or audited, send us your site and goal and we will give you a written scope.",
  },
  faqs: [
    {
      q: "How much does Google Ads cost per month for a small business?",
      a: "Published guides give about $1,000 to $5,000 in the US and £750 to £5,000 in the UK for ad spend, plus management fees if you hire help. A test budget of £500 to £1,000 a month can show whether a local business gets enquiries.",
    },
    {
      q: "What is a good cost per click on Google Ads?",
      a: "It depends on your sector. One UK guide puts most small businesses at £1.50 to £2.50 and another puts the UK average above £3.50. A good click is one you can afford: see the maximum-cost-per-click formula in this guide.",
    },
    {
      q: "How much do agencies charge to manage Google Ads?",
      a: "UK guides give £200 to £800 a month for freelancers and £500 to £1,500 for agencies on small budgets. US guides give 10% to 20% of ad spend or $500 to $5,000 a month. Ask what is included.",
    },
    {
      q: "Is there a minimum daily budget?",
      a: "We found no source that sets a daily minimum. Divide your monthly budget by about 30 for a rough daily figure, then check whether it is enough for Google to collect data.",
    },
    {
      q: "Is Google Ads worth it for a small business?",
      a: "It can be, when the website converts, leads are tracked and the click cost fits your margin. If any of these is missing, fix it first. The worksheet in this guide shows the maximum click cost you can afford.",
    },
    {
      q: "What is the difference between CPC and CPA?",
      a: "CPC is cost per click, what you pay each time someone clicks. CPA is cost per acquisition, what you pay for each lead or sale. CPA is the number that decides whether the campaign works.",
    },
    {
      q: "Does the management fee count in my cost per lead?",
      a: "It should. Divide ad spend plus the management fee by the number of leads to get the all-in cost per lead. Many guides quote the figure without the fee.",
    },
    {
      q: "How long before Google Ads is profitable?",
      a: "Expect two to three months of testing while tracking and search terms settle. Set a target cost per lead before you start and review it monthly.",
    },
  ],
  sources: [
    {
      label: "Google Ads Help: how the Google Ads auction works",
      url: "https://support.google.com/google-ads/answer/6366577",
    },
    { label: "Whito: Google Ads cost UK 2026", url: "https://whito.co.uk/research/uk-ppc-costs/" },
    { label: "Whitehat SEO: Google Ads cost UK (2026)", url: "https://whitehat-seo.co.uk/blog/google-ads-ppc-pricing" },
    { label: "UniLink: Google Ads cost in 2026", url: "https://www.unilink.us/blog/google-ads-cost-2026" },
    {
      label: "Two Minute Reports: Google Ads pricing in 2026",
      url: "https://twominutereports.com/blog/google-ads-pricing",
    },
    {
      label: "ClicksGeek: Google Ads management pricing, 2026",
      url: "https://clicksgeek.com/google-ads-management-pricing/",
    },
  ],
};
