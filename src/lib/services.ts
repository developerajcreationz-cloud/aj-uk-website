export type Service = {
  slug: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  headline: string;
  intro: string;
  deliverables: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const PROCESS_DEFAULT = (a: string, b: string, c: string) => [
  { title: "Discover", text: a },
  { title: "Build", text: b },
  { title: "Launch & improve", text: c },
];

export const SERVICES: Service[] = [
  {
    slug: "brand-identity",
    index: "01",
    title: "Brand Identity",
    description: "Positioning, naming, logo systems, and guidelines built to hold up at any size.",
    tags: ["Strategy", "Naming", "Logo systems"],
    headline: "Brands people remember and trust.",
    intro:
      "We turn who you are into a clear, consistent identity — from the strategy underneath to the logo, colour, type and guidelines your whole team can use.",
    deliverables: [
      "Brand strategy and positioning",
      "Naming and taglines",
      "Logo suite and usage rules",
      "Colour palette and typography",
      "Social media kits and templates",
      "Brand guidelines document",
    ],
    process: PROCESS_DEFAULT(
      "We learn your business, audience and competitors, then agree the positioning.",
      "We design the identity system and test it across real touchpoints.",
      "We hand over files and guidelines, and support the rollout."
    ),
    faqs: [
      { q: "How long does a brand identity take?", a: "Most projects take 3–6 weeks depending on scope and how quickly feedback comes back." },
      { q: "Do I get the source files?", a: "Yes. You receive all logo files, fonts guidance and the guidelines document." },
    ],
  },
  {
    slug: "website-development",
    index: "02",
    title: "Website Development",
    description: "Fast, conversion-focused websites on WordPress, Shopify, or fully custom builds.",
    tags: ["WordPress", "Shopify", "Custom"],
    headline: "Websites built to convert, not just look good.",
    intro:
      "Whether you need an easy-to-edit WordPress site, a Shopify store that sells, or a fully custom build, we design and develop for speed, search and conversion.",
    deliverables: [
      "WordPress websites you can edit yourself",
      "Shopify stores and theme customisation",
      "Custom-coded sites (Next.js)",
      "Mobile-first, accessible design",
      "Speed and Core Web Vitals tuning",
      "Analytics and conversion tracking setup",
    ],
    process: PROCESS_DEFAULT(
      "We define goals, pages and the platform that fits your budget and team.",
      "We design, build and test every page across devices.",
      "We launch, monitor performance and keep improving."
    ),
    faqs: [
      { q: "WordPress, Shopify or custom — which should I pick?", a: "WordPress suits content-led sites, Shopify suits online stores, and custom suits unique functionality. We recommend one after a short call." },
      { q: "Will I be able to update it myself?", a: "Yes. WordPress and Shopify builds come with a walkthrough so you can manage content confidently." },
    ],
  },
  {
    slug: "video-editing",
    index: "03",
    title: "Video Editing",
    description: "Social cuts, brand films, and ad creative edited to hold attention and drive action.",
    tags: ["Reels & Shorts", "Brand films", "Ad creative"],
    headline: "Video that stops the scroll.",
    intro:
      "We edit footage into polished social content, brand films and ad creative — paced for attention, captioned for sound-off viewing and formatted for every platform.",
    deliverables: [
      "Reels, TikToks and YouTube Shorts",
      "Brand and promo films",
      "Ad creative for Meta and Google",
      "Captions, motion graphics and sound design",
      "Colour correction and finishing",
      "Multi-format exports (9:16, 1:1, 16:9)",
    ],
    process: PROCESS_DEFAULT(
      "You share footage and a brief; we agree style, length and platforms.",
      "We cut, grade and add graphics and sound, then share a draft.",
      "We revise, export every format and deliver on time."
    ),
    faqs: [
      { q: "Do you film as well?", a: "Our focus is editing your footage. If you need filming, we can advise or coordinate it." },
      { q: "How many revisions are included?", a: "Two rounds of revisions are included as standard." },
    ],
  },
  {
    slug: "seo-growth",
    index: "04",
    title: "SEO & Growth",
    description: "Technical SEO, content systems, and measurement that compound over time.",
    tags: ["Technical SEO", "Content", "Analytics"],
    headline: "Search traffic that compounds.",
    intro:
      "We fix the technical foundations, build content that matches what your customers search for, and measure what matters so growth is predictable.",
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and competitor research",
      "On-page optimisation and content plans",
      "Local SEO and Google Business Profile",
      "Link building and digital PR",
      "Monthly reporting in plain English",
    ],
    process: PROCESS_DEFAULT(
      "We audit your site and market to find the biggest opportunities.",
      "We fix technical issues and publish optimised content.",
      "We track rankings, traffic and leads, and double down on what works."
    ),
    faqs: [
      { q: "How long until SEO works?", a: "Expect early movement in 2–3 months, with compounding results over 6–12 months." },
      { q: "Do you guarantee rankings?", a: "No one honestly can. We commit to the work, transparency and reporting." },
    ],
  },
  {
    slug: "meta-google-ads",
    index: "05",
    title: "Meta & Google Ads",
    description: "Paid campaigns built around profitable acquisition, tracked from click to customer.",
    tags: ["Meta Ads", "Google Ads", "Conversion tracking"],
    headline: "Paid ads that pay for themselves.",
    intro:
      "We plan, launch and optimise Meta and Google campaigns around your cost per lead or return on ad spend, with tracking in place so every pound is accountable.",
    deliverables: [
      "Campaign strategy and account setup",
      "Google Search, Shopping and Performance Max",
      "Meta (Facebook and Instagram) ads",
      "Creative and landing page recommendations",
      "Conversion tracking and attribution",
      "Weekly optimisation and monthly reports",
    ],
    process: PROCESS_DEFAULT(
      "We set goals, budgets and tracking, and research your audience.",
      "We launch campaigns with tested creative and targeting.",
      "We optimise weekly and scale what performs."
    ),
    faqs: [
      { q: "What budget do I need?", a: "It depends on your market. We will recommend a realistic test budget on a short call." },
      { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to the platforms; our fee covers management." },
    ],
  },
  {
    slug: "gohighlevel-crm",
    index: "06",
    title: "GoHighLevel CRM",
    description: "Lead capture, follow-up automation, and pipelines set up so no enquiry slips through.",
    tags: ["Automation", "Pipelines", "Email & SMS"],
    headline: "Never lose a lead again.",
    intro:
      "We set up GoHighLevel to capture every enquiry, follow up automatically and show you exactly where each lead sits in your pipeline.",
    deliverables: [
      "GoHighLevel account setup and configuration",
      "Lead capture forms and landing pages",
      "Sales pipelines and lead scoring",
      "Email and SMS follow-up automations",
      "Appointment booking and reminders",
      "Reporting dashboards and team training",
    ],
    process: PROCESS_DEFAULT(
      "We map how leads currently find you and where they drop off.",
      "We build pipelines, forms and automations, and test end to end.",
      "We train your team and refine the workflows with real data."
    ),
    faqs: [
      { q: "Do I need to already have GoHighLevel?", a: "No. We can set up a new account or tidy an existing one." },
      { q: "Can it connect to my website and ads?", a: "Yes. We connect forms, Meta and Google leads and calendars so everything lands in one place." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
