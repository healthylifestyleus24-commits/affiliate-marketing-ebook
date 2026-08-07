import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import ActionPlanIllustration from '../illustrations/ActionPlanIllustration';

export default function Chapter8Page1() {
  return (
    <PageLayout pageNumber={18}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-500 font-semibold mb-1">Chapter 08</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your 30-Day Action Plan</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          This is your complete daily roadmap from zero to your first $100. Follow each day's tasks exactly. Don't skip ahead, don't overthink—just execute. Consistency beats perfection every single time.
        </p>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <ActionPlanIllustration />
        </div>

        <CalloutBox type="info" title="Before You Start">
          <p>Block 1-2 hours daily for this plan. Early morning or late evening works best. Treat this like a part-time job. Your $100 is earned through daily action, not overnight luck.</p>
        </CalloutBox>

        <h3 className="text-lg font-bold text-gray-800 mb-3 mt-5">
          <span className="text-blue-500">Week 1:</span> Foundation (Days 1-7)
        </h3>

        <div className="space-y-2 mb-4">
          {[
            { day: 1, title: 'Choose Your Niche', tasks: ['Complete the Niche Worksheet from Chapter 3', 'Use Google Trends to validate demand', 'Brainstorm 30 content ideas', 'Write down your target audience (who are they?)'] },
            { day: 2, title: 'Research Affiliate Programs', tasks: ['Sign up for Amazon Associates', 'Join 1-2 niche-specific affiliate programs', 'Save your affiliate links in a spreadsheet', 'Note down commission rates and cookie durations'] },
            { day: 3, title: 'Set Up Your Platforms', tasks: ['Create a Pinterest Business account', 'Set up a YouTube channel (even for Shorts)', 'Create a Canva account (free)', 'Choose 1 writing platform (Medium or Quora)'] },
            { day: 4, title: 'Study Top Performers', tasks: ['Find 5 successful affiliates in your niche', 'Analyze their top-performing content', 'Note their content style, posting frequency, and formats', 'Save inspiring examples for reference'] },
            { day: 5, title: 'Create Your First Content', tasks: ['Write your first product review (500-800 words)', 'Design 3 Pinterest pins using Canva templates', 'Draft your first social media post about your niche', 'Include affiliate links naturally'] },
            { day: 6, title: 'Publish & Distribute', tasks: ['Publish your review on Medium or your chosen platform', 'Post your pins on Pinterest with keyword-rich descriptions', 'Share a valuable tip on social media', 'Join 2-3 Facebook groups in your niche'] },
            { day: 7, title: 'Review & Plan Ahead', tasks: ['Review what you\'ve done so far', 'Check initial analytics (any impressions or clicks?)', 'Plan content for Week 2 (7 more topic ideas)', 'Celebrate completing Week 1! 🎉'] },
          ].map((day) => (
            <div key={day.day} className="flex gap-3 p-2.5 rounded-lg bg-blue-50/30 border border-blue-100/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
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
      </div>
    </PageLayout>
  );
}
