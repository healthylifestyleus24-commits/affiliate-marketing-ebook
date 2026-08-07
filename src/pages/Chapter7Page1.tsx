import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import TrafficFunnelIllustration from '../illustrations/TrafficFunnelIllustration';

export default function Chapter7Page1() {
  return (
    <PageLayout pageNumber={16}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-1">Chapter 07</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Getting Your First Visitors</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          You've chosen your niche, joined affiliate programs, and created great content. Now comes the critical question: how do you get people to actually see your content? Traffic is the lifeblood of affiliate marketing. Here are proven free strategies to drive your first visitors.
        </p>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <TrafficFunnelIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Strategy 1: Pinterest SEO (The Hidden Goldmine)</h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          Pinterest is the most underrated traffic source for affiliate marketers. Here's the exact process:
        </p>

        <div className="space-y-2 mb-4">
          {[
            { step: '1', title: 'Optimize Your Profile', desc: 'Use keywords in your bio, display name, and board titles. Pinterest is a search engine—optimize for it.' },
            { step: '2', title: 'Create Keyword-Rich Boards', desc: 'Create 8-10 boards around your niche topics. Use descriptive names like "Best Budget Standing Desks" instead of "Cool Stuff."' },
            { step: '3', title: 'Design Eye-Catching Pins', desc: 'Use Canva (free) to create vertical pins (1000x1500px). Bold text, clean design, and bright colors perform best.' },
            { step: '4', title: 'Write SEO Pin Descriptions', desc: 'Include 3-5 keywords naturally in every pin description. Tell people what they\'ll get if they click.' },
            { step: '5', title: 'Pin Consistently', desc: 'Pin 5-15 pins per day (mix of your content and repins). Use a scheduling tool like Tailwind for consistency.' },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-2 p-2 rounded-lg bg-red-50/30">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">{s.step}</span>
              <div>
                <p className="text-xs font-bold text-gray-800">{s.title}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Strategy 2: Google SEO Basics</h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          Ranking on Google is the ultimate long-term strategy. Even one well-ranked article can generate $500-$2,000/month in affiliate commissions for years.
        </p>

        <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 mb-4">
          <h4 className="text-xs font-bold text-gray-800 mb-2">🔍 Keyword Research (The Easy Way)</h4>
          <div className="space-y-1.5 text-xs text-gray-600">
            <p>1. Go to Google and type your niche topic</p>
            <p>2. Look at the <strong>"People Also Ask"</strong> section—these are real search queries</p>
            <p>3. Check <strong>Google Autocomplete</strong> suggestions at the bottom</p>
            <p>4. Use <strong>Ubersuggest</strong> (free) to check search volume and competition</p>
            <p>5. Target keywords with {"<"}1,000 monthly searches and low difficulty</p>
          </div>
        </div>

        <CalloutBox type="tip" title="Keyword Sweet Spot">
          <p>Look for "buyer intent" keywords: "best [product] for [audience]," "[product] review 2025," "[product A] vs [product B]." These people are ready to buy—they just need your recommendation.</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
