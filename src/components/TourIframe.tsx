import React from 'react';

interface TourIframeProps {
  isModal?: boolean;
  autoplay?: boolean;
}

const TourIframe: React.FC<TourIframeProps> = ({ isModal = false, autoplay = false }) => {
  const tourUrl = `https://my.thevivestia.com/tour/villa-olivia-clara${autoplay ? '?autoplay=1' : ''}`;

  return (
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
        <div className="bg-black/70 text-white border-0 px-2 py-1 rounded text-xs flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          360° Tour
        </div>
      </div>
    </div>
  );
};

export default TourIframe;
