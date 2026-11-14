'use client'

const KittenPlayingBall = ({ className = '' }) => {
  return (
    <div
      role="img"
      aria-label="Animasi anak kucing sedang asyik bermain bola bolak-balik di atas garis pembatas"
      className={`kitten-patrol-wrap select-none ${className}`}
    >
      <div className="kitten-traveler">
        <div className="kitten-flipper">
          <svg
            viewBox="0 0 64 32"
            className="w-full h-full block overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* THE PLAYFUL TOY / YARN BALL */}
            <g className="kitten-ball-bounce">
              <g className="kitten-ball-group">
                {/* Ball Body */}
                <circle cx="54" cy="25" r="6" fill="#B93815" />
                {/* Ball Swirls / Yarn Patterns */}
                <path
                  d="M 49 23 C 51 21 57 21 59 24"
                  fill="none"
                  stroke="#FEF08A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 27 C 52 29 57 29 59 26"
                  fill="none"
                  stroke="#FDBA74"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="53" cy="23.5" r="0.9" fill="#FEF08A" />
              </g>
            </g>

            {/* THE KITTEN */}
            <g>
              {/* Kitten Tail */}
              <g className="kitten-tail-wag">
                <path
                  d="M 10 20 C 6 13 4 7 8 4 C 9.5 4 9.5 8 11 18"
                  fill="#F59E0B"
                />
                <circle cx="8" cy="5" r="1.4" fill="#FEF3C7" />
              </g>

              {/* Back Legs (Walking Cycle) */}
              <g className="kitten-paw-back-left">
                <line x1="12" y1="23" x2="10" y2="31" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="10" cy="31" r="1.4" fill="#FEF3C7" />
              </g>
              <g className="kitten-paw-back-right">
                <line x1="16" y1="23" x2="17" y2="31" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="17" cy="31" r="1.4" fill="#FEF3C7" />
              </g>

              {/* Kitten Body */}
              <ellipse cx="22" cy="20" rx="11" ry="8" fill="#F59E0B" />
              {/* White Cream Belly */}
              <ellipse cx="23" cy="22" rx="7" ry="5" fill="#FEF3C7" />

              {/* Tabby Stripes */}
              <path
                d="M 19 14 Q 21 17 21 21"
                fill="none"
                stroke="#D97706"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M 23 13 Q 25 16 25 20"
                fill="none"
                stroke="#D97706"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              {/* Front Left Leg (Supporting Step) */}
              <g className="kitten-paw-front-left">
                <line x1="28" y1="22" x2="27" y2="31" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="27" cy="31" r="1.4" fill="#FEF3C7" />
              </g>

              {/* Front Right Leg (Batting the Ball) */}
              <g className="kitten-paw-front-right">
                <line x1="32" y1="22" x2="41" y2="25" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="41" cy="25" r="1.4" fill="#FEF3C7" />
              </g>

              {/* Kitten Head */}
              <circle cx="33" cy="14" r="8.5" fill="#F59E0B" />

              {/* Ears */}
              <polygon points="26,9 28,2 33,8" fill="#F59E0B" />
              <polygon points="27.5,8 29,3.5 32,7.5" fill="#FDA4AF" />
              <polygon points="34,7 39,2 41,9" fill="#F59E0B" />
              <polygon points="35,7 38.5,3.5 40,8" fill="#FDA4AF" />

              {/* White Muzzle */}
              <ellipse cx="37" cy="16" rx="4.5" ry="3.5" fill="#FEF3C7" />

              {/* Playful Cheeks */}
              <circle cx="31.5" cy="15" r="1.2" fill="#FDA4AF" opacity="0.8" />
              <circle cx="39.5" cy="15" r="1.2" fill="#FDA4AF" opacity="0.8" />

              {/* Big Curious Eyes */}
              <ellipse cx="33" cy="12" rx="1.8" ry="2.2" fill="#1E1B4B" />
              <circle cx="33.6" cy="11.4" r="0.7" fill="#FFFFFF" />
              <ellipse cx="38" cy="12" rx="1.8" ry="2.2" fill="#1E1B4B" />
              <circle cx="38.6" cy="11.4" r="0.7" fill="#FFFFFF" />

              {/* Tiny Pink Nose */}
              <polygon points="37.5,15 39.5,15 38.5,16" fill="#F43F5E" />

              {/* Kitten Smile */}
              <path
                d="M 37.5 16.5 Q 38.5 17.5 39.5 16.5"
                fill="none"
                stroke="#78350F"
                strokeWidth="0.8"
                strokeLinecap="round"
              />

              {/* Whiskers */}
              <line x1="39" y1="15" x2="45" y2="14" stroke="#78350F" strokeWidth="0.6" />
              <line x1="39" y1="16.5" x2="45" y2="17.5" stroke="#78350F" strokeWidth="0.6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default KittenPlayingBall
