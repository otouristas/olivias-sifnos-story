import { useEffect } from 'react';
import { generateLanguageSitemap } from '@/utils/sitemap';

const SitemapIt = () => {
  useEffect(() => {
    const sitemap = generateLanguageSitemap('it');
    console.log('Generated Italian Sitemap:', sitemap);
  }, []);
  
  return null;
};

export default SitemapIt;
