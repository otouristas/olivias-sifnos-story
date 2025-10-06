import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export const ImageZoom = ({ src, alt, className, children }: ImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={cn("relative group cursor-pointer", className)}
        onClick={() => setIsOpen(true)}
      >
        {children || (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ZoomIn size={20} className="text-villa-olive" />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-contain"
            />
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-0"
              size="icon"
            >
              <X size={20} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageZoom;
