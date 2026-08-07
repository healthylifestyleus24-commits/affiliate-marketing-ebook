export default function CoverIllustration() {
  return (
    <svg viewBox="0 0 500 350" className="w-full max-w-md mx-auto">
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="cg3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      
      {/* Laptop */}
      <rect x="120" y="120" width="200" height="130" rx="8" fill="#1e293b" />
      <rect x="130" y="128" width="180" height="105" rx="4" fill="#0f172a" />
      
      {/* Screen content - chart */}
      <polyline points="145,215 170,200 195,210 220,180 245,190 270,160 295,140" fill="none" stroke="#10b981" strokeWidth="2.5" filter="url(#glow1)" />
      <circle cx="295" cy="140" r="4" fill="#10b981" filter="url(#glow1)" />
      
      {/* Grid lines on screen */}
      <line x1="140" y1="155" x2="300" y2="155" stroke="#1e293b" strokeWidth="0.5" />
      <line x1="140" y1="175" x2="300" y2="175" stroke="#1e293b" strokeWidth="0.5" />
      <line x1="140" y1="195" x2="300" y2="195" stroke="#1e293b" strokeWidth="0.5" />
      <line x1="140" y1="215" x2="300" y2="215" stroke="#1e293b" strokeWidth="0.5" />
      
      {/* Dollar signs on screen */}
      <text x="150" y="150" fill="#10b981" fontSize="10" fontWeight="bold" opacity="0.8">$100</text>
      <text x="260" y="150" fill="#06b6d4" fontSize="9" opacity="0.6">▲ 247%</text>
      
      {/* Laptop base */}
      <path d="M100,250 L120,250 L125,258 L315,258 L320,250 L340,250 L330,268 L110,268 Z" fill="#334155" />
      
      {/* Floating money */}
      <g className="animate-float">
        <rect x="350" y="100" width="50" height="28" rx="4" fill="#10b981" opacity="0.9" />
        <text x="365" y="119" fill="white" fontSize="14" fontWeight="bold">$</text>
        <text x="375" y="119" fill="white" fontSize="10">100</text>
      </g>
      
      <g className="animate-float" style={{animationDelay: '0.5s'}}>
        <rect x="370" y="150" width="45" height="25" rx="4" fill="#2563eb" opacity="0.8" />
        <text x="383" y="167" fill="white" fontSize="12" fontWeight="bold">$50</text>
      </g>
      
      <g className="animate-float" style={{animationDelay: '1s'}}>
        <rect x="55" y="130" width="45" height="25" rx="4" fill="#f97316" opacity="0.8" />
        <text x="68" y="147" fill="white" fontSize="12" fontWeight="bold">$25</text>
      </g>
      
      {/* Connection nodes */}
      <circle cx="80" cy="200" r="20" fill="url(#cg2)" opacity="0.7" />
      <text x="73" y="205" fill="white" fontSize="14">🛒</text>
      
      <circle cx="380" cy="210" r="20" fill="url(#cg1)" opacity="0.7" />
      <text x="373" y="215" fill="white" fontSize="14">📱</text>
      
      {/* Arrow connections */}
      <path d="M100,200 L120,200" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
      <path d="M320,210 L360,210" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
      
      {/* Growth arrow */}
      <path d="M220,90 L240,60 L260,90" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <circle cx="240" cy="55" r="12" fill="#f97316" opacity="0.2" />
      <text x="233" y="60" fill="#f97316" fontSize="12" fontWeight="bold">↑</text>
      
      {/* Decorative circles */}
      <circle cx="420" cy="80" r="8" fill="#7c3aed" opacity="0.3" />
      <circle cx="440" cy="120" r="5" fill="#2563eb" opacity="0.2" />
      <circle cx="60" cy="90" r="6" fill="#06b6d4" opacity="0.3" />
      <circle cx="40" cy="170" r="4" fill="#f97316" opacity="0.2" />
      
      {/* Bottom bar chart mini */}
      <rect x="160" y="290" width="15" height="20" rx="2" fill="#2563eb" opacity="0.5" />
      <rect x="180" y="280" width="15" height="30" rx="2" fill="#7c3aed" opacity="0.5" />
      <rect x="200" y="275" width="15" height="35" rx="2" fill="#06b6d4" opacity="0.5" />
      <rect x="220" y="268" width="15" height="42" rx="2" fill="#10b981" opacity="0.5" />
      <rect x="240" y="260" width="15" height="50" rx="2" fill="#f97316" opacity="0.5" />
      <rect x="260" y="255" width="15" height="55" rx="2" fill="#2563eb" opacity="0.6" />
      <rect x="280" y="248" width="15" height="62" rx="2" fill="url(#cg3)" opacity="0.7" />
    </svg>
  );
}
