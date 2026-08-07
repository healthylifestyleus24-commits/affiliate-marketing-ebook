import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import AffiliateBasicsIllustration from '../illustrations/AffiliateBasicsIllustration';

export default function Chapter1Page1() {
  return (
    <PageLayout pageNumber={4}>
      <div className="pt-8">
        {/* Chapter header */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-500 font-semibold mb-1">Chapter 01</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">What is Affiliate Marketing?</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Imagine recommending your favorite restaurant to a friend—and the restaurant paying you every time your friend eats there. That's affiliate marketing in its simplest form. You recommend a product, someone buys it through your unique link, and you earn a commission. No inventory. No shipping. No customer service.
        </p>

        <CalloutBox type="info" title="Key Insight">
          <p>Affiliate marketing is a $17+ billion industry, and it's still growing. You don't need to create a product, handle shipping, or deal with customer complaints. You just connect the right product with the right person.</p>
        </CalloutBox>

        <h3 className="text-base font-bold text-gray-800 mt-6 mb-3">How It Works in 4 Simple Steps</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { step: '1', title: 'Join a Program', desc: 'Sign up for an affiliate program (free). You get a unique tracking link.', color: '#2563eb' },
            { step: '2', title: 'Share Your Link', desc: 'Share your link through content—blog posts, videos, social media, or emails.', color: '#7c3aed' },
            { step: '3', title: 'Someone Clicks & Buys', desc: 'When someone clicks your link and makes a purchase, the sale is tracked.', color: '#06b6d4' },
            { step: '4', title: 'You Get Paid', desc: 'The company pays you a commission. Could be $5 or $500 per sale!', color: '#10b981' },
          ].map((item) => (
            <div key={item.step} className="p-3 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: item.color }}>{item.step}</span>
                <span className="text-sm font-semibold text-gray-800">{item.title}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="my-5 p-4 bg-gray-50 rounded-xl">
          <AffiliateBasicsIllustration />
          <p className="text-center text-xs text-gray-400 mt-2">How affiliate marketing connects merchants, affiliates, and customers</p>
        </div>

        <h3 className="text-base font-bold text-gray-800 mt-5 mb-3">Real-World Examples</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">●</span>
            <span><strong>Tech reviewer</strong> links to a laptop on Amazon → earns 4-8% commission per sale</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">●</span>
            <span><strong>Fitness blogger</strong> recommends a supplement on ClickBank → earns $30-$50 per sale</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-0.5">●</span>
            <span><strong>Productivity YouTuber</strong> promotes a project management tool → earns $200 per sign-up</span>
          </li>
        </ul>

        <CalloutBox type="quote">
          <p className="text-gray-700">"Affiliate marketing has made businesses millions and ordinary people millionaires."</p>
          <p className="text-xs text-gray-400 mt-1 not-italic">— Larry Kim, Founder of WordStream</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
