import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoShowcaseProps {
  videoId: string;
  title?: string;
  description?: string;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoId,
  title = 'Veja a PVS Decore em Ação',
  description = 'Assista ao vídeo e conheça nosso trabalho de perto',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const embedUrl = isPlaying
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1&playsinline=1`
    : '';

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-brand-orange/30">
              PVS Decore em Vídeo
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">Conteúdo Exclusivo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-sm font-medium">Qualidade Premium</span>
              </div>
            </div>
          </motion.div>

          {/* Video side - 9:16 vertical */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow ring behind video */}
              <div className="absolute -inset-1 bg-gradient-to-b from-brand-orange via-orange-500 to-brand-orange rounded-[2rem] opacity-30 group-hover:opacity-50 blur-md transition-opacity duration-500" />

              {/* Video container - 9:16 aspect ratio */}
              <div className="relative w-[270px] sm:w-[300px] md:w-[340px] aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail background */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Play button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center w-full h-full group/play"
                      aria-label="Reproduzir vídeo"
                    >
                      <span className="absolute w-20 h-20 rounded-full bg-brand-orange/30 animate-ping group-hover/play:animate-none" />
                      <span className="relative w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-orange-500">
                        <Play size={32} className="text-white ml-1" fill="white" />
                      </span>
                    </button>

                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white text-sm font-semibold truncate">{title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Toque para assistir</p>
                    </div>
                  </>
                ) : (
                  <>
                    <iframe
                      src={embedUrl}
                      title={title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                    />
                    {/* Custom controls overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-3 pointer-events-none">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
                        aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
                      >
                        {isMuted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
                      </button>
                      <span className="text-white/70 text-xs font-medium">
                        {isMuted ? 'Som desligado' : 'Som ligado'}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Floating accent decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-brand-orange/40 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-orange-500/30 blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoShowcase;
