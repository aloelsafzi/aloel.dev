'use client'

import { useId, useState } from 'react'

const CodingCat = ({ className = '' }) => {
  // 'auto' = continuous 12s day-night cycle, 'day' = frozen day, 'night' = frozen night
  const [timeMode, setTimeMode] = useState('auto')
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '')

  // Unique IDs per component instance to prevent duplicate SVG ID conflicts between mobile and desktop
  const windowClipId = `cat-clip-${uid}`
  const sunsetGradId = `cat-sunset-${uid}`
  const lampConeId = `cat-lamp-${uid}`
  const screenGlowId = `cat-glow-${uid}`
  const sunGlowId = `cat-sunglow-${uid}`

  const cycleTimeMode = () => {
    setTimeMode((prev) => {
      if (prev === 'auto') return 'day'
      if (prev === 'day') return 'night'
      return 'auto'
    })
  }

  const modeHint = {
    auto: 'Siklus Siang & Malam Otomatis (klik untuk ubah suasana)',
    day: 'Suasana Siang (klik untuk ubah suasana)',
    night: 'Suasana Malam (klik untuk ubah suasana)',
  }[timeMode]

  return (
    <div
      role="img"
      aria-label="Animasi kucing programmer sedang coding di meja kerja dengan pemandangan jendela siklus matahari siang dan bulan bintang malam"
      title={modeHint}
      onClick={cycleTimeMode}
      className={`relative select-none cursor-pointer group w-full ${className}`}
    >
      <div className={`relative w-full aspect-[280/190] cat-anim-${timeMode}`}>
        <svg
          viewBox="0 0 280 190"
          className="w-full h-full block overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Window Arched Clip with unique instance ID */}
            <clipPath id={windowClipId}>
              <rect x="30" y="10" width="220" height="150" rx="26" />
            </clipPath>

            {/* Sunset Gradient */}
            <linearGradient id={sunsetGradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#F97316" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.9" />
            </linearGradient>

            {/* Lamp Light Cone Gradient */}
            <linearGradient id={lampConeId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#FDE047" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
            </linearGradient>

            {/* Laptop Screen Glow Gradient */}
            <linearGradient id={screenGlowId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>

            {/* Sun Glow Radial */}
            <radialGradient id={sunGlowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* WINDOW VIEW WITH ANIMATED DAY & NIGHT SKY (Clipped to Window Frame) */}
          <g clipPath={`url(#${windowClipId})`}>
            {/* 1. Base Daytime Sky (explicit rx="26" to perfectly match window corners) */}
            <rect x="30" y="10" width="220" height="150" rx="26" fill="#7DD3FC" />

            {/* 2. Sunset Glow Overlay (explicit rx="26") */}
            <rect
              x="30"
              y="10"
              width="220"
              height="150"
              rx="26"
              fill={`url(#${sunsetGradId})`}
              className="cat-sunset-overlay"
            />

            {/* 3. Deep Night Sky Overlay (explicit rx="26") */}
            <rect
              x="30"
              y="10"
              width="220"
              height="150"
              rx="26"
              fill="#0A0F1D"
              className="cat-night-overlay"
            />

            {/* 4. Daytime Sun with Radiant Rays */}
            <g className="cat-sun">
              <circle cx="0" cy="0" r="24" fill={`url(#${sunGlowId})`} />
              <circle cx="0" cy="0" r="14" fill="#FBBF24" />
              {/* Sun Rays */}
              <line x1="-18" y1="0" x2="-22" y2="0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="0" x2="22" y2="0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="-18" x2="0" y2="-22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="18" x2="0" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="-13" y1="-13" x2="-16" y2="-16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="-13" x2="16" y2="-16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="-13" y1="13" x2="-16" y2="16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="13" y1="13" x2="16" y2="16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* 5. Daytime Clouds */}
            <g className="cat-clouds">
              <path
                d="M 50 80 Q 60 70 75 75 Q 90 68 102 78 Q 112 82 106 92 Q 95 98 55 98 Q 45 92 50 80 Z"
                fill="#FFFFFF"
                opacity="0.8"
              />
              <path
                d="M 175 72 Q 185 64 197 68 Q 207 62 219 70 Q 227 76 223 84 Q 213 90 180 90 Q 171 84 175 72 Z"
                fill="#FFFFFF"
                opacity="0.75"
              />
            </g>

            {/* 6. Night Stars (twinkle & pulse) */}
            <g className="cat-stars">
              <circle cx="55" cy="35" r="1.4" fill="#FFFFFF" className="star-1" />
              <circle cx="80" cy="55" r="1.2" fill="#FFFFFF" className="star-2" />
              <circle cx="110" cy="30" r="1.6" fill="#FFFFFF" className="star-3" />
              <circle cx="140" cy="48" r="1.3" fill="#FFFFFF" className="star-1" />
              <circle cx="175" cy="26" r="1.5" fill="#FFFFFF" className="star-2" />
              <circle cx="205" cy="48" r="1.2" fill="#FFFFFF" className="star-3" />
              <circle cx="230" cy="32" r="1.5" fill="#FFFFFF" className="star-1" />
              {/* Sparkle Stars */}
              <path
                d="M 160 42 Q 162 39 164 42 Q 167 44 164 46 Q 162 49 160 46 Q 157 44 160 42 Z"
                fill="#FEF08A"
                className="star-pulse"
              />
              <path
                d="M 75 32 Q 76.5 29.5 78 32 Q 80.5 33.5 78 35 Q 76.5 37.5 75 35 Q 72.5 33.5 75 32 Z"
                fill="#FEF08A"
                className="star-pulse"
              />
            </g>

            {/* 7. Night Moon */}
            <g className="cat-moon">
              <circle cx="0" cy="0" r="18" fill="#FEF08A" opacity="0.3" />
              <path
                d="M -7 -13 A 14 14 0 1 0 8 8 A 11 11 0 1 1 -7 -13 Z"
                fill="#FEF08A"
              />
            </g>

            {/* Distant Hills / Horizon */}
            <path
              d="M 30 160 L 30 135 Q 70 120 120 132 Q 165 122 210 130 Q 235 124 250 130 L 250 160 Z"
              fill="#86EFAC"
              className="cat-hills transition-colors duration-500"
            />
          </g>

          {/* Window Frame (drawn directly on top of the sky edges, perfectly framing the corners) */}
          <rect
            x="30"
            y="10"
            width="220"
            height="150"
            rx="26"
            fill="none"
            strokeWidth="4"
            className="stroke-[#D6D0C4] dark:stroke-[#2C2A26]"
          />
          <line x1="140" y1="10" x2="140" y2="160" strokeWidth="2" className="stroke-[#D6D0C4] dark:stroke-[#2C2A26]" />
          <line x1="30" y1="85" x2="250" y2="85" strokeWidth="2" className="stroke-[#D6D0C4] dark:stroke-[#2C2A26]" />
          {/* Window Sill */}
          <rect x="22" y="157" width="236" height="7" rx="3" className="fill-[#EAE5D9] stroke-[#D6D0C4] dark:fill-[#24221E] dark:stroke-[#2C2A26]" />

          {/* DESK SURFACE (Rests flush on section divider) */}
          <rect x="10" y="176" width="260" height="14" rx="4" className="fill-[#854D0E] dark:fill-[#292524]" />

          {/* DESK LAMP (Left) */}
          <g>
            <ellipse cx="44" cy="176" rx="11" ry="3" fill="#B93815" />
            <path
              d="M 44 176 C 44 140 52 133 68 137"
              fill="none"
              stroke="#B93815"
              strokeWidth="2.75"
              strokeLinecap="round"
            />
            {/* Lamp Shade */}
            <path d="M 62 133 L 78 137 L 73 147 L 58 143 Z" fill="#B93815" />
            {/* Lamp Light Beam (Shines at Night) */}
            <polygon
              points="60,145 20,188 115,188 74,147"
              fill={`url(#${lampConeId})`}
              className="cat-lamp-light"
            />
          </g>

          {/* COFFEE MUG WITH ANIMATED STEAM */}
          <g>
            <rect x="80" y="163" width="14" height="13" rx="2" className="fill-white stroke-[#D6D0C4] dark:fill-[#24221E] dark:stroke-[#3F3C36]" />
            <path
              d="M 94 166 C 98 166 98 173 94 173"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-ink-muted dark:text-ink-dark-muted"
            />
            {/* Paw icon on mug */}
            <circle cx="87" cy="170" r="1.6" fill="#B93815" opacity="0.8" />
            <circle cx="85.5" cy="167.5" r="0.6" fill="#B93815" opacity="0.8" />
            <circle cx="87" cy="167" r="0.6" fill="#B93815" opacity="0.8" />
            <circle cx="88.5" cy="167.5" r="0.6" fill="#B93815" opacity="0.8" />

            {/* Steam wisps */}
            <path
              d="M 84 159 Q 86 155 83 150"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="cat-steam-1"
            />
            <path
              d="M 89 158 Q 91 154 88 149"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="cat-steam-2"
            />
          </g>

          {/* LAPTOP */}
          <g>
            {/* Laptop Base */}
            <polygon points="112,176 178,176 183,182 107,182" className="fill-[#CBD5E1] dark:fill-[#475569]" />
            {/* Laptop Screen Body */}
            <polygon points="118,128 172,128 178,176 112,176" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            {/* Screen Display */}
            <polygon points="121,131 169,131 175,173 115,173" fill="#0B0F19" />

            {/* Code Lines on Display */}
            <line x1="123" y1="137" x2="141" y2="137" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="123" y1="142" x2="155" y2="142" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="123" y1="147" x2="138" y2="147" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="123" y1="152" x2="150" y2="152" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="123" y1="157" x2="132" y2="157" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="135" y1="157" x2="139" y2="157" stroke="#FFFFFF" strokeWidth="1.8" className="cat-cursor" />

            {/* Screen Glow */}
            <polygon
              points="115,173 100,188 190,188 175,173"
              fill={`url(#${screenGlowId})`}
              className="cat-screen-glow"
            />
          </g>

          {/* THE CODING CAT */}
          <g>
            {/* Cat Tail */}
            <path
              d="M 210 180 C 230 180 240 164 231 150 C 226 142 217 148 221 156 C 225 165 216 174 205 177"
              fill="#D97706"
              className="cat-tail"
            />

            {/* Cat Body */}
            <ellipse cx="190" cy="168" rx="20" ry="17" fill="#D97706" />
            {/* Chest Cream Patch */}
            <ellipse cx="180" cy="169" rx="10" ry="12" fill="#FEF3C7" />

            {/* Cat Head */}
            <circle cx="178" cy="142" r="15" fill="#D97706" />

            {/* Ears */}
            <polygon points="166,134 169,118 178,129" fill="#D97706" />
            <polygon points="168,132 171,122 176,129" fill="#FDA4AF" />
            <polygon points="182,129 189,118 192,134" fill="#D97706" />
            <polygon points="184,129 187,122 190,132" fill="#FDA4AF" />

            {/* Headphones */}
            <path
              d="M 165,137 C 165,122 191,122 191,137"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect x="162" y="134" width="5" height="10" rx="2" fill="#B93815" />
            <rect x="189" y="134" width="5" height="10" rx="2" fill="#B93815" />

            {/* Face details */}
            <circle cx="171" cy="145" r="2" fill="#FDA4AF" opacity="0.75" />
            <circle cx="183" cy="145" r="2" fill="#FDA4AF" opacity="0.75" />

            {/* Focused Coding Eyes (^ ^) */}
            <path
              d="M 169 140 Q 172 137 174 140"
              fill="none"
              stroke="#78350F"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M 177 140 Q 180 137 182 140"
              fill="none"
              stroke="#78350F"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            {/* Tiny Nose */}
            <polygon points="175,143 177,143 176,144.5" fill="#F43F5E" />
            {/* Mouth */}
            <path
              d="M 174 145.5 Q 176 147 176 145.5 Q 176 147 178 145.5"
              fill="none"
              stroke="#78350F"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Whiskers */}
            <line x1="167" y1="144" x2="161" y2="142" stroke="#78350F" strokeWidth="0.7" />
            <line x1="167" y1="146" x2="160" y2="147" stroke="#78350F" strokeWidth="0.7" />

            {/* TYPING PAWS */}
            <g className="cat-paw-left">
              <ellipse cx="150" cy="174" rx="5" ry="3.4" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.8" />
            </g>
            <g className="cat-paw-right">
              <ellipse cx="161" cy="174" rx="5" ry="3.4" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CodingCat
