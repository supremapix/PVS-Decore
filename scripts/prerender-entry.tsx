import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import {SiteContent} from '../App';
import {LOCATIONS,PAGE_CONTENT} from '../constants';

export const routes = ['/', '/nossos-produtos', '/faq', '/contato', '/mapa-do-site', '/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais', ...Object.entries(PAGE_CONTENT).map(([slug,page])=>`/${page.type}/${slug}`), ...LOCATIONS.map(place=>`/${place.type}/${place.slug}`)];
export function render(path:string){
  const context:any={};
  const html=renderToString(<HelmetProvider context={context}><StaticRouter location={path}><SiteContent/></StaticRouter></HelmetProvider>);
  const helmet=context.helmet;
  return {html,head:[helmet.title,helmet.meta,helmet.link,helmet.script].map(item=>item.toString()).join('\n')};
}
