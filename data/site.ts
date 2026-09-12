export const SITE_URL = 'https://www.pvsdecore.com.br';
export const BUSINESS = {name:'PVS Decore',phone:'+554130766240',email:'pvs.decor@gmail.com',street:'Rua Izabel A Redentora, 1088',city:'São José dos Pinhais',region:'PR',postalCode:'83030-500',hours:'Seg–Sex 08h–18h; Sáb 08h–13h'};
export const MAIN_AREAS = ['São José dos Pinhais','Curitiba','Pinhais','Colombo','Araucária'];
export const canonicalPath=(path:string)=>(path.split(/[?#]/)[0].replace(/\/+$/,'')||'/');
export const PRODUCT_LINKS=[{name:'Piso Laminado',url:'/product/piso-laminado'},{name:'Piso Vinílico',url:'/product/piso-vinilico'},{name:'Piso SPC',url:'/product/piso-vinilico#spc'},{name:'Rodapés',url:'/product/rodape-poliestireno'}];
export function schemaGraph({title,description,path,type,location,image,faq}:{title:string;description:string;path:string;type?:string;location?:string;image?:string;faq?:{question:string;answer:string}[]}){
 const url=SITE_URL+canonicalPath(path),org=SITE_URL+'/#organization',website=SITE_URL+'/#website';
 const graph:Record<string,unknown>[]=[
 {'@type':['Organization','HomeAndConstructionBusiness'],'@id':org,name:BUSINESS.name,url:SITE_URL+'/',telephone:BUSINESS.phone,email:BUSINESS.email,address:{'@type':'PostalAddress',streetAddress:BUSINESS.street,addressLocality:BUSINESS.city,addressRegion:BUSINESS.region,postalCode:BUSINESS.postalCode,addressCountry:'BR'},areaServed:MAIN_AREAS.map(name=>({'@type':'City',name})),sameAs:['https://www.instagram.com/pvsdecore/'],openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'08:00',closes:'18:00'},{'@type':'OpeningHoursSpecification',dayOfWeek:'Saturday',opens:'08:00',closes:'13:00'}]},
 {'@type':'WebSite','@id':website,url:SITE_URL+'/',name:BUSINESS.name,inLanguage:'pt-BR',publisher:{'@id':org}},
 {'@type':type==='product'?'CollectionPage':'WebPage','@id':url+'#webpage',url,name:title,description,inLanguage:'pt-BR',isPartOf:{'@id':website},about:{'@id':org},...(image?{primaryImageOfPage:{'@type':'ImageObject',contentUrl:image.startsWith('http')?image:SITE_URL+image}}:{})}];
 if(type==='service')graph.push({'@type':'Service','@id':url+'#service',name:title,description,url,provider:{'@id':org},areaServed:MAIN_AREAS.map(name=>({'@type':'City',name}))});
 if(location)graph.push({'@type':'Service','@id':url+'#atendimento',name:'Venda e instalação de pisos — '+location,url,provider:{'@id':org},areaServed:{'@type':'Place',name:location}});
 if(path!=='/')graph.push({'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:SITE_URL+'/'},{'@type':'ListItem',position:2,name:title,item:url}]});
 if(faq?.length)graph.push({'@type':'FAQPage','@id':url+'#faq',mainEntity:faq.map(q=>({'@type':'Question',name:q.question,acceptedAnswer:{'@type':'Answer',text:q.answer}}))});
 return {'@context':'https://schema.org','@graph':graph};
}
