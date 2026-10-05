import React, { useState } from 'react';
import { Calendar, Share2, Heart, Check, Sparkles } from 'lucide-react';

export default function CoupleSection({ coupleRef, onReplayEnvelope }) {
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Wedding Invitation | Zohan & Rose',
      text: 'You are cordially invited to celebrate the wedding of Zohan & Rose on September 27, 2026!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share dismissed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics calendar download
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zohan and Rose Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Wedding of Zohan & Rose
DESCRIPTION:Join us in celebrating the wedding celebration of Zohan & Rose. Two Souls, One Destiny.
LOCATION:Islamic Center of Melville, 118 Old East Neck Road, Melville, NY 11747
DTSTART:20260927T210000Z
DTEND:20260928T030000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Zohan_and_Rose_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={coupleRef}
      id="couple-section"
      className="relative w-full max-w-md mx-auto pt-10 pb-0 bg-[#fbf7ee] text-[#4a3a30] text-center select-none overflow-hidden"
    >
      {/* Upper Content: Names, Ayah, Heartfelt Note & Action Buttons */}
      <div className="px-6">
        {/* Decorative Top Flourish */}
        <div className="flex items-center justify-center gap-3 text-[#b58c54] mb-3">
          <span className="text-xl">❦</span>
          <span className="font-montserrat text-xs tracking-[0.25em] uppercase text-[#9e763f]">
            With Endless Love
          </span>
          <span className="text-xl">❧</span>
        </div>

        {/* Groom & Bride Names */}
        <h2 className="font-great-vibes text-5xl sm:text-6xl text-[#8d622c] drop-shadow-sm leading-tight">
          Zohan & Rose
        </h2>

        <p className="font-cormorant text-lg sm:text-xl italic text-[#786150] mt-1 mb-6">
          "And We created you in pairs" — Surah An-Naba (78:8)
        </p>

        {/* Heartfelt Note from Couple */}
        <div className="max-w-xs mx-auto text-[#614b3d] font-cormorant text-base sm:text-lg leading-relaxed">
          <p>
            "We are deeply grateful for your continuous love, prayers, and blessings as we embark on this sacred journey of marriage. We look forward to sharing our joy and celebrating this unforgettable evening with you."
          </p>
        </div>

        {/* Action Buttons: Add to Calendar & Share */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f3ecdc] hover:bg-[#e9ded0] border border-[#d3be9f] text-xs font-montserrat text-[#614b3d] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#a3793e]" />
            <span>Save Date to Calendar</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f3ecdc] hover:bg-[#e9ded0] border border-[#d3be9f] text-xs font-montserrat text-[#614b3d] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#a3793e]" />
                <span>Share Invitation</span>
              </>
            )}
          </button>
        </div>

        {/* Replay Opening Experience Option */}
        {onReplayEnvelope && (
          <div className="mt-8 pt-4 border-t border-[#dfcaa4]/40">
            <button
              onClick={onReplayEnvelope}
              className="text-[11px] font-montserrat text-[#9c8474] hover:text-[#6d5543] underline transition-colors cursor-pointer"
            >
              ↺ Tap here to view envelope opening experience again
            </button>
          </div>
        )}

        {/* Footer signoff */}
        <div className="mt-4 mb-8 text-center text-[#ab9788] text-[11px] font-montserrat">
          <span>Made with love for Zohan & Rose's Wedding</span>
        </div>
      </div>

      {/* FINAL BOTTOM IMAGE: BRIDE & GROOM AT THE VERY LAST WITH ENDFLOWER */}
      <div className="relative w-full mt-4">
        {/* Couple Photo */}
        <img
          src="/couple.webp"
          alt="Groom Zohan & Bride Rose"
          className="w-full h-auto object-cover select-none block"
        />

        {/* End Flower Garland Overlay at the bottom of the photo with organic moving animation */}
        <img
          src="/endflower.webp"
          alt="Floral Arch Decoration"
          className="absolute -bottom-2 -left-2 -right-2 w-[calc(100%+16px)] max-w-none h-auto object-contain pointer-events-none select-none z-10 drop-shadow-lg animate-end-flower"
        />
      </div>
    </section>
  );
}
