import { useEffect } from 'react';
import { generateLanguageSitemap } from '@/utils/sitemap';

const SitemapEl = () => {
  useEffect(() => {
    const sitemap = generateLanguageSitemap('el');
    console.log('Generated Greek Sitemap:', sitemap);
  }, []);
  
  return null;
};

export default SitemapEl;
