/** Case-study facts taken from the project pages on the main site (ajcreationz.co). Only stated facts are used; no results are claimed. */
export type GalleryImage = { src: string; alt: string; caption: string; width: number; height: number };

/** Longer write-up for a project's own page. Written from the facts on the main site and the delivered artwork. */
export type ProjectDetail = {
  metaTitle: string;
  metaDescription: string;
  /** Opening paragraph: the client, the problem and what we did. */
  summary: string;
  services: string[];
  sections: { h2: string; paragraphs: string[] }[];
  gallery: GalleryImage[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  /** Internal record of where the project facts came from. Not rendered or linked on this site. */
  sourceUrl: string;
  brief: string;
  delivered: string[];
  approach?: string;
  quote?: { text: string; name: string; role: string };
  /** Present when the project has its own page at /work/[slug]/. */
  detail?: ProjectDetail;
};

export const PROJECTS: Project[] = [
  {
    slug: "nayasource",
    title: "NayaSource",
    category: "Branding and UI/UX design",
    image: "/images/work/nayasource.jpg",
    sourceUrl: "https://ajcreationz.co/portfolio/branding/",
    brief:
      "NayaSource connects businesses with dependable overseas suppliers. The brand needed to signal trust, global reach and simpler B2B procurement, in a warm tone rather than a corporate one.",
    delivered: [
      "Logo and brand identity with a gradient-based visual system and typography",
      "UI/UX design for the website and app",
      "Web design and web and app development",
      "Touchpoint assets: business cards, tote bag, Instagram post, employee badges, branded apparel and packaging",
    ],
    detail: {
      metaTitle: "NayaSource Case Study | B2B Brand Identity and UI/UX",
      metaDescription:
        "How AJ Creationz built the brand identity, UI/UX design and touchpoints for NayaSource, a platform that connects businesses with overseas suppliers.",
      summary:
        "NayaSource connects businesses with dependable overseas suppliers. We designed its brand identity, the interface for its website and app, and the printed and digital touchpoints that make the brand feel consistent everywhere a customer meets it.",
      services: [
        "Logo and brand identity",
        "UI and UX design for website and app",
        "Web design and web and app development",
        "Social, print, apparel and packaging touchpoints",
      ],
      sections: [
        {
          h2: "The brief",
          paragraphs: [
            "Buying from suppliers in other countries can feel risky. NayaSource wanted a brand that signals trust and global reach and makes B2B procurement feel simpler, in a warm tone rather than a corporate one.",
          ],
        },
        {
          h2: "The approach",
          paragraphs: [
            "The identity is built on a purple-to-orange gradient, chosen to suggest reach and energy, paired with clean, modern typography that keeps it credible for business buyers. The same gradient runs through the logo, social posts, cards and packaging, so every item reads as one brand.",
            "On the product side, the UI and UX work focused on making each step of finding and contacting a supplier clear, so the interface supports the promise in the brand.",
          ],
        },
        {
          h2: "What we delivered",
          paragraphs: [
            "A complete identity system plus the touchpoints below. The gallery shows the applications: social posts, a tote bag, business cards, a branded t-shirt, an employee badge and cups.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/work/nayasource/01-instagram-posts.webp",
          alt: "NayaSource Instagram posts with purple and orange gradient layouts and procurement headlines",
          caption: "Social posts that carry the gradient identity into short, plain-language headlines.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/nayasource/02-tote-bag.webp",
          alt: "NayaSource tote bag printed with the logo on a purple gradient, resting on a metal chair",
          caption: "The gradient and logo applied to a tote bag.",
          width: 1600,
          height: 1200,
        },
        {
          src: "/images/work/nayasource/03-business-cards.webp",
          alt: "NayaSource business cards in purple and orange gradient on a dark metal grid",
          caption: "Business cards in light and dark versions of the identity.",
          width: 1600,
          height: 1200,
        },
        {
          src: "/images/work/nayasource/04-branded-t-shirt.webp",
          alt: "Purple NayaSource t-shirt with the logo on a black mannequin",
          caption: "Branded apparel for the team.",
          width: 1022,
          height: 1500,
        },
        {
          src: "/images/work/nayasource/05-employee-id-badge.webp",
          alt: "NayaSource employee ID badge on a lanyard with a gradient header",
          caption: "Employee badge design.",
          width: 1022,
          height: 1500,
        },
        {
          src: "/images/work/nayasource/06-branded-cups.webp",
          alt: "NayaSource paper cups in black and purple gradient with the tagline Fast and reliable solutions",
          caption: "Cups carrying the logo and a short brand line.",
          width: 1022,
          height: 1500,
        },
      ],
    },
  },
  {
    slug: "framily-adventures",
    title: "Framily Adventures",
    category: "Branding and UI/UX design",
    image: "/images/work/framily-adventures.jpg",
    sourceUrl: "https://ajcreationz.co/portfolio/brandidentity/",
    brief:
      "Framily Adventures wanted to redefine solo travel by helping travelers make real connections. The brief was a brand identity and an intuitive interface that reflect transformation, community and belonging.",
    delivered: [
      "Brand identity",
      "UI and UX design and app design for mobile, tablet and desktop",
      "Motion design",
      "Front-end and back-end development",
    ],
    approach:
      "A retro look inspired by early internet message boards, blended with modern luxury, in a warm palette of muted green, burnt orange and deep sea green.",
    quote: {
      text: "Travel isn't just about the places you go, it's about the people you meet along the way.",
      name: "Derachio Jackson",
      role: "Creative Director, Framily Adventures",
    },
    detail: {
      metaTitle: "Framily Adventures Case Study | Travel Brand and App Design",
      metaDescription:
        "How AJ Creationz designed the brand identity, app and web interface for Framily Adventures, a community that connects solo travelers on real trips.",
      summary:
        "Framily Adventures wants solo travelers to meet people and keep the friendships after the trip. We created its brand identity and designed the app and web experience across mobile, tablet and desktop, with motion design and front-end and back-end development.",
      services: [
        "Brand identity",
        "UI and UX design and app design for mobile, tablet and desktop",
        "Motion design",
        "Front-end and back-end development",
      ],
      sections: [
        {
          h2: "The brief",
          paragraphs: [
            "Framily set out to change how people travel alone. The brand and the product needed to express transformation, community and belonging, so that strangers feel comfortable becoming travel companions.",
          ],
        },
        {
          h2: "The approach",
          paragraphs: [
            "The look takes its cue from early internet message boards and blends that nostalgia with a modern, premium finish. Three colors do most of the work: a muted green for calm, a burnt orange for warmth and energy, and a deep sea green for depth. The typeface, Poppins, keeps text friendly and easy to read.",
            "The identity is organized around four ideas: Community, Discovery, Connection and Growth. They guide the visuals, the social templates and the app experience.",
          ],
        },
        {
          h2: "What we delivered",
          paragraphs: [
            "A full identity system, the app and web interface, and the applications shown in the gallery: social templates, an outdoor billboard, transport branding, merchandise and the logo adapted for a smartwatch face and caps.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/work/framily-adventures/01-brand-pillars.webp",
          alt: "Framily brand pillars Community, Discovery, Connection and Growth as four linked circles on deep green",
          caption: "The four ideas the identity is built around.",
          width: 1600,
          height: 1066,
        },
        {
          src: "/images/work/framily-adventures/02-typography.webp",
          alt: "Framily typography specimen set in Poppins on a warm cream background",
          caption: "Typography: Poppins for clarity and a friendly tone.",
          width: 1600,
          height: 1066,
        },
        {
          src: "/images/work/framily-adventures/03-colour-palette.webp",
          alt: "Framily colour palette of muted green, burnt orange and deep sea green above travel photography",
          caption: "The three-colour palette and the imagery that inspired it.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/framily-adventures/04-brand-system-overview.webp",
          alt: "Framily brand applied to a bus, t-shirt, paper cups and tote bags in green and orange",
          caption: "The identity across transport, apparel and merchandise.",
          width: 1600,
          height: 1068,
        },
        {
          src: "/images/work/framily-adventures/05-instagram-posts.webp",
          alt: "Three Framily Instagram posts with orange, cream and green layouts and travel photography",
          caption: "Social templates for the community feed.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/framily-adventures/06-outdoor-billboard.webp",
          alt: "Framily outdoor billboard reading New Destinations, New Bonds, New Beginnings beside a street",
          caption: "Outdoor advertising in the same palette.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/framily-adventures/07-app-and-web-screens.webp",
          alt: "Framily mobile app shown on a phone with an app store listing and a desktop browser window",
          caption: "App and web screens designed for mobile, tablet and desktop.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/framily-adventures/08-smartwatch-and-caps.webp",
          alt: "Framily logo on a smartwatch face and on green caps",
          caption: "The logo scaled down to a watch face and caps.",
          width: 1600,
          height: 1067,
        },
      ],
    },
  },
  {
    slug: "call-time",
    title: "Call Time",
    category: "Brand identity",
    image: "/images/work/call-time.jpg",
    sourceUrl: "https://ajcreationz.co/portfolio/brand-identity/",
    brief:
      "Call Time needed a brand built around clear communication, professionalism and innovative design: a tone summed up as where clarity meets connectivity.",
    delivered: [
      "Visual identity and visual positioning",
      "Stationery suite: business cards and letterheads",
      "Branded merchandise: apparel and accessories",
      "Outdoor banners and LED displays for high-traffic areas",
    ],
    detail: {
      metaTitle: "Call Time Case Study | Brand Identity and Stationery",
      metaDescription:
        "How AJ Creationz built the visual identity, stationery, merchandise and outdoor graphics for Call Time Studio, from business cards to banners.",
      summary:
        "Call Time Studio needed an identity built around clear communication, professionalism and innovative design. We created the visual identity and positioning, then applied it across stationery, merchandise, social posts and outdoor graphics.",
      services: [
        "Brand identity design",
        "Visual positioning",
        "Communication strategy",
        "Stationery, merchandise and outdoor graphics",
      ],
      sections: [
        {
          h2: "The brief",
          paragraphs: [
            "The studio wanted a brand that stands for clear communication, professionalism and innovative design, in a tone summed up as where clarity meets connectivity.",
          ],
        },
        {
          h2: "The approach",
          paragraphs: [
            "A warm gradient of pink, orange and yellow sits against black, with bold typography and restrained layouts. The same look runs across every item, from small cards and badges to large posters and screens.",
          ],
        },
        {
          h2: "What we delivered",
          paragraphs: [
            "The identity plus a full set of applications: a business card and letterhead suite, branded apparel and accessories, outdoor banners and LED display graphics for high-traffic locations, and the social, poster and channel artwork shown in the gallery.",
          ],
        },
      ],
      gallery: [
        {
          src: "/images/work/call-time/01-youtube-channel-banner.webp",
          alt: "Call Time Studio YouTube channel banner with a filmmaker silhouette and large CALLTIME lettering",
          caption: "Channel banner for Call Time Studio.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/02-id-badges-and-business-cards.webp",
          alt: "Call Time ID badges on lanyards beside gradient business cards on a dark surface",
          caption: "ID badges and business cards.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/03-poster-series.webp",
          alt: "Three Call Time posters of filmmakers displayed in a dark gallery space",
          caption: "A poster series for the studio.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/04-cups-and-bottle.webp",
          alt: "Call Time paper cups and a water bottle in a pink, orange and black gradient",
          caption: "Branded cups and a bottle.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/05-stationery.webp",
          alt: "Call Time letterhead in a ring binder next to a dark gradient folder",
          caption: "Stationery: letterhead and folders.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/06-instagram-posts.webp",
          alt: "Three Call Time Instagram posts with dark layouts and the line Every filmmaker starts somewhere",
          caption: "Instagram posts for the studio.",
          width: 1600,
          height: 1067,
        },
        {
          src: "/images/work/call-time/07-flyer-and-sign.webp",
          alt: "A hand holding a Call Time flyer next to a hanging Call Time Studio sign",
          caption: "A flyer and a hanging sign.",
          width: 1600,
          height: 1067,
        },
      ],
    },
  },
  {
    slug: "social-media-creatives",
    title: "Social Media Creatives",
    category: "Social media kits and ad creatives",
    image: "/images/work/social-media-creatives.jpg",
    sourceUrl: "https://ajcreationz.co/portfolio/social-media-kits/",
    brief: "Social media kits and custom ad creatives produced for a client.",
    delivered: ["Social media kits", "Custom ad creatives"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const PROJECTS_WITH_PAGES = PROJECTS.filter((p) => p.detail);
