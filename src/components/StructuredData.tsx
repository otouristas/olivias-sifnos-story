import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    // Create script element for structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';
    
    // Remove existing structured data script if it exists
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add to document head
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

// Pre-configured structured data components
export const VillaStructuredData = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  
  const villaData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${baseUrl}/villa`,
    "name": "Villa Olivia Clara",
    "description": "Luxury villa in Sifnos, Greece with private pool, sea views, and concierge services. Accommodates up to 8 guests with 4 bedrooms and 4.5 bathrooms.",
    "url": `${baseUrl}/villa`,
    "image": [
      `${baseUrl}/villa-olivia-clara-logo.webp`,
      `${baseUrl}/villa-olivia-clara-intro-video.mp4`
    ],
    "telephone": "+30 697 191 9382",
    "email": "elena@villaoliviaclara.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Platis Gialos",
      "addressLocality": "Sifnos",
      "addressRegion": "Cyclades",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.929896260376985",
      "longitude": "24.72047107638427"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kitchen",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Garden",
        "value": true
      }
    ],
    "numberOfRooms": 4,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 8
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "priceRange": "$$$",
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "petsAllowed": false,
    "smokingAllowed": false,
    "sameAs": [
      "https://www.booking.com/villa-olivia-clara",
      "https://www.airbnb.com/rooms/villa-olivia-clara"
    ]
  };

  return <StructuredData data={villaData} />;
};

export const ReviewsStructuredData = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  
  const reviewsData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Villa Olivia Clara",
    "description": "Luxury villa accommodation in Sifnos, Greece",
    "url": `${baseUrl}/villa`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "45",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Alexis"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Wonderful stay at the Villa Olivia Clara! The house has a perfect location near Platis Gialos, walking distance, and an amazing view on the bay. No hesitation: the best villa in Sifnos."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Li-Chuen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We have literally had the most magical holiday at Elena's villa. The photos just don't do justice to this incredibly stunning home. Please do not hesitate to book!"
      }
    ]
  };

  return <StructuredData data={reviewsData} />;
};

export const BlogStructuredData = ({ 
  title, 
  description, 
  author, 
  publishDate, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  slug: string;
}) => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  
  const blogData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `${baseUrl}/blog/${slug}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Villa Olivia Clara",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/villa-olivia-clara-logo.webp`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    }
  };

  return <StructuredData data={blogData} />;
};

export const BreadcrumbStructuredData = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <StructuredData data={breadcrumbData} />;
};

export const LocalBusinessStructuredData = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    "name": "Villa Olivia Clara",
    "description": "Luxury villa rental in Sifnos, Greece offering private pool, sea views, and concierge services",
    "url": baseUrl,
    "telephone": "+30 697 191 9382",
    "email": "elena@villaoliviaclara.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Platis Gialos",
      "addressLocality": "Sifnos",
      "addressRegion": "Cyclades",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.929896260376985",
      "longitude": "24.72047107638427"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$$",
    "image": `${baseUrl}/villa-olivia-clara-logo.webp`,
    "logo": `${baseUrl}/villa-olivia-clara-logo.webp`
  };

  return <StructuredData data={businessData} />;
};

export default StructuredData;
