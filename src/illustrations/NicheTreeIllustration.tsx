export default function NicheTreeIllustration() {
  return (
    <svg viewBox="0 0 460 220" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="nt1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      
      {/* Center trunk */}
      <rect x="200" y="85" width="60" height="30" rx="15" fill="url(#nt1)" />
      <text x="208" y="105" fill="white" fontSize="9" fontWeight="700">NICHE</text>
      
      {/* Branches - top row */}
      <line x1="230" y1="85" x2="80" y2="30" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="85" x2="190" y2="20" stroke="#7c3aed" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="85" x2="300" y2="15" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="85" x2="390" y2="25" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
      
      {/* Branches - bottom row */}
      <line x1="230" y1="115" x2="60" y2="170" stroke="#10b981" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="115" x2="170" y2="180" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="115" x2="300" y2="185" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4" />
      <line x1="230" y1="115" x2="400" y2="170" stroke="#ef4444" strokeWidth="1.5" opacity="0.4" />
      
      {/* Niche leaves - top */}
      <rect x="40" y="10" width="80" height="35" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1" />
      <text x="55" y="25" fill="#2563eb" fontSize="8" fontWeight="600">🏥 Health</text>
      <text x="50" y="38" fill="#64748b" fontSize="6">Supplements, Fitness</text>
      
      <rect x="150" y="2" width="80" height="35" rx="8" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1" />
      <text x="163" y="17" fill="#7c3aed" fontSize="8" fontWeight="600">💰 Finance</text>
      <text x="157" y="30" fill="#64748b" fontSize="6">Investing, Credit Cards</text>
      
      <rect x="260" y="0" width="80" height="35" rx="8" fill="#ecfdf5" stroke="#06b6d4" strokeWidth="1" />
      <text x="272" y="14" fill="#06b6d4" fontSize="8" fontWeight="600">💻 Software</text>
      <text x="267" y="28" fill="#64748b" fontSize="6">SaaS, Tools, Apps</text>
      
      <rect x="355" y="8" width="80" height="35" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="1" />
      <text x="362" y="23" fill="#f97316" fontSize="8" fontWeight="600">📚 Education</text>
      <text x="360" y="36" fill="#64748b" fontSize="6">Courses, Tutoring</text>
      
      {/* Niche leaves - bottom */}
      <rect x="20" y="155" width="80" height="35" rx="8" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
      <text x="37" y="170" fill="#10b981" fontSize="8" fontWeight="600">🐾 Pets</text>
      <text x="28" y="183" fill="#64748b" fontSize="6">Food, Toys, Health</text>
      
      <rect x="130" y="165" width="80" height="35" rx="8" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1" />
      <text x="143" y="180" fill="#ec4899" fontSize="8" fontWeight="600">💄 Beauty</text>
      <text x="137" y="193" fill="#64748b" fontSize="6">Skincare, Makeup</text>
      
      <rect x="260" y="170" width="85" height="35" rx="8" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1" />
      <text x="268" y="185" fill="#8b5cf6" fontSize="8" fontWeight="600">⚡ Productivity</text>
      <text x="268" y="198" fill="#64748b" fontSize="6">Planners, Apps</text>
      
      <rect x="360" y="155" width="80" height="35" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
      <text x="377" y="170" fill="#ef4444" fontSize="8" fontWeight="600">🏠 Home</text>
      <text x="367" y="183" fill="#64748b" fontSize="6">Décor, Gadgets</text>
      
      {/* Star indicators for top niches */}
      <text x="105" y="20" fill="#f59e0b" fontSize="10">⭐</text>
      <text x="218" y="10" fill="#f59e0b" fontSize="10">⭐</text>
      <text x="325" y="8" fill="#f59e0b" fontSize="10">⭐</text>
    </svg>
  );
}
