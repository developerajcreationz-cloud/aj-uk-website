# Search Console and SERP review (23 Oct 2026)

Method: SEO Operating Playbook v6.1 section 8 (SERP research) and the no-tool audit playbook for the live-site checks.

## Limits

- Search Console data came through Porter, which only reaches back 30 days (23 Sep to 22 Oct 2026). No trend before that, and period coverage was not verifiable.
- SERPs were read with a US-based search tool, one collection on 23 Oct 2026. UK positions are approximated, not a localised rank report. Result titles only, no position numbers, no AI Overview or local pack capture. Confidence: LOW to MEDIUM.

## OBSERVED: Search Console, last 30 days

- About 2,060 impressions, 2 clicks. Weekly impressions 894 (w/c 6 Oct) then 1,168 (w/c 13 Oct). Average position about 76.
- Every page with real impressions sits at position 62 to 91. No page is in the top 20.
- UK desktop is about 60% of impressions; US desktop 13%; mobile is small.
- Top pages by impressions: website-maintenance-cost 286, google-ads-cost 284, technical-seo-audit-checklist 265, seo-pricing 224, how-much-does-a-website-cost 177+6, shopify-vs-wordpress 163+5, shopify-store-cost 153, brand-guidelines-template 149.
- Service pages: 1 to 45 impressions each. gohighlevel-crm 45, video-editing 34, shopify-web-design 22.
- Slash-less duplicates (for example `/blog/shopify-vs-wordpress`) appear with impressions. They 308 to the canonical URL.
- Old WordPress/WooCommerce URLs (`/product/...`, `/shop/`, `/product-category/cribs/`) still collect about 45 impressions. They return 410.

## OBSERVED: live SERPs for the top queries

| Query                                 | Who appears                                                              | Format                                                            | Gap for us                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| website maintenance cost per month UK | opace, justdigitalgurus, redevolution, websitehelper.co.uk, expertmarket | UK price tiers (basic about £30 to £150, premium £500 to £2,000+) | Our title lacked "UK"; UK-labelled tiers and "what is included" need to be explicit |
| seo pricing uk                        | whitehat-seo.co.uk, epicedits, wordstream, oneppcagency, outrank         | UK retainer bands (£500 to £5,000, common £1,500 to £3,000)       | Competitors are specialist SEO agencies with older domains                          |
| technical seo audit checklist         | brightedge, directiveconsulting, nuoptima, link-assistant                | Prioritised checklists (crawl and index first)                    | Queries use "seo audit checklist"; title now matches                                |
| google ads cost uk                    | advertizingly, whito, visionary-marketing, judeluxe                      | UK fee bands (£300 to £3,000, 10 to 20% of spend)                 | Title now carries UK and 2026                                                       |
| shopify vs wordpress                  | nerdwallet, ecommerce-platforms, wphive                                  | Comparison guides, some dated 2022 to 2024                        | Authority gap; fresh 2026 data is our angle                                         |
| gohighlevel agency uk                 | softomatesolutions, marcandrews, thefunnelsguys                          | Agency and review pages                                           | Few UK-specific agency pages; service page needs UK proof                           |

Vendor and agency sources; prices are indicative only.

## HYPOTHESIS

1. We are not ranking mainly for authority, not for technical reasons: the site was fully crawlable and indexed, but is days old with no backlinks competing against established UK agencies.
2. Adding "UK" to cost titles will lift relevance for the UK queries Search Console already shows. To be re-measured in Search Console in 2 to 4 weeks.
3. Internal links that point at slash-less URLs created duplicate crawl paths and diluted link signals.

## Changes made on 23 Oct 2026

1. Posting schedule: one post a day from 23 Oct (was four a week). The eight queued posts now run 23 to 30 Oct.
2. Internal links now use the canonical trailing-slash URL everywhere (services, blog, work, footer, in-body links), removing a redirect hop per click.
3. Homepage "Popular guides" block links to the six cost and comparison guides Google is already testing.
4. UK-intent meta titles on seven cost and checklist posts; `dateModified` bumped.

## Next actions that need the owner

- The queue is empty after 30 Oct. Write the next posts from the query list above (monthly website management, brand guidelines, GoHighLevel agency UK, Shopify fees).
- Backlinks: Google Business Profile, directory listings, client mentions. Nothing in code replaces this.
- Re-run this review on or after 6 Nov for a like-for-like comparison.
- Request removal of the old crawl URLs in Search Console (optional; they already return 410).
