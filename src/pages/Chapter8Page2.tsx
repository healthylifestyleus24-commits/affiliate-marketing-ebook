import PageLayout from '../components/PageLayout';

export default function Chapter8Page2() {
  return (
    <PageLayout pageNumber={19}>
      <div className="pt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-500 font-semibold mb-4">Chapter 08 — Week 2</p>

        <h3 className="text-lg font-bold text-gray-800 mb-3">
          <span className="text-purple-500">Week 2:</span> Content Machine (Days 8-14)
        </h3>

        <div className="space-y-2 mb-6">
          {[
            { day: 8, title: 'Write Comparison Post', tasks: ['Create a "[Product A] vs [Product B]" article', 'Research both products thoroughly', 'Include pros, cons, pricing, and your recommendation', 'Add affiliate links for both products'] },
            { day: 9, title: 'Pinterest Power Day', tasks: ['Create 10 new pins for your existing content', 'Research trending keywords in your niche', 'Pin to relevant group boards (if available)', 'Follow and engage with 20 accounts in your niche'] },
            { day: 10, title: 'Create a "Best Of" List', tasks: ['Write "5 Best [Products] for [Audience]"', 'Include affiliate links for each product', 'Design a Pinterest pin for this content', 'Share on social media with a compelling hook'] },
            { day: 11, title: 'Video Content Day', tasks: ['Create a 60-second YouTube Short reviewing a product', 'Use screen recording or product photos with text overlay', 'Add affiliate links in the video description', 'Share the Short on Instagram Reels and TikTok too'] },
            { day: 12, title: 'Community Building', tasks: ['Answer 5 questions on Quora related to your niche', 'Provide genuine value—include product recommendations naturally', 'Comment on 10 posts in your niche Facebook groups', 'Follow the 80/20 rule: 80% value, 20% promotion'] },
            { day: 13, title: 'Email List Setup', tasks: ['Sign up for a free email tool (Mailchimp or Beehiiv)', 'Create a simple lead magnet (checklist or cheat sheet)', 'Set up a landing page for email capture', 'Add your sign-up link to all your bios and content'] },
            { day: 14, title: 'Week 2 Review', tasks: ['Check all analytics: clicks, impressions, sign-ups', 'Identify which content performed best', 'Note which platform drives the most engagement', 'Plan Week 3 with a focus on what\'s working'] },
          ].map((day) => (
            <div key={day.day} className="flex gap-3 p-2.5 rounded-lg bg-purple-50/30 border border-purple-100/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
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

        {/* Progress bar */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-700">Your Progress</span>
            <span className="text-xs font-bold text-purple-500">47% Complete</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: '47%', background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }} />
          </div>
          <p className="text-xs text-gray-400 mt-2">By now you should have: 3+ pieces of content, 10+ Pinterest pins, 1 video, and a growing email list.</p>
        </div>
      </div>
    </PageLayout>
  );
}
