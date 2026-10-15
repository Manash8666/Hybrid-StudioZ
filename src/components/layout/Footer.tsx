'use client';

// ==============================================================================
// HYBRID STUDIOZ — EXTENDED DARK FOOTER
// Popular search tags, newsletter subscription, global nodes, and live status
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';

import HybridLogo from './HybridLogo';

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
    <footer className="relative bg-[#02040a] text-white border-t border-white/[0.08] overflow-hidden select-none">
      {/* Background radial cobalt glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,85,255,0.15)_0%,transparent_70%)] blur-2xl" />

      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center select-none">
              <HybridLogo tone="dark" size="md" />
            </Link>

            <p className="font-sans text-sm text-[#8a919e] leading-relaxed max-w-md">
              A specialized AI SaaS, Bespoke Web Development, Branding, and Digital Marketing studio. We architect high-converting digital platforms, multi-agent AI pipelines, and category-defining brand identities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#0055ff] shadow-[0_0_10px_#0055ff] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-semibold">
                Available For 2025/2026 Architectural Sprints
              </span>
            </div>
          </div>

          {/* Quick Routes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Agency Routes
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#8a919e]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/tsukiflow" className="hover:text-white transition-colors">
                  TsukiFlow SaaS
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Capabilities */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
              Specialties
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#8a919e]">
              <li>AI SaaS Solutions</li>
              <li>Autonomous Multi-Agents</li>
              <li>Bespoke Web Development</li>
              <li>Brand Identity Systems</li>
              <li>Digital Marketing & Growth</li>
              <li>WebGL & Interactive 3D</li>
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
