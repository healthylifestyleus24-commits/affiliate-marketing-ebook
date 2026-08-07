import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  pageNumber: number;
  showFooter?: boolean;
}

export default function PageLayout({ children, pageNumber, showFooter = true }: PageLayoutProps) {
  return (
    <div className="page-container mx-auto my-8 p-10 relative" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {children}
      {showFooter && (
        <>
          <div className="page-footer-left">Zero to $100: Affiliate Marketing</div>
          <div className="page-number">{pageNumber}</div>
        </>
      )}
    </div>
  );
}
