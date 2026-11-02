import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { InviteConfig } from '../data/invite';

interface DoorOpeningVideoProps {
  config: InviteConfig;
  onComplete: () => void;
  onSkip: () => void;
}

export default function DoorOpeningVideo({
  config,
  onComplete,
  onSkip
}: DoorOpeningVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSource = config.images.doorVideo || "/f1.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly load and play with audio enabled from user gesture
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Unmuted autoplay restricted, attempting muted play:", err);
        video.muted = true;
        video.play().catch((e) => console.error("Video play error:", e));
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black select-none flex flex-col justify-between items-center overflow-hidden">
      {/* Top Controls: Skip Button */}
      <div className="absolute top-6 right-6 md:right-12 z-40">
        <button
          onClick={onSkip}
          aria-label="Skip video and enter invitation directly"
          className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-temple-black/80 backdrop-blur-md border border-gold/50 text-gold hover:border-gold hover:bg-gold/15 transition-all text-xs font-display tracking-widest active:scale-95 shadow-xl cursor-pointer"
        >
          <span>SKIP</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* FULL-SCREEN DOOR OPENING 1080p VIDEO */}
      <div className="absolute inset-0 z-20 w-full h-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          playsInline
          autoPlay
          preload="auto"
          onEnded={onComplete}
          onError={() => {
            console.warn("Video failed to play, advancing to invitation");
            onComplete();
          }}
          className="w-full h-full object-cover object-center"
        >
          <source src={videoSource} type="video/mp4" />
          <source src="/smoothy_video_play_da8a85d3_1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-temple-black via-temple-black/50 to-transparent pointer-events-none z-30" />

      {/* Sacred Mantra Subtitle Over Video */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute bottom-6 inset-x-0 z-40 text-center pointer-events-none"
      >
        <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-gold/90 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {config.invocation.prefix} · Griha Pravesham
        </p>
      </motion.div>
    </div>
  );
}
