/** Case-study facts taken from the project pages on the main site (ajcreationz.co). Only stated facts are used; no results are claimed. */
export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  /** Link to the full project on the main studio site. */
  sourceUrl: string;
  brief: string;
  delivered: string[];
  approach?: string;
  quote?: { text: string; name: string; role: string };
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
  },
  {
    slug: "social-media-creatives",
    title: "Social Media Creatives",
    category: "Social media kits and ad creatives",
    image: "/images/work/social-media-creatives.jpg",
    sourceUrl: "https://ajcreationz.co/portfolio/social-media-kits/",
    brief:
      "Social media kits and custom ad creatives produced for a client. A fuller brief for this project will be added.",
    delivered: ["Social media kits", "Custom ad creatives"],
  },
];
