import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, CheckCircle2, Star, Quote, MapPin, Tag, ThumbsUp, Zap, BadgeCheck, MessageCircle, ArrowRight, Dog, Baby, Building2, Droplets, Lightbulb, Sparkles, ChevronLeft, Info, ArrowUpRight, Coins, Check } from 'lucide-react';
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
import Tooltip from '../components/Tooltip';
import { motion, AnimatePresence } from 'framer-motion';

import BrandsSection from '../components/BrandsSection';

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

  // 30 Expert Tips Data
  const tips = [
    { title: "Rodapé Alto: Elegância", text: "Rodapés de 10cm ou 15cm na cor branca alongam o pé direito e modernizam qualquer ambiente instantaneamente." },
    { title: "Sentido da Instalação", text: "Instalar as réguas no sentido da entrada de luz amplia visualmente o espaço. Nossa equipe planeja isso para você." },
    { title: "Sobreposição Inteligente", text: "Não quebre o piso antigo! O vinílico e o laminado podem ser instalados por cima, economizando tempo e caçamba." },
    { title: "Manta Acústica", text: "Em apartamentos, a manta acústica sob o laminado é essencial para reduzir o ruído de passos para o vizinho de baixo." },
    { title: "Proteção nos Móveis", text: "Cole feltros adesivos nos pés de cadeiras e mesas. Isso evita riscos superficiais ao arrastar móveis no dia a dia." },
    { title: "Limpeza Diária", text: "Esqueça baldes de água. Um pano levemente úmido com detergente neutro é tudo que seu piso precisa para brilhar." },
    { title: "Cuidado com Sol", text: "Pisos vinílicos e laminados podem desbotar com sol intenso direto. Use cortinas ou películas UV nas janelas." },
    { title: "Área de Serviço", text: "Vai colocar na lavanderia? Prefira o Vinílico Colado, que é mais resistente a eventuais poças de água." },
    { title: "Rodízios de Cadeira", text: "No home office, troque rodízios de plástico duro por rodízios de silicone (PU) para não marcar o piso." },
    { title: "Tapetes de Entrada", text: "Um capacho na porta de entrada retém a areia e pedrinhas que poderiam riscar seu piso novo." },
    { title: "Rodapé de Poliestireno", text: "São 100% à prova d'água e imunes a cupins. A melhor escolha para durabilidade a longo prazo." },
    { title: "Juntas de Dilatação", text: "Pisos laminados dilatam e contraem. O espaçamento correto nas paredes é o segredo para o piso não estufar." },
    { title: "Nivelamento é Tudo", text: "Para o vinílico ficar perfeito, o contrapiso deve estar liso como um vidro. Usamos pasta niveladora específica." },
    { title: "Vinílico na Cozinha", text: "Sim, pode! É higiênico e fácil de limpar. Só evite jogar baldes de água como se fosse cerâmica." },
    { title: "Rodapé da Mesma Cor?", text: "Rodapé branco combina com tudo e moderniza. Rodapé da cor do piso dá sensação de amplitude no chão." },
    { title: "Urina de Pets", text: "Limpe o quanto antes. Embora resistente, a acidez pode manchar qualquer revestimento se ficar por horas." },
    { title: "Cera? Nunca mais!", text: "A maioria dos pisos modernos já vem com capa de proteção. Cera cria uma crosta gordurosa difícil de tirar." },
    { title: "Instalação Click", text: "O sistema click permite desmontar e levar o piso caso você se mude (dependendo do estado das réguas)." },
    { title: "Piso Térmico", text: "Vinílicos mantêm a temperatura amena. No inverno de Curitiba, você vai conseguir andar descalço." },
    { title: "Régua Larga", text: "Réguas mais largas (acima de 20cm) dão um ar mais nobre e sofisticado para salas grandes." },
    { title: "Transição de Portas", text: "Usamos perfis de acabamento discretos na transição entre cômodos ou mudança de piso (ex: sala para cozinha)." },
    { title: "Tempo de Aclimação", text: "O material deve ficar no local da obra 24h antes da instalação para se adaptar à temperatura ambiente." },
    { title: "Impermeabilização Térrea", text: "Em casas térreas, verificamos a umidade do solo. Às vezes é preciso aplicar primer bloqueador de umidade." },
    { title: "Rodateto", text: "Assim como o rodapé, o rodateto (moldura no teto) dá o acabamento final. Trabalhamos com Santa Luzia também." },
    { title: "Laminado vs Vinílico", text: "Laminado = Madeira (mais rígido, eco nos passos). Vinílico = PVC (mais macio, silencioso)." },
    { title: "Vassoura Certa", text: "Use vassouras de pelo macio. Vassouras de piaçava dura podem causar micro-riscos com o tempo." },
    { title: "Manchas de Caneta", text: "Riscou com caneta? Um pouco de álcool num algodão costuma resolver em pisos vinílicos." },
    { title: "Rodapé de Sobrepor", text: "Tem rodapé cerâmico e não quer quebrar? Use o modelo de sobrepor da Santa Luzia. Rápido e limpo." },
    { title: "Valorização do Imóvel", text: "Um piso novo é uma das reformas que mais valoriza o imóvel na hora da venda ou locação." },
    { title: "Garantia de Instalação", text: "Exija nota fiscal e termo de garantia da instalação. Um produto bom mal instalado perde a garantia de fábrica." }
  ];

  // Carousel Logic
  const [currentTip, setCurrentTip] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default mobile

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) { // md
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    
    // Initial call
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextTip();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTip, itemsPerPage]);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
  };

  // Get visible tips ensuring circular wrap
  const getVisibleTips = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(tips[(currentTip + i) % tips.length]);
    }
    return visible;
  };

  return (
    <PageTransition>
      <SEO 
        title="PVS Decore - Pisos Vinílicos, Laminados e Porcelanatos em Curitiba e SJP" 
        description="O Piso dos Seus Sonhos Instalado em até 48h. Revenda e instalação de pisos vinílicos e laminados em Curitiba e SJP. Mão de obra própria e garantia de especialista."
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
                <Star size={12} fill="currentColor" /> Instalação Técnica Própria (Sem Terceiros)
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl tracking-tight"
            >
              O Piso dos Seus Sonhos <br className="hidden md:block"/>
              <TypewriterEffect />
              <br className="hidden md:block"/>
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-200">Instalado em até 48h.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-lg"
            >
              Garanta a <strong className="text-white font-bold decoration-brand-orange underline decoration-2 underline-offset-4">segurança da sua obra</strong> com quem é especialista. Do laminado Quick-Step ao vinílico Tarkett, entregamos sua casa transformada, limpa e pronta para morar.
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
                   <span className="relative z-10 tracking-wide">QUERO MEU ORÇAMENTO</span>
                </button>
                <a 
                  href="#footer-contact"
                  onClick={handleScrollToContact}
                  className="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-lg group"
                >
                    <span className="group-hover:translate-x-1 transition-transform">Ver Localização</span>
                </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-300 font-medium"
            >
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Obra Limpa</span>
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Atendimento VIP</span>
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Garantia em Contrato</span>
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

      {/* Brands Section */}
      <BrandsSection />

      {/* Marquee Section (Space Saver) */}
      <section className="bg-white">
          <div className="py-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 border-b border-gray-100">
              Atendemos em toda Região
          </div>
          <LocationMarquee />
      </section>

      {/* Features Bar with Tooltips */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Mão de Obra Própria', desc: 'Zero dor de cabeça', tooltip: 'Equipe 100% CLT. Não terceirizamos, garantindo sua segurança e qualidade técnica.' },
            { icon: Clock, title: 'Instalação Express', desc: 'Sua casa pronta logo', tooltip: 'Técnicas de instalação rápida que liberam cômodos em 24h a 48h (Sistema Click).' },
            { icon: Star, title: 'Marcas Líderes', desc: 'Qualidade que dura', tooltip: 'Revenda Oficial: Quick-Step, Tarkett, Durafloor e Santa Luzia.' },
            { icon: ShieldCheck, title: 'Garantia Dupla', desc: 'Produto + Serviço', tooltip: 'Cobertura completa contra defeitos de fábrica e problemas de instalação por nossa conta.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Tooltip content={item.tooltip}>
                <div className="bg-white p-4 rounded-full shadow-sm mb-3 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition duration-300 ring-4 ring-gray-100 group-hover:ring-orange-200">
                  <item.icon size={32} />
                </div>
              </Tooltip>
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
                className={`relative flex flex-col items-center gap-3 p-4 rounded-2xl w-32 transition-all duration-300 ${activeSuggestion === item.id ? 'bg-brand-orange text-white scale-110 shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-orange-100'}`}
              >
                {/* Visual Status Icon when Active */}
                {activeSuggestion === item.id && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 bg-green-500 text-white p-1.5 rounded-full shadow-md border-2 border-white z-10"
                  >
                     <Check size={14} strokeWidth={4} />
                  </motion.div>
                )}

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

      {/* Offers / Services Grid - Premium Magazine Style */}
      <section id="servicos" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-black tracking-widest uppercase text-xs mb-4">
              Nosso Catálogo
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Soluções Completas</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">
              Do vinílico para cozinha ao laminado para o quarto. Acabamentos de luxo que valorizam o seu patrimônio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Full Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                   <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                   />
                </div>

                {/* Badge */}
                <div className="absolute top-5 right-5 z-20">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors">
                      <Tag size={10} /> Destaque
                   </div>
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Area */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4">
                        <div className="bg-brand-orange/20 w-12 h-12 rounded-xl flex items-center justify-center text-brand-orange mb-4 backdrop-blur-sm border border-brand-orange/30 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                            {service.icon === 'Grid' ? <Building2 size={24} /> : 
                             service.icon === 'Layers' ? <Sparkles size={24} /> : 
                             service.icon === 'Square' ? <Award size={24} /> : 
                             <Info size={24} />}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-brand-orange transition-colors">{service.title}</h3>
                        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                           <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>
                        </div>
                    </div>

                    <button 
                      onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, gostaria de consultar os serviços de Vidros e Esquadrias.`, '_blank')}
                      className="w-full bg-white/10 backdrop-blur-md hover:bg-brand-orange text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/20 hover:border-brand-orange group/btn"
                    >
                      Consultar via WhatsApp <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DICA DE OURO - GOLDEN TIP SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gray-700"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="bg-yellow-400 p-6 rounded-2xl text-gray-900 shadow-xl shrink-0 rotate-3 transform hover:rotate-0 transition-transform">
                   <Coins size={48} />
                </div>
                <div className="flex-grow text-center md:text-left">
                   <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2 block">Dica de Ouro PVS</span>
                   <h3 className="text-2xl md:text-4xl font-black text-white mb-4">Economize na Reforma: Não Quebre o Piso Antigo!</h3>
                   <p className="text-gray-300 text-lg leading-relaxed">
                      Você sabia que o Piso Vinílico e o Laminado podem ser instalados sobre cerâmica ou cimento queimado? 
                      <strong className="text-white"> Você economiza caçamba, evita poeira e reduz o tempo de obra pela metade.</strong>
                   </p>
                </div>
                <div className="shrink-0">
                   <button 
                      onClick={handleHeroWhatsApp}
                      className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-yellow-400/20 transition-all transform hover:scale-105"
                   >
                      Quero Avaliação Gratuita
                   </button>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: Expert Tips Carousel */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">Blog do Especialista</span>
                <h2 className="text-3xl md:text-4xl font-black">Segredos da PVS para sua Obra</h2>
                <p className="text-gray-400 mt-2 max-w-xl text-sm">Navegue pelas nossas 30 dicas essenciais para quem vai construir ou reformar.</p>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex items-center gap-4">
                 <div className="text-xs font-mono text-gray-500">
                    <span className="text-brand-orange font-bold">{String(currentTip + 1).padStart(2, '0')}</span> / {tips.length}
                 </div>
                 <div className="flex gap-2">
                    <button onClick={prevTip} className="p-3 rounded-full border border-gray-700 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all active:scale-95">
                       <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextTip} className="p-3 rounded-full border border-gray-700 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all active:scale-95">
                       <ChevronRight size={20} />
                    </button>
                 </div>
              </div>
           </div>

           {/* Animated Carousel Grid */}
           <div className="relative min-h-[250px]">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <AnimatePresence mode="popLayout">
                  {getVisibleTips().map((tip, idx) => (
                     <motion.div 
                       key={`${currentTip}-${idx}`} // Using currentTip ensures re-render animation
                       initial={{ opacity: 0, x: 50, scale: 0.9 }}
                       animate={{ opacity: 1, x: 0, scale: 1 }}
                       exit={{ opacity: 0, x: -50, scale: 0.9 }}
                       transition={{ duration: 0.5, ease: "circOut" }}
                       className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brand-orange/50 transition-colors group h-full flex flex-col relative overflow-hidden"
                     >
                        {/* Glow Effect */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-orange/20 rounded-full blur-2xl group-hover:bg-brand-orange/40 transition-all duration-500"></div>

                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-brand-orange mb-4 shadow-inner">
                           <Info size={20} />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-brand-orange transition-colors">{tip.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{tip.text}</p>
                     </motion.div>
                  ))}
               </AnimatePresence>
             </div>
           </div>
           
           {/* Progress Bar */}
           <div className="w-full bg-gray-800 h-1 mt-10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-orange"
                initial={{ width: 0 }}
                animate={{ width: `${((currentTip + 1) / tips.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
           </div>
           
           <div className="text-center mt-8">
              <button onClick={handleHeroWhatsApp} className="text-brand-orange hover:text-white border-b border-brand-orange pb-1 transition-colors inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
                 Falar com um consultor agora <ArrowRight size={14} />
              </button>
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
              src="/loja-pvs.jpg"
              alt="Fachada da Loja PVS Decore"
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-[1.01] transition duration-700 w-full"
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
                  {text: 'Sede própria em São José dos Pinhais', sub: 'Segurança para sua compra', icon: CheckCircle2}, 
                  {text: 'Especialistas em Laminado Hydroseal', sub: 'Resistência à água', icon: CheckCircle2}, 
                  {text: 'Acabamento Fino em Rodapés', sub: 'Cortes em 45º perfeitos', icon: CheckCircle2},
                  {text: 'Garantia Dupla: Produto + Instalação', sub: 'Segurança total para o seu investimento', icon: ShieldCheck}
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange">
                     <item.icon size={20} /> 
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