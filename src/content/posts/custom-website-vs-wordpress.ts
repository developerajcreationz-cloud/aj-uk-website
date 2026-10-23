import type { Post } from "./types";

export const customWebsiteVsWordpress: Post = {
  slug: "custom-website-vs-wordpress",
  title: "Custom website vs WordPress: cost over three years",
  metaTitle: "Custom Website vs WordPress: UK Cost and When to Choose",
  metaDescription:
    "Custom website or WordPress? UK build cost ranges, a three-year cost model with the arithmetic shown, and rules for when each is the right choice.",
  primaryKeyword: "custom website vs wordpress",
  secondaryKeywords: [
    "custom website cost uk",
    "wordpress vs custom development",
    "bespoke website vs wordpress",
    "should i build a custom website",
    "custom website vs cms",
    "wordpress or custom website for business",
  ],
  parent: "custom-website-development",
  scene: "website",
  related: [
    "how-much-does-a-website-cost",
    "shopify-vs-wordpress",
    "website-maintenance-cost",
    "website-brief-template",
  ],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  takeaways: [
    "UK build and running cost ranges for WordPress and custom sites, with their sources and limits",
    "A three-year cost model with every figure and calculation shown, so you can replace the assumptions with quotes",
    "Five rules that tell you when custom development is worth paying for",
  ],
  answer: [
    "For most UK small and mid-sized business sites that publish pages, collect enquiries and need to be edited by staff, WordPress is the cheaper and quicker choice. A custom site costs more to build and to change, and it earns that cost only when the site is the product, when it needs unusual functionality or integrations, or when WordPress plugins create a security or performance problem you cannot solve. The sources we found put a WordPress build at roughly £3,000 to £15,000 and a custom build from about £8,000 to £50,000, so the gap is large and the right answer depends on what the site must do.",
    "Compare three-year cost, not the build price alone, because running and changing a site are part of the bill. The sections below give the ranges, a worked three-year model and five rules for deciding. For the wider price picture, see [how much a website costs](/blog/how-much-does-a-website-cost/); to discuss a custom build, see our [custom website development service](/services/custom-website-development/).",
  ],
  disclosure:
    "AJ Creationz builds both WordPress and custom sites, and this website is a custom Next.js build. We have a commercial interest in both options, so the model below uses labelled assumptions you can change.",
  sections: [
    {
      h2: "What UK sources say each costs",
      blocks: [
        {
          type: "table",
          caption: "Build and running costs quoted by UK sources (October 2026)",
          head: ["Source", "WordPress", "Custom", "What it measures"],
          rows: [
            ["Kolonell (London, 2026)", "£3,000 to £8,000", "£8,000 to £20,000", "Standard B2B marketing site"],
            ["White Label Coders", "£5,000 to £15,000", "£20,000 to £50,000+", "Comparable functionality, build price"],
            ["ProfileTree", "£15,000 to £30,000", "£60,000 to £150,000+", "Five-year total including upkeep"],
          ],
          note: "These are agency marketing figures that disagree by a wide margin. Treat them as a sign that custom costs a multiple of WordPress, not as a price list. ProfileTree also cites £75 to £150 an hour for changes to a custom build.",
        },
        {
          type: "p",
          text: "WordPress also has running costs: hosting, premium themes and plugins, and regular updates. Our [website maintenance cost guide](/blog/website-maintenance-cost/) covers what a plan should include. The difference is that a WordPress change is often a content edit, while a custom change is often developer time.",
        },
      ],
    },
    {
      h2: "A three-year cost model with the arithmetic shown",
      blocks: [
        {
          type: "table",
          caption: "Illustrative model for a 10-page marketing site (assumptions, not quotes)",
          head: ["Cost line", "WordPress", "Custom", "How it is calculated"],
          rows: [
            ["Build", "£6,000", "£14,000", "Assumed, inside the ranges above"],
            ["Hosting and care, 36 months", "£2,880", "£2,160", "WordPress £80 a month × 36; custom £60 a month × 36"],
            ["Changes after launch", "£1,500", "£4,000", "WordPress 20 hours × £75; custom 40 hours × £100"],
            ["Three-year total", "£10,380", "£20,160", "Sum of the three lines above"],
          ],
          note: "WordPress: £6,000 + £2,880 + £1,500 = £10,380. Custom: £14,000 + £2,160 + £4,000 = £20,160. Replace each figure with your quotes.",
        },
        {
          type: "p",
          text: "On these assumptions the custom site costs about £9,780 more over three years. That extra money is justified only if the custom site earns it back, for example by winning customers the WordPress site could not, or by avoiding costs such as a security incident or a slow checkout. Ask each supplier what the extra spend buys, in terms you can measure.",
        },
      ],
    },
    {
      h2: "Five rules for choosing custom",
      blocks: [
        {
          type: "ol",
          items: [
            "**The site is the product.** A web application, a booking engine or a platform with user accounts and logic usually needs custom work.",
            "**You need an integration or workflow plugins cannot provide.** List the exact system, such as an internal stock database, before you decide.",
            "**Performance or security needs are strict.** If you have measured a problem that plugins cannot fix, custom may be justified. Do not assume it.",
            "**Your content is simple and rarely edited.** A small custom site with few changes can be cheap to run, but staff then depend on a developer for edits.",
            "**You can afford the changes later.** Custom sites are cheapest when requirements are stable. If you expect to change the site often, price those hours.",
          ],
        },
        {
          type: "p",
          text: "If none of the five rules fits, start with WordPress. A hybrid is also common: WordPress for marketing pages and a custom application for the product. Write down the requirements before you ask for quotes, using our [website brief template](/blog/website-brief-template/).",
        },
      ],
    },
    {
      h2: "How to compare quotes fairly",
      blocks: [
        {
          type: "ul",
          items: [
            "Ask each supplier to quote against the same brief and list what is included.",
            "Ask who owns the code, the design files and the hosting account when the project ends.",
            "Ask how content edits will work and who does them.",
            "Ask for the cost of one typical change, such as adding a page, so you can price the changes line in the model.",
            "Ask for three-year costs, not only the build price.",
          ],
        },
      ],
    },
  ],
  doNext: {
    title: "Run the model with your own two quotes",
    text: "Get one WordPress quote and one custom quote against the same brief, put them into the model with a realistic number of change hours, and compare the three-year totals. If you would like us to quote both ways, send us your brief.",
  },
  faqs: [
    {
      q: "Is a custom website better than WordPress?",
      a: "Not by default. WordPress suits most content-managed business sites. Custom is better when the site is the product, needs unusual functionality or must meet strict performance or security requirements.",
    },
    {
      q: "How much does a custom website cost in the UK?",
      a: "The sources we found range from about £8,000 to £20,000 for a standard business site up to £20,000 to £50,000 or more for complex functionality. Quotes vary widely, so compare against the same written brief.",
    },
    {
      q: "Is a custom website more secure than WordPress?",
      a: "Not automatically. WordPress risk comes mostly from outdated or poorly chosen plugins and weak maintenance. A custom site can be secure or insecure depending on how it is built and maintained.",
    },
    {
      q: "Can I edit a custom website myself?",
      a: "Only if it is built with an editing system for your content. Ask the supplier how you will edit pages and what that costs, because developer-only edits add to the running cost.",
    },
    {
      q: "Can I start with WordPress and move to custom later?",
      a: "Yes. Plan the move as a migration, with a redirect map for every old URL, so you keep existing search traffic. See our website migration SEO checklist.",
    },
  ],
  sources: [
    {
      label: "Kolonell: WordPress vs custom B2B website, London 2026",
      url: "https://kolonell.com/en/blog/wordpress-vs-custom-b2b-website-london-2026",
    },
    {
      label: "White Label Coders: build a website from scratch or use WordPress",
      url: "https://whitelabelcoders.com/blog/is-it-better-to-build-a-website-from-scratch-or-use-wordpress/",
    },
    {
      label: "ProfileTree: WordPress vs custom development",
      url: "https://profiletree.com/wordpress-vs-custom-development/",
    },
  ],
};
