import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye, Maximize2, X, Play, VolumeX, Volume2 } from 'lucide-react';

interface VirtualTourProps {
  readonly className?: string;
  readonly showInModal?: boolean;
  readonly autoplay?: boolean;
}

export function VirtualTour({ className = '', showInModal = false, autoplay = false }: VirtualTourProps): JSX.Element {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  
  const tourUrl = `https://my.thevivestia.com/tour/villa-olivia-clara${autoplay ? '?autoplay=1' : ''}`;

  const TourIframe = ({ isModal = false }: { isModal?: boolean }) => (
    <div className={`relative ${isModal ? 'aspect-video' : 'aspect-video'} w-full overflow-hidden rounded-lg bg-gray-100`}>
      <iframe
        src={tourUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        allow="autoplay; fullscreen; web-share; xr-spatial-tracking; gyroscope; accelerometer"
        title="Villa Olivia Clara 360° Virtual Tour"
        loading="lazy"
      />
      
      {/* Tour Controls Overlay */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Badge variant="secondary" className="bg-black/70 text-white border-0">
          <Eye size={12} className="mr-1" />
          360° Tour
        </Badge>
      </div>
      
      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <Card className="bg-black/70 border-0 text-white">
          <CardContent className="p-3 text-sm">
            <p className="flex items-center gap-2">
              <Play size={14} />
              Click and drag to explore • Use mouse wheel to zoom
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (showInModal) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="villa" size="lg" className={`${className} gap-2`}>
            <Eye size={20} />
            Take Virtual Tour
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-6xl w-full h-[80vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-villa-olive flex items-center gap-2">
              <Eye size={24} />
              Villa Olivia Clara - 360° Virtual Tour
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-2 h-full">
            <TourIframe isModal={true} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className={`${className}`}>
      <TourIframe />
    </div>
  );
}

// Standalone Virtual Tour Section Component
export function VirtualTourSection(): JSX.Element {
  return (
    <section id="virtual-tour" className="py-20 bg-gradient-subtle scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Eye className="text-villa-olive" size={32} />
            <h2 className="text-4xl font-bold text-villa-olive">Virtual Tour</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore every corner of Villa Olivia Clara from the comfort of your home. 
            Take an immersive 360° journey through our luxury villa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-villa-stone shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <VirtualTour />
            </CardContent>
          </Card>
          
          {/* Tour Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center">
                <Eye className="text-villa-olive" size={20} />
              </div>
              <h3 className="font-semibold text-villa-olive">360° Experience</h3>
              <p className="text-sm text-gray-600">Explore every room and outdoor space</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center">
                <Maximize2 className="text-villa-olive" size={20} />
              </div>
              <h3 className="font-semibold text-villa-olive">High Definition</h3>
              <p className="text-sm text-gray-600">Crystal clear, immersive quality</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-villa-olive-light rounded-full flex items-center justify-center">
                <Play className="text-villa-olive" size={20} />
              </div>
              <h3 className="font-semibold text-villa-olive">Interactive</h3>
              <p className="text-sm text-gray-600">Click, drag, and zoom to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
