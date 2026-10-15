'use client';

// ==============================================================================
// HYBRID STUDIOZ — EXTENDED DARK FOOTER
// Popular search tags, newsletter subscription, global nodes, and live status
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#070913] text-white border-t border-white/10 overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-gradient-to-t from-[#6f4bff]/10 via-[#1fb6e8]/5 to-transparent blur-3xl" />

      {/* Popular Searches Marquee / Tag Row */}
      <div className="border-b border-white/5 py-6 px-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a] mr-2">
              Popular Topics:
            </span>
            {SITE_CONFIG.footerSearches.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-[11px] text-white/60 hover:text-white hover:border-white/30 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070913]">
                  <span className="font-display text-sm font-black text-white">H</span>
                </div>
              </div>
              <span className="font-display text-xl font-black uppercase tracking-tight text-white">
                Hybrid <span className="text-[#ff5e1a]">Studioz</span>
              </span>
            </Link>

            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-md">
              A next-generation Creative Technology, AI Design, and WebGL Architecture studio. We engineer high-converting digital products, all-intra motion engines, and unforgettable brand systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Available For Q4 2026 Architectural Sprints
              </span>
            </div>
          </div>

          {/* Quick Routes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Agency Routes
            </h4>
            <ul className="space-y-2.5 font-display text-xs font-bold uppercase tracking-wider text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Cinematic Film
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Capabilities Matrix
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work (7)
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Editorial Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Capabilities */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Specialties
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/60">
              <li>All-Intra Video Scrubbing</li>
              <li>Three.js / WebGL Shaders</li>
              <li>Autonomous Multi-Agents</li>
              <li>Next.js 16 App Router</li>
              <li>Lighthouse 100 Architecture</li>
              <li>Single-Clock Time Sync</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Editorial Dispatches
            </h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Receive quarterly deep-dives into creative technology, video pipelines, and high-performance frontend architecture.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="architect@domain.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[#ff5e1a] focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] text-[10px] font-mono font-bold uppercase tracking-wider text-white"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <span className="block font-mono text-[10px] text-emerald-400">
                  ✓ Dispatch subscription confirmed.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/40 uppercase tracking-widest">
            © 2026 {SITE_CONFIG.brand.name}. All Rights Reserved. Engineered with Zero Cuts.
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] text-white/40 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Architecture</span>
            <span className="hover:text-white cursor-pointer transition-colors">WCAG 2.2 AAA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
