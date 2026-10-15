'use client';

// ==============================================================================
// HYBRID STUDIOZ — ADAPTIVE TONE HEADER & FULLSCREEN GRID MENU
// Dynamically adjusts contrast (light/dark) based on active scroll section
// ==============================================================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DirectModal from '../shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

import HybridLogo from './HybridLogo';

export default function Header() {
  const pathname = usePathname();
  const [navTone, setNavTone] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const tone = document.documentElement.getAttribute('data-nav-tone') as 'dark' | 'light';
      if (tone) {
        setNavTone(tone);
      } else {
        setNavTone('dark');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'TsukiFlow', href: '/tsukiflow' },
  ];

  const isLight = navTone === 'light';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? 'bg-[#eef2f7]/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm'
              : 'bg-[#02040a]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Brand Logo Lockup & 1px Vertical Divider */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group inline-flex items-center select-none"
              aria-label="Hybrid Studioz Home"
            >
              <HybridLogo tone={navTone} size="md" />
            </Link>

            <div
              className={`hidden lg:block h-6 w-px mx-6 transition-colors ${
                isLight ? 'bg-black/15' : 'bg-white/12'
              }`}
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg font-sans text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? isLight
                          ? 'text-[#0b1020] font-semibold bg-black/5'
                          : 'text-white font-semibold bg-white/[0.08]'
                        : isLight
                        ? 'text-[#0b1020]/70 hover:text-[#0b1020]'
                        : 'text-[#8a919e] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action Hub: Solid Electric Blue Button & Grid Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-sans text-sm font-semibold tracking-wide text-white bg-[#0055ff] hover:bg-[#1a66ff] shadow-[0_8px_30px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Mobile & Grid Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                isLight
                  ? 'border-black/10 bg-black/5 text-[#0b1020] hover:bg-black/10'
                  : 'border-white/15 bg-white/5 text-white hover:bg-white/15'
              }`}
              aria-label="Toggle Navigation Matrix"
            >
              <div className="grid grid-cols-2 gap-1 w-4 h-4">
                <span className={`block w-1.5 h-1.5 rounded-sm ${isLight ? 'bg-[#0b1020]' : 'bg-white'}`} />
                <span className="block w-1.5 h-1.5 rounded-sm bg-[#ff5e1a]" />
                <span className="block w-1.5 h-1.5 rounded-sm bg-[#1fb6e8]" />
                <span className={`block w-1.5 h-1.5 rounded-sm ${isLight ? 'bg-[#0b1020]' : 'bg-white'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Grid Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[900] flex flex-col bg-[#070913] text-white overflow-y-auto animate-in fade-in duration-300">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              Agency Navigation Matrix // 2026
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-8 py-12">
            {/* Primary Navigation Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-1"
                >
                  <span className="font-mono text-xs text-[#ff5e1a] font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#1fb6e8] group-hover:to-[#6f4bff] transition-all">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Studio Branches & Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 space-y-8">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a] mb-4">
                  Global Studio Nodes
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {SITE_CONFIG.branches.map((b) => (
                    <div key={b.city} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="block font-display text-base font-bold uppercase text-white">
                        {b.city}
                      </span>
                      <span className="block font-mono text-[10px] text-[#1fb6e8]">
                        {b.timezone}
                      </span>
                      <span className="block text-xs text-white/50 mt-1 font-sans">
                        {b.phone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 text-center block hover:opacity-90"
                >
                  Initiate Discovery Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Project Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
