import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

// Import logo
import logo from '/villa-olivia-clara-logo.webp';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSifnosOpen, setIsSifnosOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { text: 'Our Villa', link: '/villa' },
    { text: 'Blog', link: '/blog' },
    { text: 'Guest Reviews', link: '/reviews' },
    { text: 'Contact Us', link: '/contact' },
  ];

  const sifnosSubmenu = [
    { text: 'Sifnos Island Guide', link: '/sifnos' },
    { text: 'Sifnos Beaches', link: '/sifnos/beaches' },
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
              Our Villa
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
                Discover Sifnos
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
              Guest Reviews
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
              Blog
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
              Contact Us
            </NavLink>

            {/* Book Now */}
            <Button asChild variant="villa" size="default">
              <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                Our Villa
              </Link>

              {/* Mobile Sifnos Submenu */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Discover Sifnos</div>
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
                Guest Reviews
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
                Blog
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
                Contact Us
              </Link>

              <div className="px-3 py-2">
                <Button asChild variant="villa" size="sm" className="w-full">
                  <a href="https://book.villaoliviaclara.com/" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
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