import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_INSTAGRAM } from '../constants';
export interface SEOProps {
  title: string; description: string; url: string;
  type?: 'website' | 'article' | 'localbusiness' | 'product' | 'service';
  location?: string; image?: string; keywords?: string;
  breadcrumbs?: { name: string; url: string }[];
  additionalSchema?: Record<string, unknown>; noindex?: boolean;
}
const SITE = 'https://www.pvsdecore.com.br';
export function getMetadata({ title, description, url, type = 'website', image = '/pisos-laminados-vinilicos-pvs-spj.png', additionalSchema, noindex = false }: SEOProps) {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const canonical = SITE + path;
  const fullImage = image.startsWith('https://') ? image : SITE + image;
  const organization = {
    '@type': ['Organization', 'HomeAndConstructionBusiness', 'Store'], '@id': SITE + '/#organization',
    name: 'PVS Decore', url: SITE + '/', telephone: '+' + CONTACT_PHONE, email: CONTACT_EMAIL,
    image: SITE + '/loja-pvs.jpg', sameAs: [CONTACT_INSTAGRAM],
    address: { '@type': 'PostalAddress', streetAddress: 'Rua Izabel A Redentora, 1088', addressLocality: 'São José dos Pinhais', addressRegion: 'PR', postalCode: '83030-500', addressCountry: 'BR' },
    areaServed: ['São José dos Pinhais', 'Curitiba'].map(name => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' }
    ]
  };
  const graph: Record<string, unknown>[] = [organization,
    { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: 'PVS Decore', publisher: { '@id': organization['@id'] }, inLanguage: 'pt-BR' },
    { '@type': type === 'product' ? 'CollectionPage' : 'WebPage', '@id': canonical + '#webpage', url: canonical, name: title, description, isPartOf: { '@id': SITE + '/#website' }, about: { '@id': organization['@id'] }, inLanguage: 'pt-BR' }
  ];
  if (path !== '/' && !noindex) graph.push({ '@type': 'BreadcrumbList', '@id': canonical + '#breadcrumb', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: canonical }
  ] });
  if (type === 'service') graph.push({ '@type': 'Service', '@id': canonical + '#service', name: title.split('|')[0].trim(), description, url: canonical, provider: { '@id': organization['@id'] }, areaServed: organization.areaServed });
  if (additionalSchema) { const { ['@context']: context, ...node } = additionalSchema; graph.push(node); }
  return { canonical, fullImage, schema: { '@context': 'https://schema.org', '@graph': graph } };
}
