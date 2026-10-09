export type Section = { h2: string; paragraphs: string[]; bullets?: string[] };

export type Service = {
  slug: string;
  /** Parent pillar slug for platform / channel pages. */
  parent?: string;
  index: string;
  title: string;
  /** Short line used on cards. */
  description: string;
  tags: string[];
  /** Primary keyword the page targets. */
  keyword: string;
  /** Full <title>, 50-60 characters, used verbatim (no template suffix). */
  metaTitle: string;
  /** 140-155 characters. */
  metaDescription: string;
  h1: string;
  /** Answer-first opening: the primary question answered in the first 150-200 words. */
  answer: string[];
  sections: Section[];
  pricing?: {
    h2: string;
    intro: string;
    rows: { label: string; range: string }[];
    note: string;
  };
  method: { name: string; steps: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "brand-identity",
    index: "01",
    title: "Brand Identity",
    description: "Positioning, naming, logo systems, and guidelines built to hold up at any size.",
    tags: ["Strategy", "Naming", "Logo systems"],
    keyword: "brand identity agency UK",
    metaTitle: "Brand Identity Agency UK | Logo & Branding | AJ Creationz",
    metaDescription:
      "UK brand identity agency for small and growing businesses. Brand strategy, logo design and guidelines you can use everywhere. Get a clear quote today.",
    h1: "Brand identity agency for UK businesses",
    answer: [
      "A brand identity is the set of visual and verbal choices that make a business instantly recognisable: its name, logo, colours, typography, imagery and tone of voice, plus the rules for using them. At AJ Creationz we build brand identities for UK small and growing businesses, starting with positioning and ending with a guidelines document your team, printer and web developer can follow without calling us.",
      "A logo alone is rarely enough. Without a clear position and consistent rules, even a well-drawn logo ends up looking different on your website, your social profiles and your packaging. We design the whole system once, so every new touchpoint looks like it came from the same business.",
    ],
    sections: [
      {
        h2: "What a brand identity includes",
        paragraphs: [
          "Scope depends on where your business is today. A new business usually needs the full set; an established one may only need a refresh or a missing layer such as guidelines.",
        ],
        bullets: [
          "Brand strategy: who you serve, what you stand for and how you differ from competitors",
          "Naming and taglines, if you do not yet have a name you are happy with",
          "Primary logo, secondary marks and an icon that works at favicon size",
          "Colour palette, typography and image style",
          "Tone of voice guidance for websites, social posts and emails",
          "Social media templates, and stationery or packaging where needed",
          "A brand guidelines document with clear dos and don'ts",
        ],
      },
      {
        h2: "Brand strategy before design",
        paragraphs: [
          "We start with questions, not sketches: who buys from you, why they choose you over the alternative, and what you want to be known for in three years. Those answers decide the name, the look and the voice. Skipping this step is the most common reason small-business logos feel generic.",
          "For businesses that already trade, we also review how the current brand shows up across your website, social profiles and printed material, so we know what to keep and what to retire.",
        ],
      },
      {
        h2: "Logo design that works everywhere",
        paragraphs: [
          "Your logo will appear on a phone screen, a van, an invoice and a one-inch social avatar. We design and test it at each of those sizes, in full colour, single colour and reversed out, and supply every file format your printer or web developer will ask for.",
        ],
      },
      {
        h2: "Brand guidelines your team will actually use",
        paragraphs: [
          "A good guidelines document is short enough to read and specific enough to settle arguments: exact colour values, minimum logo sizes, approved font pairings, example layouts and how to write in your voice. You own the final files and the document.",
        ],
      },
      {
        h2: "Rebrands and refreshes",
        paragraphs: [
          "If you already have a brand, a full rebrand is not always the answer. Sometimes the right move is to keep the name and logo, tidy the palette and typography, and write the guidelines that were never created. We will tell you honestly which route fits before you commit budget.",
        ],
      },
    ],
    pricing: {
      h2: "How much does brand identity cost in the UK?",
      intro:
        "Published UK pricing guides give these indicative ranges. They are market figures, not AJ Creationz quotes, and your price depends on scope.",
      rows: [
        { label: "Logo only (freelancer to small agency)", range: "£500 – £2,000" },
        { label: "Logo plus brand guidelines (starter pack)", range: "£1,500 – £5,000" },
        { label: "Full identity with strategy", range: "£5,000 – £20,000" },
        { label: "Full rebrand including rollout", range: "£10,000 – £50,000+" },
      ],
      note: "Source: UK branding cost guides including Whito and Design Cloud (2026). Several of these publishers sell branding services, so treat them as a guide and compare written quotes. Check any quote includes full ownership and every file format.",
    },
    method: {
      name: "The AJ Brand Build",
      steps: [
        { title: "Position", text: "We agree your audience, promise and competitors in a short strategy brief you sign off before any design begins." },
        { title: "Design", text: "We develop the identity and test it on the touchpoints you really use: website header, social avatar, invoice, signage." },
        { title: "Systemise", text: "We write the guidelines and package every file, so the brand stays consistent after we hand over." },
      ],
    },
    faqs: [
      { q: "How long does a brand identity project take?", a: "Most identity projects take three to six weeks, depending on scope and how quickly feedback comes back. A logo-only project is faster; a full strategy and guidelines project takes longer." },
      { q: "What is the difference between a logo and a brand identity?", a: "A logo is one element. A brand identity is the whole system around it: strategy, colours, typography, imagery, tone of voice and the rules for using them together." },
      { q: "Do I own the logo and brand files?", a: "Yes. On full payment you receive the final files and own the deliverables. Agree this in writing with any designer you hire." },
      { q: "Can you also build the website once the brand is done?", a: "Yes. We design and build websites on WordPress, Shopify or custom code, so the new identity goes live consistently across your site." },
      { q: "Do you work with businesses outside London?", a: "Yes. We work with businesses across the UK, remotely, using video calls and shared documents." },
    ],
    related: ["website-development", "video-editing", "seo-growth"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "website-development",
    index: "02",
    title: "Website Development",
    description: "Fast, conversion-focused websites on WordPress, Shopify, or fully custom builds.",
    tags: ["WordPress", "Shopify", "Custom"],
    keyword: "website development agency UK",
    metaTitle: "Website Development Agency UK | WordPress & Shopify",
    metaDescription:
      "UK website development agency building fast, search-ready sites on WordPress, Shopify or custom code. See which platform fits your business and budget.",
    h1: "Website development agency for UK businesses",
    answer: [
      "Website development is the design and build of a site that loads quickly, works on every device and turns visitors into enquiries or orders. At AJ Creationz we build on three platforms, WordPress, Shopify and custom code, and we choose between them based on what your business needs rather than what we prefer to sell.",
      "As a rule of thumb: pick WordPress if content and flexibility matter most, Shopify if you are selling products online, and custom code when you need functionality a template cannot give you. Every build includes mobile-first design, technical SEO foundations and conversion tracking, because a site that cannot be found or measured is only half finished.",
    ],
    sections: [
      {
        h2: "WordPress, Shopify or custom: how to choose",
        paragraphs: [
          "The right platform depends on what the site has to do, who will edit it and how much you want to spend on running it. This is the short version; each platform has its own page with more detail.",
        ],
        bullets: [
          "WordPress: best for service businesses, publishers and content-led sites. Easy to edit, flexible, strong for SEO.",
          "Shopify: best for online shops. Payments, inventory, shipping and tax are handled by the platform.",
          "Custom (Next.js): best when you need bespoke features, unusual performance targets or a product rather than a brochure site.",
        ],
      },
      {
        h2: "Design that is built to convert",
        paragraphs: [
          "We design around the action you want a visitor to take, whether that is booking a call, requesting a quote or adding to basket. That means clear page hierarchy, obvious calls to action, fast load times and forms that are short enough to finish on a phone.",
        ],
      },
      {
        h2: "Technical SEO built in from day one",
        paragraphs: [
          "Retrofitting SEO onto a finished site costs more than building it in. Every build ships with a logical URL structure, clean headings, XML sitemap, structured data, redirects from your old URLs and Core Web Vitals checked before launch.",
        ],
      },
      {
        h2: "Speed, security and accessibility",
        paragraphs: [
          "Slow, insecure or inaccessible sites lose customers and rankings. We optimise images and scripts, set up HTTPS, backups and updates, and build to accessible standards so more people can use the site.",
        ],
      },
      {
        h2: "After launch: training, support and improvement",
        paragraphs: [
          "We walk you through editing your own content, and we can look after updates, backups and ongoing improvements so the site keeps working as your business changes.",
        ],
      },
    ],
    pricing: {
      h2: "How much does a business website cost in the UK?",
      intro:
        "Published UK guides put typical costs in these bands. They are indicative market ranges, not AJ Creationz quotes.",
      rows: [
        { label: "Freelancer-built WordPress site", range: "£1,100 – £4,600" },
        { label: "Agency-built custom WordPress site", range: "£3,500 – £12,000" },
        { label: "Shopify store, freelancer", range: "£900 – £3,900" },
        { label: "Shopify store, agency", range: "£2,350 – £9,400" },
      ],
      note: "Sources: Startups.co.uk, ProfileTree and Project Cost Estimator (2025–2026). Estimator and agency sites have a commercial interest; the gap between a £500 quote and a £5,000 quote rarely reflects the same deliverable. Compare scope, not just price.",
    },
    method: {
      name: "The AJ Site Build",
      steps: [
        { title: "Plan", text: "We agree goals, page structure, platform and tracking before design starts." },
        { title: "Build", text: "We design, develop and test every template across phones, tablets and desktops." },
        { title: "Launch", text: "We migrate content, set up redirects, check speed and SEO basics, then go live and monitor." },
      ],
    },
    faqs: [
      { q: "Which platform is best for my business?", a: "WordPress suits most service businesses, Shopify suits online retailers, and custom code suits businesses with unusual requirements. A short call is usually enough to decide." },
      { q: "How long does it take to build a website?", a: "A typical small-business site takes four to eight weeks. Online shops and custom builds take longer, depending on the number of products and features." },
      { q: "Will I be able to edit the site myself?", a: "Yes. WordPress and Shopify builds come with a walkthrough so you can update pages, products and blog posts without a developer." },
      { q: "Will my new website hurt my current Google rankings?", a: "It should not if the migration is done properly. We map every old URL to a new one with redirects and check indexing after launch." },
      { q: "Do you offer ongoing website support?", a: "Yes. We can handle updates, backups, security checks and improvements after launch." },
    ],
    related: ["seo-growth", "meta-google-ads", "brand-identity"],
  },

  /* ---------------------- website development children --------------- */
  {
    slug: "wordpress-web-design",
    parent: "website-development",
    index: "02a",
    title: "WordPress Web Design",
    description: "Easy-to-edit, SEO-ready WordPress websites for UK service businesses.",
    tags: ["WordPress", "WooCommerce", "SEO-ready"],
    keyword: "WordPress web design agency UK",
    metaTitle: "WordPress Web Design Agency UK | AJ Creationz",
    metaDescription:
      "WordPress web design for UK businesses: fast, easy-to-edit, SEO-ready sites with training and ongoing support. See what is included and typical costs.",
    h1: "WordPress web design agency in the UK",
    answer: [
      "WordPress is the content management system behind a large share of the web, and it is our recommended platform for service businesses, consultancies and content-led sites. We design and build WordPress websites that load quickly, are simple for your team to edit and are structured for search from the first page.",
      "A good WordPress build is not a bought theme with your logo dropped in. We build a tidy set of page templates around your goals, keep plugins to the minimum needed, and set up hosting, backups and security so the site stays fast and safe after launch. This page covers WordPress specifically; if you are comparing platforms, start with our website development overview.",
    ],
    sections: [
      {
        h2: "When WordPress is the right choice",
        paragraphs: [
          "WordPress works well when you publish content regularly, need several kinds of page, want full ownership of your site, or expect the site to grow. It is less suited to a pure online shop with a large catalogue, where Shopify usually saves time and running cost.",
        ],
      },
      {
        h2: "What we build",
        paragraphs: ["Typical WordPress projects include:"],
        bullets: [
          "Brochure and lead-generation sites for service businesses",
          "Blogs and resource hubs",
          "Membership and booking sites",
          "WooCommerce shops for smaller catalogues",
          "Redesigns and migrations from older WordPress themes or other platforms",
        ],
      },
      {
        h2: "Speed, plugins and security",
        paragraphs: [
          "Most slow or hacked WordPress sites share the same causes: too many plugins, heavy themes and neglected updates. We limit plugins, optimise images, use caching, and set up automatic backups and update monitoring. Ask any agency who is responsible for updates after launch; the answer should be specific.",
        ],
      },
      {
        h2: "SEO on WordPress",
        paragraphs: [
          "We configure clean URLs, title tags and meta descriptions, XML sitemaps, structured data and internal linking, and make sure the build passes Core Web Vitals checks. If you also want ongoing search work, see our SEO and growth service.",
        ],
      },
      {
        h2: "Training and ongoing care",
        paragraphs: [
          "You get a recorded walkthrough of editing pages, posts and images. If you would rather not manage updates, we offer a care plan covering updates, backups, uptime checks and small changes.",
        ],
      },
    ],
    pricing: {
      h2: "How much does a WordPress website cost in the UK?",
      intro: "Published UK guides give these indicative ranges. They are not AJ Creationz quotes.",
      rows: [
        { label: "DIY on WordPress (domain, hosting, theme)", range: "£0 – £500 upfront" },
        { label: "Freelancer build", range: "£1,100 – £4,600" },
        { label: "Agency custom build", range: "£3,500 – £12,000" },
        { label: "Typical running costs per year", range: "£150 – £2,000" },
      ],
      note: "Sources: Startups.co.uk and ProfileTree (2025–2026). Running costs depend on hosting tier, premium plugin licences and whether someone maintains the site.",
    },
    method: {
      name: "The AJ WordPress Build",
      steps: [
        { title: "Structure", text: "Sitemap, page templates and conversion paths agreed before design." },
        { title: "Build lean", text: "Custom templates, minimal plugins, optimised media and security hardening." },
        { title: "Hand over", text: "Training, backups and a clear owner for updates." },
      ],
    },
    faqs: [
      { q: "Is WordPress good for SEO?", a: "Yes, when it is built well. It gives you control over URLs, headings, metadata and structured data. Performance and content quality still decide results." },
      { q: "How much does a WordPress website cost?", a: "UK guides put freelancer builds at roughly £1,100 to £4,600 and agency builds at £3,500 to £12,000. Your quote depends on page count, features and design complexity." },
      { q: "Can you redesign my existing WordPress site?", a: "Yes. We keep what ranks, redirect old URLs and rebuild the design, speed and structure." },
      { q: "Do I need WooCommerce or Shopify?", a: "For a small catalogue, WooCommerce can work. For larger shops, Shopify is usually simpler to run. We will recommend one after a short call." },
    ],
    related: ["shopify-web-design", "custom-website-development", "seo-growth"],
  },
  {
    slug: "shopify-web-design",
    parent: "website-development",
    index: "02b",
    title: "Shopify Web Design",
    description: "Shopify stores designed and built to sell, from setup to custom themes.",
    tags: ["Shopify", "Themes", "Conversion"],
    keyword: "Shopify web design agency UK",
    metaTitle: "Shopify Web Design Agency UK | Store Setup & Themes",
    metaDescription:
      "Shopify web design for UK businesses: store setup, custom themes, payments, shipping and conversion tracking. Launch a store built to sell. Get a quote.",
    h1: "Shopify web design agency in the UK",
    answer: [
      "Shopify is a hosted ecommerce platform that handles payments, inventory, shipping and tax, so you can focus on products and customers. We design and build Shopify stores for UK businesses, from a clean template setup for a new shop to a customised theme for a brand that wants to stand out.",
      "A good Shopify store makes it quick to find a product, easy to trust the shop and simple to pay. We set up UK shipping, VAT and payments properly, design product and collection pages for conversion, and connect analytics so you can see which pages and ads bring in sales.",
    ],
    sections: [
      {
        h2: "What a Shopify build includes",
        paragraphs: ["Scope varies with catalogue size, but a typical project covers:"],
        bullets: [
          "Theme selection or custom theme work matched to your brand",
          "Product and collection structure, filtering and navigation",
          "UK shipping rates, VAT settings and payment providers",
          "Product page layout: images, reviews, delivery information, returns",
          "Checkout and basket optimisation",
          "Product data import from a spreadsheet or your old store",
          "Analytics, Meta pixel and Google conversion tracking",
        ],
      },
      {
        h2: "Theme or custom design?",
        paragraphs: [
          "Shopify's free and paid themes are good starting points, and for many new stores a well-configured theme is the sensible choice. Custom theme work makes sense when your brand relies on a distinctive look, or when a standard theme limits how you present products.",
        ],
      },
      {
        h2: "Migrating to Shopify without losing rankings",
        paragraphs: [
          "Moving from another platform changes your URLs. We map every old product and category URL to its new address with 301 redirects, carry over titles and descriptions, and check indexing after launch.",
        ],
      },
      {
        h2: "Apps, speed and running costs",
        paragraphs: [
          "Apps add features and monthly cost, and too many slow the store. We choose a small, deliberate set and explain what each one costs, so you know your real monthly spend before launch.",
        ],
      },
      {
        h2: "Selling beyond the website",
        paragraphs: [
          "We can connect your store to Meta and Google advertising and to GoHighLevel for follow-up emails and texts, so new customers and abandoned baskets are handled automatically.",
        ],
      },
    ],
    pricing: {
      h2: "How much does a Shopify store cost in the UK?",
      intro: "There are two separate costs: Shopify's subscription and the build. Published guides give these indicative figures.",
      rows: [
        { label: "Shopify subscription (billed annually)", range: "≈ £19 – £259 per month" },
        { label: "Premium theme (optional)", range: "£100 – £300" },
        { label: "Freelancer build", range: "£900 – £3,900" },
        { label: "Agency build", range: "£2,350 – £9,400" },
      ],
      note: "Sources: Startups.co.uk, RVS Media and Project Cost Estimator (2025–2026). Check Shopify's own pricing page for current plans, and remember apps and transaction fees add to running costs.",
    },
    method: {
      name: "The AJ Store Launch",
      steps: [
        { title: "Set up", text: "Catalogue structure, shipping, VAT and payments configured for the UK." },
        { title: "Design", text: "Theme and page layouts built around how your customers browse and buy." },
        { title: "Track and launch", text: "Analytics, ad pixels and test orders before go-live." },
      ],
    },
    faqs: [
      { q: "How much does a Shopify store cost?", a: "Shopify plans cost roughly £19 to £259 a month on annual billing, plus the build. UK guides put build costs at £900 to £3,900 with a freelancer and £2,350 to £9,400 with an agency." },
      { q: "Shopify or WooCommerce?", a: "Shopify is simpler to run and better for larger catalogues. WooCommerce suits a small shop that sits inside a content-heavy WordPress site." },
      { q: "Can you move my shop to Shopify?", a: "Yes. We import products, customers where permitted, and set up redirects to protect existing search traffic." },
      { q: "Do you build Shopify Plus stores?", a: "Our focus is standard Shopify for small and growing businesses. If you need Shopify Plus, tell us your requirements and we will say honestly whether we are the right fit." },
    ],
    related: ["wordpress-web-design", "meta-google-ads", "gohighlevel-crm"],
  },
  {
    slug: "custom-website-development",
    parent: "website-development",
    index: "02c",
    title: "Custom Website Development",
    description: "Bespoke Next.js websites for businesses that need more than a template.",
    tags: ["Next.js", "React", "Performance"],
    keyword: "custom website development UK",
    metaTitle: "Custom Website Development UK | Next.js & React",
    metaDescription:
      "Custom website development in the UK using Next.js and React. Fast, secure sites with bespoke features, built when a template can't do the job.",
    h1: "Custom website development in the UK",
    answer: [
      "Custom website development means building your site from code instead of customising a template or platform. We use Next.js and React to build fast, secure sites and web applications when a business needs something WordPress or Shopify cannot do well, such as bespoke calculators, member areas, complex integrations or very strict performance targets.",
      "Custom is not automatically better. It costs more to build and needs a developer for changes, so we only recommend it when the requirements justify it. If a template can do the job, we will tell you, and point you to WordPress or Shopify instead.",
    ],
    sections: [
      {
        h2: "When custom development is worth it",
        paragraphs: ["A custom build is worth considering when:"],
        bullets: [
          "You need features that plugins or apps cannot provide cleanly",
          "The site has to connect to your own systems or third-party APIs",
          "Speed and interaction quality are central to your brand",
          "You are building a product, portal or tool, not just a brochure",
        ],
      },
      {
        h2: "Why we use Next.js",
        paragraphs: [
          "Next.js, built on React, lets pages be generated ahead of time and served quickly, which helps both users and search. It also gives us full control over metadata, structured data and URLs, which matters for SEO. This very website is built with it.",
        ],
      },
      {
        h2: "Content editing without a developer",
        paragraphs: [
          "A custom front end can still be edited by your team. We connect it to a headless CMS or to WordPress as a content source, so marketing staff can change copy and publish posts without touching code.",
        ],
      },
      {
        h2: "Security, hosting and maintenance",
        paragraphs: [
          "We handle deployment, environment configuration, dependency updates and security patching, and document how the site is built so you are never locked in to us.",
        ],
      },
    ],
    method: {
      name: "The AJ Custom Build",
      steps: [
        { title: "Scope", text: "Requirements, integrations and success measures written down and agreed." },
        { title: "Build in stages", text: "Working versions shared regularly so you see progress, not a reveal at the end." },
        { title: "Harden and hand over", text: "Performance, security and documentation completed before launch." },
      ],
    },
    faqs: [
      { q: "How much does custom website development cost?", a: "It depends entirely on scope. Because requirements vary so much, we provide a fixed quote after a scoping call rather than a generic price." },
      { q: "Is a custom site better for SEO?", a: "It can be faster and give finer control, but a well-built WordPress site ranks perfectly well. Content and links still matter most." },
      { q: "Can my team edit a custom site?", a: "Yes, if we connect it to a content management system. We agree this at the start." },
      { q: "Will I own the code?", a: "Yes. You receive the source code and documentation on full payment." },
    ],
    related: ["wordpress-web-design", "shopify-web-design", "seo-growth"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "video-editing",
    index: "03",
    title: "Video Editing",
    description: "Social cuts, brand films, and ad creative edited to hold attention and drive action.",
    tags: ["Reels & Shorts", "Brand films", "Ad creative"],
    keyword: "video editing services UK",
    metaTitle: "Video Editing Services UK | Social & Ad Videos",
    metaDescription:
      "Video editing services for UK businesses: Reels, TikToks, YouTube Shorts, brand films and ad creative, captioned and formatted for every platform.",
    h1: "Video editing services for UK businesses",
    answer: [
      "Video editing turns raw footage into finished content: trimmed, paced, captioned, colour-corrected and exported in the right format for each platform. AJ Creationz edits social videos, brand films and ad creative for UK businesses, so you can film on a phone or camera and hand the cutting to us.",
      "Most viewers watch social video with the sound off, so we design for that first: strong opening seconds, readable captions inside each platform's safe zones and clear on-screen text. We deliver the same video in vertical, square and horizontal formats where you need them, ready to post or to run as paid ads.",
    ],
    sections: [
      {
        h2: "Social media video editing",
        paragraphs: [
          "Short-form edits for Instagram Reels, TikTok, YouTube Shorts and LinkedIn. We cut for attention, add captions and sound, and match your brand fonts and colours so a month of posts looks consistent.",
        ],
      },
      {
        h2: "Ad creative for Meta and Google",
        paragraphs: [
          "Paid video needs a different approach to organic: a hook in the first two seconds, one clear message and one call to action. We produce several variations of the same ad so you can test hooks and see which one lowers your cost per lead. Pair it with our Meta and Google ads management if you want one team running the whole loop.",
        ],
      },
      {
        h2: "Brand films and promo videos",
        paragraphs: [
          "For longer videos such as company stories, product explainers and event recaps, we structure the edit around a clear narrative, add music, graphics and sound design, and finish with colour correction.",
        ],
      },
      {
        h2: "What we need from you",
        paragraphs: ["A brief makes editing faster and cheaper. Send us:"],
        bullets: [
          "The raw footage, shared by a link",
          "Your logo, fonts and colours (or your brand guidelines)",
          "One or two example videos you like",
          "The platform and goal for each video",
          "Any music or licensing requirements",
        ],
      },
      {
        h2: "Turnaround, revisions and formats",
        paragraphs: [
          "We agree a delivery date up front. Two rounds of revisions are included as standard, and we export 9:16, 1:1 and 16:9 versions on request. Music is licensed for commercial use, which is easy to overlook on social platforms.",
        ],
      },
    ],
    pricing: {
      h2: "How much does video editing cost in the UK?",
      intro: "Published guides give these indicative figures. We provide fixed quotes once we have seen your footage and brief.",
      rows: [
        { label: "Freelance editor, hourly", range: "£20 – £100+ per hour" },
        { label: "Freelance editor, day rate", range: "£50 – £400 per day" },
        { label: "Basic short-form edit (starting point)", range: "from ≈ £150 per project" },
      ],
      note: "Sources: Solohourly freelance rate data and Videotto's UK pricing guide (2026). Videotto sells an AI clipping tool, so treat its figures as a floor. Captions, grading, motion graphics and number of formats all raise the price.",
    },
    method: {
      name: "The AJ Edit Pass",
      steps: [
        { title: "Hook", text: "We find the strongest opening and structure the edit around it." },
        { title: "Polish", text: "Cut, caption, grade and sound-design to your brand style." },
        { title: "Format", text: "Export every platform version and check safe zones on a real phone." },
      ],
    },
    faqs: [
      { q: "How much does video editing cost in the UK?", a: "Freelancers typically charge £20 to £100+ an hour or £50 to £400 a day. Project prices depend on length, captions, motion graphics and the number of formats." },
      { q: "Do you film as well as edit?", a: "Our focus is editing your footage. If you need filming, we can advise on what to shoot or coordinate it with a videographer." },
      { q: "How quickly can you turn a video around?", a: "Short social edits are usually delivered within a few working days of receiving footage. We agree dates for each project." },
      { q: "Can you edit videos for paid ads?", a: "Yes. We create ad variations with different hooks and formats for Meta and Google." },
      { q: "How many revisions are included?", a: "Two rounds of revisions are included as standard." },
    ],
    related: ["meta-google-ads", "brand-identity", "seo-growth"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "seo-growth",
    index: "04",
    title: "SEO & Growth",
    description: "Technical SEO, content systems, and measurement that compound over time.",
    tags: ["Technical SEO", "Content", "Analytics"],
    keyword: "SEO agency UK",
    metaTitle: "SEO Agency UK for Small Businesses | AJ Creationz",
    metaDescription:
      "UK SEO agency for small and growing businesses: technical audits, content, local SEO and clear monthly reporting. Ask for a site review today.",
    h1: "SEO agency for UK small businesses",
    answer: [
      "SEO, or search engine optimisation, is the work of making your website easier for search engines to crawl and more useful to the people searching, so you appear for the queries that bring in customers. We are a UK SEO agency working with small and growing businesses, and we focus on the fundamentals that compound: technical health, relevant content and honest measurement.",
      "No one can guarantee rankings, and we do not. What we commit to is a clear plan, the work done properly and reporting in plain English that connects search activity to enquiries and sales. Most sites see early movement within two to three months, with stronger results building over six to twelve.",
    ],
    sections: [
      {
        h2: "Technical SEO",
        paragraphs: [
          "If search engines cannot crawl or understand your site, nothing else matters. We audit indexing, site speed and Core Web Vitals, mobile usability, redirects, duplicate content, structured data and internal linking, then fix issues in priority order.",
        ],
      },
      {
        h2: "Keyword research and content strategy",
        paragraphs: [
          "We map the real queries your customers use, check what currently ranks, and decide which pages you need: service pages, supporting guides and blog posts. Each page targets one clear intent, so your pages support each other instead of competing.",
        ],
      },
      {
        h2: "On-page SEO and content",
        paragraphs: [
          "We optimise titles, headings, meta descriptions, images and internal links, and write or edit content that answers the question quickly and then goes deeper. Every page needs something a competitor cannot copy by rewording, such as your own data, process or real examples.",
        ],
      },
      {
        h2: "Local SEO and Google Business Profile",
        paragraphs: [
          "If customers search near them, a complete Google Business Profile, consistent name, address and phone details, local landing pages and reviews matter as much as your website. We set these up and keep them accurate.",
        ],
      },
      {
        h2: "Authority and links",
        paragraphs: [
          "We earn mentions and links through useful content, directories that matter in your sector and digital PR. We do not buy links or build networks, which breaks Google's spam policies and can lose you rankings.",
        ],
      },
      {
        h2: "SEO for AI search",
        paragraphs: [
          "Google's AI features and assistants such as ChatGPT draw on the same quality signals: clear answers, trustworthy information and consistent facts about your business. We structure pages so the main answer is near the top and each section stands alone, and we track visibility in AI results as a separate measure from rankings.",
        ],
      },
      {
        h2: "Reporting that ties to the business",
        paragraphs: [
          "Monthly reports show rankings, clicks, enquiries and what we did, with next steps. We set up Search Console and GA4 so you own your data.",
        ],
      },
    ],
    pricing: {
      h2: "How much does SEO cost in the UK?",
      intro: "Published UK guides give these indicative monthly ranges. They are market figures, not AJ Creationz quotes.",
      rows: [
        { label: "Local SEO", range: "£500 – £1,200 per month" },
        { label: "Small business, national", range: "£500 – £2,000 per month" },
        { label: "Growing business or mid-sized shop", range: "£1,500 – £4,000+ per month" },
        { label: "Freelance consultants", range: "£50 – £300+ per hour" },
      ],
      note: "Sources: Whitehat SEO, Epic Edits and other UK pricing guides (2026). Most are published by agencies, so ranges differ. Several warn that very cheap monthly packages rarely produce measurable results. Always ask exactly what work is included each month.",
    },
    method: {
      name: "The AJ Growth Loop",
      steps: [
        { title: "Audit", text: "Find what blocks discovery: crawling, speed, content gaps and competitors." },
        { title: "Fix and publish", text: "Technical fixes first, then optimised pages in priority order." },
        { title: "Measure and repeat", text: "Track leads, not just rankings, and double down on what works." },
      ],
    },
    faqs: [
      { q: "How much does SEO cost in the UK?", a: "Most UK businesses pay between £500 and £5,000 a month. Local SEO is typically £500 to £1,200; national or ecommerce work costs more." },
      { q: "How long does SEO take to work?", a: "Expect early movement in two to three months and compounding results over six to twelve. Competitive terms take longer." },
      { q: "Do you guarantee first-page rankings?", a: "No. Nobody can honestly guarantee rankings. We commit to the work, transparency and regular reporting." },
      { q: "Do I need SEO if I run Google Ads?", a: "They complement each other. Ads bring traffic now; SEO builds traffic that does not stop when you stop paying." },
      { q: "Can you fix SEO on my existing website?", a: "Yes. We begin with an audit of your current site and prioritise the fixes with the biggest impact." },
    ],
    related: ["website-development", "meta-google-ads", "gohighlevel-crm"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "meta-google-ads",
    index: "05",
    title: "Meta & Google Ads",
    description: "Paid campaigns built around profitable acquisition, tracked from click to customer.",
    tags: ["Meta Ads", "Google Ads", "Conversion tracking"],
    keyword: "PPC agency UK",
    metaTitle: "PPC Agency UK | Google & Meta Ads Management",
    metaDescription:
      "UK PPC agency managing Google Ads and Meta (Facebook and Instagram) campaigns, with conversion tracking so every pound of ad spend is accountable.",
    h1: "PPC agency for Google and Meta ads in the UK",
    answer: [
      "Paid advertising puts your business in front of people now, either when they search for what you sell (Google Ads) or while they scroll social feeds (Meta, which runs Facebook and Instagram ads). AJ Creationz plans, launches and manages both for UK businesses, tying every campaign to a cost per lead or return on ad spend you can check.",
      "Most wasted ad spend comes from missing tracking, broad targeting or a landing page that does not convert. We fix those first: conversion tracking set up properly, one clear goal per campaign, and ad accounts that belong to you, so you keep your data and history whoever manages them.",
    ],
    sections: [
      {
        h2: "Google Ads or Meta Ads: which should you use?",
        paragraphs: [
          "Google Ads captures existing demand: people typing 'emergency plumber Leeds' are ready to buy. Meta Ads creates demand and reaches people by interest, location and behaviour before they search. Many businesses start with Google for high-intent leads and add Meta for awareness, retargeting and ecommerce. Each channel has its own page with more detail.",
        ],
      },
      {
        h2: "Strategy, setup and tracking",
        paragraphs: [
          "We start by agreeing your goal, target cost per lead and budget. Then we set up conversion tracking across Google, Meta and your site, so reporting reflects real enquiries and sales instead of clicks. Tracking has become harder as browsers restrict cookies, so we use server-side methods such as Meta's Conversions API where appropriate and respect UK GDPR and PECR consent rules.",
        ],
      },
      {
        h2: "Creative and landing pages",
        paragraphs: [
          "Ads are only half the funnel. We brief creative, including video from our editing team, and recommend landing page changes, because a faster page with one clear action usually lowers cost per lead more than any bid change.",
        ],
      },
      {
        h2: "Optimisation and reporting",
        paragraphs: [
          "We review campaigns weekly: search terms, audiences, creative fatigue and budget allocation. You receive a monthly report covering spend, leads, cost per lead and what we will change next.",
        ],
      },
      {
        h2: "Closing the loop with your CRM",
        paragraphs: [
          "Leads that wait lose value quickly. We connect ad leads to GoHighLevel so each enquiry gets an instant reply and a follow-up sequence, and you can see which campaigns produce customers rather than just form fills.",
        ],
      },
    ],
    pricing: {
      h2: "How much do ad management and ad spend cost?",
      intro: "There are two separate costs: what you pay the platforms, and what you pay to manage them. UK guides give these indicative figures for Meta management.",
      rows: [
        { label: "Management fee as share of ad spend", range: "10% – 20%" },
        { label: "Typical retainer range", range: "£1,500 – £8,000+ per month" },
        { label: "Common minimum ad budget", range: "£3,000 – £5,000 per month" },
      ],
      note: "Source: UK agency-published guides (2026); figures come from a small number of sources. Ad spend is paid directly to Google and Meta and is not included in management fees. Ask for the specific fee structure in writing.",
    },
    method: {
      name: "The AJ Paid Loop",
      steps: [
        { title: "Track", text: "Conversion tracking and a clear target cost per lead before launch." },
        { title: "Test", text: "Several audiences and creatives run against each other with controlled budgets." },
        { title: "Scale", text: "Budget moves to what produces customers, not just clicks." },
      ],
    },
    faqs: [
      { q: "What is the difference between Google Ads and Meta Ads?", a: "Google Ads shows your ads to people searching for what you sell. Meta Ads shows them to people browsing Facebook and Instagram based on interests and behaviour." },
      { q: "How much should I spend on ads?", a: "It depends on your market and goals. We recommend a realistic test budget after a short call and review it after the first month of data." },
      { q: "Do you charge a percentage of ad spend?", a: "We agree a clear management fee in writing before starting. Ad spend itself is paid directly to the platforms." },
      { q: "Will the ad accounts be in my name?", a: "Yes. Your accounts, data and history stay yours if we ever stop working together." },
      { q: "How soon will I see results?", a: "Ads can generate traffic within days, but expect two to three months of testing before costs stabilise." },
    ],
    related: ["video-editing", "gohighlevel-crm", "seo-growth"],
  },
  {
    slug: "google-ads-management",
    parent: "meta-google-ads",
    index: "05a",
    title: "Google Ads Management",
    description: "Search, Shopping and Performance Max campaigns managed for profitable leads.",
    tags: ["Search", "Shopping", "Performance Max"],
    keyword: "Google Ads agency UK",
    metaTitle: "Google Ads Agency UK | PPC Management | AJ Creationz",
    metaDescription:
      "Google Ads management for UK businesses: Search, Shopping and Performance Max with conversion tracking and monthly reporting. Request an account review.",
    h1: "Google Ads agency for UK businesses",
    answer: [
      "Google Ads lets you appear at the top of search results when someone searches for what you sell, and you pay only when they click. We manage Google Ads for UK businesses, building campaigns around the searches that signal buying intent and measuring success by leads and sales, not clicks.",
      "We run Search campaigns for service businesses, Shopping and Performance Max for online stores, and remarketing to bring back visitors who did not convert. Your Google Ads account stays in your name, and every campaign has a tracked conversion goal before it launches.",
    ],
    sections: [
      {
        h2: "Campaign types we manage",
        paragraphs: [],
        bullets: [
          "Search: text ads for high-intent searches such as 'accountant near me' or 'buy running shoes'",
          "Shopping: product listings with images and prices for online stores",
          "Performance Max: automated campaigns across Google's channels, with strong guardrails",
          "YouTube and Display: awareness and remarketing",
          "Local campaigns linked to your Google Business Profile",
        ],
      },
      {
        h2: "Keyword and search-term control",
        paragraphs: [
          "Wasted spend usually hides in the search terms report. We build negative keyword lists early, group keywords by intent and review actual search terms every week, so your budget goes to relevant searches.",
        ],
      },
      {
        h2: "Conversion tracking and bidding",
        paragraphs: [
          "Smart bidding only works if Google receives accurate conversion data. We set up tracking for form fills, calls and purchases, and move to automated bidding once there is enough data to support it.",
        ],
      },
      {
        h2: "Landing pages and quality",
        paragraphs: [
          "Google rewards relevant ads and pages with lower costs. We match each ad group to a focused landing page, and our website team can build or improve it.",
        ],
      },
    ],
    method: {
      name: "The AJ Search Audit",
      steps: [
        { title: "Audit", text: "Review account structure, tracking, search terms and wasted spend." },
        { title: "Rebuild", text: "Reorganise campaigns by intent and set clear conversion goals." },
        { title: "Refine", text: "Weekly search-term reviews and monthly reporting." },
      ],
    },
    faqs: [
      { q: "How much does Google Ads management cost?", a: "Agencies usually charge a percentage of spend or a monthly retainer. We agree the fee in writing before work begins; ad spend is paid directly to Google." },
      { q: "Can you take over my existing Google Ads account?", a: "Yes. We start with an audit and keep your history and data." },
      { q: "What is Performance Max?", a: "Performance Max is a Google campaign type that runs ads across Search, YouTube, Display and more using automation. It works best with strong tracking and quality assets." },
      { q: "Do I need a website to run Google Ads?", a: "You need a landing page. If your current site is not suitable, we can build one." },
    ],
    related: ["meta-ads-management", "seo-growth", "website-development"],
  },
  {
    slug: "meta-ads-management",
    parent: "meta-google-ads",
    index: "05b",
    title: "Meta Ads Management",
    description: "Facebook and Instagram campaigns built on strong creative and accurate tracking.",
    tags: ["Facebook", "Instagram", "Retargeting"],
    keyword: "Meta ads agency UK",
    metaTitle: "Meta Ads Agency UK | Facebook & Instagram Advertising",
    metaDescription:
      "Meta ads management for UK businesses: Facebook and Instagram campaigns, creative, tracking and retargeting. Request an ad account review today.",
    h1: "Meta ads agency for Facebook and Instagram",
    answer: [
      "Meta Ads are the adverts you see on Facebook and Instagram. They let you reach people by location, interests and behaviour, which makes them effective for lead generation, ecommerce and local businesses. We manage Meta Ads for UK businesses, with strong creative, accurate tracking and campaigns built around cost per lead or return on ad spend.",
      "Meta results depend heavily on creative and tracking. Since Apple's privacy changes and browser restrictions, the Meta pixel alone misses conversions, so we set up the Conversions API alongside it and respect UK GDPR and PECR consent requirements. We then test creative variations and let the data show which ones deserve more budget.",
    ],
    sections: [
      {
        h2: "What we manage",
        paragraphs: [],
        bullets: [
          "Lead generation campaigns with instant forms or landing pages",
          "Ecommerce catalogue and conversion campaigns",
          "Retargeting for site visitors and video viewers",
          "Local awareness campaigns",
          "Creative testing across image, video and carousel formats",
        ],
      },
      {
        h2: "Creative that stops the scroll",
        paragraphs: [
          "On Meta, the creative does most of the targeting. We plan several hooks and angles per campaign, and our video editors turn them into Reels and Stories formats with captions for sound-off viewing.",
        ],
      },
      {
        h2: "Tracking and attribution",
        paragraphs: [
          "We set up the pixel, Conversions API and event matching, check data in Events Manager and compare Meta's numbers with your CRM or sales data, because relying on Meta's own reporting alone overstates results.",
        ],
      },
      {
        h2: "Following up on leads",
        paragraphs: [
          "Fast follow-up is the difference between a lead and a lost lead. We connect Meta lead forms to GoHighLevel so every enquiry receives an immediate message and a sequence of follow-ups.",
        ],
      },
    ],
    pricing: {
      h2: "How much does a Meta ads agency cost?",
      intro: "UK guides give these indicative figures.",
      rows: [
        { label: "Agency fee as share of spend", range: "10% – 20%" },
        { label: "Fixed retainer", range: "from ≈ £1,500 per month" },
        { label: "Typical minimum ad budget", range: "£3,000 – £5,000 per month" },
      ],
      note: "Source: UK agency-published guides (2026); treat as indicative. Ad spend is paid to Meta, separately from our fee.",
    },
    method: {
      name: "The AJ Creative Test",
      steps: [
        { title: "Angle", text: "Define three distinct messages for your audience." },
        { title: "Test", text: "Run them against each other with the same budget and tracking." },
        { title: "Scale", text: "Put budget behind winners and retire tired creative." },
      ],
    },
    faqs: [
      { q: "How much do Meta ads cost for a small business?", a: "It depends on audience and market. Agencies commonly recommend £3,000 to £5,000 a month for meaningful testing, though smaller local budgets can work." },
      { q: "Do you create the ad creative?", a: "Yes. Our video editing and brand teams produce images, videos and carousels." },
      { q: "What is the Conversions API?", a: "It sends conversion events from your server to Meta, improving tracking accuracy when browser tracking is blocked." },
      { q: "Are Meta ads right for my business?", a: "They suit businesses with a visual product or service and a clear offer. We will tell you honestly if another channel is a better start." },
    ],
    related: ["google-ads-management", "video-editing", "gohighlevel-crm"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "gohighlevel-crm",
    index: "06",
    title: "GoHighLevel CRM",
    description: "Lead capture, follow-up automation, and pipelines set up so no enquiry slips through.",
    tags: ["Automation", "Pipelines", "Email & SMS"],
    keyword: "GoHighLevel agency UK",
    metaTitle: "GoHighLevel Agency UK | CRM Setup & Automation",
    metaDescription:
      "GoHighLevel CRM setup for UK businesses: pipelines, lead capture, email and SMS follow-up, booking and reporting. Stop losing enquiries. Get a quote.",
    h1: "GoHighLevel agency in the UK: CRM setup and automation",
    answer: [
      "GoHighLevel (GHL) is an all-in-one CRM and marketing automation platform that combines contact management, sales pipelines, email and SMS, landing pages, appointment booking and review requests in one place. We set it up for UK businesses so that every enquiry is captured, answered quickly and followed up automatically.",
      "Most businesses do not lose leads because their marketing fails; they lose them because replies are slow and follow-up is inconsistent. A properly configured GoHighLevel account replies instantly, books calls, sends reminders and shows you exactly where every lead sits in your pipeline. We build and test that system and train your team to use it, with the account in your name.",
    ],
    sections: [
      {
        h2: "What we set up",
        paragraphs: [],
        bullets: [
          "Sales pipelines and stages that match your real process",
          "Lead capture from website forms, landing pages, Meta lead ads and Google leads",
          "Instant email and SMS replies, and nurture sequences",
          "Calendar booking with confirmations and reminders",
          "Missed-call text-back and review request automation",
          "Reporting dashboards showing lead source, stage and conversion",
          "Migration from your current CRM or spreadsheet",
        ],
      },
      {
        h2: "Pipelines and lead tracking",
        paragraphs: [
          "We map how a lead becomes a customer in your business, then build pipeline stages and rules that move contacts automatically, so you see what needs action today.",
        ],
      },
      {
        h2: "Email and SMS automation",
        paragraphs: [
          "Sequences are written in your voice and timed to your sales cycle. We include consent capture, unsubscribe handling and quiet hours to comply with UK GDPR and PECR, and we recommend that a data-protection professional reviews consent wording before live messaging starts. Check UK number setup and deliverability before relying on SMS or voice, as some features are built primarily for North American use.",
        ],
      },
      {
        h2: "Connecting ads, website and CRM",
        paragraphs: [
          "When your forms, Meta and Google ads, and calendar all feed one system, you can see which campaigns produce customers. We connect them and test each path end to end.",
        ],
      },
      {
        h2: "GoHighLevel or HubSpot?",
        paragraphs: [
          "GoHighLevel is usually cheaper and includes SMS, booking and review tools natively, which suits service businesses and agencies. HubSpot has a more mature reporting and integration ecosystem and a free tier, but costs rise quickly. Sources disagree about which suits smaller teams, so the right answer depends on your size, budget and workflows. We will say honestly which fits.",
        ],
      },
    ],
    pricing: {
      h2: "How much does GoHighLevel cost in the UK?",
      intro: "There are platform fees and setup fees. Published sources give these indicative figures.",
      rows: [
        { label: "GoHighLevel Starter plan", range: "from $97 per month (≈ £78)" },
        { label: "Agency Unlimited plan", range: "$297 per month (≈ £240)" },
        { label: "UK-focused estimate including VAT", range: "≈ £100 – £130 per month" },
        { label: "Professional setup (one UK provider's quote)", range: "from £3,500" },
      ],
      note: "Sources: UK GoHighLevel provider and review pages (2026), several published by sellers of GHL services. Plans and exchange rates change, so check GoHighLevel's pricing page for current figures.",
    },
    method: {
      name: "The AJ Lead Path",
      steps: [
        { title: "Map", text: "Trace how leads arrive today and where they drop off." },
        { title: "Automate", text: "Build pipelines, replies, reminders and reporting, and test every path." },
        { title: "Train", text: "Show your team how to use it, then refine using real data." },
      ],
    },
    faqs: [
      { q: "What is GoHighLevel used for?", a: "It is a CRM and automation platform for capturing leads, following up by email and SMS, booking appointments, managing pipelines and requesting reviews." },
      { q: "How much does GoHighLevel setup cost?", a: "One UK provider quotes from £3,500. Our price depends on scope, which we agree after mapping your process." },
      { q: "Do I need to already have a GoHighLevel account?", a: "No. We can create one, or tidy an existing account. It stays in your name." },
      { q: "Is GoHighLevel compliant with UK GDPR?", a: "Compliance depends on how you configure and use it. We build in consent capture and unsubscribe handling, and recommend legal review of consent wording." },
      { q: "Can GoHighLevel replace my current CRM?", a: "Often, yes. We can migrate contacts and history from spreadsheets or other CRMs." },
    ],
    related: ["meta-google-ads", "website-development", "seo-growth"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const TOP_LEVEL_SERVICES = SERVICES.filter((s) => !s.parent);
export const childrenOf = (slug: string) => SERVICES.filter((s) => s.parent === slug);
