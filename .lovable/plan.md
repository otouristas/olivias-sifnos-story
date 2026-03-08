

# SEO Audit Fix Plan

## Root Cause Analysis

The Ahrefs issues (non-canonical in sitemap, hreflang-to-non-canonical, canonical without inlinks) all share ONE root cause: **every page hardcodes `canonicalUrl` to the English URL** (e.g., `canonicalUrl="https://villaoliviaclara.com/villa"`), so when `/el/villa` is visited, its canonical points to `/villa` instead of itself. Meanwhile, the `CanonicalLink` component in App.tsx tries to set canonical to the current path, creating a race condition.

## Fixes

### 1. Remove CanonicalLink from App.tsx
Delete the `<CanonicalLink />` component from App.tsx. Let SEOHead handle all canonical logic — having two systems fight over the canonical tag is the core bug.

### 2. Make SEOHead Language-Aware (All Pages)
Every page currently hardcodes `canonicalUrl="https://villaoliviaclara.com/..."` (English only). Fix: compute canonical dynamically using the current language prefix. Each language version self-canonicalizes.

**Pages to update** (13 files): Index, Villa, Sifnos, SifnosBeaches, Activity, Reviews, Contact, Blog, FAQ, Sustainability, blog/SifnosGuide, blog/VillaVsHotel, NotFound.

Example pattern:
```tsx
const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
canonicalUrl={`https://villaoliviaclara.com${langPrefix}/villa`}
```

### 3. Shorten Meta Descriptions to ≤155 Characters
19 pages flagged. The main culprits from locale files:
- `seo.home.description` (192 chars) → trim to ~155
- `seo.villa.description` (192 chars) → trim
- `seo.sifnos.description` (189 chars) → trim
- `seo.beaches.description` (178 chars) → trim
- `seo.contact.description` (170 chars) → trim
- `privacy.subtitle` (209 chars) → trim
- `cookies.intro` (235 chars) → trim
- `rental.intro` (274 chars) → trim

Update in all 4 locale files (en.json, el.json, fr.json, it.json).

### 4. Fix OG Image Paths
Multiple pages use broken `/src/assets/...` URLs. Replace with proper public paths or imported asset references:
- Index, Villa, Reviews, Contact, Blog, Sifnos, SifnosBeaches, Activity, Sustainability, NotFound, blog posts

### 5. Add Internal Links to FAQ & Sustainability
Add FAQ link to the main navigation items array in Navigation.tsx so it gets crawled from every page (not just footer).

### Files Modified
- `src/App.tsx` — remove CanonicalLink
- `src/components/Navigation.tsx` — add FAQ to nav
- `src/pages/Index.tsx` — dynamic canonical + fix ogImage
- `src/pages/Villa.tsx` — dynamic canonical + fix ogImage
- `src/pages/Reviews.tsx` — dynamic canonical + fix ogImage
- `src/pages/Contact.tsx` — dynamic canonical + fix ogImage
- `src/pages/Blog.tsx` — fix ogImage (already dynamic canonical)
- `src/pages/FAQ.tsx` — dynamic canonical
- `src/pages/Sustainability.tsx` — dynamic canonical + fix ogImage
- `src/pages/Sifnos.tsx` — dynamic canonical + fix ogImage
- `src/pages/SifnosBeaches.tsx` — dynamic canonical + fix ogImage
- `src/pages/Activity.tsx` — dynamic canonical + fix ogImage
- `src/pages/NotFound.tsx` — fix ogImage
- `src/pages/blog/SifnosGuide.tsx` — dynamic canonical + fix ogImage
- `src/pages/blog/VillaVsHotel.tsx` — dynamic canonical + fix ogImage
- `src/i18n/locales/en.json` — shorten meta descriptions
- `src/i18n/locales/el.json` — shorten meta descriptions
- `src/i18n/locales/fr.json` — shorten meta descriptions
- `src/i18n/locales/it.json` — shorten meta descriptions

### Not Fixable in Lovable
- **Large image file sizes** (43 JPGs, 1-2.5MB each): These need external optimization (e.g., Squoosh, TinyPNG) and re-upload as WebP. Cannot compress images within Lovable's tooling.

