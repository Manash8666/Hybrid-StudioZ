'use client';

// ==============================================================================
// HYBRID STUDIOZ — EXTENDED DARK FOOTER
// Popular search tags, newsletter subscription, global nodes, and live status
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/content/site';

import HybridLogo from './HybridLogo';

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (pathname === '/tsukiflow') {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#02040a] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background radial cobalt glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,85,255,0.18)_0%,transparent_70%)] blur-2xl" />

      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-flex items-center select-none">
              <HybridLogo tone="dark" size="md" />
            </Link>

            <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
              Made with love and passion- Hybrid Studioz
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="relative flex items-center rounded-2xl bg-white/[0.04] border border-white/[0.08] p-1.5 focus-within:border-[#0055ff] transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email...."
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-[#8a919e] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-2.5 rounded-xl bg-[#0055ff] text-white font-sans text-xs font-semibold hover:bg-[#1a66ff] shadow-[0_4px_16px_rgba(0,85,255,0.35)] transition-all"
                >
                  Contact Us
                </button>
              </div>
              {subscribed && (
                <span className="block mt-2 font-sans text-xs text-emerald-400">
                  ✓ Thank you! We have received your email.
                </span>
              )}
            </form>
          </div>

          {/* Quick Routes Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-sm font-semibold text-white">
              Pages
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
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tsukiflow" className="hover:text-white transition-colors">
                  TsukiFlow
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-sm font-semibold text-white">
              Social
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#8a919e]">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://framer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Framer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Regional Authority Hubs (International AEO & Crawl Equity) */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <h5 className="font-mono text-xs uppercase tracking-wider text-[#0055ff] font-semibold mb-4">
            Global Engineering & Regional Authority Hubs
          </h5>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans text-[#8a919e]">
            <Link href="/regions/india" className="hover:text-white transition-colors">
              🇮🇳 India (Bengaluru, Ahmedabad, Mumbai)
            </Link>
            <Link href="/regions/japan" className="hover:text-white transition-colors">
              🇯🇵 Japan (Tokyo, Osaka, Fukuoka — TsukiFlow)
            </Link>
            <Link href="/regions/europe-west" className="hover:text-white transition-colors">
              🇪🇺 Western Europe (Paris, Berlin, Amsterdam, Milan)
            </Link>
            <Link href="/regions/europe-med-east" className="hover:text-white transition-colors">
              🇲🇹 Mediterranean & CEE (Malta, Greece, Romania, Poland)
            </Link>
            <Link href="/regions/oceania" className="hover:text-white transition-colors">
              🇦🇺 Oceania (Sydney, Melbourne, Auckland)
            </Link>
            <Link href="/regions/africa" className="hover:text-white transition-colors">
              🌍 Pan-Africa (Lagos, Nairobi, Cape Town, Cairo)
            </Link>
            <Link href="/regions/south-america" className="hover:text-white transition-colors">
              🇧🇷 South America (São Paulo, Buenos Aires, Bogotá)
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#8a919e]">
          <p>© 2024 Hybrid Studioz</p>
          <div className="flex items-center gap-6">
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
