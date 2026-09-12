import {build} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';

// Use existing Vite/React dependencies to publish crawlable HTML for current URLs.
await build();
await build({ssr:{noExternal:['react-helmet-async']},build:{ssr:'scripts/prerender-entry.tsx',outDir:'dist-ssr',rollupOptions:{output:{entryFileNames:'prerender-entry.mjs'}}}});
const {routes,render}=await import(pathToFileURL(resolve('dist-ssr/prerender-entry.mjs')).href);
const template=await readFile('dist/index.html','utf8');
const indexed=[];
for(const route of [...new Set(routes),'/404']){
  const {html,head}=render(route);
  if(!head.includes('<title')||!head.includes('rel="canonical"')||!html.includes('<h1'))throw new Error('Missing page content: '+route);
  const file=resolve('dist',route==='/'?'index.html':route.slice(1)+'.html');
  await mkdir(dirname(file),{recursive:true});
  await writeFile(file,template.replace('</head>',head+'\n</head>').replace('<div id="root"></div>',()=>'<div id="root">'+html+'</div>'));
  if(route!=='/404'&&!head.includes('noindex')){
    const images=[...html.matchAll(/<img\b[^>]*\bsrc="([^"?]+)"/g)].map(match=>match[1]).filter(src=>src.startsWith('/imagens/'));
    indexed.push({route,images:[...new Set(images)]});
  }
}
const escape=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const origin='https://www.pvsdecore.com.br';
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'+indexed.map(({route,images})=>'<url><loc>'+origin+escape(route)+'</loc>'+images.map(src=>'<image:image><image:loc>'+origin+escape(src)+'</image:loc></image:image>').join('')+'</url>').join('\n')+'</urlset>');
console.log(`Generated ${routes.length} existing routes, a 404 page and ${indexed.length} sitemap entries.`);
