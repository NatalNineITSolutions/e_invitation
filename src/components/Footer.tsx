import React from 'react';
import { motion } from 'framer-motion';
import OrnamentDivider from './OrnamentDivider';
import { CalendarPlus } from 'lucide-react';
import { InviteConfig } from '../data/invite';

interface FooterProps {
  config: InviteConfig;
}

export default function Footer({ config }: FooterProps) {
  const handleDownloadCalendar = () => {
    const { calendarEvent } = config.event;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${config.coupleNames}//Griha Pravesha//EN`,
      'BEGIN:VEVENT',
      `SUMMARY:${calendarEvent.title}`,
      `DESCRIPTION:${calendarEvent.description}`,
      `LOCATION:${calendarEvent.location}`,
      `DTSTART:${calendarEvent.startDate}`,
      `DTEND:${calendarEvent.endDate}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    const sanitizedFileName = config.coupleNames.replace(/[^a-zA-Z0-9]/g, '_');
    link.setAttribute('download', `${sanitizedFileName}_Griha_Pravesha.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="w-full bg-cream pt-8 pb-16 px-6 text-center select-none relative">
      <OrnamentDivider variant="red" className="max-w-[180px] md:max-w-xs mx-auto mb-5" />

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-body italic text-lg sm:text-xl md:text-2xl text-brown/90 leading-relaxed max-w-2xl mx-auto"
      >
        &ldquo;{config.closingMessage}&rdquo;
      </motion.p>

      <motion.h4
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-5 font-display font-bold text-xl sm:text-2xl md:text-3xl text-maroon uppercase tracking-[0.16em]"
      >
        {config.coupleNames}
      </motion.h4>

      <p className="mt-2 text-xs md:text-sm font-display uppercase tracking-[0.25em] text-[#8B6A1F]">
        Shanti Shanti Shantihi
      </p>

      <div className="mt-6 flex justify-center">
        <motion.button
          onClick={handleDownloadCalendar}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="py-3 px-8 rounded-full border border-gold/60 bg-white/70 hover:bg-gold/10 text-brown/90 font-display text-xs md:text-sm uppercase tracking-[0.2em] flex items-center space-x-2.5 transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Add housewarming event to calendar"
        >
          <CalendarPlus className="w-4 h-4 text-gold" />
          <span>ADD TO CALENDAR (.ICS)</span>
        </motion.button>
      </div>

      <div className="mt-8 text-xs font-body text-brown/55">
        With love, blessings & happiness · 2026
      </div>
    </footer>
  );
}
