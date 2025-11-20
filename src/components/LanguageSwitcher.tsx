import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', nativeName: 'Ελληνικά' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', nativeName: 'Français' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = async (languageCode: string) => {
    console.log('Changing language to:', languageCode);
    try {
      await i18n.changeLanguage(languageCode);
      
      // Get current path without language prefix
      const currentPath = location.pathname.replace(/^\/(el|fr|it)/, '') || '/';
      
      // Navigate to new language URL
      if (languageCode === 'en') {
        navigate(currentPath);
      } else {
        navigate(`/${languageCode}${currentPath}`);
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-foreground hover:bg-white/20 min-w-[70px] data-[state=open]:bg-white/20"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-52 z-[100] bg-white/95 backdrop-blur-sm border border-villa-stone shadow-elegant rounded-lg p-2"
        sideOffset={8}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center justify-between cursor-pointer hover:bg-villa-olive/10 rounded-md px-3 py-2.5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-villa-olive">{language.nativeName}</span>
                <span className="text-xs text-muted-foreground">{language.name}</span>
              </div>
            </div>
            {i18n.language === language.code && (
              <Check className="h-4 w-4 text-villa-olive" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
