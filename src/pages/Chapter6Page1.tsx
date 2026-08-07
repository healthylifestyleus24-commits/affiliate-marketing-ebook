import PageLayout from '../components/PageLayout';
import CalloutBox from '../components/CalloutBox';
import ContentWorkflowIllustration from '../illustrations/ContentWorkflowIllustration';

export default function Chapter6Page1() {
  return (
    <PageLayout pageNumber={14}>
      <div className="pt-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold mb-1">Chapter 06</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Creating Content That Converts</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Content is the bridge between your audience and the products you recommend. Great content doesn't feel like a sales pitch—it feels like helpful advice from a trusted friend. Here's exactly how to create content that makes people click and buy.
        </p>

        <div className="my-4 p-3 bg-gray-50 rounded-xl">
          <ContentWorkflowIllustration />
        </div>

        <h3 className="text-base font-bold text-gray-800 mb-3">The HSCV Framework (Hook → Story → Content → Value)</h3>

        <div className="space-y-3 mb-5">
          <div className="p-3 rounded-xl bg-orange-50/50 border border-orange-100">
            <h4 className="text-sm font-bold text-gray-800 mb-1">🪝 1. Hook (First 3 Seconds)</h4>
            <p className="text-xs text-gray-600 mb-2">Your headline or opening line must grab attention immediately. If they don't stop scrolling, nothing else matters.</p>
            <div className="bg-white p-2 rounded-lg">
              <p className="text-xs text-gray-500 font-medium">Winning Hook Formulas:</p>
              <ul className="text-xs text-gray-500 mt-1 space-y-0.5">
                <li>• "I wasted $500 on [category] before finding this one..."</li>
                <li>• "Stop buying [product] until you read this"</li>
                <li>• "The #1 mistake I see people make with [topic]"</li>
                <li>• "[Number] [products] that actually [desirable result]"</li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="text-sm font-bold text-gray-800 mb-1">📖 2. Story (Build Connection)</h4>
            <p className="text-xs text-gray-600 mb-2">Share a relatable experience. People connect with stories, not features. Describe the problem, your frustration, and your search for a solution.</p>
            <p className="text-xs text-gray-500 italic">"I used to spend 3 hours every morning on my skincare routine. It was exhausting. Then I found a system that cut it down to 15 minutes with better results..."</p>
          </div>

          <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
            <h4 className="text-sm font-bold text-gray-800 mb-1">💡 3. Value (Teach Something)</h4>
            <p className="text-xs text-gray-600">Give genuine value. Share tips, insights, or information that helps the reader regardless of whether they buy. This builds trust and positions you as an authority.</p>
          </div>

          <div className="p-3 rounded-xl bg-green-50/50 border border-green-100">
            <h4 className="text-sm font-bold text-gray-800 mb-1">🎯 4. CTA (Call to Action)</h4>
            <p className="text-xs text-gray-600 mb-2">Tell people exactly what to do next. Be specific and create urgency without being pushy.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">✅ "Check the link in my bio"</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">✅ "I'll link it below"</span>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">❌ "BUY NOW!!!"</span>
            </div>
          </div>
        </div>

        <CalloutBox type="tip" title="Trust = Conversions">
          <p>Always be honest about products. Mention 1-2 downsides in every review. Counterintuitively, being honest about negatives dramatically <em>increases</em> trust and conversions. Readers think, "This person is giving me the real picture."</p>
        </CalloutBox>
      </div>
    </PageLayout>
  );
}
