import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import MarketplaceIllustration from '../illustrations/MarketplaceIllustration';

export default function Chapter4Page1() {
  return (
    <PageLayout pageNumber={10}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-1">Chapter 04</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Finding Affiliate Programs</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Now that you've chosen your niche, it's time to find products to promote. There are hundreds of affiliate programs out there, but not all are created equal. Here are the best platforms to start with—and how to get accepted.
        </p>

        <h3 className="text-base font-bold text-gray-800 mb-3">Top Affiliate Networks & Programs</h3>

        <div className="space-y-2 mb-5">
          {[
            { name: 'Amazon Associates', type: 'Physical Products', commission: '1-10%', cookie: '24 hours', pros: 'Massive product catalog, trusted brand', best: 'Product review sites', color: '#f97316' },
            { name: 'ClickBank', type: 'Digital Products', commission: '30-75%', cookie: '60 days', pros: 'High commissions, instant approval for many', best: 'Health, self-help, make money online', color: '#10b981' },
            { name: 'ShareASale', type: 'Mixed', commission: '5-50%', cookie: '30 days', pros: '5,000+ merchants, reliable tracking', best: 'Fashion, home, business tools', color: '#2563eb' },
            { name: 'Impact', type: 'Brands & SaaS', commission: '10-30%', cookie: '30-90 days', pros: 'Major brands (Shopify, Canva, Uber)', best: 'Tech, business, travel', color: '#7c3aed' },
            { name: 'CJ Affiliate', type: 'Enterprise', commission: 'Varies', cookie: '30 days', pros: 'Fortune 500 brands, advanced reporting', best: 'All niches, especially retail', color: '#06b6d4' },
            { name: 'PartnerStack', type: 'SaaS', commission: '20-40% recurring', cookie: '90 days', pros: 'Recurring commissions, B2B SaaS focus', best: 'Software tools, business apps', color: '#8b5cf6' },
            { name: 'Digistore24', type: 'Digital Products', commission: '30-70%', cookie: '180 days', pros: 'European market, high commissions', best: 'Health, fitness, business', color: '#ec4899' },
          ].map((program) => (
            <div key={program.name} className="flex items-start gap-3 p-2.5 rounded-lg bg-gray-50/80 border border-gray-100">
              <div className="flex-shrink-0 w-2 h-full rounded-full mt-1" style={{ background: program.color, minHeight: '40px' }} />
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-bold text-gray-800">{program.name}</h4>
                  <span className="text-xs text-green-600 font-semibold">{program.commission}</span>
                </div>
                <p className="text-xs text-gray-500">{program.pros}. <span className="text-gray-400">Cookie: {program.cookie}</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <MarketplaceIllustration />
        </div>

        <CalloutBox type="tip" title="Quick Start Recommendation">
          <p>Sign up for <strong>Amazon Associates</strong> (easy approval, great for beginners) and <strong>one niche-specific program</strong> (higher commissions). This gives you the best of both worlds while you're learning.</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
