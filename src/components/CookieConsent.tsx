import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('villa-cookie-consent');
    if (!consent) {
      // Show after a short delay to not interfere with page load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('villa-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('villa-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-slide-in-right">
      <Card className="border-villa-stone shadow-elegant bg-white/95 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="text-villa-olive flex-shrink-0 mt-1" size={20} />
            <div className="flex-1">
              <h3 className="font-semibold text-villa-olive mb-2">We use cookies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            <button
              onClick={handleDecline}
              className="text-muted-foreground hover:text-villa-olive transition-colors p-1"
              aria-label="Close cookie consent"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link 
              to="/privacy-policy" 
              className="hover:text-villa-olive transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              to="/cookie-policy" 
              className="hover:text-villa-olive transition-colors underline"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleAccept} 
              variant="villa" 
              size="sm" 
              className="flex-1"
            >
              Accept
            </Button>
            <Button 
              onClick={handleDecline} 
              variant="villa-outline" 
              size="sm"
              className="border-villa-stone text-muted-foreground hover:bg-villa-olive-light/50 hover:text-villa-olive"
            >
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;