import type { Post } from "./types";

export const shopifySeoChecklist: Post = {
  slug: "shopify-seo-checklist",
  title: "Shopify SEO checklist: 14 checks and how to verify each",
  metaTitle: "Shopify SEO Checklist: 14 Checks for Your Store (2026)",
  metaDescription:
    "A Shopify SEO checklist with 14 checks for titles, duplicate URLs, collections, robots.txt and sitemaps, each with a way to verify it on your own store.",
  primaryKeyword: "shopify seo checklist",
  secondaryKeywords: [
    "shopify seo",
    "shopify seo tips",
    "shopify duplicate content",
    "shopify collection page seo",
    "shopify robots.txt",
    "shopify product page seo",
  ],
  parent: "shopify-web-design",
  scene: "platforms",
  related: ["shopify-store-cost", "shopify-vs-wordpress", "shopify-traffic-no-sales"],
  author: { name: "Zohaib", role: "Web Developer and SEO Specialist" },
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  takeaways: [
    "14 Shopify-specific SEO checks, each with a way to verify it yourself in a few minutes",
    "Why Shopify stores create duplicate product URLs and how to check yours",
    "What to leave alone, including the default robots.txt and Shopify's automatic sitemap",
  ],
  answer: [
    "A Shopify store is mostly set up for search already, so a Shopify SEO checklist is less about adding things and more about checking four areas: page titles and descriptions, duplicate URLs created by collections, thin or empty pages, and what search engines are told to crawl. Each check below says what to look at and how to verify it on your own store without any paid tool.",
    "Work through the list in order, and record what you find. If the store is new, [what a Shopify store costs](/blog/shopify-store-cost/) shows where SEO fits in the budget. If you already get visitors but few sales, start with our [Shopify conversion checklist](/blog/shopify-traffic-no-sales/). To have the store built or audited, see our [Shopify web design service](/services/shopify-web-design/).",
  ],
  disclosure:
    "AJ Creationz builds Shopify stores. Where a check depends on your theme, we say so, because themes differ and Shopify changes its features over time. Verify against your own store.",
  sections: [
    {
      h2: "Titles, descriptions and headings",
      blocks: [
        {
          type: "table",
          caption: "Checks 1 to 4: how each page describes itself",
          head: ["#", "Check", "How to verify"],
          rows: [
            [
              "1",
              "Every product, collection and page has a unique title tag that names what it is",
              "Search Google for site:yourstore.com and read the titles in the results. Repeated or default titles need rewriting",
            ],
            [
              "2",
              "Titles are short enough not to be cut off",
              "Shopify's help says you can enter up to 70 characters and recommends keeping titles to about 60 so they are not shortened in results",
            ],
            [
              "3",
              "Meta descriptions are written for people and around 160 characters",
              "Shopify recommends about 160 characters. Edit them in the page's search engine listing preview",
            ],
            [
              "4",
              "Each page has one clear main heading (H1)",
              "Open the page, view source and search for h1. Most themes use the product or collection name",
            ],
          ],
        },
      ],
    },
    {
      h2: "Duplicate URLs: the Shopify-specific problem",
      blocks: [
        {
          type: "p",
          text: "In many themes a product can be reached through more than one address: its own page, such as /products/blue-mug, and a version inside each collection it belongs to, such as /collections/mugs/products/blue-mug. Search engines should treat the product page as the main version, and that is usually done with a canonical tag. Internal links can still point to the collection version, which sends mixed signals. One agency write-up on this problem suggests fixing the theme so product links use the main product address. Check your own store rather than assuming.",
        },
        {
          type: "table",
          caption: "Checks 5 to 8: duplicates and pagination",
          head: ["#", "Check", "How to verify"],
          rows: [
            [
              "5",
              "Product pages declare themselves as the canonical version",
              'Open a product from a collection, view source and search for rel="canonical". It should point to the /products/ address',
            ],
            [
              "6",
              "Internal links point to the main product address",
              "Hover over product links in a collection page. If they show /collections/.../products/..., ask your developer whether the theme can link to /products/ instead",
            ],
            [
              "7",
              "Paginated collection pages stay crawlable",
              "Several sources recommend relying on canonical tags and consistent links rather than blocking page 2 and beyond. Do not noindex pagination without a reason",
            ],
            [
              "8",
              "Filtered and sorted URLs are not set up to compete with the main collection",
              "Add a filter on a collection and look at the address and canonical. A 2026 guide says Shopify's default rules already block combined tag URLs, so leave the default unless you have a filter page you want to rank",
            ],
          ],
        },
      ],
    },
    {
      h2: "Content quality and structure",
      blocks: [
        {
          type: "table",
          caption: "Checks 9 to 12: the pages themselves",
          head: ["#", "Check", "How to verify"],
          rows: [
            [
              "9",
              "Product descriptions are written for your product, not copied from the supplier",
              "Paste a sentence in quotes into Google. If many stores share it, rewrite it",
            ],
            [
              "10",
              "Collection pages have a short introduction that helps a shopper choose",
              "Open each main collection. A grid of products with no text gives little context",
            ],
            [
              "11",
              "Empty, out-of-stock or discontinued products are handled on purpose",
              "Search site:yourstore.com for products you no longer sell. Redirect or explain, do not leave dead ends",
            ],
            [
              "12",
              "Images have a clear file name and descriptive alt text",
              "Inspect an image in your browser and read the alt attribute. Describe what the image shows",
            ],
          ],
        },
      ],
    },
    {
      h2: "What search engines can crawl",
      blocks: [
        {
          type: "table",
          caption: "Checks 13 and 14: robots.txt and sitemap",
          head: ["#", "Check", "How to verify"],
          rows: [
            [
              "13",
              "robots.txt is the default unless you have a reason to change it",
              "Open yourstore.com/robots.txt. Shopify's developer documentation says it generates a default file that works for most shops. If a theme has a robots.txt.liquid template, it replaces the generated output, so compare the two before publishing a change",
            ],
            [
              "14",
              "The sitemap is submitted in Google Search Console",
              "Open yourstore.com/sitemap.xml to confirm it loads, then add it under Sitemaps in Search Console and check for errors",
            ],
          ],
        },
        {
          type: "callout",
          title: "Leave alone unless you know why",
          text: "Do not edit robots.txt to fix duplicate content. Robots.txt controls crawling and is not a way to choose the main version of a page; canonical tags, redirects and consistent links do that job.",
        },
      ],
    },
    {
      h2: "After the checklist",
      blocks: [
        {
          type: "p",
          text: "Fix problems in this order: broken or blocked pages, duplicate URLs, then titles and content. Re-check in Search Console after a few weeks. For a store that also needs a broader technical review, use our [technical SEO audit checklist](/blog/technical-seo-audit-checklist/). If you are weighing platforms, [Shopify vs WordPress](/blog/shopify-vs-wordpress/) compares them.",
        },
      ],
    },
  ],
  doNext: {
    title: "Run checks 1, 5 and 13 on your store today",
    text: "They take about ten minutes and cover titles, duplicate product URLs and what search engines can crawl. If you want a written list of fixes in priority order, send us your store address and we will reply within one working day.",
  },
  faqs: [
    {
      q: "Is Shopify good for SEO?",
      a: "Shopify handles several basics for you, such as a sitemap and a default robots.txt. Results still depend on your content, page structure, links and how you handle duplicate URLs.",
    },
    {
      q: "Does Shopify create duplicate content?",
      a: "Many themes let a product be reached through its own address and through each collection it belongs to. Canonical tags normally point to the main version, but check that yours do and that internal links use the main address.",
    },
    {
      q: "Can I edit robots.txt on Shopify?",
      a: "Yes. A robots.txt.liquid template lets you customise the output. Shopify says its default works for most shops, so change it only with a clear reason and compare the result with the default first.",
    },
    {
      q: "How long should a Shopify page title be?",
      a: "Shopify allows up to 70 characters and recommends keeping titles to about 60 so they are not shortened in search results.",
    },
    {
      q: "Do I need an SEO app for Shopify?",
      a: "Not to do these 14 checks. Apps can help with bulk edits or redirects, but each one adds code to your store, so add one only for a task you cannot do in the admin.",
    },
  ],
  sources: [
    {
      label: "Shopify Help Center: adding keywords and SEO titles and descriptions",
      url: "https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords",
    },
    {
      label: "Shopify developer docs: robots.txt.liquid",
      url: "https://shopify.dev/docs/storefronts/themes/architecture/templates/robots-txt-liquid",
    },
    {
      label: "Amsive: resolving Shopify duplicate content between collection and product pages",
      url: "https://www.amsive.com/insights/seo/resolving-shopify-duplicate-content-between-collection-product-pages/",
    },
    {
      label: "Google Search Central: consolidate duplicate URLs",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
    },
  ],
};
