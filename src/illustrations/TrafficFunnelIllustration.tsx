export default function TrafficFunnelIllustration() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="tf1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Funnel shape */}
      <path d="M130,15 L330,15 L295,65 L165,65 Z" fill="#2563eb" opacity="0.12" stroke="#2563eb" strokeWidth="1" />
      <path d="M165,65 L295,65 L275,110 L185,110 Z" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" strokeWidth="1" />
      <path d="M185,110 L275,110 L260,150 L200,150 Z" fill="#06b6d4" opacity="0.12" stroke="#06b6d4" strokeWidth="1" />
      <path d="M200,150 L260,150 L245,185 L215,185 Z" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="1" />
      
      {/* Funnel labels */}
      <text x="195" y="38" fill="#2563eb" fontSize="8" fontWeight="700">AWARENESS</text>
      <text x="185" y="50" fill="#64748b" fontSize="6">SEO, Pinterest, Social Media</text>
      
      <text x="202" y="82" fill="#7c3aed" fontSize="8" fontWeight="700">INTEREST</text>
      <text x="190" y="95" fill="#64748b" fontSize="6">Read your content, watch video</text>
      
      <text x="205" y="127" fill="#0891b2" fontSize="8" fontWeight="700">CLICK</text>
      <text x="195" y="140" fill="#64748b" fontSize="6">Click affiliate link</text>
      
      <text x="207" y="172" fill="#10b981" fontSize="8" fontWeight="700">SALE 💰</text>
      
      {/* Right side - traffic methods */}
      <text x="350" y="25" fill="#1e293b" fontSize="9" fontWeight="700">Free Traffic Methods</text>
      
      <rect x="350" y="35" width="100" height="22" rx="6" fill="#eff6ff" />
      <text x="358" y="50" fill="#2563eb" fontSize="7">🔍 Google SEO</text>
      
      <rect x="350" y="62" width="100" height="22" rx="6" fill="#fdf2f8" />
      <text x="358" y="77" fill="#e11d48" fontSize="7">📌 Pinterest SEO</text>
      
      <rect x="350" y="89" width="100" height="22" rx="6" fill="#fef2f2" />
      <text x="358" y="104" fill="#ef4444" fontSize="7">▶️ YouTube</text>
      
      <rect x="350" y="116" width="100" height="22" rx="6" fill="#f0fdf4" />
      <text x="358" y="131" fill="#10b981" fontSize="7">📱 Social Media</text>
      
      <rect x="350" y="143" width="100" height="22" rx="6" fill="#faf5ff" />
      <text x="358" y="158" fill="#7c3aed" fontSize="7">📝 Quora/Medium</text>
      
      {/* Left side - keywords */}
      <text x="10" y="25" fill="#1e293b" fontSize="9" fontWeight="700">Keyword Strategy</text>
      
      <rect x="10" y="35" width="105" height="30" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="18" y="48" fill="#10b981" fontSize="6" fontWeight="600">Low Competition</text>
      <text x="18" y="59" fill="#64748b" fontSize="6">"best [product] for..."</text>
      
      <rect x="10" y="72" width="105" height="30" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="18" y="85" fill="#2563eb" fontSize="6" fontWeight="600">Buyer Intent</text>
      <text x="18" y="96" fill="#64748b" fontSize="6">"[product] review 2025"</text>
      
      <rect x="10" y="109" width="105" height="30" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="18" y="122" fill="#7c3aed" fontSize="6" fontWeight="600">Comparison</text>
      <text x="18" y="133" fill="#64748b" fontSize="6">"[A] vs [B] which is..."</text>
      
      <rect x="10" y="146" width="105" height="30" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="18" y="159" fill="#f97316" fontSize="6" fontWeight="600">Problem-Solution</text>
      <text x="18" y="170" fill="#64748b" fontSize="6">"how to fix [problem]"</text>
    </svg>
  );
}
