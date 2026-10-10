import type { Post } from "./types";

export const brandGuidelinesTemplate: Post = {
  slug: "brand-guidelines-template",
  title: "Brand guidelines template: what to include and examples",
  metaTitle: "Brand Guidelines Template: What to Include and Examples",
  metaDescription:
    "What are brand guidelines? A section-by-section template for small businesses, with a filled-in example, color code rules and a one-page option.",
  primaryKeyword: "brand guidelines template",
  secondaryKeywords: [
    "brand guidelines examples",
    "what are brand guidelines",
    "brand style guide for small business",
    "logo usage rules",
    "brand colour codes hex rgb cmyk",
  ],
  parent: "brand-identity",
  scene: "brand",
  related: ["how-much-does-a-website-cost", "reels-and-tiktok-editing-guide"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  takeaways: [
    "The nine sections a small business needs, and what each one must say",
    "A filled-in example for a fictional business, so you can copy the level of detail",
    "A one-page version for when a full document is more than you need",
  ],
  answer: [
    "Brand guidelines are a short document that tells anyone using your brand how to do it consistently: how your logo may be used, which colors and fonts to use, how your imagery looks and how you write. A good brand guidelines template covers nine things: purpose and audience, logo rules, color, typography, imagery, voice and tone, layout examples, dos and don'ts, and contacts and files. For a small business the document can be a few pages; most do not need a 100-page manual that nobody opens.",
    "This guide gives the template, a filled-in example for a made-up business so you can see the level of detail, and a one-page option. If you would rather have the whole system built and documented, see our [brand identity service](/services/brand-identity).",
  ],
  disclosure:
    "AJ Creationz designs brand identities and writes guidelines for clients. The structure below reflects the sections that recur across guideline templates from design marketplaces and design blogs.",
  sections: [
    {
      h2: "What are brand guidelines and who uses them",
      blocks: [
        {
          type: "p",
          text: "Brand guidelines turn taste into rules. They are used by your team, freelancers, printers, web developers and anyone posting on your behalf. They save time because nobody has to ask which blue to use, and they protect consistency when more people touch the brand.",
        },
      ],
    },
    {
      h2: "The brand guidelines template: nine sections",
      blocks: [
        {
          type: "table",
          caption: "Template",
          head: ["Section", "What it must say", "Fill in"],
          rows: [
            ["1. Purpose and audience", "Who you serve, what you stand for, how you differ", "Two or three sentences"],
            [
              "2. Logo",
              "Versions (horizontal, stacked, icon), clear space, minimum size, backgrounds, and misuse examples",
              "Files plus rules",
            ],
            ["3. Color", "Primary and secondary colors with HEX, RGB and CMYK values", "Table of values"],
            [
              "4. Typography",
              "Heading and body fonts, weights, sizes, where to get the fonts",
              "Font names and a sample",
            ],
            ["5. Imagery", "Photo style, illustration style, what to avoid", "Examples and rules"],
            ["6. Voice and tone", "How you sound, with words you use and avoid", "Short list plus example sentences"],
            ["7. Layout examples", "How a business card, social post and web page look when correct", "Examples"],
            ["8. Dos and don'ts", "Visual examples of correct and incorrect use", "Pairs of images"],
            ["9. Contacts and files", "Who approves exceptions; where the files live", "Names and links"],
          ],
        },
      ],
    },
    {
      h2: "Brand guidelines examples: a filled-in section",
      blocks: [
        {
          type: "p",
          text: "This example is for a fictional business, Example Co, so you can see the level of detail that is useful. The color values are illustrative and valid as shown.",
        },
        {
          type: "table",
          caption: "Example Co: color and logo rules",
          head: ["Item", "Rule"],
          rows: [
            [
              "Primary color",
              "Plum: HEX #4C1D95, RGB 76, 29, 149. Use for headings, buttons and the logo on light backgrounds.",
            ],
            ["Accent color", "Lilac: HEX #C4B0FF, RGB 196, 176, 255. Use sparingly for highlights."],
            ["Neutral", "Ink: HEX #120F1D, RGB 18, 15, 29, for body text."],
            [
              "CMYK values",
              "Take from the printer's profile; do not convert automatically from RGB, because results vary by profile.",
            ],
            ["Logo clear space", "Keep clear space equal to the height of the logo's first letter on all sides."],
            ["Logo minimum size", "24 px high on screen; 15 mm wide in print."],
            [
              "Logo on photos",
              "Use the white version on dark areas only. Never place the logo on a busy part of an image.",
            ],
            ["Voice", "Plain, direct, specific. Use 'we' and 'you'. Avoid jargon and exclamation marks."],
          ],
          note: "Check: 0x4C = 76, 0x1D = 29, 0x95 = 149; 0xC4 = 196, 0xB0 = 176, 0xFF = 255; 0x12 = 18, 0x0F = 15, 0x1D = 29. The clear-space and minimum-size figures are examples; set yours by testing the logo at small sizes.",
        },
      ],
    },
    {
      h2: "Brand colour codes: HEX, RGB and CMYK",
      blocks: [
        {
          type: "ul",
          items: [
            "**HEX** is used on websites, written as # followed by six characters.",
            "**RGB** is used on screens, with three numbers from 0 to 255.",
            "**CMYK** is used in print. Screen colors do not convert exactly, so ask your printer for the values that match their process.",
            "Record all three for every color, and note any official color names.",
          ],
        },
      ],
    },
    {
      h2: "Logo usage rules to write down",
      blocks: [
        {
          type: "ul",
          items: [
            "Approved versions and when to use each",
            "Clear space and minimum size",
            "Approved backgrounds, and a rule for photos",
            "Misuse examples: stretching, rotating, recoloring, adding effects, changing the font",
            "File formats supplied: vector for print, PNG for screen, SVG for web",
          ],
        },
      ],
    },
    {
      h2: "A one-page brand style guide for a small business",
      blocks: [
        {
          type: "p",
          text: "If a full document is too much, make a single page with five blocks: logo and how to place it, color palette with codes, fonts, image style in one sentence with two sample images, and three voice rules. Add the page to a shared folder with the logo files and send the link to every supplier.",
        },
      ],
    },
  ],
  doNext: {
    title: "Do this next",
    text: "Open the template table and fill in sections 2 to 4 for your business today: logo files, color values and fonts. Those three prevent most inconsistency. Add the rest over the next week.",
  },
  faqs: [
    {
      q: "What are brand guidelines?",
      a: "A document that explains how to use your logo, colors, fonts, imagery and voice consistently across everything you publish.",
    },
    {
      q: "How long should brand guidelines be?",
      a: "As short as they can be while settling real questions. The guides we reviewed note that most small businesses do not need a 100-page manual; a few pages, or a single page, can be enough.",
    },
    {
      q: "What should a brand style guide for a small business include?",
      a: "At minimum: logo rules, color codes, fonts, imagery style and voice, plus dos and don'ts.",
    },
    {
      q: "Do I need CMYK values?",
      a: "Only for print. Ask your printer for the values that match their process, because automatic conversion from RGB can look different.",
    },
    {
      q: "Who should own the guidelines?",
      a: "One named person who approves exceptions and keeps the files current.",
    },
  ],
  sources: [
    {
      label: "Template marketplaces and design blogs reviewed 10 Oct 2026: Creative Market brand guidelines template",
      url: "https://creativemarket.com/graphypix/292102732-Brand-Guidelines-Template",
    },
    {
      label: "Framer marketplace: brand guidelines templates",
      url: "https://www.framer.com/marketplace/templates/66690/",
    },
    { label: "Gumroad: brand guidelines template listings", url: "https://thebrandley.gumroad.com/l/vcwfnr" },
  ],
};
