import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  readonly className?: string;
  readonly showAt?: number; // Percentage of page scroll to show the button
}

export function BackToTop({ className = '', showAt = 40 }: BackToTopProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setIsVisible(scrollPercentage >= showAt);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAt]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <div className={`fixed bottom-24 right-6 z-40 ${className}`}>
      <Button
        onClick={scrollToTop}
        className="h-12 w-12 rounded-full bg-villa-olive/90 hover:bg-villa-olive shadow-lg hover:shadow-xl transition-all duration-300 group"
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp size={20} className="text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
}

export default BackToTop;
