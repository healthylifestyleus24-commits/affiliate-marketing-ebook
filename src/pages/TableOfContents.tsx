import PageLayout from '../components/PageLayout';

const chapters = [
  { num: 1, title: 'What is Affiliate Marketing?', page: 4 },
  { num: 2, title: 'How Affiliate Marketing Really Makes Money', page: 6 },
  { num: 3, title: 'Choosing a Profitable Niche', page: 8 },
  { num: 4, title: 'Finding Affiliate Programs', page: 10 },
  { num: 5, title: 'Building Without a Website', page: 12 },
  { num: 6, title: 'Creating Content That Converts', page: 14 },
  { num: 7, title: 'Getting Your First Visitors', page: 16 },
  { num: 8, title: 'Your 30-Day Action Plan', page: 18 },
  { num: 9, title: 'Mistakes Beginners Make', page: 22 },
  { num: 10, title: 'Scaling Beyond Your First $100', page: 24 },
];

export default function TableOfContents() {
  return (
    <PageLayout pageNumber={3}>
      <div className="pt-16 pb-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-500 font-semibold mb-2">Contents</p>
          <h1 className="text-3xl font-bold text-gray-900">Table of Contents</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full" />
        </div>
        
        {/* Chapter list */}
        <div className="space-y-0">
          {chapters.map((ch, i) => (
            <div key={ch.num} className={`flex items-center py-4 group ${i < chapters.length - 1 ? 'border-b border-gray-100' : ''}`}>
              {/* Chapter number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4" style={{ background: `linear-gradient(135deg, ${['#2563eb', '#7c3aed', '#06b6d4', '#f97316', '#10b981', '#ec4899', '#ef4444', '#8b5cf6', '#f59e0b', '#14b8a6'][i]}15, ${['#2563eb', '#7c3aed', '#06b6d4', '#f97316', '#10b981', '#ec4899', '#ef4444', '#8b5cf6', '#f59e0b', '#14b8a6'][i]}08)` }}>
                <span className="text-sm font-bold" style={{ color: ['#2563eb', '#7c3aed', '#06b6d4', '#f97316', '#10b981', '#ec4899', '#ef4444', '#8b5cf6', '#f59e0b', '#14b8a6'][i] }}>
                  {String(ch.num).padStart(2, '0')}
                </span>
              </div>
              
              {/* Title */}
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-gray-800">{ch.title}</h3>
              </div>
              
              {/* Dots */}
              <div className="flex-shrink-0 mx-4 border-b-2 border-dotted border-gray-200 flex-grow max-w-32" />
              
              {/* Page number */}
              <div className="flex-shrink-0 text-sm font-semibold text-gray-400">{ch.page}</div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gray-50">
            <span className="text-sm text-gray-400">📖</span>
            <span className="text-xs text-gray-500 font-medium">10 Chapters • 28 Pages • Actionable Strategies</span>
            <span className="text-sm text-gray-400">📖</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
