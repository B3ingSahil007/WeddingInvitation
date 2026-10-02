import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ArchHeroSection({ onScrollDown }) {
  const videoRef = useRef(null);

  return (
    <section className="relative w-full bg-[#fbf7ee] select-none">
      {/* Living Swan Video Container - 9:16 Aspect Ratio */}
      <div className="relative w-full aspect-[9/16] overflow-hidden">
        {/* Background Swan Video (public/swan.mov) */}
        <video
          ref={videoRef}
          src="/swan.mov"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/card_arch.jpg"
          className="w-full h-full object-cover"
        />

        {/* Ambient Warm Golden Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/10 via-transparent to-[#fbf7ee]/25 pointer-events-none" />

        {/* Real HTML/CSS Calligraphy Typography Overlay */}
        <div className="absolute inset-0 pointer-events-none text-center">
          {/* Top: Wedding Day & Date */}
          <div className="absolute top-[17%] inset-x-0 flex flex-col items-center">
            <h2 className="font-great-vibes text-4xl sm:text-5xl text-[#8e6e39] drop-shadow-[0_1px_3px_rgba(255,255,255,0.85)] tracking-wide">
              Wedding Day
            </h2>
            <p className="font-cormorant text-2xl sm:text-3xl text-[#816330] font-normal tracking-widest mt-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)]">
              27.09.26
            </p>
          </div>

          {/* Center: Groom & Bride Names */}
          <div className="absolute top-[32%] inset-x-0 flex flex-col items-center">
            <h1 className="font-alex text-6xl sm:text-7xl text-[#7f602b] drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] tracking-wide leading-none">
              Zohan
            </h1>
            <span className="font-great-vibes text-4xl sm:text-5xl text-[#92733c] my-0.5 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]">
              &
            </span>
            <h1 className="font-alex text-6xl sm:text-7xl text-[#7f602b] drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] tracking-wide leading-none">
              Rose
            </h1>
          </div>

          {/* Bottom: Scroll Down Prompt */}
          <div
            onClick={onScrollDown}
            className="absolute top-[59%] inset-x-0 flex flex-col items-center pointer-events-auto cursor-pointer group z-20"
          >
            <span className="font-great-vibes text-2xl sm:text-3xl text-[#8e6e39] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] group-hover:text-[#5e4720] transition-colors">
              Scroll down
            </span>
            <ChevronDown className="w-5 h-5 text-[#8e6e39] animate-bounce -mt-0.5 drop-shadow group-hover:text-[#5e4720] transition-colors" />
          </div>
        </div>

        {/* Natural Deckle Torn Edge Overlapping Video Bottom (Smooth organic cut, NO jagged teeth) */}
        <div className="absolute -bottom-[1px] inset-x-0 z-10 pointer-events-none select-none">
          <svg
            viewBox="0 0 1200 48"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-10 drop-shadow-[0_-2px_4px_rgba(0,0,0,0.06)]"
          >
            <path
              d="M0,24 
                 Q50,20 100,25 
                 T200,22 
                 T300,26 
                 T400,21 
                 T500,25 
                 T600,22 
                 T700,26 
                 T800,21 
                 T900,25 
                 T1000,22 
                 T1100,26 
                 T1200,23 
                 L1200,48 
                 L0,48 
                 Z"
              fill="#fbf7ee"
            />
            <path
              d="M0,24 
                 Q50,20 100,25 
                 T200,22 
                 T300,26 
                 T400,21 
                 T500,25 
                 T600,22 
                 T700,26 
                 T800,21 
                 T900,25 
                 T1000,22 
                 T1100,26 
                 T1200,23"
              fill="none"
              stroke="#dccab0"
              strokeWidth="1.5"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* FLOWERS AT BOTTOM OF VIDEO (public/rootleft.webp & public/rootright.webp) */}
      {/* Left Floral Corner Bouquet - Larger, positioned lower, with subtle organic moving breeze animation */}
      <img
        src="/rootleft.webp"
        alt="Floral Corner Left"
        className="absolute -bottom-14 sm:-bottom-30 -left-3 sm:-left-4 w-[50%] sm:w-[60%] max-w-[260px] h-auto pointer-events-none z-30 drop-shadow-md select-none animate-floral-left"
      />

      {/* Right Floral Corner Bouquet - Larger, positioned lower, with subtle organic moving breeze animation */}
      <img
        src="/rootright.webp"
        alt="Floral Corner Right"
        className="absolute -bottom-14 sm:-bottom-30 -right-3 sm:-right-4 w-[52%] sm:w-[60%] max-w-[260px] h-auto pointer-events-none z-30 drop-shadow-md select-none animate-floral-right"
      />
    </section>
  );
}
