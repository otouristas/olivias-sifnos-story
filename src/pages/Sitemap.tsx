import { useEffect } from 'react';
import { generateSitemap } from '@/utils/sitemap';

const Sitemap = () => {
  useEffect(() => {
    const sitemap = generateSitemap();
    
    // Set content type and return sitemap
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // For development, we'll show the sitemap content
    // In production, this would be handled by the server
    console.log('Generated Sitemap:', sitemap);
    
    return () => URL.revokeObjectURL(url);
  }, []);

  return null; // This component doesn't render anything
};

export default Sitemap;
