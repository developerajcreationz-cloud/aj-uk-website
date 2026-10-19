import type { Post } from "./types";

export const websiteBriefTemplate: Post = {
  slug: "website-brief-template",
  title: "Website brief template: what to send a web designer",
  metaTitle: "Website Brief Template: What to Send a Web Designer (Free)",
  metaDescription:
    "A free website brief template with 12 sections and a filled-in example, so designers can quote accurately. Plus a redesign checklist for existing sites.",
  primaryKeyword: "website brief template",
  secondaryKeywords: [
    "website brief",
    "website design brief",
    "web design brief template",
    "how to write a website brief",
    "website redesign checklist",
    "website planning template",
    "website requirements document",
  ],
  parent: "website-development",
  scene: "website",
  related: ["choose-a-web-design-agency", "how-much-does-a-website-cost", "website-migration-seo-checklist"],
  author: { name: "Athar", role: "Strategic Director" },
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  takeaways: [
    "A 12-section website brief template you can copy, with the question each section must answer",
    "A filled-in example brief for a fictional trade business, so you can see the level of detail that gets accurate quotes",
    "An extra checklist for redesigns, so a new site does not lose the rankings and enquiries the old one earns",
  ],
  answer: [
    "A website brief is a short document that tells a web designer what the site is for, who it is for, what pages and features it needs, what you already have, and your budget and deadline. A good website brief template covers those points in 12 sections and fits on two to four pages. It matters because designers quote on what they understand: two agencies given a vague brief can quote very different prices for very different sites, and you cannot compare them fairly.",
    "Below is the template, the question each section must answer, a filled-in example, and an extra checklist if you are replacing an existing site. Send the same brief to every designer you ask to quote. For what the work should cost, see our [website cost guide](/blog/how-much-does-a-website-cost); to have us build it, see our [website development service](/services/website-development).",
  ],
  disclosure:
    "AJ Creationz builds websites and receives briefs like this. The template is our own; use it with any designer or agency.",
  sections: [
    {
      h2: "The 12-section website brief template",
      blocks: [
        {
          type: "table",
          caption: "Website brief template: copy the left column, answer the right",
          head: ["Section", "The question it must answer"],
          rows: [
            [
              "1. About the business",
              "What do you do, where, for whom, and what makes you different from the competitors customers compare you with?",
            ],
            [
              "2. The goal of the site",
              "What should the site achieve in the first year, in numbers if you can (for example, 20 quote requests a month)?",
            ],
            [
              "3. Audience",
              "Who are the two or three main types of visitor, and what do they need to know before they contact you?",
            ],
            [
              "4. The main action",
              "What is the one thing you want most visitors to do: call, request a quote, book, buy?",
            ],
            ["5. Pages and content", "Which pages do you need, and who will write the words and supply the photos?"],
            [
              "6. Features and integrations",
              "What must the site do beyond showing pages: bookings, payments, a shop, a CRM, a members area?",
            ],
            ["7. Brand", "Do you have a logo, colours, fonts and brand guidelines? Link or attach them."],
            ["8. Examples", "Which three sites do you like and why, and which do you dislike and why?"],
            [
              "9. Existing site and SEO",
              "Is there a current site? Which pages bring traffic or enquiries? Who owns the domain and hosting?",
            ],
            [
              "10. Platform and editing",
              "Who will update the site after launch, how often, and is there a platform you must or must not use?",
            ],
            [
              "11. Legal and accessibility",
              "Which markets do you serve, and what do you need for privacy, cookies and accessibility?",
            ],
            [
              "12. Budget, timeline and decisions",
              "What is your budget range, your launch date and why, and who signs off each stage?",
            ],
          ],
        },
        {
          type: "p",
          text: "Sections 2, 4 and 12 are the ones most briefs leave out, and they are the ones that change the quote most. A site that must produce booked appointments needs different pages and features from one that only needs to look credible when someone checks you after a referral.",
        },
      ],
    },
    {
      h2: "Filled-in example: a website brief for a trade business",
      blocks: [
        {
          type: "p",
          text: "This example is fictional. It shows the level of detail that lets a designer quote accurately.",
        },
        {
          type: "table",
          caption: "Example brief: Brightline Electrical (fictional), Bristol",
          head: ["Section", "Answer"],
          rows: [
            [
              "1. About",
              "Domestic electricians, 4 staff, Bristol and 15 miles around. NICEIC registered. We specialise in EV charger installs and rewires, which most local competitors do not lead with.",
            ],
            [
              "2. Goal",
              "25 quote requests a month from the site within 12 months (currently about 6). Fewer calls asking for prices we do not offer.",
            ],
            [
              "3. Audience",
              "Homeowners planning a rewire or EV charger; landlords needing safety certificates. Both want price ranges, timescales and proof we are registered.",
            ],
            ["4. Main action", "Request a quote with photos of the consumer unit. Phone as a second option."],
            [
              "5. Pages",
              "Home, EV chargers, rewires, landlord certificates, about, reviews, contact. We will supply job photos; we need help writing the service pages.",
            ],
            [
              "6. Features",
              "Quote form with photo upload, sent to our CRM. Google reviews shown on the site. No shop.",
            ],
            ["7. Brand", "Logo and colours exist (files attached). No guidelines."],
            [
              "8. Examples",
              "Like: site A for its clear prices; site B for its photo gallery. Dislike: site C, too many pop-ups.",
            ],
            [
              "9. Existing site",
              "Old site since 2019. Domain registered by us; hosting with the old designer. The EV charger page brings most enquiries now.",
            ],
            [
              "10. Editing",
              "Office manager will add reviews and photos monthly. No preference on platform as long as it is easy to edit.",
            ],
            [
              "11. Legal",
              "UK only. Need a privacy policy, a cookie banner that meets UK rules and an accessible site.",
            ],
            [
              "12. Budget and timing",
              "£4,000 to £6,000. Live by March, before our busy spring season. Owner signs off design and launch.",
            ],
          ],
        },
      ],
    },
    {
      h2: "How to write each section well",
      blocks: [
        {
          type: "ul",
          items: [
            "**Be specific about the goal.** More enquiries is not a goal a designer can plan for. A number, a type of enquiry and a deadline are.",
            "**Say who writes the content.** Content is the most common cause of late launches. If you want the designer to write it, say so, because it changes the price.",
            "**Explain why you like an example.** I like their site does not help. I like how prices are shown on every service page does.",
            "**List integrations by name.** Name your CRM, booking tool, payment provider and email platform, so the designer can check they connect.",
            "**Give a budget range.** Without one, quotes can differ several times over because each designer guesses a different scope. A range lets them propose the best site for that money.",
            "**Name the decision maker.** Projects stall when sign-off is unclear. Say who approves the design, the content and the launch.",
          ],
        },
      ],
    },
    {
      h2: "Legal and accessibility: what to put in section 11",
      blocks: [
        {
          type: "p",
          text: "This is general information, not legal advice. In the UK, a site that uses non-essential cookies, such as analytics or ad tracking, needs consent under UK GDPR and PECR, and a privacy policy that explains how you use personal data from forms. In the US, rules vary by state, and California's privacy law is the one most small businesses meet first if they serve customers there.",
        },
        {
          type: "p",
          text: "For accessibility, ask for the site to meet WCAG 2.2 level AA, the current version of the W3C's Web Content Accessibility Guidelines. It covers readable contrast, keyboard use, labelled form fields and text alternatives for images, which also tend to make the site easier for everyone to use.",
        },
      ],
    },
    {
      h2: "Website redesign checklist: add this if you have a site already",
      blocks: [
        {
          type: "p",
          text: "A redesign can lose rankings and enquiries if old pages disappear without redirects. Add these points to section 9 of your brief:",
        },
        {
          type: "ol",
          items: [
            "Export a list of every current page URL and the pages that bring the most visits and enquiries, from Google Search Console and Google Analytics.",
            "Ask the designer to map every old URL to a new one and set up permanent (301) redirects at launch.",
            "Keep the page titles and content of top-performing pages unless there is a reason to change them.",
            "Confirm who has access to the domain, DNS, hosting, Search Console and Analytics before work starts.",
            "Ask for tracking (form, call and booking key events) to be tested before launch, not after.",
            "Agree a check two to four weeks after launch to review Search Console for errors and traffic changes.",
          ],
        },
        {
          type: "p",
          text: "Our [website migration SEO checklist](/blog/website-migration-seo-checklist) covers redirects in detail, with a redirect map template.",
        },
      ],
    },
    {
      h2: "After you send the brief",
      blocks: [
        {
          type: "p",
          text: "Send the same brief to three designers or agencies and ask each to quote against it, listing what is included. That makes quotes comparable. Our guide to [choosing a web design agency](/blog/choose-a-web-design-agency) has the questions to ask and a scorecard for comparing proposals.",
        },
      ],
    },
  ],
  doNext: {
    title: "Copy the template and fill in sections 2, 4 and 12 first",
    text: "Those three sections change quotes the most. Then send the brief to every designer you ask to quote. If you would like a quote from us, send your completed brief and we will reply within one working day with questions or a written proposal.",
  },
  faqs: [
    {
      q: "What should a website brief include?",
      a: "The business and its goal, the audience, the main action you want visitors to take, pages and content, features and integrations, brand assets, examples, the existing site, platform and editing needs, legal and accessibility needs, and your budget, timeline and decision maker.",
    },
    {
      q: "How long should a website brief be?",
      a: "Usually two to four pages. Long enough to answer the 12 questions in the template clearly, short enough that a designer will read all of it.",
    },
    {
      q: "Should I include a budget in a website brief?",
      a: "Yes. A range lets designers propose the best site for that money. Without one, quotes vary widely because each designer guesses a different scope.",
    },
    {
      q: "What is the difference between a website brief and a website requirements document?",
      a: "A brief explains goals, audience and scope so a designer can quote. A requirements document is a detailed specification, usually written after the designer is chosen, listing every feature and how it should work.",
    },
    {
      q: "How do I brief a website redesign?",
      a: "Use the same template, and add a list of current URLs and top pages, a requirement to redirect every old URL, and tests for tracking before launch, so you keep existing rankings and enquiries.",
    },
  ],
  sources: [
    { label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    {
      label: "Google Search Central: site moves with URL changes and 301 redirects",
      url: "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
    },
  ],
};
