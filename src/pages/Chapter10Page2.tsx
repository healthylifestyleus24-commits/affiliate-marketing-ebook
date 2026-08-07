import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter10Page2() {
  return (
    <PageLayout pageNumber={25}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-4">Chapter 10 — Continued</p>

        <div className="space-y-3 mb-5">
          <div className="p-3 rounded-xl bg-green-50/30 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">4</span>
              <h4 className="text-sm font-bold text-gray-800">Building a Personal Brand</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              At some point, you'll outgrow being "just an affiliate." Building a personal brand means people follow YOU, not just your content. This dramatically increases your influence and earning potential.
            </p>
            <div className="space-y-1.5">
              {[
                'Develop a consistent visual style and voice across platforms',
                'Share your journey—people love following real stories',
                'Become THE go-to person for your niche topic',
                'Create signature frameworks or methods that become associated with you',
              ].map((tip, i) => (
                <p key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                  <span className="text-green-500 mt-0.5">●</span> {tip}
                </p>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-orange-50/30 border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold">5</span>
              <h4 className="text-sm font-bold text-gray-800">Multiple Traffic Sources</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Don't rely on a single platform. Algorithms change, accounts get restricted, and platforms rise and fall. Build a portfolio of traffic sources:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { source: 'Search (SEO)', pct: '40%', color: '#2563eb' },
                { source: 'Pinterest', pct: '25%', color: '#e11d48' },
                { source: 'YouTube', pct: '15%', color: '#ef4444' },
                { source: 'Email', pct: '10%', color: '#7c3aed' },
                { source: 'Social', pct: '5%', color: '#06b6d4' },
                { source: 'Other', pct: '5%', color: '#64748b' },
              ].map((s) => (
                <div key={s.source} className="text-center p-2 bg-white rounded-lg border border-gray-100">
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-1 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: s.pct, background: s.color }} />
                  </div>
                  <p className="text-xs font-bold" style={{ color: s.color }}>{s.pct}</p>
                  <p className="text-xs text-gray-400">{s.source}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-yellow-50/30 border border-yellow-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">6</span>
              <h4 className="text-sm font-bold text-gray-800">Creating Your Own Digital Products</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              The ultimate scaling strategy: create products you own. This is where affiliate marketers evolve into entrepreneurs. Your audience trusts you—now offer them something of your own.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { product: '📚 Ebooks & Guides', example: 'Deep-dive guides in your niche' },
                { product: '🎓 Online Courses', example: 'Teach what you\'ve learned' },
                { product: '📋 Templates', example: 'Checklists, planners, swipe files' },
                { product: '👥 Coaching', example: 'One-on-one or group sessions' },
              ].map((p) => (
                <div key={p.product} className="p-2 bg-white rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-gray-700">{p.product}</p>
                  <p className="text-xs text-gray-400">{p.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Your Long-Term Roadmap</h3>

        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 mb-4">
          <div className="space-y-2">
            {[
              { period: 'Months 1-3', goal: 'First $100-$500', focus: 'Build foundation, create content, master one platform' },
              { period: 'Months 3-6', goal: '$500-$2,000/mo', focus: 'Scale content, grow email list, add second platform' },
              { period: 'Months 6-12', goal: '$2,000-$5,000/mo', focus: 'Automate, build brand, explore high-ticket products' },
              { period: 'Year 2+', goal: '$5,000-$20,000+/mo', focus: 'Create own products, build team, multiple income streams' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-100">
                <div className="flex-shrink-0 px-2 py-1 rounded text-xs font-bold text-white" style={{ background: ['#2563eb', '#7c3aed', '#06b6d4', '#10b981'][i] }}>
                  {item.period}
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-gray-700">{item.goal}</p>
                  <p className="text-xs text-gray-400">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CalloutBox type="quote">
          <p className="text-gray-700">"Your first $100 in affiliate marketing isn't just money. It's proof of concept. It's proof that the system works, that you can do this, and that the sky is truly the limit."</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
