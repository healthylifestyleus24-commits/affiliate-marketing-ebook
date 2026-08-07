import { ReactNode } from 'react';

interface CalloutBoxProps {
  type: 'info' | 'tip' | 'warning' | 'quote';
  title?: string;
  children: ReactNode;
}

export default function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const classes = {
    info: 'callout-box',
    tip: 'tip-box',
    warning: 'warning-box',
    quote: 'quote-box',
  };

  const icons = {
    info: '💡',
    tip: '✅',
    warning: '⚠️',
    quote: '💬',
  };

  return (
    <div className={`${classes[type]} my-4`}>
      {title && (
        <p className="font-semibold text-sm mb-1">
          {icons[type]} {title}
        </p>
      )}
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
