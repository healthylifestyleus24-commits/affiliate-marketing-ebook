export default function IncomeFlowIllustration() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="if1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="if2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Income Types */}
      <rect x="10" y="10" width="105" height="55" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
      <text x="25" y="30" fill="#2563eb" fontSize="9" fontWeight="700">CPA</text>
      <text x="20" y="42" fill="#64748b" fontSize="7">Pay Per Action</text>
      <text x="20" y="54" fill="#10b981" fontSize="8" fontWeight="600">$5–$200/sale</text>
      
      <rect x="10" y="75" width="105" height="55" rx="10" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
      <text x="25" y="95" fill="#10b981" fontSize="9" fontWeight="700">Revenue Share</text>
      <text x="20" y="107" fill="#64748b" fontSize="7">% of Every Sale</text>
      <text x="20" y="119" fill="#2563eb" fontSize="8" fontWeight="600">10%–50%</text>
      
      <rect x="10" y="140" width="105" height="55" rx="10" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="25" y="160" fill="#7c3aed" fontSize="9" fontWeight="700">Recurring</text>
      <text x="20" y="172" fill="#64748b" fontSize="7">Monthly Income</text>
      <text x="20" y="184" fill="#f97316" fontSize="8" fontWeight="600">$10–$500/mo</text>
      
      {/* Arrows flowing to center */}
      <path d="M118,38 L165,90" stroke="#2563eb" strokeWidth="1.5" opacity="0.6" />
      <path d="M118,100 L165,100" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
      <path d="M118,168 L165,110" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />
      
      {/* Center funnel */}
      <path d="M170,60 L230,60 L215,140 L185,140 Z" fill="url(#if1)" rx="4" opacity="0.9" />
      <text x="185" y="95" fill="white" fontSize="11" fontWeight="700">YOU</text>
      <text x="189" y="108" fill="white" fontSize="8" opacity="0.8">earn</text>
      
      {/* Output arrow */}
      <path d="M215,100 L260,100" stroke="#10b981" strokeWidth="2.5" />
      <polygon points="258,94 270,100 258,106" fill="#10b981" />
      
      {/* Income levels */}
      <rect x="280" y="15" width="170" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="290" y="32" fill="#1e293b" fontSize="8" fontWeight="600">Low Ticket</text>
      <text x="290" y="44" fill="#64748b" fontSize="7">$1–$50 per sale • High volume</text>
      <rect x="410" y="25" width="30" height="16" rx="4" fill="#06b6d4" opacity="0.2" />
      <text x="415" y="37" fill="#06b6d4" fontSize="8" fontWeight="700">💵</text>
      
      <rect x="280" y="65" width="170" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="290" y="82" fill="#1e293b" fontSize="8" fontWeight="600">Mid Ticket</text>
      <text x="290" y="94" fill="#64748b" fontSize="7">$50–$200 per sale • Balanced</text>
      <rect x="410" y="75" width="30" height="16" rx="4" fill="#2563eb" opacity="0.2" />
      <text x="414" y="87" fill="#2563eb" fontSize="8" fontWeight="700">💰</text>
      
      <rect x="280" y="115" width="170" height="40" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
      <text x="290" y="132" fill="#1e293b" fontSize="8" fontWeight="600">High Ticket</text>
      <text x="290" y="144" fill="#64748b" fontSize="7">$200–$2000+ per sale • Premium</text>
      <rect x="410" y="125" width="30" height="16" rx="4" fill="#f97316" opacity="0.2" />
      <text x="413" y="137" fill="#f97316" fontSize="8" fontWeight="700">🤑</text>
      
      <rect x="280" y="165" width="170" height="30" rx="8" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
      <text x="290" y="184" fill="#10b981" fontSize="8" fontWeight="700">🔄 Recurring = Passive Income</text>
    </svg>
  );
}
