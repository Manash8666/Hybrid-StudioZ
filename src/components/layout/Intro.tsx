'use client';

// ==============================================================================
// HYBRID STUDIOZ — SESSION OPENING CURTAIN
// Editorial curtain rise with gradient letter reveal on first session visit
// ==============================================================================

import { useEffect, useState } from 'react';
import { isReducedMotion } from '@/lib/gsap';

import HybridLogo from './HybridLogo';

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
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#02040a] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isAnimating ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Ambient Cobalt Radial Mesh Bleed */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,85,255,0.25)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-8 text-center animate-in fade-in zoom-in-95 duration-700">
        <div className="mb-6 transform hover:scale-105 transition-transform">
          <HybridLogo variant="svg" size="lg" tone="dark" className="h-16 w-auto" />
        </div>

        <span className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-[#0055ff] mb-2">
          AI SaaS // Web Architecture // Digital Creativity
        </span>

        <p className="font-sans text-xs sm:text-sm tracking-widest text-[#8a919e] uppercase">
          Empowering Future-Proof Digital Products
        </p>
      </div>

      <div className="absolute bottom-12 flex items-center gap-3">
        <div className="h-[2px] w-12 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-full bg-[#0055ff] animate-[slide_1.5s_infinite_ease-in-out]" />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
          Initializing System
        </span>
      </div>
    </div>
  );
}
