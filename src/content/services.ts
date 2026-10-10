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
  /** Primary keyword the page targets (no geo modifier in headings or titles; UK and US audience is signalled in body copy). */
  keyword: string;
  /** Full <title>, used verbatim (no template suffix). Aim for 50-60 characters. */
  metaTitle: string;
  /** Aim for 140-155 characters. */
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
    keyword: "brand identity agency",
    metaTitle: "Brand Identity Agency | Branding for Growing Businesses",
    metaDescription:
      "Brand identity agency for UK and US businesses. Brand strategy, logo design and guidelines you can use everywhere. Request a clear quote today.",
    h1: "Brand identity agency for growing businesses",
    answer: [
      "A brand identity is the set of visual and verbal choices that make a business instantly recognizable: its name, logo, colors, typography, imagery and tone of voice, plus the rules for using them. AJ Creationz builds brand identities for startups and growing businesses in the UK and US, working remotely from positioning through to a guidelines document that your team, printer and web developer can follow without calling us.",
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
          "Color palette, typography and image style",
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
          "Your logo will appear on a phone screen, a van, an invoice and a one-inch social avatar. We design and test it at each of those sizes, in full color, single color and reversed out, and supply every file format your printer or web developer will ask for.",
        ],
      },
      {
        h2: "Brand guidelines your team will actually use",
        paragraphs: [
          "A good guidelines document is short enough to read and specific enough to settle arguments: exact color values (hex, RGB and CMYK), minimum logo sizes, approved font pairings, example layouts and how to write in your voice. You own the final files and the document.",
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
      h2: "How much does brand identity cost?",
      intro:
        "Published pricing guides give these indicative ranges in US dollars. They are market figures, not AJ Creationz quotes, and prices vary by region and scope.",
      rows: [
        { label: "Freelance logo design", range: "$200 – $1,500" },
        { label: "Design agency or small studio (logo plus basic system)", range: "$1,000 – $10,000+" },
        { label: "Boutique agency, full identity with strategy and guidelines", range: "$10,000 – $50,000" },
      ],
      note: "Sources: DesignMonks (2026), Fiverr's branding cost guide (2026) and Inkbot Design (2026). Most publishers sell branding services, so treat these as a guide and compare written quotes. Check that any quote includes full ownership of the final files, every file format and a stated number of revision rounds.",
    },
    method: {
      name: "The AJ Brand Build",
      steps: [
        {
          title: "Position",
          text: "We agree your audience, promise and competitors in a short strategy brief you sign off before any design begins.",
        },
        {
          title: "Design",
          text: "We develop the identity and test it on the touchpoints you really use: website header, social avatar, invoice, signage.",
        },
        {
          title: "Systemize",
          text: "We write the guidelines and package every file, so the brand stays consistent after we hand over.",
        },
      ],
    },
    faqs: [
      {
        q: "How long does a brand identity project take?",
        a: "Most identity projects take three to six weeks, depending on scope and how quickly feedback comes back. A logo-only project is faster; a full strategy and guidelines project takes longer.",
      },
      {
        q: "What is the difference between a logo and a brand identity?",
        a: "A logo is one element. A brand identity is the whole system around it: strategy, colors, typography, imagery, tone of voice and the rules for using them together.",
      },
      {
        q: "Do I own the logo and brand files?",
        a: "Yes. On full payment you receive the final files and own the deliverables. Agree this in writing with any designer you hire.",
      },
      {
        q: "Can you also build the website once the brand is done?",
        a: "Yes. We design and build websites on WordPress, Shopify or custom code, so the new identity goes live consistently across your site.",
      },
      {
        q: "Can you work with a business in another country or time zone?",
        a: "Yes. We work remotely with clients in the UK and the US, using video calls, shared documents and agreed overlap hours that cover both UK and US time zones.",
      },
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
    keyword: "website development agency",
    metaTitle: "Website Development Agency | WordPress, Shopify, Custom",
    metaDescription:
      "Website development agency building fast, search-ready sites on WordPress, Shopify or custom code for UK and US businesses. See which platform fits you.",
    h1: "Website development agency: WordPress, Shopify and custom",
    answer: [
      "Website development is the design and build of a site that loads quickly, works on every device and turns visitors into enquiries or orders. AJ Creationz builds on three platforms, WordPress, Shopify and custom code, for clients around the world, and we choose between them based on what your business needs rather than what we prefer to sell.",
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
          "We design around the action you want a visitor to take, whether that is booking a call, requesting a quote or adding to cart. That means clear page hierarchy, obvious calls to action, fast load times and forms that are short enough to finish on a phone.",
        ],
      },
      {
        h2: "Technical SEO built in from day one",
        paragraphs: [
          "Retrofitting SEO onto a finished site costs more than building it in. Every build ships with a logical URL structure, clean headings, an XML sitemap, structured data, redirects from your old URLs and Core Web Vitals checked before launch.",
        ],
      },
      {
        h2: "Built for international audiences",
        paragraphs: [
          "If your customers are in more than one country, the site needs to handle it: correct currency and tax settings on stores, fast delivery through a global CDN, and a clear structure if you add other languages later. We plan this at the start so it does not need rebuilding later.",
        ],
      },
      {
        h2: "Speed, security and accessibility",
        paragraphs: [
          "Slow, insecure or inaccessible sites lose customers and rankings. We optimize images and scripts, set up HTTPS, backups and updates, and build to accessible standards so more people can use the site.",
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
      h2: "How much does a business website cost?",
      intro:
        "Published guides give these indicative ranges in US dollars. They are market figures, not AJ Creationz quotes, and rates vary by region and scope.",
      rows: [
        { label: "Freelancer-built small business site (5–10 pages)", range: "$1,500 – $5,000" },
        { label: "Agency-built WordPress site with strategy and content", range: "$5,000 – $15,000" },
        { label: "Shopify store, freelancer", range: "$2,000 – $10,000" },
        { label: "Shopify store, agency", range: "$8,000 – $50,000+" },
      ],
      note: "Sources: WebsiteSetup, FS Code and WPZoom (2026) for WordPress; Ecosire (2026) for Shopify, a single vendor source. Ecommerce, custom features and integrations push costs above these ranges, and most publishers sell website services. Compare scope, not just price.",
    },
    method: {
      name: "The AJ Site Build",
      steps: [
        { title: "Plan", text: "We agree goals, page structure, platform and tracking before design starts." },
        { title: "Build", text: "We design, develop and test every template across phones, tablets and desktops." },
        {
          title: "Launch",
          text: "We migrate content, set up redirects, check speed and SEO basics, then go live and monitor.",
        },
      ],
    },
    faqs: [
      {
        q: "Which platform is best for my business?",
        a: "WordPress suits most service businesses, Shopify suits online retailers, and custom code suits businesses with unusual requirements. A short call is usually enough to decide.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A typical small-business site takes four to eight weeks. Online shops and custom builds take longer, depending on the number of products and features.",
      },
      {
        q: "Will I be able to edit the site myself?",
        a: "Yes. WordPress and Shopify builds come with a walkthrough so you can update pages, products and blog posts without a developer.",
      },
      {
        q: "Will my new website hurt my current Google rankings?",
        a: "It should not if the migration is done properly. We map every old URL to a new one with redirects and check indexing after launch.",
      },
      {
        q: "Do you build sites for customers in multiple countries?",
        a: "Yes. We set up currency, tax and shipping rules for the markets you sell to, and structure the site so other languages can be added later.",
      },
      {
        q: "Do you offer ongoing website support?",
        a: "Yes. We can handle updates, backups, security checks and improvements after launch.",
      },
    ],
    related: ["seo-growth", "meta-google-ads", "brand-identity"],
  },

  /* ---------------------- website development children --------------- */
  {
    slug: "wordpress-web-design",
    parent: "website-development",
    index: "02a",
    title: "WordPress Web Design",
    description: "Easy-to-edit, SEO-ready WordPress websites for service businesses.",
    tags: ["WordPress", "WooCommerce", "SEO-ready"],
    keyword: "WordPress web design agency",
    metaTitle: "WordPress Web Design Agency | Custom WordPress Sites",
    metaDescription:
      "WordPress web design agency building fast, easy-to-edit, SEO-ready sites with training and ongoing support. See what is included and typical costs.",
    h1: "WordPress web design agency",
    answer: [
      "WordPress is the content management system behind a large share of the web, and it is our recommended platform for service businesses, consultancies and content-led sites. We design and build WordPress websites that load quickly, are simple for your team to edit and are structured for search from the first page.",
      "A good WordPress build is not a bought theme with your logo dropped in. We build a tidy set of page templates around your goals, keep plugins to the minimum needed, and set up hosting, backups and security so the site stays fast and safe after launch. This page covers WordPress specifically; if you are comparing platforms, start with our website development overview.",
    ],
    sections: [
      {
        h2: "When WordPress is the right choice",
        paragraphs: [
          "WordPress works well when you publish content regularly, need several kinds of page, want full ownership of your site, or expect the site to grow. It is less suited to a pure online shop with a large catalog, where Shopify usually saves time and running cost.",
        ],
      },
      {
        h2: "What we build",
        paragraphs: ["Typical WordPress projects include:"],
        bullets: [
          "Brochure and lead-generation sites for service businesses",
          "Blogs and resource hubs",
          "Membership and booking sites",
          "WooCommerce shops for smaller catalogs",
          "Redesigns and migrations from older WordPress themes or other platforms",
        ],
      },
      {
        h2: "Speed, plugins and security",
        paragraphs: [
          "Most slow or hacked WordPress sites share the same causes: too many plugins, heavy themes and neglected updates. We limit plugins, optimize images, use caching, and set up automatic backups and update monitoring. Ask any agency who is responsible for updates after launch; the answer should be specific.",
        ],
      },
      {
        h2: "SEO on WordPress",
        paragraphs: [
          "We configure clean URLs, title tags and meta descriptions, XML sitemaps, structured data and internal linking, and make sure the build passes Core Web Vitals checks. If you also want ongoing search work, see our SEO and growth service.",
        ],
      },
      {
        h2: "Multi-country and multilingual sites",
        paragraphs: [
          "WordPress handles multiple languages and regions well when planned from the start. We can set up a clear structure, such as language folders, and the right plugins, so each market gets the correct content, currency and metadata.",
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
      h2: "How much does a WordPress website cost?",
      intro: "Published guides give these indicative ranges in US dollars. They are not AJ Creationz quotes.",
      rows: [
        {
          label: "DIY: domain, hosting and optional premium theme",
          range: "domain $12–$25/yr, hosting $40–$150/yr, theme $30–$100",
        },
        { label: "Freelancer build, 5–10 page business site", range: "$1,500 – $5,000" },
        { label: "Agency build including strategy, design and content", range: "$5,000 – $15,000" },
        { label: "Developer hourly rates by region", range: "$25–$60 emerging markets; $75–$200 US, UK, Australia" },
      ],
      note: "Sources: WebsiteSetup, FS Code and WPZoom (2026). Several publishers sell WordPress hosting, themes or development, so figures can lean high or low. Get written quotes that list exactly what is included.",
    },
    method: {
      name: "The AJ WordPress Build",
      steps: [
        { title: "Structure", text: "Sitemap, page templates and conversion paths agreed before design." },
        { title: "Build lean", text: "Custom templates, minimal plugins, optimized media and security hardening." },
        { title: "Hand over", text: "Training, backups and a clear owner for updates." },
      ],
    },
    faqs: [
      {
        q: "Is WordPress good for SEO?",
        a: "Yes, when it is built well. It gives you control over URLs, headings, metadata and structured data. Performance and content quality still decide results.",
      },
      {
        q: "How much does a WordPress website cost?",
        a: "Guides put freelancer builds at roughly $1,500 to $5,000 and agency builds at $5,000 to $15,000. Your quote depends on page count, features and design complexity.",
      },
      {
        q: "Can you redesign my existing WordPress site?",
        a: "Yes. We keep what ranks, redirect old URLs and rebuild the design, speed and structure.",
      },
      {
        q: "Do I need WooCommerce or Shopify?",
        a: "For a small catalog, WooCommerce can work. For larger shops, Shopify is usually simpler to run. We will recommend one after a short call.",
      },
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
    keyword: "Shopify web design agency",
    metaTitle: "Shopify Web Design Agency | Store Setup & Custom Themes",
    metaDescription:
      "Shopify web design agency for store setup, custom themes, payments, shipping and conversion tracking. Launch a store built to sell. Get a quote.",
    h1: "Shopify web design agency",
    answer: [
      "Shopify is a hosted ecommerce platform that handles payments, inventory, shipping and tax, so you can focus on products and customers. AJ Creationz designs and builds Shopify stores for UK and US brands, from a clean template setup for a new shop to a customized theme for a brand that wants to stand out.",
      "A good Shopify store makes it quick to find a product, easy to trust the shop and simple to pay. We set up shipping, tax and payments for the markets you sell to, design product and collection pages for conversion, and connect analytics so you can see which pages and ads bring in sales.",
    ],
    sections: [
      {
        h2: "What a Shopify build includes",
        paragraphs: ["Scope varies with catalog size, but a typical project covers:"],
        bullets: [
          "Theme selection or custom theme work matched to your brand",
          "Product and collection structure, filtering and navigation",
          "Shipping rates, tax settings and payment providers for your markets",
          "Product page layout: images, reviews, delivery information, returns",
          "Checkout and cart optimization",
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
        h2: "Selling in more than one country",
        paragraphs: [
          "If you sell internationally, we configure multi-currency pricing, duties and tax display, shipping zones and translated content where needed, and check that each market sees correct prices at checkout.",
        ],
      },
      {
        h2: "Migrating to Shopify without losing rankings",
        paragraphs: [
          "Moving from another platform changes your URLs. We map every old product and category URL to its new address with 301 redirects, carry over titles and descriptions, and check indexing after launch. A badly handled migration can cost months of organic revenue, so this step matters more than the design.",
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
          "We can connect your store to Meta and Google advertising and to GoHighLevel for follow-up emails and texts, so new customers and abandoned carts are handled automatically.",
        ],
      },
    ],
    pricing: {
      h2: "How much does a Shopify store cost?",
      intro:
        "There are two separate costs: Shopify's subscription and the build. Published guides give these indicative figures in US dollars.",
      rows: [
        { label: "Freelancer build", range: "$2,000 – $10,000" },
        { label: "Agency build", range: "$8,000 – $50,000+" },
        { label: "Migration from another platform (extra)", range: "$1,500 – $15,000" },
        { label: "Apps for an established store, per month", range: "$200 – $500" },
        { label: "Payment processing on most plans", range: "≈ 2.5–2.9% + 30¢ per order" },
      ],
      note: "Source: Ecosire (2026), a single vendor blog, so treat as indicative. Check Shopify's own pricing page for current subscription plans, which vary by country and billing period.",
    },
    method: {
      name: "The AJ Store Launch",
      steps: [
        { title: "Set up", text: "Catalog structure, shipping, tax and payments configured for your markets." },
        { title: "Design", text: "Theme and page layouts built around how your customers browse and buy." },
        { title: "Track and launch", text: "Analytics, ad pixels and test orders before go-live." },
      ],
    },
    faqs: [
      {
        q: "How much does a Shopify store cost?",
        a: "Guides put freelancer builds at roughly $2,000 to $10,000 and agency builds at $8,000 to $50,000 or more, plus Shopify's monthly subscription, apps and payment fees.",
      },
      {
        q: "Shopify or WooCommerce?",
        a: "Shopify is simpler to run and better for larger catalogs. WooCommerce suits a small shop that sits inside a content-heavy WordPress site.",
      },
      {
        q: "Can you move my shop to Shopify?",
        a: "Yes. We import products, customers where permitted, and set up redirects to protect existing search traffic.",
      },
      {
        q: "Can you set up a store that sells in several currencies?",
        a: "Yes. We configure multi-currency pricing, shipping zones and tax display for each market you sell to.",
      },
      {
        q: "Do you build Shopify Plus stores?",
        a: "Our focus is standard Shopify for small and growing businesses. If you need Shopify Plus, tell us your requirements and we will say honestly whether we are the right fit.",
      },
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
    keyword: "custom website development company",
    metaTitle: "Custom Website Development Company | Next.js & React",
    metaDescription:
      "Custom website development using Next.js and React. Fast, secure sites with bespoke features, built when a template cannot do the job. Request a quote.",
    h1: "Custom website development company",
    answer: [
      "Custom website development means building your site from code instead of customizing a template or platform. AJ Creationz uses Next.js and React to build fast, secure sites and web applications when a business needs something WordPress or Shopify cannot do well, such as bespoke calculators, member areas, complex integrations or very strict performance targets.",
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
          "Next.js, built on React, lets pages be generated ahead of time and served quickly from a global network, which helps both users and search. It also gives us full control over metadata, structured data and URLs, which matters for SEO. This very website is built with it.",
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
        {
          title: "Build in stages",
          text: "Working versions shared regularly so you see progress, not a reveal at the end.",
        },
        { title: "Harden and hand over", text: "Performance, security and documentation completed before launch." },
      ],
    },
    faqs: [
      {
        q: "How much does custom website development cost?",
        a: "It depends entirely on scope. Because requirements vary so much, we provide a fixed quote after a scoping call rather than a generic price.",
      },
      {
        q: "Is a custom site better for SEO?",
        a: "It can be faster and give finer control, but a well-built WordPress site ranks perfectly well. Content and links still matter most.",
      },
      {
        q: "Can my team edit a custom site?",
        a: "Yes, if we connect it to a content management system. We agree this at the start.",
      },
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
    keyword: "video editing services for business",
    metaTitle: "Video Editing Services for Business | Social & Ads",
    metaDescription:
      "Video editing services for UK and US businesses: Reels, TikToks, YouTube Shorts, brand films and ad creative, captioned and formatted for every platform.",
    h1: "Video editing services for business",
    answer: [
      "Video editing turns raw footage into finished content: trimmed, paced, captioned, color-corrected and exported in the right format for each platform. AJ Creationz edits social videos, brand films and ad creative for businesses around the world, so you can film on a phone or camera and hand the cutting to us.",
      "Most viewers watch social video with the sound off, so we design for that first: a strong opening, readable captions inside each platform's safe zones and clear on-screen text. We deliver the same video in vertical, square and horizontal formats where you need them, ready to post or to run as paid ads.",
    ],
    sections: [
      {
        h2: "Social media video editing",
        paragraphs: [
          "Short-form edits for Instagram Reels, TikTok, YouTube Shorts and LinkedIn. We cut for attention, add captions and sound, and match your brand fonts and colors so a month of posts looks consistent.",
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
          "For longer videos such as company stories, product explainers and event recaps, we structure the edit around a clear narrative, add music, graphics and sound design, and finish with color correction.",
        ],
      },
      {
        h2: "Captions and subtitles for global audiences",
        paragraphs: [
          "Captions help viewers who watch without sound and viewers who speak another language. We burn in captions or deliver subtitle files, and can edit to supplied translations for audiences in other markets.",
        ],
      },
      {
        h2: "What we need from you",
        paragraphs: ["A brief makes editing faster and cheaper. Send us:"],
        bullets: [
          "The raw footage, shared by a link",
          "Your logo, fonts and colors (or your brand guidelines)",
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
      h2: "How much does video editing cost?",
      intro:
        "Published guides give these indicative figures in US dollars. We provide fixed quotes once we have seen your footage and brief.",
      rows: [
        { label: "Short-form video, beginner editor", range: "$25 – $75" },
        { label: "Short-form video, intermediate editor", range: "$75 – $200" },
        { label: "Short-form video, senior editor", range: "$200 – $500" },
        { label: "Hourly rate, Western mid-level editor", range: "$50 – $150" },
        { label: "Hourly rate, offshore editor in Southeast Asia", range: "$15 – $40" },
      ],
      note: "Sources: Ad Snipper, Vidico and Videotto (2026), all of which sell editing or clipping services. Captions, color grading, motion graphics, the number of formats and revisions all raise the price.",
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
      {
        q: "How much does video editing cost?",
        a: "Guides put freelance short-form edits at roughly $25 to $500 per video depending on experience, and Western mid-level editors at $50 to $150 an hour. Project prices depend on length, captions, motion graphics and the number of formats.",
      },
      {
        q: "Do you film as well as edit?",
        a: "Our focus is editing your footage. If you need filming, we can advise on what to shoot or coordinate it with a videographer.",
      },
      {
        q: "How quickly can you turn a video around?",
        a: "Short social edits are usually delivered within a few working days of receiving footage. We agree dates for each project.",
      },
      {
        q: "Can you edit videos for paid ads?",
        a: "Yes. We create ad variations with different hooks and formats for Meta and Google.",
      },
      {
        q: "Can you add subtitles in other languages?",
        a: "Yes, from translations you supply. We handle the timing and styling.",
      },
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
    keyword: "SEO agency for small business",
    metaTitle: "SEO Agency for Small Business | Technical SEO & Content",
    metaDescription:
      "SEO agency for small and growing UK and US businesses: technical audits, content, local and international SEO, and clear monthly reporting.",
    h1: "SEO agency for small and growing businesses",
    answer: [
      "SEO, or search engine optimization, is the work of making your website easier for search engines to crawl and more useful to the people searching, so you appear for the queries that bring in customers. AJ Creationz is an SEO agency for small and growing businesses in any market, and we focus on the fundamentals that compound: technical health, relevant content and honest measurement.",
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
          "We map the real queries your customers use in each market you serve, check what currently ranks, and decide which pages you need: service pages, supporting guides and blog posts. Each page targets one clear intent, so your pages support each other instead of competing.",
        ],
      },
      {
        h2: "On-page SEO and content",
        paragraphs: [
          "We optimize titles, headings, meta descriptions, images and internal links, and write or edit content that answers the question quickly and then goes deeper. Every page needs something a competitor cannot copy by rewording, such as your own data, process or real examples.",
        ],
      },
      {
        h2: "International SEO",
        paragraphs: [
          "Selling in several countries or languages needs the right setup: a sensible URL structure, hreflang tags where you publish language or country versions, localized content rather than literal translation, and a domain strategy that does not limit you to one country. We advise on this before you build, because it is hard to change later.",
        ],
      },
      {
        h2: "Local SEO and Google Business Profile",
        paragraphs: [
          "If customers search near them, a complete Google Business Profile, consistent name, address and phone details, local landing pages and reviews matter as much as your website. We set these up for each location you serve.",
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
      h2: "How much does SEO cost?",
      intro:
        "Published guides give these indicative monthly ranges in US dollars. They are market figures, not AJ Creationz quotes.",
      rows: [
        { label: "Typical small-business budget", range: "$500 – $5,000 per month" },
        { label: "Freelancers", range: "$300 – $1,500 per month" },
        { label: "Mid-size agencies", range: "$1,500 – $5,000 per month" },
        { label: "Local SEO", range: "$500 – $2,500 per month" },
        { label: "One-time audit, rebuild or migration", range: "$1,000 – $5,000" },
      ],
      note: "Sources: SEO.com, SEOProfy and W3Era (2026); most are published by SEO providers, so ranges differ. One 2026 agency survey reported most agencies raising rates for AI search work. Ask exactly what work is included each month.",
    },
    method: {
      name: "The AJ Growth Loop",
      steps: [
        { title: "Audit", text: "Find what blocks discovery: crawling, speed, content gaps and competitors." },
        { title: "Fix and publish", text: "Technical fixes first, then optimized pages in priority order." },
        { title: "Measure and repeat", text: "Track leads, not just rankings, and double down on what works." },
      ],
    },
    faqs: [
      {
        q: "How much does SEO cost?",
        a: "Most small businesses pay between $500 and $5,000 a month. Freelancers are typically cheaper and mid-size agencies cost $1,500 to $5,000, depending on competition and scope.",
      },
      {
        q: "How long does SEO take to work?",
        a: "Expect early movement in two to three months and compounding results over six to twelve. Competitive terms take longer.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No. Nobody can honestly guarantee rankings. We commit to the work, transparency and regular reporting.",
      },
      {
        q: "Can you help with SEO in multiple countries or languages?",
        a: "Yes. We plan URL structure, hreflang and localized content for each market.",
      },
      {
        q: "Do I need SEO if I run Google Ads?",
        a: "They complement each other. Ads bring traffic now; SEO builds traffic that does not stop when you stop paying.",
      },
      {
        q: "Can you fix SEO on my existing website?",
        a: "Yes. We begin with an audit of your current site and prioritize the fixes with the biggest impact.",
      },
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
    keyword: "PPC agency",
    metaTitle: "PPC Agency | Google Ads & Meta Ads Management",
    metaDescription:
      "PPC agency managing Google Ads and Meta campaigns for UK and US businesses, with tracking that makes every pound and dollar accountable. Get a quote.",
    h1: "PPC agency for Google Ads and Meta Ads",
    answer: [
      "Paid advertising puts your business in front of people now, either when they search for what you sell (Google Ads) or while they scroll social feeds (Meta, which runs Facebook and Instagram ads). AJ Creationz plans, launches and manages both for businesses in any market, tying every campaign to a cost per lead or return on ad spend you can check.",
      "Most wasted ad spend comes from missing tracking, broad targeting or a landing page that does not convert. We fix those first: conversion tracking set up properly, one clear goal per campaign, and ad accounts that belong to you, so you keep your data and history whoever manages them.",
    ],
    sections: [
      {
        h2: "Google Ads or Meta Ads: which should you use?",
        paragraphs: [
          "Google Ads captures existing demand: people typing 'emergency plumber near me' are ready to buy. Meta Ads creates demand and reaches people by interest, location and behavior before they search. Many businesses start with Google for high-intent leads and add Meta for awareness, retargeting and ecommerce. Each channel has its own page with more detail.",
        ],
      },
      {
        h2: "Strategy, setup and tracking",
        paragraphs: [
          "We start by agreeing your goal, target cost per lead and budget. Then we set up conversion tracking across Google, Meta and your site, so reporting reflects real enquiries and sales instead of clicks. Tracking has become harder as browsers restrict cookies, so we use server-side methods such as Meta's Conversions API where appropriate, and set up consent handling for the privacy laws that apply to your audience.",
        ],
      },
      {
        h2: "Targeting different countries",
        paragraphs: [
          "Running ads in several markets means separate budgets, languages, currencies and sometimes separate accounts. We structure campaigns by market so you can see what each country costs and returns, and adjust creative and landing pages for local audiences.",
        ],
      },
      {
        h2: "Creative and landing pages",
        paragraphs: [
          "Ads are only half the funnel. We brief creative, including video from our editing service, and recommend landing page changes, because a faster page with one clear action usually lowers cost per lead more than any bid change.",
        ],
      },
      {
        h2: "Optimization and reporting",
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
      h2: "How much does ad management cost?",
      intro:
        "There are two separate costs: what you pay the platforms, and what you pay to manage them. Published guides give these indicative figures in US dollars.",
      rows: [
        { label: "Management fee as share of ad spend", range: "10% – 20% (small accounts often 20–30%)" },
        { label: "Flat retainer, mid-tier agency", range: "$1,500 – $3,500 per month" },
        { label: "Flat retainer, complex or enterprise accounts", range: "$5,000 – $10,000+ per month" },
        { label: "Hybrid example", range: "$1,000 base + 5% of spend" },
        { label: "Account setup", range: "$500 – $5,000+" },
      ],
      note: "Sources: Outerbox Design, Linear Design, ClicksGeek and SaaS Hero (2026), all of which sell ad management. Ad spend is paid directly to Google and Meta and is not included in management fees. Ask for the fee structure in writing, including what setup and reporting cover.",
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
      {
        q: "What is the difference between Google Ads and Meta Ads?",
        a: "Google Ads shows your ads to people searching for what you sell. Meta Ads shows them to people browsing Facebook and Instagram based on interests and behavior.",
      },
      {
        q: "How much should I spend on ads?",
        a: "It depends on your market and goals. We recommend a realistic test budget after a short call and review it after the first month of data.",
      },
      {
        q: "How much do you charge to manage ads?",
        a: "Agencies commonly charge 10% to 20% of ad spend or a flat retainer. We agree a clear management fee in writing before starting; ad spend is paid directly to the platforms.",
      },
      {
        q: "Can you run ads in several countries?",
        a: "Yes. We structure campaigns by market, with local currencies, languages and landing pages where needed.",
      },
      {
        q: "Will the ad accounts be in my name?",
        a: "Yes. Your accounts, data and history stay yours if we ever stop working together.",
      },
      {
        q: "How soon will I see results?",
        a: "Ads can generate traffic within days, but expect two to three months of testing before costs stabilize.",
      },
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
    keyword: "Google Ads agency",
    metaTitle: "Google Ads Agency | PPC Management Services",
    metaDescription:
      "Google Ads agency managing Search, Shopping and Performance Max campaigns with conversion tracking and monthly reporting. Request an account review.",
    h1: "Google Ads agency and PPC management",
    answer: [
      "Google Ads lets you appear at the top of search results when someone searches for what you sell, and you pay only when they click. AJ Creationz manages Google Ads for UK and US businesses, building campaigns around the searches that signal buying intent and measuring success by leads and sales, not clicks.",
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
        h2: "Multi-country campaigns",
        paragraphs: [
          "For businesses serving several countries we separate campaigns by location and language, set budgets and currencies for each, and write ads and landing pages for local searchers.",
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
        { title: "Rebuild", text: "Reorganize campaigns by intent and set clear conversion goals." },
        { title: "Refine", text: "Weekly search-term reviews and monthly reporting." },
      ],
    },
    faqs: [
      {
        q: "How much does Google Ads management cost?",
        a: "Agencies usually charge 10% to 20% of ad spend or a monthly retainer, often $1,500 to $3,500 for mid-tier agencies. We agree the fee in writing before work begins; ad spend is paid directly to Google.",
      },
      {
        q: "Can you take over my existing Google Ads account?",
        a: "Yes. We start with an audit and keep your history and data.",
      },
      {
        q: "What is Performance Max?",
        a: "Performance Max is a Google campaign type that runs ads across Search, YouTube, Display and more using automation. It works best with strong tracking and quality assets.",
      },
      {
        q: "Do I need a website to run Google Ads?",
        a: "You need a landing page. If your current site is not suitable, we can build one.",
      },
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
    keyword: "Meta ads agency",
    metaTitle: "Meta Ads Agency | Facebook & Instagram Ads Management",
    metaDescription:
      "Meta ads agency managing Facebook and Instagram campaigns with strong creative, tracking and retargeting for UK and US businesses. Get a quote.",
    h1: "Meta ads agency for Facebook and Instagram",
    answer: [
      "Meta Ads are the adverts you see on Facebook and Instagram. They let you reach people by location, interests and behavior, which makes them effective for lead generation, ecommerce and local businesses. AJ Creationz manages Meta Ads for UK and US businesses, with strong creative, accurate tracking and campaigns built around cost per lead or return on ad spend.",
      "Meta results depend heavily on creative and tracking. Since Apple's privacy changes and browser restrictions, the Meta pixel alone misses conversions, so we set up the Conversions API alongside it and handle consent for the privacy laws that apply to your audience. We then test creative variations and let the data show which ones deserve more budget.",
    ],
    sections: [
      {
        h2: "What we manage",
        paragraphs: [],
        bullets: [
          "Lead generation campaigns with instant forms or landing pages",
          "Ecommerce catalog and conversion campaigns",
          "Retargeting for site visitors and video viewers",
          "Local awareness campaigns",
          "Creative testing across image, video and carousel formats",
        ],
      },
      {
        h2: "Creative that stops the scroll",
        paragraphs: [
          "On Meta, the creative does most of the targeting. We plan several hooks and angles per campaign, and our video editing service turns them into Reels and Stories formats with captions for sound-off viewing.",
        ],
      },
      {
        h2: "Tracking and attribution",
        paragraphs: [
          "We set up the pixel, Conversions API and event matching, check data in Events Manager and compare Meta's numbers with your CRM or sales data, because relying on Meta's own reporting alone overstates results.",
        ],
      },
      {
        h2: "Advertising in different markets",
        paragraphs: [
          "Each country has its own audiences, costs and rules. We build separate campaigns per market, adapt creative and language, and keep reporting by country so you can see where spend works hardest.",
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
      intro:
        "Meta ad management is usually priced the same ways as other paid media. Published guides give these indicative figures in US dollars.",
      rows: [
        { label: "Agency fee as share of ad spend", range: "10% – 20%" },
        { label: "Flat monthly retainer, mid-tier agency", range: "$1,500 – $3,500" },
        { label: "Account setup", range: "$500 – $5,000+" },
      ],
      note: "Sources: Outerbox Design, Linear Design and ClicksGeek (2026), which cover paid media management generally and sell the service. Ad spend is paid to Meta, separately from our fee.",
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
      {
        q: "How much do Meta ads cost for a small business?",
        a: "Ad spend depends on your audience and market. Management is usually 10% to 20% of spend or a flat retainer. We recommend a test budget after a short call.",
      },
      {
        q: "Do you create the ad creative?",
        a: "Yes. Our video editing and brand services produce images, videos and carousels.",
      },
      {
        q: "What is the Conversions API?",
        a: "It sends conversion events from your server to Meta, improving tracking accuracy when browser tracking is blocked.",
      },
      {
        q: "Are Meta ads right for my business?",
        a: "They suit businesses with a visual product or service and a clear offer. We will tell you honestly if another channel is a better start.",
      },
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
    keyword: "GoHighLevel agency",
    metaTitle: "GoHighLevel Agency | CRM Setup & Automation Services",
    metaDescription:
      "GoHighLevel agency for CRM setup: pipelines, lead capture, email and SMS follow-up, booking and reporting. Stop losing enquiries. Request a quote.",
    h1: "GoHighLevel agency: CRM setup and automation",
    answer: [
      "GoHighLevel (GHL) is an all-in-one CRM and marketing automation platform that combines contact management, sales pipelines, email and SMS, landing pages, appointment booking and review requests in one place. AJ Creationz sets it up for UK and US businesses so that every enquiry is captured, answered quickly and followed up automatically.",
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
        h2: "Email and SMS automation, and the rules that apply",
        paragraphs: [
          "Sequences are written in your voice and timed to your sales cycle. Messaging rules differ by country: for example GDPR in Europe and the UK, CAN-SPAM and TCPA in the United States, CASL in Canada and CCPA in California. We build in consent capture, unsubscribe handling and quiet hours, and recommend a legal review of consent wording for the markets you contact.",
          "If you text US numbers, carriers require A2P 10DLC registration of your brand and campaign, and unregistered messages can be filtered or blocked. We help you complete it. Check number setup and deliverability for each country before relying on SMS or voice.",
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
      h2: "How much does GoHighLevel cost?",
      intro:
        "There are platform fees, usage fees and setup fees. Published sources give these indicative figures in US dollars.",
      rows: [
        { label: "Starter plan", range: "$97 per month" },
        { label: "Unlimited plan", range: "$297 per month" },
        { label: "Agency Pro / SaaS Mode (white-label)", range: "$497 per month" },
        { label: "Usage (SMS, email, voice) for a typical local business", range: "≈ $25 – $75 per month" },
        { label: "Basic freelance setup package (example listing)", range: "from $500" },
      ],
      note: "Sources: Ecosire (2026), which sells GoHighLevel services, and a Contra freelancer listing. We could not confirm these against GoHighLevel's own pricing page, so check it for current plans. Professional setup varies widely with the number of pipelines, automations and integrations.",
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
      {
        q: "What is GoHighLevel used for?",
        a: "It is a CRM and automation platform for capturing leads, following up by email and SMS, booking appointments, managing pipelines and requesting reviews.",
      },
      {
        q: "How much does GoHighLevel cost?",
        a: "Published sources list plans from about $97 to $497 a month, plus usage fees for SMS, email and voice. Setup costs depend on scope, which we agree after mapping your process.",
      },
      {
        q: "Do I need to already have a GoHighLevel account?",
        a: "No. We can create one, or tidy an existing account. It stays in your name.",
      },
      {
        q: "Is GoHighLevel compliant with GDPR and US messaging rules?",
        a: "Compliance depends on how you configure and use it. We build in consent capture and unsubscribe handling, help with US A2P 10DLC registration, and recommend legal review of consent wording.",
      },
      {
        q: "Can GoHighLevel replace my current CRM?",
        a: "Often, yes. We can migrate contacts and history from spreadsheets or other CRMs.",
      },
    ],
    related: ["meta-google-ads", "website-development", "seo-growth"],
  },
];

/** UK market figures in GBP, kept separate from the USD tables. Sourced from UK guides searched on 10 Oct 2026; most publishers sell the service. */
export const UK_PRICING: Record<string, { intro: string; rows: { label: string; range: string }[]; note: string }> = {
  "brand-identity": {
    intro: "UK pricing guides give these indicative ranges in pounds.",
    rows: [
      { label: "Logo only, professional small-business logo", range: "£500 – £3,000" },
      { label: "Logo plus brand guidelines (starter pack)", range: "£1,500 – £5,000" },
      { label: "Full identity with strategy, SMEs", range: "£5,000 – £20,000" },
      { label: "Complete rebrand with research and rollout", range: "£10,000 – £50,000+" },
    ],
    note: "Sources: whito.co.uk, Huddle Creative and Phable, searched 10 Oct 2026. Figures disagree between publishers and London agencies are reported to charge more than regional ones. Confirm whether quotes include VAT.",
  },
  "website-development": {
    intro: "UK cost guides give these indicative ranges in pounds.",
    rows: [
      { label: "Professionally built small-business site", range: "£2,000 – £8,000" },
      { label: "Regional or small agency build", range: "£2,500 – £10,000" },
      { label: "Ecommerce build, typical UK agency", range: "£5,000 – £15,000" },
      { label: "Agency hourly rate", range: "£80 – £150+" },
    ],
    note: "Sources: UK agency cost guides from Blue Whale Media, ProfileTree, Spotdev and Kwiboo, searched 10 Oct 2026. Ask whether support and hosting are included, because post-launch costs can exceed the build over three to five years.",
  },
  "seo-growth": {
    intro: "UK SEO pricing guides give these indicative monthly ranges in pounds.",
    rows: [
      { label: "Typical small-business SEO retainer", range: "£500 – £2,000 per month" },
      { label: "Local-only SEO", range: "from about £300 per month" },
      { label: "Freelancers", range: "£300 – £1,000 per month" },
      { label: "Competitive national or ecommerce SEO", range: "£2,000 – £8,000 per month" },
    ],
    note: "Sources: whitehat-seo.co.uk, Epic Edits and whito.co.uk, searched 10 Oct 2026. All publishers sell SEO and several warn that packages under about £400 a month are mostly automated work. Confirm whether quotes include VAT.",
  },
  "meta-google-ads": {
    intro: "UK management-fee guides give these indicative ranges in pounds, on top of your ad spend.",
    rows: [
      { label: "Google Ads management, typical UK SME", range: "£500 – £2,500 per month" },
      { label: "Percentage of ad spend", range: "10% – 20%" },
      { label: "Meta ads retainers", range: "£1,500 – £8,000+ per month" },
      { label: "Typical minimum ad budget cited by one UK guide (Meta)", range: "£3,000 – £5,000 per month" },
    ],
    note: "Sources: Advertizingly (June 2026), whito.co.uk and Priority Pixels, searched 10 Oct 2026. Publishers sell these services and several agencies decline accounts spending under about £500 a month on ads.",
  },
  "meta-ads-management": {
    intro: "One UK guide gives these indicative figures in pounds, on top of your ad spend.",
    rows: [
      { label: "Typical monthly retainer", range: "£1,500 – £8,000+" },
      { label: "Percentage of spend", range: "10% – 20%" },
    ],
    note: "Source: Priority Pixels guide to choosing a Meta ads agency, searched 10 Oct 2026. It also advises confirming that an agency uses both the Meta Pixel and the Conversions API, and asking how it handles UK consent and cookie compliance.",
  },
  "gohighlevel-crm": {
    intro: "UK providers publish these implementation figures in pounds, in addition to the platform fees above.",
    rows: [
      { label: "Implementation, UK specialist agency (from)", range: "£3,500" },
      { label: "White-label agency build (from)", range: "£8,000" },
      { label: "Consulting, hourly", range: "around £90 per hour" },
      { label: "Full project-based builds, one ranking's range", range: "£2,000 – £12,000" },
    ],
    note: "Sources: Softomate Solutions (a vendor that also ranks itself first in its own list) and a London GoHighLevel agency ranking, searched 10 Oct 2026. Treat as indicative; the sources are the vendors themselves.",
  },
};

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const TOP_LEVEL_SERVICES = SERVICES.filter((s) => !s.parent);
export const childrenOf = (slug: string) => SERVICES.filter((s) => s.parent === slug);
