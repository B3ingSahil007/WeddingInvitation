import React from 'react';
import { ExternalLink, Shirt, Gift, Check, Sparkles } from 'lucide-react';

export default function DetailsSection({ onOpenRsvp }) {
  return (
    <section className="relative w-full max-w-md mx-auto py-10 px-6 bg-[#fbf7ee] text-[#4a3a30] text-center select-none">
      {/* Interactive Map Card (Image 5) */}
      <div className="relative mx-auto max-w-sm rounded-3xl p-3 bg-gradient-to-b from-[#e5cfab] via-[#f7f0e3] to-[#c9ad80] shadow-[0_12px_32px_rgba(70,45,25,0.18)] border border-[#d8be96] mb-12">
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-inner aspect-[4/3]">
          {/* Real Google Map Embed */}
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Islamic+Center+of+Melville,+118+Old+East+Neck+Road,+Melville,+NY+11747&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating "Open in Maps" badge */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Islamic+Center+of+Melville+118+Old+East+Neck+Road+Melville+NY+11747"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-[#1a73e8] hover:bg-white text-xs font-montserrat font-medium shadow-md border border-black/10 transition-transform hover:scale-105"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Dress Code Section with Floral Framing */}
      <div className="relative my-10 max-w-sm mx-auto py-8 px-6">
        {/* Top-Right Floral Accent (dressright.webp) */}
        <img
          src="/dressright.webp"
          alt="Top Right Floral"
          className="absolute -top-4 -right-3 w-28 sm:w-36 h-auto object-contain pointer-events-none select-none z-0 opacity-90 drop-shadow-sm"
        />

        {/* Bottom-Left Floral Accent (dressleft.webp) */}
        <img
          src="/dressleft.webp"
          alt="Bottom Left Floral"
          className="absolute -bottom-4 -left-3 w-24 sm:w-32 h-auto object-contain pointer-events-none select-none z-0 opacity-90 drop-shadow-sm scale-y-[-1]"
        />

        {/* Content */}
        <div className="relative z-10 max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#b58c54]">
            <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e]">
              Dress Code
            </h3>
          </div>

          <p className="font-cormorant text-base sm:text-lg text-[#614d3f] leading-relaxed mt-2">
            We kindly ask guests to avoid <strong className="text-[#801723]">deep red</strong> and{' '}
            <strong className="text-[#591019]">maroon</strong> attire for the celebration.
          </p>

          {/* Color Palette Indicators */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[11px] font-montserrat text-[#8d7564] uppercase tracking-wider">
                Avoid:
              </span>
              <div className="flex items-center gap-2">
                <div className="group relative flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-[#801723] shadow-inner border border-black/20" />
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-black/60 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px]">✕</span>
                </div>
                <div className="group relative flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-[#4a0d15] shadow-inner border border-black/20" />
                  <span className="absolute -top-1 -right-1 text-xs text-white bg-black/60 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px]">✕</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-[11px] font-montserrat text-[#8d7564] uppercase tracking-wider">
                Suggested:
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#f4ebd0] border border-[#d8be96] shadow-sm" title="Champagne Cream" />
                <span className="w-5 h-5 rounded-full bg-[#d6cfc7] border border-[#b8ae9f] shadow-sm" title="Soft Silver" />
                <span className="w-5 h-5 rounded-full bg-[#e8d5b5] border border-[#c7ab80] shadow-sm" title="Warm Gold" />
                <span className="w-5 h-5 rounded-full bg-[#cad2c5] border border-[#a2ad9e] shadow-sm" title="Sage Green" />
                <span className="w-5 h-5 rounded-full bg-[#e6cfd3] border border-[#c4a9af] shadow-sm" title="Dusty Rose" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Small Divider */}
      <div className="my-8 flex items-center justify-center gap-2 text-[#c7a46e]">
        <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#c7a46e]" />
        <span className="font-great-vibes text-2xl">❧</span>
        <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#c7a46e]" />
      </div>

      {/* Gift Preference Section */}
      <div className="my-10 max-w-xs mx-auto">
        <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e]">
          Gift Preference
        </h3>

        <p className="font-cormorant text-base sm:text-lg text-[#614d3f] leading-relaxed mt-2">
          Kindly, no boxed gifts please.
        </p>
        <p className="text-xs font-montserrat text-[#8d7564] mt-1 font-light italic">
          Your presence and prayers are our greatest blessings.
        </p>
      </div>

      {/* Decorative Small Divider */}
      <div className="my-8 flex items-center justify-center gap-2 text-[#c7a46e]">
        <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#c7a46e]" />
        <span className="font-great-vibes text-2xl">❧</span>
        <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#c7a46e]" />
      </div>

      {/* Confirm Your Attendance (RSVP) */}
      <div className="my-10 max-w-xs mx-auto">
        <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] leading-tight">
          Confirm Your Attendance
        </h3>

        <p className="font-cormorant text-base sm:text-lg text-[#614d3f] leading-relaxed mt-2">
          To help us prepare for a joyful celebration, <br />
          kindly confirm your attendance.
        </p>

        {/* RSVP Wax Seal Button */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={onOpenRsvp}
            className="group relative cursor-pointer outline-none focus:outline-none flex flex-col items-center"
            aria-label="Open RSVP Form"
          >
            {/* Glowing Aura on Hover */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-400/25 via-rose-500/20 to-amber-300/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />

            {/* Real RSVP Wax Seal Image from public/rsvp.webp */}
            <div className="relative">
              <img
                src="/rsvp.webp"
                alt="RSVP Wax Seal"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-[0_10px_24px_rgba(67,9,14,0.45)] transition-transform duration-300 group-hover:scale-108 group-active:scale-95 select-none pointer-events-none"
              />
            </div>

            {/* Tap instruction with smooth moving float animation */}
            <div className="mt-3 flex items-center justify-center gap-1 animate-float-bob">
              <span className="font-montserrat text-xs tracking-widest text-[#9c7b64] font-medium group-hover:text-[#6a4f3d] transition-colors uppercase select-none">
                Tap to Respond
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
