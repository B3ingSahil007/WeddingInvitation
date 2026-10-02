import React from 'react';

// Authentic Deckle / Torn Paper Edge Divider
// Seamlessly connects the invitation card sections with vintage elegance
export default function DeckleEdge({ flip = false, className = '' }) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none select-none ${
        flip ? 'rotate-180 -mt-1' : '-mb-1'
      } ${className}`}
    >
      <svg
        viewBox="0 0 1200 42"
        preserveAspectRatio="none"
        className="w-full h-7 sm:h-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
      >
        <path
          d="M0,0 
             L0,22 
             Q40,32 80,24 
             T160,28 
             T240,18 
             T320,30 
             T400,20 
             T480,32 
             T560,22 
             T640,29 
             T720,19 
             T800,31 
             T880,23 
             T960,30 
             T1040,19 
             T1120,29 
             T1200,22 
             L1200,0 
             Z"
          fill="#fbf7ee"
        />
        {/* Subtle deckle paper fiber shadow highlight */}
        <path
          d="M0,22 
             Q40,32 80,24 
             T160,28 
             T240,18 
             T320,30 
             T400,20 
             T480,32 
             T560,22 
             T640,29 
             T720,19 
             T800,31 
             T880,23 
             T960,30 
             T1040,19 
             T1120,29 
             T1200,22"
          fill="none"
          stroke="#e3d4bc"
          strokeWidth="1.2"
          opacity="0.65"
        />
      </svg>
    </div>
  );
}
