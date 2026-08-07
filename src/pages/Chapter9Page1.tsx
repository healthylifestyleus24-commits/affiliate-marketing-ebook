import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import WarningIllustration from '../illustrations/WarningIllustration';

export default function Chapter9Page1() {
  return (
    <PageLayout pageNumber={22}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-1">Chapter 09</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Mistakes Beginners Make</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          I've seen hundreds of aspiring affiliate marketers start their journey. The ones who fail almost always make the same predictable mistakes. Learn from their experience so you don't have to waste months learning these lessons the hard way.
        </p>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <WarningIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">The 7 Deadly Affiliate Marketing Mistakes</h3>

        <div className="space-y-3">
          <div className="p-3 rounded-xl border-l-4 border-red-400 bg-red-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🔴</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #1: Choosing Too Many Niches</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              "I'll promote fitness, crypto, AND pet products!" This scattered approach means you never build authority in any one area. Your audience gets confused, and you stretch yourself too thin.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Pick ONE niche. Dominate it. You can always expand later after you're earning consistently.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-red-400 bg-red-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🔴</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #2: Giving Up Too Early</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              The #1 reason people fail at affiliate marketing isn't lack of knowledge—it's quitting in week 2 or 3 when they haven't seen results yet. Affiliate marketing has a compounding effect. Your first month's content keeps working for you in months 2, 3, and beyond.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Commit to 90 days minimum. Real results typically show up around weeks 6-12.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-red-400 bg-red-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🔴</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #3: Spamming Links Everywhere</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Posting your affiliate link in every comment, DM, and group is the fastest way to get banned and destroy your reputation. People can smell desperation.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Create valuable content first. Embed links naturally within genuinely helpful posts, reviews, and tutorials.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-orange-400 bg-orange-50/30">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">🟠</span>
              <h4 className="text-sm font-bold text-gray-800">Mistake #4: Ignoring Trust</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Recommending products you've never used just because they pay high commissions will backfire. When people feel duped, they never come back.
            </p>
            <div className="p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 font-medium">✅ Fix: Only promote products you genuinely believe in. Mention pros AND cons. Transparency converts.</p>
            </div>
          </div>
        </div>

        <CalloutBox type="quote">
          <p className="text-gray-700">"The affiliate marketers who build trust first and promote second are the ones who build six-figure businesses. Everyone else just builds a link farm that nobody clicks."</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
