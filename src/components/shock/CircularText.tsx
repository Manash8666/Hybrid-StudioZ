'use client';

// ==============================================================================
// HYBRID STUDIOZ — ROTATING SVG CIRCULAR TEXT BADGE
// Programmatic SVG textPath with continuous rotation physics
// ==============================================================================

import React, { useId } from 'react';

interface CircularTextProps {
  text?: string;
  size?: number;
  className?: string;
  spinSpeed?: number; // seconds per rotation
}

export default function CircularText({
  text = 'HYBRID STUDIOZ • SMART TOOLS & EXPERIENCES • EST 2026 • ',
  size = 140,
  className = '',
  spinSpeed = 16,
}: CircularTextProps) {
  const radius = 58;
  const rawId = useId();
  const pathId = `circle-path-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-[spin_var(--spin-duration)_linear_infinite]"
        style={{ '--spin-duration': `${spinSpeed}s` } as React.CSSProperties}
      >
        <defs>
          <path
            id={pathId}
            d={`M 80, 80 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        <text className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] fill-current">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Central decorative geometric core */}
      <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-gradient-to-tr from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] p-[1.5px] shadow-lg shadow-[#6f4bff]/30">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070913]">
          <span className="block h-2 w-2 rounded-full bg-[#ff5e1a] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
