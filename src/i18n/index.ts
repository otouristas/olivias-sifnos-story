import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import el from './locales/el.json';
import it from './locales/it.json';
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  el: { translation: el },
  it: { translation: it },
  fr: { translation: fr }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'el', 'fr', 'it'],
    nonExplicitSupportedLngs: false,
    load: 'languageOnly',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      convertDetectedLanguage: (lng: string) => lng.split('-')[0]
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
