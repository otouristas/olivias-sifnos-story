import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (assuming ~100vh)
      const shouldShow = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-villa-olive/95 backdrop-blur-sm border-t border-villa-stone shadow-elegant animate-slide-in-right">
      <div className="p-4">
        <Button asChild variant="villa-outline" size="lg" className="w-full bg-white text-villa-olive hover:bg-villa-olive hover:text-white border-white">
          <Link to="/contact">
            Book Your Stay Now →
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyBookingBar;