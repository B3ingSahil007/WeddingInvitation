import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

export default function MusicPlayerWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    // Check initial state
    setIsPlaying(weddingAudio.isPlaying);

    const interval = setInterval(() => {
      setIsPlaying(weddingAudio.isPlaying);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    const newState = weddingAudio.toggle();
    setIsPlaying(newState);
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2 select-none">
      <button
        onClick={handleToggle}
        className={`group flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer ${
          isPlaying
            ? 'bg-[#3b2b22]/85 text-amber-200 border-[#dfb76c]/60 shadow-[0_4px_16px_rgba(223,183,108,0.25)]'
            : 'bg-black/60 text-stone-300 border-white/10 hover:border-white/20'
        }`}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <>
            {/* Animated Audio Equalizer Bars */}
            <div className="flex items-end gap-[2px] h-3.5 w-3.5">
              <span className="w-[2px] bg-amber-300 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.6s' }} />
              <span className="w-[2px] bg-amber-200 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.8s', animationDelay: '0.15s' }} />
              <span className="w-[2px] bg-amber-400 rounded-full animate-bounce" style={{ height: '50%', animationDuration: '0.5s', animationDelay: '0.3s' }} />
            </div>
            <span className="text-[11px] font-montserrat font-medium tracking-wider hidden sm:inline">
              Music Playing
            </span>
            <Volume2 className="w-3.5 h-3.5 text-amber-300" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[11px] font-montserrat font-medium tracking-wider hidden sm:inline text-stone-300">
              Music Muted
            </span>
          </>
        )}
      </button>
    </div>
  );
}
