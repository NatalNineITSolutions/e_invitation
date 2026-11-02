import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import OrnamentDivider from './OrnamentDivider';
import { InviteConfig } from '../data/invite';

interface CoupleHeroProps {
  config: InviteConfig;
}

export default function CoupleHero({ config }: CoupleHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.01, 1.03]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-temple-black via-[#160E08] to-temple-black overflow-hidden select-none py-10 md:py-16 px-3 sm:px-6 flex flex-col items-center"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(201,162,75,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Floating golden sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FFE58F] animate-float-particle opacity-60"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${20 + (i * 6)}%`,
              left: `${8 + ((i * 17) % 84)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* SECTION HEADER WITH ORNAMENTS */}
      <div className="relative z-10 w-full max-w-xl text-center mb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2 text-gold/90 mb-1"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <p className="font-display text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold text-gold-bright">
            AUSPICIOUS COMMENCEMENT
          </p>
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.2em] text-gold-gradient mt-1"
        >
          GRIHA PRAVESH
        </motion.h3>

        <OrnamentDivider variant="gold" className="my-2.5 max-w-[200px] sm:max-w-xs mx-auto" />
      </div>

      {/* ROYAL FRAMED INVITATION CARD */}
      <motion.div 
        style={{ scale }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#8B6A1F] via-[#E8C873]/50 to-[#8B6A1F] shadow-[0_0_50px_rgba(201,162,75,0.35)]"
      >
        {/* Inner Card Container */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF1E3] to-[#F5E6CC] border border-[#C9A24B]/40 shadow-inner">
          
          {/* Royal Corner Ornaments */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#8B6A1F] z-20 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#8B6A1F] z-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#8B6A1F] z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#8B6A1F] z-20 pointer-events-none" />

          {/* Invitation Artwork (Complete display without cropping) */}
          <div className="w-full flex items-center justify-center p-2 sm:p-4 md:p-6">
            <img
              key={config.images.coupleFull}
              src={config.images.coupleFull}
              alt="Housewarming Ceremony - Abinaya & Arunkumar"
              loading="eager"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl shadow-lg transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </div>
      </motion.div>

      {/* LUXURIOUS COUPLE PILL BANNER BELOW CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-6 sm:mt-8 flex flex-col items-center text-center px-4"
      >
        <div className="py-2.5 px-8 sm:px-12 rounded-full border border-gold/70 bg-gradient-to-r from-[#1B1109]/95 via-[#2E1B10]/95 to-[#1B1109]/95 backdrop-blur-md shadow-[0_0_30px_rgba(201,162,75,0.4)]">
          <span className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-gold-bright tracking-[0.18em] uppercase drop-shadow-md">
            {config.coupleNames}
          </span>
        </div>

        <p className="mt-2 text-xs sm:text-sm font-display uppercase tracking-[0.3em] text-cream/90 font-medium">
          Cordially invite you & your family to celebrate our new beginning
        </p>
      </motion.div>
    </section>
  );
}
