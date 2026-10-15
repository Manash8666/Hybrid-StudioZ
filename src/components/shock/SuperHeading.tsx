'use client';

// ==============================================================================
// HYBRID STUDIOZ — SHOCK SUPER HEADING
// Monumental offset typography with gradient mark and reveal underline
// ==============================================================================

import React from 'react';

interface SuperHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  size?: 'md' | 'lg' | 'xl';
  light?: boolean;
}

export default function SuperHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
  size = 'lg',
  light = false,
}: SuperHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const sizeClass = {
    md: 'text-3xl sm:text-4xl md:text-5xl',
    lg: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    xl: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl',
  }[size];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#ff5e1a]/30 bg-[#ff5e1a]/10 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5e1a] animate-ping" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#ff5e1a]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`font-display font-black uppercase tracking-tight leading-[0.92] ${sizeClass} ${
          light ? 'text-[#0b1020]' : 'text-white'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="relative inline-block">
            <mark className="bg-transparent bg-gradient-to-r from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] bg-clip-text text-transparent px-1">
              {highlight}
            </mark>
            <span
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#1fb6e8] to-[#e9449a] rounded-full opacity-80"
              aria-hidden="true"
            />
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl font-sans text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#0b1020]/70' : 'text-white/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
