import CoverIllustration from '../illustrations/CoverIllustration';

export default function CoverPage() {
  return (
    <div className="page-container mx-auto relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #1e293b 60%, #0f172a 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-16 left-12 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />
        <div className="absolute top-48 right-8 w-48 h-48 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute bottom-32 left-1/3 w-56 h-56 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
        <div className="absolute bottom-16 right-16 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-24 right-24 w-20 h-20 border border-white/10 rounded-lg rotate-45" />
        <div className="absolute bottom-48 left-16 w-12 h-12 border border-cyan-400/20 rounded-full" />
        <div className="absolute top-64 left-48 w-6 h-6 bg-blue-500/20 rounded-full" />
        <div className="absolute bottom-72 right-40 w-8 h-8 bg-purple-500/15 rounded" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-16" style={{ minHeight: '1100px' }}>
        {/* Top badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}>
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Beginner's Complete Guide</span>
            <span className="text-yellow-400 text-sm">⭐</span>
          </div>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-black text-white mb-2 tracking-tight leading-none">
            Zero to <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #10b981, #06b6d4, #2563eb)' }}>$100</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="text-center mb-10 max-w-lg">
          <h2 className="text-xl font-semibold text-white/90 leading-relaxed mb-3">
            Your First 30 Days in<br />
            <span className="bg-clip-text text-transparent text-2xl" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>Affiliate Marketing</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
            <p className="text-sm text-cyan-300/80 font-medium tracking-wide">( No Audience Needed )</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </div>
        
        {/* Illustration */}
        <div className="w-full max-w-md mb-10 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <CoverIllustration />
        </div>
        
        {/* Glass card features */}
        <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-lg">
          {[
            { icon: '🚀', text: 'Step-by-Step' },
            { icon: '💰', text: '10 Chapters' },
            { icon: '📋', text: '30-Day Plan' },
          ].map((item, i) => (
            <div key={i} className="text-center py-3 px-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
              <span className="text-xl block mb-1">{item.icon}</span>
              <span className="text-white/70 text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Author */}
        <div className="text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-4" />
          <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Written by</p>
          <p className="text-white text-lg font-semibold tracking-wide">V Abhishek</p>
        </div>
      </div>
    </div>
  );
}
