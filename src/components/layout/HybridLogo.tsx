'use client';

// ==============================================================================
// HYBRID STUDIOZ — OFFICIAL BRAND LOGO LOCKUP COMPONENT
// Supports official HS image mark with auto-invert on light tones,
// as well as SVG vector reconstruction for intro animations and favicon.
// ==============================================================================

import React from 'react';
import Image from 'next/image';

interface HybridLogoProps {
  tone?: 'dark' | 'light';
  variant?: 'image' | 'svg' | 'mark-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function HybridLogo({
  tone = 'dark',
  variant = 'image',
  className = '',
  size = 'md',
}: HybridLogoProps) {
  const heightClass = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  // 1. Official HS Image Lockup (Auto-adapts to light/dark backgrounds)
  if (variant === 'image') {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <Image
          src="/assets/brand/hs-logo.png"
          alt="Hybrid Studioz"
          width={180}
          height={48}
          priority
          className={`${heightClass} w-auto object-contain transition-all duration-300 ${
            tone === 'light' ? 'invert brightness-0' : ''
          }`}
        />
      </div>
    );
  }

  // 2. Crisp Vector SVG Reconstruction (For Favicon, Intro Curtain & Scene 09 Zoom)
  const primaryFill = tone === 'light' ? '#0b1020' : '#ffffff';

  return (
    <svg
      viewBox={variant === 'mark-only' ? '0 0 110 120' : '0 0 420 120'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heightClass} w-auto ${className}`}
      aria-label="Hybrid Studioz"
    >
      <defs>
        {/* Top-Left Metallic Wing Gradient */}
        <linearGradient id="hsWingTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={tone === 'light' ? '#949cb0' : '#f4f6f9'} />
          <stop offset="100%" stopColor={tone === 'light' ? '#475569' : '#b8bdc7'} />
        </linearGradient>
        {/* Bottom-Right Metallic Wing Gradient */}
        <linearGradient id="hsWingBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={tone === 'light' ? '#334155' : '#686e7a'} />
          <stop offset="100%" stopColor={tone === 'light' ? '#94a3b8' : '#dce0e8'} />
        </linearGradient>
      </defs>

      {/* Top-Left Crescent Wing */}
      <path
        d="M46 6C24 14 8 30 4 46C12 56 20 62 28 66C32 44 40 24 46 6Z"
        fill="url(#hsWingTop)"
      />

      {/* Bottom-Right Crescent Wing */}
      <path
        d="M58 68C62 86 58 102 52 116C72 108 86 92 90 78C82 66 70 62 58 68Z"
        fill="url(#hsWingBottom)"
      />

      {/* Core Interlocking White 'H/S' Ribbon */}
      <path
        id="hybrid-s-curve"
        d="M78 10C48 16 28 38 28 58C28 74 44 76 62 74C78 72 90 80 86 98C98 84 102 62 86 50C72 40 52 44 48 32C44 22 58 14 78 10Z"
        fill={primaryFill}
      />

      {variant !== 'mark-only' && (
        <g fill={primaryFill} className="font-display font-black tracking-tight">
          <text x="118" y="56" fontSize="42" fontWeight="900" letterSpacing="0.02em">
            HYBRID
          </text>
          <text x="118" y="98" fontSize="42" fontWeight="900" letterSpacing="0.01em">
            STUDIOZ
          </text>
        </g>
      )}
    </svg>
  );
}

export default HybridLogo;
