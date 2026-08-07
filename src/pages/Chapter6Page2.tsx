import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter6Page2() {
  return (
    <PageLayout pageNumber={15}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold mb-4">Chapter 06 — Continued</p>

        <h3 className="text-base font-bold text-gray-800 mb-3">5 Content Types That Drive Affiliate Sales</h3>

        <div className="space-y-3 mb-5">
          {[
            { num: '01', title: 'Product Reviews', desc: 'Detailed, honest reviews of individual products. Include what you liked, disliked, who it\'s for, and who should skip it. These rank well on Google and convert at 8-15%.', template: 'Title: "[Product Name] Review: Honest Take After [Time] of Use"', color: '#2563eb' },
            { num: '02', title: 'Comparison Posts', desc: '"A vs B" content helps people who are already in buying mode and just need help deciding. These convert at 10-20% because the reader has already decided to buy.', template: 'Title: "[Product A] vs [Product B]: Which Is Better for [Use Case]?"', color: '#7c3aed' },
            { num: '03', title: 'Tutorial / How-To', desc: 'Teach people how to solve a specific problem and naturally weave in product recommendations as tools to help them succeed.', template: 'Title: "How to [Achieve Result] in [Timeframe] (Step-by-Step)"', color: '#06b6d4' },
            { num: '04', title: 'Best-Of Listicles', desc: '"Best X for Y" articles are SEO gold. Curate 5-10 products, rank them, and explain why each one made the list.', template: 'Title: "7 Best [Products] for [Specific Audience] in 2025"', color: '#10b981' },
            { num: '05', title: 'Personal Story', desc: 'Share how a product changed your life/workflow. This is the most persuasive content type because it\'s authentic and relatable.', template: 'Title: "How [Product] Helped Me [Specific Result]"', color: '#f97316' },
          ].map((type) => (
            <div key={type.num} className="p-3 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: type.color }}>{type.num}</span>
                <h4 className="text-sm font-bold text-gray-800">{type.title}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-1">{type.desc}</p>
              <p className="text-xs font-mono bg-white p-1.5 rounded border border-gray-200 text-gray-500">{type.template}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Headlines That Get Clicks</h3>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            '✅ Use numbers ("7 Best...")',
            '✅ Include the year ("...in 2025")',
            '✅ Add modifiers ("honest," "real")',
            '✅ Speak to a specific audience',
            '✅ Promise a clear benefit',
            '✅ Create curiosity gap',
          ].map((tip, i) => (
            <div key={i} className="p-2 rounded-lg bg-blue-50/50 text-xs text-gray-600 font-medium">{tip}</div>
          ))}
        </div>

        <CalloutBox type="quote">
          <p className="text-gray-700">"People don't want to be sold. They want to be helped. Help them genuinely, and the commissions follow naturally."</p>
        </CalloutBox>

        {/* Content calendar mini illustration */}
        <div className="mt-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📅 Weekly Content Plan</h4>
          <div className="grid grid-cols-7 gap-1">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center">
                <p className="text-xs font-bold text-gray-500 mb-1">{day}</p>
                <div className="p-1.5 bg-white rounded text-xs text-gray-400">
                  {day === 'Mon' ? '📝 Review' : day === 'Wed' ? '📊 Compare' : day === 'Fri' ? '🎓 Tutorial' : day === 'Sun' ? '📋 List' : '📱 Social'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-pink-50/50 border border-pink-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 6 Key Takeaways</h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>✓ Use the Hook → Story → Value → CTA framework</li>
            <li>✓ Product reviews and comparison posts convert best</li>
            <li>✓ Honesty builds trust—mention downsides too</li>
            <li>✓ Headlines with numbers and specifics get more clicks</li>
            <li>✓ Create a weekly content schedule and stick to it</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
