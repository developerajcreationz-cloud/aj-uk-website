import type { Post } from "./types";

export const reelsAndTiktokEditingGuide: Post = {
  slug: "reels-and-tiktok-editing-guide",
  title: "Instagram Reels safe zones, TikTok captions and hooks",
  metaTitle: "Instagram Reels Safe Zones, Captions and Hooks Guide",
  metaDescription:
    "Instagram Reels safe zones with the pixel math, TikTok video caption rules, hook formulas, an export checklist and what editing costs per video.",
  primaryKeyword: "instagram reels safe zones",
  secondaryKeywords: [
    "tiktok video captions",
    "reels editing tips",
    "hook ideas for reels",
    "short form video editing for business",
    "video editing cost per video",
  ],
  parent: "video-editing",
  related: ["brand-guidelines-template", "google-ads-vs-facebook-ads"],
  author: { name: "Ahmad Jan", role: "Creative Imagination Lead" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  takeaways: [
    "Instagram Reels safe zones with the pixel math, for organic posts and for ads",
    "Caption and hook rules you can apply in any editor",
    "What short-form editing costs per video, by experience level",
  ],
  answer: [
    "Instagram Reels safe zones are the parts of a vertical video that stay clear of the app's buttons, captions and profile bar. Reels are 1080 by 1920 pixels (9:16). Most guides tell you to keep text and faces inside a centered 1080 by 1420 area, which leaves about 250 pixels clear at the top and bottom; the bottom needs the most room, with guides quoting 250 to 320 pixels. Sources disagree and Instagram does not publish a single official figure we could find, so check your edit in the app's preview before you post.",
    "This guide gives the numbers, shows the arithmetic, and adds practical rules for TikTok video captions and for hooks in the first seconds. At the end you will find what short-form editing costs per video. If you want edits done for you, see our [video editing service](/services/video-editing).",
  ],
  disclosure:
    "AJ Creationz offers video editing. Safe-zone figures come from third-party guides because we could not find an official specification; the caption and hook advice is our working practice, not tested data.",
  sections: [
    {
      h2: "Instagram Reels safe zones: the numbers",
      blocks: [
        {
          type: "table",
          caption: "Reported safe zones on a 1080 × 1920 canvas",
          head: ["Source type", "Figure reported", "What it means"],
          rows: [
            ["Several organic guides", "Centered 1080 × 1420", "(1,920 − 1,420) ÷ 2 = 250 px clear at top and bottom"],
            ["One 2026 guide", "Critical bottom band 280 px", "Keep key text above y = 1,640"],
            [
              "One guide",
              "About 290 px trimmed from top and bottom in the feed view",
              "Safe box about y = 290 to 1,630",
            ],
            [
              "One agency guide",
              "Top 108, bottom 320, left 60, right 120 px",
              "Date and method unclear; treat with caution",
            ],
            [
              "Meta ads guide (placements for ads)",
              "Top 14%, bottom 35%, sides 6%",
              "Top 269 px, bottom 672 px, sides 65 px",
            ],
          ],
          note: "Arithmetic: 14% of 1,920 = 268.8; 35% of 1,920 = 672; 6% of 1,080 = 64.8. These sources are third-party blogs that disagree, which is why we recommend confirming in the app.",
        },
        {
          type: "h3",
          text: "A conservative working rule",
        },
        {
          type: "table",
          head: ["Use", "Keep text and faces inside", "Reasoning"],
          rows: [
            [
              "Organic Reel",
              "x from 65 to 1,015, y from 250 to 1,600",
              "Uses the 250 px top margin and the largest reported bottom margin, 320 px (1,920 − 320 = 1,600), with 6% side margins",
            ],
            [
              "Reel used as an ad placement",
              "x from 65 to 1,015, y from 269 to 1,248",
              "Uses the ad figures: 1,920 − 672 = 1,248",
            ],
          ],
          note: "Run a test post to your own account, or use the app's preview, before you publish or run an ad. Interfaces change.",
        },
      ],
    },
    {
      h2: "TikTok video captions: rules that work",
      blocks: [
        {
          type: "p",
          text: "Captions keep a video understandable when the sound is off, and they help people who are deaf or hard of hearing. TikTok's own interface also covers parts of the frame, so use the same conservative box as above unless you have checked the app. These are our working rules, not measured results.",
        },
        {
          type: "ul",
          items: [
            "Keep captions to one or two lines on screen at a time, in the middle of the safe box",
            "Use high contrast: light text with a dark outline or background strip",
            "Sync words to speech, and break lines at natural pauses",
            "Check spelling and brand names; auto-captions make mistakes",
            "Keep the same caption style across all your videos so it becomes part of your look",
          ],
        },
      ],
    },
    {
      h2: "Hook ideas for Reels and Shorts",
      blocks: [
        {
          type: "p",
          text: "The hook is what the viewer sees and hears in the first seconds. These patterns are practical starting points to test; none is guaranteed to work for your audience.",
        },
        {
          type: "table",
          head: ["Pattern", "Example for a local service business"],
          rows: [
            ["Show the result first", "Open on the finished kitchen, then rewind to the start"],
            ["Ask a specific question", "Why does your boiler lose pressure in winter?"],
            [
              "State a surprising fact you can prove",
              "A specific, true number from your own work, such as how long a job really takes",
            ],
            ["Name the viewer", "If you run a salon, stop doing this with your bookings"],
            ["Pose a problem, promise a fix", "Three mistakes in your Google listing, and how to fix each"],
          ],
          note: "Only use facts you can show.",
        },
      ],
    },
    {
      h2: "Reels editing tips: a checklist before you export",
      blocks: [
        {
          type: "ol",
          items: [
            "Export at 1080 × 1920, vertical",
            "Check the hook in the first second without sound",
            "Check all text sits inside the safe box on a real phone",
            "Check captions are correct and readable",
            "Check audio levels, music rights and platform sound rules",
            "Add a clear ending: a single action, such as follow, book or message",
          ],
        },
      ],
    },
    {
      h2: "Video editing cost per video",
      blocks: [
        {
          type: "table",
          caption: "Indicative short-form editing prices (US dollars, third-party guides)",
          head: ["Editor", "Price"],
          rows: [
            ["Short-form video, beginner editor", "$25 – $75"],
            ["Short-form video, intermediate editor", "$75 – $200"],
            ["Short-form video, senior editor", "$200 – $500"],
            ["Hourly, Western mid-level editor", "$50 – $150"],
            ["Hourly, offshore editor in Southeast Asia", "$15 – $40"],
          ],
          note: "Sources are listed on our video editing service page. Most publishers sell video editing. Ask what a price includes: captions, revisions, music licensing and number of formats.",
        },
        {
          type: "p",
          text: "Short-form editing for business also covers ad versions of a video; see [Google Ads vs Facebook Ads](/blog/google-ads-vs-facebook-ads) for how to plan the channel, and use our [brand guidelines template](/blog/brand-guidelines-template) so every video follows your colors and fonts.",
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Take your last video and overlay the conservative box from this guide in your editor. If any text or face falls outside it, re-position before you post again.",
  },
  faqs: [
    {
      q: "What are Instagram Reels safe zones?",
      a: "The area of a vertical video that stays clear of Instagram's interface. Most guides recommend a centered 1080 × 1420 box on a 1080 × 1920 canvas, with extra room at the bottom.",
    },
    {
      q: "What size should a Reel be?",
      a: "1080 × 1920 pixels, in a 9:16 vertical format.",
    },
    {
      q: "Do I need captions on TikTok and Reels?",
      a: "They are strongly recommended: they keep videos understandable without sound and help accessibility.",
    },
    {
      q: "How much does video editing cost per video?",
      a: "Guides put short-form edits at about $25 to $75 for beginners, $75 to $200 for intermediate editors and $200 to $500 for senior editors.",
    },
    {
      q: "How do I write a hook for Reels?",
      a: "Lead with the result, a specific question or a provable fact in the first seconds, then test different openings and keep the ones that hold viewers.",
    },
  ],
  sources: [
    {
      label: "TryMyPost: Instagram Reels safe zones and text placement 2026",
      url: "https://www.trymypost.com/blog/instagram-reels-safe-zones-text-placement-2026",
    },
    {
      label: "Fliki: Instagram Reel dimensions and size guide",
      url: "https://fliki.ai/blog/instagram-reel-dimensions-and-size-guide",
    },
    { label: "Argil: Instagram Reel size, 2026 spec sheet", url: "https://argil.ai/blog/instagram-reel-size-e350f" },
    {
      label: "Aituber: Instagram Reel size and dimensions guide",
      url: "https://aituber.app/blog/instagram-reel-size/",
    },
    {
      label: "First Pier: Instagram ad safe zone guidelines",
      url: "https://www.firstpier.com/resources/instagram-ad-safe-zones",
    },
    { label: "Adnova: Meta ad safe zones guide", url: "https://adnova.ai/blogs/meta-ad-safe-zones-guide" },
    {
      label: "Videotto: how much does video editing cost, 2026",
      url: "https://www.videotto.com/blog/how-much-does-video-editing-cost-global-2026",
    },
  ],
};
