import { writeFileSync } from 'node:fs';
import { routes } from './static-pages';
const selected = routes.filter(route => !route.startsWith('/bairro/') && (!route.startsWith('/cidade/') || ['/cidade/curitiba', '/cidade/so-jos-dos-pinhais'].includes(route)));
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${selected.map(route => `<url><loc>https://www.pvsdecore.com.br${route}</loc></url>`).join('')}</urlset>\n`;
writeFileSync('public/sitemap.xml', xml);
writeFileSync('sitemap.xml', xml);
