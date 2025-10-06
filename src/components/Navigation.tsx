import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';

// Import logo
import logo from '/villa-olivia-clara-logo.webp';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSifnosOpen, setIsSifnosOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Keyboard navigation
  useKeyboardNavigation({
    onEscape: () => {
      setIsOpen(false);
      setIsSifnosOpen(false);
    },
    enabled: true
  });

  const navigationItems = [
    { text: t('nav.villa'), link: '/villa' },
    { text: t('nav.blog'), link: '/blog' },
    { text: t('nav.reviews'), link: '/reviews' },
    { text: t('nav.contact'), link: '/contact' },
  ];

  const sifnosSubmenu = [
    { text: t('nav.sifnosGuide'), link: '/sifnos' },
    { text: t('nav.sifnosBeaches'), link: '/sifnos/beaches' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isSifnosActive = () => location.pathname.startsWith('/sifnos');

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Villa Olivia Clara" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Our Villa */}
            <NavLink
              to="/villa"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? 'text-villa-olive font-semibold' : 'text-foreground'
                }`
              }
            >
              {t('nav.villa')}
            </NavLink>

            {/* Discover Sifnos Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSifnosOpen(!isSifnosOpen)}
                className={`flex items-center text-base font-medium ${
                  isSifnosActive()
                    ? 'text-villa-olive font-semibold'
                    : 'text-foreground'
                }`}
              >
                {t('nav.discoverSifnos')}
                <ChevronDown size={16} className={`ml-1 ${isSifnosOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSifnosOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border-villa-stone shadow-elegant z-50 rounded-lg">
                  {sifnosSubmenu.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      className={`block w-full px-4 py-2 text-sm ${
                        isActive(item.link)
                          ? 'text-villa-olive bg-villa-olive-light font-medium'
                          : 'text-foreground'
                      }`}
                      onClick={() => setIsSifnosOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guest Reviews */}
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? 'text-villa-olive font-semibold' : 'text-foreground'
                }`
              }
            >
              {t('nav.reviews')}
            </NavLink>

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? 'text-villa-olive font-semibold' : 'text-foreground'
                }`
              }
            >
              {t('nav.blog')}
            </NavLink>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? 'text-villa-olive font-semibold' : 'text-foreground'
                }`
              }
            >
              {t('nav.contact')}
            </NavLink>


            {/* Book Now */}
            <Button asChild variant="villa" size="default">
              <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">{t('nav.bookNow')}</a>
            </Button>
          </div>

          {/* Mobile menu button and Book Now */}
          <div className="md:hidden flex items-center gap-2">
            <Button asChild variant="villa" size="sm">
              <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">{t('nav.bookNow')}</a>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {/* Our Villa */}
              <Link
                to="/villa"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium ${
                  isActive('/villa')
                    ? 'text-villa-olive bg-villa-olive-light'
                    : 'text-foreground'
                }`}
              >
                {t('nav.villa')}
              </Link>

              {/* Mobile Sifnos Submenu */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">{t('nav.discoverSifnos')}</div>
                <div className="ml-4 space-y-1">
                  {sifnosSubmenu.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-sm rounded ${
                        isActive(item.link)
                          ? 'text-villa-olive bg-villa-olive-light'
                          : 'text-foreground'
                      }`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Guest Reviews */}
              <Link
                to="/reviews"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium ${
                  isActive('/reviews')
                    ? 'text-villa-olive bg-villa-olive-light'
                    : 'text-foreground'
                }`}
              >
                {t('nav.reviews')}
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium ${
                  isActive('/blog')
                    ? 'text-villa-olive bg-villa-olive-light'
                    : 'text-foreground'
                }`}
              >
                {t('nav.blog')}
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 text-base font-medium ${
                  isActive('/contact')
                    ? 'text-villa-olive bg-villa-olive-light'
                    : 'text-foreground'
                }`}
              >
                {t('nav.contact')}
              </Link>


            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;