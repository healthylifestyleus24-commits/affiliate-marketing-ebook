import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import NicheTreeIllustration from '../illustrations/NicheTreeIllustration';

export default function Chapter3Page1() {
  return (
    <PageLayout pageNumber={8}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 font-semibold mb-1">Chapter 03</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Choosing a Profitable Niche</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Your niche is the specific topic or market you'll focus on. This is the single most important decision in your affiliate marketing journey. A good niche has hungry buyers, decent commissions, and enough content ideas to keep you going for months.
        </p>

        <CalloutBox type="info" title="The Golden Rule of Niche Selection">
          <p>Choose a niche where people are already spending money to solve problems. Don't try to convince people they have a problem—find people actively searching for solutions.</p>
        </CalloutBox>

        {/* Illustration */}
        <div className="my-5 p-3 bg-gray-50 rounded-xl">
          <NicheTreeIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Top 8 Profitable Niches for Beginners</h3>
        
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: '🏥', name: 'Health & Fitness', examples: 'Supplements, workout plans, yoga mats', earning: '$20–$100/sale' },
            { icon: '💰', name: 'Personal Finance', examples: 'Credit cards, budgeting tools, investing', earning: '$50–$200/referral' },
            { icon: '💻', name: 'Software & SaaS', examples: 'Hosting, email tools, project management', earning: '$50–$500+/referral' },
            { icon: '📚', name: 'Education', examples: 'Online courses, language learning, tutoring', earning: '$10–$150/sale' },
            { icon: '🐾', name: 'Pets', examples: 'Pet food, training guides, accessories', earning: '$5–$40/sale' },
            { icon: '🏠', name: 'Home & Garden', examples: 'Smart home, décor, kitchen gadgets', earning: '$5–$50/sale' },
            { icon: '💄', name: 'Beauty & Skincare', examples: 'Makeup, skincare routines, beauty tools', earning: '$10–$60/sale' },
            { icon: '⚡', name: 'Productivity', examples: 'Planners, apps, courses, journals', earning: '$15–$100/sale' },
          ].map((niche) => (
            <div key={niche.name} className="p-3 rounded-lg bg-gray-50/80 border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">{niche.icon}</span>
                <span className="text-xs font-bold text-gray-800">{niche.name}</span>
              </div>
              <p className="text-xs text-gray-500">{niche.examples}</p>
              <p className="text-xs text-green-600 font-medium mt-1">{niche.earning}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">The 3-Question Niche Validation Test</h3>
        <div className="space-y-2 mb-4">
          {[
            { q: 'Are people searching for this?', how: 'Google Trends, YouTube search suggestions, Pinterest search volume' },
            { q: 'Are people spending money here?', how: 'Check Amazon bestsellers, existing affiliate programs, competitor blogs' },
            { q: 'Can I create 30+ pieces of content?', how: 'Brainstorm 30 topic ideas. If you can, the niche has enough depth.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-green-50/50 border border-green-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="text-xs font-bold text-gray-800">{item.q}</p>
                <p className="text-xs text-gray-500">{item.how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
