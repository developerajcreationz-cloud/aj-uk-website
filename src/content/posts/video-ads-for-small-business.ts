import type { Post } from "./types";

export const videoAdsForSmallBusiness: Post = {
  slug: "video-ads-for-small-business",
  title: "Video ads and UGC ads for small businesses: what to film and test",
  metaTitle: "Video Ads for Small Business: UGC Ads, Formats and Testing",
  metaDescription:
    "Video ads for small businesses: three ad types to film, a 15-second script, Meta formats, UGC ads disclosure rules in the UK and US, and a test plan.",
  primaryKeyword: "video ads",
  secondaryKeywords: [
    "ugc ads",
    "video ads for small business",
    "facebook video ads",
    "video ad examples",
    "ugc video ads",
    "video marketing for small business",
  ],
  parent: "video-editing",
  scene: "video",
  related: ["reels-and-tiktok-editing-guide", "video-editing-cost", "google-ads-vs-facebook-ads"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  takeaways: [
    "Three video ad types a small business can film with a phone, each with a shot list",
    "A 15-second script structure and the Meta formats to export, so one shoot covers feed, Reels and Stories",
    "The disclosure rules for paid creators and UGC ads in the UK and the US, and a simple testing plan",
  ],
  answer: [
    "Video ads that work for small businesses are usually simple: a clear hook in the first seconds, the problem your customer has, proof that you solve it, and one thing to do next. You do not need a production crew. A phone, good light, clear sound and an editor who cuts tightly will cover most needs. UGC ads, short videos in the style of a real customer talking to camera, often feel more native on social feeds than polished adverts, but if you pay or gift the person in them, the UK and US rules on disclosure apply.",
    "This guide gives three ad types to film, a 15-second script you can adapt, the formats to export for Meta placements, the disclosure rules for creators, and a test plan that tells you which ad to scale. If you want the editing done for you, see our [video editing service](/services/video-editing/).",
  ],
  disclosure:
    "AJ Creationz edits video ads and short-form content. The ad structures and test plan are our working method; formats and rules come from the sources listed at the end, which you should check before a large campaign.",
  sections: [
    {
      h2: "Three video ad types a small business can film",
      blocks: [
        {
          type: "table",
          caption: "Video ad types, with what to film",
          head: ["Ad type", "Best for", "Shot list"],
          rows: [
            [
              "Problem and fix",
              "Trades, repairs, cleaning, any visible before and after",
              "Close-up of the problem; you at work; the finished result; you to camera with the offer",
            ],
            [
              "Owner explains",
              "Services that need trust: advice, health, home improvements",
              "You to camera in your workplace; two or three cutaways of the work; on-screen price or offer; contact details",
            ],
            [
              "Customer-style (UGC)",
              "Products and consumer services",
              "A real customer or paid creator to camera, holding or using the product; a close-up of the key feature; their honest one-line verdict",
            ],
          ],
          note: "Film more than you need: three or four different openings for each ad, so you can test hooks without reshooting.",
        },
        {
          type: "p",
          text: "Real customers and real work beat stock footage for local businesses, because viewers can tell. If you use an actor or a paid creator in a customer-style ad, do not present them as a genuine customer if they are not.",
        },
      ],
    },
    {
      h2: "A 15-second video ad script",
      blocks: [
        {
          type: "table",
          caption: "15-second structure, with an example for a gutter-cleaning business",
          head: ["Seconds", "Job", "Example"],
          rows: [
            ["0 to 3", "Hook: name the problem or show it", "Close-up of a blocked gutter overflowing in the rain"],
            ["3 to 8", "Show the fix", "Time-lapse of the gutter being cleared, then water running freely"],
            [
              "8 to 12",
              "Proof",
              "Caption: 4.9 stars from 210 Google reviews (only if true), van with the business name",
            ],
            ["12 to 15", "One clear action", "Owner to camera: Book a clear-out this week, link below"],
          ],
          note: "Put the message in captions as well as speech. Many people watch with the sound off, and captions also help accessibility.",
        },
        {
          type: "p",
          text: "Longer ads can work for considered purchases, but the first three seconds decide whether anyone sees the rest. Write the hook first and cut anything before it.",
        },
      ],
    },
    {
      h2: "Formats to export for Facebook and Instagram video ads",
      blocks: [
        {
          type: "table",
          caption: "Common Meta ad canvases",
          head: ["Ratio", "Size", "Placements"],
          rows: [
            ["9:16", "1080 × 1920", "Reels and Stories, full-screen vertical"],
            ["4:5", "1080 × 1350", "Facebook and Instagram feeds on mobile"],
            ["1:1", "1080 × 1080", "Carousels and most other placements"],
            ["16:9", "1920 × 1080", "In-stream and landscape placements"],
          ],
          note: "Source: Rocketium's summary of Meta creative specs (September 2026). Meta updates its Ads Guide as placements change, so check it before a large build. Use MP4 or MOV with H.264.",
        },
        {
          type: "p",
          text: "Film vertically with space around the subject, then crop to 4:5 and 1:1 in the edit. Keep faces, text and the offer in the centre of a 9:16 frame, because the profile name sits at the top of Reels and the caption and call to action sit at the bottom. Our [Reels and TikTok editing guide](/blog/reels-and-tiktok-editing-guide/) has the safe-zone measurements.",
        },
      ],
    },
    {
      h2: "UGC ads: disclosure rules in the UK and the US",
      blocks: [
        {
          type: "p",
          text: "This is general information, not legal advice.",
        },
        {
          type: "ul",
          items: [
            "**UK:** the ASA says that when a brand gives an influencer payment or another incentive, content featuring the brand must be obviously identifiable as advertising. It considers labels such as Ad or Advert very likely to be acceptable, advises against Sponsored, and says the label must be prominent and appear early, not buried in hashtags or behind See more.",
            "**US:** the FTC's Endorsement Guides require material connections, such as payment or free products, to be disclosed clearly and conspicuously: difficult to miss and easy to understand, in the same format as the endorsement. Brands that hire creators are expected to monitor them.",
            "**Running a creator's video as your own paid ad:** the ad platform labels it as sponsored, but the creator's own posts about your brand still need their own disclosure.",
            "**Testimonials:** use only genuine customer experiences, get written permission to use them, and never invent or edit them to say something the customer did not.",
          ],
        },
      ],
    },
    {
      h2: "A simple video ad test plan",
      blocks: [
        {
          type: "ol",
          items: [
            "Make one ad in three versions that differ only in the first three seconds (three hooks).",
            "Run them in the same ad set with the same budget for about a week, or until each has enough spend to judge.",
            "Judge by the result you want, such as leads or purchases, not by views or likes.",
            "Keep the winning hook, then test a second variable: the offer, the proof or the length.",
            "Refresh creative when results fall for two weeks in a row, which often means your audience has seen the ad too often.",
          ],
        },
        {
          type: "p",
          text: "For what editing should cost per video in pounds and dollars, see our [video editing cost guide](/blog/video-editing-cost/). If you are deciding between platforms, the [Google Ads vs Facebook Ads guide](/blog/google-ads-vs-facebook-ads/) compares the two.",
        },
      ],
    },
  ],
  doNext: {
    title: "Film three hooks for one ad this week",
    text: "Pick the ad type that suits your business, write three different openings and film them all in one session. If you send us the raw footage, we can edit it into the three test versions in every format above. Tell us your business and offer and we will quote in writing.",
  },
  faqs: [
    {
      q: "Do video ads work for small businesses?",
      a: "They can, when they show a real problem and fix, include proof and give one clear action. Simple phone-shot videos of real work often outperform stock footage for local businesses.",
    },
    {
      q: "What are UGC ads?",
      a: "UGC ads are short videos in the style of a real customer talking to camera. They feel native on social feeds. If the person is paid or gifted, the content must be disclosed as advertising.",
    },
    {
      q: "How long should a video ad be?",
      a: "For most small business social ads, 15 to 30 seconds is enough. The first three seconds matter most, so lead with the hook.",
    },
    {
      q: "What size should Facebook video ads be?",
      a: "Common canvases are 9:16 (1080 × 1920) for Reels and Stories, 4:5 (1080 × 1350) for feeds, 1:1 for carousels and 16:9 for in-stream. Check Meta's Ads Guide before a large build.",
    },
    {
      q: "Do I need to label paid creator content in the UK?",
      a: "Yes. The ASA says paid or incentivised content featuring a brand must be obviously identifiable as advertising, with a prominent label such as Ad placed early in the post.",
    },
  ],
  sources: [
    {
      label: "Rocketium: Meta creative specs 2026 (September 2026)",
      url: "https://rocketium.ai/academy/all/meta-creative-specs",
    },
    {
      label: "ASA: recognising ads, social media and influencer marketing",
      url: "https://www.asa.org.uk/Advice-Training-on-the-rules/Advice-Online-Database/Recognising-ads-Social-Media.aspx",
    },
    {
      label: "ZwillGen: FTC updates endorsement guidance for online disclosures and influencer programs (2023)",
      url: "https://www.zwillgen.com/ftc-state-ag/ftc-updates-endorsement-guidance-for-online-disclosures-and-influencer-programs/",
    },
  ],
};
