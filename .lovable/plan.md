

# SEO Audit & Fix Plan

## Critical Build Error (Must Fix First)

**File**: `src/components/OliviaClaraAI.tsx`, line 92

`generateAIResponse()` returns `{ response: string; followUpAction?; images? }` but is assigned directly to `content: string`. Fix: extract `.response` from the return value.

```typescript
content: generateAIResponse(userMessage.content).response,
```

---

## SEO Audit Findings

### Issue 1: FAQ Page - Massive Hardcoded English Content
**Severity**: HIGH

The FAQ page (`src/pages/FAQ.tsx`) has ALL body content hardcoded in English despite having translation keys in `en.json`. Lines 112-338 contain hardcoded paragraphs, headings, section titles like "Automatic and Manual Transmission", "Port Transfer Service", "Medical Emergencies", "Police Station", "Coast Guard", etc. None use `t()` calls.

**Fix**: Replace all hardcoded text in FAQ.tsx with `t()` calls using existing and new translation keys. Add corresponding translations to `el.json`, `fr.json`, `it.json`.

### Issue 2: FAQ Page - Missing New FAQ Items in Rendered Content
**Severity**: MEDIUM

Translation keys exist for `faq.bestVilla`, `faq.guests`, `faq.pool`, `faq.beachDistance`, `faq.vsHotel` but these are NOT rendered in the FAQ page component. They only exist in the `faqItems` array at top (for structured data) but the actual page sections don't include them. This means the keyword-rich FAQ content targeting "villa sifnos", "private pool", "villa vs hotel" is invisible to users.

**Fix**: Add rendered sections for these 5 new FAQ items in FAQ.tsx.

### Issue 3: SEO Meta Tags Not Optimized for GSC Keywords
**Severity**: HIGH

Current titles/descriptions don't target the high-performing GSC keywords effectively:
- `seo.home.title`: Missing "Best", missing "Family", missing "Pool" prominently
- `seo.home.keywords`: Missing key terms like "sifnos hotel alternative", "best villas sifnos", "sifnos houses"
- Greek locale (`el.json`): SEO keys likely still in English or poorly optimized for Greek search terms like "σιφνος διαμονη"

**Fix**: Update SEO keys in all 4 locale files with keyword-optimized titles/descriptions.

### Issue 4: FAQ "Contact Us" Button Hardcoded
**Severity**: LOW

Line 354: `"Contact Us"` and line 360: `"Email Us"` are hardcoded English.

### Issue 5: OG Image URLs Point to /src/ Path
**Severity**: MEDIUM

FAQ page line 60: `ogImage` points to `/src/assets/...` which is a dev path, not accessible in production builds. Should use a public URL.

**Fix**: Use proper public URL or imported asset for ogImage.

---

## Implementation Plan

### Task 1: Fix Build Error in OliviaClaraAI.tsx
- Extract `.response` from `generateAIResponse()` return value on line 92

### Task 2: Fix FAQ Hardcoded Content
- Replace all hardcoded English text in FAQ.tsx (lines 112-362) with `t()` translation calls
- Add 5 new FAQ sections (bestVilla, guests, pool, beachDistance, vsHotel) as rendered content
- Replace hardcoded "Contact Us" / "Email Us" buttons with `t()` calls
- Add all new translation keys to `el.json`, `fr.json`, `it.json` with proper native translations

### Task 3: Optimize SEO Meta Tags
- Update `seo.home` in all 4 locales with GSC-targeted keywords
- Update `seo.villa` similarly
- Update `seo.faq`, `seo.reviews` with better keyword targeting
- Ensure Greek SEO keys use Greek text targeting "σιφνος διαμονη", "πολυτελης βιλα σιφνος"
- Ensure French/Italian SEO keys use native language

### Task 4: Fix OG Image Paths
- Replace `/src/assets/...` paths in ogImage props across pages with proper public URLs

### Files to Modify
- `src/components/OliviaClaraAI.tsx` - Fix build error
- `src/pages/FAQ.tsx` - Internationalize all content + add new FAQ sections
- `src/i18n/locales/en.json` - Add FAQ body keys + optimize SEO meta
- `src/i18n/locales/el.json` - Greek translations for FAQ + Greek SEO meta
- `src/i18n/locales/fr.json` - French translations for FAQ + French SEO meta
- `src/i18n/locales/it.json` - Italian translations for FAQ + Italian SEO meta

