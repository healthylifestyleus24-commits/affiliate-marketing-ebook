export default function GrowthStaircaseIllustration() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="gs1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Staircase steps */}
      <rect x="30" y="160" width="70" height="25" rx="4" fill="#2563eb" opacity="0.15" stroke="#2563eb" strokeWidth="1" />
      <text x="40" y="176" fill="#2563eb" fontSize="7" fontWeight="600">$100/mo</text>
      <text x="38" y="155" fill="#64748b" fontSize="6">Email List</text>
      
      <rect x="105" y="135" width="70" height="50" rx="4" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="1" />
      <text x="115" y="155" fill="#7c3aed" fontSize="7" fontWeight="600">$500/mo</text>
      <text x="110" y="130" fill="#64748b" fontSize="6">Automation</text>
      
      <rect x="180" y="110" width="70" height="75" rx="4" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="1" />
      <text x="188" y="132" fill="#06b6d4" fontSize="7" fontWeight="600">$1,000/mo</text>
      <text x="190" y="105" fill="#64748b" fontSize="6">AI Tools</text>
      
      <rect x="255" y="85" width="70" height="100" rx="4" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="1" />
      <text x="263" y="110" fill="#10b981" fontSize="7" fontWeight="600">$3,000/mo</text>
      <text x="262" y="80" fill="#64748b" fontSize="6">Brand Building</text>
      
      <rect x="330" y="55" width="70" height="130" rx="4" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="1" />
      <text x="335" y="82" fill="#f97316" fontSize="7" fontWeight="600">$10,000/mo</text>
      <text x="333" y="50" fill="#64748b" fontSize="6">Multi-Channel</text>
      
      <rect x="405" y="25" width="45" height="160" rx="4" fill="url(#gs1)" opacity="0.2" stroke="#10b981" strokeWidth="1.5" />
      <text x="408" y="50" fill="#10b981" fontSize="7" fontWeight="700">$50K+</text>
      <text x="408" y="62" fill="#64748b" fontSize="5">Digital</text>
      <text x="408" y="71" fill="#64748b" fontSize="5">Products</text>
      
      {/* Growth arrow */}
      <path d="M50,150 Q230,30 435,20" fill="none" stroke="url(#gs1)" strokeWidth="2" strokeDasharray="6,3" />
      <polygon points="432,14 442,18 433,24" fill="#10b981" />
      
      {/* Person climbing */}
      <circle cx="75" cy="142" r="6" fill="#2563eb" />
      <line x1="75" y1="148" x2="75" y2="158" stroke="#2563eb" strokeWidth="1.5" />
      <line x1="70" y1="152" x2="80" y2="152" stroke="#2563eb" strokeWidth="1.5" />
      
      {/* Star at top */}
      <text x="420" y="18" fill="#f59e0b" fontSize="12">⭐</text>
      
      {/* Labels */}
      <text x="130" y="15" fill="#1e293b" fontSize="9" fontWeight="700">Your Growth Journey</text>
      <text x="130" y="27" fill="#64748b" fontSize="7">From first $100 to full-time income</text>
    </svg>
  );
}
