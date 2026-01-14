import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Diamond, Zap, Target } from 'lucide-react';

const BRAND_CARDS = [
  {
    id: 'eucafloor',
    name: 'Eucafloor',
    image: '/images/marcas/eucafloor-bg.jpg',
    icon: Award,
    tag: 'DESTAQUE',
  },
  {
    id: 'durafloor',
    name: 'Durafloor',
    image: '/images/marcas/durafloor-bg.jpg',
    icon: Diamond,
    tag: 'DESTAQUE',
  },
  {
    id: 'quickstep',
    name: 'Quick-Step',
    image: '/images/marcas/quickstep-bg.jpg',
    icon: Zap,
    tag: 'DESTAQUE',
  },
  {
    id: 'santaluzia',
    name: 'Santa Luzia',
    image: '/images/marcas/santaluzia-bg.jpg',
    icon: Target,
    tag: 'DESTAQUE',
  }
];

const BrandsSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (brandId: string) => {
    navigate('/nossos-produtos', { state: { scrollTo: brandId } });
    // Scroll behavior if on the same page
    const element = document.getElementById(brandId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">
            NOSSAS MARCAS
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Marcas Parceiras
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Trabalhamos com as melhores marcas de pisos e acabamentos do mercado. 
            Qualidade garantida para o seu projeto.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_CARDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => handleNavigate(brand.id)}
              className="group relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full bg-gray-200">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'; // Fallback image
                  }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Tag */}
              <div className="absolute top-5 right-5 z-20">
                <div className="bg-white/90 backdrop-blur-md border border-white/20 text-brand-orange text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  ✨ {brand.tag}
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-brand-orange mb-4 shadow-xl">
                  <brand.icon size={32} />
                </div>

                {/* Name */}
                <h3 className="text-3xl font-black text-white mb-6 drop-shadow-xl tracking-tight group-hover:text-brand-orange transition-colors">
                  {brand.name}
                </h3>

                {/* Button-like element */}
                <div className="w-full bg-white/10 backdrop-blur-md hover:bg-brand-orange text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/20 hover:border-brand-orange group/btn">
                  Ver Detalhes <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
