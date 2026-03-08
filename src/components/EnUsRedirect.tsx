import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Redirects /en-US/* routes to /* (English default without prefix).
 * This fixes 404s caused by i18next detecting "en-US" locale.
 */
export default function EnUsRedirect(): JSX.Element | null {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith('/en-US')) {
      const newPath = location.pathname.replace('/en-US', '') || '/';
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
