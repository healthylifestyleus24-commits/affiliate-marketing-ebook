import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';

export default function Chapter8Page4() {
  return (
    <PageLayout pageNumber={21}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-500 font-semibold mb-4">Chapter 08 — Week 4</p>

        <h3 className="text-lg font-bold text-gray-800 mb-3">
          <span className="text-green-500">Week 4:</span> Scale & Earn (Days 22-30)
        </h3>

        <div className="space-y-2 mb-5">
          {[
            { day: '22', title: 'Optimize Converting Content', tasks: ['Identify content with the highest click-through rates', 'Improve CTAs on your best-performing content', 'Add more affiliate links where natural', 'Update content with fresh information'] },
            { day: '23', title: 'Create High-Intent Content', tasks: ['Write a "how I use [product] daily" personal story', 'Create a comparison of the top 3 products in your niche', 'Target keywords with clear buying intent', 'Focus on helping people make a decision'] },
            { day: '24', title: 'Collaboration & Outreach', tasks: ['Reach out to 3 creators in your niche for cross-promotion', 'Guest post on another Medium publication', 'Comment meaningfully on popular posts in your niche', 'Share other creators\' content to build relationships'] },
            { day: '25-26', title: 'Content Batch Day (2 Days)', tasks: ['Create 3 new pieces of written content', 'Design 15 Pinterest pins', 'Record 2 YouTube Shorts', 'Schedule all content for the next 2 weeks'] },
            { day: '27', title: 'Email Nurture Sequence', tasks: ['Send a value-packed email to your list', 'Share your best-performing content with subscribers', 'Include a compelling product recommendation', 'Encourage subscribers to reply (builds engagement)'] },
            { day: '28', title: 'Advanced Pinterest Strategy', tasks: ['Analyze which pins drive the most clicks', 'Create variations of your top-performing pin designs', 'Apply to Pinterest Idea Pin features if available', 'Optimize all board descriptions with keywords'] },
            { day: '29', title: 'Full Analytics Review', tasks: ['Compile all data: traffic, clicks, conversions, commissions', 'Calculate your earnings per piece of content', 'Identify your highest-ROI activities', 'Document what worked and what didn\'t'] },
            { day: '30', title: 'Celebrate & Plan Forward 🎉', tasks: ['Celebrate your first 30 days!', 'Review your total earnings (even $1 is a win!)', 'Set your 90-day goal based on what you\'ve learned', 'Create a content calendar for the next 30 days'] },
          ].map((day) => (
            <div key={day.day} className="flex gap-3 p-2.5 rounded-lg bg-green-50/30 border border-green-100/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-xs font-bold leading-none">Day</p>
                  <p className="text-white text-xs font-black leading-none">{day.day}</p>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xs font-bold text-gray-800 mb-1">{day.title}</h4>
                <ul className="space-y-0.5">
                  {day.tasks.map((task, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-1">
                      <span className="text-gray-300 mt-0.5">☐</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <CalloutBox type="tip" title="What If You Haven't Hit $100 Yet?">
          <p>That's completely normal! Most affiliate marketers don't hit $100 in their first 30 days—but the foundation you've built is worth far more than $100. You now have content that will continue working for months. Many affiliates see their biggest growth in months 2-3 when their Pinterest pins and SEO content start ranking. Keep going!</p>
        </CalloutBox>

        <div className="mt-4 p-4 rounded-xl bg-violet-50/50 border border-violet-100">
          <h4 className="text-sm font-bold text-gray-800 mb-2">📋 Chapter 8 Summary</h4>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { week: 'W1', focus: 'Foundation', icon: '🏗️' },
              { week: 'W2', focus: 'Content', icon: '📝' },
              { week: 'W3', focus: 'Traffic', icon: '🚦' },
              { week: 'W4', focus: 'Scale', icon: '📈' },
            ].map((w) => (
              <div key={w.week} className="p-2 bg-white rounded-lg border border-gray-100">
                <p className="text-sm mb-0.5">{w.icon}</p>
                <p className="text-xs font-bold text-gray-700">{w.week}</p>
                <p className="text-xs text-gray-400">{w.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
