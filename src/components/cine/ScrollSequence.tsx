'use client';

// ==============================================================================
// HYBRID STUDIOZ — PINNED SCROLL SEQUENCE WRAPPER
// Houses the scrubbed All-Intra video/canvas layer and pins live HTML typography
// ==============================================================================

import React, { useEffect, useRef, useState } from 'react';
import { VideoScrubber } from '@/lib/scrubber';
import { initGSAP, isReducedMotion } from '@/lib/gsap';
import { SITE_CONFIG, type SequenceConfig } from '@/content/site';

interface ScrollSequenceProps {
  name: 'hero' | 'story' | 'organism' | 'eye';
  scrollVh?: number;
  lead?: number;
  tail?: number;
  focal?: [number, number];
  eager?: boolean;
  id?: string;
  className?: string;
  children?: React.ReactNode | ((progress: number) => React.ReactNode);
}

export default function ScrollSequence({
  name,
  scrollVh: overrideScrollVh,
  focal: overrideFocal,
  eager = false,
  id,
  className = '',
  children,
}: ScrollSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrubberRef = useRef<VideoScrubber | null>(null);

  const [progress, setProgress] = useState(0);
  const [_isReady, setIsReady] = useState(false);

  const config: SequenceConfig = {
    ...SITE_CONFIG.sequences[name],
    ...(overrideScrollVh ? { scrollVh: overrideScrollVh } : {}),
    ...(overrideFocal ? { focal: overrideFocal } : {}),
    eager,
  };

  const posterUrl = `/scrub/${name}-poster.webp`;

  useEffect(() => {
    if (!containerRef.current || !pinRef.current || !videoRef.current) return;

    const { ScrollTrigger } = initGSAP();
    const reduced = isReducedMotion();

    // Canvas size initialization
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      const handleResize = () => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
        }
      };
      window.addEventListener('resize', handleResize);
    }

    // Initialize Video Scrubber instance
    const scrubber = new VideoScrubber({
      videoEl: videoRef.current,
      canvasEl: canvasRef.current,
      config,
      posterUrl,
      onReady: () => setIsReady(true),
    });
    scrubberRef.current = scrubber;

    // Pinning and ScrollTrigger setup
    let st: ScrollTrigger | null = null;

    if (!reduced) {
      st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${config.scrollVh}vh`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 0.1,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
          scrubber.seek(self.progress);
        },
      });
    }

    return () => {
      if (st) st.kill();
      scrubber.destroy();
    };
  }, [name, config.scrollVh]);

  return (
    <section
      ref={containerRef}
      id={id || `seq-${name}`}
      className={`relative w-full ${className}`}
      style={{
        // Height equals viewport + extra scroll distance for scrubbing
        height: `${config.scrollVh + 100}vh`,
      }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden select-none"
      >
        {/* Scrubbed media canvas and video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover hidden"
            playsInline
            muted
            preload={eager ? 'auto' : 'metadata'}
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Live editorial HTML/CSS layer */}
        <div className="relative z-10 w-full h-full pointer-events-auto">
          {typeof children === 'function' ? children(progress) : children}
        </div>
      </div>
    </section>
  );
}
