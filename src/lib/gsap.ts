// ==============================================================================
// HYBRID STUDIOZ — GSAP & SCROLLTRIGGER REGISTRATION WITH SINGLE-CLOCK TICKER
// Ensures Lenis smooth scroll and GSAP animations run on the exact same tick
// ==============================================================================

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

let registered = false;

export function initGSAP() {
  if (typeof window === 'undefined') return { gsap, ScrollTrigger };

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    // Eliminate micro-jitter by synchronizing clock with display refresh
    gsap.ticker.lagSmoothing(0);
    registered = true;
  }

  return { gsap, ScrollTrigger };
}

/**
 * Single-clock synchronization: drives Lenis smooth scroll exclusively
 * from the GSAP ticker so ScrollTrigger and VideoScrubber never drift out of phase.
 */
export function syncLenisWithGSAP(lenis: Lenis) {
  if (typeof window === 'undefined') return () => {};

  initGSAP();

  const updateScrollTrigger = () => {
    ScrollTrigger.update();
  };

  lenis.on('scroll', updateScrollTrigger);

  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);

  return () => {
    lenis.off('scroll', updateScrollTrigger);
    gsap.ticker.remove(tickerCallback);
  };
}

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger };
