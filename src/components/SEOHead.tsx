import { useEffect } from 'react';

interface AlternateLanguage {
  readonly lang: string;
  readonly url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  alternateLanguages?: readonly AlternateLanguage[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = '/villa-olivia-clara-logo.webp',
  canonicalUrl,
  noIndex = false,
  alternateLanguages = []
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    updateMetaTag('name', 'description', description);

    // Update or create meta keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', 'website');

    if (canonicalUrl) {
      updateMetaTag('property', 'og:url', canonicalUrl);
    }

    // Add og:locale for multilingual SEO
    const currentLang = document.documentElement.lang || 'en';
    const localeMap: Record<string, string> = {
      'en': 'en_US',
      'el': 'el_GR',
      'fr': 'fr_FR',
      'it': 'it_IT'
    };
    updateMetaTag('property', 'og:locale', localeMap[currentLang] || 'en_US');

    // Remove existing og:locale:alternate tags
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());

    // Add og:locale:alternate for other languages
    const otherLocales = Object.entries(localeMap).filter(([lang]) => lang !== currentLang);
    otherLocales.forEach(([, locale]) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale:alternate');
      meta.content = locale;
      document.head.appendChild(meta);
    });

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Update canonical URL
    if (canonicalUrl) {
      updateCanonicalUrl(canonicalUrl);
    }

    // Handle no-index
    if (noIndex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      updateMetaTag('name', 'robots', 'index, follow');
    }

    // Add hreflang tags for multilingual SEO
    if (alternateLanguages.length > 0) {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

      // Add new hreflang tags
      alternateLanguages.forEach(({ lang, url }) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = url;
        document.head.appendChild(link);
      });
    }
  }, [title, description, keywords, ogImage, canonicalUrl, noIndex, alternateLanguages]);

  return null;
}

function updateMetaTag(attribute: string, value: string, content: string) {
  const selector = `meta[${attribute}="${value}"]`;
  let meta = document.querySelector(selector) as HTMLMetaElement;

  if (meta) {
    meta.content = content;
  } else {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    meta.content = content;
    document.head.appendChild(meta);
  }
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (canonical) {
    canonical.href = url;
  } else {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    document.head.appendChild(canonical);
  }
}
