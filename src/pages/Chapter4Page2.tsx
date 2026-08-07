import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter4Page2() {
  return (
    <PageLayout pageNumber={11}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4">Chapter 04 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">How to Apply & Get Accepted</h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Some programs accept everyone instantly. Others review your application. Here's how to maximize your approval chances, even as a complete beginner:
        </p>

        <div className="space-y-3 mb-5">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">📝 Step 1: Prepare Your Online Presence</h4>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Create a professional social media profile in your niche</li>
              <li>• Publish 3-5 pieces of content before applying</li>
              <li>• Have a clear bio explaining what you do</li>
              <li>• Even a Medium or Pinterest account counts!</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-50/50 border border-purple-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">✍️ Step 2: Write a Great Application</h4>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Explain HOW you'll promote their products</li>
              <li>• Mention your niche and target audience</li>
              <li>• Be specific about your traffic sources (Pinterest, YouTube, etc.)</li>
              <li>• Show enthusiasm for their brand/products</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-50/50 border border-green-100">
            <h4 className="text-sm font-bold text-gray-800 mb-2">🚀 Step 3: Start Promoting Strategically</h4>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Always disclose affiliate relationships (FTC requirement)</li>
              <li>• Start with products you've actually used or researched deeply</li>
              <li>• Create genuine, helpful content around each product</li>
              <li>• Track your links using the program's dashboard</li>
            </ul>
          </div>
        </div>

        <CalloutBox type="warning" title="Common Rejection Reasons">
          <ul className="space-y-1">
            <li>• Empty website or social media with zero content</li>
            <li>• Application says "I'll put links on my site" without specifics</li>
            <li>• Country restrictions (some programs are US/EU only)</li>
            <li>• Niche doesn't match the merchant's products</li>
          </ul>
        </CalloutBox>

        <h3 className="text-base font-bold text-gray-800 mt-5 mb-3">Finding Hidden Affiliate Programs</h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Not all programs are on major networks. Here's how to find programs directly:
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { method: 'Google Search', query: '"[brand name] affiliate program"', icon: '🔍' },
            { method: 'Website Footer', query: 'Look for "Affiliates" or "Partners" link', icon: '🔗' },
            { method: 'Ask Directly', query: 'Email companies: "Do you have an affiliate program?"', icon: '✉️' },
            { method: 'Competitor Research', query: 'See what products other affiliates promote', icon: '🕵️' },
          ].map((item) => (
            <div key={item.method} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <span>{item.icon}</span>
                <span className="text-xs font-bold text-gray-800">{item.method}</span>
              </div>
              <p className="text-xs text-gray-500">{item.query}</p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
          <svg viewBox="0 0 400 50" className="w-full max-w-md mx-auto">
            <text x="65" y="15" fill="#1e293b" fontSize="9" fontWeight="700">Your First Week Affiliate Setup Checklist</text>
            {['Sign up for Amazon Associates', 'Join 1 niche-specific program', 'Get all tracking links ready', 'Create your first piece of content'].map((task, i) => (
              <g key={i}>
                <rect x={10 + i * 98} y={25} width="90" height="18" rx="4" fill="#f97316" opacity="0.1" />
                <text x={15 + i * 98} y={37} fill="#f97316" fontSize="6" fontWeight="500">✅ {task}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 4 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Start with Amazon Associates + one niche-specific program</li>
            <li>✓ Prepare your online presence before applying</li>
            <li>✓ Write specific, detailed applications</li>
            <li>✓ Many great programs are "hidden" — search for them directly</li>
            <li>✓ Always disclose affiliate relationships</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
