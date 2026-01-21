import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_PHONE, CONTACT_DISPLAY } from '../constants';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import { Factory, ShieldCheck, Truck, MessageCircle, ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const FactoryPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Piso Laminado Direto da Fábrica em São José dos Pinhais | PVS Decore"
        description="Ofertas exclusivas de Piso Laminado direto da fábrica em São José dos Pinhais. Preço imbatível, estoque local e instalação profissional em 48h. Confira!"
        url="/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/marcas/eucafloor-bg.jpg" alt="Fábrica de Pisos" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Oportunidade Exclusiva SJP
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Piso Laminado <br/>
              <span className="text-brand-orange">Direto da Fábrica</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Economia real para sua obra em São José dos Pinhais. Preços de atacado com a conveniência de uma loja local e instalação especializada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, vi a oferta de piso direto da fábrica em SJP e gostaria de um orçamento.`, '_blank')}
                className="bg-brand-orange hover:bg-orange-600 text-white font-black px-10 py-5 rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-3"
              >
                <MessageCircle size={24} /> SOLICITAR PREÇO DE FÁBRICA
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <Factory size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Estoque Próprio em SJP</h3>
              <p className="text-gray-600">Sem espera por fretes longos. Temos material à pronta entrega em nossa unidade em São José dos Pinhais.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantia de Origem</h3>
              <p className="text-gray-600">Pisos Eucafloor e Durafloor com certificado de fábrica e nota fiscal, garantindo a procedência do material.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Logística Expressa</h3>
              <p className="text-gray-600">Entregamos e instalamos em toda a região de Curitiba e SJP com rapidez imbatível.</p>
            </div>
          </div>
        </section>

        {/* Content with SEO Linking */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Por que comprar Piso Laminado Direto da Fábrica na PVS Decore?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Muitos clientes buscam <strong>piso laminado direto da fábrica em São José dos Pinhais</strong> para economizar na reforma. No entanto, o custo de frete e a falta de garantia na instalação podem anular essa economia. Na PVS Decore, resolvemos esse problema oferecendo condições de fábrica com a segurança de uma <Link to="/cidade/sao-jose-dos-pinhais" className="text-brand-orange font-bold underline">loja física em SJP</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-brand-orange">
                  <h4 className="font-bold text-gray-900 mb-2">Economia em SJP</h4>
                  <p className="text-sm text-gray-600">Preços competitivos para quem mora em São José dos Pinhais e busca custo-benefício real.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-brand-orange">
                  <h4 className="font-bold text-gray-900 mb-2">Instalação Incluída</h4>
                  <p className="text-sm text-gray-600">Além do piso, cuidamos da <Link to="/service/instalacao-residencial" className="text-brand-orange font-semibold underline">instalação de pisos</Link> com nossa equipe especializada.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantenha seu Piso Novo por Mais Tempo</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ao adquirir seu piso conosco, você também garante suporte total para a <Link to="/service/manutencao" className="text-brand-orange font-semibold underline">manutenção de pisos</Link>. Sabemos que acidentes acontecem, e ter uma equipe local em <Link to="/cidade/sao-jose-dos-pinhais" className="text-brand-orange font-semibold underline">São José dos Pinhais, no Paraná</Link>, faz toda a diferença quando você precisa de um ajuste ou reparo rápido.
              </p>

              <div className="bg-gray-900 text-white p-10 rounded-3xl mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua casa em SJP?</h3>
                <p className="mb-8 text-gray-400">Fale com nossos consultores agora e garanta o melhor preço de laminado da região.</p>
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