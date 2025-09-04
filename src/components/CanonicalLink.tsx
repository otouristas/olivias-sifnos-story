import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL: string = import.meta.env.VITE_SITE_URL ?? 'https://villaoliviaclara.com';

export default function CanonicalLink(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    const existing: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    const href: string = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
    if (existing) {
      existing.setAttribute('href', href);
      return;
    }
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }, [pathname]);

  return null;
}


