'use client';

// ==============================================================================
// HYBRID STUDIOZ — CORNER EDITORIAL CHAPTER INDEX & PROGRESS HAIRLINE
// Tracks active narrative section with clickable jump links and scroll progress
// ==============================================================================

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CHAPTERS = [
  { id: 'seq-hero', number: '01', title: 'HERO' },
  { id: 'seq-story', number: '02', title: 'STORY' },
  { id: 'build', number: '03', title: 'BUILD' },
  { id: 'seq-organism', number: '04', title: 'ORGANISM' },
  { id: 'seq-eye', number: '05', title: 'GAZE' },
  { id: 'creator', number: '06', title: 'STUDIO' },
  { id: 'capabilities', number: '09', title: 'CAPABILITIES' },
  { id: 'contact', number: '10', title: 'FINALE' },
];

export default function Chapters() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Detect current visible section
      const middleY = window.innerHeight * 0.4;
      for (const chapter of CHAPTERS) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= middleY && rect.bottom >= middleY) {
            setActiveChapter(chapter);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isHome) return null;

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      className="fixed bottom-8 left-8 z-40 hidden md:flex items-center gap-4 select-none pointer-events-auto"
      aria-label="Scene Chapters"
    >
      {/* Hairline vertical progress track */}
      <div className="relative h-14 w-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-[#ff5e1a] rounded-full transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Active chapter index and title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-[#ff5e1a] tracking-widest">
            CH. {activeChapter.number}
          </span>
          <span className="text-white/30 text-[10px]">•</span>
          <span className="font-display text-[11px] font-black tracking-wider text-white uppercase">
            {activeChapter.title}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeChapter.id === ch.id
                  ? 'w-4 bg-[#ff5e1a]'
                  : 'w-1.5 bg-white/20 hover:bg-white/50'
              }`}
              title={`Jump to ${ch.number} ${ch.title}`}
              aria-label={`Jump to ${ch.number} ${ch.title}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
