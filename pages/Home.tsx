import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, CheckCircle2, Star, Quote, MapPin, Tag, ThumbsUp, Zap, BadgeCheck } from 'lucide-react';
import { SERVICES, LOCATIONS, CONTACT_PHONE, CONTACT_ADDRESS, BRAND_PARTNERS } from '../constants';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const bairros = LOCATIONS.filter(l => l.type === 'bairro');
  const cidades = LOCATIONS.filter(l => l.type === 'cidade');

  const handleSpecificCTA = (product: string) => {
      window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, vi a oferta de ${product} no site e gostaria de um orçamento para minha região.`, '_blank');
  };

  return (
    <PageTransition>
      <SEO 
        title="PVS Decore - Pisos Vinílicos, Laminados e Porcelanatos em Curitiba e SJP" 
        description="Especialistas em venda e instalação de pisos vinílicos, laminados e rodapés. Atendemos Curitiba, São José dos Pinhais e raio de 30km. Peça seu orçamento!"
        url="/"
      />

      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620626012053-93f266a31774?auto=format&fit=crop&q=80&w=2000" 
            alt="Pisos de luxo" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-[spin_60s_linear_infinite] md:animate-none"
            style={{ animation: 'pulse 10s infinite alternate' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Sales Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-sm text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
              <Star size={12} fill="currentColor" /> Instalação Premium em Curitiba e SJP
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              O Acabamento Perfeito que <span className="text-brand-orange block mt-2">Sua Casa Merece.</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
              Não feche negócio sem falar conosco. Garantimos a <strong>melhor instalação</strong> de pisos vinílicos e laminados, com rapidez, limpeza e preço justo.
            </p>
            
            <ul className="space-y-4 pt-2">
              {[
                "Instalação rápida e sem sujeira (Até 48h)",
                "Garantia total de mão de obra e material",
                "Visita técnica e orçamento gratuitos",
                "Parcelamento facilitado no cartão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200 font-medium">
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <CheckCircle2 size={20} className="text-green-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-gray-400 text-sm pt-4 border-t border-gray-800 w-fit">
               <MapPin size={16} className="text-brand-orange" />
               <span>Atendemos num raio de 30km de São José dos Pinhais</span>
            </div>
          </div>

          {/* Right Column: High Conversion Form Container */}
          <div className="hidden md:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-100">
              {/* Sales Header for Form */}
              <div className="bg-gray-50 p-6 border-b border-gray-100 text-center">
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-2 flex items-center gap-1 justify-center w-fit mx-auto">
                   <Zap size={12} fill="currentColor" /> OFERTA EXCLUSIVA WEB
                </div>
                <h3 className="text-2xl font-black text-gray-900 leading-tight">
                  Solicite seu <span className="text-brand-orange">Orçamento VIP</span>
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Preencha abaixo para garantir <strong>Prioridade na Agenda</strong> e Consultoria Gratuita.
                </p>
              </div>

              {/* The Form */}
              <div className="p-2">
                 {/* Passing a prop or styling wrapper to simplify LeadForm if needed, keeping it intact as requested */}
                 <div className="[&>div]:shadow-none [&>div]:border-none [&>div]:p-4">
                    <LeadForm />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-light py-10 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Mão de Obra Qualificada', desc: 'Técnicos especialistas' },
            { icon: Clock, title: 'Pontualidade', desc: 'Respeito ao prazo' },
            { icon: Star, title: 'Materiais Premium', desc: 'Marcas renomadas' },
            { icon: ShieldCheck, title: 'Garantia Total', desc: 'Suporte pós-venda' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="bg-white p-4 rounded-full shadow-md mb-3 text-brand-orange transform group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners / Brands Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Trabalhamos com as Melhores Marcas</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">
               Garantia de 10 a 25 anos com os fabricantes líderes do mercado de revestimentos.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {BRAND_PARTNERS.map((brand, idx) => (
               <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 group">
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-1 group-hover:text-brand-orange transition-colors">{brand.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">{brand.category}</span>
                  <p className="text-xs text-gray-500 leading-tight">{brand.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center">
             <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                <BadgeCheck size={16} className="text-green-500" /> Também trabalhamos com esquadrias e vidros (Vidromax, Suprema e Gold).
             </p>
           </div>
        </div>
      </section>

      {/* Offers / Services Grid */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-black tracking-widest uppercase text-sm mb-2 block">Promoções e Destaques</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Soluções Completas</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              As melhores opções de pisos e acabamentos para sua obra em SJP e Curitiba.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border border-gray-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md flex items-center gap-1">
                     <Tag size={12} /> CONFIRA
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{service.description}</p>
                  
                  <Link 
                    to={service.id === 'rodape' ? '/product/rodape-poliestireno' : service.id === 'instalacao' ? '/service/instalacao-residencial' : `/product/${service.id === 'laminado' ? 'piso-laminado' : 'piso-vinilico'}`}
                    className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 group-hover:bg-brand-orange transition-colors"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-900 rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Sala de estar moderna" 
              className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-[1.02] transition duration-500"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Por que escolher a <span className="text-brand-orange">PVS Decore</span>?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com sede em São José dos Pinhais, a PVS Decore se destaca pelo atendimento personalizado e pela qualidade técnica na instalação de revestimentos num raio de 30km. Entendemos que o piso é a base da decoração do seu lar.
            </p>
            <ul className="space-y-4">
              {['Sede própria em São José dos Pinhais', 'Atendimento em Curitiba e Região (30km)', 'Prazos de entrega respeitados', 'Acabamento fino e limpeza pós-obra'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-orange flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#contato" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition shadow-lg inline-block hover:-translate-y-1">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">O que dizem nossos clientes</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A satisfação de quem confiou na PVS Decore para renovar seu lar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Mendes",
                role: "Residencial",
                location: "São José dos Pinhais",
                text: "Excelente trabalho! A instalação do piso vinílico no meu apartamento ficou perfeita. Equipe pontual e muito organizada. Recomendo de olhos fechados."
              },
              {
                name: "Ana Paula Souza",
                role: "Residencial",
                location: "Curitiba (Água Verde)",
                text: "Transformaram minha sala. O atendimento desde o orçamento até a entrega foi impecável. O acabamento dos rodapés é coisa de cinema!"
              },
              {
                name: "Carlos Eduardo",
                role: "Comercial",
                location: "Pinhais",
                text: "Contratei para meu escritório e o resultado superou as expectativas. Rápido, limpo e preço justo. A PVS Decore é nota 10."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl hover:shadow-lg transition duration-300 relative border border-gray-100 hover:-translate-y-1">
                <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-brand-orange font-semibold">{item.location}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations SEO Grid */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Áreas de Atendimento (Raio 30km)</h2>
            <p className="text-gray-500">Sede em São José dos Pinhais, atendendo Curitiba e Região Metropolitana</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-brand-orange border-b pb-2">Bairros de Curitiba</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                {bairros.map((loc) => (
                  <Link 
                    key={loc.slug} 
                    to={`/bairro/${loc.slug}`}
                    className="text-gray-600 hover:text-brand-orange transition-colors truncate"
                    title={`Pisos em ${loc.name}`}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-brand-orange border-b pb-2">Região Metropolitana</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                {cidades.map((loc) => (
                  <Link 
                    key={loc.slug} 
                    to={`/cidade/${loc.slug}`}
                    className="text-gray-600 hover:text-brand-orange transition-colors truncate"
                    title={`Pisos em ${loc.name}`}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Contact Section (if LeadForm hidden in Hero) */}
      <section id="contato" className="py-16 bg-white md:hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
             <div className="bg-brand-orange text-white p-4 text-center">
                 <h3 className="font-bold text-xl">Solicite seu Orçamento</h3>
                 <p className="text-sm opacity-90">Resposta rápida via WhatsApp</p>
             </div>
             <div className="[&>div]:shadow-none [&>div]:border-none">
                 <LeadForm />
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;