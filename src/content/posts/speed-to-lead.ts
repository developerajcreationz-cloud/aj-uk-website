import type { Post } from "./types";

export const speedToLead: Post = {
  slug: "speed-to-lead",
  title: "Speed to lead: missed-call text back and CRM follow-up for trades",
  metaTitle: "Speed to Lead for Trades: Missed-Call Text Back and CRM",
  metaDescription:
    "Speed to lead for trades: why a fast first reply wins jobs, how missed-call text back works, UK and US texting rules, and a follow-up plan you can copy.",
  primaryKeyword: "speed to lead",
  secondaryKeywords: [
    "crm for trades",
    "missed call text back",
    "missed call text back software",
    "lead response time",
    "missed call text back gohighlevel",
  ],
  parent: "gohighlevel-crm",
  scene: "crm",
  related: ["gohighlevel-pricing", "gohighlevel-vs-hubspot", "hubspot-alternatives"],
  author: { name: "Athar", role: "Strategic Director" },
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
  takeaways: [
    "A 15-minute test that shows your real response time on every channel, with a log sheet",
    "Missed-call text back templates for UK and US trades, and the texting rules that apply in each country",
    "A follow-up plan for a trades CRM: what to automate, what a person must do, and by when",
  ],
  answer: [
    "Speed to lead is the time between a customer enquiring and getting a real reply from you. It matters because enquiries go cold fast. In a Harvard Business Review audit of 2,241 US companies, only 37% replied to an online lead within an hour, the average reply took 42 hours, and 23% never replied. Firms that made contact within an hour were about seven times more likely to have a meaningful conversation with a decision maker than firms that waited longer, and over sixty times more likely than firms that waited a day or more.",
    "For a trade business the problem is simple: you are up a ladder or under a sink when the phone rings, and the customer rings the next name on the list. The fix is a system that replies in seconds when you cannot, then makes sure a person follows up within a set time. This guide shows how to measure your current speed, how missed-call text back works, the rules for texting customers in the UK and the US, and the follow-up stages a CRM for trades should run. If you want it built for you, see our [GoHighLevel CRM service](/services/gohighlevel-crm).",
  ],
  disclosure:
    "AJ Creationz sets up GoHighLevel and other CRMs, so we have an interest in this topic. The response-time research quoted here is independent; the templates and follow-up timings are our working practice, not tested benchmarks.",
  sections: [
    {
      h2: "Why speed to lead decides who gets the job",
      blocks: [
        {
          type: "p",
          text: "The Harvard Business Review study is from 2011 and covered US companies, so treat its exact multiples as an indication rather than a law. The direction is what matters, and it matches how people hire trades today: someone with a leaking boiler or a broken lock wants an answer now, and the first business that replies with a time and a rough price usually gets the visit.",
        },
        {
          type: "p",
          text: "The study defined a qualified lead as a meaningful conversation with a key decision maker. For a trade that is the homeowner agreeing to a visit or a quote. Every hour you add between the enquiry and that conversation gives a competitor the chance to have it first.",
        },
        {
          type: "table",
          caption: "How the 2,241 companies in the HBR audit responded to online leads",
          head: ["Response time", "Share of companies"],
          rows: [
            ["Within one hour", "37%"],
            ["Within 24 hours", "16%"],
            ["More than 24 hours", "24%"],
            ["Never responded", "23%"],
          ],
          note: "Source: Oldroyd, McElheran and Elkington, The Short Life of Online Sales Leads, Harvard Business Review, 2011. Average response time among companies that replied: 42 hours.",
        },
      ],
    },
    {
      h2: "Test your lead response time in 15 minutes",
      blocks: [
        {
          type: "p",
          text: "Before buying any software, measure what a customer experiences today. Use a phone and an email address your business does not recognise, and send one enquiry through each channel on a normal working morning.",
        },
        {
          type: "ol",
          items: [
            "Ring your main number and let it go unanswered. Note when you get any reply: a text, a call back or nothing.",
            "Fill in the contact form on your website with a realistic job, such as a quote for a new bathroom tap.",
            "Send a message through your Google Business Profile and your Facebook page, if you have them.",
            "If you run Facebook lead ads, submit your own form.",
            "Log the time of the first reply and the time a real person replied on each channel.",
          ],
        },
        {
          type: "table",
          caption: "Speed-to-lead log: copy this into a spreadsheet",
          head: ["Channel", "Enquiry sent", "First reply (any)", "First reply from a person", "Minutes to a person"],
          rows: [
            ["Missed phone call", "10:02", "", "", ""],
            ["Website form", "10:05", "", "", ""],
            ["Google Business Profile message", "10:08", "", "", ""],
            ["Facebook message or lead form", "10:10", "", "", ""],
          ],
          note: "Minutes to a person = first reply from a person minus enquiry sent. Repeat once at 4pm and once on a Saturday, because that is when trades miss most calls.",
        },
        {
          type: "p",
          text: "Most owners who run this test find at least one channel with no reply at all, often the website form, because notifications go to an inbox nobody checks during the day. That one gap is usually worth fixing before anything else.",
        },
      ],
    },
    {
      h2: "How missed-call text back works",
      blocks: [
        {
          type: "p",
          text: "Missed-call text back sends an automatic text from your business number when a call goes unanswered. The caller learns within a minute that you got their call and will come back to them, which stops many of them ringing the next trade. Most CRMs built for small businesses include it, including GoHighLevel, where it is a standard automation on a business phone number.",
        },
        {
          type: "p",
          text: "A good text does three things: confirms who they reached, says when a person will reply, and gives one easy action. Keep it short and personal.",
        },
        {
          type: "callout",
          title: "Template: UK trade",
          text: "Hi, it's Dan from Northside Plumbing. Sorry I missed your call, I'm on a job. Reply with what you need and your postcode and I'll get back to you by 1pm today. Or book a call here: [booking link]",
        },
        {
          type: "callout",
          title: "Template: US trade",
          text: "Hi, this is Maria at Cedar Roofing. Sorry we missed your call! Text back what you need help with and your ZIP code and we'll call you within the hour. Reply STOP to opt out.",
        },
        {
          type: "p",
          text: "Promise only a reply time you can keep. A text that says within the hour, followed by silence until the next day, does more harm than no text.",
        },
      ],
    },
    {
      h2: "Texting rules in the UK and the US",
      blocks: [
        {
          type: "p",
          text: "Rules differ by country, and this is general information rather than legal advice. Ask a qualified adviser to check your wording.",
        },
        {
          type: "ul",
          items: [
            "**UK: replies versus marketing.** The ICO's guidance under PECR covers marketing texts and emails. You generally need specific consent to send marketing texts, or you can rely on the soft opt-in for existing customers who bought or negotiated to buy a similar service, if you offered an opt-out when you collected their details and in every message. A one-off reply to someone who just called you about a job is part of handling their enquiry; later promotional texts are marketing and need consent or the soft opt-in.",
            "**US: register before you text.** Mobile carriers require businesses texting from local numbers to register under A2P 10DLC. Unregistered numbers risk having messages filtered or blocked, and registration can take days, so do it before you switch the automation on.",
            "**US: consent for marketing.** Automated marketing texts need prior consent under US rules, and every message should include a way to opt out, such as replying STOP. Keep a record of when and how each person agreed.",
            "**Both countries:** say who you are in the first message, honour opt-outs straight away and keep texts to the job the person asked about.",
          ],
        },
      ],
    },
    {
      h2: "What a CRM for trades should automate",
      blocks: [
        {
          type: "p",
          text: "A CRM for trades does not need to be complicated. It needs every enquiry in one place, a first reply that is instant, and reminders that make sure a person follows up. These are the stages we set up for trade businesses:",
        },
        {
          type: "table",
          caption: "Trades CRM follow-up plan: automation and human action at each stage",
          head: ["Stage", "Automation", "Person does", "Deadline (our standard)"],
          rows: [
            [
              "New enquiry (call, form, message)",
              "Instant text or email reply; enquiry logged with source",
              "Calls back or replies with times",
              "Within 1 working hour",
            ],
            [
              "Visit or survey booked",
              "Confirmation text with date, time and what to prepare; reminder the day before",
              "Turns up on time",
              "Reminder 24 hours before",
            ],
            [
              "Quote sent",
              "Copy of quote by email; follow-up texts on day 2 and day 5 if no reply",
              "Calls on day 3 to answer questions",
              "Quote within 48 hours of visit",
            ],
            ["Job won", "Booking confirmation and deposit link if used", "Schedules the job", "Same day"],
            [
              "Job completed",
              "Thank-you text with a link to leave a Google review",
              "Asks in person for a review",
              "Within 24 hours",
            ],
            [
              "Quote lost or no reply after day 10",
              "Moves to a lost stage with a reason",
              "Notes why, if known",
              "Day 10",
            ],
          ],
          note: "Deadlines are our recommended working standards, not industry rules. Adjust them to your hours and the size of your team.",
        },
        {
          type: "p",
          text: "Two details make the difference between a CRM that works and one that gets ignored. First, every channel must feed the same inbox, so nobody has to check five apps. Second, the person on call must get a notification on their phone that is impossible to miss, with the customer's message and number in it.",
        },
      ],
    },
    {
      h2: "What it is worth: a worked example",
      blocks: [
        {
          type: "p",
          text: "The figures below are assumptions to show the arithmetic, not a forecast. Put in your own numbers.",
        },
        {
          type: "table",
          caption: "Illustrative value of recovering missed enquiries",
          head: ["Line", "UK example", "US example"],
          rows: [
            ["Enquiries a month (calls, forms, messages)", "60", "60"],
            ["Share currently missed or answered late (assumed)", "25%, so 15", "25%, so 15"],
            ["Share of those you win back with a fast reply (assumed)", "1 in 5, so 3", "1 in 5, so 3"],
            ["Average profit per job (assumed)", "£250", "$350"],
            ["Extra profit a month: 3 × profit per job", "£750", "$1,050"],
          ],
          note: "Check: 60 × 25% = 15; 15 ÷ 5 = 3; 3 × £250 = £750 and 3 × $350 = $1,050. GoHighLevel's plans start at $97 a month plus usage; see our GoHighLevel pricing guide for the full cost.",
        },
        {
          type: "p",
          text: "If even one extra job a month covers your software and texting costs, the system pays for itself. Our [GoHighLevel pricing guide](/blog/gohighlevel-pricing) breaks down plan and usage costs, and the [GoHighLevel vs HubSpot comparison](/blog/gohighlevel-vs-hubspot) covers which suits a trade business.",
        },
      ],
    },
  ],
  doNext: {
    title: "Run the missed-call test today",
    text: "Call your own business from a mobile at a busy time and do not answer. If nothing reaches you within five minutes, that is the first job to fix. We can set up missed-call text back, one shared inbox and the follow-up stages above in GoHighLevel, usually within a week. Tell us your trade and how enquiries reach you, and we will suggest a setup in writing.",
  },
  faqs: [
    {
      q: "What is speed to lead?",
      a: "Speed to lead is the time between a customer enquiring and getting a real reply. A Harvard Business Review audit found firms that made contact within an hour were about seven times more likely to reach a decision maker than firms that waited longer.",
    },
    {
      q: "What is a good lead response time for a trade business?",
      a: "Aim for an instant automatic reply and a reply from a person within one working hour. Promise customers only a time you can keep every day.",
    },
    {
      q: "What is missed-call text back?",
      a: "It is an automation that texts a caller from your business number when you miss their call, so they know you will reply and are less likely to ring a competitor.",
    },
    {
      q: "Is a missed-call text a marketing message in the UK?",
      a: "A one-off reply to someone who has just called about a job is part of handling their enquiry. Later promotional texts are marketing and need consent or the soft opt-in under the ICO's PECR guidance. Get legal advice on your wording.",
    },
    {
      q: "Do I need to register to send business texts in the US?",
      a: "Yes, if you text from local US numbers. Carriers require A2P 10DLC registration, and unregistered numbers risk having messages filtered or blocked.",
    },
    {
      q: "What is the best CRM for trades?",
      a: "The best one is the one your team will actually use. It should put every enquiry in one inbox, reply instantly, remind you to follow up and ask for reviews. GoHighLevel does all of these on one platform; simpler job-management tools may suit very small teams.",
    },
  ],
  sources: [
    {
      label: "Harvard Business Review: The Short Life of Online Sales Leads (2011)",
      url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
    },
    {
      label: "BYU ScholarsArchive: record of the HBR study by Oldroyd, McElheran and Elkington",
      url: "https://scholarsarchive.byu.edu/facpub/9711",
    },
    {
      label: "CustomerThink: summary of the HBR lead response findings",
      url: "https://customerthink.com/how_fast_are_you/",
    },
    {
      label: "ICO: electronic mail marketing (PECR guidance)",
      url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/",
    },
    {
      label: "GoDaddy Help: requirement to register a business to send text messages (A2P 10DLC)",
      url: "https://www.godaddy.com/es/help/understand-the-requirement-to-register-my-business-to-send-text-messages-41844?lc=en-US",
    },
    { label: "HighLevel: pricing", url: "https://www.gohighlevel.com/pricing" },
  ],
};
