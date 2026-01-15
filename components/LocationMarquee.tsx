import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../constants';

const LocationMarquee = () => {
  const bairros = LOCATIONS.filter(l => l.type === 'bairro');
  const cidades = LOCATIONS.filter(l => l.type === 'cidade');

  return (
    <div className="bg-white border-t border-b border-gray-100 relative">
      {/* Neighborhoods Marquee */}
      <div className="w-full overflow-hidden py-3 relative border-b border-gray-50">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-marquee-fast whitespace-nowrap">
              {[...bairros, ...bairros].map((loc, idx) => (
                  <Link 
                      key={`bairro-${loc.slug}-${idx}`}
                      to={`/bairro/${loc.slug}`}
                      className="inline-block px-6 py-2 mx-2 bg-gray-50 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 text-xs font-semibold shadow-sm hover:shadow-md"
                  >
                      {loc.name}
                  </Link>
              ))}
          </div>
      </div>

      {/* Cities Marquee */}
      <div className="w-full overflow-hidden py-3 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-marquee-fast-reverse whitespace-nowrap">
              {[...cidades, ...cidades].map((loc, idx) => (
                  <Link 
                      key={`cidade-${loc.slug}-${idx}`}
                      to={`/cidade/${loc.slug}`}
                      className="inline-block px-8 py-3 mx-3 bg-brand-orange/5 rounded-full border border-brand-orange/20 text-brand-orange hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 text-sm font-bold shadow-sm hover:shadow-md"
                  >
                      Pisos em {loc.name}
                  </Link>
              ))}
          </div>
      </div>

      <style>{`
          @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
          }
          .animate-marquee-fast {
              animation: marquee 3s linear infinite;
          }
          .animate-marquee-fast-reverse {
              animation: marquee-reverse 5s linear infinite;
          }
          .animate-marquee-fast:hover, .animate-marquee-fast-reverse:hover {
              animation-play-state: paused;
          }
      `}</style>
    </div>
  );
};

export default LocationMarquee;