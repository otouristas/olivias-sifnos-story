import React, { useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { trackVirtualTourConversion } from '@/utils/analytics';

// Lazy load the tour iframe component
const TourIframe = lazy(() => import('./TourIframe'));

interface VirtualTourProps {
  readonly className?: string;
  readonly showInModal?: boolean;
  readonly autoplay?: boolean;
}

export function VirtualTour({ className = '', showInModal = false, autoplay = false }: VirtualTourProps): JSX.Element {
  const { t } = useTranslation();

  const TourIframeComponent = ({ isModal = false }: { isModal?: boolean }) => (
    <Suspense fallback={
      <div className={`relative ${isModal ? 'aspect-video' : 'aspect-video'} w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center`}>
        <div className="text-muted-foreground">{t('virtualTour.loading', 'Loading virtual tour...')}</div>
      </div>
    }>
      <TourIframe isModal={isModal} autoplay={autoplay} />
    </Suspense>
  );

  if (showInModal) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="villa" 
            size="lg" 
            className={`${className} gap-2`}
            onClick={() => trackVirtualTourConversion('start')}
          >
            <Eye size={20} />
            {t('virtualTour.title')}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-xl font-bold text-villa-olive flex items-center gap-2">
              <Eye size={20} />
              {t('virtualTour.dialogTitle', 'Villa Olivia Clara - 360° Virtual Tour')}
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 pt-2 h-full">
            <TourIframeComponent isModal={true} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className={`${className}`}>
      <TourIframeComponent />
    </div>
  );
}

// Standalone Virtual Tour Section Component
export function VirtualTourSection(): JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="virtual-tour" className="py-20 bg-gradient-subtle scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Eye className="text-villa-olive" size={32} />
            <h2 className="text-4xl font-bold text-villa-olive">{t('virtualTour.title')}</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('virtualTour.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-villa-stone shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <VirtualTour />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
