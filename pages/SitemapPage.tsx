import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS, PAGE_CONTENT } from '../constants';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import { Map, FileText, MapPin, Package, Hammer, ChevronRight } from 'lucide-react';

const SitemapPage = () => {
  // Sort and Group Data
  const products = Object.entries(PAGE_CONTENT)
    .filter(([_, data]) => data.type === 'product')
    .sort((a, b) => a[1].title.localeCompare(b[1].title));

  const services = Object.entries(PAGE_CONTENT)
    .filter(([_, data]) => data.type === 'service')
    .sort((a, b) => a[1].title.localeCompare(b[1].title));

  const cidades = LOCATIONS
    .filter(l => l.type === 'cidade')
    .sort((a, b) => a.name.localeCompare(b.name));

  const bairros = LOCATIONS
    .filter(l => l.type === 'bairro')
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <PageTransition>
      <SEO 
        title="Mapa do Site | PVS Decore" 
        description="Navegue por todas as páginas do site da PVS Decore. Encontre produtos, serviços e todas as cidades e bairros atendidos em Curitiba e Região."
        url="/mapa-do-site"
      />

      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
              Navegação Completa
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4">
              Mapa do Site
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Encontre rapidamente o que você procura em nossa estrutura completa de links.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Main Pages & Catalog */}
            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <FileText className="text-brand-orange" size={20} /> Institucional
                </h2>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all inline-block">Página Inicial</Link></li>
                  <li><Link to="/nossos-produtos" className="text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all inline-block">Nossas Marcas</Link></li>
                  <li><Link to="/contato" className="text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all inline-block">Fale Conosco</Link></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Package className="text-brand-orange" size={20} /> Produtos
                </h2>
                <ul className="space-y-2">
                  {products.map(([slug, data]) => (
                    <li key={slug}>
                      <Link to={`/product/${slug}`} className="text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all inline-block flex items-center gap-1">
                        <ChevronRight size={14} className="text-gray-300" /> {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Hammer className="text-brand-orange" size={20} /> Serviços
                </h2>
                <ul className="space-y-2">
                  {services.map(([slug, data]) => (
                    <li key={slug}>
                      <Link to={`/service/${slug}`} className="text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all inline-block flex items-center gap-1">
                        <ChevronRight size={14} className="text-gray-300" /> {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Column 2: Cities */}
            <div>
              <section>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Map className="text-brand-orange" size={20} /> Cidades Atendidas
                </h2>
                <ul className="grid grid-cols-1 gap-y-2">
                  {cidades.map((loc) => (
                    <li key={loc.slug}>
                      <Link to={`/cidade/${loc.slug}`} className="text-gray-600 hover:text-brand-orange text-sm transition-colors block py-1 border-b border-gray-50 hover:bg-gray-50 px-2 rounded">
                        Pisos em {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Column 3: Neighborhoods */}
            <div>
              <section>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <MapPin className="text-brand-orange" size={20} /> Bairros de Curitiba
                </h2>
                <div className="max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-orange/20 scrollbar-track-transparent">
                  <ul className="grid grid-cols-1 gap-y-2">
                    {bairros.map((loc) => (
                      <li key={loc.slug}>
                        <Link to={`/bairro/${loc.slug}`} className="text-gray-600 hover:text-brand-orange text-sm transition-colors block py-1 border-b border-gray-50 hover:bg-gray-50 px-2 rounded">
                          Pisos no {loc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SitemapPage;