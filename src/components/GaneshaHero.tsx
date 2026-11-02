import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import OrnamentDivider from './OrnamentDivider';
import { InviteConfig } from '../data/invite';

interface GaneshaHeroProps {
  config: InviteConfig;
  onScrollNext: () => void;
}

export default function GaneshaHero({ config, onScrollNext }: GaneshaHeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-100dvh overflow-hidden bg-gradient-to-b from-[#070503] via-[#120B06] to-[#070503] flex flex-col justify-between items-center text-center select-none snap-start py-6 sm:py-8">
      
      {/* DIVINE SANCTUM ATMOSPHERE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={config.images.ganeshaAlcove}
          alt="Lord Ganesha golden murti in sacred sanctum"
          loading="eager"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-35 scale-105 filter blur-xs"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070503] via-[#0E0804]/75 to-[#070503]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(243,215,142,0.22)_0%,rgba(139,106,31,0.12)_45%,transparent_75%)]" />
      </div>

      {/* FLOATING LIGHT SPARKS & DIYA PARTICLES */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FFE58F] animate-float-particle opacity-70"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${15 + (i * 4)}%`,
              left: `${8 + ((i * 17) % 84)}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${4.5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* TOP: ROYAL SACRED EMBLEM WITH GLOWING "ॐ" */}
      <div className="relative z-10 w-full pt-2 sm:pt-4 px-4 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#E8C873]/60 bg-gradient-to-b from-[#2E1B10]/90 to-[#120B06]/90 backdrop-blur-md shadow-[0_0_25px_rgba(232,200,115,0.5)]">
            <span className="font-display text-2xl sm:text-3xl font-bold text-gold-bright gold-glow">
              ॐ
            </span>
          </div>

          <div className="flex items-center space-x-2 mt-2.5 opacity-90">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-3.5 h-3.5 text-gold-bright animate-pulse" />
            <span className="font-display text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#F3D78E] font-medium">
              Vakratunda Mahakaya
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-bright animate-pulse" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>
      </div>

      {/* CENTER: MAJESTIC GOLDEN GANESHA SANCTUM PORTRAIT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center my-auto px-4 max-w-lg"
      >
        {/* Ornate Gold Sunburst Halo Ring */}
        <div className="relative p-2 rounded-full bg-gradient-to-b from-[#E8C873]/40 via-[#8B6A1F]/30 to-transparent shadow-[0_0_55px_rgba(232,200,115,0.45)]">
          
          {/* Framed Glowing Medallion with Idol */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-[#F3D78E] shadow-2xl bg-black">
            <img
              src={config.images.ganeshaAlcove}
              alt="Lord Ganesha"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-transform duration-700 hover:scale-105"
            />
            {/* Soft inner radial vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_50%,rgba(7,5,3,0.5)_100%)] pointer-events-none" />
          </div>

          {/* Golden Bell / Diya Badges */}
          <div className="absolute -bottom-2 inset-x-0 flex justify-center pointer-events-none">
            <span className="py-1 px-4 rounded-full border border-gold/70 bg-[#1B1109]/95 text-gold-bright text-[10px] sm:text-xs font-display tracking-[0.25em] uppercase shadow-lg backdrop-blur-md">
              Shree Ganeshayana
            </span>
          </div>
        </div>

        <p className="mt-5 text-xs sm:text-sm font-display tracking-[0.28em] uppercase text-cream/90 font-light">
          Surya Koti Samaprabha · Nirvighnam Kuru Me Deva
        </p>
      </motion.div>

      {/* BOTTOM AREA: ROYAL INVOCATION & COMMENCEMENT CALLOUT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full px-4 sm:px-6 pb-4 sm:pb-8 pt-4 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-1.5">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <p className="font-display text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-bright font-semibold">
            {config.invocation.prefix}
          </p>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.22em] leading-tight text-gold-gradient drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          GRIHA<br />PRAVESH
        </motion.h1>

        <motion.div variants={itemVariants} className="w-full">
          <OrnamentDivider variant="gold" className="my-2.5 max-w-[200px] sm:max-w-xs mx-auto" />
        </motion.div>

        <motion.p variants={itemVariants} className="font-body italic text-base sm:text-2xl text-cream leading-snug">
          &ldquo;{config.tagline}&rdquo;<br />
          <span className="text-xs sm:text-lg text-cream/80 tracking-wide font-normal">{config.subTagline}</span>
        </motion.p>

        {/* Date & City Tag */}
        <motion.div variants={itemVariants} className="mt-3.5 py-1.5 px-6 rounded-full border border-gold/50 bg-gradient-to-r from-[#2E1B10]/80 via-[#3B2314]/80 to-[#2E1B10]/80 shadow-md backdrop-blur-xs">
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.28em] text-gold-bright font-semibold">
            {config.event.dateShort} · {config.event.city}
          </p>
        </motion.div>

        {/* Scroll Next CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={onScrollNext}
          aria-label="Scroll down to invitation"
          className="mt-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/60 flex items-center justify-center text-gold hover:border-gold-bright hover:bg-gold/15 transition-all shadow-[0_0_15px_rgba(201,162,75,0.3)] animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
        >
          <ChevronDown className="w-5 h-5 text-gold-bright" />
        </motion.button>
      </motion.div>
    </section>
  );
}
