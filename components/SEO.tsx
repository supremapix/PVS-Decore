import React, { useEffect } from 'react';
import { CONTACT_PHONE, CONTACT_ADDRESS, GEO_COORDINATES, TESTIMONIALS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'localbusiness' | 'product' | 'service';
  location?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  url, 
  type = 'website', 
  location,
  image = 'https://images.unsplash.com/photo-1581858726768-758a03361df9?auto=format&fit=crop&q=80&w=1200' 
}) => {
  
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [title, description]);

  // Generate standard schema reviews
  const reviewSchema = TESTIMONIALS.slice(0, 5).map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewBody": t.text
  }));

  let schema: any = {
    "@context": "https://schema.org",
    "image": image,
    "url": "https://pvsdecore.com.br" + url,
    "description": description,
  };

  const businessInfo = {
    "@type": "HomeAndConstructionBusiness",
    "name": "PVS Decore",
    "telephone": CONTACT_PHONE,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location || "São José dos Pinhais",
      "addressRegion": "PR",
      "addressCountry": "BR",
      "streetAddress": CONTACT_ADDRESS
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GEO_COORDINATES.lat,
      "longitude": GEO_COORDINATES.long
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "review": reviewSchema,
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
    }
  };

  if (type === 'product') {
    schema = {
      ...schema,
      "@type": "Product",
      "name": title,
      "brand": { "@type": "Brand", "name": "PVS Decore" },
      "offers": {
        "@type": "Offer",
        "url": "https://pvsdecore.com.br" + url,
        "priceCurrency": "BRL",
        "price": "0.00", // Call for price
        "availability": "https://schema.org/InStock",
        "seller": businessInfo
      },
      "review": reviewSchema
    };
  } else if (type === 'service') {
    schema = {
      ...schema,
      "@type": "Service",
      "name": title,
      "provider": businessInfo,
      "areaServed": {
        "@type": "City",
        "name": "Curitiba e Região Metropolitana"
      }
    };
  } else {
    // Default to Business schema for homepage/locations
    schema = { ...schema, ...businessInfo };
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SEO;