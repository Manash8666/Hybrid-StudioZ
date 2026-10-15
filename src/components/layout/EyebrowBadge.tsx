'use client';

// ==============================================================================
// HYBRID STUDIOZ — SIGNATURE EYEBROW PILL BADGE
// Official pill from hybridstudioz.framer.ai: Solid blue year tag + white label
// ==============================================================================

import React from 'react';

interface EyebrowBadgeProps {
  year?: string;
  label: string;
  className?: string;
}

export default function EyebrowBadge({
  year = '2025',
  label,
  className = '',
}: EyebrowBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 p-1 pr-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md select-none ${className}`}
    >
      <span className="px-3 py-1 rounded-full bg-[#0055ff] text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,85,255,0.4)]">
        {year}
      </span>
      <span className="font-sans text-xs sm:text-sm font-medium text-white/90 tracking-wide">
        {label}
      </span>
    </div>
  );
}
