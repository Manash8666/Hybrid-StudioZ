// ==============================================================================
// HYBRID STUDIOZ — CINEMATIC TIMELINE & SEEDED RANDOM UTILITIES
// Deterministic Bauhaus grid generation, stagger helpers, and scene timelines
// ==============================================================================

import { initGSAP } from './gsap';

/**
 * Creates a ScrollTrigger timeline pinned to a section element for a specified scroll duration.
 */
export function cineTimeline(
  sectionEl: HTMLElement,
  scrollVh: number = 300,
  options: {
    lead?: number;
    tail?: number;
    onUpdate?: (progress: number) => void;
    anticipatePin?: number;
  } = {}
) {
  const { gsap, ScrollTrigger } = initGSAP();

  const totalHeight = `${scrollVh}vh`;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: `+=${totalHeight}`,
      pin: true,
      scrub: 0.5,
      anticipatePin: options.anticipatePin ?? 1,
      onUpdate: (self) => {
        if (options.onUpdate) {
          options.onUpdate(self.progress);
        }
      },
    },
  });

  return { tl, ScrollTrigger };
}

/**
 * Simple Mulberry32 seeded pseudo-random number generator for deterministic layouts.
 */
export function createSeededRandom(seed: number = 2026) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface BauhausCell {
  x: number; // grid column start (0-indexed)
  y: number; // grid row start (0-indexed)
  w: number; // col span
  h: number; // row span
  bg: string;
  delay: number;
}

export function generateBauhausGrid(cols: number = 6, rows: number = 5, seed: number = 42): BauhausCell[] {
  const rng = createSeededRandom(seed);
  const colors = [
    '#f8f3e7', // warm cream paper
    '#e8231c', // primary red
    '#f5b51b', // primary yellow
    '#2b74d4', // cobalt blue
    '#070913', // obsidian ink
    '#f8f3e7',
    '#2b74d4',
  ];

  const cells: BauhausCell[] = [];
  const occupied = Array.from({ length: rows }, () => Array(cols).fill(false));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (occupied[r][c]) continue;

      const canSpanW = c + 1 < cols && !occupied[r][c + 1] && rng() > 0.6;
      const canSpanH = r + 1 < rows && !occupied[r + 1][c] && rng() > 0.5;

      const w = canSpanW ? 2 : 1;
      const h = canSpanH ? 2 : 1;

      // Mark occupied
      for (let dr = 0; dr < h; dr++) {
        for (let dc = 0; dc < w; dc++) {
          if (r + dr < rows && c + dc < cols) {
            occupied[r + dr][c + dc] = true;
          }
        }
      }

      const colorIndex = Math.floor(rng() * colors.length);
      cells.push({
        x: c,
        y: r,
        w,
        h,
        bg: colors[colorIndex],
        delay: rng() * 0.4,
      });
    }
  }

  return cells;
}
