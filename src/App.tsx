import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashDoor from './components/SplashDoor';
import GaneshaHero from './components/GaneshaHero';
import CoupleHero from './components/CoupleHero';
import InviteSection from './components/InviteSection';
import { useAudio } from './hooks/useAudio';
import { inviteData } from './data/invite';

export default function App() {
  // Stage flow: 'home' (home page with video + touch the door) -> 'hero' (Lord Ganesha sanctum) -> 'content' (Invitation)
  const [stage, setStage] = useState<'home' | 'hero' | 'content'>('home');

  const {
    isPlaying,
    isMuted,
    play: playAudio,
    togglePlay,
    toggleMute
  } = useAudio(inviteData.music.audioUrl);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const coupleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stage === 'home') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100dvh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    if (inviteData.coupleNames) {
      document.title = `Griha Pravesha Invitation | ${inviteData.coupleNames} - Dhwani`;
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [stage]);

  // When user taps "TOUCH THE DOOR", video plays on the home page and on finish calls this to go inside
  const handleEnterHome = () => {
    playAudio();
    setStage('hero');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // SKIP button jumps straight to invitation content
  const handleSkip = () => {
    playAudio();
    setStage('content');
    setTimeout(() => {
      const el = document.getElementById('invitation-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollNext = () => {
    if (coupleRef.current) {
      coupleRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('invitation-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-temple-black text-cream flex flex-col items-center">
      <main className="w-full min-h-100dvh bg-temple-black relative shadow-2xl overflow-x-hidden">
        
        {/* STAGE 1: HOME PAGE WITH VIDEO + "TOUCH THE DOOR" */}
        {stage === 'home' && (
          <div className="fixed inset-0 z-40 w-full h-full pointer-events-auto">
            <SplashDoor
              onTapDoor={handleEnterHome}
              onSkip={handleSkip}
              isPlaying={isPlaying}
              isMuted={isMuted}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
              config={inviteData}
            />
          </div>
        )}

        {/* STAGES: MOUNTED SO SCROLL CURTAIN UPWARD REVEALS SANCTUM DIRECTLY */}
        <div className="w-full flex flex-col">
          {/* LORD GANESHA SANCTUM HERO */}
          <div ref={heroRef} className="snap-start w-full">
            <GaneshaHero
              config={inviteData}
              onScrollNext={handleScrollNext}
            />
          </div>

          {/* ILLUSTRATED COUPLE HERO */}
          <div ref={coupleRef} className="snap-start w-full">
            <CoupleHero config={inviteData} />
          </div>

          {/* INVITATION + VERTICAL TIMELINE + DETAILS + FOOTER */}
          <div className="w-full">
            <InviteSection
              config={inviteData}
              isPlaying={isPlaying}
              isMuted={isMuted}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
