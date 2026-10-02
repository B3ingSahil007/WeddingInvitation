import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audioPlayer';

export default function EnvelopeOpening({ onOpened }) {
  // 'idle' (showing startingcard.png) -> 'video' (playing cardopen.mp4)
  const [stage, setStage] = useState('idle');
  const videoRef = useRef(null);
  const hasTriggeredOpen = useRef(false);

  const triggerOpen = () => {
    if (hasTriggeredOpen.current) return;
    hasTriggeredOpen.current = true;
    if (onOpened) {
      onOpened();
    }
  };

  const handleStartOpen = () => {
    if (stage !== 'idle') return;

    // Start audio
    try {
      weddingAudio.play();
    } catch (e) {
      console.log('Audio playback notice:', e);
    }

    // Sparkle burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.51, x: 0.5 },
      colors: ['#e5c37e', '#ffd787', '#b8860b', '#7c1822', '#f9f5ec'],
      disableForReducedMotion: true,
      shapes: ['circle'],
    });

    // Directly switch to cardopen video
    setStage('video');

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.log('Video play error:', err);
        });
      }
    }, 50);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration || isNaN(duration)) return;

    // Transition directly to the main scrollable card as video reaches completion
    if (duration - currentTime <= 0.3) {
      triggerOpen();
    }
  };

  const handleVideoEnded = () => {
    triggerOpen();
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    triggerOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-radial from-[#382d27] via-[#201a17] to-[#120f0d] p-0 overflow-hidden select-none">
      {/* Background ambient glowing orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

      {/* Main Container - Full height from top to bottom */}
      <div
        className="relative w-full max-w-[430px] h-[100dvh] h-screen shadow-[0_25px_65px_rgba(0,0,0,0.75)] overflow-hidden cursor-pointer group"
        onClick={stage === 'idle' ? handleStartOpen : undefined}
      >
        {/* 1. STARTING CARD: Clean startingcard.png without any extra overlay text */}
        {stage === 'idle' && (
          <div className="relative w-full h-full">
            <img
              src="/startingcard.png"
              alt="Starting Card"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        )}

        {/* 2. DIRECT VIDEO PLAYBACK: public/cardopen.mp4 */}
        {stage === 'video' && (
          <div className="relative w-full h-full bg-[#fbf7ee] overflow-hidden">
            <video
              ref={videoRef}
              src="/cardopen.mp4"
              playsInline
              autoPlay
              muted={false}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
            />

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white/90 text-xs font-montserrat transition-all cursor-pointer shadow-lg"
            >
              <span>Skip</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
