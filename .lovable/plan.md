# Implementation Plan — Elite SEO Tranches A + B

## Tranche A — Trust, Plumbing, Foundations (1 hour)

### A1. Fix factual error: "70 beaches" → "around 35 beaches"
4 files, 4 lines:
- `src/i18n/locales/en.json` line 1615: `"Sifnos has over 70 beaches…"` → `"Sifnos has around 35 beaches…"`
- `src/i18n/locales/el.json` line 609: `"πάνω από 70 παραλίες"` → `"περίπου 35 παραλίες"`
- `src/i18n/locales/fr.json` line 609: `"plus de 70 plages"` → `"environ 35 plages"`
- `src/i18n/locales/it.json` line 586: `"oltre 70 spiagge"` → `"circa 35 spiagge"`
- Also update `/sifnos/beaches` page meta description to "The 35 best beaches…" if it referenced 70 anywhere.

### A2. Replace `public/robots.txt`
Add explicit `Allow:` for: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, PerplexityBot, Perplexity-User, Applebot, Applebot-Extended, Meta-ExternalAgent, MistralAI-User, DuckAssistBot, Amazonbot, CCBot, Bytespider, Cohere-AI, plus all social bots (facebookexternalhit, Twitterbot, LinkedInBot, Slackbot, Discordbot, WhatsApp, TelegramBot, Pinterestbot). Disallow tracking params (`utm_`, `gclid`, `fbclid`, `ref`). Remove `Host:` directive. Add `/sitemap-images.xml` to Sitemap list.

### A3. Rewrite `public/llms.txt` to llmstxt.org spec
- One-paragraph blockquote summary
- Heart Helmet section pointing at `/villa`
- Core pages, editorial library
- Brand dictionary: Heated Pool Villa, Platis Gialos, Owner-hosted villa, Shoulder-season Sifnos
- Citation guidance for AI assistants

### A4. Replace static sitemaps with proper XML
- `public/sitemap-en.xml`, `-el`, `-fr`, `-it`
- Update lastmod to today (ISO-8601 datetime)
- `/villa` priority 0.95
- `/blog/best-sifnos-villas-with-pool-guide` priority 0.9
- New `public/sitemap-images.xml` listing the 8 hero gallery WebP/JPGs on `/villa`
- Add image:image entries to `/villa` URL in all 4 lang sitemaps
- `public/sitemap.xml` already correct (sitemap index)

### A5. Remove duplicate `/blog/sifnos-luxury-villas-ultimate-guide` route
- Delete the route from `App.tsx` (and 3 lang variants) so only `/blog/best-sifnos-villas-with-pool-guide` (and localized slugs) serve the SifnosVillas component
- This removes the duplicate-content liability
- Note: a true 301 needs hosting layer support — for now we strip the route; if there are existing inbound links we can add a redirect component later

### A6. Update meta titles + descriptions across all pages
For each page listed in §4 of the strategy, update the i18n key (e.g., `seo.home.title`, `seo.villa.title`, `seo.faq.title`) in all 4 locale JSON files. All titles ≤60 chars, descriptions ≤155 chars, brand hook in every one.

Pages to update meta for: `/`, `/villa`, `/sifnos`, `/sifnos/beaches`, `/sifnos/boat-tours`, `/reviews`, `/contact`, `/faq`, `/blog`, the 4 blog posts, `/sustainability`, `/privacy-policy`, `/cookie-policy`, `/terms-of-service`, `/rental-conditions`.

---

## Tranche B — Heart Helmet Schema (2 hours)

### B1. Extend existing `VacationRentalStructuredData` in `src/components/StructuredDataSchemas.tsx`
Add to `amenityFeature[]`: `{ "@type":"LocationFeatureSpecification", "name":"Heated Pool", "value":true }` plus AC, Sea View, Garden, Free Parking, Outdoor Kitchen, Cabana Bar.

