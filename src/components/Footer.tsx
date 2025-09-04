import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart, ExternalLink } from 'lucide-react';

// Import logo
import logo from '/villa-olivia-clara-logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-villa-olive-light via-villa-olive-light to-sand opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <img 
              src={logo} 
              alt="Villa Olivia Clara" 
              className="h-20 w-auto mx-auto mb-6"
            />
            <p className="text-villa-olive text-lg font-medium mb-2">Your Luxury Escape in Sifnos</p>
            <p className="text-muted-foreground max-w-md mx-auto">
              Experience authentic Greek island living with modern luxury and warm hospitality
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4 flex items-center">
                <Heart size={18} className="mr-2" />
                Experience
              </h3>
              <div className="space-y-3">
                <Link to="/villa" className="flex items-center text-sm text-muted-foreground hover:text-villa-olive transition-colors group">
                  <span>Villa Tour</span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/reviews" className="flex items-center text-sm text-muted-foreground hover:text-villa-olive transition-colors group">
                  <span>Guest Stories</span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/sifnos" className="flex items-center text-sm text-muted-foreground hover:text-villa-olive transition-colors group">
                  <span>Discover Sifnos</span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/blog" className="flex items-center text-sm text-muted-foreground hover:text-villa-olive transition-colors group">
                  <span>Travel Blog</span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Legal & Info */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Information</h3>
              <div className="space-y-3">
                <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/cookie-policy" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/terms-of-service" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
                  Terms of Service
                </Link>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">Licensed Property</p>
                  <p className="text-xs text-muted-foreground">EOT: 1266595, 1266604</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Contact Elena</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-villa-olive mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium">Villa Olivia Clara</p>
                    <p>Platis Gialos, Sifnos</p>
                    <p>Cyclades, Greece</p>
                  </div>
                </div>
                
                <a 
                  href="mailto:elena@villaoliviaclara.com" 
                  className="flex items-center gap-3 text-sm text-villa-olive hover:text-villa-olive-dark transition-colors group"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="group-hover:underline">elena@villaoliviaclara.com</span>
                </a>
                
                <a 
                  href="tel:+306971919382" 
                  className="flex items-center gap-3 text-sm text-villa-olive hover:text-villa-olive-dark transition-colors group"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span className="group-hover:underline">+30 697 191 9382</span>
                </a>
              </div>
            </div>

            {/* Booking CTA */}
            <div>
              <h3 className="text-lg font-semibold text-villa-olive mb-4">Ready to Book?</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Start planning your perfect Sifnos getaway today
                </p>
                <a 
                  href="https://book.villaoliviaclara.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-villa-olive text-white text-sm font-medium rounded-lg hover:bg-villa-olive/90 transition-colors"
                >
                  Book Your Stay
                  <ExternalLink size={14} className="ml-2" />
                </a>
                <p className="text-xs text-muted-foreground">
                  Free cancellation • Best rate guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Branding */}
        <div className="border-t border-villa-olive/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Villa Olivia Clara. All rights reserved.
              </p>
            </div>

            {/* Branding */}
            <div className="text-center lg:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
                <a 
                  href="https://anotherseoGuru.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-villa-olive transition-colors group"
                >
                  <span>Designed & Developed by</span>
                  <span className="font-semibold group-hover:underline">AnotherSEOGuru</span>
                  <ExternalLink size={10} />
                </a>
                
                <span className="hidden sm:inline text-villa-olive/40">•</span>
                
                <a 
                  href="https://touristas.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-villa-olive transition-colors group"
                >
                  <span>Powered by</span>
                  <span className="font-semibold group-hover:underline">Touristas AI</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Centered Credits and Legal Info */}
          <div className="text-center space-y-3 pt-6 border-t border-villa-olive/10">
            <p className="text-xs text-muted-foreground">
              Sifnos Photo Credit: 
              <a 
                href="https://www.instagram.com/vivikofinaki/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 font-medium text-villa-olive hover:text-villa-olive-dark transition-colors hover:underline"
              >
                Vivi Kofinaki
              </a>
            </p>
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Villa Olivia Clara is a fully licensed property (EOT: 1266595, 1266604), registered in the Greek national registry of vacation rentals (MHTE: 1172K92001077301CRBAGRAA).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;