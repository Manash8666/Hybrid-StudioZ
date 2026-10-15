'use client';

// ==============================================================================
// HYBRID STUDIOZ — SESSION OPENING CURTAIN
// Editorial curtain rise with gradient letter reveal on first session visit
// ==============================================================================

import { useEffect, useState } from 'react';
import { isReducedMotion } from '@/lib/gsap';

export default function Intro() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isReducedMotion()) {
      return;
    }

    const checkTimer = setTimeout(() => {
      const hasSeenIntro = sessionStorage.getItem('hybrid_intro_seen');
      if (!hasSeenIntro) {
        setShouldRender(true);
        sessionStorage.setItem('hybrid_intro_seen', 'true');

        const timer = setTimeout(() => {
          setIsAnimating(false);
          setTimeout(() => setShouldRender(false), 900);
        }, 1600);

        return () => clearTimeout(timer);
      }
    }, 10);

    return () => clearTimeout(checkTimer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#070913] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isAnimating ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative overflow-hidden px-8 text-center">
        <span className="block font-mono text-[11px] font-bold tracking-[0.4em] uppercase text-[#ff5e1a] mb-3 animate-pulse">
          Flagship Creative Architecture • Est 2026
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white">
          <span className="inline-block bg-gradient-to-r from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] bg-clip-text text-transparent">
            Hybrid
          </span>{' '}
          Studioz
        </h1>
        <p className="mt-4 font-sans text-xs sm:text-sm uppercase tracking-widest text-white/50">
          Smart Tools & Digital Experiences
        </p>
      </div>

      <div className="absolute bottom-12 flex items-center gap-3">
        <div className="h-[2px] w-8 bg-white/20 overflow-hidden">
          <div className="h-full w-full bg-[#ff5e1a] animate-[slide_1.5s_infinite_ease-in-out]" />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
          Synchronizing Clock
        </span>
      </div>
    </div>
  );
}
