import { useState, useRef, useEffect } from 'react';
import CoverPage from './pages/CoverPage';
import CopyrightPage from './pages/CopyrightPage';
import TableOfContents from './pages/TableOfContents';
import Chapter1Page1 from './pages/Chapter1Page1';
import Chapter1Page2 from './pages/Chapter1Page2';
import Chapter2Page1 from './pages/Chapter2Page1';
import Chapter2Page2 from './pages/Chapter2Page2';
import Chapter3Page1 from './pages/Chapter3Page1';
import Chapter3Page2 from './pages/Chapter3Page2';
import Chapter4Page1 from './pages/Chapter4Page1';
import Chapter4Page2 from './pages/Chapter4Page2';
import Chapter5Page1 from './pages/Chapter5Page1';
import Chapter5Page2 from './pages/Chapter5Page2';
import Chapter6Page1 from './pages/Chapter6Page1';
import Chapter6Page2 from './pages/Chapter6Page2';
import Chapter7Page1 from './pages/Chapter7Page1';
import Chapter7Page2 from './pages/Chapter7Page2';
import Chapter8Page1 from './pages/Chapter8Page1';
import Chapter8Page2 from './pages/Chapter8Page2';
import Chapter8Page3 from './pages/Chapter8Page3';
import Chapter8Page4 from './pages/Chapter8Page4';
import Chapter9Page1 from './pages/Chapter9Page1';
import Chapter9Page2 from './pages/Chapter9Page2';
import Chapter10Page1 from './pages/Chapter10Page1';
import Chapter10Page2 from './pages/Chapter10Page2';
import Chapter10Page3 from './pages/Chapter10Page3';
import BonusPage from './pages/BonusPage';
import FinalPage from './pages/FinalPage';

const pages = [
  { component: CoverPage, label: 'Cover' },
  { component: CopyrightPage, label: 'Copyright' },
  { component: TableOfContents, label: 'Contents' },
  { component: Chapter1Page1, label: 'Ch 1 - Part 1' },
  { component: Chapter1Page2, label: 'Ch 1 - Part 2' },
  { component: Chapter2Page1, label: 'Ch 2 - Part 1' },
  { component: Chapter2Page2, label: 'Ch 2 - Part 2' },
  { component: Chapter3Page1, label: 'Ch 3 - Part 1' },
  { component: Chapter3Page2, label: 'Ch 3 - Part 2' },
  { component: Chapter4Page1, label: 'Ch 4 - Part 1' },
  { component: Chapter4Page2, label: 'Ch 4 - Part 2' },
  { component: Chapter5Page1, label: 'Ch 5 - Part 1' },
  { component: Chapter5Page2, label: 'Ch 5 - Part 2' },
  { component: Chapter6Page1, label: 'Ch 6 - Part 1' },
  { component: Chapter6Page2, label: 'Ch 6 - Part 2' },
  { component: Chapter7Page1, label: 'Ch 7 - Part 1' },
  { component: Chapter7Page2, label: 'Ch 7 - Part 2' },
  { component: Chapter8Page1, label: 'Ch 8 - Part 1' },
  { component: Chapter8Page2, label: 'Ch 8 - Part 2' },
  { component: Chapter8Page3, label: 'Ch 8 - Part 3' },
  { component: Chapter8Page4, label: 'Ch 8 - Part 4' },
  { component: Chapter9Page1, label: 'Ch 9 - Part 1' },
  { component: Chapter9Page2, label: 'Ch 9 - Part 2' },
  { component: Chapter10Page1, label: 'Ch 10 - Part 1' },
  { component: Chapter10Page2, label: 'Ch 10 - Part 2' },
  { component: Chapter10Page3, label: 'Ch 10 - Part 3' },
  { component: BonusPage, label: 'Bonus' },
  { component: FinalPage, label: 'Final Page' },
];

type ViewMode = 'single' | 'all';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [showNav, setShowNav] = useState(false);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalPages = pages.length;

  const goToPage = (index: number) => {
    if (viewMode === 'all') {
      pageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentPage(index);
    setShowNav(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'single') {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nextPage();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          prevPage();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, viewMode]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Top navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-50 no-print">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl" style={{ background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            {/* Book title */}
            <div className="flex items-center gap-2">
              <span className="text-lg">📘</span>
              <span className="text-white/70 text-sm font-medium hidden sm:block">Zero to $100</span>
            </div>

            {/* Page controls */}
            <div className="flex items-center gap-2">
              {viewMode === 'single' && (
                <>
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  
                  <span className="text-white/60 text-xs font-mono px-2">
                    {currentPage + 1} / {totalPages}
                  </span>
                  
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}
            </div>

            {/* View controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNav(!showNav)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                title="Table of Contents"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>

              <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-2.5 py-1 text-xs font-medium transition-all ${viewMode === 'single' ? 'bg-blue-500 text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  Page
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-2.5 py-1 text-xs font-medium transition-all ${viewMode === 'all' ? 'bg-blue-500 text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  Scroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation sidebar */}
      {showNav && (
        <div className="fixed inset-0 z-40 no-print" onClick={() => setShowNav(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 bottom-0 w-72 overflow-y-auto py-16 px-4"
            style={{ background: 'rgba(15, 23, 42, 0.95)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white/80 text-sm font-bold mb-4 px-2">Pages</h3>
            <div className="space-y-0.5">
              {pages.map((page, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                    currentPage === i
                      ? 'bg-blue-500/20 text-blue-400 font-medium'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  <span className="text-white/30 mr-2">{String(i + 1).padStart(2, '0')}</span>
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="pt-16 pb-24">
        {viewMode === 'single' ? (
          <div className="animate-fadeIn" key={currentPage}>
            <CurrentPageComponent />
          </div>
        ) : (
          <div className="space-y-4">
            {pages.map((page, i) => {
              const PageComponent = page.component;
              return (
                <div
                  key={i}
                  ref={(el) => { pageRefs.current[i] = el; }}
                >
                  <PageComponent />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom navigation for single page mode */}
      {viewMode === 'single' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 no-print">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl" style={{ background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Previous
              </button>

              {/* Progress bar */}
              <div className="flex-grow mx-4 max-w-xs">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentPage + 1) / totalPages) * 100}%`,
                      background: 'linear-gradient(90deg, #2563eb, #7c3aed, #10b981)',
                    }}
                  />
                </div>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs font-medium"
              >
                Next
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
