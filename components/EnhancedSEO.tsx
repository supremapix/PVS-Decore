import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getMetadata, SEOProps } from '../data/seo';
export default function EnhancedSEO(props: SEOProps) {
  const { title, description, type = 'website', noindex = false } = props;
  const { canonical, fullImage, schema } = getMetadata(props);
  return <Helmet>
    <title>{title}</title><meta name="description" content={description} />
    <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
    <link rel="canonical" href={canonical} /><meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
    <meta property="og:site_name" content="PVS Decore" /><meta property="og:title" content={title} />
    <meta property="og:description" content={description} /><meta property="og:url" content={canonical} />
    <meta property="og:image" content={fullImage} /><meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} /><meta name="twitter:image" content={fullImage} />
    <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
  </Helmet>;
}
