import type { Post } from "./types";

export const websiteLeadGeneration: Post = {
  slug: "website-lead-generation",
  title: "Website visitors but no enquiries? 15 lead generation fixes",
  metaTitle: "Website Lead Generation: 15 Fixes When Visits Don't Enquire",
  metaDescription:
    "Website lead generation fixes for sites that get visitors but no enquiries: a 15-point scorecard covering tracking, offer, trust, forms and mobile speed.",
  primaryKeyword: "website lead generation",
  secondaryKeywords: [
    "website not generating leads",
    "website not getting enquiries",
    "website conversion rate optimisation",
    "improve website conversion rate",
    "how to get more leads from website",
  ],
  parent: "website-development",
  scene: "website",
  related: ["choose-a-web-design-agency", "how-much-does-a-website-cost", "technical-seo-audit-checklist"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  takeaways: [
    "A three-question diagnosis that tells you whether the problem is the traffic, the page or the follow-up",
    "A 15-point website lead generation scorecard you can run on your own site in under an hour",
    "A fix order that puts the quick, high-impact changes first",
  ],
  answer: [
    "When a website gets visitors but no enquiries, the cause is almost always one of three things: the visitors are not the right people, the page does not give them a clear reason and easy way to contact you, or enquiries are arriving but getting lost. Website lead generation improves when you fix them in that order of evidence: first check tracking, then the offer and trust on your key pages, then friction in forms and on mobile.",
    "This guide starts with a short diagnosis, then gives a 15-point scorecard. Each point is a yes or no check you can do yourself, with the fix beside it. The first few fixes are usually free and take less than an hour. If you would rather have it done for you, see our [website development service](/services/website-development/).",
  ],
  disclosure:
    "AJ Creationz builds and improves websites. The scorecard is our own audit method; the research on forms and page speed is linked in the sources.",
  sections: [
    {
      h2: "First, diagnose: traffic, page or follow-up?",
      blocks: [
        {
          type: "ol",
          items: [
            "**Are enquiries really zero?** Send a test enquiry through every form and click every phone link on a mobile. Check the inbox the form sends to, including spam. A surprising number of no leads problems are broken forms or notifications going to an old address.",
            "**Is the traffic relevant?** In Google Search Console, look at the queries that bring clicks. In Google Analytics, look at landing pages and locations. If most visits come from searches unrelated to your service, or from countries you do not serve, the page is not the problem; your targeting is.",
            "**Do visitors reach the contact step?** In Google Analytics, check how many sessions view your contact page or click a phone or email link. If many reach the form but few submit, the form is the problem. If few reach it at all, the page is not persuading them.",
          ],
        },
        {
          type: "p",
          text: "If you cannot answer question 3 because nothing is tracked, that is fix number one below. You cannot improve website conversion rate without measuring it.",
        },
      ],
    },
    {
      h2: "The 15-point website lead generation scorecard",
      blocks: [
        {
          type: "p",
          text: "Score one point for each yes. Run it on your home page and your two most visited service pages.",
        },
        {
          type: "table",
          caption: "Website lead generation scorecard",
          head: ["#", "Check", "If the answer is no, fix it by…"],
          rows: [
            [
              "1",
              "Form submissions, phone clicks and email clicks are tracked as key events in Google Analytics",
              "Setting up key events, then testing each one",
            ],
            [
              "2",
              "Every enquiry reaches an inbox someone checks daily, and you get an instant alert",
              "Routing forms to a shared inbox or CRM with a phone notification",
            ],
            [
              "3",
              "Enquirers get an instant confirmation saying when you will reply",
              "Adding an auto-reply with a realistic reply time",
            ],
            [
              "4",
              "The headline says what you do, for whom and where, in plain words",
              "Rewriting it, for example: Emergency plumber in Leeds, here within 2 hours",
            ],
            [
              "5",
              "Each main service has its own page that answers price, timing and process questions",
              "Splitting services into separate pages with honest price ranges",
            ],
            [
              "6",
              "There is one clear next step on every page, visible without scrolling on a phone",
              "Adding a single primary button such as Get a quote or Book a call",
            ],
            [
              "7",
              "Real proof is near the call to action: reviews, named clients, photos of your work",
              "Adding verified reviews and real project photos beside the form",
            ],
            [
              "8",
              "It is obvious who runs the business: names, faces, location and how long you have traded",
              "Adding a short about section with real people",
            ],
            [
              "9",
              "Contact details are visible: phone number, email and service area",
              "Putting them in the header or footer on every page",
            ],
            [
              "10",
              "The form asks only what you need to reply (often name, contact and the job)",
              "Removing optional fields and moving qualifying questions to the follow-up",
            ],
            [
              "11",
              "Form errors are clear and fields are labelled, not just placeholder text",
              "Using visible labels and specific error messages",
            ],
            [
              "12",
              "Visitors can choose how to contact you: form, phone, and booking or chat if you can staff it",
              "Adding a booking link or click-to-call button",
            ],
            [
              "13",
              "Pages pass Core Web Vitals on mobile (LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less)",
              "Compressing images, removing unused scripts and fixing layout shifts",
            ],
            [
              "14",
              "The site works well on a phone: tap targets, readable text, no pop-ups covering content",
              "Testing on a real phone and removing intrusive pop-ups",
            ],
            [
              "15",
              "Cookie and privacy notices do not block the contact form or call button",
              "Using a consent banner that leaves the main action usable",
            ],
          ],
          note: "Core Web Vitals thresholds are Google's, measured at the 75th percentile of visits (web.dev). The rest are our audit checks, not Google ranking factors.",
        },
        {
          type: "p",
          text: "A score of 12 or more means the page is probably not your main problem; look harder at traffic quality. Between 8 and 11, fix the gaps in the order below. Under 8, the page is likely losing most of the visitors who would have enquired.",
        },
      ],
    },
    {
      h2: "Fix order: quick wins first",
      blocks: [
        {
          type: "table",
          caption: "Which fixes to do first",
          head: ["Priority", "Fixes", "Why first"],
          rows: [
            ["1. Today", "1, 2, 3, 9", "Free, under an hour, and they stop leads being lost or never counted"],
            ["2. This week", "4, 6, 10, 12", "Copy and form changes; no rebuild needed"],
            ["3. This month", "5, 7, 8, 11", "Need content, photos or reviews gathered"],
            ["4. With a developer", "13, 14, 15", "Technical changes that may need code or theme work"],
          ],
        },
      ],
    },
    {
      h2: "Why short, clear forms win more enquiries",
      blocks: [
        {
          type: "p",
          text: "Form design has been tested. A controlled study presented at the CHI 2014 conference applied 20 web form guidelines to forms from real company sites. With the improved forms, people completed them faster, needed fewer attempts to submit, and reported higher satisfaction. The guidelines included clear labels, helpful error messages and asking only for what is needed.",
        },
        {
          type: "p",
          text: "For a service business the practical rule is: ask only what you need to reply. Budget, timeline and detailed requirements can come in the follow-up call, where you can also judge fit. If you get too many poor enquiries after shortening the form, add one qualifying question, such as the postcode or the type of job, rather than going back to a long form.",
        },
      ],
    },
    {
      h2: "Proof and trust: the step most small business sites skip",
      blocks: [
        {
          type: "p",
          text: "A visitor who has never heard of you is deciding whether you are real, competent and likely to turn up. Generic phrases such as quality service or customer focused do not help them decide. Specific, checkable details do: your full business name, the names and photos of the people they will deal with, photos of real jobs, reviews linked to Google, accreditations with membership numbers, and the areas you cover.",
        },
        {
          type: "p",
          text: "Never invent reviews or testimonials. Beyond the trust risk, fake or undisclosed incentivised reviews breach Google's guidelines and consumer protection rules in the UK and the US.",
        },
      ],
    },
    {
      h2: "When the fix is a new website",
      blocks: [
        {
          type: "p",
          text: "Most of the fixes above work on an existing site. A rebuild makes sense when the site cannot be edited easily, fails Core Web Vitals because of its theme or platform, or has no room for separate service pages. If that is you, our guide to [choosing a web design agency](/blog/choose-a-web-design-agency/) lists the questions to ask, and the [website cost guide](/blog/how-much-does-a-website-cost/) shows UK and US prices.",
        },
      ],
    },
  ],
  doNext: {
    title: "Run the scorecard on your top three pages",
    text: "Start with checks 1 to 3 today: they cost nothing and stop leads being lost. If you want a second pair of eyes, send us your website address and we will run the 15 checks and send you a short written list of what to fix first, at no cost.",
  },
  faqs: [
    {
      q: "Why is my website not generating leads?",
      a: "Usually because the visitors are not the right people, the page gives no clear reason or easy way to contact you, or enquiries are getting lost. Check tracking and forms first, then traffic quality, then the page itself.",
    },
    {
      q: "What is a good website conversion rate for a service business?",
      a: "It varies too much by industry, traffic source and offer for one benchmark to be useful. Measure your own rate of enquiries per visit, fix the scorecard gaps and compare against your own baseline month by month.",
    },
    {
      q: "How many fields should a contact form have?",
      a: "As few as you need to reply, often name, contact details and a short description of the job. Add one qualifying question only if you get too many unsuitable enquiries.",
    },
    {
      q: "Does page speed affect enquiries?",
      a: "Slow, unstable pages frustrate visitors, especially on mobile. Aim to pass Google's Core Web Vitals: LCP 2.5 seconds or less, INP 200 milliseconds or less and CLS 0.1 or less.",
    },
    {
      q: "Do I need a new website to get more leads?",
      a: "Often not. Most fixes are tracking, copy, forms and proof. A rebuild is worth it when the current site cannot be edited, fails speed tests because of its platform, or cannot hold separate service pages.",
    },
  ],
  sources: [
    {
      label: "web.dev: how the Core Web Vitals thresholds were defined",
      url: "https://web.dev/articles/defining-core-web-vitals-thresholds?hl=en",
    },
    {
      label: "Google Search Central: understanding Core Web Vitals and Google search results",
      url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      label: "Google Research: Designing Usable Web Forms (Seckler et al., CHI 2014)",
      url: "https://research.google/pubs/pub42513/",
    },
  ],
};
