import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PAGE_CONTENT } from '../constants';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, Star, ArrowRight, MapPin } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

const GenericPage = () => {
  const { slug } = useParams();
  const data = slug ? PAGE_CONTENT[slug] : null;

  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Enhanced description logic to ensure persuasive tone and benefits are tailored to the type
  const persuasiveDescription = data.type === 'service' 
    ? `${data.seoDescription} Chega de dor de cabeça na obra! A PVS Decore garante instalação em 48h, mão de obra própria (sem terceiros) e garantia em contrato. Atendemos Curitiba e Região com excelência. Peça seu orçamento!`
    : `${data.seoDescription} Transforme sua casa com a PVS Decore. Revenda oficial das melhores marcas, consultoria para o clima de Curitiba e instalação impecável. Clique e veja por que somos referência em ${data.title}.`;

  return (
    <PageTransition>
      <SEO 
        title={`${data.title} | PVS Decore`}
        description={persuasiveDescription}
        url={`/${data.type}/${slug}`}
        type={data.type}
      />

      <div className="bg-white min-h-screen">
        {/* Header Region */}
        <div className="relative bg-brand-dark text-white py-20 lg:py-24 overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 backdrop-blur-sm">
              Especialidade PVS Decore
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Soluções completas com qualidade garantida em Curitiba e Região.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Main Content Column */}
            <div className="lg:w-7/12 xl:w-2/3">
              {/* Intro Box */}
              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-8 rounded-2xl mb-12 shadow-sm flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-brand-orange text-white p-4 rounded-xl shadow-lg shrink-0 transform -rotate-3">
                  <Star fill="white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Por que escolher este serviço?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Na PVS Decore, somos especialistas em <span className="font-semibold text-brand-orange">{data.title.toLowerCase()}</span>. 
                    Combinamos materiais de primeira linha com técnicos experientes para entregar o acabamento que sua obra merece.
                  </p>
                </div>
              </div>

              <div className="space-y-16">
                {data.contentBlocks.map((block, index) => (
                  <article key={index} className="prose max-w-none group">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-brand-orange rounded-full shadow-sm group-hover:h-10 transition-all duration-300"></span>
                      {block.title}
                    </h3>
                    <p className="text-gray-600 leading-8 text-lg text-justify">
                      {block.content}
                    </p>
                    
                    {/* CTA Intermediário */}
                    {(index + 1) % 3 === 0 && index !== data.contentBlocks.length - 1 && (
                       <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                         <h4 className="font-bold text-xl mb-3 text-gray-900">Ficou com alguma dúvida?</h4>
                         <p className="text-gray-600 mb-6">Nossa equipe técnica está pronta para responder suas perguntas sobre {data.title}.</p>
                         <a href="#contato-form" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition group/link">
                           Solicitar consultoria gratuita <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                         </a>
                       </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-5/12 xl:w-1/3 relative">
              <div className="sticky top-24 space-y-8" id="contato-form">
                <div className="shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
                    <LeadForm locationName={data.title} />
                </div>
                
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    Outros Serviços
                  </h4>
                  <ul className="space-y-3">
                    {Object.entries(PAGE_CONTENT)
                      .filter(([key]) => key !== slug)
                      .map(([key, item]) => (
                        <li key={key}>
                          <Link 
                            to={`/${item.type}/${key}`} 
                            className="text-gray-600 hover:text-brand-orange hover:bg-orange-50 block p-3 rounded-lg transition-colors flex items-center justify-between group"
                          >
                            <span>{item.title}</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <div className="bg-brand-dark text-white p-8 rounded-2xl text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity"></div>
                    
                    <MapPin size={32} className="mx-auto text-brand-orange mb-4" />
                    <h4 className="font-bold text-xl mb-3">Atendemos sua Região</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Estamos presentes em toda Curitiba e São José dos Pinhais (Raio 30km).
                    </p>
                    <Link to="/cidade/sao-jose-dos-pinhais" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-600 transition shadow-lg hover:shadow-orange-500/20 w-full">
                        Ver Áreas de Atendimento
                    </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Gallery at bottom of page */}
        <ImageGallery />
      </div>
    </PageTransition>
  );
};

export default GenericPage;