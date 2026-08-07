export default function AffiliateBasicsIllustration() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="ab1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="ab2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Merchant */}
      <rect x="10" y="50" width="100" height="80" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="30" y="60" width="60" height="20" rx="4" fill="url(#ab1)" />
      <text x="38" y="75" fill="white" fontSize="9" fontWeight="600">Merchant</text>
      <text x="35" y="105" fill="#475569" fontSize="20">🏪</text>
      <text x="25" y="122" fill="#64748b" fontSize="8">Product Owner</text>
      
      {/* Arrow 1 */}
      <path d="M115,90 L155,90" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      <text x="118" y="82" fill="#2563eb" fontSize="7" fontWeight="600">Provides Link</text>
      
      {/* Affiliate (You) */}
      <rect x="160" y="40" width="120" height="100" rx="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <rect x="180" y="50" width="80" height="22" rx="4" fill="url(#ab1)" />
      <text x="192" y="65" fill="white" fontSize="10" fontWeight="700">YOU</text>
      <text x="198" y="95" fill="#1e293b" fontSize="24">👤</text>
      <text x="178" y="118" fill="#2563eb" fontSize="8" fontWeight="600">Affiliate Partner</text>
      <text x="182" y="130" fill="#64748b" fontSize="7">Promote & Earn</text>
      
      {/* Arrow 2 */}
      <path d="M285,90 L325,90" stroke="#10b981" strokeWidth="2" />
      <text x="288" y="82" fill="#10b981" fontSize="7" fontWeight="600">Shares Link</text>
      
      {/* Customer */}
      <rect x="330" y="50" width="100" height="80" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="348" y="60" width="65" height="20" rx="4" fill="url(#ab2)" />
      <text x="355" y="75" fill="white" fontSize="9" fontWeight="600">Customer</text>
      <text x="360" y="105" fill="#475569" fontSize="20">🛍️</text>
      <text x="353" y="122" fill="#64748b" fontSize="8">Buys Product</text>
      
      {/* Commission flow - curved arrow back */}
      <path d="M370,135 C370,175 220,185 220,145" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3" />
      <text x="250" y="178" fill="#f97316" fontSize="9" fontWeight="700">💰 Commission Earned!</text>
      
      {/* Small decorative elements */}
      <circle cx="145" cy="50" r="3" fill="#7c3aed" opacity="0.4" />
      <circle cx="310" cy="130" r="3" fill="#06b6d4" opacity="0.4" />
      <circle cx="450" cy="40" r="4" fill="#f97316" opacity="0.3" />
    </svg>
  );
}
