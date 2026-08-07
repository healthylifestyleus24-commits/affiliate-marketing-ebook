import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter1Page2() {
  return (
    <PageLayout pageNumber={5}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">Chapter 01 — Continued</p>
        
        <h3 className="text-base font-bold text-gray-800 mb-4">Different Affiliate Business Models</h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Not all affiliate marketing looks the same. Here are the four primary models you can follow, depending on your strengths and interests:
        </p>

        <div className="space-y-3 mb-6">
          {[
            { title: 'Content Creator Model', icon: '📝', desc: 'Write blog posts, create YouTube videos, or publish social media content that naturally includes affiliate links. Best for: people who enjoy teaching and sharing knowledge.', color: '#2563eb' },
            { title: 'Review & Comparison Model', icon: '⭐', desc: 'Create detailed product reviews and comparison articles. "Best X for Y" articles consistently rank high on Google. Best for: thorough researchers and detail-oriented people.', color: '#7c3aed' },
            { title: 'Social Media Model', icon: '📱', desc: 'Build a following on Instagram, TikTok, Pinterest, or YouTube Shorts. Share quick tips, demonstrations, and recommendations. Best for: visual communicators and trend-spotters.', color: '#06b6d4' },
            { title: 'Email Marketing Model', icon: '✉️', desc: 'Build an email list and nurture subscribers with valuable content. Recommend products through email sequences. Best for: relationship builders who think long-term.', color: '#10b981' },
          ].map((model) => (
            <div key={model.title} className="flex gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ background: `${model.color}12` }}>
                {model.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{model.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Understanding Commissions</h3>
        
        <div className="overflow-hidden rounded-xl border border-gray-100 mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 text-xs font-semibold text-gray-500 uppercase">Product Type</th>
                <th className="text-left p-3 text-xs font-semibold text-gray-500 uppercase">Commission</th>
                <th className="text-left p-3 text-xs font-semibold text-gray-500 uppercase">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr><td className="p-3 text-gray-700">Physical Products</td><td className="p-3 text-gray-600">3-15%</td><td className="p-3 text-gray-500 text-xs">Amazon products</td></tr>
              <tr><td className="p-3 text-gray-700">Digital Products</td><td className="p-3 text-gray-600">30-75%</td><td className="p-3 text-gray-500 text-xs">Online courses, ebooks</td></tr>
              <tr><td className="p-3 text-gray-700">SaaS / Software</td><td className="p-3 text-gray-600">20-40%</td><td className="p-3 text-gray-500 text-xs">Hosting, tools, apps</td></tr>
              <tr><td className="p-3 text-gray-700">High-Ticket</td><td className="p-3 text-gray-600">$100-$1000+</td><td className="p-3 text-gray-500 text-xs">Coaching, enterprise</td></tr>
            </tbody>
          </table>
        </div>

        <CalloutBox type="tip" title="Action Step">
          <p>Right now, think about one product you've recommended to a friend in the past month. A book, an app, a tool, a gadget—anything. That product likely has an affiliate program. You could have earned money for that recommendation. That's the power of affiliate marketing.</p>
        </CalloutBox>

        {/* Mini illustration */}
        <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <svg viewBox="0 0 400 60" className="w-full max-w-sm mx-auto">
            <text x="20" y="20" fill="#64748b" fontSize="9" fontWeight="600">Your Affiliate Journey Starts Here</text>
            <rect x="20" y="30" width="360" height="8" rx="4" fill="#e2e8f0" />
            <rect x="20" y="30" width="36" height="8" rx="4" fill="url(#cg1)" />
            <defs>
              <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <text x="20" y="52" fill="#94a3b8" fontSize="7">Chapter 1 of 10 complete</text>
            <text x="340" y="52" fill="#2563eb" fontSize="7" fontWeight="600">10%</text>
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 1 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Affiliate marketing = recommending products and earning commissions</li>
            <li>✓ You don't need to create products, handle shipping, or manage customers</li>
            <li>✓ Commissions range from 3% to 75% depending on the product type</li>
            <li>✓ There are multiple business models—choose the one that fits you best</li>
            <li>✓ The industry is worth $17+ billion and still growing rapidly</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
