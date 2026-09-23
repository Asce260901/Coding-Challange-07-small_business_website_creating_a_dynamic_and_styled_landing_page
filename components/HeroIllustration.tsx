import type { SVGProps } from 'react'

const RX = [10, 11.5, 13, 14.5, 16, 17.5, 19, 20.5, 22, 23, 24, 25, 26, 27, 27.8, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5]
const RY = [2.8, 3, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4, 4.1, 4.2, 4.2, 4.3, 4.3, 4.4, 4.4, 4.5, 4.5, 4.5, 4.6, 4.6, 4.6, 4.7, 4.7, 4.7, 4.8, 4.8, 4.8, 4.9, 4.9, 4.9, 5]

/** A cone of thread: the same shape mirrored left/right. */
function Cone({ x, side }: { x: number; side: 'l' | 'r' }) {
  return (
    <g transform={`translate(${x},10)`}>
      <polygon points="50,8 88,155 12,155" fill={`url(#cone${side.toUpperCase()})`} stroke="#7a4820" strokeWidth="0.8" />
      <polygon
        points={side === 'l' ? '50,8 22,155 12,155' : '50,8 78,155 88,155'}
        fill="#3a1a08"
        opacity="0.55"
      />
      <g fill="none" strokeLinecap="round">
        {RX.map((rx, i) => (
          <ellipse
            key={i}
            cx="50"
            cy={18 + i * 4}
            rx={rx}
            ry={RY[i]}
            stroke={i % 2 === 0 ? '#e8c87a' : '#d4a850'}
            strokeWidth="2.2"
          />
        ))}
      </g>
      <ellipse cx="50" cy="8" rx="7" ry="3" fill="#c8a060" stroke="#8B5E3C" strokeWidth="0.8" />
      <ellipse cx="50" cy="155" rx="38" ry="8" fill="#7a4e28" stroke="#5a3010" strokeWidth="1" />
      <rect x="43" y="163" width="14" height="25" rx="4" fill="#3a2010" stroke="#5a3010" strokeWidth="0.8" />
      <ellipse cx="50" cy="188" rx="26" ry="7" fill="#3a2010" stroke="#5a3010" strokeWidth="0.8" />
    </g>
  )
}

