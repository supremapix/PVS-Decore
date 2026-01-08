import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, CheckCircle2, Star, Quote, MapPin, Tag, ThumbsUp, Zap, BadgeCheck, MessageCircle, ArrowRight, Dog, Baby, Building2, Droplets, Lightbulb, Sparkles } from 'lucide-react';
import { SERVICES, CONTACT_PHONE } from '../constants';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import HeroBackground from '../components/HeroBackground';
import ServiceContactWidget from '../components/ServiceContactWidget';
import LocationMarquee from '../components/LocationMarquee';
import TestimonialMarquee from '../components/TestimonialMarquee';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';
import ImageGallery from '../components/ImageGallery';
import TypewriterEffect from '../components/TypewriterEffect';
import PartnersMarquee from '../components/PartnersMarquee';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic Bezier for smooth premium feel
      }
    }
  };

  // Logic for Suggestion Bubbles
  const [activeSuggestion, setActiveSuggestion] = useState<number | null>(null);
  
  const suggestions = [
    { id: 1, icon: Dog, label: "Tenho Pets", title: "Piso Vinílico é a Solução!", text: "Resistente a riscos e urina, fácil de limpar e anti-derrapante. Seu pet vai amar o conforto térmico." },
    { id: 2, icon: Baby, label: "Tenho Crianças", title: "Conforto e Segurança", text: "O Vinílico absorve impacto em quedas e é hipoalergênico. O Laminado com manta acústica também é ótimo para brincadeiras." },
    { id: 3, icon: Droplets, label: "Área Úmida", title: "Cuidado com a Água", text: "Para cozinhas, use Vinílico colado ou Laminado Hydroseal. Evite laminados comuns em áreas com muita água." },
    { id: 4, icon: Building2, label: "Apartamento", title: "Silêncio é Ouro", text: "Obrigatório em muitos condomínios: use Vinílico ou Laminado com manta acústica especial para não incomodar o vizinho de baixo." },
  ];

  const tips = [
    { title: "Rodapé Alto: Elegância", text: "Rodapés de 10cm ou 15cm na cor branca alongam o pé direito e modernizam qualquer ambiente instantaneamente." },
    { title: "Sentido da Instalação", text: "Instalar as réguas no sentido da entrada de luz amplia visualmente o espaço. Nossa equipe planeja isso para você." },
    { title: "Sobreposição Inteligente", text: "Não quebre o piso antigo! O vinílico e o laminado podem ser instalados por cima, economizando tempo e caçamba." }
  ];

  return (
    <PageTransition>
      <SEO 
        title="PVS Decore - Pisos Vinílicos, Laminados e Porcelanatos em Curitiba e SJP" 
        description="Especialistas em venda e instalação de pisos vinílicos, laminados e rodapés. Atendemos Curitiba, São José dos Pinhais e raio de 30km. Peça seu orçamento!"
        url="/"
      />

      {/* Hero Section */}
      <section className="relative text-white min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20">
          
          {/* Left Column: Sales Copy with Premium Animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-brand-orange px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                <Star size={12} fill="currentColor" /> Instalação Técnica Especializada • Revenda Oficial
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl tracking-tight"
            >
              Pisos que Transformam <br className="hidden md:block"/>
              <TypewriterEffect />
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-lg"
            >
              Sua casa merece o melhor. Unimos a <strong className="text-white font-bold decoration-brand-orange underline decoration-2 underline-offset-4">maior variedade de marcas</strong> (Quick-Step, Tarkett) a uma <strong className="text-white font-bold decoration-brand-orange underline decoration-2 underline-offset-4">instalação técnica própria</strong>. Garantia de obra limpa, rápida e acabamento perfeito.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-8"
            >
                <button 
                  onClick={handleHeroWhatsApp}
                  className="relative overflow-hidden bg-brand-orange hover:bg-orange-600 text-white font-black text-xl px-12 py-5 rounded-full shadow-[0_0_50px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_0_70px_-5px_rgba(249,115,22,0.8)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group border border-orange-400 ring-4 ring-orange-500/20"
                >
                   <div className="absolute inset-0 bg-white/20 w-full h-full skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                   <MessageCircle size={28} className="group-hover:rotate-12 transition-transform relative z-10" />
                   <span className="relative z-10 tracking-wide">ORÇAMENTO RÁPIDO</span>
                </button>
                <a 
                  href="#footer-contact"
                  onClick={handleScrollToContact}
                  className="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-lg group"
                >
                    <span className="group-hover:translate-x-1 transition-transform">Fale Conosco</span>
                </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-300 font-medium"
            >
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Laminado Click</span>
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Vinílico Colado</span>
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Rodapés Santa Luzia</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact/Accordion Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block h-full"
          >
             <div className="transform hover:scale-[1.02] transition duration-500 h-full">
                <ServiceContactWidget />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section (Space Saver) */}
      <section className="bg-white">
          <div className="py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 border-b border-gray-100">
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
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-white p-4 rounded-full shadow-sm mb-3 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition duration-300 ring-4 ring-gray-100 group-hover:ring-orange-200">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Suggestion Bubbles (Help Me Choose) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">Dicas Personalizadas</span>
            <h2 className="text-3xl font-black text-gray-900">Qual o seu perfil?</h2>
            <p className="text-gray-500 mt-2">Clique para ver nossa recomendação ideal para você.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {suggestions.map((item, idx) => (
              <button 
                key={item.id}
                onClick={() => setActiveSuggestion(item.id)}
                className={`flex flex-col items-center gap-3 p-4 rounded-2xl w-32 transition-all duration-300 ${activeSuggestion === item.id ? 'bg-brand-orange text-white scale-110 shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-orange-100'}`}
              >
                <div className={`p-3 rounded-full ${activeSuggestion === item.id ? 'bg-white text-brand-orange' : 'bg-white text-gray-400'}`}>
                   <item.icon size={24} />
                </div>
                <span className="text-xs font-bold">{item.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeSuggestion && (
              <motion.div 
                key={activeSuggestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto bg-orange-50 border border-orange-100 p-8 rounded-3xl text-center relative shadow-sm"
              >
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-50 border-t border-l border-orange-100 transform rotate-45"></div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                   <Lightbulb className="text-brand-orange" size={20} />
                   {suggestions.find(s => s.id === activeSuggestion)?.title}
                 </h3>
                 <p className="text-gray-700 leading-relaxed">
                   {suggestions.find(s => s.id === activeSuggestion)?.text}
                 </p>
              </motion.div>
            )}
          </AnimatePresence>
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
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 flex flex-col relative"
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
              </motion.div>
            ))}
          </div>

          {/* Extra CTA Section */}
          <div className="mt-16 text-center">
             <button 
                onClick={handleHeroWhatsApp}
                className="bg-brand-orange hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 animate-pulse"
             >
                Quero um Orçamento Agora!
             </button>
             <p className="mt-4 text-sm text-gray-500">Resposta em menos de 10 minutos no horário comercial.</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Expert Tips Cards */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">Dicas de Especialista</span>
                <h2 className="text-3xl md:text-4xl font-black">Segredos da PVS para sua Obra</h2>
              </div>
              <button onClick={handleHeroWhatsApp} className="text-brand-orange hover:text-white border-b border-brand-orange pb-1 transition-colors flex items-center gap-2 font-bold">
                 Falar com um consultor <ArrowRight size={16} />
              </button>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {tips.map((tip, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-orange/50 transition-all duration-300 hover:bg-gray-750 group"
                 >
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                       <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{tip.text}</p>
                 </motion.div>
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

      {/* REPLACED: New Vertical Testimonials Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">Prova Social</span>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Clientes Felizes & Obras Entregues</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Nossa reputação foi construída piso a piso, cliente a cliente. Veja o que dizem sobre nossa pontualidade, limpeza e qualidade de acabamento.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
                   <div className="text-5xl font-black text-brand-orange">4.9</div>
                   <div>
                       <div className="flex text-yellow-400 gap-1 mb-1">
                           <Star fill="currentColor" size={20} />
                           <Star fill="currentColor" size={20} />
                           <Star fill="currentColor" size={20} />
                           <Star fill="currentColor" size={20} />
                           <Star fill="currentColor" size={20} />
                       </div>
                       <p className="text-sm text-gray-500 font-medium">Média de satisfação em 150+ avaliações</p>
                   </div>
                </div>
             </div>
             <div>
                <TestimonialMarquee />
             </div>
          </div>
        </div>
      </section>

      {/* Partners / Brands Section (New Marquee) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-gray-900 mb-2">Parceiros de Peso</h2>
             <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-4"></div>
             <p className="text-gray-500 max-w-2xl mx-auto">
               Trabalhamos apenas com o que há de melhor no mercado.
             </p>
           </div>
        </div>
        
        {/* Full width marquee */}
        <PartnersMarquee />

        <div className="text-center mt-8">
            <button 
                onClick={handleHeroWhatsApp}
                className="inline-flex items-center gap-2 font-bold text-brand-orange border-b-2 border-brand-orange pb-1 hover:text-orange-700 hover:border-orange-700 transition"
            >
                Ver todas as marcas e catálogos <ArrowRight size={16} />
            </button>
        </div>
      </section>

      {/* NEW: Image Gallery */}
      <ImageGallery />

      {/* NEW: FAQ Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-gray-900 mb-4">Dúvidas Frequentes</h2>
                  <p className="text-gray-600">Perguntas comuns de clientes em São José dos Pinhais e Curitiba.</p>
              </div>
              <FAQSection />
          </div>
      </section>

      {/* NEW: Map Section */}
      <MapSection />

      {/* Mobile-Only Contact Widget (replaces form) */}
      <section className="py-16 bg-white lg:hidden">
        <div className="container mx-auto px-4">
             <ServiceContactWidget />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;