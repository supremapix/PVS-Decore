import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { CONTACT_ADDRESS, CONTACT_DISPLAY } from '../constants';

const MapSection = () => {
  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
        {/* Abstract Map Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Left: Info */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Venha nos visitar</span>
                    <h2 className="text-3xl font-black text-gray-900 mb-6">PVS Decore SJP</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Conheça nosso showroom completo. Veja as amostras pessoalmente e sinta a textura dos materiais.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Endereço</h4>
                                <p className="text-gray-500">{CONTACT_ADDRESS}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Horário de Atendimento</h4>
                                <p className="text-gray-500">Seg a Sex: 08h às 18h <br/> Sáb: 08h às 13h</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Contato</h4>
                                <p className="text-gray-500">{CONTACT_DISPLAY}</p>
                            </div>
                        </div>
                    </div>

                    <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_ADDRESS)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="mt-8 bg-brand-orange hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.02]"
                    >
                        <Navigation size={20} /> Abrir GPS (Google Maps)
                    </a>
                </div>

                {/* Right: Static Map Visual */}
                <div className="md:w-1/2 relative min-h-[300px] bg-gray-200">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                        alt="Mapa Localização" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                             <MapPin size={48} className="text-brand-orange fill-current" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default MapSection;