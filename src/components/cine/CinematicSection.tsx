'use client';

// ==============================================================================
// HYBRID STUDIOZ — CINEMATIC SECTION STAGE
// Pinned scroll section supporting lead/tail overlaps and dynamic NavTone switching
// ==============================================================================

import React, { useEffect, useRef } from 'react';
import { initGSAP, isReducedMotion } from '@/lib/gsap';

interface CinematicSectionProps {
  id: string;
  scrollVh?: number;
  navTone?: 'dark' | 'light';
  className?: string;
  children: React.ReactNode | ((progress: number) => React.ReactNode);
}

export default function CinematicSection({
  id,
  scrollVh = 200,
  navTone = 'dark',
  className = '',
  children,
}: CinematicSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    const { ScrollTrigger } = initGSAP();
    const reduced = isReducedMotion();

    let st: ScrollTrigger | null = null;

    if (!reduced && scrollVh > 0) {
      st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
        onEnter: () => {
          document.documentElement.setAttribute('data-nav-tone', navTone);
        },
        onEnterBack: () => {
          document.documentElement.setAttribute('data-nav-tone', navTone);
        },
      });
    }

    return () => {
      if (st) st.kill();
    };
  }, [scrollVh, navTone]);

  return (
    <section
      ref={containerRef}
      id={id}
      data-nav-tone={navTone}
      className={`relative w-full ${className}`}
      style={{
        height: scrollVh > 0 ? `${scrollVh}vh` : 'auto',
      }}
    >
      <div
        ref={pinRef}
        className={`w-full ${scrollVh > 0 ? 'sticky top-0 h-screen overflow-hidden' : 'relative'}`}
      >
        {typeof children === 'function' ? children(progress) : children}
      </div>
    </section>
  );
}
