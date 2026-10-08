import React from 'react';

interface IndianMotifProps {
  className?: string;
  variant?: 'divider' | 'corner' | 'mandala-circle' | 'flourish';
}

export const IndianMotif: React.FC<IndianMotifProps> = ({ className = '', variant = 'divider' }) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 opacity-80 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C9A24A]"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C9A24A]">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.8" />
          <circle cx="12" cy="12" r="2.5" fill="#24150F" />
        </svg>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C9A24A]"></div>
      </div>
    );
  }

  if (variant === 'flourish') {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <span className="text-[#C9A24A] text-sm">✦</span>
        <div className="h-[1px] w-8 bg-[#C9A24A]/40"></div>
        <span className="text-[#C9A24A] text-xs font-serif italic tracking-widest">EST. MADURAI</span>
        <div className="h-[1px] w-8 bg-[#C9A24A]/40"></div>
        <span className="text-[#C9A24A] text-sm">✦</span>
      </div>
    );
  }

  if (variant === 'mandala-circle') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`text-[#C9A24A] opacity-20 pointer-events-none select-none ${className}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="25" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="15" />
        <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeOpacity="0.5" />
        <path d="M50 20 Q65 35 50 50 Q35 35 50 20 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M50 50 Q65 65 50 80 Q35 65 50 50 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 50 Q35 65 50 50 Q35 35 20 50 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M50 50 Q65 35 80 50 Q65 65 50 50 Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    );
  }

  return null;
};
