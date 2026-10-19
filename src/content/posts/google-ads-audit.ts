import type { Post } from "./types";

export const googleAdsAudit: Post = {
  slug: "google-ads-audit",
  title: "Google Ads not working? A 12-point Google Ads audit",
  metaTitle: "Google Ads Audit: 12 Checks When Google Ads Is Not Working",
  metaDescription:
    "Google Ads not working? Run this 12-point Google Ads audit covering conversion tracking, search terms, location settings, budgets and landing pages.",
  primaryKeyword: "google ads audit",
  secondaryKeywords: [
    "google ads not working",
    "google ads not converting",
    "why are my google ads not converting",
    "google ads no conversions",
    "google ads checklist",
  ],
  parent: "google-ads-management",
  scene: "ads",
  related: ["google-ads-cost", "google-ads-vs-facebook-ads", "seo-pricing"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  takeaways: [
    "A 12-point Google Ads audit in the order that finds the costly problems first, with where to click for each check",
    "The settings that quietly waste budget on small accounts: location options, auto-applied recommendations and broad search terms",
    "A cost-per-lead check that tells you whether the account can ever be profitable at your prices",
  ],
  answer: [
    "When Google Ads is not working, the cause is usually one of four things: conversions are not tracked correctly, so Google optimises for the wrong thing; ads show for searches or places you do not want; settings have been changed automatically; or the landing page does not turn clicks into enquiries. A Google Ads audit checks each of these in turn, starting with tracking, because every other number in the account depends on it.",
    "This 12-point audit takes about an hour on a small account. Each check says where to look in Google Ads and what a problem looks like. It ends with a cost-per-lead test that tells you whether the account can be profitable at your prices at all. If you want it done for you, see our [Google Ads management service](/services/google-ads-management).",
  ],
  disclosure:
    "AJ Creationz manages Google Ads accounts. The audit order and thresholds are our working method; Google's own documentation for each setting is linked in the sources.",
  sections: [
    {
      h2: "Checks 1 to 3: conversion tracking",
      blocks: [
        {
          type: "ol",
          items: [
            "**Are the right actions counted as conversions?** Go to Goals, then Conversions. Primary conversions should be real enquiries: form submissions, calls over a set length, bookings or purchases. If page views, button clicks or time on site are set as primary, Google is optimising for the wrong thing.",
            "**Do the numbers match reality?** Compare last month's conversions in Google Ads with the enquiries you actually received from ads. If Google shows 40 and you got 8, something is double-counting or counting non-leads. If Google shows none but the phone rang, tracking is broken.",
            "**Is each conversion counted once?** For lead generation, set conversions to count one per click, so a person who submits a form twice is not counted as two leads.",
          ],
        },
        {
          type: "p",
          text: "If tracking fails any of these, fix it before touching bids, budgets or keywords. Automated bidding learns from conversion data, so wrong data trains it to find the wrong people.",
        },
      ],
    },
    {
      h2: "Checks 4 to 6: who sees your ads",
      blocks: [
        {
          type: "ol",
          start: 4,
          items: [
            "**Search terms.** Open Insights and reports, then Search terms, for the last 30 days. Read the actual searches that triggered your ads. Look for jobs you do not do, DIY and free searches, job seekers, competitor names and locations you do not serve. Google's help suggests using this report to find negative keywords.",
            "**Location option.** In campaign settings, check Locations, then Location options. The default, Presence or interest, can show ads to people outside your area who have shown interest in it. A local service business usually wants Presence: people in or regularly in your targeted locations.",
            "**Networks.** On Search campaigns, check whether the Display Network is switched on. It can spend budget on website placements that rarely convert for local service searches.",
          ],
        },
      ],
    },
    {
      h2: "Checks 7 to 9: settings that change without you",
      blocks: [
        {
          type: "ol",
          start: 7,
          items: [
            "**Auto-applied recommendations.** Go to Recommendations, then Auto-apply. Google can apply some recommendations automatically, such as adding keywords or changing bidding. Turn off the ones you have not deliberately chosen, then review recommendations by hand.",
            "**Change history.** Look at Change history for the last 90 days. Unexplained changes to budgets, bidding or keywords often line up with when results dropped.",
            "**Bidding strategy versus data.** Strategies such as Maximise conversions or Target CPA need enough reliable conversions to learn from. On a small account with only a handful of conversions a month, check whether the strategy is spending without enough data to steer by.",
          ],
        },
      ],
    },
    {
      h2: "Checks 10 to 12: budget, ads and landing page",
      blocks: [
        {
          type: "ol",
          start: 10,
          items: [
            "**Budget spread.** If one campaign or ad group takes most of the spend but brings few conversions, move budget to what converts. Many small accounts spread a small budget across too many services to learn anything.",
            "**Ads match the search.** Read your ads next to the top search terms. Does the ad repeat what the person searched for, state the area you cover and give a reason to choose you? Ads that say only quality service at great prices waste the click.",
            "**Landing page.** Click your own ad on a phone. Does the page match the ad, load quickly, show the phone number and a short form without scrolling, and answer the price question? Sending all ads to the home page is one of the most common reasons Google Ads clicks do not convert.",
          ],
        },
        {
          type: "p",
          text: "For the landing page itself, our [website lead generation scorecard](/blog/website-lead-generation) has 15 checks you can run in under an hour.",
        },
      ],
    },
    {
      h2: "The cost-per-lead test: can this account ever pay?",
      blocks: [
        {
          type: "callout",
          title: "Maximum cost per lead = profit per customer × close rate",
          text: "If a customer is worth £400 profit and you win 1 in 4 enquiries, you can afford up to £400 × 25% = £100 per lead before ads lose money, before any management fee.",
        },
        {
          type: "table",
          caption: "Illustrative cost-per-lead check",
          head: ["Line", "UK example", "US example"],
          rows: [
            ["Profit per customer (assumed)", "£400", "$500"],
            ["Close rate (assumed)", "25%", "25%"],
            ["Break-even cost per lead: profit × close rate", "£100", "$125"],
            ["Current cost per lead in the account (assumed)", "£140", "$90"],
            [
              "Verdict",
              "Losing £40 a lead: fix tracking, terms and page, or stop",
              "Profitable: room to scale carefully",
            ],
          ],
          note: "Check: £400 × 0.25 = £100; $500 × 0.25 = $125. Compare with your real cost per conversion only after tracking passes checks 1 to 3.",
        },
        {
          type: "p",
          text: "If your break-even cost per lead is below what clicks in your market cost to turn into leads, no amount of tuning will make the account profitable. Our [Google Ads cost guide](/blog/google-ads-cost) shows typical click prices and budgets in pounds and dollars, and the [Google Ads vs Facebook Ads guide](/blog/google-ads-vs-facebook-ads) helps you decide whether another channel fits better.",
        },
      ],
    },
    {
      h2: "What to do with the audit results",
      blocks: [
        {
          type: "ul",
          items: [
            "Fix tracking first, then wait one to two weeks for clean data before judging anything else.",
            "Add negative keywords and correct location settings the same day; they stop waste immediately.",
            "Make one bigger change at a time, such as a new landing page or bidding strategy, so you can see what worked.",
            "Write down your break-even cost per lead and check it monthly against the account.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Start with checks 1, 4 and 5 today",
    text: "Conversion tracking, search terms and location options find most of the waste on small accounts, and each takes about ten minutes. If you would like an expert view, give us read-only access to your Google Ads account and we will send you a recorded walkthrough of all 12 checks with the fixes in priority order, at no cost.",
  },
  faqs: [
    {
      q: "Why are my Google Ads not converting?",
      a: "Usually because conversion tracking is wrong, ads show for irrelevant searches or locations, settings were changed automatically, or the landing page does not persuade. Check tracking first, because automated bidding learns from it.",
    },
    {
      q: "How do I audit my Google Ads account?",
      a: "Work through tracking, search terms, location and network settings, auto-applied recommendations and change history, then budget, ads and landing pages. Finish by comparing your cost per lead with the most you can afford.",
    },
    {
      q: "What does Presence or interest mean in Google Ads?",
      a: "It is the default location option. It can show ads to people in your area and to people elsewhere who have shown interest in it. Presence limits ads to people who are in or regularly in your targeted locations.",
    },
    {
      q: "Should I turn off auto-applied recommendations?",
      a: "On small accounts, turn off any you have not deliberately chosen and review recommendations by hand, so changes to keywords and bidding happen only when you agree with them.",
    },
    {
      q: "How much should I pay per lead on Google Ads?",
      a: "Your break-even is profit per customer multiplied by your close rate. Paying less than that per lead is profitable before management fees; paying more loses money.",
    },
  ],
  sources: [
    {
      label: "Google Ads Help: get negative keyword ideas using the search terms report",
      url: "https://support.google.com/google-ads/answer/7102466?hl=en",
    },
    {
      label: "Google Ads Help: about advanced location options",
      url: "https://support.google.com/google-ads/answer/1722038?hl=en-GB",
    },
    {
      label: "Google Ads Help: manage auto-apply recommendations",
      url: "https://support.google.com/google-ads/answer/10276359?hl=en",
    },
    {
      label: "Google Ads Help: how the Google Ads auction works",
      url: "https://support.google.com/google-ads/answer/6366577",
    },
  ],
};
