import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import IncomeFlowIllustration from '../illustrations/IncomeFlowIllustration';

export default function Chapter2Page1() {
  return (
    <PageLayout pageNumber={6}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-500 font-semibold mb-1">Chapter 02</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">How Affiliate Marketing Really Makes Money</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Understanding the money mechanics is crucial. Not all affiliate programs pay the same way—and knowing the difference can mean choosing between earning $5 once or $50 every month for years. Let's break down the three primary commission models.
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">The Three Commission Models</h3>

        <div className="space-y-3 mb-5">
          <div className="p-4 rounded-xl border-2 border-blue-100 bg-blue-50/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</span>
              <h4 className="text-sm font-bold text-gray-800">CPA (Cost Per Action)</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              You earn a fixed amount every time someone completes an action—a purchase, sign-up, or trial. This is the most common model.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">$5–$200 per action</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">One-time payment</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border-2 border-green-100 bg-green-50/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">2</span>
              <h4 className="text-sm font-bold text-gray-800">Revenue Share</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              You earn a percentage of every sale. Higher-priced products mean bigger commissions. Digital products typically offer the highest percentages.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">10%–75% of sale</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Scales with price</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border-2 border-purple-100 bg-purple-50/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500 flex items-center justify-center text-white text-xs font-bold">3</span>
              <h4 className="text-sm font-bold text-gray-800">Recurring Commissions</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              The holy grail. You earn a commission every month the customer stays subscribed. One referral can pay you for years. SaaS products often use this model.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">$10–$500/month</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Passive income</span>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="my-5 p-3 bg-gray-50 rounded-xl">
          <IncomeFlowIllustration />
        </div>

        <CalloutBox type="tip" title="Pro Strategy">
          <p>Start with CPA offers to get quick wins, then gradually add recurring commission products to build long-term passive income. A mix of both creates a stable affiliate business.</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
