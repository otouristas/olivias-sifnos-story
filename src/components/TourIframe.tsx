import React from 'react';

interface TourIframeProps {
  isModal?: boolean;
  autoplay?: boolean;
}

const TourIframe: React.FC<TourIframeProps> = ({ isModal = false, autoplay = false }) => {
  const tourUrl = `https://my.thevivestia.com/tour/villa-olivia-clara${autoplay ? '?autoplay=1' : ''}`;

  return (
    <div className={`relative ${isModal ? 'aspect-video' : 'aspect-video'} w-full overflow-hidden rounded-lg bg-muted`}>
      <iframe
        src={tourUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        allow="autoplay; fullscreen; web-share; xr-spatial-tracking; gyroscope; accelerometer"
        title="Villa Olivia Clara 360° Virtual Tour"
        loading="lazy"
      />
    </div>
  );
};

export default TourIframe;
