export default function ActionPlanIllustration() {
  return (
    <svg viewBox="0 0 460 180" className="w-full max-w-lg mx-auto">
      <defs>
        <linearGradient id="ap1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="33%" stopColor="#7c3aed" />
          <stop offset="66%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Progress bar background */}
      <rect x="30" y="85" width="400" height="8" rx="4" fill="#e2e8f0" />
      <rect x="30" y="85" width="400" height="8" rx="4" fill="url(#ap1)" opacity="0.8" />
      
      {/* Week markers */}
      {/* Week 1 */}
      <circle cx="60" cy="89" r="14" fill="white" stroke="#2563eb" strokeWidth="2" />
      <text x="53" y="93" fill="#2563eb" fontSize="8" fontWeight="700">W1</text>
      <text x="35" y="70" fill="#2563eb" fontSize="7" fontWeight="600">Foundation</text>
      <text x="32" y="115" fill="#64748b" fontSize="6">Pick niche</text>
      <text x="32" y="125" fill="#64748b" fontSize="6">Join programs</text>
      <text x="32" y="135" fill="#64748b" fontSize="6">Setup accounts</text>
      
      {/* Week 2 */}
      <circle cx="170" cy="89" r="14" fill="white" stroke="#7c3aed" strokeWidth="2" />
      <text x="163" y="93" fill="#7c3aed" fontSize="8" fontWeight="700">W2</text>
      <text x="148" y="70" fill="#7c3aed" fontSize="7" fontWeight="600">Content</text>
      <text x="142" y="115" fill="#64748b" fontSize="6">Create content</text>
      <text x="142" y="125" fill="#64748b" fontSize="6">First 5 posts</text>
      <text x="142" y="135" fill="#64748b" fontSize="6">Add links</text>
      
      {/* Week 3 */}
      <circle cx="290" cy="89" r="14" fill="white" stroke="#06b6d4" strokeWidth="2" />
      <text x="283" y="93" fill="#06b6d4" fontSize="8" fontWeight="700">W3</text>
      <text x="270" y="70" fill="#06b6d4" fontSize="7" fontWeight="600">Traffic</text>
      <text x="262" y="115" fill="#64748b" fontSize="6">Drive visitors</text>
      <text x="262" y="125" fill="#64748b" fontSize="6">SEO optimize</text>
      <text x="262" y="135" fill="#64748b" fontSize="6">Engage audience</text>
      
      {/* Week 4 */}
      <circle cx="400" cy="89" r="14" fill="white" stroke="#10b981" strokeWidth="2" />
      <text x="393" y="93" fill="#10b981" fontSize="8" fontWeight="700">W4</text>
      <text x="375" y="70" fill="#10b981" fontSize="7" fontWeight="600">First $$$ 🎉</text>
      <text x="372" y="115" fill="#64748b" fontSize="6">Optimize & scale</text>
      <text x="372" y="125" fill="#64748b" fontSize="6">Track results</text>
      <text x="372" y="135" fill="#64748b" fontSize="6">Celebrate! 🎊</text>
      
      {/* Day counters */}
      <text x="42" y="55" fill="#94a3b8" fontSize="6">Days 1-7</text>
      <text x="150" y="55" fill="#94a3b8" fontSize="6">Days 8-14</text>
      <text x="268" y="55" fill="#94a3b8" fontSize="6">Days 15-21</text>
      <text x="378" y="55" fill="#94a3b8" fontSize="6">Days 22-30</text>
      
      {/* Bottom milestone */}
      <rect x="120" y="155" width="220" height="22" rx="11" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
      <text x="150" y="170" fill="#10b981" fontSize="8" fontWeight="600">🎯 Goal: First $100 in 30 Days</text>
      
      {/* Top label */}
      <text x="155" y="25" fill="#1e293b" fontSize="10" fontWeight="700">Your 30-Day Progress Tracker</text>
      <rect x="155" y="30" width="150" height="2" rx="1" fill="url(#ap1)" opacity="0.5" />
    </svg>
  );
}
