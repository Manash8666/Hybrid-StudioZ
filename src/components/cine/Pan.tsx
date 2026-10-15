'use client';

// ==============================================================================
// HYBRID STUDIOZ — CONTINUOUS GALLERY PAN (HAND-OFF 01 -> 02)
// Translates vertical scroll into continuous horizontal camera pan along studio wall
// ==============================================================================

import React, { useEffect, useRef } from 'react';
import { initGSAP, isReducedMotion } from '@/lib/gsap';

interface PanProps {
  scrollVh?: number;
}

export default function Pan({ scrollVh = 160 }: PanProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const { gsap } = initGSAP();
    if (isReducedMotion()) return;

    const track = trackRef.current;
    const letters = lettersRef.current?.querySelectorAll('.pan-letter');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    });

    // Translate track horizontally to emulate smooth camera pan
    tl.to(track, {
      xPercent: -45,
      ease: 'none',
      duration: 1,
    });

    // Parallax individual typography characters along depth planes
    if (letters && letters.length > 0) {
      letters.forEach((letter, i) => {
        const depth = (i + 1) * 20;
        tl.to(
          letter,
          {
            x: -depth * 4,
            y: (i % 2 === 0 ? -1 : 1) * 25,
            opacity: 0.9,
            ease: 'none',
            duration: 1,
          },
          0
        );
      });
    }

    // Parallax paint bridge flow
    if (bridgeRef.current) {
      tl.to(
        bridgeRef.current,
        {
          x: -120,
          scale: 1.05,
          ease: 'none',
          duration: 1,
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [scrollVh]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#eef2f7]"
      style={{ height: `${scrollVh}vh` }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center bg-[#eef2f7]">
        {/* Horizontal moving studio corridor track */}
        <div
          ref={trackRef}
          className="relative flex items-center h-full w-[200vw] will-change-transform"
        >
          {/* Section connection background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef2f7] via-[#e5ecf5] to-[#eef2f7] pointer-events-none" />

          {/* AI SaaS & Web Development Connector Canvas */}
          <div
            ref={bridgeRef}
            className="absolute left-[15vw] top-1/2 -translate-y-1/2 w-[90vw] max-w-[1400px] h-[65vh] pointer-events-none select-none rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/hero/paint-bridge.webp"
              alt="AI SaaS & Web Development Architecture"
              className="w-full h-full object-cover filter drop-shadow-[0_20px_50px_rgba(0,85,255,0.35)]"
              onError={(e) => {
                // Fallback graceful procedural SVG gradient if asset is loading
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Drifting parallax editorial serif letters: H Y B R I D */}
          <div
            ref={lettersRef}
            className="absolute inset-0 flex items-center justify-around px-[10vw] pointer-events-none select-none"
          >
            {['H', 'Y', 'B', 'R', 'I', 'D'].map((char, index) => (
              <span
                key={char + index}
                className="pan-letter font-display text-[16vw] font-black text-[#0b1020]/[0.08] tracking-tighter leading-none select-none"
                style={{
                  transform: `translateY(${(index % 3 - 1) * 15}px)`,
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Studio architectural details & milestone badges */}
          <div className="absolute left-[70vw] top-[30vh] max-w-md p-8 rounded-2xl bg-white/85 backdrop-blur-xl border border-black/10 shadow-2xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#0055ff] font-bold block mb-2">
              Sequence 01 → 02 Handoff
            </span>
            <h3 className="font-display text-2xl font-black text-[#0b1020] uppercase tracking-tight mb-3">
              Autonomous AI &amp; Web Engineering
            </h3>
            <p className="text-sm text-[#0b1020]/75 leading-relaxed font-sans">
              High-velocity Next.js 15 systems flowing seamlessly into autonomous agent orchestration. No boundary lines; pure momentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
