import type { Post } from "./types";

export const videoEditingCost: Post = {
  slug: "video-editing-cost",
  title: "How much does video editing cost? Per-video and monthly prices",
  metaTitle: "How Much Does Video Editing Cost? Per-Video and Monthly",
  metaDescription:
    "How much does video editing cost? Per-video, hourly and monthly prices in pounds and dollars for social, ad and brand video, with a budget formula.",
  primaryKeyword: "how much does video editing cost",
  secondaryKeywords: [
    "video editing cost per video",
    "video editor pricing",
    "video editing rates",
    "reels editing cost",
    "short form video editing price",
    "freelance video editor rates",
    "video editing retainer",
  ],
  parent: "video-editing",
  scene: "video",
  related: ["reels-and-tiktok-editing-guide", "google-ads-cost", "how-much-does-a-website-cost"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  takeaways: [
    "Per-video, hourly and monthly prices for the kinds of video a business actually orders, in pounds and dollars",
    "A formula that turns finished minutes and editing hours into a price, and what pushes it up",
    "The hidden costs most quotes leave out, and what to include in a brief so quotes are comparable",
  ],
  answer: [
    "Video editing for business usually costs $50 to $400 for a short social clip, $300 to $1,500 for a longer YouTube-style video, and $400 to $2,000 for a corporate or brand video, according to one 2026 guide. UK figures are £150 to £500 for a basic short-form video, £800 to £2,000 for a series of three to five clips with custom graphics, and £1,500 to £6,000 for a company profile. Hourly rates run $25 to $150 for freelancers, and £20 to £80 an hour for entry-level and mid-level UK freelancers.",
    "Price depends mainly on video type, length, how much raw footage there is and how many graphics and revisions you want. Below are the ranges, a budget formula and a brief template so quotes can be compared. For editing handled for you, see our [video editing service](/services/video-editing/).",
  ],
  disclosure:
    "AJ Creationz edits video for social media and ads, so we sell what this guide describes. Several of the sources are video vendors, and one sells an AI clipping tool, so their numbers may lean toward their own offers. Treat all ranges as indicative and ask for written quotes.",
  sections: [
    {
      h2: "Video editing cost by type of video",
      blocks: [
        {
          type: "table",
          caption: "Per-project prices and turnaround in dollars (Vidico, 2026)",
          head: ["Video type", "Cost range", "Per minute", "Typical turnaround"],
          rows: [
            ["TikTok or Reels", "$50 to $400", "$10 to $50", "1 to 2 days"],
            ["YouTube, long form", "$300 to $1,500", "$20 to $100", "3 to 5 days"],
            ["Corporate or brand", "$400 to $2,000", "$30 to $150", "5 to 10 days"],
            ["Ad creative", "$250 to $1,200", "$25 to $100", "2 to 5 days"],
            ["Event highlights", "$500 to $2,500", "$15 to $75", "5 to 7 days"],
            ["Explainer or motion graphics", "$800 to $3,000", "$50 to $200", "7 to 14 days"],
            ["Documentary", "$3,000 to $15,000 or more", "$100 to $500", "2 to 8 weeks"],
          ],
          note: "Fash gives a similar average of $300 to $1,000 total per video for typical business edits.",
        },
        {
          type: "table",
          caption: "Per-project prices in pounds (Videotto UK guide, 2026)",
          head: ["Video type", "UK cost"],
          rows: [
            ["Basic short-form video, single clip", "£150 to £500"],
            ["Short-form series of three to five clips with custom graphics", "£800 to £2,000"],
            ["Event highlight reel, single day", "£1,000 to £2,500"],
            ["Company profile video", "£1,500 to £6,000"],
            ["Explainer or animation", "£1,000 to £3,000 simple; up to £8,000 or more for complex 3D"],
            ["High-end commercial", "£3,000 to £8,000 digital; £10,000 to £30,000 or more for broadcast"],
          ],
          note: "Videotto sells an AI clipping tool, so treat its guide as one vendor's view. Its figures are market ranges, not quotes.",
        },
      ],
    },
    {
      h2: "How much do video editors charge per hour?",
      blocks: [
        {
          type: "table",
          caption: "Hourly rates",
          head: ["Level", "UK, per hour (day rate)", "US, per hour"],
          rows: [
            ["Entry level", "£20 to £40 (£150 to £250 a day)", "$20 to $45"],
            ["Mid level", "£50 to £80 (£300 to £500 a day)", "$45 to $85"],
            ["Senior or specialist", "£100 or more (£600 or more a day)", "$85 to $150 or more"],
            ["Agency", "£100 to £300 or more", "$100 to $250"],
          ],
          note: "Sources: Videotto (UK, 2026), Krock (US freelancer levels, 2026) and Vidico (US agencies). Vidico gives $25 to $150 or more an hour for freelancers overall. Fash lists average hourly rates of $25 to $65 for social media videos and $30 to $100 for corporate or branded content.",
        },
      ],
    },
    {
      h2: "Worksheet: price a video from minutes and hours",
      blocks: [
        {
          type: "callout",
          title: "Price = finished minutes × editing hours per finished minute × hourly rate",
          text: "Add licensing for music or stock, and extra rounds of revisions. A flat project price is usually this sum, rounded and agreed in advance.",
        },
        {
          type: "p",
          text: "Fash estimates a basic YouTube edit takes about one hour per finished minute, a corporate or marketing video one to five hours per minute, and a complex video with many rapid cuts and animations up to 25 hours. Here is an illustrative example. The hours and rate are assumptions chosen from those ranges.",
        },
        {
          type: "table",
          caption: "Illustrative prices (assumed hours and rates, not quotes)",
          head: ["Line", "Short promo", "Brand video"],
          rows: [
            ["Finished length", "1 minute", "3 minutes"],
            ["Editing hours per finished minute (assumed)", "3", "4"],
            ["Total editing hours", "1 × 3 = 3", "3 × 4 = 12"],
            ["Hourly rate (assumed, mid level)", "£50", "£50"],
            ["Editing price", "£150", "£600"],
            ["Music licence (assumed)", "£30", "£30"],
            ["Total", "£180", "£630"],
          ],
          note: "Check: 3 × 50 = 150 and 150 + 30 = 180; 12 × 50 = 600 and 600 + 30 = 630. A single licensed music track can cost from about $15 to $500 depending on the library and rights, per Vidico, so check whether the editor includes it.",
        },
      ],
    },
    {
      h2: "Monthly video editing: retainers and packages",
      blocks: [
        {
          type: "p",
          text: "If you publish regularly, a monthly arrangement can cost less per video than one-off orders. One UK guide compares a mid-level freelancer at £960 to £1,600 a month for about eight clips cut from four hour-long recordings, and an agency at £2,000 to £5,000 for 20 to 60 branded clips. Those figures imply about £120 to £200 a clip on the freelancer retainer, since 960 ÷ 8 = 120 and 1,600 ÷ 8 = 200.",
        },
        {
          type: "p",
          text: "We found few US retainer prices in sources we could open, so ask providers for a monthly quote with the number of videos, formats and revision rounds written in.",
        },
        {
          type: "callout",
          title: "Monthly budget = videos a month × price per video + music and stock + extra revision rounds",
          text: "Divide the total by the number of videos to get your real cost per video, and compare that with a retainer quote.",
        },
      ],
    },
    {
      h2: "Hidden costs most quotes leave out",
      blocks: [
        {
          type: "ul",
          items: [
            "**Revision rounds beyond scope.** Most quotes include two or three. Vidico says each extra round costs about $50 to $200 or more and adds days.",
            "**Your time.** Writing briefs, reviewing cuts and giving timestamped feedback takes hours.",
            "**Onboarding a new editor.** The first two or three projects are usually slower and cost more while the editor learns your brand and pace.",
            "**Quality redo.** A cheap edit that misses the mark costs twice.",
            "**Music and stock licences.** Not always included.",
            "**Formats.** Vertical, square and widescreen versions of the same video may be priced separately.",
          ],
        },
      ],
    },
    {
      h2: "A brief that gets comparable quotes",
      blocks: [
        {
          type: "p",
          text: "Quotes differ most when briefs differ. Send each editor the same details:",
        },
        {
          type: "ol",
          items: [
            "Purpose and platform: Reels, TikTok, YouTube, ads or a website.",
            "Finished length and number of videos.",
            "Footage: how much raw material, who shot it and in what format.",
            "Style: two example videos you like, and your brand colours, fonts and logo.",
            "Captions and languages: burnt-in captions, subtitles or voice-over.",
            "Formats: vertical 9:16, square or widescreen, and the safe areas for each. See our [Reels and TikTok editing guide](/blog/reels-and-tiktok-editing-guide/).",
            "Music and stock: who supplies it and who pays for licences.",
            "Revisions: how many rounds you expect, and the deadline.",
            "Ownership: that you receive the project files and final exports.",
          ],
        },
      ],
    },
    {
      h2: "Freelancer, agency or an AI tool?",
      blocks: [
        {
          type: "p",
          text: "Freelancers cost less and suit steady, well-briefed work, but you rely on one person. Agencies cost more, which Vidico puts at two to three times freelance rates, and include project management, colour grading and full post-production. AI clipping tools cost from nothing to about £15 a month according to one vendor and suit turning existing recordings into short clips. They do not replace a creative edit for brand or ad work, and you should check the output before you publish.",
        },
        {
          type: "p",
          text: "If your videos feed paid campaigns, see [Google Ads cost](/blog/google-ads-cost/) for how creative and click costs combine.",
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Write the brief above for your next three videos, then ask two editors to quote the same list. If you would like us to quote, send the brief and some example videos and we will reply with a written scope.",
  },
  faqs: [
    {
      q: "How much does it cost to edit a video?",
      a: "A short social clip costs about $50 to $400 or £150 to £500, a longer YouTube-style video $300 to $1,500, and a corporate video $400 to $2,000 or £1,500 to £6,000 for a company profile. Length, footage volume, graphics and revisions drive the price.",
    },
    {
      q: "How much do freelance video editors charge per hour?",
      a: "Freelancers charge about $25 to $150 an hour in US guides. UK guides give £20 to £40 for entry level, £50 to £80 for mid level and £100 or more for senior editors.",
    },
    {
      q: "How much does it cost to edit a YouTube video?",
      a: "Fash gives $20 to $50 an hour for lower-cost editors and $60 to $150 or more for experienced ones, and Vidico gives $300 to $1,500 for a 10 to 20 minute video depending on complexity.",
    },
    {
      q: "How much does Reels or TikTok editing cost?",
      a: "Vidico puts a TikTok or Reels edit at $50 to $400 per clip. A UK guide gives £150 to £500 for a basic short video and £800 to £2,000 for a series of three to five with custom graphics.",
    },
    {
      q: "Is video editing priced per minute or per project?",
      a: "Both are used. Per minute is common for long-form, with Vidico giving $10 to $500 depending on type. Per project is common for short-form and ads. Either way, the price should state revisions and formats.",
    },
    {
      q: "How long does it take to edit a video?",
      a: "Fash estimates about one hour per finished minute for a basic YouTube video, one to five hours for corporate or marketing video, and up to 25 hours for complex edits. Turnaround for a short social clip is often one to two days.",
    },
    {
      q: "Are music licences included in the price?",
      a: "Not always. A single licensed track can cost about $15 to $500, so ask whether the editor includes it or whether you supply it.",
    },
    {
      q: "Is it cheaper to hire a freelancer or an agency?",
      a: "Freelancers usually cost less per hour. Agencies cost more and include project management and specialists. Compare on what the quote includes, not the headline rate.",
    },
  ],
  sources: [
    { label: "Vidico: how much does video editing cost in 2026?", url: "https://vidico.com/news/video-editor-cost/" },
    { label: "Fash: video editing rates (2026 prices)", url: "https://fash.com/costs/video-editing-rates" },
    {
      label: "Videotto: how much does video editing cost in the UK in 2026?",
      url: "https://www.videotto.com/blog/how-much-does-video-editing-cost-uk-2026",
    },
    {
      label: "Krock: video editor rates in 2026",
      url: "https://krock.io/blog/stay-creative/how-much-video-editor-should-charge/",
    },
  ],
};
