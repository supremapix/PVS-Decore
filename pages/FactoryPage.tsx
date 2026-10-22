import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_PHONE, CONTACT_DISPLAY } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import PageTransition from '../components/PageTransition';
import { Factory, ShieldCheck, Truck, MessageCircle, ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import VideoShowcase from '../components/VideoShowcase';

const FactoryPage = () => {
  return (
    <PageTransition>
      <EnhancedSEO
        title="Compra de Piso Laminado em Sao Jose dos Pinhais | PVS Decore"
        description="Como comparar compra de piso laminado, frete, instalação e garantia. PVS Decore: loja em São José dos Pinhais."
        url="/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais"
        type="product"
        keywords="piso laminado direto da fabrica, piso laminado sjp, piso laminado barato sao jose dos pinhais, eucafloor sjp, durafloor sjp, piso laminado atacado curitiba"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/marcas/eucafloor-bg.webp" width={1200} height={800} decoding="async" alt="Ambiente com piso laminado — imagem ilustrativa" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Compra de piso em SJP
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Piso Laminado <br/>
              <span className="text-brand-orange">Compra e Instalação</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Planeje sua obra em São José dos Pinhais. Compare materiais, frete e instalação em uma loja local.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button
                onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, gostaria de um orçamento de piso laminado e instalação em SJP.`, '_blank')}
                className="bg-brand-orange hover:bg-orange-600 text-white font-black px-10 py-5 rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-3"
              >
                <MessageCircle size={24} /> SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <VideoShowcase
          videoId="G221FX8O7Ao"
          title="Piso laminado: compra e instalação"
          description="Conheça informações sobre piso laminado. Consulte a linha, o frete e o serviço de instalação antes de contratar."
        />

        {/* Features */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <Factory size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Disponibilidade de materiais</h3>
              <p className="text-gray-600">Consulte os modelos disponíveis e os prazos antes de programar a obra.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Condições da compra</h3>
              <p className="text-gray-600">Solicite identificação da linha, nota fiscal e termos de garantia do fabricante e da instalação.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Entrega e instalação</h3>
              <p className="text-gray-600">Consulte atendimento para seu endereço e combine o cronograma no orçamento.</p>
            </div>
          </div>
        </section>

        {/* Content with SEO Linking */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Como comparar a compra e a instalação do piso laminado?</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Muitos clientes buscam <strong>piso laminado direto da fábrica em São José dos Pinhais</strong> para economizar na reforma. No entanto, o custo de frete e a falta de garantia na instalação podem anular essa economia. Na PVS Decore, resolvemos esse problema com orçamento de materiais e instalação em uma <Link to="/cidade/so-jos-dos-pinhais" className="text-brand-orange font-bold underline">loja física em SJP</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-brand-orange">
                  <h4 className="font-bold text-gray-900 mb-2">Orçamento em SJP</h4>
                  <p className="text-sm text-gray-600">Compare o conjunto de materiais, preparação, instalação e transporte para seu endereço.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-brand-orange">
                  <h4 className="font-bold text-gray-900 mb-2">Orçamento da instalação</h4>
                  <p className="text-sm text-gray-600">Além do piso, cuidamos da <Link to="/service/instalacao-residencial" className="text-brand-orange font-semibold underline">instalação de pisos</Link> com nossa equipe especializada.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantenha seu Piso Novo por Mais Tempo</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ao adquirir seu piso conosco, consulte também o serviço de <Link to="/service/manutencao" className="text-brand-orange font-semibold underline">manutenção de pisos</Link>. Sabemos que acidentes acontecem, e ter uma equipe local em <Link to="/cidade/so-jos-dos-pinhais" className="text-brand-orange font-semibold underline">São José dos Pinhais, no Paraná</Link>, faz toda a diferença quando você precisa de um ajuste ou reparo rápido.
              </p>

              <div className="bg-gray-900 text-white p-10 rounded-3xl mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua casa em SJP?</h3>
                <p className="mb-8 text-gray-400">Fale com nossos consultores agora e consulte os modelos e condições disponíveis.</p>
                <button
                  onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}?text=Gostaria de um orçamento para piso laminado em SJP.`, '_blank')}
                  className="bg-white text-gray-900 font-black px-12 py-4 rounded-full hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 mx-auto"
                >
                  <MessageCircle size={20} /> CHAMAR NO WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default FactoryPage;