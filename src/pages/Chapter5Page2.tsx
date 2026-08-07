import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter5Page2() {
  return (
    <PageLayout pageNumber={13}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-green-500 font-semibold mb-4">Chapter 05 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">Written Content Platforms (No Website Needed)</h3>

        <div className="space-y-3 mb-5">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">📝 Medium</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Medium has millions of monthly readers and built-in distribution. Write product review articles, "best of" lists, and how-to guides. You can include affiliate links directly in your articles. Many affiliates earn $500-$2,000/month purely from Medium articles.
            </p>
            <div className="bg-white p-2 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 font-medium">💡 Winning Medium Article Titles:</p>
              <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                <li>• "I Tested 5 Budget Standing Desks — Here's My Honest Review"</li>
                <li>• "The Best Email Marketing Tools for Small Businesses (2025)"</li>
                <li>• "How I Organized My Life With These 3 Apps"</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">❓ Quora</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              People on Quora are actively asking questions—and your answers can include helpful product recommendations with affiliate links. One great answer can generate clicks for years.
            </p>
            <p className="text-xs text-gray-500 font-medium">Strategy: Find questions like "What's the best tool for X?" and write detailed, helpful answers.</p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">🧵 Threads</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Meta's text-based platform is growing fast. Share quick tips, product recommendations, and mini-reviews. Build a following with consistent, valuable posts. Link to your affiliate products through your bio.
            </p>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Building Your Email List (Even Without a Website)</h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Email is the most valuable asset in affiliate marketing. When someone joins your email list, you own that relationship. Platforms can change algorithms; your email list is forever.
        </p>

        <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-2">How to Start an Email List for Free</h4>
          <div className="space-y-2">
            {[
              { step: '1', text: 'Sign up for a free email tool (Mailchimp, ConvertKit, or Beehiiv)' },
              { step: '2', text: 'Create a simple lead magnet (checklist, cheat sheet, mini-guide)' },
              { step: '3', text: 'Share your sign-up link on social media and in your content' },
              { step: '4', text: 'Send weekly emails with tips + product recommendations' },
              { step: '5', text: 'Include affiliate links naturally within your helpful emails' },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">{s.step}</span>
                <p className="text-xs text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <CalloutBox type="quote">
          <p className="text-gray-700">"The money is in the list. Every email subscriber is worth $1-$3 per month. Build a list of 1,000 people and you could earn $1,000-$3,000 monthly."</p>
        </CalloutBox>

        {/* Platform comparison illustration */}
        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
          <svg viewBox="0 0 400 80" className="w-full max-w-md mx-auto">
            <text x="105" y="15" fill="#1e293b" fontSize="9" fontWeight="700">Platform Comparison At-a-Glance</text>
            <text x="10" y="35" fill="#64748b" fontSize="7" fontWeight="600">Content Lifespan:</text>
            {[
              { name: 'Pinterest', w: 280, c: '#e11d48' },
              { name: 'YouTube', w: 250, c: '#ef4444' },
              { name: 'Medium', w: 220, c: '#1e293b' },
              { name: 'Quora', w: 200, c: '#f97316' },
              { name: 'TikTok', w: 80, c: '#000' },
            ].map((p, i) => (
              <g key={i}>
                <text x="10" y={50 + i * 12} fill="#64748b" fontSize="6">{p.name}</text>
                <rect x={55} y={44 + i * 12} width={p.w} height="6" rx="3" fill={p.c} opacity="0.25" />
                <rect x={55} y={44 + i * 12} width={p.w} height="6" rx="3" fill={p.c} opacity="0.6" />
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-green-50/50 border border-green-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 5 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ You do NOT need a website to start affiliate marketing</li>
            <li>✓ Pinterest is the #1 beginner-friendly platform</li>
            <li>✓ Medium and Quora let you write articles with affiliate links</li>
            <li>✓ Start building an email list from day one</li>
            <li>✓ Pick 1-2 platforms and master them before expanding</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
