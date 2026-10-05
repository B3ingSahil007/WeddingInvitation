import React, { useId } from 'react';

/**
 * Wavy Scalloped Section Divider
 * Matches the user reference image (media_1791184682652.png):
 * Elegant undulating waves with a luxurious metallic gold-foil border stroke and 3D soft shadow.
 * Clean, seamless transition with ZERO horizontal line artifacts.
 */
export default function DeckleEdge({
  color = '#fbf7ee',
  flip = false,
  className = '',
}) {
  const gradientId = useId();

  // Top paper fill: extends from -20 up above down to the wavy scalloped border
  const topPaperFill = `
    M -10,-20 
    L 1210,-20 
    L 1210,25 
    Q 1150,6 1100,25 
    Q 1050,44 1000,25 
    Q 950,6 900,25 
    Q 850,44 800,25 
    Q 750,6 700,25 
    Q 650,44 600,25 
    Q 550,6 500,25 
    Q 450,44 400,25 
    Q 350,6 300,25 
    Q 250,44 200,25 
    Q 150,6 100,25 
    Q 50,44 -10,25 
    Z
  `;

  // Wave line path along the scallops
  const waveLine = `
    M -10,25 
    Q 50,44 100,25 
    Q 150,6 200,25 
    Q 250,44 300,25 
    Q 350,6 400,25 
    Q 450,44 500,25 
    Q 550,6 600,25 
    Q 650,44 700,25 
    Q 750,6 800,25 
    Q 850,44 900,25 
    Q 950,6 1000,25 
    Q 1050,44 1100,25 
    Q 1150,6 1210,25
  `;

  // Bottom paper fill (when flip is true)
  const bottomPaperFill = `
    M -10,70 
    L 1210,70 
    L 1210,25 
    Q 1150,6 1100,25 
    Q 1050,44 1000,25 
    Q 950,6 900,25 
    Q 850,44 800,25 
    Q 750,6 700,25 
    Q 650,44 600,25 
    Q 550,6 500,25 
    Q 450,44 400,25 
    Q 350,6 300,25 
    Q 250,44 200,25 
    Q 150,6 100,25 
    Q 50,44 -10,25 
    Z
  `;

  return (
    <div
      className={`relative w-full z-20 pointer-events-none select-none -mt-1 -mb-1 ${className}`}
    >
      <svg
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
        className="w-full h-9 sm:h-12 block overflow-visible"
      >
        <defs>
          {/* Metallic Gold Foil Gradient matching luxury stationery */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c59f5a" />
            <stop offset="20%" stopColor="#e5c88b" />
            <stop offset="45%" stopColor="#ba8f45" />
            <stop offset="65%" stopColor="#f3deb0" />
            <stop offset="85%" stopColor="#c59f5a" />
            <stop offset="100%" stopColor="#deb876" />
          </linearGradient>
        </defs>

        {/* Paper Fill Layer (No shadow applied here, completely eliminating the horizontal line artifact!) */}
        <path d={flip ? bottomPaperFill : topPaperFill} fill={color} />

        {/* WAVY GOLD BORDER & SHADOW (Shadow applied ONLY to the wave, not the top box!) */}
        <g
          style={{
            filter: flip
              ? 'drop-shadow(0 -3px 4px rgba(60, 40, 25, 0.12))'
              : 'drop-shadow(0 4px 6px rgba(60, 40, 25, 0.16)) drop-shadow(0 1px 2px rgba(60, 40, 25, 0.10))',
          }}
        >
          {/* Primary Metallic Gold Wave Outline */}
          <path
            d={waveLine}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Subtle Specular Gold Shimmer Highlight */}
          <path
            d={waveLine}
            fill="none"
            stroke="#fff4dc"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.75"
            transform={flip ? 'translate(0, 0.8)' : 'translate(0, -0.8)'}
          />
        </g>
      </svg>
    </div>
  );
}
