import type { Post } from "./types";

export const seoRoi: Post = {
  slug: "seo-roi",
  title: "Is SEO worth it? An SEO ROI calculator for small businesses",
  metaTitle: "Is SEO Worth It? SEO ROI Calculator for Small Businesses",
  metaDescription:
    "Is SEO worth it for your business? Work out SEO ROI and payback with a simple calculator, UK and US worked examples, and signs it will or will not pay.",
  primaryKeyword: "seo roi",
  secondaryKeywords: [
    "is seo worth it",
    "seo roi calculator",
    "is seo worth it for small business",
    "seo for small business uk",
    "how long does seo take",
    "is seo worth the money",
  ],
  parent: "seo-growth",
  scene: "seo",
  related: ["seo-pricing", "local-seo-cost", "technical-seo-audit-checklist"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
  takeaways: [
    "An SEO ROI calculator you can fill in with five numbers, with worked UK and US examples and the arithmetic shown",
    "How to estimate the five inputs for free from Google's own tools and your own records",
    "Clear signs that SEO will pay for your business, and signs you should spend the money elsewhere first",
  ],
  answer: [
    "SEO is worth it when people already search for what you sell, each new customer is worth a meaningful profit, and you can afford to wait several months for results. SEO ROI is the profit from customers who found you through organic search, minus what you spend on SEO, divided by that spend. If a £800 a month programme eventually brings in £1,440 a month of extra profit, the monthly return after the ramp-up is (1,440 − 800) ÷ 800 = 80%.",
    "The catch is time. Google's own SEO starter guide says changes can take from a few hours to several months to show, so most programmes cost money for months before they return any. This guide gives you a calculator for the return and the payback month, shows where to find each input for free, and lists the situations where SEO is the wrong first spend. For a scoped plan, see our [SEO and growth service](/services/seo-growth).",
  ],
  disclosure:
    "AJ Creationz sells SEO. The calculator and examples use labelled assumptions, not results from a client, and no one can guarantee a ranking or a return.",
  sections: [
    {
      h2: "The SEO ROI formula",
      blocks: [
        {
          type: "callout",
          title: "SEO ROI = (extra monthly profit from organic search − monthly SEO cost) ÷ monthly SEO cost",
          text: "Extra monthly profit = extra organic enquiries × close rate × profit per customer. Use profit, not revenue: a £2,000 job that leaves £400 after materials and labour is worth £400 here.",
        },
        {
          type: "p",
          text: "Two refinements make the number honest. Count only extra enquiries, above what organic search already brings you before the work starts. And if customers come back or refer others, use the profit over the time they stay with you, not just the first job.",
        },
      ],
    },
    {
      h2: "SEO ROI calculator: worked UK and US examples",
      blocks: [
        {
          type: "p",
          text: "Every figure below is an assumption to show the method, not a forecast. Replace them with your own.",
        },
        {
          type: "table",
          caption: "SEO ROI and payback for a small service business",
          head: ["Line", "UK example", "US example"],
          rows: [
            ["Monthly SEO cost", "£800", "$1,500"],
            ["Ramp-up before extra enquiries arrive (assumed)", "6 months", "6 months"],
            ["Extra organic enquiries a month after ramp-up (assumed)", "12", "15"],
            ["Close rate (share of enquiries that buy)", "30%", "30%"],
            ["New customers a month: enquiries × close rate", "3.6", "4.5"],
            ["Profit per customer", "£400", "$500"],
            ["Extra profit a month: customers × profit", "£1,440", "$2,250"],
            ["Monthly ROI after ramp-up: (profit − cost) ÷ cost", "80%", "50%"],
            ["Cost before any return: ramp-up months × cost", "£4,800", "$9,000"],
            ["Net gain a month after ramp-up: profit − cost", "£640", "$750"],
            ["Months after ramp-up to recover the early cost", "7.5", "12"],
            ["Payback month from the start", "About month 14", "Month 18"],
          ],
          note: "Check: 12 × 30% = 3.6 and 3.6 × £400 = £1,440; (1,440 − 800) ÷ 800 = 0.8. 6 × £800 = £4,800 and 4,800 ÷ 640 = 7.5, so 6 + 7.5 = 13.5 months. US: 15 × 30% = 4.5 and 4.5 × $500 = $2,250; (2,250 − 1,500) ÷ 1,500 = 0.5; 6 × $1,500 = $9,000 and 9,000 ÷ 750 = 12, so 6 + 12 = 18 months.",
        },
        {
          type: "p",
          text: "Notice how much the answer swings on profit per customer and on the ramp-up. If the UK business above earned £200 a customer instead of £400, the extra profit would be £720 a month, less than the £800 fee, and SEO would never pay back at that level of results. That is why the calculator matters more than any average.",
        },
      ],
    },
    {
      h2: "Where to find each input for free",
      blocks: [
        {
          type: "ul",
          items: [
            "**Search demand:** Google Keyword Planner (inside a free Google Ads account) shows how often people search for your services in your area. If the numbers for your main services are close to zero, SEO has little to win.",
            "**What you get today:** Google Search Console shows the searches you already appear for, your clicks and your average position. This is your starting point, so you only count extra enquiries later.",
            "**Close rate:** your own records. Of the last 20 enquiries, how many became paying customers?",
            "**Profit per customer:** your accounts. Use the average profit on a job, not the price.",
            "**Enquiry rate from visits:** Google Analytics, if your contact form and phone clicks are set up as key events. If they are not, fix tracking first, because you cannot measure ROI without it.",
          ],
        },
        {
          type: "p",
          text: "To estimate extra enquiries, take the monthly searches for your top services, assume you would win a modest share of the clicks if you reached the first page, and multiply by the share of visitors who enquire on your site today. Keep the assumptions conservative and write them down, so you can check them against Search Console in six months.",
        },
      ],
    },
    {
      h2: "How long SEO takes",
      blocks: [
        {
          type: "p",
          text: "Google's SEO starter guide says changes to your site can take from a few hours to several months to be reflected in search, and suggests waiting a few weeks before judging whether a change worked. In practice, a new or weak site in a competitive market usually needs longer than an established site that only needs fixes.",
        },
        {
          type: "p",
          text: "Plan cash flow for at least six months of cost before you expect a return, and judge progress in stages: pages indexed and errors fixed first, then impressions growing in Search Console, then clicks, then enquiries. If impressions are not rising after three to four months of real work, ask why.",
        },
      ],
    },
    {
      h2: "When SEO is worth it, and when it is not",
      blocks: [
        {
          type: "table",
          caption: "Signs SEO will or will not pay for your business",
          head: ["SEO is likely worth it if…", "Spend elsewhere first if…"],
          rows: [
            ["People search for your service in the places you serve", "Hardly anyone searches for what you sell yet"],
            [
              "A new customer is worth hundreds of pounds or dollars in profit",
              "Profit per customer is very low and volume is small",
            ],
            ["You can fund six months or more before expecting a return", "You need enquiries this month to pay bills"],
            ["Your site can be edited and improved", "Your site is about to be rebuilt anyway"],
            ["You can deliver more work if more enquiries arrive", "You are already fully booked for months"],
          ],
        },
        {
          type: "p",
          text: "If you need enquiries quickly, paid search can test demand while SEO builds. Our [Google Ads cost guide](/blog/google-ads-cost) shows what that costs, and the [Google Ads vs Facebook Ads guide](/blog/google-ads-vs-facebook-ads) helps you choose a channel.",
        },
      ],
    },
    {
      h2: "SEO for a small business in the UK: what to do before you pay anyone",
      blocks: [
        {
          type: "p",
          text: "Some of the highest-return SEO work costs nothing but time. Do these first, then judge any quote against what is left:",
        },
        {
          type: "ol",
          items: [
            "Verify your Google Business Profile, choose accurate categories, add real photos and reply to every review.",
            "Add your site to Google Search Console and submit your sitemap.",
            "Give each main service its own page with a clear title, the area you cover and prices or price ranges where you can.",
            "Make sure your phone number and contact form work on mobile and are tracked as key events in Google Analytics.",
            "Ask every happy customer for a Google review, with a direct link.",
          ],
        },
        {
          type: "p",
          text: "If you then hire help, our [SEO pricing guide](/blog/seo-pricing) shows what UK and US providers charge and what each budget should buy, and the [local SEO cost guide](/blog/local-seo-cost) covers map and local rankings.",
        },
      ],
    },
    {
      h2: "How to measure SEO ROI properly",
      blocks: [
        {
          type: "ul",
          items: [
            "Track form submissions, phone clicks and booked calls as key events in Google Analytics, and check that organic search is reported separately.",
            "Add a how did you hear about us field, or a source field in your CRM, so offline sales are counted.",
            "Use a call-tracking number on the website if most customers phone, so organic calls are not lost.",
            "Review monthly: Search Console clicks, organic enquiries, customers won and profit, against the assumptions in your calculator.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Fill in the calculator with your own numbers",
    text: "Use your real profit per customer and close rate, and a conservative guess for extra enquiries. If the payback month is beyond what you can fund, fix the free items first or test demand with ads. If you want a second opinion, send us your numbers and website and we will tell you in writing whether SEO looks worth it and where we would start.",
  },
  faqs: [
    {
      q: "Is SEO worth it for a small business?",
      a: "It is worth it when people search for your service, each customer is worth a meaningful profit and you can wait several months for results. Run the calculator above with your own numbers to see the payback month.",
    },
    {
      q: "How do you calculate SEO ROI?",
      a: "SEO ROI = (extra monthly profit from organic search − monthly SEO cost) ÷ monthly SEO cost. Extra profit = extra organic enquiries × close rate × profit per customer.",
    },
    {
      q: "How long does SEO take to work?",
      a: "Google says changes can take from a few hours to several months to show in search. Plan for at least six months of cost before expecting a return, longer for a new site in a competitive market.",
    },
    {
      q: "What is a good ROI for SEO?",
      a: "There is no single benchmark. A programme is worth continuing when extra profit from organic search clearly exceeds its cost after the ramp-up and the early months are recovered within a period you can fund.",
    },
    {
      q: "Is SEO better than Google Ads?",
      a: "They do different jobs. Ads can bring enquiries this week but stop when you stop paying. SEO is slower but keeps working. Many small businesses use ads to test demand while SEO builds.",
    },
  ],
  sources: [
    {
      label: "Google Search Central: SEO starter guide",
      url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    },
    {
      label: "Google Search Central: do you need an SEO?",
      url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo",
    },
    {
      label: "Google Business Profile Help: how to improve your local ranking",
      url: "https://support.google.com/business/answer/7091?hl=en",
    },
  ],
};
