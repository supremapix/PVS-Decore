import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, CheckCircle2, Star, Quote, MapPin, Tag, ThumbsUp, Zap, BadgeCheck, MessageCircle } from 'lucide-react';
import { SERVICES, BRAND_PARTNERS, CONTACT_PHONE } from '../constants';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import HeroBackground from '../components/HeroBackground';
import ServiceContactWidget from '../components/ServiceContactWidget';
import LocationMarquee from '../components/LocationMarquee';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const handleHeroWhatsApp = () => {
     window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, gostaria de um orçamento rápido para minha obra.`, '_blank');
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('footer-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="PVS Decore - Pisos Vinílicos, Laminados e Porcelanatos em Curitiba e SJP" 
        description="Especialistas em venda e instalação de pisos vinílicos, laminados e rodapés. Atendemos Curitiba, São José dos Pinhais e raio de 30km. Peça seu orçamento!"
        url="/"
      />

      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20">
          
          {/* Left Column: Sales Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-md text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse shadow-lg shadow-orange-500/20">
              <Star size={12} fill="currentColor" /> Instalação Premium • 10 a 25 Anos de Garantia
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-xl">
              Pisos que Transformam <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Seu Lar.</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-md">
              Especialistas em <strong className="text-white font-bold">Laminados Quick-Step</strong> e <strong className="text-white font-bold">Vinílicos Tarkett</strong>. Instalação rápida, limpa e com acabamento de alto padrão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button 
                  onClick={handleHeroWhatsApp}
                  className="bg-brand-orange hover:bg-orange-600 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-orange-500/60 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group border-2 border-orange-400 animate-pulse hover:animate-none"
                >
                   <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
                   ORÇAMENTO RÁPIDO
                </button>
                <a 
                  href="#footer-contact"
                  onClick={handleScrollToContact}
                  className="px-8 py-5 rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 hover:border-white backdrop-blur-sm transition-all font-bold text-lg flex items-center justify-center shadow-lg"
                >
                    Fale Conosco
                </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-300 font-medium">
               <span className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle2 size={14} className="text-green-400" /> Laminado Click</span>
               <span className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle2 size={14} className="text-green-400" /> Vinílico Colado</span>
               <span className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10"><CheckCircle2 size={14} className="text-green-400" /> Rodapés Santa Luzia</span>
            </div>
          </div>

          {/* Right Column: Contact/Accordion Widget */}
          <div className="lg:col-span-5 hidden lg:block h-full">
             <div className="transform hover:scale-[1.02] transition duration-500 h-full">
                <ServiceContactWidget />
             </div>
          </div>
        </div>
      </section>

      {/* Marquee Section (Space Saver) */}
      <section className="bg-white">
          <div className="py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
              Atendemos em toda Região
          </div>
          <LocationMarquee />
      </section>

      {/* Features Bar */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Mão de Obra Própria', desc: 'Sem terceirização' },
            { icon: Clock, title: 'Instalação Express', desc: 'Obras em 24h/48h' },
            { icon: Star, title: 'Marcas Líderes', desc: 'Quick-Step, Tarkett...' },
            { icon: ShieldCheck, title: 'Garantia Real', desc: 'Produto e Serviço' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white p-4 rounded-full shadow-sm mb-3 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition duration-300 ring-4 ring-gray-100 group-hover:ring-orange-200">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offers / Services Grid - Premium Cards */}
      <section id="servicos" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-black tracking-widest uppercase text-sm mb-2 block">Nosso Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Soluções Completas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Do vinílico para cozinha ao laminado para o quarto. Tudo com a qualidade PVS Decore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 flex flex-col relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-orange text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg flex items-center gap-1">
                     <Tag size={12} /> DESTAQUE
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                      <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
                  
                  <Link 
                    to={service.id === 'rodape' ? '/product/rodape-poliestireno' : service.id === 'outros' ? '/#contato' : `/product/${service.id === 'laminado' ? 'piso-laminado' : 'piso-vinilico'}`}
                    className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-orange transition-all duration-300 shadow-lg group-hover:shadow-orange-500/30"
                  >
                    Ver Detalhes <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Social Proof */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition duration-1000"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Sala de estar moderna" 
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-[1.01] transition duration-700 rotate-1 hover:rotate-0"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                    <ThumbsUp className="text-green-600" size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Satisfação Garantida</p>
                    <p className="text-xs text-gray-500">Centenas de obras entregues</p>
                </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Por que a <span className="text-brand-orange relative">PVS Decore<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-orange/20 -z-10 skew-x-12"></span></span>?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Não vendemos apenas pisos, entregamos conforto. Com sede em São José dos Pinhais, entendemos o clima da região e indicamos o produto certo para evitar umidade e frio.
            </p>
            <ul className="space-y-4">
              {[
                  {text: 'Sede própria em São José dos Pinhais', sub: 'Segurança para sua compra'}, 
                  {text: 'Especialistas em Laminado Hydroseal', sub: 'Resistência à água'}, 
                  {text: 'Acabamento Fino em Rodapés', sub: 'Cortes em 45º perfeitos'}
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange">
                     <CheckCircle2 size={20} /> 
                  </div>
                  <div>
                      <span className="block font-bold text-gray-900">{item.text}</span>
                      <span className="text-sm text-gray-500">{item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 bg-brand-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Clientes Felizes</h2>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A confiança é a base do nosso negócio. Veja o que dizem quem já transformou seu lar conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Mendes",
                role: "Proprietário",
                location: "São José dos Pinhais",
                text: "Excelente trabalho! A instalação do piso vinílico no meu apartamento ficou perfeita. Equipe pontual e muito organizada. Recomendo de olhos fechados."
              },
              {
                name: "Ana Paula Souza",
                role: "Arquiteta",
                location: "Curitiba (Água Verde)",
                text: "Transformaram minha sala. O atendimento desde o orçamento até a entrega foi impecável. O acabamento dos rodapés é coisa de cinema!"
              },
              {
                name: "Carlos Eduardo",
                role: "Empresário",
                location: "Pinhais",
                text: "Contratei para meu escritório e o resultado superou as expectativas. Rápido, limpo e preço justo. A PVS Decore é nota 10."
              }
            ].map((item, idx) => (
              <TestimonialCard 
                key={idx}
                name={item.name}
                role={item.role}
                location={item.location}
                text={item.text}
                delay={idx * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Brands Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-gray-900 mb-2">Parceiros de Peso</h2>
             <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-4"></div>
             <p className="text-gray-500 max-w-2xl mx-auto">
               Trabalhamos apenas com o que há de melhor no mercado.
             </p>
           </div>
           
           <div className="flex flex-wrap justify-center gap-4">
             {BRAND_PARTNERS.map((brand, idx) => (
               <div key={idx} className="w-40 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <h3 className="font-black text-gray-800 group-hover:text-brand-orange transition-colors">{brand.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{brand.category}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Mobile-Only Contact Widget (replaces form) */}
      <section id="contato" className="py-16 bg-white lg:hidden">
        <div className="container mx-auto px-4">
             <ServiceContactWidget />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;