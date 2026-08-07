import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import GrowthStaircaseIllustration from '../illustrations/GrowthStaircaseIllustration';

export default function Chapter10Page1() {
  return (
    <PageLayout pageNumber={24}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-1">Chapter 10</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Scaling Beyond Your First $100</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Congratulations—you've learned the fundamentals and built your foundation. Now let's talk about what comes next. Your first $100 is proof that the system works. Now it's time to turn that $100 into $1,000, then $5,000, and eventually a full-time income.
        </p>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <GrowthStaircaseIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">The 6 Scaling Strategies</h3>

        <div className="space-y-3 mb-4">
          <div className="p-3 rounded-xl bg-blue-50/30 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</span>
              <h4 className="text-sm font-bold text-gray-800">Email Marketing at Scale</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Your email list is your most valuable asset. Every subscriber is worth $1-3/month on average. At 1,000 subscribers, that's $1,000-$3,000/month in potential revenue.
            </p>
            <div className="bg-white p-2 rounded-lg border border-gray-100">
              <p className="text-xs text-gray-500 font-medium mb-1">Scaling Email Strategy:</p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>• Create a free lead magnet that solves a real problem</li>
                <li>• Build an automated welcome sequence (5-7 emails)</li>
                <li>• Send weekly newsletters with value + recommendations</li>
                <li>• Segment your list by interest for targeted promotions</li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-50/30 border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500 flex items-center justify-center text-white text-xs font-bold">2</span>
              <h4 className="text-sm font-bold text-gray-800">Automation & Systems</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Stop trading time for money. Set up systems that work while you sleep:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { tool: 'Email sequences', use: 'Auto-nurture new subscribers' },
                { tool: 'Pinterest schedulers', use: 'Auto-pin your content daily' },
                { tool: 'Content templates', use: 'Create content 3x faster' },
                { tool: 'Link management', use: 'Track & optimize all links' },
              ].map((item) => (
                <div key={item.tool} className="p-2 bg-white rounded border border-gray-100">
                  <p className="text-xs font-bold text-gray-700">{item.tool}</p>
                  <p className="text-xs text-gray-400">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50/30 border border-cyan-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center text-white text-xs font-bold">3</span>
              <h4 className="text-sm font-bold text-gray-800">AI Tools for 10x Productivity</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              AI is the biggest force multiplier for affiliate marketers right now. Use it wisely—not to replace your creativity, but to amplify it.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">ChatGPT for outlines & ideas</span>
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">Canva AI for pin designs</span>
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">AI video for YouTube Shorts</span>
              <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">Jasper for copywriting</span>
            </div>
          </div>
        </div>

        <CalloutBox type="warning" title="AI Warning">
          <p>Never publish AI-generated content without editing and adding your personal experience. Google penalizes low-quality AI content. Use AI as a starting point, then add your unique voice, examples, and genuine expertise.</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
