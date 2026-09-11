import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, ChevronRight, CheckCircle2, Star, Quote, MapPin, Tag, ThumbsUp, Zap, BadgeCheck, MessageCircle, ArrowRight, Dog, Baby, Building2, Droplets, Lightbulb, Sparkles, ChevronLeft, Info, ArrowUpRight, Coins, Check, Factory } from 'lucide-react';
import { SERVICES, CONTACT_PHONE } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import PageTransition from '../components/PageTransition';
import HeroBackground from '../components/HeroBackground';
import ServiceContactWidget from '../components/ServiceContactWidget';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';
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
    { id: 1, icon: Dog, label: "Tenho Pets", title: "Piso Vinílico é a Solução!", text: "Considere a resistência da linha ao desgaste e a facilidade de limpeza. Remova urina rapidamente e mantenha as unhas dos pets aparadas." },
    { id: 2, icon: Baby, label: "Tenho Crianças", title: "Conforto e Segurança", text: "Compare conforto ao caminhar e facilidade de limpeza. O desempenho acústico depende do produto e da instalação." },
    { id: 3, icon: Droplets, label: "Área Úmida", title: "Cuidado com a Água", text: "Na cozinha, escolha uma linha aprovada pelo fabricante. Resistência à água não significa tolerância a alagamento." },
    { id: 4, icon: Building2, label: "Apartamento", title: "Silêncio é Ouro", text: "Consulte as exigências acústicas do condomínio e o desempenho do sistema completo de piso e base." },
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
    { title: "Área de Serviço", text: "Consulte o manual da linha antes de instalar na lavanderia. Evite água acumulada." },
    { title: "Rodízios de Cadeira", text: "No home office, troque rodízios de plástico duro por rodízios de silicone (PU) para não marcar o piso." },
    { title: "Tapetes de Entrada", text: "Um capacho na porta de entrada retém a areia e pedrinhas que poderiam riscar seu piso novo." },
    { title: "Rodapé de Poliestireno", text: "O poliestireno resiste à água. Verifique as condições de aplicação e limpeza do modelo escolhido." },
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
    { title: "Tempo de Aclimação", text: "O tempo e as condições de aclimatação devem seguir o manual do produto." },
    { title: "Impermeabilização Térrea", text: "Em casas térreas, verificamos a umidade do solo. Às vezes é preciso aplicar primer bloqueador de umidade." },
    { title: "Rodateto", text: "Assim como o rodapé, o rodateto (moldura no teto) dá o acabamento final. Trabalhamos com Santa Luzia também." },
    { title: "Laminado vs Vinílico", text: "Laminado = Madeira (mais rígido, eco nos passos). Vinílico = PVC (mais macio, silencioso)." },
    { title: "Vassoura Certa", text: "Use vassouras de pelo macio. Vassouras de piaçava dura podem causar micro-riscos com o tempo." },
    { title: "Manchas de Caneta", text: "Riscou com caneta? Consulte o removedor permitido pelo fabricante antes de aplicar qualquer produto." },
    { title: "Rodapé de Sobrepor", text: "Tem rodapé cerâmico e não quer quebrar? Use o modelo de sobrepor da Santa Luzia. Rápido e limpo." },
    { title: "Valorização do Imóvel", text: "Um piso novo é uma das reformas que mais valoriza o imóvel na hora da venda ou locação." },
    { title: "Garantia de Instalação", text: "Exija nota fiscal e termo de garantia da instalação. Um produto bom mal instalado perde a garantia de fábrica." }
  ];

  return (
    <PageTransition>
      <EnhancedSEO
        title="PVS Decore | Pisos, instalação e rodapés em São José dos Pinhais"
        description="PVS Decore: venda e instalação de pisos laminados, vinílicos, SPC e rodapés. Loja em São José dos Pinhais, com atendimento em Curitiba e RMC."
        url="/"
        type="website"
        keywords="pisos laminados curitiba, pisos vinilicos curitiba, piso laminado sao jose dos pinhais, piso vinilico sjp, instalacao pisos, eucafloor, durafloor, quick-step, rodape santa luzia, pvs decore"
      />

      {/* Hero Section */}
      <section className="relative text-white min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20">
          
          {/* Left Column: Sales Copy with Premium Animations */}
          <motion.div 
            variants={containerVariants}
            initial={false}
            animate="visible"
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-brand-orange px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                <Star size={12} fill="currentColor" /> Venda e instalação de pisos
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl tracking-tight"
            >
              Pisos e instalação em <br className="hidden md:block"/>
              <span className="block text-brand-orange">São José dos Pinhais</span>
              <br className="hidden md:block"/>

            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-lg"
            >
              Atendimento em Curitiba e região. Garanta a <strong className="text-white font-bold decoration-brand-orange underline decoration-2 underline-offset-4">segurança da sua obra</strong> com quem é especialista. Do laminado Quick-Step ao vinílico Tarkett, entregamos sua casa transformada, limpa e pronta para morar.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-8"
            >
                <button 
                  onClick={handleHeroWhatsApp}
                  className="relative overflow-hidden bg-brand-orange hover:bg-orange-600 text-white font-black text-xl px-5 sm:px-12 py-5 rounded-full shadow-[0_0_50px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_0_70px_-5px_rgba(249,115,22,0.8)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group border border-orange-400 ring-4 ring-orange-500/20"
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
               <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md border border-white/5 hover:border-brand-orange/50 transition-colors"><CheckCircle2 size={16} className="text-green-400" /> Orçamento sob consulta</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact/Accordion Widget */}
          <motion.div 
            initial={false}
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



      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-3">São José dos Pinhais, Curitiba e Região Metropolitana</h2>
        <p>Loja em São José dos Pinhais. Consulte disponibilidade de atendimento na sua região.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-brand-orange underline">
          <Link to="/cidade/so-jos-dos-pinhais">São José dos Pinhais</Link><Link to="/cidade/curitiba">Curitiba</Link>
          <Link to="/mapa-do-site#areas-atendidas">Ver áreas atendidas</Link>
        </div>
      </section>
      {/* Features Bar with Tooltips */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, title: 'Instalação de pisos', desc: 'Preparação e acabamento', tooltip: 'Consulte a preparação da base e os acabamentos incluídos no orçamento.' },
            { icon: Clock, title: 'Instalação Express', desc: 'Sua casa pronta logo', tooltip: 'O prazo depende da metragem, da preparação da base e do produto.' },
            { icon: Star, title: 'Produtos de marcas', desc: 'Pisos e acabamentos', tooltip: 'Consulte produtos das marcas: Quick-Step, Tarkett, Durafloor, Eucafloor e Santa Luzia.' },
            { icon: ShieldCheck, title: 'Orientação na escolha', desc: 'Produto + Serviço', tooltip: 'A garantia do fabricante segue o termo de cada produto. Consulte separadamente as condições do serviço.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={false}
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
                    initial={false}
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
                initial={false}
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
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Full Background Image with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                   <img loading="lazy" decoding="async"
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
                        <div className="h-auto opacity-100 transition-all duration-500 overflow-hidden">
                           <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>
                        </div>
                    </div>

                    <Link
                      to={service.id === "laminado" ? "/product/piso-laminado" : service.id === "rodape" ? "/product/rodape-poliestireno" : "/product/piso-vinilico"}
                      className="w-full bg-white/10 backdrop-blur-md hover:bg-brand-orange text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/20 hover:border-brand-orange group/btn"
                    >
                      Ver produto <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <details><summary className="font-bold text-xl cursor-pointer py-3">Orientações para sua reforma</summary>
          <div className="grid md:grid-cols-3 gap-6 py-6">{tips.map(tip => <div key={tip.title}><h3 className="font-bold">{tip.title}</h3><p>{tip.text}</p></div>)}</div>
          <Link to="/faq" className="text-brand-orange underline">Aprofundar dúvidas sobre escolha, instalação e manutenção</Link>
        </details>
      </section>

      <BrandsSection />
      {/* About / Social Proof */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition duration-1000"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition duration-1000"></div>
            <img width={1024} height={1024} loading="lazy" decoding="async"
              src="/loja-pvs.jpg"
              alt="Fachada da Loja PVS Decore"
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-[1.01] transition duration-700 w-full"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-2 right-2 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                    <ThumbsUp className="text-green-600" size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">Atendimento na loja</p>
                    <p className="text-xs text-gray-500">São José dos Pinhais</p>
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
                  {text: 'Loja em São José dos Pinhais', sub: 'Segurança para sua compra', icon: CheckCircle2},
                  {text: 'Especialistas em Laminado Hydroseal', sub: 'Resistência à água', icon: CheckCircle2}, 
                  {text: 'Acabamento Fino em Rodapés', sub: 'Cortes em 45º perfeitos', icon: CheckCircle2},
                  {text: 'Orientação sobre produto e instalação', sub: 'Condições definidas no orçamento', icon: ShieldCheck}
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

      <div className="container mx-auto px-4 pb-8 text-center"><Link to="/faq" className="text-brand-orange underline">Ver todas as dúvidas sobre pisos</Link></div>
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
