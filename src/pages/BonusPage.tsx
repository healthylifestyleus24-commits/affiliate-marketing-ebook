import PageLayout from '../components/PageLayout';

export default function BonusPage() {
  return (
    <PageLayout pageNumber={27}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-500 font-semibold mb-1">Bonus</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Quick-Reference Resource Guide</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          Keep this page bookmarked. Here's everything you need in one place—your cheat sheet for affiliate marketing success.
        </p>

        <div className="space-y-4">
          {/* Quick formulas */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <h3 className="text-sm font-bold text-gray-800 mb-3">🧮 Essential Formulas</h3>
            <div className="space-y-2">
              {[
                { formula: 'Earnings = Traffic × Click Rate × Conversion Rate × Commission', label: 'Revenue Formula' },
                { formula: 'To earn $100: Need 100 clicks × 5% conversion × $20 commission', label: 'The $100 Math' },
                { formula: 'Monthly Email Value = Subscribers × $1–$3', label: 'Email List Value' },
              ].map((f, i) => (
                <div key={i} className="p-2 bg-white rounded-lg border border-gray-200">
                  <p className="text-xs font-bold text-gray-700">{f.label}</p>
                  <p className="text-xs font-mono text-blue-600">{f.formula}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content templates */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100">
            <h3 className="text-sm font-bold text-gray-800 mb-3">📝 Headline Templates (Copy & Customize)</h3>
            <div className="space-y-1.5">
              {[
                '"I Tested [X Products] — Here\'s the Only One Worth Buying"',
                '"[Product] Review: [X] Things I Wish I Knew Before Buying"',
                '"Best [Product Category] for [Specific Audience] in 2025"',
                '"[Product A] vs [Product B]: The Honest Comparison"',
                '"How [Product] Helped Me [Achieve Specific Result]"',
                '"Stop Wasting Money on [Category] — Try This Instead"',
                '"The Complete Beginner\'s Guide to [Topic] (Step-by-Step)"',
                '"[Number] [Products] That Actually [Desired Outcome]"',
              ].map((template, i) => (
                <p key={i} className="text-xs text-gray-600 p-1.5 bg-white rounded border border-gray-100 font-mono">{template}</p>
              ))}
            </div>
          </div>

          {/* Daily checklist */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <h3 className="text-sm font-bold text-gray-800 mb-3">✅ Daily Success Habits (15-30 min each)</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { task: 'Create 1 piece of content', time: '30 min' },
                { task: 'Pin 5-10 pins on Pinterest', time: '15 min' },
                { task: 'Engage in 1 community', time: '15 min' },
                { task: 'Answer 1-2 Quora questions', time: '15 min' },
                { task: 'Check analytics & optimize', time: '10 min' },
                { task: 'Learn something new', time: '15 min' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                  <span className="text-green-500 text-sm">☐</span>
                  <div>
                    <p className="text-xs font-medium text-gray-700">{item.task}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliate link to programs */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
            <h3 className="text-sm font-bold text-gray-800 mb-2">🏆 Top Programs to Join First</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'Amazon Associates', best: 'Physical products' },
                { name: 'ClickBank', best: 'Digital products' },
                { name: 'ShareASale', best: 'Mixed merchants' },
                { name: 'Impact', best: 'Big brands' },
                { name: 'PartnerStack', best: 'SaaS recurring' },
                { name: 'Digistore24', best: 'EU market' },
              ].map((p) => (
                <div key={p.name} className="p-2 bg-white rounded-lg border border-gray-100 text-center">
                  <p className="text-xs font-bold text-gray-700">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.best}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative illustration */}
        <div className="mt-5">
          <svg viewBox="0 0 400 40" className="w-full max-w-sm mx-auto opacity-30">
            <rect x="50" y="15" width="300" height="2" rx="1" fill="url(#bonus-grad)" />
            <circle cx="50" cy="16" r="4" fill="#2563eb" />
            <circle cx="200" cy="16" r="4" fill="#7c3aed" />
            <circle cx="350" cy="16" r="4" fill="#10b981" />
            <defs>
              <linearGradient id="bonus-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </PageLayout>
  );
}
