import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialMarquee = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-brand-light rounded-3xl border border-gray-100 shadow-inner">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-light to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent z-10"></div>

        <div className="absolute w-full animate-marquee-vertical hover:[animation-play-state:paused]">
            <div className="flex flex-col gap-6 p-6">
                {/* Loop twice for infinite effect */}
                {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <Quote size={20} className="text-brand-orange opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{item.text}"</p>
                        
                        <div className="flex items-center gap-3 border-t border-gray-50 pt-3">
                            <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-xs">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-xs">{item.name}</h4>
                                <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                    <MapPin size={10} /> {item.location}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes marquee-vertical {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
            }
            .animate-marquee-vertical {
                animation: marquee-vertical 60s linear infinite;
            }
        `}</style>
    </div>
  );
};

export default TestimonialMarquee;