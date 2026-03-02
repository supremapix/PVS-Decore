import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_PHONE, CONTACT_EMAIL, GEO_COORDINATES, TESTIMONIALS } from '../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'localbusiness' | 'product' | 'service';
  location?: string;
  image?: string;
  keywords?: string;
  breadcrumbs?: { name: string; url: string }[];
  additionalSchema?: any;
}

const SITE_URL = 'https://www.pvsdecore.com.br';
const DEFAULT_IMAGE = '/pisos-laminados-vinilicos-pvs-spj.png';

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  url,
  type = 'website',
  location,
  image = DEFAULT_IMAGE,
  keywords,
  breadcrumbs = [],
  additionalSchema
}) => {
  const fullUrl = `${SITE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const reviewSchema = TESTIMONIALS.slice(0, 5).map(t => ({
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": String(t.rating), "bestRating": "5" },
    "author": { "@type": "Person", "name": t.name },
    "reviewBody": t.text
  }));

  const businessInfo = {
    "@type": "HomeAndConstructionBusiness",
    "name": "PVS Decore",
    "telephone": `+${CONTACT_PHONE}`,
    "email": CONTACT_EMAIL,
    "priceRange": "$$",
    "url": SITE_URL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Izabel A Redentora, 1088",
      "addressLocality": location || "Sao Jose dos Pinhais",
      "addressRegion": "PR",
      "postalCode": "83030-500",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GEO_COORDINATES.lat,
      "longitude": GEO_COORDINATES.long
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "150" }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE_URL },
      ...breadcrumbs.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.name,
        "item": `${SITE_URL}${item.url}`
      }))
    ]
  };

  let schema: any;

  if (type === 'product') {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": title,
          "description": description,
          "image": fullImage,
          "url": fullUrl,
          "brand": { "@type": "Brand", "name": "PVS Decore" },
          "offers": {
            "@type": "AggregateOffer",
            "url": fullUrl,
            "priceCurrency": "BRL",
            "lowPrice": "90",
            "highPrice": "250",
            "offerCount": "10",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "PVS Decore", "url": SITE_URL }
          },
          "review": reviewSchema,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "150" }
        },
        breadcrumbSchema,
        businessInfo
      ]
    };
  } else if (type === 'service') {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": title,
          "description": description,
          "image": fullImage,
          "url": fullUrl,
          "provider": businessInfo,
          "areaServed": [
            { "@type": "City", "name": "Curitiba" },
            { "@type": "City", "name": "Sao Jose dos Pinhais" },
            { "@type": "City", "name": "Pinhais" },
            { "@type": "City", "name": "Colombo" },
            { "@type": "City", "name": "Araucaria" }
          ],
          "serviceType": title
        },
        breadcrumbSchema,
        businessInfo
      ]
    };
  } else if (location) {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...businessInfo,
          "name": `PVS Decore - ${location}`,
          "description": description,
          "image": fullImage,
          "url": fullUrl,
          "review": reviewSchema
        },
        breadcrumbSchema
      ]
    };
  } else {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        { ...businessInfo, "description": description, "image": fullImage, "url": fullUrl, "review": reviewSchema },
        breadcrumbSchema,
        {
          "@type": "WebSite",
          "url": SITE_URL,
          "name": "PVS Decore",
          "description": "Pisos Laminados e Vinilicos em Curitiba e Sao Jose dos Pinhais",
          "publisher": businessInfo,
          "inLanguage": "pt-BR"
        }
      ]
    };
  }

  if (additionalSchema) {
    schema["@graph"].push(additionalSchema);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PVS Decore" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content={location || "Sao Jose dos Pinhais"} />
      <meta name="geo.position" content="-25.5347;-49.2064" />
      <meta name="ICBM" content="-25.5347, -49.2064" />

      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
