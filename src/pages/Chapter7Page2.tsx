import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter7Page2() {
  return (
    <PageLayout pageNumber={17}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-4">Chapter 07 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">Strategy 3: YouTube (Search-Based Video)</h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          YouTube is the second-largest search engine. Product review videos can rank for years and generate consistent affiliate commissions. And remember—you don't need to show your face.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
            <h4 className="text-xs font-bold text-gray-800 mb-1">🎥 Faceless Video Ideas</h4>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Screen recordings of software</li>
              <li>• Slideshow with voiceover</li>
              <li>• Product B-roll with text</li>
              <li>• Animated explainer videos</li>
              <li>• AI-generated voiceovers</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
            <h4 className="text-xs font-bold text-gray-800 mb-1">🏆 Video Types That Sell</h4>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• "[Product] Review - Worth It?"</li>
              <li>• "Top 5 [Products] in 2025"</li>
              <li>• "[Product A] vs [Product B]"</li>
              <li>• "How to Use [Product]"</li>
              <li>• "[Product] - 30 Days Later"</li>
            </ul>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Strategy 4: Social Media Traffic</h3>

        <div className="space-y-2 mb-5">
          <div className="p-3 rounded-lg bg-purple-50/50 border border-purple-100">
            <h4 className="text-xs font-bold text-gray-800 mb-1">🔄 The Value Loop Strategy</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Instead of posting links constantly, follow the 80/20 rule: 80% pure value content (tips, insights, stories), 20% promotional content with links. This builds trust and keeps your audience engaged.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-blue-50/50 text-center">
              <p className="text-lg mb-1">📱</p>
              <p className="text-xs font-bold text-gray-700">TikTok</p>
              <p className="text-xs text-gray-400">3-5 posts/day</p>
              <p className="text-xs text-green-500 font-medium">High reach</p>
            </div>
            <div className="p-2 rounded-lg bg-pink-50/50 text-center">
              <p className="text-lg mb-1">📸</p>
              <p className="text-xs font-bold text-gray-700">Instagram</p>
              <p className="text-xs text-gray-400">1-2 posts/day</p>
              <p className="text-xs text-green-500 font-medium">Visual niche</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-50/50 text-center">
              <p className="text-lg mb-1">📘</p>
              <p className="text-xs font-bold text-gray-700">Facebook</p>
              <p className="text-xs text-gray-400">Groups + posts</p>
              <p className="text-xs text-green-500 font-medium">Community</p>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Strategy 5: Community Participation</h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          Join communities where your audience hangs out: Reddit, Facebook Groups, Discord servers, and niche forums. Don't spam links—become a helpful member first. When someone asks for a recommendation, you'll be the trusted person they listen to.
        </p>

        <CalloutBox type="warning" title="Traffic Mistake to Avoid">
          <p>Never buy fake traffic, use bots, or spam your links in comments. This will get your affiliate accounts banned and destroy your reputation. Every click should come from a real person who genuinely wants to learn about the product.</p>
        </CalloutBox>

        {/* Traffic sources timeline */}
        <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
          <svg viewBox="0 0 400 50" className="w-full max-w-md mx-auto">
            <text x="80" y="12" fill="#1e293b" fontSize="8" fontWeight="700">When Each Traffic Source Kicks In</text>
            <rect x="10" y="22" width="380" height="6" rx="3" fill="#e2e8f0" />
            <rect x="10" y="22" width="60" height="6" rx="3" fill="#1e293b" />
            <text x="10" y="42" fill="#1e293b" fontSize="6">Social</text>
            <text x="10" y="50" fill="#94a3b8" fontSize="5">Week 1</text>
            
            <rect x="80" y="22" width="120" height="6" rx="3" fill="#e11d48" />
            <text x="110" y="42" fill="#e11d48" fontSize="6">Pinterest</text>
            <text x="110" y="50" fill="#94a3b8" fontSize="5">Month 1-2</text>
            
            <rect x="210" y="22" width="180" height="6" rx="3" fill="#2563eb" />
            <text x="270" y="42" fill="#2563eb" fontSize="6">SEO / YouTube</text>
            <text x="270" y="50" fill="#94a3b8" fontSize="5">Month 3-6+</text>
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-red-50/50 border border-red-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 7 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Pinterest SEO is the fastest free traffic source for beginners</li>
            <li>✓ Target buyer-intent keywords for Google SEO</li>
            <li>✓ YouTube videos can rank and earn for years</li>
            <li>✓ Follow the 80/20 rule on social media</li>
            <li>✓ Never buy fake traffic—build real relationships</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
