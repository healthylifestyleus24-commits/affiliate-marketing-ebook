import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter10Page3() {
  return (
    <PageLayout pageNumber={26}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-4">Chapter 10 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">Advanced Strategies for Serious Affiliates</h3>

        <div className="space-y-3 mb-5">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">🎯 Strategy: The Content Cluster Method</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Instead of random articles, create interconnected content clusters. Write one pillar article ("Complete Guide to [Topic]") and 5-10 supporting articles that link back to it. This dramatically boosts SEO and keeps readers on your content longer.
            </p>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 font-medium mb-1">Example Cluster:</p>
              <p className="text-xs text-blue-600 font-semibold mb-1">Pillar: "Complete Guide to Home Office Setup"</p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>↳ "Best Standing Desks Under $500"</li>
                <li>↳ "Ergonomic Chair Review: 5 Options Compared"</li>
                <li>↳ "How to Set Up Dual Monitors"</li>
                <li>↳ "Best Lighting for Video Calls"</li>
                <li>↳ "Desk Organization Tools That Actually Work"</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">📊 Strategy: Data-Driven Optimization</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">Once you have traffic, optimize everything with data:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { metric: 'Click-through Rate', target: '>3%', action: 'Improve CTAs, button placement, anchor text' },
                { metric: 'Conversion Rate', target: '>2%', action: 'Better product matching, trust signals, reviews' },
                { metric: 'Revenue per Click', target: '>$0.50', action: 'Switch to higher-commission products' },
                { metric: 'Content ROI', target: 'Positive', action: 'Double down on formats/topics that convert' },
              ].map((m) => (
                <div key={m.metric} className="p-2 bg-white rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-gray-700">{m.metric}</p>
                  <p className="text-xs text-green-600 font-semibold">Target: {m.target}</p>
                  <p className="text-xs text-gray-400">{m.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Your Affiliate Marketing Toolkit</h3>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-bold text-gray-700 mb-1.5">📝 Content Creation</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Canva (design) — Free</li>
                <li>• Grammarly (writing) — Free</li>
                <li>• CapCut (video editing) — Free</li>
                <li>• ChatGPT (outlines) — Free</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 mb-1.5">📊 SEO & Research</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Ubersuggest — Free tier</li>
                <li>• Google Trends — Free</li>
                <li>• AnswerThePublic — Free</li>
                <li>• Google Search Console — Free</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 mb-1.5">📧 Email Marketing</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Mailchimp — Free to 500</li>
                <li>• Beehiiv — Free tier</li>
                <li>• ConvertKit — Free to 1,000</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 mb-1.5">🔗 Link Management</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Bitly — Free tier</li>
                <li>• Linktree — Free</li>
                <li>• Google Sheets (tracking)</li>
              </ul>
            </div>
          </div>
        </div>

        <CalloutBox type="tip" title="The $0 Startup Advantage">
          <p>Every tool listed above has a free tier. You can build a profitable affiliate marketing business with literally $0 investment. All you need is time, consistency, and the willingness to learn. That's the beauty of this business model.</p>
        </CalloutBox>

        <div className="mt-5 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 10 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Email marketing is your most scalable revenue channel</li>
            <li>✓ Automate repetitive tasks to free up creative time</li>
            <li>✓ Use AI as a tool, not a replacement for your voice</li>
            <li>✓ Build a personal brand for long-term authority</li>
            <li>✓ Diversify traffic sources to reduce platform risk</li>
            <li>✓ Eventually create your own products for maximum profit</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