export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vintage sewing machine between two spools of golden thread" {...props}>
      <defs>
      <linearGradient id="coneL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#5a3010"/><stop offset="35%" stopColor="#c8943c"/>
      <stop offset="60%" stopColor="#e8c070"/><stop offset="80%" stopColor="#b07830"/><stop offset="100%" stopColor="#6a3818"/>
      </linearGradient>
      <linearGradient id="coneR" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0%" stopColor="#5a3010"/><stop offset="35%" stopColor="#c8943c"/>
      <stop offset="60%" stopColor="#e8c070"/><stop offset="80%" stopColor="#b07830"/><stop offset="100%" stopColor="#6a3818"/>
      </linearGradient>
      <linearGradient id="silverBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#d8d8d8"/><stop offset="25%" stopColor="#b8b8b8"/>
      <stop offset="60%" stopColor="#888888"/><stop offset="100%" stopColor="#606060"/>
      </linearGradient>
      <linearGradient id="silverArm" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#e0e0e0"/><stop offset="40%" stopColor="#aaaaaa"/><stop offset="100%" stopColor="#707070"/>
      </linearGradient>
      <linearGradient id="silverTop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f0f0f0"/><stop offset="100%" stopColor="#c0c0c0"/>
      </linearGradient>
      <linearGradient id="chromeDetail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#ffffff"/><stop offset="30%" stopColor="#d8d0c0"/>
      <stop offset="70%" stopColor="#a09080"/><stop offset="100%" stopColor="#d4c8a8"/>
      </linearGradient>
      <linearGradient id="silverWheel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#e8e8e8"/><stop offset="50%" stopColor="#909090"/><stop offset="100%" stopColor="#c0c0c0"/>
      </linearGradient>
      </defs>

      <Cone x={42} side="l" />
      <Cone x={548} side="r" />

      <path d="M130,20 C180,16 220,48 258,98" fill="none" stroke="#e8c87a" strokeWidth="2" opacity="0.85"/>
      <path d="M133,24 C183,20 223,52 261,102" fill="none" stroke="#d4a850" strokeWidth="1" opacity="0.5"/>
      <path d="M550,20 C500,16 460,48 422,98" fill="none" stroke="#e8c87a" strokeWidth="2" opacity="0.85"/>
      <path d="M547,24 C497,20 457,52 419,102" fill="none" stroke="#d4a850" strokeWidth="1" opacity="0.5"/>

      {/* Sewing machine */}
      <g transform="translate(218,66)">
      <rect x="-18" y="138" width="276" height="22" rx="5" fill="#707070" stroke="#909090" strokeWidth="1"/>
      <rect x="-22" y="158" width="284" height="8" rx="3" fill="#555555" stroke="#888888" strokeWidth="0.8"/>
      <rect x="0" y="18" width="240" height="124" rx="18" fill="url(#silverBody)" stroke="#aaaaaa" strokeWidth="1.5"/>
      <rect x="10" y="22" width="220" height="6" rx="3" fill="#f0f0f0" opacity="0.5"/>
      <rect x="0" y="120" width="240" height="22" fill="#505050" opacity="0.4"/>
      <path d="M18,18 Q120,-6 222,18" fill="url(#silverTop)" stroke="#c0c0c0" strokeWidth="1"/>
      <rect x="148" y="6" width="84" height="90" rx="14" fill="url(#silverArm)" stroke="#aaaaaa" strokeWidth="1.2"/>
      <path d="M162,6 Q190,-1 228,6" fill="none" stroke="#e8e8e8" strokeWidth="2" opacity="0.7"/>
      <rect x="220" y="6" width="12" height="90" fill="#505050" opacity="0.3"/>
      <rect x="178" y="-6" width="6" height="20" rx="2" fill="url(#chromeDetail)" stroke="#c0c0c0" strokeWidth="0.5"/>
      <circle cx="181" cy="-6" r="5" fill="#e0d8c0" stroke="#c0b890" strokeWidth="0.8"/>
      <circle cx="181" cy="-6" r="2.5" fill="none" stroke="#d9b382" strokeWidth="1.5"/>
      <rect x="174" y="74" width="13" height="58" rx="3" fill="#707070" stroke="#909090" strokeWidth="0.8"/>
      <rect x="177" y="70" width="7" height="62" rx="2" fill="url(#chromeDetail)"/>
      <rect x="179.5" y="122" width="3" height="32" rx="1" fill="#e8e8e8"/>
      <ellipse cx="181" cy="133" rx="2" ry="3.5" fill="none" stroke="#707070" strokeWidth="1.2"/>
      <line x1="180" y1="123" x2="180" y2="148" stroke="#ffffff" strokeWidth="0.8" opacity="0.6"/>
      <rect x="172" y="152" width="20" height="8" rx="3" fill="url(#chromeDetail)" stroke="#c0c0c0" strokeWidth="0.5"/>
      <rect x="174" y="160" width="7" height="6" rx="1" fill="#d0d0d0"/>
      <rect x="184" y="160" width="7" height="6" rx="1" fill="#d0d0d0"/>
      <g fill="#606060" stroke="#909090" strokeWidth="0.5">
      <rect x="170" y="156" width="7" height="3" rx="1"/>
      <rect x="181" y="156" width="7" height="3" rx="1"/>
      </g>
      <ellipse cx="80" cy="82" rx="50" ry="36" fill="#404040" stroke="#909090" strokeWidth="1.2"/>
      <ellipse cx="80" cy="82" rx="36" ry="26" fill="#2a2a2a" stroke="#707070" strokeWidth="0.8"/>
      <ellipse cx="80" cy="82" rx="22" ry="15" fill="#353535" stroke="#606060" strokeWidth="0.8"/>
      <g fill="none" strokeWidth="2">
      <ellipse cx="80" cy="76" rx="18" ry="4" stroke="#e8c87a" opacity="0.8"/>
      <ellipse cx="80" cy="80" rx="18" ry="4" stroke="#d4a850" opacity="0.7"/>
      <ellipse cx="80" cy="84" rx="18" ry="4" stroke="#e8c87a" opacity="0.7"/>
      <ellipse cx="80" cy="88" rx="18" ry="4" stroke="#d4a850" opacity="0.6"/>
      </g>
      <circle cx="80" cy="82" r="4" fill="#909090" stroke="#606060" strokeWidth="0.8"/>
      <circle cx="80" cy="82" r="2" fill="#d0d0d0"/>
      <circle cx="32" cy="55" r="18" fill="#555555" stroke="#909090" strokeWidth="1.2"/>
      <circle cx="32" cy="55" r="13" fill="#404040" stroke="#707070" strokeWidth="0.8"/>
      <g stroke="#d9b382" strokeWidth="0.8" opacity="0.8">
      <line x1="32" y1="42" x2="32" y2="46"/><line x1="32" y1="64" x2="32" y2="68"/>
      <line x1="19" y1="55" x2="23" y2="55"/><line x1="41" y1="55" x2="45" y2="55"/>
      <line x1="22.8" y1="45.8" x2="25.6" y2="48.6"/><line x1="41.2" y1="45.8" x2="38.4" y2="48.6"/>
      </g>
      <circle cx="32" cy="47" r="2.5" fill="#d9b382" opacity="0.9"/>
      <circle cx="125" cy="38" r="13" fill="#555555" stroke="#909090" strokeWidth="1"/>
      <circle cx="125" cy="38" r="8" fill="#404040"/>
      <circle cx="125" cy="31" r="2" fill="#d9b382" opacity="0.8"/>
      <circle cx="228" cy="85" r="30" fill="#555555" stroke="#909090" strokeWidth="1.5"/>
      <circle cx="228" cy="85" r="22" fill="url(#silverWheel)" stroke="#aaaaaa" strokeWidth="0.8"/>
      <g stroke="#707070" strokeWidth="2.5">
      <line x1="228" y1="63" x2="228" y2="107"/>
      <line x1="206" y1="85" x2="250" y2="85"/>
      <line x1="212.4" y1="69.4" x2="243.6" y2="100.6"/>
      <line x1="243.6" y1="69.4" x2="212.4" y2="100.6"/>
      </g>
      <g stroke="#e0e0e0" strokeWidth="0.8" opacity="0.6">
      <line x1="228" y1="63" x2="228" y2="107"/>
      <line x1="206" y1="85" x2="250" y2="85"/>
      </g>
      <circle cx="228" cy="85" r="8" fill="#505050" stroke="#d9b382" strokeWidth="1"/>
      <circle cx="228" cy="85" r="4" fill="#d9b382"/>
      <path d="M210,65 Q228,60 246,65" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4"/>
      <path d="M181,154 L181,165" fill="none" stroke="#e8c87a" strokeWidth="1.5"/>
      </g>
    </svg>
  )
}
