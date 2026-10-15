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

export default function Header() {
  const pathname = usePathname();
  const [navTone, setNavTone] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Read dynamic nav tone set by CinematicSection or ScrollSequence
      const tone = document.documentElement.getAttribute('data-nav-tone') as 'dark' | 'light';
      if (tone) {
        setNavTone(tone);
      } else {
        // Default based on current route
        setNavTone(pathname === '/' ? 'dark' : 'dark');
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
    { label: 'Film', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Insights', href: '/insights' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const isLight = navTone === 'light';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? 'bg-[#eef2f7]/85 backdrop-blur-xl border-b border-black/5 py-3.5 shadow-sm'
              : 'bg-[#070913]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Brand Logo Lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            aria-label="Hybrid Studioz Home"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#1fb6e8] via-[#6f4bff] to-[#e9449a] p-[1.5px] shadow-lg shadow-[#6f4bff]/25 transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#070913]">
                <span className="font-display text-xs font-black text-white">H</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-display text-base font-black uppercase tracking-tight transition-colors ${
                  isLight ? 'text-[#0b1020]' : 'text-white'
                }`}
              >
                Hybrid <span className="text-[#ff5e1a]">Studioz</span>
              </span>
              <span
                className={`font-mono text-[9px] uppercase tracking-widest leading-none ${
                  isLight ? 'text-[#0b1020]/50' : 'text-white/40'
                }`}
              >
                Creative Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 border backdrop-blur-md transition-colors bg-white/5 border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full font-display text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#070913] shadow-md'
                      : isLight
                      ? 'text-[#0b1020]/70 hover:text-[#0b1020] hover:bg-black/5'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Hub & Grid Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-[#ff5e1a]/25 bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] hover:opacity-90 transition-opacity"
            >
              <span>Start a Project</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Shock Style Grid Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                isLight
                  ? 'border-black/10 bg-black/5 text-[#0b1020] hover:bg-black/10'
                  : 'border-white/15 bg-white/5 text-white hover:bg-white/15'
              }`}
              aria-label="Toggle Fullscreen Grid Menu"
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
