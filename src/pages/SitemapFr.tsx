import { useEffect } from 'react';
import { generateLanguageSitemap } from '@/utils/sitemap';

const SitemapFr = () => {
  useEffect(() => {
    const sitemap = generateLanguageSitemap('fr');
    console.log('Generated French Sitemap:', sitemap);
  }, []);
  
  return null;
};

export default SitemapFr;
