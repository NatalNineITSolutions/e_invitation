import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Gift, Compass } from 'lucide-react';
import { InviteConfig } from '../data/invite';

interface DetailsGridProps {
  config: InviteConfig;
}

export default function DetailsGrid({ config }: DetailsGridProps) {
  const { event } = config;

  const gridItems = [
    {
      icon: Calendar,
      label: "DATE",
      primary: event.dateDisplay,
      secondary: "Wednesday",
    },
    {
      icon: Clock,
      label: "TIME",
      primary: event.timeDisplay,
      secondary: event.timeSubtitle,
    },
    {
      icon: MapPin,
      label: "VENUE",
      primary: event.venueName,
      secondary: event.venueAddress,
    },
    {
      icon: Gift,
      label: "BLESSINGS ONLY",
      primary: "No Gifts Please",
      secondary: event.blessingsOnlyNote,
    },
  ];

  return (
    <section className="relative w-full bg-wood-brown py-10 md:py-16 px-4 sm:px-6 mt-6 md:mt-8 mb-0 shadow-inner select-none flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E1B10] via-wood-brown to-[#25150C] opacity-95 pointer-events-none" />

      <div className="relative z-10 text-center mb-6 max-w-lg px-2">
        <p className="font-display text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E8C873] font-semibold">
          SACRED GATHERING
        </p>
        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.18em] text-gold-gradient mt-1">
          EVENT DETAILS
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-gold/60 bg-gradient-to-b from-[#FFFDF8] via-cream to-[#F5EBD7] p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-gold/70" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-gold/70" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-gold/70" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-gold/70" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {gridItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`flex flex-col ${
                  idx < 2 ? 'sm:border-b sm:border-gold/25 pb-4' : 'pt-2 sm:pt-0'
                } ${idx % 2 === 0 ? 'sm:pr-4 sm:border-r sm:border-gold/25' : 'sm:pl-4'}`}
              >
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-2">
                  <Icon className="w-5 h-5 text-[#8B6A1F]" strokeWidth={1.5} />
                </div>

                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#8B6A1F] font-bold">
                  {item.label}
                </span>

                <p className="font-sans font-bold text-base sm:text-lg md:text-xl text-maroon mt-1 leading-snug">
                  {item.primary}
                </p>

                <p className="font-sans text-xs sm:text-sm text-brown/85 mt-1 leading-relaxed font-normal">
                  {item.secondary}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 flex justify-center w-full">
        <motion.a
          href={event.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="w-full max-w-xs md:max-w-sm py-3.5 px-8 rounded-full border-2 border-gold bg-[#FFFDF8] hover:bg-gold/15 text-[#8B6A1F] font-display font-bold text-xs md:text-sm uppercase tracking-[0.25em] flex items-center justify-center space-x-3 shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Open event venue directions on Google Maps"
        >
          <Compass className="w-5 h-5 text-[#8B6A1F]" />
          <span>DIRECTIONS</span>
        </motion.a>
      </div>
    </section>
  );
}
