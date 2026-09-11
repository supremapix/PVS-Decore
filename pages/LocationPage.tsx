import NotFound from './NotFound';
import RelatedLinks from '../components/RelatedLinks';
import React, { useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { LOCATIONS, CONTACT_DISPLAY } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import LeadForm from '../components/LeadForm';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, MapPin, Star, Phone } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import ShareButtons from '../components/ShareButtons';
import VideoShowcase from '../components/VideoShowcase';

import { getLocationContent } from '../data/localContent';

const LocationPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const location = LOCATIONS.find(l => l.slug === slug);

  const seoContent = useMemo(() => {
    if (!location) return [];
    return getLocationContent(location.name, location.type);
  }, [location]);

  const isSJP = location?.name.toLowerCase().includes('são josé dos pinhais');

  if (!location || pathname !== `/${location.type}/${slug}`) {
    return <NotFound />;
  }

  const pageUrl = `/${location.type}/${location.slug}`;

  return (
    <PageTransition>
      <EnhancedSEO
        title={`Pisos Vinilicos e Laminados em ${location.name} | PVS Decore - Venda e Instalacao`}
        description={`Pisos e instalação para ${location.name}. Loja física em São José dos Pinhais. Consulte produtos, disponibilidade de atendimento e orçamento com a PVS Decore.`}
        url={pageUrl}
        type="localbusiness"
        location={location.name}
        keywords={`pisos ${location.name.toLowerCase()}, piso vinilico ${location.name.toLowerCase()}, piso laminado ${location.name.toLowerCase()}, instalacao pisos ${location.name.toLowerCase()}, rodape ${location.name.toLowerCase()}, revestimento ${location.name.toLowerCase()}`}
        breadcrumbs={[
          { name: 'Áreas atendidas', url: '/mapa-do-site' },
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
              Consulte atendimento da PVS Decore para {location.name}, a partir da sede em São José dos Pinhais.
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
                          <Phone size={18} /> Atendimento VIP para moradores de {location.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <RelatedLinks />
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
                    Áreas Próximas
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
            description={`Veja de perto o nosso trabalho e a qualidade dos pisos que entregamos em ${location.name}. Conteúdo exclusivo para você conhecer nossa equipe e materiais.`}
          />
        )}

        {/* Gallery at bottom */}
        <ImageGallery />
      </div>
    </PageTransition>
  );
};

export default LocationPage;
