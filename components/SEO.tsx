import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_PHONE, CONTACT_EMAIL, GEO_COORDINATES, TESTIMONIALS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article' | 'localbusiness' | 'product' | 'service';
  location?: string;
  image?: string;
  keywords?: string;
}

const SITE_URL = 'https://www.pvsdecore.com.br';
const DEFAULT_IMAGE = '/pisos-laminados-vinilicos-pvs-spj.png';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  type = 'website',
  location,
  image = DEFAULT_IMAGE,
  keywords
}) => {
  const { pathname } = useLocation();
  const fullUrl = SITE_URL + url;
  const fullImage = image.startsWith('http') ? image : SITE_URL + image;

  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', fullImage);

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = fullUrl;
    }
  }, [title, description, fullUrl, fullImage, keywords]);

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

  const breadcrumbs = buildBreadcrumbs(pathname, title);

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
        breadcrumbs
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
        breadcrumbs
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
        breadcrumbs
      ]
    };
  } else {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        { ...businessInfo, "description": description, "image": fullImage, "url": fullUrl, "review": reviewSchema },
        breadcrumbs
      ]
    };
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

function buildBreadcrumbs(pathname: string, pageTitle: string) {
  const items: any[] = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" }
  ];

  const segments = pathname.split('/').filter(Boolean);
  const labelMap: Record<string, string> = {
    'product': 'Produtos',
    'service': 'Servicos',
    'bairro': 'Bairros',
    'cidade': 'Cidades',
    'contato': 'Contato',
    'nossos-produtos': 'Marcas',
    'mapa-do-site': 'Mapa do Site'
  };

  if (segments.length === 1) {
    items.push({ "@type": "ListItem", position: 2, name: labelMap[segments[0]] || pageTitle, item: SITE_URL + "/" + segments[0] });
  } else if (segments.length >= 2) {
    items.push({ "@type": "ListItem", position: 2, name: labelMap[segments[0]] || segments[0], item: SITE_URL + "/" + segments[0] });
    items.push({ "@type": "ListItem", position: 3, name: pageTitle, item: SITE_URL + "/" + segments.join('/') });
  }

  return { "@type": "BreadcrumbList", "itemListElement": items };
}

export default SEO;
