import React, { useState } from 'react';
import { ExternalLink, Check, MapPin, Navigation, Copy } from 'lucide-react';

export default function DetailsSection({ onOpenRsvp }) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('118 Old East Neck Road, Melville, NY 11747');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section className="relative w-full max-w-md mx-auto py-10 px-6 bg-[#fbf7ee] text-[#4a3a30] text-center select-none">
      {/* SECTION HEADER: THE WEDDING VENUE */}
      <div className="mb-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1 text-[#a3793e]">
          <span className="text-xs">❧</span>
          <span className="font-montserrat text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#93725b]">
            The Wedding Venue
          </span>
          <span className="text-xs">☙</span>
        </div>
        <h2 className="font-great-vibes text-3xl sm:text-4xl text-[#9c753e] drop-shadow-sm leading-snug">
          Islamic Center of Melville
        </h2>
        <p className="font-cormorant text-sm sm:text-base text-[#6d5543] italic mt-0.5 font-medium">
          118 Old East Neck Road · Melville, NY 11747
        </p>
      </div>

      {/* ROYAL ORNATE MAP CARD (Image 5) */}
      <div className="relative mx-auto max-w-sm mb-12">
        {/* Map Frame Container with Crisp Luxury Golden Rim */}
        <div className="relative rounded-3xl overflow-hidden border-[2.5px] border-[#c8a25c] bg-white shadow-[0_12px_32px_rgba(70,45,25,0.18)] aspect-[4/3] group">
          {/* Real Google Map Embed */}
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Islamic+Center+of+Melville,+118+Old+East+Neck+Road,+Melville,+NY+11747&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 select-none block"
            loading="lazy"
            allowFullScreen
          />

          {/* Opaque Luxury "Open in Maps" Badge - Completely masks Google's native text */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Islamic+Center+of+Melville+118+Old+East+Neck+Road+Melville+NY+11747"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#946e38] hover:text-[#735123] text-xs font-montserrat font-medium shadow-[0_2px_8px_rgba(0,0,0,0.16)] border border-[#d8be96] transition-all hover:scale-105 active:scale-95 group/btn"
          >
            <Navigation className="w-3.5 h-3.5 text-[#b58c54] group-hover/btn:rotate-12 transition-transform" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3 text-[#b58c54]/70" />
          </a>

          {/* Corner Filigrees on Map */}
          <div className="absolute top-2 right-2 text-[#b58c54]/75 pointer-events-none select-none text-[11px] font-serif">
            ✤
          </div>
          <div className="absolute bottom-2 left-2 text-[#b58c54]/75 pointer-events-none select-none text-[11px] font-serif">
            ✤
          </div>
        </div>

        {/* Bottom Ornate Filigree Flourish - Centered on bottom of the golden border */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
          <svg width="110" height="18" viewBox="0 0 110 18" fill="none" className="drop-shadow-sm">
            <path
              d="M55 14 C48 14, 42 6, 32 6 C24 6, 19 11, 10 7 C5 5, 2 2, 0 2"
              stroke="url(#mapGoldBorder)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M55 14 C62 14, 68 6, 78 6 C86 6, 91 11, 100 7 C105 5, 108 2, 110 2"
              stroke="url(#mapGoldBorder)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M55 17 L58 13 L55 9 L52 13 Z"
              fill="url(#mapGoldBorder)"
            />
            <circle cx="32" cy="6" r="1.5" fill="url(#mapGoldBorder)" />
            <circle cx="78" cy="6" r="1.5" fill="url(#mapGoldBorder)" />
          </svg>
        </div>

        {/* Venue Action Buttons & Location Details Below Map */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f4ebd0]/80 hover:bg-[#ebdcb9] border border-[#d8be96] text-xs font-montserrat font-medium text-[#735841] transition-all shadow-sm cursor-pointer active:scale-95"
            title="Copy venue address"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#a3793e]" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Islamic+Center+of+Melville+118+Old+East+Neck+Road+Melville+NY+11747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ba8f45] via-[#cf9f4d] to-[#ba8f45] text-white text-xs font-montserrat font-medium hover:brightness-105 transition-all shadow-sm cursor-pointer active:scale-95 hover:shadow-[0_2px_10px_rgba(186,143,69,0.35)]"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Dress Code & Gift Preference Card with Floral Framing (Image 5) */}
      <div className="relative my-8 w-full max-w-md mx-auto py-8 px-6 sm:px-8">
        {/* Top-Right Floral Accent (dressright.webp) */}
        <img
          src="/dressright.webp"
          alt="Top Right Floral"
          className="absolute -top-6 -right-6 sm:-right-8 w-36 sm:w-48 h-auto object-contain pointer-events-none select-none z-0 opacity-95 drop-shadow-sm"
        />

        {/* Bottom-Left Floral Accent (dressleft.webp) */}
        <img
          src="/dressleft.webp"
          alt="Bottom Left Floral"
          className="absolute -bottom-6 -left-6 sm:-left-8 w-32 sm:w-44 h-auto object-contain pointer-events-none select-none z-0 opacity-95 drop-shadow-sm scale-y-[-1]"
        />

        {/* Card Content */}
        <div className="relative z-10 w-full max-w-sm mx-auto">
          {/* Dress Code */}
          <div className="flex items-center justify-center gap-2 mb-2 text-[#b58c54]">
            <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e] drop-shadow-sm">
              Dress Code
            </h3>
          </div>

          <p className="font-cormorant text-lg sm:text-xl text-[#614d3f] leading-relaxed mt-2 font-medium">
            We kindly ask guests to avoid <strong className="text-[#801723] font-semibold">deep red</strong> and{' '}
            <strong className="text-[#591019] font-semibold">maroon</strong> attire for the celebration.
          </p>

          {/* Color Palette Indicators */}
          <div className="mt-4 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs sm:text-sm font-montserrat font-medium text-[#8d7564] uppercase tracking-wider">
                Avoid:
              </span>
              <div className="flex items-center gap-2.5">
                <div className="group relative flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-[#801723] shadow-inner border border-black/20" />
                  <span className="absolute -top-1 -right-1 text-white bg-black/60 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px]">✕</span>
                </div>
                <div className="group relative flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-[#4a0d15] shadow-inner border border-black/20" />
                  <span className="absolute -top-1 -right-1 text-white bg-black/60 rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px]">✕</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-1">
              <span className="text-xs sm:text-sm font-montserrat font-medium text-[#8d7564] uppercase tracking-wider">
                Suggested:
              </span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f4ebd0] border border-[#d8be96] shadow-sm hover:scale-110 transition-transform" title="Champagne Cream" />
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d6cfc7] border border-[#b8ae9f] shadow-sm hover:scale-110 transition-transform" title="Soft Silver" />
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e8d5b5] border border-[#c7ab80] shadow-sm hover:scale-110 transition-transform" title="Warm Gold" />
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#cad2c5] border border-[#a2ad9e] shadow-sm hover:scale-110 transition-transform" title="Sage Green" />
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e6cfd3] border border-[#c4a9af] shadow-sm hover:scale-110 transition-transform" title="Dusty Rose" />
              </div>
            </div>
          </div>

          {/* Decorative Divider between Dress Code and Gift Preference */}
          <div className="my-6 flex items-center justify-center gap-2 text-[#c7a46e]">
            <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#c7a46e]" />
            <span className="font-great-vibes text-2xl">❧</span>
            <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#c7a46e]" />
          </div>

          {/* Gift Preference */}
          <div>
            <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#9c753e]">
              Gift Preference
            </h3>

            <p className="font-cormorant text-lg sm:text-xl text-[#614d3f] leading-relaxed mt-2 font-medium">
              Kindly, no boxed gifts please.
            </p>
            <p className="text-xs font-montserrat text-[#8d7564] mt-1 font-light italic">
              Your presence and prayers are our greatest blessings.
            </p>
          </div>
        </div>
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
