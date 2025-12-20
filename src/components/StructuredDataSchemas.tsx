import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
  id?: string;
}

export const StructuredDataWithId = ({ data, id = 'structured-data' }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = id;
    
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null;
};

// FAQ Page Structured Data
export const FAQStructuredData = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredDataWithId data={faqData} id="faq-structured-data" />;
};

// Article Structured Data for Blog Posts
export const ArticleStructuredData = ({ 
  title, 
  description, 
  author, 
  publishDate, 
  modifiedDate,
  slug,
  image,
  lang = 'en'
}: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  slug: string;
  image?: string;
  lang?: string;
}) => {
  const baseUrl = 'https://villaoliviaclara.com';
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `${baseUrl}${langPrefix}/blog/${slug}`,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "inLanguage": lang,
    "author": {
      "@type": "Person",
      "name": author,
      "url": `${baseUrl}/contact`
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
    "image": image || `${baseUrl}/villa-olivia-clara-logo.webp`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${langPrefix}/blog/${slug}`
    }
  };

  return <StructuredDataWithId data={articleData} id="article-structured-data" />;
};

// Vacation Rental Structured Data
export const VacationRentalStructuredData = ({ lang = 'en' }: { lang?: string }) => {
  const baseUrl = 'https://villaoliviaclara.com';
  
  const descriptions: Record<string, string> = {
    en: "Luxury villa in Sifnos, Greece with private pool, sea views, and concierge services. Accommodates up to 8 guests with 4 bedrooms and 4.5 bathrooms.",
    el: "Πολυτελής βίλα στη Σίφνο, Ελλάδα με ιδιωτική πισίνα, θέα στη θάλασσα και υπηρεσίες concierge. Φιλοξενεί έως 8 επισκέπτες με 4 υπνοδωμάτια και 4,5 μπάνια.",
    fr: "Villa de luxe à Sifnos, Grèce avec piscine privée, vue sur mer et services de conciergerie. Accueille jusqu'à 8 invités avec 4 chambres et 4,5 salles de bain.",
    it: "Villa di lusso a Sifnos, Grecia con piscina privata, vista mare e servizi di concierge. Ospita fino a 8 ospiti con 4 camere da letto e 4,5 bagni."
  };

  const rentalData = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": `${baseUrl}/villa`,
    "name": "Villa Olivia Clara",
    "description": descriptions[lang] || descriptions.en,
    "url": `${baseUrl}${lang === 'en' ? '' : `/${lang}`}/villa`,
    "image": [
      `${baseUrl}/villa-olivia-clara-logo.webp`
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
      { "@type": "LocationFeatureSpecification", "name": "Private Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Garden", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "BBQ", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Sea View", "value": true }
    ],
    "numberOfBedrooms": 4,
    "numberOfBathroomsTotal": 4.5,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 250,
      "unitCode": "MTK"
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 8
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "45",
      "bestRating": "5"
    },
    "priceRange": "$$$",
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "petsAllowed": false,
    "smokingAllowed": false
  };

  return <StructuredDataWithId data={rentalData} id="vacation-rental-structured-data" />;
};

// Review Aggregate Structured Data
export const ReviewAggregateStructuredData = () => {
  const baseUrl = 'https://villaoliviaclara.com';
  
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Villa Olivia Clara",
    "description": "Luxury villa accommodation in Sifnos, Greece",
    "url": `${baseUrl}/reviews`,
    "brand": {
      "@type": "Brand",
      "name": "Villa Olivia Clara"
    },
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
        "author": { "@type": "Person", "name": "Alexis" },
        "datePublished": "2024-08-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Wonderful stay at the Villa Olivia Clara! The house has a perfect location near Platis Gialos, walking distance, and an amazing view on the bay. No hesitation: the best villa in Sifnos."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Li-Chuen" },
        "datePublished": "2024-07-20",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We have literally had the most magical holiday at Elena's villa. The photos just don't do justice to this incredibly stunning home. Please do not hesitate to book!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maria" },
        "datePublished": "2024-06-10",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The villa exceeded all our expectations. The pool area is fantastic, the location is perfect, and Elena was an amazing host. We can't wait to come back!"
      }
    ]
  };

  return <StructuredDataWithId data={reviewData} id="review-structured-data" />;
};

// Organization Structured Data
export const OrganizationStructuredData = () => {
  const baseUrl = 'https://villaoliviaclara.com';
  
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Villa Olivia Clara",
    "url": baseUrl,
    "logo": `${baseUrl}/villa-olivia-clara-logo.webp`,
    "description": "Luxury villa rental in Sifnos, Greece",
    "email": "elena@villaoliviaclara.com",
    "telephone": "+30 697 191 9382",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Platis Gialos",
      "addressLocality": "Sifnos",
      "addressRegion": "Cyclades",
      "addressCountry": "GR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+30 697 191 9382",
      "contactType": "reservations",
      "email": "elena@villaoliviaclara.com",
      "availableLanguage": ["English", "Greek", "French", "Italian"]
    }
  };

  return <StructuredDataWithId data={orgData} id="organization-structured-data" />;
};

export default StructuredDataWithId;
