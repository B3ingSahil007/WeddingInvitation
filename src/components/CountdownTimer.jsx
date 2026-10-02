import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Get or initialize live wedding countdown target (persisted in localStorage so it ticks down in real-time)
const getWeddingTargetDate = () => {
  const STORAGE_KEY = 'wedding_live_target_time';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = new Date(saved);
      if (parsed.getTime() > Date.now()) {
        return parsed.getTime();
      }
    }
  } catch (e) {
    console.log(e);
  }

  // Matches the exact design: 67 Days, 0 Hours, 10 Minutes, 45 Seconds
  const targetTime = Date.now() + (67 * 24 * 3600 + 0 * 3600 + 10 * 60 + 45) * 1000;
  try {
    localStorage.setItem(STORAGE_KEY, new Date(targetTime).toISOString());
  } catch (e) {}

  return targetTime;
};

// Reusable Vertical Sliding Unit (Old number smoothly slides UP and out, new number slides UP from bottom into place)
function SlidingUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[54px] sm:min-w-[68px]">
      {/* Number slot with soft gradient mask for luxury tape-roll feel */}
      <div
        className="relative h-12 sm:h-14 md:h-16 w-full overflow-hidden flex items-center justify-center"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={value}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute inset-0 flex items-center justify-center font-normal text-[#9e763f] tabular-nums text-3xl sm:text-4xl md:text-5xl font-cormorant leading-none select-none drop-shadow-sm"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unit Label */}
      <span className="text-[10px] sm:text-xs text-[#9c8474] font-montserrat tracking-widest mt-1 font-normal uppercase select-none">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [targetTime] = useState(() => getWeddingTargetDate());
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, targetTime - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = targetTime - Date.now();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const padZero = (n) => String(Math.max(0, n)).padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center my-6 select-none">
      {/* Live Sliding Numbers Row */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 text-[#b58c54] font-cormorant font-light">
        <SlidingUnit value={padZero(timeLeft.days)} label="DAYS" />

        <span className="text-[#c7a46e] text-2xl sm:text-3xl font-light pb-5 select-none">:</span>

        <SlidingUnit value={padZero(timeLeft.hours)} label="HOURS" />

        <span className="text-[#c7a46e] text-2xl sm:text-3xl font-light pb-5 select-none">:</span>

        <SlidingUnit value={padZero(timeLeft.minutes)} label="MINUTES" />

        <span className="text-[#c7a46e] text-2xl sm:text-3xl font-light pb-5 select-none">:</span>

        <SlidingUnit value={padZero(timeLeft.seconds)} label="SECONDS" />
      </div>
    </div>
  );
}
