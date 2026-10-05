import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

const EVENTS = [
  { time: '5 PM', title: 'Guest Arrival', desc: 'Welcoming beloved family & friends' },
  { time: '6 PM', title: 'Nikkah Ceremony', desc: 'Sacred vows under the grace of Allah' },
  { time: '7 PM', title: 'Mocktail Hour', desc: 'Artisanal drinks & hors d’oeuvres' },
  { time: '8 PM', title: 'Dinner', desc: 'Royal banquet feast & joyous toasts' },
  { time: '9 PM', title: 'Dance', desc: 'Celebration & festivities under the stars' },
];

export default function ScheduleSection() {
  const timelineRef = useRef(null);
  const [flowerProgress, setFlowerProgress] = useState(0.5); // Default to middle milestone (Mocktail/Dinner)
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative position of timeline container in viewport center
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = (viewportCenter - rect.top) / rect.height;

      // Clamp between 0 (top: 5 PM) and 1 (bottom: 9 PM)
      const clamped = Math.min(1, Math.max(0, distance));
      setFlowerProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('118 Old East Neck Road Melville, NY 11747');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Active milestone index based on flower progress (0 to 4)
  const activeIndex = Math.min(EVENTS.length - 1, Math.floor(flowerProgress * EVENTS.length));

  return (
    <section className="relative w-full max-w-md mx-auto pt-6 pb-12 px-6 bg-[#fbf7ee] text-[#4a3a30] select-none">
      {/* Schedule of Events Heading */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-[#b58c54]">
          <span className="text-xl opacity-75">❧</span>
          <h2 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] drop-shadow-sm">
            Schedule of Events
          </h2>
          <span className="text-xl opacity-75">☙</span>
        </div>
      </div>

      {/* Interactive Timeline Container */}
      <div ref={timelineRef} className="relative w-full max-w-sm mx-auto my-6 px-4">
        {/* Central Vertical Timeline Track */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1.5px] bg-[#ab9888]" />

        {/* SCROLL-LINKED MOVING ROSE FLOWER MARKER */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-transform duration-200 ease-out"
          style={{
            top: `${flowerProgress * 90 + 5}%`,
          }}
        >
          {/* Clean Realistic Rose Flower (No Pink Halo) */}
          <div className="relative flex items-center justify-center">
            <img
              src="/rose.webp"
              alt="Rose Marker"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-[0_4px_10px_rgba(80,50,40,0.22)] select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Milestone Rows */}
        <div className="space-y-10 sm:space-y-12">
          {EVENTS.map((event, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={event.title}
                className={`relative flex items-center justify-between transition-all duration-300 ${
                  isActive ? 'scale-[1.02]' : 'opacity-90'
                }`}
              >
                {/* Time (Left side) */}
                <div className="w-[42%] text-right pr-6">
                  <span
                    className={`font-cormorant text-2xl sm:text-3xl font-medium tracking-wide transition-colors ${
                      isActive ? 'text-[#6e5443] font-semibold' : 'text-[#7d6555]'
                    }`}
                  >
                    {event.time}
                  </span>
                </div>

                {/* Center Solid Diamond Milestone Pin */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`w-3 h-3 rotate-45 bg-[#786151] transition-transform duration-300 ${
                      isActive ? 'scale-110 shadow-sm' : ''
                    }`}
                  />
                </div>

                {/* Event Name & Description (Right side) */}
                <div className="w-[42%] text-left pl-6">
                  <h4
                    className={`font-cormorant text-xl sm:text-2xl font-normal transition-colors leading-tight ${
                      isActive ? 'text-[#564134] font-semibold' : 'text-[#685244]'
                    }`}
                  >
                    {event.title}
                  </h4>
                  <p className="text-[11px] text-[#8c786a] font-montserrat mt-0.5 font-light">
                    {event.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="my-14 flex items-center justify-center gap-4 text-[#c7a46e]">
        <div className="h-[0.5px] w-16 bg-gradient-to-r from-transparent to-[#c7a46e]" />
        <span className="font-great-vibes text-3xl">✦</span>
        <div className="h-[0.5px] w-16 bg-gradient-to-l from-transparent to-[#c7a46e]" />
      </div>

      {/* Location Section */}
      <div className="text-center mt-6">
        <div className="flex items-center justify-center gap-2 text-[#b58c54] mb-2">
          <span className="text-lg opacity-75">❧</span>
          <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e]">
            Location
          </h3>
          <span className="text-lg opacity-75">☙</span>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs text-[#c7a46e] tracking-widest uppercase font-montserrat my-1">
          <span>❖ ❖ ❖</span>
        </div>

        <h4 className="font-cormorant text-2xl sm:text-3xl text-[#4a372c] font-normal mt-3">
          Islamic Center of Melville
        </h4>

        <p className="font-montserrat text-xs sm:text-sm text-[#735e51] font-light max-w-xs mx-auto mt-2 leading-relaxed">
          Address: 118 Old East Neck Road Melville, <br />
          NY 11747
        </p>

        {/* Architectural Illustration of Islamic Center (masjid.webp) */}
        <div className="mt-6 px-4 max-w-md mx-auto">
          <img
            src="/masjid.webp"
            alt="Islamic Center of Melville"
            className="w-full h-auto object-contain mx-auto select-none drop-shadow-[0_4px_12px_rgba(70,50,30,0.08)]"
          />
        </div>

        {/* Quick Location Action Buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Islamic+Center+of+Melville+118+Old+East+Neck+Road+Melville+NY+11747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f3ecdc] hover:bg-[#e9e0cd] border border-[#d3be9f] text-xs font-montserrat text-[#684f3e] transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-[#a3793e]" />
            <span>Open in Maps</span>
          </a>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f3ecdc] hover:bg-[#e9e0cd] border border-[#d3be9f] text-xs font-montserrat text-[#684f3e] transition-colors shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#a3793e]" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
