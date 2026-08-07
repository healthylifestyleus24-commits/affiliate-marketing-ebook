export default function TrafficSourcesIllustration() {
  return (
    <svg viewBox="0 0 460 210" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="ts1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Traffic sources - left side */}
      <rect x="10" y="5" width="90" height="28" rx="14" fill="#e11d48" opacity="0.1" stroke="#e11d48" strokeWidth="1" />
      <text x="25" y="23" fill="#e11d48" fontSize="8" fontWeight="600">📌 Pinterest</text>
      
      <rect x="10" y="40" width="90" height="28" rx="14" fill="#ef4444" opacity="0.1" stroke="#ef4444" strokeWidth="1" />
      <text x="22" y="58" fill="#ef4444" fontSize="8" fontWeight="600">▶️ YouTube</text>
      
      <rect x="10" y="75" width="90" height="28" rx="14" fill="#ec4899" opacity="0.1" stroke="#ec4899" strokeWidth="1" />
      <text x="20" y="93" fill="#ec4899" fontSize="8" fontWeight="600">📸 Instagram</text>
      
      <rect x="10" y="110" width="90" height="28" rx="14" fill="#2563eb" opacity="0.1" stroke="#2563eb" strokeWidth="1" />
      <text x="20" y="128" fill="#2563eb" fontSize="8" fontWeight="600">📘 Facebook</text>
      
      <rect x="10" y="145" width="90" height="28" rx="14" fill="#1e293b" opacity="0.1" stroke="#1e293b" strokeWidth="1" />
      <text x="28" y="163" fill="#1e293b" fontSize="8" fontWeight="600">🎵 TikTok</text>
      
      <rect x="10" y="180" width="90" height="28" rx="14" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="1" />
      <text x="22" y="198" fill="#10b981" fontSize="8" fontWeight="600">📝 Medium</text>
      
      {/* Flow arrows */}
      <path d="M105,20 Q160,20 185,85" stroke="#e11d48" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M105,55 Q150,55 185,85" stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M105,90 L185,90" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M105,125 Q150,125 185,95" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M105,160 Q160,160 185,100" stroke="#1e293b" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M105,195 Q165,195 185,105" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.4" />
      
      {/* Center hub - Your Content */}
      <circle cx="220" cy="95" r="40" fill="url(#ts1)" opacity="0.15" />
      <circle cx="220" cy="95" r="30" fill="url(#ts1)" opacity="0.3" />
      <text x="201" y="90" fill="#0f766e" fontSize="8" fontWeight="700">YOUR</text>
      <text x="197" y="103" fill="#0f766e" fontSize="8" fontWeight="700">CONTENT</text>
      
      {/* Arrow from hub to affiliate link */}
      <path d="M255,95 L305,95" stroke="#2563eb" strokeWidth="2.5" />
      <polygon points="303,89 315,95 303,101" fill="#2563eb" />
      
      {/* Affiliate Link box */}
      <rect x="320" y="65" width="130" height="60" rx="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
      <text x="345" y="85" fill="#2563eb" fontSize="9" fontWeight="700">🔗 Affiliate Link</text>
      <text x="340" y="100" fill="#64748b" fontSize="7">Visitor clicks your link</text>
      <text x="345" y="115" fill="#10b981" fontSize="8" fontWeight="600">→ You earn $$$</text>
      
      {/* Money flowing out */}
      <g className="animate-float">
        <text x="410" y="50" fill="#10b981" fontSize="14">💵</text>
      </g>
      <g className="animate-float" style={{animationDelay: '0.5s'}}>
        <text x="430" y="80" fill="#10b981" fontSize="12">💰</text>
      </g>
      <g className="animate-float" style={{animationDelay: '1s'}}>
        <text x="415" y="140" fill="#f97316" fontSize="11">💸</text>
      </g>
      
      {/* Bottom note */}
      <rect x="120" y="170" width="220" height="28" rx="14" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
      <text x="142" y="188" fill="#10b981" fontSize="8" fontWeight="600">✅ No website needed • All free platforms</text>
    </svg>
  );
}
