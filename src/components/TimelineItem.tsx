import React from 'react';
import { motion } from 'framer-motion';
import { ProgramItemType } from '../data/invite';

function TimelineIcon({ type = 'kalasam' }: { type?: string }) {
  if (type === 'kalasam') {
    return (
      <svg viewBox="0 0 50 50" className="w-8 h-8 md:w-10 md:h-10 text-[#C9A24B]">
        <polygon points="25,4 19,15 31,15" fill="#8B6A1F" />
        <path d="M19 15 C13 11 9 13 7 19 C13 18 17 17 19 15 Z" fill="#2E6B34" />
        <path d="M31 15 C37 11 41 13 43 19 C37 18 33 17 31 15 Z" fill="#2E6B34" />
        <ellipse cx="25" cy="17" rx="8" ry="2.5" fill="#C9A24B" />
        <path d="M17 18 C11 23 11 36 25 38 C39 36 39 23 33 18 Z" fill="#E8C873" />
        <circle cx="25" cy="27" r="2.5" fill="#B3121B" />
        <line x1="18" y1="27" x2="32" y2="27" stroke="#B3121B" strokeWidth="1.2" />
        <path d="M19 38 L31 38 L33 42 L17 42 Z" fill="#8B6A1F" />
      </svg>
    );
  }

  if (type === 'door') {
    return (
      <svg viewBox="0 0 50 50" className="w-8 h-8 md:w-10 md:h-10 text-[#C9A24B]">
        <rect x="10" y="6" width="30" height="38" rx="2" fill="#5A1F1A" />
        <rect x="13" y="9" width="11" height="32" fill="#3B2314" stroke="#C9A24B" strokeWidth="1" />
        <rect x="26" y="9" width="11" height="32" fill="#3B2314" stroke="#C9A24B" strokeWidth="1" />
        <circle cx="22" cy="25" r="2" fill="#E8C873" />
        <circle cx="28" cy="25" r="2" fill="#E8C873" />
        <path d="M10 6 Q25 12 40 6" fill="none" stroke="#E25822" strokeWidth="2" />
      </svg>
    );
  }

  if (type === 'ganesha') {
    return (
      <svg viewBox="0 0 50 50" className="w-8 h-8 md:w-10 md:h-10 text-[#C9A24B]">
        <circle cx="25" cy="10" r="2" fill="#E8C873" />
        <polygon points="25,10 20,18 30,18" fill="#C9A24B" />
        <path d="M20 20 C14 20 10 26 14 32 C18 32 19 28 20 25 Z" fill="#E8C873" />
        <path d="M30 20 C36 20 40 26 36 32 C32 32 31 28 30 25 Z" fill="#E8C873" />
        <circle cx="25" cy="25" r="6" fill="#C9A24B" />
        <path d="M24 26 C24 33 22 41 29 42 C33 42 34 38 32 36" fill="none" stroke="#8B6A1F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="25" cy="24" r="1.5" fill="#B3121B" />
      </svg>
    );
  }

  if (type === 'lamp') {
    return (
      <svg viewBox="0 0 50 50" className="w-8 h-8 md:w-10 md:h-10 text-[#C9A24B]">
        <path d="M25 6 C28 10 30 14 28 17 C26 19 23 19 22 17 C21 14 23 10 25 6 Z" fill="#E25822" />
        <circle cx="25" cy="14" r="2" fill="#FDB813" />
        <ellipse cx="25" cy="20" rx="14" ry="4" fill="#E8C873" />
        <path d="M11 20 C13 29 37 29 39 20 Z" fill="#C9A24B" />
        <rect x="23" y="27" width="4" height="12" fill="#8B6A1F" />
        <ellipse cx="25" cy="40" rx="9" ry="3" fill="#C9A24B" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 50 50" className="w-8 h-8 md:w-10 md:h-10 text-[#2E6B34]">
      <path d="M8 32 C12 18 25 12 42 16 C38 32 25 38 8 32 Z" fill="#2E6B34" />
      <line x1="10" y1="31" x2="40" y2="17" stroke="#8B6A1F" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="3" fill="#FFF2B2" />
      <circle cx="29" cy="25" r="2.5" fill="#E8C873" />
      <circle cx="16" cy="26" r="2" fill="#B3121B" />
      <circle cx="34" cy="22" r="2" fill="#E25822" />
    </svg>
  );
}

interface TimelineItemProps {
  item: ProgramItemType;
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: (index % 4) * 0.1 }}
      className="relative w-full flex flex-col md:flex-row items-center py-5 md:py-6"
    >
      {/* MOBILE CENTERED / DESKTOP LEFT: Medallion */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-end md:pr-10 mb-2 md:mb-0">
        <div className="relative group">
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border border-gold/60 bg-[#FFFDF8] shadow-[0_4px_16px_rgba(139,106,31,0.15)] flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-105">
            <TimelineIcon type={item.iconType} />
          </div>
          <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 pointer-events-none" />
        </div>
      </div>

      {/* CENTER LINE NODE: Small Red Lotus (Desktop center node / Mobile subtle accent) */}
      <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 items-center justify-center z-10">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cream border border-gold/50 flex items-center justify-center shadow-xs">
          <span className="text-xs md:text-sm">🪷</span>
        </div>
      </div>

      {/* MOBILE CENTERED / DESKTOP RIGHT: Title and Time */}
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start md:pl-10 text-center md:text-left px-4 md:px-0">
        <div className="flex items-center space-x-1.5 md:space-x-0">
          <span className="md:hidden text-xs">🪷</span>
          <h4 className="font-sans font-bold text-base sm:text-lg md:text-xl tracking-wide text-maroon uppercase leading-tight">
            {item.title}
          </h4>
        </div>

        <div className="mt-1.5">
          <span className="text-xs sm:text-sm font-sans font-semibold text-[#8B6A1F] tracking-wide bg-gold/15 px-3.5 py-1 rounded-full border border-gold/40 inline-block shadow-2xs">
            {item.time}
          </span>
        </div>

        <p className="mt-2 font-sans text-xs sm:text-sm text-brown/90 leading-relaxed font-normal max-w-[320px] md:max-w-[280px]">
          {item.note}
        </p>
      </div>
    </motion.div>
  );
}
