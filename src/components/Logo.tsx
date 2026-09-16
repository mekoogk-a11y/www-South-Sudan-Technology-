import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isArabic?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  isArabic = false,
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', title: 'text-base', sub: 'text-[10px]' },
    md: { icon: 'w-10 h-10', title: 'text-lg', sub: 'text-xs' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 'w-20 h-20', title: 'text-3xl', sub: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* High-Tech Geometric Emblem */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-sky-500/30 to-emerald-400/20 rounded-xl blur-sm transform scale-110" />
        
        {/* SVG Graphic containing South Sudan Geometric Polygon + Digital Network Nodes + Code Symbol */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(6,182,212,0.35)]"
        >
          <defs>
            <linearGradient id="sst-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="sst-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Hexagonal / Diamond Shield Tech Frame */}
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="18"
            className="stroke-cyan-500/30 fill-[#080e1e]/90"
            strokeWidth="1.5"
          />

          {/* Stylized Modern Geographic Polygon Nodes of South Sudan */}
          {/* Coordinates loosely tracing modern regional nodes: Raja/Aweil, Bentiu/Malakal, Bor, Juba, Nimule/Torit */}
          <path
            d="M 22 36 L 40 22 L 72 26 L 82 45 L 75 75 L 52 82 L 35 70 L 22 52 Z"
            fill="url(#sst-grad-1)"
            fillOpacity="0.12"
            stroke="url(#sst-grad-1)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />

          {/* Internal Network Connection Lines */}
          <path
            d="M 40 22 L 52 50 L 75 75"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            strokeOpacity="0.7"
          />
          <path
            d="M 22 36 L 52 50 L 82 45"
            stroke="#06b6d4"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <path
            d="M 35 70 L 52 50 L 72 26"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Central Coding Matrix Motif: < / > Bracket Interlock */}
          <path
            d="M 46 45 L 41 50 L 46 55"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 54 45 L 59 50 L 54 55"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="52"
            y1="43"
            x2="48"
            y2="57"
            stroke="url(#sst-grad-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Dynamic Digital Network Nodes / Constellation Points */}
          <circle cx="40" cy="22" r="3" fill="#38bdf8" />
          <circle cx="72" cy="26" r="3.5" fill="#06b6d4" />
          <circle cx="82" cy="45" r="3" fill="#38bdf8" />
          <circle cx="75" cy="75" r="3.5" fill="#10b981" />
          <circle cx="52" cy="82" r="4" fill="#06b6d4" />
          {/* Capital Hub Node (Juba Core Coordinate Marker) */}
          <circle cx="54" cy="70" r="4.5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="54" cy="70" r="2" fill="#ffffff" />
          <circle cx="35" cy="70" r="3" fill="#38bdf8" />
          <circle cx="22" cy="36" r="3" fill="#06b6d4" />
          <circle cx="22" cy="52" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-bold tracking-tight text-white flex items-center gap-1.5 ${currentSize.title}`}>
            <span>{isArabic ? 'تكنولوجيا جنوب السودان' : 'South Sudan'}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 font-extrabold">
              {isArabic ? '' : 'Technology'}
            </span>
          </div>
          <span className={`text-slate-400 font-medium tracking-wider uppercase ${currentSize.sub}`}>
            {isArabic ? 'South Sudan Technology' : 'Digital & AI Solutions • Juba'}
          </span>
        </div>
      )}
    </div>
  );
};
