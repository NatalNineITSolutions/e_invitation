import React from 'react';
import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';
import TimelineItem from './TimelineItem';
import DetailsGrid from './DetailsGrid';
import Footer from './Footer';
import MusicToggle from './MusicToggle';
import { InviteConfig } from '../data/invite';

interface InviteSectionProps {
  config: InviteConfig;
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
}

export default function InviteSection({
  config,
  isPlaying,
  isMuted,
  togglePlay,
  toggleMute
}: InviteSectionProps) {
  return (
    <div id="invitation-section" className="relative w-full bg-paper-pattern text-brown select-none">

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-cream/95 border-b border-gold/30 px-6 md:px-12 py-3 flex items-center justify-between shadow-xs">
        <span className="font-display font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-maroon">
          {config.coupleNames}
        </span>

        <MusicToggle
          isPlaying={isPlaying}
          isMuted={isMuted}
          togglePlay={togglePlay}
          toggleMute={toggleMute}
          mode="header"
        />
      </header>

      {/* TOP INVITATION BODY */}
      <div className="px-6 md:px-12 pt-10 pb-4 flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-[#8B6A1F] font-semibold"
        >
          {config.subTitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-maroon uppercase tracking-[0.15em] my-3 drop-shadow-xs"
        >
          {config.displayNames}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-brown/90 leading-relaxed mt-2 max-w-2xl"
        >
          {config.invocation.body}
        </motion.p>

        <div className="w-full mt-12 md:mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs md:text-base uppercase tracking-[0.3em] text-maroon font-bold"
          >
            AUSPICIOUS PROGRAM
          </motion.h3>
          <OrnamentDivider variant="red" className="my-2 max-w-[200px] md:max-w-xs mx-auto" />
        </div>
      </div>

      {/* VERTICAL TIMELINE WITH CENTRAL LINE (DESKTOP) */}
      <div className="relative w-full max-w-2xl mx-auto px-4 pb-8">
        <div className="hidden md:block absolute left-[50%] -translate-x-[0.5px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#C9A24B] via-[#B3121B] to-[#8B6A1F] opacity-75 pointer-events-none" />

        <div className="relative z-10 flex flex-col space-y-2">
          {config.program.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === config.program.length - 1}
            />
          ))}
        </div>
      </div>

      {/* STAGE 6: EVENT DETAILS IN WOOD-BROWN BAND */}
      <DetailsGrid config={config} />

      {/* STAGE 7: FOOTER */}
      <Footer config={config} />
    </div>
  );
}
