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
            {navigationItems.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive
                      ? 'text-villa-olive font-semibold'
                      : 'text-foreground hover:text-villa-olive'
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
            
            {/* Sifnos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center text-base font-medium transition-colors ${
                    isSifnosActive()
                      ? 'text-villa-olive font-semibold'
                      : 'text-foreground hover:text-villa-olive'
                  }`}
                >
                  Discover Sifnos
                  <ChevronDown size={16} className="ml-1 transition-transform" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-villa-stone shadow-elegant z-50">
                {sifnosSubmenu.map((item) => (
                  <DropdownMenuItem key={item.link} asChild>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `w-full px-4 py-2 text-sm transition-colors cursor-pointer ${
                          isActive
                            ? 'text-villa-olive bg-villa-olive-light font-medium'
                            : 'text-foreground hover:text-villa-olive hover:bg-villa-olive-light/50'
                        }`
                      }
                    >
                      {item.text}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button asChild variant="villa" size="default">
              <Link to="/contact">Book Now</Link>
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
              
              {/* Mobile Sifnos Submenu */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Discover Sifnos</div>
                <div className="ml-4 space-y-1">
                  {sifnosSubmenu.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-sm transition-colors rounded ${
                        isActive(item.link)
                          ? 'text-villa-olive bg-villa-olive-light'
                          : 'text-foreground hover:text-villa-olive hover:bg-villa-olive-light/50'
                      }`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2">
                <Button asChild variant="villa" size="sm" className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Now
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