'use client';

// ==============================================================================
// HYBRID STUDIOZ — TSUKIFLOW FLAGSHIP SAAS LANDING PAGE
// Faithful 1:1 Implementation of Codings Shock Template (home-6.html)
// Featuring True-Black Color Grading, Outlined Typography, Arrow Buttons,
// Radial Progress Rings, Full-Bleed Video, Plan Switcher, Parallax Briefing,
// 12-Item Insights Grid with Load More, and Desktop Side Widgets.
// ==============================================================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface InsightPost {
  id: number;
  author: string;
  title: string;
  desc: string;
  daysAgo: string;
  tag: string;
  bgImage: string;
}

const INSIGHTS_DATA: InsightPost[] = [
  {
    id: 1,
    author: 'John Young',
    title: 'Why autonomous agentic design matters to enterprise engineering?',
    desc: 'Autonomous agent design represents the transition from static heuristics to self-correcting neural workflows that adapt in real time.',
    daysAgo: '5 days ago',
    tag: 'Agentic Ops',
    bgImage: '/assets/framer/feature-stats.jpg',
  },
  {
    id: 2,
    author: 'Laura Garcia',
    title: 'How to build sub-millisecond edge isolates with zero cold-starts?',
    desc: 'You must balance micro-VM allocation with AST pre-compilation to achieve predictable deterministic latency across global edge clusters.',
    daysAgo: '14 days ago',
    tag: 'Edge Isolates',
    bgImage: '/assets/framer/feature-mobile.jpg',
  },
  {
    id: 3,
    author: 'Alice Johnson',
    title: 'The state of multi-model fallback mesh according to systems architects.',
    desc: 'We benchmark token routing between Claude 3.7 Sonnet, GPT-4o, and DeepSeek to eliminate API outages and ensure 99.99% uptime.',
    daysAgo: '17 days ago',
    tag: 'Model Routing',
    bgImage: '/assets/framer/project-cap.jpg',
  },
  {
    id: 4,
    author: 'Kaled Ahmad',
    title: 'Why deterministic code synthesis replaces human boilerplate in 2026.',
    desc: 'By parsing Figma specifications straight into validated Next.js 16 components, engineering velocity surges by more than 10x.',
    daysAgo: '26 days ago',
    tag: 'Code Synthesis',
    bgImage: '/assets/framer/project-watch.jpg',
  },
  {
    id: 5,
    author: 'Dimitri Smirnov',
    title: 'Telemetry stream architecture for high-frequency algorithmic personalization.',
    desc: 'High-frequency telemetry tracing turns raw user interactions into dynamic contextual embeddings without compromising GDPR compliance.',
    daysAgo: '2 months ago',
    tag: 'Telemetry',
    bgImage: '/assets/framer/project-spray.jpg',
  },
  {
    id: 6,
    author: 'John Young',
    title: 'Self-healing cloud infrastructure: Auto-recovering from deployment drift.',
    desc: 'When unit test regressions occur in production, TsukiFlow agents isolate failing microservices, patch ASTs, and roll back instantly.',
    daysAgo: '3 months ago',
    tag: 'Self-Healing',
    bgImage: '/assets/framer/about-platform.jpg',
  },
  {
    id: 7,
    author: 'John Young',
    title: 'Zero-latency vector caching for high-concurrency LLM pipelines.',
    desc: 'In-memory semantic vector lookups reduce inference overhead and bypass LLM API throttling under massive enterprise traffic loads.',
    daysAgo: '3 months ago',
    tag: 'Vector Caching',
    bgImage: '/assets/framer/feature-stats.jpg',
  },
  {
    id: 8,
    author: 'Laura Garcia',
    title: 'Full-stack reactivity with Next.js 16 App Router & Server Actions.',
    desc: 'Mastering the latest Next.js paradigms for lightning-fast server mutations, streaming SSR, and zero client bundle bloat.',
    daysAgo: '4 months ago',
    tag: 'Next.js 16',
    bgImage: '/assets/framer/feature-mobile.jpg',
  },
  {
    id: 9,
    author: 'Alice Johnson',
    title: 'Eliminating hallucinations with cryptographic ground-truth verification.',
    desc: 'How schema validation layers guarantee that generative agent outputs match strict database requirements without manual human triage.',
    daysAgo: '4 months ago',
    tag: 'Verification',
    bgImage: '/assets/framer/project-cap.jpg',
  },
  {
    id: 10,
    author: 'Kaled Ahmad',
    title: 'The shift from monolithic pipelines to distributed agent swarms.',
    desc: 'Why micro-agents operating in loosely coupled actor topologies achieve greater resilience than traditional linear pipeline DAGs.',
    daysAgo: '5 months ago',
    tag: 'Agent Swarms',
    bgImage: '/assets/framer/project-watch.jpg',
  },
  {
    id: 11,
    author: 'Dimitri Smirnov',
    title: 'Automated compliance engines for cross-regional EU & APAC deployment.',
    desc: 'Navigating residency directives, sovereign cloud partitions, and localized cryptographic keys across multiple cloud continents.',
    daysAgo: '5 months ago',
    tag: 'Compliance',
    bgImage: '/assets/framer/project-spray.jpg',
  },
  {
    id: 12,
    author: 'John Young',
    title: 'The future of autonomous web engineering: Code that writes code.',
    desc: 'Hybrid Studioz research paper detailing self-assembling frontend engines that compile production interfaces directly from intent.',
    daysAgo: '6 months ago',
    tag: 'Innovation',
    bgImage: '/assets/framer/about-platform.jpg',
  },
];

