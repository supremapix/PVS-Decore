import React from 'react';
import { BRAND_PARTNERS } from '../constants';
import { BadgeCheck, ShieldCheck } from 'lucide-react';

const PartnersMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {/* Quadruple the list to ensure smooth infinite loop on wide screens */}
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => (
                <div 
                    key={`${brand.name}-${idx}`}
                    className="mx-4 w-64 bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group/card relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black text-gray-800 group-hover/card:text-brand-orange transition-colors mb-1">{brand.name}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3 block">{brand.category}</span>
                        
                        {/* Hidden Description appearing on Hover */}
                        <div className="h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 overflow-hidden">
                            <p className="text-xs text-gray-600 leading-tight mb-3">{brand.desc}</p>
                            <div className="bg-green-50 border border-green-100 rounded-lg p-2 flex items-center gap-2 justify-center">
                                <ShieldCheck size={14} className="text-green-600" />
                                <span className="text-[10px] font-bold text-green-700">Garantia PVS Inclusa</span>
                            </div>
                        </div>

                        <div className="mt-2 opacity-50 group-hover/card:opacity-0 transition-opacity absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-300">
                             <BadgeCheck size={20} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 80s linear infinite;
            }
        `}</style>
    </div>
  );
};

export default PartnersMarquee;