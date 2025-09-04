import { Link } from 'react-router-dom';

// Import logo
import logo from '/villa-olivia-clara-logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-villa-olive-light border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                 {/* Logo Section */}
         <div className="text-center mb-8">
                       <img 
              src={logo} 
              alt="Villa Olivia Clara" 
              className="h-16 w-auto mx-auto mb-4"
            />
         </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Villa Olivia Clara */}
          <div>
                       <h3 className="text-lg font-semibold text-villa-olive mb-4">Villa Olivia Clara</h3>
           <div className="space-y-2">
             <Link to="/villa" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Take the Tour
             </Link>
             <Link to="/reviews" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Guest Reviews
             </Link>
             <Link to="/sifnos" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               About Sifnos
             </Link>
             <Link to="/contact" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Book Your Stay
             </Link>
           </div>
          </div>

          {/* Legal */}
          <div>
                       <h3 className="text-lg font-semibold text-villa-olive mb-4">Legal</h3>
           <div className="space-y-2">
             <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Privacy Policy
             </Link>
             <Link to="/cookie-policy" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Cookie Policy
             </Link>
             <Link to="/sustainability" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Sustainability
             </Link>
             <Link to="/rental-conditions" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               Rental Conditions
             </Link>
             <Link to="/faq" className="block text-sm text-muted-foreground hover:text-villa-olive transition-colors">
               FAQ
             </Link>
           </div>
          </div>

          {/* Contact */}
          <div>
                       <h3 className="text-lg font-semibold text-villa-olive mb-4">Contact</h3>
           <div className="text-sm text-muted-foreground space-y-1">
             <p className="font-medium">Villa Olivia Clara</p>
             <p>Platis Gialos, Sifnos</p>
             <p>Cyclades, Greece</p>
             <a 
               href="mailto:elena@villaoliviaclara.com" 
               className="text-villa-olive hover:text-villa-olive-dark transition-colors"
             >
               elena@villaoliviaclara.com
             </a>
             <a 
               href="tel:+306971919382" 
               className="text-villa-olive hover:text-villa-olive-dark transition-colors"
             >
               +30 697 191 9382
             </a>
           </div>
          </div>
        </div>

        {/* Bottom Footer */}
                 <div className="border-t border-villa-stone mt-8 pt-8 text-xs text-muted-foreground space-y-2">
          <p>Villa Olivia Clara is a fully licensed property (EOT: 1266595, 1266604), registered in the Greek national registry of vacation rentals (MHTE: 1172K92001077301CRBAGRAA).</p>
          <p>Sifnos Photo Credit: Vivi Kofinaki</p>
          <p>© {currentYear} Villa Olivia Clara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;