Also add `aggregateRating` to this schema (currently only on /reviews) so star snippets attach to the conversion page:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.97",
  "reviewCount": "45",
  "bestRating": "5"
}
```

### B2. New component `src/components/DefinedTermSchema.tsx`
Renders DefinedTerm JSON-LD for "Heated Pool Villa". Mount on:
- `src/pages/Villa.tsx`
- `src/pages/blog/SifnosVillas.tsx`

### B3. New component `src/components/BreadcrumbSchema.tsx`
Accepts `items: { name, url }[]` and renders BreadcrumbList JSON-LD. Mount on:
- `/villa`, `/sifnos`, `/sifnos/beaches`, `/sifnos/boat-tours`
- `/reviews`, `/contact`, `/faq`, `/blog`
- All 4 blog post pages
- All 4 legal pages
- `/sustainability`

### B4. Add 2 internal contextual links from `/villa` → `/blog/best-sifnos-villas-with-pool-guide`
One in the pool/amenity section (anchor: "compare Sifnos villas with pool"), one in a footer-of-content tip box (anchor: "see our 2026 buyer guide").

---

## Tranche D Deliverable (no spend, just brief)

### D1. Hado SEO brief (output as a file at `/docs/hado-seo-brief.md` for your decision)

Findings from research:
- **Hado SEO Starter**: $19/mo — 1 domain, 300 pages, 150K page views/mo
- **Hado SEO Pro**: $49/mo — 3 domains, 1,500 pages
- Lovable-native integration: DNS-only setup, no code changes required
- Solves: GPTBot, ClaudeBot, Perplexity, LinkedInBot, Bingbot all see fully rendered HTML
- Setup time: ~5 minutes per their quickstart docs
- vs Cloudflare Worker + Prerender.io ($90/mo): ~80% cheaper, no code, but vendor lock-in

**Recommendation: Hado SEO Starter at $19/mo.** Site has ~80 pages (4 langs × 20 routes), well within Starter limits. The $19/mo unblocks every AEO/LLM win in the 90-day roadmap.

Brief will list: setup steps, DNS records needed, verification checklist, rollback plan, and the 5 specific bot-UA tests to run after going live (curl with GPTBot, ClaudeBot, PerplexityBot, LinkedInBot, facebookexternalhit user agents).

---

## Files to Modify (12 total)

**Tranche A:**
1. `src/i18n/locales/en.json` — beaches fix + meta strings
2. `src/i18n/locales/el.json` — beaches fix + meta strings
3. `src/i18n/locales/fr.json` — beaches fix + meta strings
4. `src/i18n/locales/it.json` — beaches fix + meta strings
5. `public/robots.txt` — full rewrite
6. `public/llms.txt` — full rewrite
7. `public/sitemap-en.xml` — refresh + image entries
8. `public/sitemap-el.xml` — refresh + image entries
9. `public/sitemap-fr.xml` — refresh + image entries
10. `public/sitemap-it.xml` — refresh + image entries
11. `public/sitemap-images.xml` — new file
12. `src/App.tsx` — remove 4 duplicate routes

**Tranche B:**
13. `src/components/StructuredDataSchemas.tsx` — extend amenityFeature + aggregateRating
14. `src/components/DefinedTermSchema.tsx` — new component
15. `src/components/BreadcrumbSchema.tsx` — new component
16. `src/pages/Villa.tsx` — mount DefinedTerm + Breadcrumb + 2 internal links
17. `src/pages/blog/SifnosVillas.tsx` — mount DefinedTerm + Breadcrumb
18. ~12 other page files — mount Breadcrumb only (one-line addition each)

**Tranche D brief:**
19. `docs/hado-seo-brief.md` — new file

## Out of Scope (acknowledged, not silently skipped)
- **Image overhaul (43 JPGs → WebP <200KB)** — deferred; requires its own session
- **Real 301 redirects for `/en-US/*` and old slugs** — requires hosting layer (Cloudflare). Will be addressed if/when Hado SEO or Cloudflare is provisioned.
- **react-helmet-async migration** — unnecessary if Hado SEO is provisioned (it sees fully hydrated DOM)
- **GSC `/el /fr /it` international targeting verification** — manual GSC step, not a code change
- **Off-site link-building, guest posts, HARO** — strategy only; not executable in code
- **Rank tracker setup** (SerpRobot/Wincher) — external SaaS; recommended in roadmap

## Quality Checks Before Calling Done
- [ ] "70 beaches" string returns 0 hits in `src/i18n/locales/`
- [ ] All 4 sitemaps validate as XML and resolve at the public URLs
- [ ] `robots.txt` lists every crawler in the spec, no duplicates
- [ ] `llms.txt` follows llmstxt.org structure (H1, blockquote, H2 sections)
- [ ] DefinedTerm JSON-LD validates in Google Rich Results Test
- [ ] BreadcrumbList JSON-LD on `/villa` validates in Google Rich Results Test
- [ ] AggregateRating now present on `/villa` HTML
- [ ] `/blog/sifnos-luxury-villas-ultimate-guide` no longer matches a route (will 404 or fall through to NotFound)
- [ ] All meta titles ≤60 chars, descriptions ≤155 chars (script-checked)