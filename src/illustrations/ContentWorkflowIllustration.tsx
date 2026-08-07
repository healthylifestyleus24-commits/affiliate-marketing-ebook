export default function ContentWorkflowIllustration() {
  return (
    <svg viewBox="0 0 460 190" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="cw1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      
      {/* Step 1: Hook */}
      <rect x="10" y="30" width="95" height="70" rx="10" fill="white" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="57" cy="50" r="12" fill="#f97316" opacity="0.15" />
      <text x="50" y="55" fill="#f97316" fontSize="14">🪝</text>
      <text x="28" y="75" fill="#1e293b" fontSize="8" fontWeight="700">1. HOOK</text>
      <text x="18" y="88" fill="#64748b" fontSize="6">Grab attention</text>
      <text x="18" y="96" fill="#64748b" fontSize="6">in 3 seconds</text>
      
      {/* Arrow */}
      <path d="M108,65 L125,65" stroke="#e2e8f0" strokeWidth="1.5" />
      <polygon points="123,60 132,65 123,70" fill="#e2e8f0" />
      
      {/* Step 2: Story */}
      <rect x="135" y="30" width="95" height="70" rx="10" fill="white" stroke="#7c3aed" strokeWidth="1.5" />
      <circle cx="182" cy="50" r="12" fill="#7c3aed" opacity="0.15" />
      <text x="175" y="55" fill="#7c3aed" fontSize="14">📖</text>
      <text x="151" y="75" fill="#1e293b" fontSize="8" fontWeight="700">2. STORY</text>
      <text x="143" y="88" fill="#64748b" fontSize="6">Build connection</text>
      <text x="143" y="96" fill="#64748b" fontSize="6">& trust</text>
      
      {/* Arrow */}
      <path d="M233,65 L250,65" stroke="#e2e8f0" strokeWidth="1.5" />
      <polygon points="248,60 257,65 248,70" fill="#e2e8f0" />
      
      {/* Step 3: Value */}
      <rect x="260" y="30" width="95" height="70" rx="10" fill="white" stroke="#2563eb" strokeWidth="1.5" />
      <circle cx="307" cy="50" r="12" fill="#2563eb" opacity="0.15" />
      <text x="300" y="55" fill="#2563eb" fontSize="14">💡</text>
      <text x="278" y="75" fill="#1e293b" fontSize="8" fontWeight="700">3. VALUE</text>
      <text x="268" y="88" fill="#64748b" fontSize="6">Teach something</text>
      <text x="268" y="96" fill="#64748b" fontSize="6">useful</text>
      
      {/* Arrow */}
      <path d="M358,65 L375,65" stroke="#e2e8f0" strokeWidth="1.5" />
      <polygon points="373,60 382,65 373,70" fill="#e2e8f0" />
      
      {/* Step 4: CTA */}
      <rect x="385" y="30" width="65" height="70" rx="10" fill="url(#cw1)" />
      <text x="404" y="55" fill="white" fontSize="14">🎯</text>
      <text x="400" y="75" fill="white" fontSize="8" fontWeight="700">CTA</text>
      <text x="393" y="88" fill="white" fontSize="6" opacity="0.9">Click the</text>
      <text x="400" y="96" fill="white" fontSize="6" opacity="0.9">link!</text>
      
      {/* Content types below */}
      <text x="60" y="130" fill="#1e293b" fontSize="8" fontWeight="700">Content Types That Convert:</text>
      
      <rect x="10" y="140" width="80" height="22" rx="6" fill="#eff6ff" />
      <text x="18" y="155" fill="#2563eb" fontSize="7" fontWeight="600">⭐ Reviews</text>
      
      <rect x="95" y="140" width="95" height="22" rx="6" fill="#faf5ff" />
      <text x="103" y="155" fill="#7c3aed" fontSize="7" fontWeight="600">🔄 Comparisons</text>
      
      <rect x="195" y="140" width="80" height="22" rx="6" fill="#f0fdf4" />
      <text x="203" y="155" fill="#10b981" fontSize="7" fontWeight="600">📝 Tutorials</text>
      
      <rect x="280" y="140" width="80" height="22" rx="6" fill="#fff7ed" />
      <text x="288" y="155" fill="#f97316" fontSize="7" fontWeight="600">📋 Listicles</text>
      
      <rect x="365" y="140" width="85" height="22" rx="6" fill="#fdf2f8" />
      <text x="373" y="155" fill="#ec4899" fontSize="7" fontWeight="600">🎬 How-Tos</text>
      
      {/* Bottom tip */}
      <rect x="60" y="172" width="340" height="16" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="100" y="183" fill="#64748b" fontSize="7">💡 Pro Tip: Always lead with the reader's problem, not the product</text>
    </svg>
  );
}
