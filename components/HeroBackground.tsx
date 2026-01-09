import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/pisos-laminados-vinilicos-pvs-spj.png",
  "/piso_laminado_click.png",
  "/piso_vinilico.png",
  "/rodape_santa_luzia.png"
];

const HeroBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Increased interval slightly for better viewing
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Pisos de luxo"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }} // Increased opacity for better image visibility
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }} // Slower, smoother transition
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
      
      {/* Primary Left-to-Right Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent z-10"></div>
      
      {/* Secondary Bottom-Up Gradient for Footer blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-10 mix-blend-overlay"></div>
    </div>
  );
};

export default HeroBackground;