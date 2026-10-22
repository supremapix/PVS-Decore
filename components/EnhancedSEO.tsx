import React from 'react';
import {Helmet} from 'react-helmet-async';
import {SITE_URL,canonicalPath,schemaGraph} from '../data/site';
interface Props{title:string;description:string;url:string;type?:'website'|'article'|'localbusiness'|'product'|'service';location?:string;image?:string;keywords?:string;breadcrumbs?:{name:string;url:string}[];additionalSchema?:any;noindex?:boolean;faq?:{question:string;answer:string}[]}
const EnhancedSEO:React.FC<Props>=({title,description,url,type='website',location,image='/og-pvs.png',noindex=false,faq})=>{
 const path=canonicalPath(url),canonical=SITE_URL+path,fullImage=image.startsWith('http')?image:SITE_URL+image;
 return <Helmet><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={canonical}/><meta name="robots" content={noindex?'noindex, follow':'index, follow, max-image-preview:large'}/><meta property="og:type" content={type==='article'?'article':'website'}/><meta property="og:site_name" content="PVS Decore"/><meta property="og:locale" content="pt_BR"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={canonical}/><meta property="og:image" content={fullImage}/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={fullImage}/><script type="application/ld+json" id="pvs-schema">{JSON.stringify(schemaGraph({title,description,path,type,location,image,faq})).replace(/</g,'\\u003c')}</script></Helmet>;
};
export default EnhancedSEO;
