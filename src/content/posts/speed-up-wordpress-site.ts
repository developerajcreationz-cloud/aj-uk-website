import type { Post } from "./types";

export const speedUpWordpressSite: Post = {
  slug: "speed-up-wordpress-site",
  title: "How to speed up a WordPress site: fixes in order of impact",
  metaTitle: "Speed Up a WordPress Site: Core Web Vitals Fix Order",
  metaDescription:
    "How to speed up a slow WordPress site: measure first, then fix images, caching, scripts and hosting in order of impact, with Core Web Vitals targets.",
  primaryKeyword: "how to speed up a wordpress site",
  secondaryKeywords: [
    "wordpress speed optimization",
    "slow wordpress site",
    "wordpress core web vitals",
    "improve wordpress page speed",
    "wordpress lcp inp fix",
    "wordpress performance checklist",
  ],
  parent: "wordpress-web-design",
  scene: "platforms",
  related: ["website-maintenance-cost", "technical-seo-audit-checklist", "website-lead-generation"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  takeaways: [
    "The three Google speed targets (LCP, INP and CLS) and how to check them for your own pages",
    "A fix order from biggest likely gain to smallest, so you do not spend a week on a change that moves nothing",
    "A measurement log so you can prove each change helped, or undo it",
  ],
  answer: [
    "To speed up a WordPress site, measure first, then fix in this order: oversized images and the hero image, caching, third-party scripts and plugins, then hosting and the theme. Google's targets for a good experience are a Largest Contentful Paint (LCP) of 2.5 seconds or less, an Interaction to Next Paint (INP) of 200 milliseconds or less and a Cumulative Layout Shift (CLS) of 0.1 or less, measured at the 75th percentile of real visits.",
    "Speed is worth fixing because visitors leave slow pages, but it is not a shortcut to rankings: Google recommends good Core Web Vitals and does not say they guarantee a position. The sections below show how to measure, what usually causes each problem on WordPress and a log to track the results. If the site is also being rebuilt, see our [WordPress web design service](/services/wordpress-web-design/); for ongoing care, our [website maintenance cost guide](/blog/website-maintenance-cost/) lists what a plan should include.",
  ],
  disclosure:
    "AJ Creationz builds and maintains WordPress sites. The targets come from Google; the fix order is our working method, not a Google ranking recipe.",
  sections: [
    {
      h2: "Measure before you change anything",
      blocks: [
        {
          type: "ol",
          items: [
            "Open Google Search Console, then the Core Web Vitals report. It shows which groups of URLs pass or fail for mobile and desktop, based on real visits.",
            "Run your homepage and your two highest-value pages through PageSpeed Insights. Read the field data (real users) first and the lab data (a single test) second.",
            "Write down the LCP, INP and CLS for each page before you touch anything. That is your baseline.",
          ],
        },
        {
          type: "p",
          text: "Field data needs enough visits to appear. A new or small site may show only lab data, which is a useful guide but a single simulated run, so repeat it two or three times and use the middle result.",
        },
        {
          type: "table",
          caption: "Google's Core Web Vitals targets",
          head: ["Metric", "Measures", "Good", "Usual WordPress cause when it fails"],
          rows: [
            [
              "LCP",
              "How fast the main content appears",
              "2.5 seconds or less",
              "Large hero image, slow server response, render-blocking CSS and scripts",
            ],
            [
              "INP",
              "How fast the page responds to taps and clicks",
              "200 ms or less",
              "Heavy JavaScript from plugins, chat widgets, trackers and page builders",
            ],
            [
              "CLS",
              "How much the layout jumps",
              "0.1 or less",
              "Images without set sizes, late-loading banners, fonts that swap",
            ],
          ],
          note: "A page passes when it meets all three at the 75th percentile of real page loads, measured separately for mobile and desktop.",
        },
      ],
    },
    {
      h2: "The fix order",
      blocks: [
        {
          type: "h3",
          text: "1. Images, starting with the one at the top",
        },
        {
          type: "p",
          text: "On most WordPress pages the largest element is an image, so LCP is usually an image problem. Resize each image to the size it is displayed at, compress it, and use a modern format such as WebP. Do not lazy-load the hero image, because it needs to load first; lazy-load images lower on the page. Give every image width and height so the layout does not jump.",
        },
        {
          type: "h3",
          text: "2. Caching",
        },
        {
          type: "p",
          text: "A page cache stores a finished copy of each page so WordPress does not rebuild it for every visitor. Use one cache layer at a time, either your host's or a plugin's, because stacking several causes conflicts. Check logged-out pages after any change, and exclude the cart, checkout and account pages if you run a shop.",
        },
        {
          type: "h3",
          text: "3. Plugins and third-party scripts",
        },
        {
          type: "p",
          text: "Each plugin and script adds work for the browser, and this is the main reason INP fails. List every plugin, remove the ones you do not use, and look at what each tracker, chat widget and font loader costs. Delay non-essential scripts until after the page is interactive. Remove one thing at a time and re-test, so you know what made the difference.",
        },
        {
          type: "h3",
          text: "4. Theme and page builder",
        },
        {
          type: "p",
          text: "A heavy theme or page builder can load large amounts of CSS and JavaScript on every page. If scores stay poor after steps 1 to 3, test a lighter theme or simplify the layouts that use the most widgets.",
        },
        {
          type: "h3",
          text: "5. Hosting and server response",
        },
        {
          type: "p",
          text: "If the server is slow to send the first byte, no front-end change fully fixes LCP. Signs are a slow response on uncached pages, slow admin screens and timeouts during traffic spikes. Ask your host about PHP version, server-level caching and database performance, or compare with a managed WordPress plan. Do this last, because it costs money and the earlier steps are free.",
        },
      ],
    },
    {
      h2: "A measurement log to keep",
      blocks: [
        {
          type: "table",
          caption: "Copy this log: one row per change, re-test after each",
          head: [
            "Date",
            "Change made",
            "Page tested",
            "LCP before / after",
            "INP before / after",
            "CLS before / after",
            "Keep or undo",
          ],
          rows: [
            ["", "Resized and compressed hero image", "Homepage", "", "", "", ""],
            ["", "Turned on page cache", "Homepage", "", "", "", ""],
            ["", "Removed unused plugin", "Homepage", "", "", "", ""],
          ],
          note: "One change per row. If a change makes a metric worse or breaks a page, undo it and record why.",
        },
        {
          type: "p",
          text: "Allow time for field data to update. The Search Console report is based on real visits over a rolling period, so improvements appear gradually, not the day you make them.",
        },
      ],
    },
    {
      h2: "When speed is not your biggest problem",
      blocks: [
        {
          type: "p",
          text: "If pages already pass, more speed work will not lift rankings by itself. Check indexing, content and links first with our [technical SEO audit checklist](/blog/technical-seo-audit-checklist/), and check that visitors can take action with our [website lead generation scorecard](/blog/website-lead-generation/).",
        },
      ],
    },
  ],
  doNext: {
    title: "Record your three baseline numbers today",
    text: "Run your homepage through PageSpeed Insights and write down LCP, INP and CLS for mobile. Then fix the hero image, which is the quickest win on most sites. If you would like us to audit the site and list the fixes in priority order, send us the address.",
  },
  faqs: [
    {
      q: "What is a good page speed for a WordPress site?",
      a: "Google's targets are an LCP of 2.5 seconds or less, an INP of 200 milliseconds or less and a CLS of 0.1 or less, measured at the 75th percentile of real visits on mobile and desktop.",
    },
    {
      q: "Why is my WordPress site so slow?",
      a: "The most common causes are oversized images, no page cache, too many plugins and scripts, a heavy theme and slow hosting. Measure first so you fix the cause on your site, not the most popular cause.",
    },
    {
      q: "Do I need a caching plugin?",
      a: "You need page caching, which your host may already provide. Use one caching layer at a time and test logged-out pages after turning it on.",
    },
    {
      q: "Will a faster site rank higher?",
      a: "Google recommends good Core Web Vitals and includes them in page experience, but it does not say they guarantee rankings. Speed supports rankings and conversions; it does not replace useful content.",
    },
    {
      q: "How long do speed improvements take to show in Search Console?",
      a: "The Core Web Vitals report uses real-visit data collected over a rolling period, so expect improvements to appear over several weeks, not immediately.",
    },
  ],
  sources: [
    { label: "web.dev: Web Vitals", url: "https://web.dev/articles/vitals" },
    {
      label: "Google Search Central: Core Web Vitals and Google Search",
      url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
  ],
};
