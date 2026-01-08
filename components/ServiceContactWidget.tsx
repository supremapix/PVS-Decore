import React, { useState } from 'react';
import { ChevronDown, MapPin, Phone, MessageCircle, Star } from 'lucide-react';
import { CONTACT_ADDRESS, CONTACT_DISPLAY, CONTACT_PHONE, ACCORDION_ITEMS } from '../constants';

const ServiceContactWidget = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-gray-900 flex flex-col h-full max-h-[600px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-orange to-orange-600 p-6 text-white text-center">
        <h3 className="font-black text-xl md:text-2xl uppercase tracking-wide">Fale com Especialistas</h3>
        <p className="text-xs md:text-sm opacity-90 mt-1">Sede em São José dos Pinhais • Atendemos Curitiba e Região</p>
      </div>

      {/* Info Bar */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-orange shrink-0" />
            <span className="font-bold">{CONTACT_DISPLAY}</span>
        </div>
        <div className="flex items-start gap-2">
            <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
            <span className="leading-tight text-xs">{CONTACT_ADDRESS}</span>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
         {ACCORDION_ITEMS.map((item, idx) => (
             <div key={idx} className="mb-2 border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
                 <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-orange-50 transition-colors"
                 >
                     <span className="font-bold text-sm text-gray-800 flex items-center gap-2">
                        <Star size={12} className="text-brand-orange" /> {item.title}
                     </span>
                     <ChevronDown size={16} className={`text-gray-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                 </button>
                 
                 {openIndex === idx && (
                     <div className="p-3 bg-gray-50 text-xs text-gray-600 border-t border-gray-100 animate-fadeIn">
                         <p className="mb-2 leading-relaxed">{item.content}</p>
                         <ul className="space-y-1">
                            {item.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-1.5 font-semibold text-brand-orange">
                                    <div className="w-1 h-1 rounded-full bg-brand-orange"></div> {detail}
                                </li>
                            ))}
                         </ul>
                     </div>
                 )}
             </div>
         ))}
      </div>

      {/* Footer CTA */}
      <div className="p-4 bg-white border-t border-gray-100">
         <button 
             onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}?text=Olá, vi os serviços no site e gostaria de um orçamento.`, '_blank')}
             className="w-full bg-brand-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-500/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2"
         >
             <MessageCircle size={20} /> Solicitar Orçamento
         </button>
      </div>
    </div>
  );
};

export default ServiceContactWidget;