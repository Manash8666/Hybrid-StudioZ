'use client';

// ==============================================================================
// HYBRID STUDIOZ — SHOCK MAGNETIC 3D TILT CARD
// Interactive cursor-pull physics and perspective tilt for Portfolio-7
// ==============================================================================

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { isReducedMotion } from '@/lib/gsap';

interface MagneticCardProps {
  href: string;
  image: string;
  title: string;
  category: string;
  year: string;
  tagline?: string;
  className?: string;
}

export default function MagneticCard({
  href,
  image,
  title,
  category,
  year,
  tagline,
  className = '',
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion() || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <Link href={href} className={`block group ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="VIEW CASE"
        style={{
          transform: isHovered ? transform : undefined,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative overflow-hidden rounded-2xl bg-[#0b1020] border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_20px_50px_rgba(111,75,255,0.2)]"
      >
        {/* Visual Media Container with Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070913]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-[#070913]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

          {/* Category & Year Badge */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-[#1fb6e8] uppercase backdrop-blur-md border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
              {category}
            </span>
            <span className="font-mono text-xs font-semibold text-white/60 tracking-wider">
              {year}
            </span>
          </div>
        </div>

        {/* Narrative Details */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#1fb6e8] group-hover:to-[#6f4bff]">
              {title}
            </h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#ff5e1a] group-hover:bg-[#ff5e1a] group-hover:text-white">
              <svg
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {tagline && (
            <p className="mt-2 text-sm text-white/60 line-clamp-2 font-sans">
              {tagline}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
