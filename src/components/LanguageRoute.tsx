import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageRouteProps {
  readonly children: React.ReactNode;
}

export const LanguageRoute = ({ children }: LanguageRouteProps): JSX.Element => {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Set language based on URL
    if (lang && ['el', 'fr', 'it'].includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // Default to English if no language or invalid language
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [lang, i18n, location.pathname]);

  return <>{children}</>;
};
