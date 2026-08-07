import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter2Page2() {
  return (
    <PageLayout pageNumber={7}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-500 font-semibold mb-4">Chapter 02 — Continued</p>
        
        <h3 className="text-base font-bold text-gray-800 mb-3">High-Ticket vs. Low-Ticket: The Math</h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Many beginners chase low-ticket products because they seem "easier to sell." But the math tells a different story. Let's compare two scenarios to reach your $100 goal:
        </p>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="p-4 rounded-xl border border-gray-200 bg-white">
            <h4 className="text-sm font-bold text-gray-800 mb-2">🔹 Path A: Low-Ticket</h4>
            <p className="text-xs text-gray-500 mb-3">$5 commission per sale</p>
            <div className="space-y-2 text-xs text-gray-600">
              <p>Need: <strong className="text-gray-800">20 sales</strong></p>
              <p>If 3% convert: <strong className="text-gray-800">~667 clicks</strong></p>
              <p>If 1% convert: <strong className="text-gray-800">~2,000 clicks</strong></p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">Effort: <span className="text-orange-500 font-semibold">HIGH</span></p>
            </div>
          </div>
          
          <div className="p-4 rounded-xl border-2 border-green-200 bg-green-50/30">
            <h4 className="text-sm font-bold text-gray-800 mb-2">🔹 Path B: High-Ticket</h4>
            <p className="text-xs text-gray-500 mb-3">$50 commission per sale</p>
            <div className="space-y-2 text-xs text-gray-600">
              <p>Need: <strong className="text-gray-800">2 sales</strong></p>
              <p>If 3% convert: <strong className="text-gray-800">~67 clicks</strong></p>
              <p>If 1% convert: <strong className="text-gray-800">~200 clicks</strong></p>
            </div>
            <div className="mt-3 pt-3 border-t border-green-100">
              <p className="text-xs text-gray-500">Effort: <span className="text-green-500 font-semibold">SMART</span></p>
            </div>
          </div>
        </div>

        <CalloutBox type="info" title="The Sweet Spot">
          <p>For beginners, the ideal commission range is $20–$100 per sale. This gives you enough motivation to keep going (each sale feels meaningful) while not requiring massive trust or audience to close the sale.</p>
        </CalloutBox>

        <h3 className="text-base font-bold text-gray-800 mt-5 mb-3">Building Recurring Income: The Snowball Effect</h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Here's what recurring commissions look like over time. This is why SaaS affiliate programs are so powerful:
        </p>

        {/* Income growth visualization */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 mb-5">
          <svg viewBox="0 0 400 120" className="w-full">
            <text x="10" y="15" fill="#64748b" fontSize="8" fontWeight="600">Monthly Recurring Income Growth</text>
            
            {[
              { m: 'M1', v: 30, y: 95, c: '#2563eb' },
              { m: 'M2', v: 60, y: 85, c: '#3b82f6' },
              { m: 'M3', v: 120, y: 70, c: '#7c3aed' },
              { m: 'M4', v: 200, y: 55, c: '#8b5cf6' },
              { m: 'M5', v: 350, y: 40, c: '#06b6d4' },
              { m: 'M6', v: 500, y: 30, c: '#10b981' },
            ].map((item, i) => (
              <g key={i}>
                <rect x={30 + i * 62} y={item.y} width="40" height={105 - item.y} rx="4" fill={item.c} opacity="0.2" />
                <rect x={30 + i * 62} y={item.y} width="40" height={105 - item.y} rx="4" fill={item.c} opacity="0.6" />
                <text x={38 + i * 62} y={item.y - 5} fill={item.c} fontSize="8" fontWeight="700">${item.v}</text>
                <text x={38 + i * 62} y="115" fill="#94a3b8" fontSize="7">{item.m}</text>
              </g>
            ))}
          </svg>
          <p className="text-center text-xs text-gray-400 mt-1">Each new subscriber adds to your monthly income permanently</p>
        </div>

        <CalloutBox type="quote">
          <p className="text-gray-700">"Don't just chase one-time sales. Build a portfolio of recurring commissions. In 12 months, you'll wake up to money you earned while sleeping."</p>
        </CalloutBox>

        <div className="mt-5 p-4 rounded-xl bg-purple-50/50 border border-purple-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 2 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ CPA pays per action—great for quick income</li>
            <li>✓ Revenue share scales with product price</li>
            <li>✓ Recurring commissions create true passive income</li>
            <li>✓ High-ticket products require fewer sales to hit $100</li>
            <li>✓ Mix commission types for a resilient income stream</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
