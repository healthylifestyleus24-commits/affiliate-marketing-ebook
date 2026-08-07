export default function WarningIllustration() {
  return (
    <svg viewBox="0 0 460 180" className="w-full max-w-lg mx-auto">
      {/* Warning icons grid */}
      <rect x="10" y="10" width="130" height="50" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <text x="22" y="32" fill="#ef4444" fontSize="14">⚠️</text>
      <text x="42" y="30" fill="#dc2626" fontSize="7" fontWeight="600">Too Many Niches</text>
      <text x="42" y="42" fill="#64748b" fontSize="6">Focus on ONE first</text>
      <text x="42" y="52" fill="#64748b" fontSize="6">then expand later</text>
      
      <rect x="150" y="10" width="130" height="50" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <text x="162" y="32" fill="#ef4444" fontSize="14">🛑</text>
      <text x="182" y="30" fill="#dc2626" fontSize="7" fontWeight="600">Giving Up Early</text>
      <text x="182" y="42" fill="#64748b" fontSize="6">Most quit in week 2</text>
      <text x="182" y="52" fill="#64748b" fontSize="6">Stay consistent!</text>
      
      <rect x="290" y="10" width="130" height="50" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <text x="302" y="32" fill="#ef4444" fontSize="14">🚫</text>
      <text x="322" y="30" fill="#dc2626" fontSize="7" fontWeight="600">Spamming Links</text>
      <text x="322" y="42" fill="#64748b" fontSize="6">Add value FIRST</text>
      <text x="322" y="52" fill="#64748b" fontSize="6">then share links</text>
      
      <rect x="10" y="70" width="130" height="50" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      <text x="22" y="92" fill="#f59e0b" fontSize="14">😤</text>
      <text x="42" y="90" fill="#d97706" fontSize="7" fontWeight="600">Ignoring Trust</text>
      <text x="42" y="102" fill="#64748b" fontSize="6">People buy from</text>
      <text x="42" y="112" fill="#64748b" fontSize="6">those they trust</text>
      
      <rect x="150" y="70" width="130" height="50" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      <text x="162" y="92" fill="#f59e0b" fontSize="14">📊</text>
      <text x="182" y="90" fill="#d97706" fontSize="7" fontWeight="600">Not Tracking</text>
      <text x="182" y="102" fill="#64748b" fontSize="6">If you can't measure</text>
      <text x="182" y="112" fill="#64748b" fontSize="6">you can't improve</text>
      
      <rect x="290" y="70" width="130" height="50" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      <text x="302" y="92" fill="#f59e0b" fontSize="14">💸</text>
      <text x="322" y="90" fill="#d97706" fontSize="7" fontWeight="600">Fake Traffic</text>
      <text x="322" y="102" fill="#64748b" fontSize="6">Bots don't buy</text>
      <text x="322" y="112" fill="#64748b" fontSize="6">Focus on real people</text>
      
      {/* Do this instead */}
      <rect x="60" y="135" width="340" height="35" rx="10" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
      <text x="80" y="150" fill="#10b981" fontSize="9" fontWeight="700">✅ Do This Instead:</text>
      <text x="80" y="163" fill="#64748b" fontSize="7">Pick 1 niche → Create value → Build trust → Share links naturally → Track everything</text>
    </svg>
  );
}
