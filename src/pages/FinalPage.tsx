export default function FinalPage() {
  return (
    <div className="page-container mx-auto relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #1e293b 100%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-16 py-20" style={{ minHeight: '1100px' }}>
        {/* Celebration icon */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: 'rgba(16, 185, 129, 0.15)', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
            🎉
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-black text-white text-center mb-4 leading-tight">
          Congratulations!
        </h1>
        
        <p className="text-lg text-white/70 text-center max-w-md mb-10 leading-relaxed">
          You've just completed <span className="text-cyan-400 font-semibold">Zero to $100</span> and equipped yourself with everything you need to start your affiliate marketing journey.
        </p>

        {/* Divider */}
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        {/* Next steps */}
        <div className="w-full max-w-lg mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-6">Your Next Steps</h2>
          
          <div className="space-y-3">
            {[
              { num: '1', text: 'Choose your niche TODAY. Not tomorrow. Not next week. Today.', icon: '🎯' },
              { num: '2', text: 'Sign up for your first affiliate program within 24 hours.', icon: '🔗' },
              { num: '3', text: 'Create and publish your first piece of content within 48 hours.', icon: '📝' },
              { num: '4', text: 'Follow the 30-Day Action Plan exactly as written.', icon: '📋' },
              { num: '5', text: 'Stay consistent for 90 days. The results WILL come.', icon: '💪' },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(37, 99, 235, 0.2)' }}>
                  {step.icon}
                </div>
                <p className="text-sm text-white/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational closing */}
        <div className="w-full max-w-md text-center mb-10 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white/60 text-sm leading-relaxed italic mb-4">
            "Every expert was once a beginner. Every successful affiliate marketer started with zero followers, zero clicks, and zero commissions. The only difference between them and everyone else? They started, and they didn't stop."
          </p>
          <p className="text-white/40 text-xs">— Your future self, looking back proudly</p>
        </div>

        {/* Divider */}
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Author section */}
        <div className="text-center mb-8">
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-3">With gratitude</p>
          
          {/* Signature */}
          <div className="mb-3">
            <svg viewBox="0 0 200 50" className="w-40 mx-auto">
              <text x="30" y="35" fill="white" fontSize="22" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.8">V Abhishek</text>
              <line x1="30" y1="42" x2="170" y2="42" stroke="white" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
          
          <p className="text-white/50 text-xs">Author, Affiliate Marketing Educator</p>
        </div>

        {/* Thank you */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="text-sm">🙏</span>
            <span className="text-white/60 text-xs font-medium">Thank you for reading. Now go make your first $100!</span>
            <span className="text-sm">🚀</span>
          </div>
        </div>

        {/* Page number */}
        <div className="absolute bottom-6 right-10 text-white/20 text-xs">28</div>
        <div className="absolute bottom-6 left-10 text-white/20 text-xs">Zero to $100: Affiliate Marketing</div>
      </div>
    </div>
  );
}
