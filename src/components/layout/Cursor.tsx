'use client';

// ==============================================================================
// HYBRID STUDIOZ — CUSTOM MAGNETIC & TRAILING CURSOR
// Fine dot + trailing elastic ring + dynamic data-cursor="LABEL" pill expander
// ==============================================================================

import { useEffect, useRef, useState } from 'react';
import { isReducedMotion } from '@/lib/gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse/trackpad) and when reduced motion is off
    if (window.matchMedia('(pointer: coarse)').matches || isReducedMotion()) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering an element with custom data-cursor
      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        const text = target.getAttribute('data-cursor');
        setLabel(text);
        setIsPointer(true);
      } else {
        setLabel(null);
        // Check for standard interactive elements
        const clickable = (e.target as HTMLElement)?.closest('a, button, input, textarea, select, [role="button"]');
        setIsPointer(Boolean(clickable));
      }
    };

    const render = () => {
      // Elastic lerp interpolation for smooth ring trailing
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(render);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* High-Contrast 12px Pure White Circular Dot Cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.75)] transition-transform duration-150 ${
            label ? 'scale-0' : isPointer ? 'scale-125 bg-white' : 'scale-100'
          }`}
        />
      </div>

      {/* Trailing elastic ring or label pill */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        {label ? (
          <div className="flex items-center justify-center rounded-full bg-[#0055ff] px-4 py-2 font-display text-[10px] font-black uppercase tracking-widest text-white shadow-2xl shadow-[#0055ff]/50 border border-white/20 whitespace-nowrap animate-in fade-in zoom-in-90 duration-200">
            {label}
          </div>
        ) : (
          <div
            className={`rounded-full border transition-all duration-300 ${
              isPointer
                ? 'h-10 w-10 -ml-5 -mt-5 border-[#0055ff]/60 bg-[#0055ff]/10 scale-110'
                : 'h-7 w-7 -ml-3.5 -mt-3.5 border-white/20'
            }`}
          />
        )}
      </div>
    </>
  );
}
