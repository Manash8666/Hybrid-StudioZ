'use client';

// ==============================================================================
// HYBRID STUDIOZ — SHOCK DOUBLE-EDGE CARD
// Signature dual-border obsidian card with subtle hairline inset and hover glow
// ==============================================================================

import React from 'react';

interface DoubleEdgeCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  accentColor?: string;
  onClick?: () => void;
}

export default function DoubleEdgeCard({
  children,
  className = '',
  glowOnHover = true,
  accentColor = '#6f4bff',
  onClick,
}: DoubleEdgeCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl bg-[#0b1020]/90 p-[1px] transition-all duration-500 ${
        glowOnHover ? 'hover:-translate-y-1.5' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Outer dual-border layer with hover glow */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: glowOnHover
            ? `0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 40px -15px ${accentColor}18`
            : undefined,
        }}
      />

      {/* Inset hairline frame */}
      <div className="relative h-full w-full rounded-2xl bg-[#070913]/95 p-6 sm:p-8 backdrop-blur-xl border border-white/[0.06] transition-colors duration-500 group-hover:border-white/[0.16] overflow-hidden">
        {/* Subtle radial ambient spotlight inside card on hover */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
          style={{ backgroundColor: accentColor }}
        />

        {children}
      </div>
    </div>
  );
}
