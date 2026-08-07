import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter3Page2() {
  return (
    <PageLayout pageNumber={9}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 font-semibold mb-4">Chapter 03 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">5 Deadly Mistakes Beginners Make When Choosing a Niche</h3>

        <div className="space-y-3 mb-5">
          {[
            { num: '01', title: 'Choosing a niche only because it pays well', desc: 'If you know nothing about cryptocurrency and have zero interest, you\'ll burn out creating content. You need at least mild curiosity to stay consistent.', fix: 'Pick something at the intersection of profitability and genuine interest.' },
            { num: '02', title: 'Going too broad', desc: '"Health" is too broad. "Yoga for back pain" is specific enough to rank and resonate. Niching down helps you become the go-to expert faster.', fix: 'Narrow your niche until you can serve a specific person with a specific problem.' },
            { num: '03', title: 'Not checking competition', desc: 'If the top 10 Google results are all from massive authority sites, you\'ll struggle to get noticed. Look for niches with some smaller competitors.', fix: 'Search your topic keywords. If you see small blogs ranking, there\'s room for you.' },
            { num: '04', title: 'Ignoring buyer intent', desc: 'Some niches get lots of traffic but nobody buys. "Free meditation music" gets searches but those people aren\'t buying. "Best meditation app" people are ready to pay.', fix: 'Target keywords with buyer intent: "best," "review," "vs," "alternative to."' },
            { num: '05', title: 'Changing niches too frequently', desc: 'Jumping from fitness to crypto to pets every two weeks means you never gain momentum. Give your niche at least 90 days before pivoting.', fix: 'Commit to one niche for a minimum of 3 months. Track results, then decide.' },
          ].map((mistake) => (
            <div key={mistake.num} className="p-3 rounded-xl border border-red-100 bg-red-50/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-red-400">{mistake.num}</span>
                <h4 className="text-xs font-bold text-gray-800">{mistake.title}</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-1">{mistake.desc}</p>
              <p className="text-xs text-green-600 font-medium">✅ Fix: {mistake.fix}</p>
            </div>
          ))}
        </div>

        <CalloutBox type="tip" title="Action Step: Niche Worksheet">
          <p className="mb-2">Fill in these blanks to find your ideal niche:</p>
          <div className="space-y-1.5">
            <p>I'm interested in: _______________</p>
            <p>People in this niche want to: _______________</p>
            <p>They're willing to pay for: _______________</p>
            <p>I can help by creating content about: _______________</p>
            <p>3 affiliate programs in this niche: _______________</p>
          </div>
        </CalloutBox>

        {/* Mini illustration */}
        <div className="mt-5 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
          <svg viewBox="0 0 400 70" className="w-full max-w-md mx-auto">
            <text x="100" y="15" fill="#1e293b" fontSize="9" fontWeight="700">The Perfect Niche Formula</text>
            <rect x="20" y="30" width="100" height="30" rx="8" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="1" />
            <text x="32" y="49" fill="#06b6d4" fontSize="8" fontWeight="600">Your Interest</text>
            <text x="130" y="50" fill="#64748b" fontSize="14" fontWeight="300">+</text>
            <rect x="150" y="30" width="100" height="30" rx="8" fill="#2563eb" opacity="0.15" stroke="#2563eb" strokeWidth="1" />
            <text x="162" y="49" fill="#2563eb" fontSize="8" fontWeight="600">Buyer Demand</text>
            <text x="260" y="50" fill="#64748b" fontSize="14" fontWeight="300">=</text>
            <rect x="280" y="30" width="100" height="30" rx="8" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="1.5" />
            <text x="290" y="49" fill="#10b981" fontSize="8" fontWeight="700">💰 Profit</text>
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-cyan-50/50 border border-cyan-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 3 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Your niche determines 80% of your success</li>
            <li>✓ Validate with the 3-question test before committing</li>
            <li>✓ Narrow down to a specific sub-niche for faster results</li>
            <li>✓ Avoid the 5 common beginner mistakes</li>
            <li>✓ Give your chosen niche at least 90 days</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
