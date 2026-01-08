import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Mail, ArrowUp, Instagram, MapPin } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_DISPLAY, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_INSTAGRAM } from '../constants';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, visitei o site da PVS Decore e gostaria de um orçamento.`, '_blank');
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Piso Vinílico', path: '/product/piso-vinilico' },
    { name: 'Piso Laminado', path: '/product/piso-laminado' },
    { name: 'Serviços', path: '/service/instalacao-residencial' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 text-center sm:text-left">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="hidden sm:inline flex items-center gap-1">
             <MapPin size={12} className="text-brand-orange" /> Sede em São José dos Pinhais - Atendemos num raio de 30km
          </span>
          <div className="flex gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-orange transition flex items-center gap-1">
              <Mail size={12} /> {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-1 font-bold hover:text-brand-orange transition">
              <Phone size={12} /> {CONTACT_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group w-32 md:w-40" onClick={scrollToTop}>
            <Logo animate={true} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-brand-orange transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleWhatsApp}
              className="bg-brand-orange text-white px-5 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-lg flex items-center gap-2 animate-pulse hover:animate-none transform hover:scale-105"
            >
              <MessageCircle size={18} /> Orçamento
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg z-50">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="font-medium text-lg text-gray-800 border-b pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={handleWhatsApp}
                className="bg-green-500 text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 shadow-md"
              >
                <MessageCircle size={20} /> Solicitar via WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 items-end">
        <AnimatePresence>
          {showScrollButton && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Animated WhatsApp Button */}
        <button 
          onClick={handleWhatsApp}
          className="group relative flex items-center justify-center p-4 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 animate-[bounce_2s_infinite]"
          aria-label="Falar no WhatsApp"
        >
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Orçamento Rápido!
          </span>
          <MessageCircle size={32} color="white" fill="white" className="relative z-10" />
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        </button>
      </div>

      {/* Footer */}
      <footer id="footer-contact" className="bg-gray-900 text-gray-300 pt-16 pb-6 border-t-4 border-brand-orange">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-6 w-32">
                 <Logo />
              </div>
              <p className="text-sm mb-4 leading-relaxed text-gray-400">
                Sua melhor escolha em pisos vinílicos, laminados e rodapés em São José dos Pinhais e Curitiba. Qualidade que transforma ambientes.
              </p>
              <div className="flex gap-4">
                <a href={CONTACT_INSTAGRAM} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition"><Instagram size={18} /></a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition"><Mail size={18} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-700 pb-2 inline-block">Produtos</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/product/piso-vinilico" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Piso Vinílico</Link></li>
                <li><Link to="/product/piso-laminado" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Piso Laminado</Link></li>
                <li><Link to="/product/rodape-poliestireno" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Rodapé Poliestireno</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-700 pb-2 inline-block">Serviços</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/service/instalacao-residencial" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Instalação Residencial</Link></li>
                <li><Link to="/service/instalacao-comercial" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Instalação Comercial</Link></li>
                <li><Link to="/service/manutencao" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-orange"/> Manutenção</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-700 pb-2 inline-block">Fale Conosco</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`tel:${CONTACT_PHONE}`} className="flex items-start gap-3 hover:text-brand-orange transition group">
                    <Phone size={18} className="text-brand-orange group-hover:scale-110 transition" /> 
                    <span className="font-bold text-lg text-white">{CONTACT_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-brand-orange transition">
                    <Mail size={16} className="text-brand-orange" /> {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={24} className="text-brand-orange flex-shrink-0 mt-1" /> 
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-brand-orange transition"
                  >
                    {CONTACT_ADDRESS}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} PVS Decore. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1 mt-4 md:mt-0">
              Desenvolvido <span className="text-red-500 animate-heartbeat">❤️</span> por 
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-brand-orange transition">
                Suprema Sites Express
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Quick helper component within file to avoid creating another one just for chevron
const ChevronRight = ({size, className}: {size: number, className: string}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default Layout;