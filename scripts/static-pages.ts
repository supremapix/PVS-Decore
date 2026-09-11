import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { LOCATIONS, PAGE_CONTENT } from '../constants';

const SITE = 'https://www.pvsdecore.com.br';
const factory = '/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais';
export const routes = ['/', '/nossos-produtos', '/faq', '/contato', '/mapa-do-site', factory,
  ...Object.entries(PAGE_CONTENT).map(([slug, page]) => `/${page.type}/${slug}`),
  ...LOCATIONS.map(location => `/${location.type}/${location.slug}`)];
export function generateStaticPages(outDir: string, render: (path: string) => { html: string; head: string }) {
  const template = readFileSync(join(outDir, 'index.html'), 'utf8');
  for (const route of [...new Set(routes), '/404']) {
    const file = join(outDir, route === '/' ? 'index.html' : route.slice(1) + '.html');
    mkdirSync(dirname(file), { recursive: true });
    const { html, head } = render(route);
    writeFileSync(file, template.replace(/<!--head-->[\s\S]*?<!--\/head-->/, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  }
  // Retain legacy regional routes; omit repetitive area pages from the discovery sitemap pending traffic review.
  const sitemapRoutes = routes.filter(route => !route.startsWith('/bairro/') && (!route.startsWith('/cidade/') || ['/cidade/curitiba','/cidade/so-jos-dos-pinhais'].includes(route)));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapRoutes.map(route => `<url><loc>${SITE}${route}</loc></url>`).join('')}</urlset>\n`;
  writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
  console.log(`Generated ${routes.length} crawlable pages and ${sitemapRoutes.length} sitemap entries`);
}
