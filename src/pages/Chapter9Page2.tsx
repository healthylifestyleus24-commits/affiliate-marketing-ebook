import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter9Page2() {
  return (
    <PageLayout pageNumber={23}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-4">Chapter 09 — Continued</p>

        <div className="space-y-3 mb-5">
          <div className="p-3 rounded-xl border-l-4 border-orange-400 bg-orange-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🟠</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #5: Not Tracking Clicks & Conversions</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              If you don't know which content drives clicks and which clicks convert to sales, you're flying blind. You could be wasting time on content that generates zero revenue while ignoring the content type that actually converts.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Check your affiliate dashboards weekly. Use UTM parameters to track which specific posts drive sales. Create a simple spreadsheet to monitor your key metrics.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-orange-400 bg-orange-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🟠</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #6: Buying Fake Traffic</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Those "Get 10,000 visitors for $5" services send bot traffic. Bots don't buy products. You'll waste money, skew your analytics, and potentially get your affiliate accounts banned for suspicious activity.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Every single visitor should be a real person who found your content through search, social media, or genuine engagement. Quality over quantity, always.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-orange-400 bg-orange-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🟠</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #7: Not Investing in Learning</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              The affiliate marketing landscape evolves constantly. New platforms emerge, algorithms change, and fresh strategies arise. Affiliates who stop learning stop earning.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Spend 30 minutes daily learning—read blogs, watch tutorials, follow successful affiliates. This book is your foundation, not your ceiling.</p>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">The Success Mindset Checklist</h3>

        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 mb-5">
          <div className="grid grid-cols-2 gap-2">
            {[
              '✅ I will focus on ONE niche',
              '✅ I commit to 90 days minimum',
              '✅ I will create value before promoting',
              '✅ I will only recommend quality products',
              '✅ I will track my results weekly',
              '✅ I will build real traffic only',
              '✅ I will keep learning every day',
              '✅ I will be patient and consistent',
            ].map((item, i) => (
              <p key={i} className="text-xs text-gray-700 font-medium py-1">{item}</p>
            ))}
          </div>
        </div>

        <CalloutBox type="tip" title="The 90-Day Rule">
          <p>Every successful affiliate marketer I know had moments of doubt in their first 30 days. The difference between those who succeed and those who fail? <strong>They kept going for at least 90 days.</strong> Your content compounds over time. Month 3 is almost always significantly better than month 1.</p>
        </CalloutBox>

        {/* Illustration: Success vs Failure timeline */}
        <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
          <svg viewBox="0 0 400 60" className="w-full max-w-md mx-auto">
            <text x="120" y="12" fill="#1e293b" fontSize="8" fontWeight="700">Most People Quit Here</text>
            <line x1="195" y1="16" x2="195" y2="30" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2" />
            <text x="190" y="28" fill="#ef4444" fontSize="6">↓</text>
            
            <rect x="10" y="32" width="380" height="6" rx="3" fill="#e2e8f0" />
            <rect x="10" y="32" width="190" height="6" rx="3" fill="#ef4444" opacity="0.3" />
            <rect x="200" y="32" width="190" height="6" rx="3" fill="#10b981" opacity="0.3" />
            
            <text x="10" y="52" fill="#94a3b8" fontSize="6">Day 1</text>
            <text x="120" y="52" fill="#ef4444" fontSize="6">Day 15 (most quit)</text>
            <text x="290" y="52" fill="#10b981" fontSize="6">Day 90 (results compound!)</text>
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 9 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Focus on one niche—scattered effort produces scattered results</li>
            <li>✓ 90 days is the minimum commitment for meaningful results</li>
            <li>✓ Value first, links second—always</li>
            <li>✓ Track everything you do so you can optimize</li>
            <li>✓ Patience and consistency are your greatest competitive advantages</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
