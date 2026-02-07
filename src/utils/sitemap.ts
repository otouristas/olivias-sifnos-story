// Sitemap generation utility
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Generate main sitemap index that references language-specific sitemaps
export const generateSitemapIndex = (): string => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-en.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-el.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-fr.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-it.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

// Generate language-specific sitemap
export const generateLanguageSitemap = (language: 'en' | 'el' | 'fr' | 'it'): string => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  const currentDate = new Date().toISOString().split('T')[0];
  const langPrefix = language === 'en' ? '' : `/${language}`;
  
  const pages = [
    // High Priority - Main Pages
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/villa', priority: 0.95, changefreq: 'weekly' },
    
    // Medium-High Priority - Content Pages
    { path: '/reviews', priority: 0.85, changefreq: 'weekly' },
    { path: '/sifnos', priority: 0.85, changefreq: 'monthly' },
    { path: '/sifnos/beaches', priority: 0.80, changefreq: 'monthly' },
    { path: '/sifnos/boat-tours', priority: 0.75, changefreq: 'monthly' },
    { path: '/contact', priority: 0.80, changefreq: 'yearly' },
    { path: '/faq', priority: 0.75, changefreq: 'monthly' },
    
    // Blog Posts
    { path: '/blog', priority: 0.75, changefreq: 'weekly' },
    { path: '/blog/ultimate-guide-sifnos-greece-luxury-villa-vacation', priority: 0.70, changefreq: 'monthly' },
    { path: '/blog/luxury-villa-vs-hotel-sifnos-greece-complete-comparison', priority: 0.70, changefreq: 'monthly' },
    
    // Lower Priority
    { path: '/sustainability', priority: 0.60, changefreq: 'yearly' },
    { path: '/privacy-policy', priority: 0.30, changefreq: 'yearly' },
    { path: '/cookie-policy', priority: 0.30, changefreq: 'yearly' },
    { path: '/terms-of-service', priority: 0.30, changefreq: 'yearly' },
    { path: '/rental-conditions', priority: 0.50, changefreq: 'yearly' }
  ];
  
  const urls = pages.map(page => {
    const mainUrl = `${baseUrl}${langPrefix}${page.path}`;
    
    return `  <url>
    <loc>${mainUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.path}"/>
    <xhtml:link rel="alternate" hreflang="el" href="${baseUrl}/el${page.path}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr${page.path}"/>
    <xhtml:link rel="alternate" hreflang="it" href="${baseUrl}/it${page.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.path}"/>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
};

// Main sitemap generation (now calls generateSitemapIndex)
export const generateSitemap = (): string => {
  return generateSitemapIndex();
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  
  return `# Villa Olivia Clara - Robots.txt
# Last Updated: ${new Date().toISOString().split('T')[0]}

# Allow all crawlers
User-agent: *
Allow: /

# Crawl-delay for well-behaved bots
Crawl-delay: 1

# Disallow admin and system paths
Disallow: /admin/
Disallow: /_*

# Language-specific sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-en.xml
Sitemap: ${baseUrl}/sitemap-el.xml
Sitemap: ${baseUrl}/sitemap-fr.xml
Sitemap: ${baseUrl}/sitemap-it.xml

# Specific bot configurations
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1`;
};
