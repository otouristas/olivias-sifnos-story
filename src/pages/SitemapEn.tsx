import { useEffect } from 'react';
import { generateLanguageSitemap } from '@/utils/sitemap';

const SitemapEn = () => {
  useEffect(() => {
    const sitemap = generateLanguageSitemap('en');
    console.log('Generated English Sitemap:', sitemap);
  }, []);
  
  return null;
};

export default SitemapEn;
