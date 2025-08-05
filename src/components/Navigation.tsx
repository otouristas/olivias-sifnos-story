import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { text: 'Our Villa', link: '/villa' },
    { text: 'Discover Sifnos', link: '/sifnos' },
    { text: 'Guest Reviews', link: '/reviews' },
    { text: 'Contact Us', link: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-villa-olive">
            Villa Olivia Clara
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.link)
                    ? 'text-villa-olive'
                    : 'text-foreground hover:text-villa-olive'
                }`}
              >
                {item.text}
              </Link>
            ))}
            <Button asChild variant="villa" size="sm">
              <Link to="/contact">Book Now →</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-villa-olive"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.link)
                      ? 'text-villa-olive bg-villa-olive-light'
                      : 'text-foreground hover:text-villa-olive hover:bg-villa-olive-light/50'
                  }`}
                >
                  {item.text}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild variant="villa" size="sm" className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Now →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;