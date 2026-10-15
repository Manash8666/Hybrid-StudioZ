'use client';

// ==============================================================================
// HYBRID STUDIOZ — FLAGSHIP 8-SCENE CINEMATIC HOME (HOME-5 & HOME-6 FUSION)
// Continuous single-clock scroll film featuring zero cuts and All-Intra scrubbing
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollSequence from '@/components/cine/ScrollSequence';
import CinematicSection from '@/components/cine/CinematicSection';
import Pan from '@/components/cine/Pan';
import VideoAsset from '@/components/cine/VideoAsset';
import CircularText from '@/components/shock/CircularText';
import PricingMatrix from '@/components/shock/PricingMatrix';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';
import { generateBauhausGrid } from '@/lib/cine';
import { HAND_OFF_POINTS } from '@/lib/points';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<'capabilities' | 'pricing'>('capabilities');

  const openModal = (service?: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const bauhausCells = generateBauhausGrid(8, 6, 2026);

  return (
    <div className="relative w-full bg-[#070913] text-white">
      {/* ==================================================================== */}
      {/* SCENE 01: HERO (Negative Space on Right, Liquid Cloud on Left)       */}
      {/* ==================================================================== */}
      <ScrollSequence
        name="hero"
        scrollVh={480}
        tail={160}
        focal={[0.66, 0.5]}
        eager
        id="seq-hero"
      >
        {(progress) => (
          <div className="relative flex h-full w-full flex-col justify-between px-6 sm:px-12 md:px-20 py-24 select-none">
            {/* Top Eyebrow & Rotating Circular Badge */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                  Flagship Experience // 01
                </span>
                <span className="text-[11px] font-mono text-white/50 uppercase mt-1">
                  Single-Clock All-Intra Pipeline
                </span>
              </div>

              <CircularText
                text="HYBRID STUDIOZ • SMART TOOLS & DIGITAL EXPERIENCES • "
                size={130}
                className="hidden sm:inline-flex text-white/80"
              />
            </div>

            {/* Negative Space Right Typography Overlay */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
              <div className="lg:col-span-6 pointer-events-none hidden lg:block" />

              <div
                className="lg:col-span-6 flex flex-col items-start bg-black/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-0 p-6 lg:p-0 rounded-2xl"
                style={{
                  opacity: Math.max(0, 1 - progress * 2.2),
                  transform: `translateY(${progress * -50}px)`,
                }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8] animate-ping" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#1fb6e8] font-semibold">
                    Next-Gen Agency Platform
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
                  We build platforms.{' '}
                  <span className="bg-gradient-to-r from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] bg-clip-text text-transparent">
                    We build hybrid
                  </span>{' '}
                  digital experiences.
                </h1>

                <p className="mt-6 max-w-lg font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                  Where creative technology, generative AI workflows, and single-clock WebGL choreography converge to build category-dominating brand ecosystems.
                </p>

                {/* Dual CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openModal()}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/30 hover:opacity-90 transition-all hover:scale-105"
                  >
                    Start a Project
                  </button>

                  <a
                    href="#seq-story"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 font-display text-xs font-black uppercase tracking-wider text-white transition-all"
                  >
                    <span>Explore the Film</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Home-6 Animated Bottom Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 bg-black/30 backdrop-blur-md rounded-2xl px-6 py-4">
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black text-white">
                  74+
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#1fb6e8]">
                  Digital Products Shipped
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black text-white">
                  99%
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff5e1a]">
                  Enterprise Client Retention
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black text-white">
                  12x
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6f4bff]">
                  Faster AI-Augmented Pipelines
                </span>
              </div>
            </div>
          </div>
        )}
      </ScrollSequence>

      {/* ==================================================================== */}
      {/* HAND-OFF 01 -> 02: THE CONTINUOUS GALLERY PAN                        */}
      {/* ==================================================================== */}
      <Pan scrollVh={160} />

      {/* ==================================================================== */}
      {/* SCENE 02: STORY (Model in Couture Wireframe + 4-Beat Narrative)       */}
      {/* ==================================================================== */}
      <ScrollSequence
        name="story"
        scrollVh={960}
        lead={160}
        focal={[0.57, 0.5]}
        id="seq-story"
      >
        {(progress) => {
          // Calculate active beat (0 to 3) based on scroll progress
          const beatIndex = Math.min(3, Math.floor(progress * 4));
          const currentBeat = SITE_CONFIG.storyBeats[beatIndex];

          return (
            <div className="relative flex h-full w-full flex-col justify-between px-6 sm:px-12 md:px-20 py-24 select-none">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                  Sequence 02 // Narrative Choreography
                </span>
                <span className="font-mono text-xs text-white/50">
                  {currentBeat.index}
                </span>
              </div>

              {/* Synchronized 4-Beat Timeline Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
                <div className="lg:col-span-6 pointer-events-none hidden lg:block" />

                <div className="lg:col-span-6">
                  <div className="p-8 sm:p-10 rounded-3xl bg-[#070913]/85 border border-white/15 backdrop-blur-2xl shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
                        Beat {currentBeat.index}
                      </span>
                      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#1fb6e8] to-[#ff5e1a]" />
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
                      {currentBeat.heading}
                    </h2>

                    <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                      {currentBeat.copy}
                    </p>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                      {SITE_CONFIG.storyBeats.map((beat, idx) => (
                        <div
                          key={beat.index}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === beatIndex
                              ? 'w-8 bg-[#ff5e1a]'
                              : idx < beatIndex
                              ? 'w-2 bg-white/40'
                              : 'w-2 bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hand-off 02 -> 03: Expanding Orange Circle at > 90% */}
              {progress > 0.88 && (
                <div
                  className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center transition-all duration-300"
                  style={{
                    clipPath: `circle(${(progress - 0.88) * 900}% at ${HAND_OFF_POINTS.storyOrangeFocal.x * 100}% ${HAND_OFF_POINTS.storyOrangeFocal.y * 100}%)`,
                    backgroundColor: '#ff5e1a',
                  }}
                />
              )}
            </div>
          );
        }}
      </ScrollSequence>

      {/* ==================================================================== */}
      {/* SCENE 03: BUILD & SERVICES PREVIEW (Orange Smoke & Kinetic Words)   */}
      {/* ==================================================================== */}
      <CinematicSection id="build" scrollVh={280} navTone="dark">
        {(progress) => {
          // Word sequence index
          const wordIndex = Math.min(
            SITE_CONFIG.kineticWords.length - 1,
            Math.floor(progress * SITE_CONFIG.kineticWords.length)
          );
          const currentWord = SITE_CONFIG.kineticWords[wordIndex];

          return (
            <div className="relative h-full w-full overflow-hidden bg-[#070913]">
              {/* Looping creator background video */}
              <div className="absolute inset-0 z-0">
                <VideoAsset
                  src="/assets/services/build.mp4"
                  poster="/assets/services/build.webp"
                  overlayOpacity={0.35}
                />
              </div>

              {/* Giant Kinetic Word Overlay (Disappears behind dark clothing via blend) */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 sm:p-12 md:p-20">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                    Sequence 03 // Engineering Core
                  </span>
                  <Link
                    href="/services"
                    className="font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white underline underline-offset-4"
                  >
                    View All Capabilities →
                  </Link>
                </div>

                {/* Giant Kinetic Word passing across screen */}
                <div className="my-auto text-center select-none">
                  <span className="block font-mono text-xs uppercase tracking-widest text-[#ff5e1a] font-bold mb-3">
                    0{wordIndex + 1} {'//'} Kinetic Manifesto
                  </span>
                  <h2
                    key={currentWord}
                    className="font-display text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tight text-white drop-shadow-2xl animate-in zoom-in-95 duration-200"
                  >
                    {currentWord}
                  </h2>
                </div>

                {/* Home-5 Glassmorphic Capability Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#070913]/70 backdrop-blur-xl border border-white/10">
                  {SITE_CONFIG.capabilityMetrics.map((cap) => (
                    <div key={cap.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-white/80">{cap.label}</span>
                        <span className="text-[#ff5e1a] font-bold">{cap.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#1fb6e8] to-[#ff5e1a] rounded-full"
                          style={{ width: `${cap.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hand-Off 03 -> 04: Letter "D" swallowing viewport at progress > 94% */}
              {progress > 0.94 && (
                <div
                  className="pointer-events-none absolute inset-0 z-50 bg-[#070913] transition-opacity duration-300"
                  style={{
                    opacity: (progress - 0.94) / 0.06,
                  }}
                />
              )}
            </div>
          );
        }}
      </CinematicSection>

      {/* ==================================================================== */}
      {/* SCENE 04: EXPERIENCES (Organism Vortex + Featured Work Preview)      */}
      {/* ==================================================================== */}
      <ScrollSequence
        name="organism"
        scrollVh={520}
        focal={[0.5, 0.5]}
        id="seq-organism"
      >
        {(progress) => (
          <div className="relative flex h-full w-full flex-col justify-between px-6 sm:px-12 md:px-20 py-24 select-none">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#1fb6e8] font-bold">
                Sequence 04 // Living Architecture
              </span>
              <span className="font-mono text-xs text-white/50">
                Deep Core Scrubbing
              </span>
            </div>

            {/* Kinetic Letter Scale Outward: CREATIVE -> DIGITAL -> EXPERIENCES */}
            <div className="my-auto text-center select-none pointer-events-none">
              <div
                className="font-display font-black uppercase text-white/90 leading-none tracking-tighter"
                style={{
                  transform: `scale(${1 + progress * 0.4})`,
                  opacity: Math.max(0.3, 1 - progress * 0.8),
                }}
              >
                <span className="block text-4xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#1fb6e8] to-white">
                  Creative
                </span>
                <span className="block text-4xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#1fb6e8] via-[#6f4bff] to-[#e9449a]">
                  Digital
                </span>
                <span className="block text-4xl sm:text-7xl md:text-8xl text-white">
                  Experiences
                </span>
              </div>
            </div>

            {/* Featured 3-Card Selected Works Showcase Overlay */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#070913]/80 backdrop-blur-2xl border border-white/15">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a]">
                  Selected Works Preview
                </span>
                <Link
                  href="/work"
                  className="font-mono text-xs uppercase tracking-wider text-white hover:text-[#1fb6e8] transition-colors"
                >
                  View All Projects (6) →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SITE_CONFIG.projects.slice(0, 3).map((proj) => (
                  <Link
                    key={proj.slug}
                    href={`/work/${proj.slug}`}
                    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#1fb6e8]/50 transition-all"
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-lg mb-3 bg-black">
                      <img
                        src={proj.heroImage}
                        alt={proj.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="block font-display text-base font-bold text-white group-hover:text-[#1fb6e8] transition-colors">
                      {proj.title}
                    </span>
                    <span className="block font-mono text-[10px] text-white/50 uppercase mt-0.5">
                      {proj.category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hand-Off 04 -> 05: Black SVG/CSS eyelids closing at > 92% */}
            {progress > 0.90 && (
              <div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between">
                <div
                  className="w-full bg-[#070913] transition-all duration-200"
                  style={{ height: `${(progress - 0.90) * 10 * 50}%` }}
                />
                <div
                  className="w-full bg-[#070913] transition-all duration-200"
                  style={{ height: `${(progress - 0.90) * 10 * 50}%` }}
                />
              </div>
            )}
          </div>
        )}
      </ScrollSequence>

      {/* ==================================================================== */}
      {/* SCENE 05: GAZE & HIGH CONVERSION (Macro Eye + Blink "Don't blink.")   */}
      {/* ==================================================================== */}
      <ScrollSequence
        name="eye"
        scrollVh={420}
        focal={[0.5, 0.5]}
        id="seq-eye"
      >
        {(progress) => {
          const isBlinkFrame = progress > 0.48 && progress < 0.62;

          return (
            <div className="relative flex h-full w-full flex-col justify-between px-6 sm:px-12 md:px-20 py-24 select-none">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                  Sequence 05 // Cognitive Attention
                </span>
                <span className="font-mono text-xs text-white/50">
                  Gaze Scrubber
                </span>
              </div>

              {/* Center Typography Reveal */}
              <div className="my-auto text-center select-none max-w-3xl mx-auto">
                {isBlinkFrame ? (
                  <div className="p-8 rounded-3xl bg-black/80 backdrop-blur-2xl border border-[#ff5e1a]/40 shadow-2xl animate-in zoom-in-95 duration-200">
                    <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white">
                      Don&apos;t blink.
                    </h2>
                  </div>
                ) : (
                  <div className="p-8 rounded-3xl bg-[#070913]/70 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <span className="block font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8] mb-3">
                      Attention By Design
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                      We build digital ecosystems people can&apos;t look away from.
                    </h2>
                    <p className="mt-4 font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                      Engineered down to the sub-millisecond frame tick. Visual retention that converts passive scrollers into committed enterprise champions.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-white/40">
                <span>05 // MACRO GAZE</span>
                <span>FOCAL: [0.50, 0.50]</span>
              </div>

              {/* Hand-Off 05 -> 06: Camera dives into dark pupil at > 92% */}
              {progress > 0.92 && (
                <div
                  className="pointer-events-none absolute inset-0 z-50 bg-[#070913] transition-opacity duration-300"
                  style={{
                    opacity: (progress - 0.92) / 0.08,
                  }}
                />
              )}
            </div>
          );
        }}
      </ScrollSequence>

      {/* ==================================================================== */}
      {/* SCENE 06: CREATOR & STUDIO DNA (Swiss Bauhaus Grid Snap)             */}
      {/* ==================================================================== */}
      <CinematicSection id="creator" scrollVh={240} navTone="light">
        {(progress) => (
          <div className="relative h-full w-full bg-[#f8f3e7] text-[#0b1020] overflow-hidden flex flex-col justify-between p-6 sm:p-12 md:p-20">
            {/* Background Swiss Bauhaus Grid Cells */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-4 pointer-events-none opacity-20">
              {bauhausCells.map((cell, idx) => (
                <div
                  key={idx}
                  className="rounded-sm transition-all duration-700"
                  style={{
                    gridColumn: `${cell.x + 1} / span ${cell.w}`,
                    gridRow: `${cell.y + 1} / span ${cell.h}`,
                    backgroundColor: cell.bg,
                    transform: `scale(${Math.min(1, progress * 2 + cell.delay)})`,
                  }}
                />
              ))}
            </div>

            {/* Header Lockup */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#2b74d4] font-bold">
                Sequence 06 // Studio DNA & Manifesto
              </span>
              <span className="font-mono text-xs text-[#0b1020]/50">
                Swiss Bauhaus Grid
              </span>
            </div>

            {/* Creator Mosaic & Architecture Statement */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#0b1020] bg-white p-3 shadow-2xl">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eef2f7]">
                    <img
                      src="/assets/about/portrait.webp"
                      alt="Studio Architect Portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <span className="block font-display text-base font-black uppercase text-[#0b1020]">
                        Julian Thorne & Squad
                      </span>
                      <span className="font-mono text-[10px] uppercase text-[#0b1020]/60">
                        Design & Tech Architecture
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#e8231c]">
                      EST 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#e8231c]">
                  The Architecture Behind Hybrid Studioz
                </span>

                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0b1020] leading-[0.95]">
                  Built for creators. Engineered for scale.
                </h2>

                <blockquote className="border-l-4 border-[#2b74d4] pl-6 py-2">
                  <p className="font-sans text-lg sm:text-xl font-medium text-[#0b1020]/80 italic leading-relaxed">
                    &ldquo;Ensuring human insight works in harmony with autonomous AI, iconic brand aesthetics, and high-velocity production code.&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 rounded-full border border-[#0b1020]/20 font-mono text-xs font-bold uppercase">
                    San Francisco
                  </span>
                  <span className="px-4 py-2 rounded-full border border-[#0b1020]/20 font-mono text-xs font-bold uppercase">
                    London
                  </span>
                  <span className="px-4 py-2 rounded-full border border-[#0b1020]/20 font-mono text-xs font-bold uppercase">
                    Tokyo
                  </span>
                  <span className="px-4 py-2 rounded-full border border-[#0b1020]/20 font-mono text-xs font-bold uppercase">
                    Zurich
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#0b1020]/50">
              <span>SWISS GRID ALIGNED</span>
              <span>100% TYPOGRAPHIC MASTERY</span>
            </div>
          </div>
        )}
      </CinematicSection>

      {/* ==================================================================== */}
      {/* SCENE 09: CAPABILITIES UNIVERSE & PRICING MATRIX                     */}
      {/* ==================================================================== */}
      <CinematicSection id="capabilities" scrollVh={280} navTone="dark">
        {(progress) => (
          <div className="relative h-full w-full bg-[#070913] text-white flex flex-col justify-between p-6 sm:p-12 md:p-20 overflow-hidden">
            {/* Top Bar with Tab Switcher (Capabilities vs Pricing) */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                Sequence 09 // Spatial Capabilities
              </span>

              {/* Tab Switcher */}
              <div className="inline-flex rounded-full bg-white/5 p-1 border border-white/10">
                <button
                  onClick={() => setActiveTab('capabilities')}
                  className={`px-5 py-2 rounded-full font-display text-xs font-black uppercase tracking-wider transition-all ${
                    activeTab === 'capabilities'
                      ? 'bg-white text-[#070913] shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  3D Universe
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`px-5 py-2 rounded-full font-display text-xs font-black uppercase tracking-wider transition-all ${
                    activeTab === 'pricing'
                      ? 'bg-[#ff5e1a] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Engagement Tiers
                </button>
              </div>
            </div>

            {/* Main Area: Dynamic Tab Switch */}
            <div className="relative z-10 my-auto w-full">
              {activeTab === 'capabilities' ? (
                <div className="relative h-[65vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
                  {/* Spatial Universe Nodes */}
                  {SITE_CONFIG.capabilityNodes.map((node) => {
                    const parallaxY = (progress - 0.5) * node.depth * 90;
                    return (
                      <div
                        key={node.label}
                        className="absolute select-none pointer-events-none transition-transform duration-200"
                        style={{
                          left: `${node.left}%`,
                          top: `${node.top}%`,
                          transform: `translate3d(0, ${parallaxY}px, 0)`,
                        }}
                      >
                        <span
                          className={`block font-display uppercase tracking-tight whitespace-nowrap transition-colors duration-300 ${
                            node.category === 'eng'
                              ? 'text-white/90 hover:text-[#1fb6e8]'
                              : node.category === 'motion'
                              ? 'text-white/80 hover:text-[#ff5e1a]'
                              : node.category === 'ai'
                              ? 'text-white/95 text-gradient font-black'
                              : 'text-white/70'
                          }`}
                          style={{
                            fontSize: `clamp(1rem, ${node.sizeVw}vw, 3.5rem)`,
                            fontWeight: node.weight,
                            opacity: 0.2 + (node.depth / 1.8) * 0.8,
                          }}
                        >
                          {node.label}
                        </span>
                      </div>
                    );
                  })}

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/30 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                      Scroll Wheel Controls Spatial Parallax
                    </span>
                  </div>
                </div>
              ) : (
                <div className="max-h-[65vh] overflow-y-auto px-2 py-4">
                  <PricingMatrix onSelectTier={(tier) => openModal(tier)} />
                </div>
              )}
            </div>

            <div className="relative z-20 flex items-center justify-between text-xs font-mono text-white/40">
              <span>22 CORE ARCHITECTURAL CAPABILITIES</span>
              <span>HOME-6 HIGH-CONVERSION PRICING</span>
            </div>
          </div>
        )}
      </CinematicSection>

      {/* ==================================================================== */}
      {/* SCENE 10: CONTACT FINALE (Closing Cobalt Petal & Rising Headline)     */}
      {/* ==================================================================== */}
      <CinematicSection id="contact" scrollVh={180} navTone="dark">
        {(_progress) => (
          <div className="relative h-full w-full bg-[#023a74] text-white flex flex-col justify-between p-6 sm:p-12 md:p-20 overflow-hidden">
            {/* Background Minimalist Cobalt Petal Visual */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
              <img
                src="/assets/about/closing-muse.webp"
                alt="Closing Petal Muse"
                className="h-full w-full object-cover object-right filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#023a74] via-[#023a74]/60 to-transparent lg:block" />
            </div>

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5e1a] font-bold">
                Sequence 10 // The Finale
              </span>
              <span className="font-mono text-xs text-white/60">
                Studio Direct Channel
              </span>
            </div>

            {/* Left Negative Space: Line-by-Line Rising Monumental Headline */}
            <div className="relative z-10 max-w-2xl my-auto select-none">
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff5e1a] font-bold block mb-4">
                Have an ambitious vision in mind?
              </span>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92] text-white">
                <span className="block">Let&apos;s build</span>
                <span className="block">something</span>
                <span className="block text-white/80">the internet</span>
                <span className="block text-[#ff5e1a]">remembers.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-white/70 font-sans max-w-lg leading-relaxed">
                Whether scaling an AI multi-agent platform, architecting a luxury 3D flagship, or overhauling your brand system, our team is ready to deploy.
              </p>

              {/* Action Hub */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openModal()}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-2xl shadow-[#ff5e1a]/40 hover:opacity-90 hover:scale-105 transition-all"
                >
                  Book a Discovery Call
                </button>

                <a
                  href={`mailto:${SITE_CONFIG.brand.email}`}
                  className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-display text-xs font-black uppercase tracking-wider text-white transition-colors"
                >
                  Direct Email Dispatch
                </a>
              </div>
            </div>

            {/* Footer Connection Coordinates */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/40 pt-4 border-t border-white/10">
              <span>SAMPLE COBALT PETAL // #023a74</span>
              <span>TRANSMISSION READY</span>
            </div>
          </div>
        )}
      </CinematicSection>

      {/* Global Direct Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={modalService}
      />
    </div>
  );
}
