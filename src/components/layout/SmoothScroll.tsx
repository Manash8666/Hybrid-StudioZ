'use client';

// ==============================================================================
// HYBRID STUDIOZ — LENIS SMOOTH SCROLL + SINGLE-CLOCK GSAP SYNCHRONIZATION
// Enforces single rAF clock so ScrollTrigger and Lenis never drift out of phase
// ==============================================================================

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { syncLenisWithGSAP } from '@/lib/gsap';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with tuned inertia parameters
    const lenis = new Lenis({
      duration: 1.1,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Single clock synchronization with GSAP ticker
    const cleanupSync = syncLenisWithGSAP(lenis);

    // Provide lenis instance globally for programmatic scroll jumping
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    return () => {
      cleanupSync();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
}
