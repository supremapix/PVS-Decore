import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, CheckCircle2, Download, ExternalLink, X, MessageCircle, FileText, Smartphone, Tablet, Monitor } from 'lucide-react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import { CONTACT_PHONE } from '../constants';

const BRANDS = [
  {
    id: 'eucafloor',
    name: 'Eucafloor',
    description: 'Líder em pisos laminados de alta qualidade',
    types: ['Laminados', 'Vinílicos'],
    highlights: ['Tecnologia alemã', 'Garantia estendida', '15+ anos no mercado'],
    siteUrl: 'https://www.eucatex.com.br/',
    catalogUrl: 'https://www.eucatex.com.br/pisos/catalogo'
  },
  {
    id: 'durafloor',
    name: 'Durafloor',
    description: 'Referência em pisos laminados e vinílicos',
    types: ['Laminados', 'Vinílicos', 'SPC'],
    highlights: ['Melhor custo-benefício', 'Variedade de cores', 'Instalação fácil'],
    siteUrl: 'https://www.durafloor.com.br/',
    catalogUrl: 'https://www.durafloor.com.br/catalogo-digital'
  },
  {
    id: 'quickstep',
    name: 'Quick-Step',
    description: 'Tecnologia belga em pisos premium',
    types: ['Laminados', 'Vinílicos'],
    highlights: ['Premium quality', 'Design exclusivo', 'Resistência superior'],
    siteUrl: 'https://www.quick-step.com.br/',
    catalogUrl: 'https://www.quick-step.com.br/pt-br/catalogo-de-inspiracao'
  },
  {
    id: 'santaluzia',
    name: 'Santa Luzia',
    description: 'Especialista em rodapés e acabamentos',
    types: ['Rodapés e Acabamentos'],
    highlights: ['Acabamento perfeito', 'Fácil instalação', 'Diversas opções'],
    siteUrl: 'https://www.industriasantaluzia.com.br/',
    catalogUrl: 'https://www.industriasantaluzia.com.br/downloads'
  }
];

const FLOOR_TYPES = [
  { id: 'all', label: 'Todos os Tipos', description: 'Veja todas as nossas soluções', icon: Grid },
  { id: 'Laminados', label: 'Pisos Laminados', description: 'Resistentes, práticos e com visual de madeira natural', icon: FileText },
  { id: 'Vinílicos', label: 'Pisos Vinílicos', description: 'Impermeáveis, silenciosos e versáteis', icon: DropletsIcon },
  { id: 'SPC', label: 'Pisos SPC', description: 'Tecnologia Stone Plastic Composite - ultra resistente', icon: ShieldIcon },
  { id: 'Rodapés e Acabamentos', label: 'Rodapés e Acabamentos', description: 'Complementos essenciais para um acabamento perfeito', icon: LayoutIcon }
];

function DropletsIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-6.3-4-6.3s-4 3-4 6.3c0 2.2 1.8 4 4 4Z"/><path d="M17 16.3c2.2 0 4-1.8 4-4 0-3.3-4-6.3-4-6.3s-4 3-4 6.3c0 2.2 1.8 4 4 4Z"/></svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  );
}

function LayoutIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
  );
}

const BrandsProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCatalog, setSelectedCatalog] = useState<typeof BRANDS[0] | null>(null);

  const filteredBrands = activeFilter === 'all' 
    ? BRANDS 
    : BRANDS.filter(brand => brand.types.some(t => t.includes(activeFilter)));

  const handleWhatsApp = (brandName?: string) => {
    const text = brandName 
      ? `Olá, gostaria de solicitar um orçamento para produtos da marca ${brandName}.`
      : 'Olá, gostaria de solicitar um orçamento para pisos e acabamentos.';
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <PageTransition>
      <SEO 
        title="Nossos Produtos e Marcas | PVS Decore" 
        description="Conheça as marcas premium que trabalhamos: Eucafloor, Durafloor, Quick-Step e Santa Luzia. Pisos laminados, vinílicos e acabamentos de alta qualidade."
        url="/nossos-produtos"
      />

      {/* Section 1: Hero */}
      <section className="bg-brand-dark py-16 text-white text-center border-b-4 border-brand-orange">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Trabalhamos com as Melhores Marcas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Pisos laminados, vinílicos e acabamentos de alta qualidade para seu projeto
          </motion.p>
        </div>
      </section>

      {/* Section 2: Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FLOOR_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`p-6 rounded-2xl transition-all duration-300 text-left flex flex-col gap-3 group border ${
                  activeFilter === type.id 
                    ? 'bg-brand-orange text-white shadow-2xl scale-105 border-transparent' 
                    : 'bg-white text-gray-700 shadow-md hover:shadow-xl hover:-translate-y-1 border-gray-100'
                }`}
              >
                <div className={`p-3 rounded-xl w-fit ${activeFilter === type.id ? 'bg-white/20' : 'bg-orange-50 text-brand-orange'}`}>
                  <type.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">{type.label}</h3>
                  <p className={`text-xs mt-1 leading-relaxed ${activeFilter === type.id ? 'text-orange-50' : 'text-gray-500'}`}>
                    {type.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Brand Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((brand) => (
                <motion.div
                  layout
                  key={brand.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 border-b border-gray-50 relative overflow-hidden">
                     <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight group-hover:scale-110 transition-transform duration-500">{brand.name}</h2>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{brand.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {brand.types.map(type => (
                        <span key={type} className="px-4 py-1.5 bg-orange-50 text-brand-orange text-xs font-bold rounded-full border border-orange-100">
                          {type}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 mb-8">
                      {brand.highlights.map(item => (
                        <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                          <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button 
                        onClick={() => setSelectedCatalog(brand)}
                        className="flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                      >
                        <FileText size={18} /> Ver Catálogo
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <a 
                          href={brand.siteUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center bg-gray-50 text-brand-dark p-4 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
                          title="Visitar Site Oficial"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <button 
                          onClick={() => setSelectedCatalog(brand)}
                          className="flex items-center justify-center bg-gray-50 text-brand-dark p-4 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
                          title="Ver Catálogo"
                        >
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 4: Modal Catalog Viewer */}
      <AnimatePresence>
        {selectedCatalog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCatalog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl h-[95vh] rounded-3xl overflow-hidden flex flex-col relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-brand-dark p-6 text-white flex justify-between items-center border-b-2 border-brand-orange">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{selectedCatalog.name}</h3>
                  <p className="text-sm text-gray-400">{selectedCatalog.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedCatalog(null)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-grow bg-gray-200 relative">
                <iframe 
                  src={`${selectedCatalog.catalogUrl}#view=FitH`} 
                  className="w-full h-full border-none"
                  title={`Catálogo ${selectedCatalog.name}`}
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-brand-dark font-medium text-center sm:text-left">Deseja um orçamento personalizado para estes produtos?</p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedCatalog(null)}
                    className="flex-grow sm:flex-grow-0 px-8 py-3 bg-gray-100 text-brand-dark font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Fechar
                  </button>
                  <button 
                    onClick={() => handleWhatsApp(selectedCatalog.name)}
                    className="flex-grow sm:flex-grow-0 px-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                  >
                    <MessageCircle size={20} /> Solicitar Orçamento
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 5: Benefits */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">🏆 Qualidade Garantida</h3>
              <p className="text-gray-500">Produtos certificados das melhores marcas do mercado</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">🔧 Instalação Profissional</h3>
              <p className="text-gray-500">Equipe especializada em instalação de pisos</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">💰 Melhor Custo-Benefício</h3>
              <p className="text-gray-500">Preços competitivos e condições especiais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden border-b-8 border-brand-orange">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Precisa de Ajuda para Escolher?</h2>
              <p className="text-gray-300 text-lg md:text-xl mb-10 font-light">
                Nossa equipe está pronta para ajudar você a encontrar o piso ideal para seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => handleWhatsApp()}
                  className="px-12 py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 text-lg shadow-xl"
                >
                  <MessageCircle size={24} /> WhatsApp
                </button>
                <button 
                  onClick={() => handleWhatsApp()}
                  className="px-12 py-5 bg-white text-brand-dark hover:bg-gray-50 font-bold rounded-full transition-all flex items-center justify-center text-lg shadow-xl"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BrandsProducts;
