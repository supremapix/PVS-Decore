import React, { useRef, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

const ImageGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);



  return (
    <div className="w-full overflow-hidden bg-gray-900 py-12">
        <div className="container mx-auto px-4 mb-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Pisos, acabamentos e loja</h3>
            <p className="text-gray-400 text-sm">Imagens de produtos e da PVS Decore</p>
        </div>
        
        {/* Manual scroll container that is auto-scrolled via JS */}
        <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide select-none"
            style={{ scrollBehavior: 'auto' }}
        >
            {GALLERY_IMAGES.map((src, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] h-[250px] rounded-xl overflow-hidden relative group shrink-0">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src={src} 
                        alt={src.includes("loja-pvs") ? "Fachada PVS Decore em São José dos Pinhais" : "Pisos e acabamentos do catálogo"} loading="lazy" decoding="async" width={400} height={250}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default ImageGallery;
