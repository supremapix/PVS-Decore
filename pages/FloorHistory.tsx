import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import {SITE_URL} from '../data/site';
import data from '../data/floorHistory.json';

export const PVS_HISTORY_PATH=data.path;
export default function FloorHistory(){
 const canonical=SITE_URL+data.path;
 const image=SITE_URL+data.image;
 const schema={
  '@context':'https://schema.org','@type':'BlogPosting','@id':canonical+'#article',
  headline:data.title, description:data.description, inLanguage:'pt-BR', datePublished:data.date,
  image:[image], mainEntityOfPage:{'@id':canonical+'#webpage'},
  author:{'@type':'Organization',name:'PVS Decore',url:SITE_URL},
  publisher:{'@id':SITE_URL+'/#organization'}
 };
 const breadcrumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
  {'@type':'ListItem',position:1,name:'Início',item:SITE_URL+'/'},
  {'@type':'ListItem',position:2,name:'Blog',item:SITE_URL+'/blog'},
  {'@type':'ListItem',position:3,name:data.title,item:canonical}
 ]};
 return <><EnhancedSEO title={data.seo} description={data.description} url={data.path} type="article" image={data.image}/>
 <Helmet>
   <meta property="og:image:width" content={String(data.width)}/>
   <meta property="og:image:height" content={String(data.height)}/>
   <meta property="og:image:alt" content={data.alt}/>
   <script type="application/ld+json" id="pvs-history-article">{JSON.stringify(schema)}</script>
   <script type="application/ld+json" id="pvs-history-breadcrumbs">{JSON.stringify(breadcrumbs)}</script>
 </Helmet>
 <article className="shell section max-w-5xl">
   <nav aria-label="Você está aqui" className="mb-5 flex flex-wrap gap-2"><Link className="underline" to="/">Início</Link><span aria-hidden="true">/</span><Link className="underline" to="/blog">Blog</Link></nav>
   <p className="eyebrow">Série: história dos pisos · Capítulo 1</p>
   <h1 className="editorial-title mt-4 text-4xl md:text-6xl">{data.title}</h1>
   <p className="mt-4 text-sm">PVS Decore · <time dateTime={data.date}>{data.humanDate}</time></p>
   <p className="mb-7 mt-4 max-w-3xl text-lg">{data.description}</p>
   <figure className="mb-8">
     <img className="block h-auto w-full rounded-2xl" src={data.image} alt={data.alt} width={data.width} height={data.height} fetchPriority="high" decoding="async"/>
     <figcaption className="mt-2 text-sm">{data.caption}</figcaption>
   </figure>
   <div className="max-w-3xl space-y-4 break-words leading-relaxed [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2" dangerouslySetInnerHTML={{__html:data.body}}/>
   <aside className="card mt-10">
     <h2 className="text-2xl font-semibold">Conheça as linhas atuais da PVS</h2>
     <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
       <li><Link className="underline" to="/product/piso-laminado">Pisos laminados</Link></li>
       <li><Link className="underline" to="/product/piso-vinilico">Pisos vinílicos</Link></li>
       <li><Link className="underline" to="/product/rodape-poliestireno">Rodapés de poliestireno</Link></li>
       <li><Link className="underline" to="/guia-de-pisos">Guia para comparar pisos</Link></li>
     </ul>
   </aside>
 </article></>;
}
