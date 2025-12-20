import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageRouteProps {
  readonly children: React.ReactNode;
}

export const LanguageRoute = ({ children }: LanguageRouteProps): JSX.Element => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Detect language from URL path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    const validLangs = ['el', 'fr', 'it'];
    
    if (langFromPath && validLangs.includes(langFromPath)) {
      if (i18n.language !== langFromPath) {
        i18n.changeLanguage(langFromPath);
      }
    } else {
      // Default to English if no language or invalid language
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;
  }, [location.pathname, i18n]);

  return <>{children}</>;
};
