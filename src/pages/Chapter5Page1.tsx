import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import TrafficSourcesIllustration from '../illustrations/TrafficSourcesIllustration';

export default function Chapter5Page1() {
  return (
    <PageLayout pageNumber={12}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-green-500 font-semibold mb-1">Chapter 05</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Building Without a Website</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Here's the truth most "gurus" won't tell you: you do NOT need a website to start earning affiliate commissions. In fact, some of the most successful affiliate marketers began on free platforms. Here's your complete guide to building without a website.
        </p>

        <div className="my-5 p-3 bg-gray-50 rounded-xl">
          <TrafficSourcesIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">Platform Breakdown: Where to Start</h3>

        <div className="space-y-2.5 mb-4">
          <div className="p-3 rounded-xl border-l-4 border-red-400 bg-red-50/30">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-bold text-gray-800">📌 Pinterest</h4>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">★ BEST FOR BEGINNERS</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Pinterest is a visual search engine, not just a social platform. Pins can drive traffic for months or even years. Create beautiful pins linking to your content or directly to affiliate links (where allowed).
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Long-lasting content</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">SEO-friendly</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">No followers needed</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-red-500 bg-red-50/20">
            <h4 className="text-sm font-bold text-gray-800 mb-1">▶️ YouTube Shorts</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Short-form video is exploding. Create 60-second product reviews, tips, or comparisons. Place affiliate links in your description. You don't need to show your face—use screen recordings, slideshows, or text overlays.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Viral potential</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">Links in description</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600">No face needed</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border-l-4 border-pink-400 bg-pink-50/20">
            <h4 className="text-sm font-bold text-gray-800 mb-1">📸 Instagram</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Create carousel posts with product tips, Reels with quick reviews, and Stories with swipe-up links. Use Linktree or similar tools to share multiple affiliate links from your bio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl border-l-4 border-blue-500 bg-blue-50/20">
              <h4 className="text-xs font-bold text-gray-800 mb-1">📘 Facebook</h4>
              <p className="text-xs text-gray-500">Join niche groups. Provide value. Share helpful posts with links. Create your own group to build a community.</p>
            </div>
            <div className="p-3 rounded-xl border-l-4 border-gray-800 bg-gray-50">
              <h4 className="text-xs font-bold text-gray-800 mb-1">🎵 TikTok</h4>
              <p className="text-xs text-gray-500">Massive organic reach. Product demos and "things you didn't know you needed" content perform incredibly well.</p>
            </div>
          </div>
        </div>

        <CalloutBox type="tip" title="The #1 Platform to Start With">
          <p>If you can only pick one platform, choose <strong>Pinterest</strong>. It has the longest content lifespan (pins keep driving traffic for 6-12+ months), works like a search engine (people find your content through keywords), and you don't need any existing audience.</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
