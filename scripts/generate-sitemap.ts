import { writeFileSync } from 'fs';
import { LOCATIONS, PAGE_CONTENT } from '../constants';

const SITE_URL = 'https://www.pvsdecore.com.br';

function generateSitemap() {
  const urls: string[] = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/nossos-produtos', priority: '0.9', changefreq: 'weekly' },
    { loc: '/faq', priority: '0.9', changefreq: 'weekly' },
    { loc: '/perguntas-frequentes', priority: '0.8', changefreq: 'weekly' },
    { loc: '/contato', priority: '0.8', changefreq: 'monthly' },
    { loc: '/mapa-do-site', priority: '0.7', changefreq: 'monthly' },
    { loc: '/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais', priority: '0.9', changefreq: 'weekly' },
  ];

  Object.keys(PAGE_CONTENT).forEach(slug => {
    const data = PAGE_CONTENT[slug];
    urls.push({
      loc: `/${data.type}/${slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  LOCATIONS.forEach(location => {
    urls.push({
      loc: `/${location.type}/${location.slug}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url: any) => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync('./public/sitemap.xml', sitemap);
  console.log(`✅ Sitemap gerado com ${urls.length} URLs`);
}

generateSitemap();
