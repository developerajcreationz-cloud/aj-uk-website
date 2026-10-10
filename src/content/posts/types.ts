export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][]; note?: string }
  | { type: "callout"; title: string; text: string };

export type Post = {
  slug: string;
  /** H1, 65 characters or fewer. */
  title: string;
  /** Full <title>, 50-60 characters, different from the H1. */
  metaTitle: string;
  /** 140-155 characters. */
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Parent service page (pillar) slug. */
  parent: string;
  /** Sibling post slugs. */
  related: string[];
  author: { name: string; role: string };
  datePublished: string;
  dateModified: string;
  /** Specific outcomes the reader gets; shown in the first screen. */
  takeaways: string[];
  /** First paragraphs: the answer, in the first 150-200 words. Inline links use [text](href). */
  answer: string[];
  /** Disclosure of what AJ Creationz sells, where relevant. */
  disclosure?: string;
  sections: { h2: string; blocks: Block[] }[];
  /** The single most useful next action for the reader. */
  doNext: { title: string; text: string };
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};
