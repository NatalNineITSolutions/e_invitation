import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronRight, Hand } from 'lucide-react';
import { InviteConfig } from '../data/invite';

interface SplashDoorProps {
  onTapDoor: () => void;
  onSkip: () => void;
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  config: InviteConfig;
}

export default function SplashDoor({
  onTapDoor,
  onSkip,
  isMuted,
  toggleMute,
  config
}: SplashDoorProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const videoSource = config.images.doorVideo || "/Door_open.mp4";

  // When user clicks "TOUCH THE DOOR", play video directly right here on the home screen
  const handleTouchDoor = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.currentTime = 0;
      video.play().then(() => {
        setIsPlayingVideo(true);
      }).catch((err) => {
        console.warn("Direct play with audio restricted, trying muted play:", err);
        video.muted = true;
        video.play().then(() => setIsPlayingVideo(true)).catch(() => {
          onTapDoor();
        });
      });
    } else {
      onTapDoor();
    }
  };

  // When the video finishes playing, go inside to the invitation
  const handleVideoEnded = () => {
    onTapDoor();
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative w-full h-100dvh min-h-100dvh overflow-hidden bg-black select-none flex flex-col justify-between">
      
      {/* 1080P DOOR VIDEO (CLEAN FULL-SCREEN BACKGROUND) */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center bg-black overflow-hidden pointer-events-none">
        <video
          key={videoSource}
          ref={videoRef}
          src={videoSource}
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>

      {/* TOP HEADER CONTROLS */}
      <header className="relative z-30 flex items-center justify-between px-4 sm:px-6 md:px-12 pt-4 sm:pt-6">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-temple-black/85 backdrop-blur-md border border-[#8B6A1F]/60 text-gold hover:border-gold transition-colors text-[11px] sm:text-xs font-display tracking-wider cursor-pointer shadow-lg"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-gold-bright" />}
          <span>{isMuted ? "MUTED" : "SOUND"}</span>
        </button>

        <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-display text-gold-bright font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/40 px-3 py-1 rounded-full border border-gold/25 backdrop-blur-xs">
          GRIHA PRAVESHAM
        </div>

        <button
          onClick={onSkip}
          aria-label="Skip straight to invitation"
          className="flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-temple-black/85 backdrop-blur-md border border-gold/60 text-gold hover:border-gold hover:bg-gold/15 transition-all text-[11px] sm:text-xs font-display tracking-widest active:scale-95 shadow-xl cursor-pointer"
        >
          <span>SKIP</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* BOTTOM CONTROLS: "TOUCH THE DOOR" BUTTON */}
      {!isPlayingVideo ? (
        <div className="relative z-30 flex flex-col items-center pb-8 md:pb-12 px-6 text-center mt-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-base md:text-xl tracking-[0.35em] uppercase text-gold-gradient font-bold mb-4 gold-glow"
          >
            {config.invocation.prefix}
          </motion.h2>

          <motion.button
            onClick={handleTouchDoor}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full max-w-xs md:max-w-sm py-4 px-8 rounded-full border-2 border-[#C9A24B] bg-gradient-to-r from-[#1B1109]/95 via-[#3B2314]/95 to-[#1B1109]/95 backdrop-blur-md text-gold font-display font-bold tracking-[0.25em] text-xs md:text-sm uppercase flex items-center justify-center space-x-3 animate-pulse-glow shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-gold cursor-pointer"
            aria-label="Touch the door to play the video and enter the home"
          >
            <Hand className="w-4 h-4 md:w-5 md:h-5 text-[#F5E296] animate-pulse" />
            <span className="text-[#FDF2D0]">TOUCH THE DOOR</span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xs md:text-sm font-body italic text-ivory/80 tracking-wider"
          >
            {config.coupleNames} · {config.event.dateDisplay}
          </motion.p>
        </div>
      ) : (
        /* While video is playing: minimal sleek indicator */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-30 pb-6 text-center pointer-events-none mt-auto"
        >
          <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-gold/90 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Entering the Sacred Home...
          </p>
        </motion.div>
      )}
    </div>
  );
}
