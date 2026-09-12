import Illustration from '../components/Illustration';
import React, { useMemo } from 'react';
import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { LOCATIONS, CONTACT_DISPLAY } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import {MAIN_AREAS,PRODUCT_LINKS} from '../data/site';
import LeadForm from '../components/LeadForm';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, MapPin, Star, Phone } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import ShareButtons from '../components/ShareButtons';
import VideoShowcase from '../components/VideoShowcase';

// A service area is never a second business address.
const generateContent=(name:string,type:'bairro'|'cidade')=>[
 {title:'Onde comprar pisos?',content:name==='São José dos Pinhais'?'A PVS Decore fica na Rua Izabel A Redentora, 1088, São José dos Pinhais – PR, CEP 83030-500. Consulte pisos laminados, vinílicos, SPC e rodapés na loja.':'A loja física da PVS Decore fica em São José dos Pinhais. Para seu endereço em '+name+', consulte a disponibilidade de entrega, medição e instalação pelo telefone (41) 3076-6240.'},
 {title:'Como escolher o piso?',content:'Laminados são opções para salas, quartos e áreas secas. Vinílicos e SPC devem ser escolhidos conforme tráfego, limpeza e aprovação do fabricante para o ambiente. Compare amostras, condições do contrapiso e acabamento.'},
 {title:'Como solicitar instalação?',content:'Informe o endereço, o tipo de imóvel e a área aproximada. O orçamento deve considerar preparação do contrapiso, materiais, mão de obra e rodapés. Prazo e condições de garantia são definidos na contratação.'}
];

const LocationPage = () => {
  const { slug } = useParams();
  const {pathname}=useLocation();
  const location = LOCATIONS.find(l => l.slug === slug);

  const seoContent = useMemo(() => {
    if (!location) return [];
    return generateContent(location.name, location.type);
  }, [location]);

  const isSJP = location?.name.toLowerCase().includes('são josé dos pinhais');

  if (!location || !pathname.startsWith(`/${location.type}/`)) {
    return <NotFound />;
  }

  const pageUrl = `/${location.type}/${location.slug}`;

  return (
    <PageTransition>
      <EnhancedSEO
        title={`Pisos Vinilicos e Laminados em ${location.name} | PVS Decore - Venda e Instalacao`}
        description={`Pisos e instalação para ${location.name}. Loja física em São José dos Pinhais, Rua Izabel A Redentora, 1088. Consulte atendimento e orçamento.`}
        url={pageUrl}
        type="localbusiness"
        noindex={location.type==='bairro' || !MAIN_AREAS.includes(location.name)}
        location={location.name}
        keywords={`pisos ${location.name.toLowerCase()}, piso vinilico ${location.name.toLowerCase()}, piso laminado ${location.name.toLowerCase()}, instalacao pisos ${location.name.toLowerCase()}, rodape ${location.name.toLowerCase()}, revestimento ${location.name.toLowerCase()}`}
        breadcrumbs={[
          { name: location.type === 'bairro' ? 'Bairros' : 'Cidades', url: "/mapa-do-site#areas-atendidas" },
          { name: location.name, url: pageUrl }
        ]}
      />

      <div className="bg-white">
        {/* Header Region */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
              Atendimento Especializado
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4">
              Pisos e Revestimentos em <span className="text-brand-orange">{location.name}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Levamos a qualidade e sofisticação da PVS Decore até você em {location.name}.
              Solicite um orçamento sem compromisso.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main SEO Content Column */}
            <div className="lg:w-2/3">
              {/* Intro Box */}
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl mb-10 flex items-start gap-4">
                <div className="bg-brand-orange text-white p-3 rounded-full shrink-0">
                  <Star fill="white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Referência em {location.name}</h2>
                  <p className="text-gray-700">
                    Se você busca transformar seu ambiente residencial ou comercial em {location.name},
                    encontrou a empresa certa. Unimos produtos de primeira linha com mão de obra especializada.
                  </p>
                </div>
              </div>

              {/* Dynamic 18 Blocks */}
              <div className="space-y-12">
                {seoContent.map((block, index) => (
                  <div key={index} className="prose max-w-none group">
                    <Illustration name={(["amostras","vinilico","medicao"] as const)[index]} className="mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-brand-orange rounded-full"></span>
                      {block.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4 text-justify">
                      {block.content}
                    </p>
                    {/* Intermittent CTA every 3 blocks */}
                    {(index + 1) % 3 === 0 && (
                      <div className="my-6">
                        <a
                          href={`https://wa.me/554130766240?text=Olá, sou de ${location.name} e gostaria de um orçamento.`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition"
                        >
                          <Phone size={18} /> Solicitar atendimento em {location.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <nav aria-label="Produtos e instalação" className="flex flex-wrap gap-4 my-8">{PRODUCT_LINKS.map(item=><Link key={item.name} to={item.url} className="text-brand-orange underline">{item.name}</Link>)}<Link to="/service/instalacao-residencial" className="underline">Instalação residencial</Link><Link to="/service/instalacao-comercial" className="underline">Instalação comercial</Link></nav>
              {/* Share Buttons */}
              <ShareButtons title={`Pisos PVS Decore em ${location.name}`} url={pageUrl} />
            </div>

            {/* Sidebar / Sticky Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <LeadForm locationName={location.name} />

                <div className="bg-gray-100 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-brand-orange" />
                    Outras áreas de atendimento
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {LOCATIONS
                      .filter(l => l.type === location.type && l.name !== location.name)
                      .slice(0, 8) // Show 8 random other locations
                      .map(l => (
                        <li key={l.slug}>
                          <Link to={`/${l.type}/${l.slug}`} className="text-gray-600 hover:text-brand-orange block py-1 border-b border-gray-200">
                            Pisos em {l.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Video Showcase - only for São José dos Pinhais */}
        {isSJP && (
          <VideoShowcase
            videoId="G221FX8O7Ao"
            title={`PVS Decore em ${location.name}`}
            description="Conheça informações sobre pisos e consulte materiais e instalação para seu endereço."
          />
        )}

        {/* Gallery at bottom */}
        <ImageGallery />
      </div>
    </PageTransition>
  );
};

export default LocationPage;