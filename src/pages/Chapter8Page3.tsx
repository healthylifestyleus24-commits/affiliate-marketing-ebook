import PageLayout from '../components/PageLayout';

export default function Chapter8Page3() {
  return (
    <PageLayout pageNumber={20}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-500 font-semibold mb-4">Chapter 08 — Week 3</p>

        <h3 className="text-lg font-bold text-gray-800 mb-3">
          <span className="text-cyan-500">Week 3:</span> Traffic & Optimization (Days 15-21)
        </h3>

        <div className="space-y-2 mb-5">
          {[
            { day: 15, title: 'SEO Optimization', tasks: ['Research 5 low-competition keywords for your niche', 'Optimize your existing content with these keywords', 'Add keywords to Pinterest board titles and descriptions', 'Update all content titles for better search visibility'] },
            { day: 16, title: 'Double Down on What Works', tasks: ['Look at your analytics—which content got the most views?', 'Create 2 more pieces of content similar to your top performer', 'Reformat it for a different platform (article → video, etc.)', 'Create new Pinterest pins for all existing content'] },
            { day: 17, title: 'Quora & Community Deep Dive', tasks: ['Answer 10 niche-related questions on Quora', 'Include helpful product mentions where relevant', 'Participate actively in 3 Facebook groups', 'Start building genuine relationships with other creators'] },
            { day: 18, title: 'Create a Tutorial', tasks: ['Write a "How to [Achieve Result] with [Product]" guide', 'Make it genuinely helpful—this builds massive trust', 'Include step-by-step screenshots or instructions', 'Share on all your platforms'] },
            { day: 19, title: 'Email Your List', tasks: ['Send your first newsletter with a helpful tip', 'Include a natural product recommendation', 'Ask subscribers what they need help with', 'Share your newsletter link on social media for more sign-ups'] },
            { day: 20, title: 'Content Repurposing Day', tasks: ['Turn your best article into a YouTube Short script', 'Create an Instagram carousel from your top performing post', 'Design 5 new Pinterest pins with different designs for the same content', 'Cross-post content to Threads'] },
            { day: 21, title: 'Week 3 Analytics Deep Dive', tasks: ['Review all platform analytics in detail', 'Check affiliate dashboard for clicks and conversions', 'Identify your top traffic source', 'Calculate your click-through rate on affiliate links'] },
          ].map((day) => (
            <div key={day.day} className="flex gap-3 p-2.5 rounded-lg bg-cyan-50/30 border border-cyan-100/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-xs font-bold leading-none">Day</p>
                  <p className="text-white text-sm font-black leading-none">{day.day}</p>
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

        {/* Milestone check */}
        <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
          <h4 className="text-sm font-bold text-gray-800 mb-2">🎯 Week 3 Milestones Check</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              { metric: 'Content Published', target: '5-7 pieces', icon: '📝' },
              { metric: 'Pinterest Pins', target: '25+ pins', icon: '📌' },
              { metric: 'Affiliate Clicks', target: '50-100+', icon: '🖱️' },
              { metric: 'Email Subscribers', target: '10-50', icon: '✉️' },
            ].map((m) => (
              <div key={m.metric} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                <span className="text-sm">{m.icon}</span>
                <div>
                  <p className="text-xs font-bold text-gray-700">{m.metric}</p>
                  <p className="text-xs text-gray-400">Target: {m.target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