export default function TsukiFlowLandingPage() {
  // Navigation & Drawer states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Pricing switch state: true = Monthly, false = Annually
  const [isMonthly, setIsMonthly] = useState(true);

  // Blog cards pagination
  const [visibleCount, setVisibleCount] = useState(6);

  // Form submission feedback
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  const [modalStatus, setModalStatus] = useState<'idle' | 'success'>('idle');

  // Radial progress animated trigger
  const [radialAnimated, setRadialAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRadialAnimated(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('success');
    setTimeout(() => setNewsletterStatus('idle'), 4000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus('success');
    setTimeout(() => {
      setModalStatus('idle');
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="shock-body bg-[#000000] text-white min-h-screen relative overflow-x-hidden selection:bg-[#0055ff] selection:text-white">

      {/* ==================================================================== */}
      {/* 1. SHOCK HEADER & NAVBAR                                             */}
      {/* ==================================================================== */}
      <header id="header" className="shock-header fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav id="navbar" className="navbar navbar-menu-grid scheme-1 w-full px-6 md:px-12 py-5 flex items-center justify-between bg-black/60 backdrop-blur-lg border-b border-white/[0.06]">
          {/* Brand */}
          <Link href="/" className="navbar-brand flex items-center gap-3 group select-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0055ff] to-[#1fb6e8] flex items-center justify-center font-display font-black text-white text-base shadow-[0_0_15px_rgba(0,85,255,0.5)]">
              T
            </div>
            <span className="logo-after-text font-display font-black text-xl tracking-tight text-white group-hover:text-[#0055ff] transition-colors">
              TSUKIFLOW
            </span>
          </Link>

          {/* Right Header Controls */}
          <div className="flex items-center gap-6">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center text-xs font-mono font-semibold tracking-wider text-white/70 hover:text-white uppercase transition-colors"
            >
              Enterprise Contact
            </Link>

            {/* Menu Toggle Button (Magnetic Effect) */}
            <button
              id="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`menu-toggle relative w-12 h-12 rounded-full border border-white/20 hover:border-[#0055ff] flex items-center justify-center transition-all duration-300 ${
                isMenuOpen ? 'border-[#0055ff] bg-[#0055ff]/10 shadow-[0_0_20px_rgba(0,85,255,0.4)]' : 'bg-transparent'
              }`}
            >
              <div className="menu-toggle-icon flex flex-col justify-center items-center gap-1.5 w-5 h-5">
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2 bg-[#0055ff]' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2 bg-[#0055ff]' : ''
                  }`}
                />
              </div>

              {/* Decorative Circle SVG */}
              <div className="menu-toggle-circle absolute inset-0 pointer-events-none">
                <svg className="w-full h-full p-0.5" viewBox="0 0 68 68">
                  <path
                    fill="none"
                    stroke="#0055ff"
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset={isMenuOpen ? '0' : '200'}
                    className="transition-all duration-500 ease-out"
                    d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                  />
                </svg>
              </div>
            </button>
          </div>
        </nav>

        {/* Shock Fullscreen Menu Grid */}
        <nav
          id="menu-grid"
          className={`menu-grid fixed inset-0 top-[73px] bg-[#000000]/95 backdrop-blur-2xl z-40 transition-all duration-500 overflow-y-auto ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="container-fluid max-w-7xl mx-auto h-full p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {/* Item 1: Main Menu & Search */}
            <div className="menu-grid-item item-1 flex flex-col justify-between h-full space-y-8">
              <div>
                <div className="menu-grid-label top mb-6">
                  <span className="label-vertical flex items-center gap-2">
                    <span className="w-4 h-px bg-white/40 block"></span>
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">SINCE 2024</span>
                  </span>
                </div>
                <div className="menu-grid-main flex flex-col space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-display font-bold text-white hover:text-[#0055ff] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-display font-bold text-white hover:text-[#0055ff] transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/tsukiflow"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-display font-bold text-[#0055ff] transition-colors"
                  >
                    TsukiFlow
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-display font-bold text-white hover:text-[#0055ff] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-display font-bold text-white hover:text-[#0055ff] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Search Bar */}
              <div className="menu-grid-search pt-6 border-t border-white/10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search capabilities..."
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#0055ff]"
                  />
                  <span className="absolute right-4 top-3.5 text-white/40 text-xs">🔍</span>
                </div>
              </div>
            </div>

            {/* Item 2: Image Tile (Portfolio) */}
            <div className="menu-grid-item item-2 hidden lg:block">
              <Link
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="group relative block rounded-2xl overflow-hidden border border-white/10 aspect-[4/5]"
              >
                <Image
                  src="/assets/framer/feature-blue3d.jpg"
                  alt="View Portfolio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#0055ff] transition-colors">
                    View Portfolio →
                  </span>
                </div>
              </Link>
            </div>

            {/* Item 3: Services / Capabilities */}
            <div className="menu-grid-item item-3 flex flex-col space-y-6">
              <div className="menu-grid-label">
                <span className="label-horizontal flex items-center gap-2">
                  <span className="w-4 h-px bg-white/40 block"></span>
                  <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">OUR SERVICES</span>
                </span>
              </div>
              <div className="menu-grid-minor flex flex-col space-y-3 font-sans text-sm text-white/70">
                <span className="hover:text-white cursor-pointer transition-colors">Agent Orchestration</span>
                <span className="hover:text-white cursor-pointer transition-colors">Autonomous Triage</span>
                <span className="hover:text-white cursor-pointer transition-colors">Code Synthesis</span>
                <span className="hover:text-white cursor-pointer transition-colors">Edge Isolates</span>
                <span className="hover:text-white cursor-pointer transition-colors">Telemetry Engine</span>
                <span className="hover:text-white cursor-pointer transition-colors">Neural Swarms</span>
              </div>
            </div>

            {/* Item 4: Image Tile (Platform) */}
            <div className="menu-grid-item item-4 hidden lg:block">
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="group relative block rounded-2xl overflow-hidden border border-white/10 aspect-[4/5]"
              >
                <Image
                  src="/assets/framer/feature-stats.jpg"
                  alt="View Ecosystem"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#0055ff] transition-colors">
                    Ecosystem Architecture →
                  </span>
                </div>
              </Link>
            </div>

            {/* Item 5: Contacts */}
            <div className="menu-grid-item item-5 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4 font-mono text-xs text-white/70">
                <div>
                  <span className="block text-white/40 text-[10px] uppercase tracking-wider mb-1">DIRECT TELEPHONY</span>
                  <a href="tel:+19912345678" className="hover:text-[#0055ff] transition-colors block text-sm font-sans font-bold text-white">
                    +1 (99) 1234 5678
                  </a>
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] uppercase tracking-wider mb-1">NEURAL DISPATCH</span>
                  <a href="mailto:contact@hybridstudioz.com" className="hover:text-[#0055ff] transition-colors block text-sm font-sans text-white">
                    contact@hybridstudioz.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all">
                  𝕏
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all">
                  ⌘
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all">
                  in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ==================================================================== */}
      {/* 2. DYNAMIC BANNER / HERO SLIDER (home-6.html Hero)                  */}
      {/* ==================================================================== */}
      <section id="home" className="shock-section dynamic-slider is-banner scheme-2 relative min-h-screen pt-36 pb-20 px-6 md:px-16 flex flex-col justify-between overflow-hidden bg-[#000000]">
        
        {/* Slide Index Floating Label */}
        <div id="slide-index" className="slide-index text-[11px] font-mono tracking-[0.25em] text-[#0055ff] font-bold uppercase mb-4">
          AUTONOMOUS AI RUNTIME • TSUKIFLOW
        </div>

        {/* Scroll Down Indicator */}
        <div id="slide-navigation" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <a
            href="#gallery-progress"
            className="group flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-white/50 hover:text-white uppercase transition-colors"
          >
            <span>Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-[#0055ff] transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#0055ff] animate-bounce" />
            </div>
          </a>
        </div>

        {/* Slide Info Toggle Button ("VIEW MORE" / "VIEW LESS") */}
        <div className="absolute top-36 right-6 md:right-16 z-30">
          <button
            id="slide-info-toggle"
            onClick={() => setIsInfoOpen(!isInfoOpen)}
            className={`arrow-button cross scheme-2 tertiary flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 hover:border-[#0055ff] bg-black/40 backdrop-blur-md transition-all ${
              isInfoOpen ? 'border-[#0055ff]' : ''
            }`}
          >
            <span className="arrow relative w-3.5 h-3.5 block">
              <span className="item block w-3.5 h-0.5 bg-[#0055ff] absolute top-1.5 left-0" />
              <span className={`item block w-3.5 h-0.5 bg-[#0055ff] absolute top-1.5 left-0 transition-transform duration-300 ${isInfoOpen ? 'rotate-0' : 'rotate-90'}`} />
            </span>
            <span className="line w-6 h-0.5 bg-[#0055ff]" />
            <span className="text text-xs font-mono font-bold uppercase tracking-wider text-white">
              {isInfoOpen ? 'VIEW LESS' : 'VIEW MORE'}
            </span>
          </button>
        </div>

        {/* Banner Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          {/* Left Intro Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Monumental Outlined Typography */}
            <div className="slide-content">
              <span className="slide-title text-1 text-style-1 text-outline white-75 text-6xl sm:text-7xl md:text-8xl lg:text-9xl block leading-[0.9]">
                Tsuki
              </span>
              <div className="slide-description mt-3">
                <span className="text-2 text-style-3 text-italic white text-4xl sm:text-5xl md:text-6xl font-serif block">
                  is <mark className="animated-underline tertiary active">autonomous</mark> !
                </span>
                <div className="description gray mt-6 max-w-lg text-[#8a919e] font-sans text-base leading-relaxed">
                  <p>
                    TsukiFlow is an enterprise agentic operating system that orchestrates multi-agent swarms with sub-millisecond execution, zero token waste, and self-healing cloud infrastructure.
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="mt-8">
                  <a
                    href="#pricing"
                    className="button arrow-button next scheme-2 tertiary group inline-flex items-center gap-3"
                  >
                    <span className="arrow relative w-3 h-3 flex items-center">
                      <span className="item block w-2 h-0.5 bg-[#0055ff] rotate-45 origin-right absolute right-0" />
                      <span className="item block w-2 h-0.5 bg-[#0055ff] -rotate-45 origin-right absolute right-0" />
                    </span>
                    <span className="line w-8 h-0.5 bg-[#0055ff] group-hover:w-12 transition-all duration-300" />
                    <span className="text text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#0055ff] transition-colors">
                      GET STARTED
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Wrapper */}
          <div className="lg:col-span-6 relative">
            <div className="slide-image-wrapper relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src="/assets/framer/spiral-light.jpg"
                alt="TsukiFlow Autonomous Architecture"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Action Bar Trigger (Explore Features) */}
              <div className="slide-action absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <span className="slide-action-title font-sans text-xs sm:text-sm text-white/80 font-medium">
                  What are you waiting for?
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="slide-action-link animated-text text-xs sm:text-sm font-mono font-bold text-[#0055ff] hover:text-[#1fb6e8] uppercase tracking-wider underline underline-offset-4 transition-colors"
                >
                  Explore Features →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Slide-Info Drawer (6 Capability Cards) */}
        <div className={`shock-slide-info-drawer w-full max-w-7xl mx-auto mt-12 ${isInfoOpen ? 'open' : 'closed'}`}>
          <div className="p-8 rounded-3xl bg-[#1e1e24] border border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-2xl">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>Autonomous Triage</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                Sub-millisecond event parsing and multi-modal routing across Jira, Slack, and GitHub with automated PR dispatch.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>Code Synthesis Engine</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                Strict TypeScript Next.js 16 component generation with deterministic AST validation and instant Edge propagation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>Telemetry & Memory Engine</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                High-frequency clickstream and predictive churn modeling with zero-latency vector memory.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>V8 Edge Isolates</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                Lightweight micro-VM isolates executing untrusted code with cryptographic guardrails and sub-5ms cold starts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>Self-Healing Mesh</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                Automated regression triage, runtime health checks, and seamless failure recovery without human downtime.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0055ff]/40 transition-colors">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center justify-between">
                <span>Multi-Agent Swarms</span>
                <span className="text-[#0055ff]">→</span>
              </h3>
              <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                Coordinated multi-agent decision networks scaling horizontally across 12 global edge regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. GALLERY & RADIAL PROGRESS BAR SECTION                             */}
      {/* ==================================================================== */}
      <section id="gallery-progress" className="shock-section pt-24 pb-28 bg-[#000000] border-t border-white/[0.06] relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 4 Cols: 2x2 Floating Lightbox Gallery */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: '/assets/framer/gallery-1.jpg', label: 'Telemetry Visual' },
                  { src: '/assets/framer/gallery-2.jpg', label: 'Agent Mesh' },
                  { src: '/assets/framer/gallery-3.jpg', label: 'Code Isolate' },
                  { src: '/assets/framer/gallery-4.jpg', label: 'Neural Core' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(item.src)}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 group hover:border-[#0055ff] transition-all duration-300 shadow-lg text-left"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover p-1 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold text-white/70 bg-black/60 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      zoom +
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right 8 Cols: Outlined Heading & 3 Radial Progress Bars */}
            <div className="lg:col-span-7 lg:pl-6 space-y-10">
              <div className="basic-intro">
                <h2 className="title text-style-5 text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.05]">
                  <span className="text-1 text-outline white-75 block">We seek </span>
                  <span className="text-2 text-italic white font-serif block mt-1">
                    the <mark className="animated-underline tertiary active">extraordinary</mark>.
                  </span>
                </h2>
                <div className="description gray mt-6 font-sans text-base text-[#8a919e] leading-relaxed max-w-xl">
                  <p>
                    We provide autonomous intelligence to ensure human insights work seamlessly with code, cloud infrastructure, and enterprise operations, with guaranteed sub-millisecond execution.
                  </p>
                </div>
              </div>

              {/* 3 Radial Circular Progress Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                {/* Progress 1: Autonomous Triage (100%) */}
                <div className="radial-progress-wrapper">
                  <div className="radial-progress-circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" className="circle-bg" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        className="circle-bar"
                        strokeDasharray={314.15}
                        strokeDashoffset={radialAnimated ? 0 : 314.15}
                      />
                    </svg>
                    <span className="counter-text">100%</span>
                  </div>
                  <h3 className="title text-style-11 font-display font-bold text-sm uppercase tracking-wider text-white mt-4">
                    Autonomous Triage
                  </h3>
                </div>

                {/* Progress 2: Code Accuracy (87%) */}
                <div className="radial-progress-wrapper">
                  <div className="radial-progress-circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" className="circle-bg" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        className="circle-bar"
                        strokeDasharray={314.15}
                        strokeDashoffset={radialAnimated ? 314.15 * (1 - 0.87) : 314.15}
                      />
                    </svg>
                    <span className="counter-text">87%</span>
                  </div>
                  <h3 className="title text-style-11 font-display font-bold text-sm uppercase tracking-wider text-white mt-4">
                    Synthesis Accuracy
                  </h3>
                </div>

                {/* Progress 3: Workflow Velocity (92%) */}
                <div className="radial-progress-wrapper">
                  <div className="radial-progress-circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" className="circle-bg" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        className="circle-bar"
                        strokeDasharray={314.15}
                        strokeDashoffset={radialAnimated ? 314.15 * (1 - 0.92) : 314.15}
                      />
                    </svg>
                    <span className="counter-text">92%</span>
                  </div>
                  <h3 className="title text-style-11 font-display font-bold text-sm uppercase tracking-wider text-white mt-4">
                    Execution Velocity
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. FULL-BLEED VIDEO BANNER                                           */}
      {/* ==================================================================== */}
      <section className="shock-section has-overlay relative w-full h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Full-bleed Looping Video */}
        <div className="image-wrapper absolute inset-0 z-0">
          <video
            className="video w-full h-full object-cover"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/assets/framer/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Black-50 */}
        <div className="overlay absolute inset-0 bg-black/60 z-10" />

        {/* Content Wrapper */}
        <div className="content-wrapper relative z-20 text-center max-w-4xl mx-auto px-6 space-y-8">
          <div className="basic-intro">
            <h2 className="title text-style-5 text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight">
              <span className="text-1 text-outline white-75 block">A pure place </span>
              <span className="text-2 text-italic white font-serif block mt-1">
                to breathe <mark className="animated-underline tertiary">good things</mark>.
              </span>
            </h2>
            <div className="description text-white/70 font-sans text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              <p>
                Our mission is to give our customers products that will transform the way people see the world. Turning an idea into something that works is what moves us.
              </p>
            </div>
          </div>

          {/* Button: Know More */}
          <div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="shock-btn-outline group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/30 text-white font-sans text-sm font-semibold tracking-wider hover:bg-[#0055ff] hover:border-[#0055ff] transition-all duration-300"
            >
              <span>Know More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. PRICING TABLE WITH PLAN SWITCHER (home-6.html Pricing)           */}
      {/* ==================================================================== */}
      <section id="pricing" className="shock-section pt-24 pb-28 bg-[#000000] border-t border-white/[0.06] relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Intro */}
          <div className="basic-intro mb-16 text-center space-y-6">
            <h2 className="title text-style-5 text-4xl sm:text-5xl md:text-6xl font-display font-black">
              <span className="text-1 text-outline white-75 block sm:inline">Choose your </span>
              <span className="text-2 text-italic white font-serif block sm:inline">
                new <mark className="animated-underline tertiary">marketing plan</mark>.
              </span>
            </h2>

            {/* Plan Switcher Toggle */}
            <div className="description flex items-center justify-center pt-2">
              <div className="flex items-center gap-4 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
                <span className={`text-xs font-mono font-bold tracking-wider transition-colors ${!isMonthly ? 'text-[#0055ff]' : 'text-white/60'}`}>
                  Annually <span className="text-[10px] bg-[#0055ff]/20 text-[#0055ff] px-2 py-0.5 rounded-full ml-1">Save 30%</span>
                </span>

                <button
                  onClick={() => setIsMonthly(!isMonthly)}
                  className="w-14 h-7 rounded-full bg-white/15 p-1 relative flex items-center transition-colors focus:outline-none"
                  aria-label="Toggle Billing Cycle"
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-[#0055ff] shadow-md transition-transform duration-300 ${
                      isMonthly ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>

                <span className={`text-xs font-mono font-bold tracking-wider transition-colors ${isMonthly ? 'text-[#0055ff]' : 'text-white/60'}`}>
                  Monthly
                </span>
              </div>
            </div>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: BASIC */}
            <div className="shock-card-outline flex flex-col justify-between">
              <div className="card-overlay-glow" />
              <div>
                <div className="card-header pb-6 text-center border-b border-white/10">
                  <h3 className="title font-display font-black text-sm uppercase tracking-[0.2em] text-white">
                    BASIC
                  </h3>
                  <div className="price-wrapper mt-4 flex items-baseline justify-center">
                    <span className="currency text-outline gray-75 text-2xl font-bold mr-1">$</span>
                    <span className="price font-display font-black text-5xl sm:text-6xl text-[#0055ff]">
                      {isMonthly ? '24' : '16'}
                    </span>
                    <span className="billing text-outline gray-75 text-sm font-mono ml-2">/mo</span>
                  </div>
                </div>

                <div className="card-body py-8">
                  <ul className="checklist space-y-4 font-sans text-sm text-white/80">
                    <li className="flex items-center justify-between">
                      <span>3 Amazing things</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Funny videos to watch</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Freedom to navigate</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between text-white/35">
                      <span>Can bring the family</span>
                      <svg className="w-4 h-4 text-white/35" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="368" y1="368" x2="144" y2="144" />
                        <line x1="368" y1="144" x2="144" y2="368" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between text-white/35">
                      <span>Unlimited support</span>
                      <svg className="w-4 h-4 text-white/35" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="368" y1="368" x2="144" y2="144" />
                        <line x1="368" y1="144" x2="144" y2="368" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="arrow-button next scheme-2 tertiary group inline-flex items-center gap-3"
                >
                  <span className="arrow relative w-3 h-3 flex items-center">
                    <span className="item block w-2 h-0.5 bg-[#0055ff] rotate-45 origin-right absolute right-0" />
                    <span className="item block w-2 h-0.5 bg-[#0055ff] -rotate-45 origin-right absolute right-0" />
                  </span>
                  <span className="line w-8 h-0.5 bg-[#0055ff] group-hover:w-12 transition-all duration-300" />
                  <span className="text text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#0055ff] transition-colors">
                    GET STARTED
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2: STANDARD (Most Popular) */}
            <div className="shock-card-outline flex flex-col justify-between border-[#0055ff]/40 shadow-[0_0_30px_rgba(0,85,255,0.15)] relative">
              <div className="card-overlay-glow !opacity-100" />
              
              {/* Vertical Most Popular Ribbon */}
              <span className="label-vertical-ribbon">
                <span className="line" />
                <span>Most Popular</span>
              </span>

              <div>
                <div className="card-header pb-6 text-center border-b border-white/10">
                  <h3 className="title font-display font-black text-sm uppercase tracking-[0.2em] text-white">
                    STANDARD
                  </h3>
                  <div className="price-wrapper mt-4 flex items-baseline justify-center">
                    <span className="currency text-outline gray-75 text-2xl font-bold mr-1">$</span>
                    <span className="price font-display font-black text-5xl sm:text-6xl text-[#0055ff]">
                      {isMonthly ? '39' : '28'}
                    </span>
                    <span className="billing text-outline gray-75 text-sm font-mono ml-2">/mo</span>
                  </div>
                </div>

                <div className="card-body py-8">
                  <ul className="checklist space-y-4 font-sans text-sm text-white/80">
                    <li className="flex items-center justify-between">
                      <span>15 Amazing things</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Funny videos to watch</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Freedom to navigate</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Can bring the family</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between text-white/35">
                      <span>Unlimited support</span>
                      <svg className="w-4 h-4 text-white/35" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="368" y1="368" x2="144" y2="144" />
                        <line x1="368" y1="144" x2="144" y2="368" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="arrow-button next scheme-2 tertiary group inline-flex items-center gap-3"
                >
                  <span className="arrow relative w-3 h-3 flex items-center">
                    <span className="item block w-2 h-0.5 bg-[#0055ff] rotate-45 origin-right absolute right-0" />
                    <span className="item block w-2 h-0.5 bg-[#0055ff] -rotate-45 origin-right absolute right-0" />
                  </span>
                  <span className="line w-8 h-0.5 bg-[#0055ff] group-hover:w-12 transition-all duration-300" />
                  <span className="text text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#0055ff] transition-colors">
                    GET STARTED
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3: PREMIUM */}
            <div className="shock-card-outline flex flex-col justify-between">
              <div className="card-overlay-glow" />
              <div>
                <div className="card-header pb-6 text-center border-b border-white/10">
                  <h3 className="title font-display font-black text-sm uppercase tracking-[0.2em] text-white">
                    PREMIUM
                  </h3>
                  <div className="price-wrapper mt-4 flex items-baseline justify-center">
                    <span className="currency text-outline gray-75 text-2xl font-bold mr-1">$</span>
                    <span className="price font-display font-black text-5xl sm:text-6xl text-[#0055ff]">
                      {isMonthly ? '60' : '46'}
                    </span>
                    <span className="billing text-outline gray-75 text-sm font-mono ml-2">/mo</span>
                  </div>
                </div>

                <div className="card-body py-8">
                  <ul className="checklist space-y-4 font-sans text-sm text-white/80">
                    <li className="flex items-center justify-between">
                      <span>100 Amazing things</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Funny videos to watch</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Freedom to navigate</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Can bring the family</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Unlimited support</span>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="416 128 192 384 96 288" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="arrow-button next scheme-2 tertiary group inline-flex items-center gap-3"
                >
                  <span className="arrow relative w-3 h-3 flex items-center">
                    <span className="item block w-2 h-0.5 bg-[#0055ff] rotate-45 origin-right absolute right-0" />
                    <span className="item block w-2 h-0.5 bg-[#0055ff] -rotate-45 origin-right absolute right-0" />
                  </span>
                  <span className="line w-8 h-0.5 bg-[#0055ff] group-hover:w-12 transition-all duration-300" />
                  <span className="text text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#0055ff] transition-colors">
                    GET STARTED
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. PARALLAX NEWSLETTER / TELEMETRY DISPATCH (home-6.html Form)       */}
      {/* ==================================================================== */}
      <section
        className="shock-section has-overlay py-28 relative overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/framer/about-laptop.jpg')" }}
      >
        {/* Overlay Black-75 */}
        <div className="overlay absolute inset-0 bg-black/80 z-10" />

        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Intro */}
            <div className="lg:col-span-6 space-y-6">
              <div className="side-intro">
                <h2 className="title text-style-5 text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight">
                  <span className="text-1 text-outline white-75 block">Subscribe now</span>
                  <span className="text-2 text-italic white font-serif block mt-1">
                    to our <mark className="animated-underline tertiary">newsletter</mark> !
                  </span>
                </h2>
                <div className="description gray text-[#8a919e] font-sans text-base max-w-lg mt-6 leading-relaxed">
                  <p>
                    Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Area */}
            <div className="lg:col-span-6">
              <div className="form-area p-8 sm:p-10 rounded-3xl bg-[#1e1e24]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
                <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="shock-form-floating">
                      <input
                        type="text"
                        name="name"
                        id="InputFloatingName"
                        required
                        placeholder=" "
                      />
                      <label htmlFor="InputFloatingName">Name</label>
                    </div>

                    <div className="shock-form-floating">
                      <input
                        type="email"
                        name="email"
                        id="InputFloatingEmail"
                        required
                        placeholder=" "
                      />
                      <label htmlFor="InputFloatingEmail">Email</label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="InputCheckbox"
                      required
                      className="w-4 h-4 rounded bg-white/10 border-white/30 text-[#0055ff] focus:ring-[#0055ff]"
                    />
                    <label htmlFor="InputCheckbox" className="font-sans text-xs text-white/70">
                      I agree to the <span className="underline hover:text-white cursor-pointer">terms of use</span>.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="arrow-button next scheme-2 tertiary group inline-flex items-center gap-3"
                    >
                      <span className="arrow relative w-3 h-3 flex items-center">
                        <span className="item block w-2 h-0.5 bg-[#0055ff] rotate-45 origin-right absolute right-0" />
                        <span className="item block w-2 h-0.5 bg-[#0055ff] -rotate-45 origin-right absolute right-0" />
                      </span>
                      <span className="line w-8 h-0.5 bg-[#0055ff] group-hover:w-12 transition-all duration-300" />
                      <span className="text text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#0055ff] transition-colors">
                        SUBSCRIBE
                      </span>
                    </button>
                  </div>

                  {newsletterStatus === 'success' && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-sans text-xs font-medium animate-in fade-in">
                      Your message was sent successfully. Thanks!
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. BLOG & INSIGHTS GRID WITH LOAD MORE (home-6.html Blog)           */}
      {/* ==================================================================== */}
      <section id="insights" className="shock-section pt-24 pb-28 bg-[#000000] border-t border-white/[0.06] relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          
          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {INSIGHTS_DATA.slice(0, visibleCount).map((post) => (
              <div
                key={post.id}
                className="card parent relative rounded-2xl bg-[#1e1e24] border border-white/10 p-8 flex flex-col justify-between overflow-hidden group hover:border-[#0055ff]/50 transition-all duration-500 shadow-xl"
              >
                {/* Background Image Reveal on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url('${post.bgImage}')` }}
                />

                {/* Sticky Post Pin Icon */}
                <div className="absolute top-6 right-6 text-white/20 group-hover:text-[#0055ff] transition-colors text-sm">
                  📌
                </div>

                {/* Author Label */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-white/50">
                    <span>👤</span>
                    <span>By {post.author}</span>
                  </span>
                </div>

                <div className="card-body relative z-10 space-y-4 my-auto">
                  <h3 className="title text-style-11 font-display font-bold text-lg text-white leading-snug group-hover:text-[#0055ff] transition-colors">
                    {post.title}
                  </h3>
                  <p className="description font-sans text-xs text-[#8a919e] leading-relaxed line-clamp-3">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                  <div className="tag-cloud flex items-center gap-2">
                    <span className="badge outline px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/60 group-hover:border-[#0055ff] group-hover:text-white transition-colors">
                      {post.daysAgo}
                    </span>
                    <span className="badge outline px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/60 group-hover:border-[#0055ff] group-hover:text-white transition-colors">
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < INSIGHTS_DATA.length && (
            <div className="mt-16 text-center">
              <button
                id="load-more-button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, INSIGHTS_DATA.length))}
                className="shock-btn-outline group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/30 text-white font-sans text-sm font-semibold tracking-wider hover:bg-[#0055ff] hover:border-[#0055ff] transition-all duration-300"
              >
                <span>Load more</span>
                <span className="group-hover:rotate-180 transition-transform duration-500">🔄</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. DESKTOP SIDE WIDGETS (home-6.html Side Widgets)                   */}
      {/* ==================================================================== */}
      
      {/* Left Side Widget: Social Icons & Line */}
      <div className="shock-side-widget to-left hidden xl:flex">
        <div className="flex flex-col items-center gap-4 text-white text-xs font-mono">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#0055ff] transition-colors">
            fb
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0055ff] transition-colors">
            tw
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0055ff] transition-colors">
            in
          </a>
          <div className="widget-line" />
        </div>
      </div>

      {/* Right Side Widget: Scroll to Top */}
      <div className="shock-side-widget to-right hidden xl:flex">
        <button
          onClick={scrollToTop}
          className="scroll-top-text flex items-center gap-2 group cursor-pointer"
        >
          <span>Scroll to top</span>
          <span className="rotate-90 group-hover:-translate-y-1 transition-transform">→</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 9. SHOCK FOOTER (home-6.html Footer)                                 */}
      {/* ==================================================================== */}
      <footer id="footer" className="shock-footer scheme-1 tertiary bg-[#1e1e24] border-t border-white/10 text-white pt-16 pb-8">
        {/* Top Bar with Direct Contacts & Brand */}
        <div className="top-bar border-b border-white/10 pb-12 mb-12">
          <div className="container max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              
              {/* Phone */}
              <div className="text-sm font-sans">
                <a href="tel:+19912345678" className="inline-flex items-center gap-2 text-white/80 hover:text-[#0055ff] transition-colors font-bold">
                  <span>📞</span>
                  <span>+1 (99) 1234 5678</span>
                </a>
              </div>

              {/* Brand Logo Center */}
              <div>
                <Link href="/" className="inline-flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded bg-[#0055ff] flex items-center justify-center font-display font-black text-white text-xs">
                    T
                  </div>
                  <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#0055ff] transition-colors">
                    TSUKIFLOW
                  </span>
                </Link>
              </div>

              {/* Social Icons List */}
              <div className="flex items-center justify-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all text-xs">
                  f
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all text-xs">
                  𝕏
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all text-xs">
                  in
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all text-xs">
                  wa
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* 3-Column Navigation Grid */}
        <div className="container max-w-7xl mx-auto px-6 md:px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <h6 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h6>
              <ul className="space-y-2 font-sans text-xs text-white/60">
                <li><Link href="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Client Projects</Link></li>
                <li><Link href="/tsukiflow" className="hover:text-white transition-colors">TsukiFlow Platform</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h6 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Capabilities</h6>
              <ul className="space-y-2 font-sans text-xs text-white/60">
                <li className="hover:text-white cursor-pointer transition-colors">Autonomous Triage</li>
                <li className="hover:text-white cursor-pointer transition-colors">Code Synthesis</li>
                <li className="hover:text-white cursor-pointer transition-colors">Edge Isolates</li>
                <li className="hover:text-white cursor-pointer transition-colors">Deterministic Guardrails</li>
                <li className="hover:text-white cursor-pointer transition-colors">Telemetry Streaming</li>
              </ul>
            </div>

            <div>
              <h6 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Architecture</h6>
              <ul className="space-y-2 font-sans text-xs text-white/60">
                <li className="hover:text-white cursor-pointer transition-colors">V8 Micro-VM Runtimes</li>
                <li className="hover:text-white cursor-pointer transition-colors">60fps All-Intra Video Engines</li>
                <li className="hover:text-white cursor-pointer transition-colors">Next.js 16 Edge Clusters</li>
                <li className="hover:text-white cursor-pointer transition-colors">Zero-Cold-Start Isolates</li>
                <li className="hover:text-white cursor-pointer transition-colors">Multi-Agent Swarm Topologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="bottom-bar border-t border-white/10 pt-6 text-center text-xs text-white/40 font-sans">
          <div className="container max-w-7xl mx-auto px-6">
            © 2026 - All rights reserved. The <span className="text-white/70">TsukiFlow Platform</span> is developed and maintained by{' '}
            <Link href="/" className="text-white hover:text-[#0055ff] transition-colors underline">
              Hybrid Studioz
            </Link>.
          </div>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* 10. INTERACTIVE MODAL (#modal)                                       */}
      {/* ==================================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#1e1e24] border border-white/15 p-8 sm:p-10 shadow-2xl space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-xl font-bold w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#0055ff] hover:text-[#0055ff] transition-all"
            >
              ✕
            </button>

            <div className="basic-intro">
              <h2 className="title text-style-5 text-2xl sm:text-3xl font-display font-black leading-tight">
                <span className="text-1 text-outline white-75 block">How can </span>
                <span className="text-2 text-italic white font-serif block mt-1">
                  we <mark className="animated-underline tertiary">help you</mark>?
                </span>
              </h2>
              <p className="description text-xs sm:text-sm text-[#8a919e] mt-2">
                Please fill in the form below and our engineering leads will get back to you shortly. 🥳
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="shock-form-floating">
                  <input
                    type="text"
                    id="InputModalName"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="InputModalName">Name</label>
                </div>

                <div className="shock-form-floating">
                  <input
                    type="email"
                    id="InputModalEmail"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="InputModalEmail">Email</label>
                </div>
              </div>

              <div className="shock-form-floating">
                <textarea
                  id="InputModalMessage"
                  rows={3}
                  placeholder=" "
                />
                <label htmlFor="InputModalMessage">Message (optional)</label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded bg-white/10 text-[#0055ff]" />
                    <span>Receive platform updates by email.</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer">
                    <input type="checkbox" className="rounded bg-white/10 text-[#0055ff]" />
                    <span>Receive urgent incident telemetry by SMS.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="shock-btn-outline self-end group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-white font-sans text-xs font-semibold tracking-wider hover:bg-[#0055ff] hover:border-[#0055ff] transition-all"
                >
                  <span>Send</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {modalStatus === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-sans text-xs font-medium text-center">
                  Your inquiry has been dispatched to the TsukiFlow team.
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 11. LIGHTBOX MODAL FOR GALLERY IMAGES                                */}
      {/* ==================================================================== */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Lightbox Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/60 w-10 h-10 rounded-full flex items-center justify-center border border-white/20"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 12. LIGHTBOX VIDEO MODAL FOR "KNOW MORE"                             */}
      {/* ==================================================================== */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black aspect-video"
          >
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
            >
              <source src="/assets/framer/hero-loop.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/60 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
