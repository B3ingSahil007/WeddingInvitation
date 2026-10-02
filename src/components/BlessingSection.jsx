import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function BlessingSection() {
  return (
    <section className="relative w-full max-w-md mx-auto pt-8 pb-12 px-6 bg-[#fbf7ee] text-[#4a3a30] text-center select-none">
      {/* Arabic Bismillah Image (public/bismillah.webp) */}
      <div className="mb-6 flex flex-col items-center">
        <img
          src="/bismillah.webp"
          alt="Bismillah ir-Rahman ir-Rahim"
          className="h-10 sm:h-20 w-auto object-contain select-none drop-shadow-sm"
        />
        <p className="font-montserrat text-[10px] sm:text-xs text-[#9c8474] tracking-widest uppercase mt-2 font-light">
          In the Name of Allah, the Most Gracious, the Most Merciful
        </p>
      </div>

      {/* Script Calligraphy Heading */}
      <div className="my-6 space-y-1">
        <h2 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] drop-shadow-sm">
          Two Souls
        </h2>
        <h2 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] drop-shadow-sm">
          One destiny and A
        </h2>
        <h2 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] drop-shadow-sm">
          Lifetime written by Allah
        </h2>
      </div>

      {/* Invitation Message Body */}
      <div className="my-8 max-w-xs mx-auto space-y-3 font-cormorant text-base sm:text-lg text-[#614b3d] leading-relaxed">
        <p className="font-medium text-lg sm:text-xl text-[#4a372c]">
          Dear Friends and Family
        </p>
        <p className="italic">
          Join us for an evening of love, laughter, duas, and unforgettable memories as we begin our forever.
        </p>
      </div>

      {/* Small Decorative Separator */}
      <div className="my-8 flex items-center justify-center gap-3 text-[#c7a46e]">
        <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#c7a46e]" />
        <span className="text-xl">❧</span>
        <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#c7a46e]" />
      </div>

      {/* Countdown Header */}
      <div className="mt-8 mb-2">
        <h3 className="font-great-vibes text-3xl sm:text-4xl text-[#9c753e]">
          The Celebration Begins In
        </h3>
      </div>

      {/* Live Working Countdown Timer */}
      <CountdownTimer />
    </section>
  );
}
