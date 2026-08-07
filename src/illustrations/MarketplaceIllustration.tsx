export default function MarketplaceIllustration() {
  return (
    <svg viewBox="0 0 460 200" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="mp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Dashboard frame */}
      <rect x="30" y="10" width="400" height="180" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      
      {/* Top bar */}
      <rect x="30" y="10" width="400" height="30" rx="12" fill="#1e293b" />
      <rect x="430" y="22" width="0" height="0" rx="12" />
      <circle cx="50" cy="25" r="5" fill="#ef4444" opacity="0.8" />
      <circle cx="65" cy="25" r="5" fill="#f59e0b" opacity="0.8" />
      <circle cx="80" cy="25" r="5" fill="#10b981" opacity="0.8" />
      <text x="180" y="29" fill="#94a3b8" fontSize="8" fontWeight="500">Affiliate Dashboard</text>
      
      {/* Sidebar */}
      <rect x="30" y="40" width="90" height="150" fill="#f1f5f9" />
      
      {/* Sidebar items */}
      <rect x="40" y="50" width="70" height="18" rx="4" fill="#2563eb" opacity="0.1" />
      <text x="48" y="63" fill="#2563eb" fontSize="7" fontWeight="600">📊 Overview</text>
      
      <text x="48" y="83" fill="#64748b" fontSize="7">🔗 Links</text>
      <text x="48" y="100" fill="#64748b" fontSize="7">💰 Earnings</text>
      <text x="48" y="117" fill="#64748b" fontSize="7">📦 Products</text>
      <text x="48" y="134" fill="#64748b" fontSize="7">📈 Reports</text>
      <text x="48" y="151" fill="#64748b" fontSize="7">⚙️ Settings</text>
      
      {/* Main content area */}
      {/* Stats cards */}
      <rect x="130" y="48" width="88" height="42" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="140" y="62" fill="#64748b" fontSize="6">Total Earnings</text>
      <text x="140" y="80" fill="#10b981" fontSize="14" fontWeight="700">$847</text>
      
      <rect x="226" y="48" width="88" height="42" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="236" y="62" fill="#64748b" fontSize="6">Total Clicks</text>
      <text x="236" y="80" fill="#2563eb" fontSize="14" fontWeight="700">2,341</text>
      
      <rect x="322" y="48" width="88" height="42" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="332" y="62" fill="#64748b" fontSize="6">Conversion</text>
      <text x="332" y="80" fill="#7c3aed" fontSize="14" fontWeight="700">4.2%</text>
      
      {/* Network logos area */}
      <rect x="130" y="100" width="140" height="80" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="140" y="115" fill="#1e293b" fontSize="7" fontWeight="600">Affiliate Networks</text>
      
      <rect x="140" y="122" width="55" height="14" rx="3" fill="#f97316" opacity="0.1" />
      <text x="145" y="132" fill="#f97316" fontSize="6" fontWeight="600">Amazon</text>
      
      <rect x="200" y="122" width="55" height="14" rx="3" fill="#10b981" opacity="0.1" />
      <text x="205" y="132" fill="#10b981" fontSize="6" fontWeight="600">ClickBank</text>
      
      <rect x="140" y="140" width="55" height="14" rx="3" fill="#2563eb" opacity="0.1" />
      <text x="148" y="150" fill="#2563eb" fontSize="6" fontWeight="600">Impact</text>
      
      <rect x="200" y="140" width="55" height="14" rx="3" fill="#7c3aed" opacity="0.1" />
      <text x="206" y="150" fill="#7c3aed" fontSize="6" fontWeight="600">ShareASale</text>
      
      <rect x="140" y="158" width="55" height="14" rx="3" fill="#06b6d4" opacity="0.1" />
      <text x="158" y="168" fill="#06b6d4" fontSize="6" fontWeight="600">CJ</text>
      
      <rect x="200" y="158" width="55" height="14" rx="3" fill="#ec4899" opacity="0.1" />
      <text x="203" y="168" fill="#ec4899" fontSize="6" fontWeight="600">PartnerStack</text>
      
      {/* Mini chart */}
      <rect x="280" y="100" width="132" height="80" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="290" y="115" fill="#1e293b" fontSize="7" fontWeight="600">Monthly Trend</text>
      <polyline points="295,165 310,155 325,158 340,145 355,148 370,135 385,125 400,118" fill="none" stroke="#2563eb" strokeWidth="2" />
      <polyline points="295,165 310,155 325,158 340,145 355,148 370,135 385,125 400,118 400,170 295,170" fill="#2563eb" opacity="0.08" />
    </svg>
  );
}
