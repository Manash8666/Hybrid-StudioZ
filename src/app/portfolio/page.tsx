'use client';

// ==============================================================================
// HYBRID STUDIOZ — /portfolio PAGE (EXACT FRAMER SAAS IMPLEMENTATION)
// Extracted directly from hybridstudioz.framer.ai screenshots:
// Exact Obsidian & Electric Cobalt palette, radial mesh glow, 2025 pill badge,
// "Check Out Some / Extra-Ordinary Work." typography, and 2-column cards.
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI SaaS & Architecture', 'Digital Creativity', 'Brand Identity', 'Digital Marketing'];

  const filteredProjects = selectedCategory === 'All'
    ? SITE_CONFIG.projects
    : SITE_CONFIG.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white">
      {/* ==================================================================== */}
      {/* HERO SECTION — EXACT RECONSTRUCTION FROM SCREENSHOT                   */}
      {/* ==================================================================== */}
      <section className="relative w-full hybrid-hero-bg pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-12 md:px-20 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Exact Screenshot Eyebrow Badge */}
          <EyebrowBadge
            year="2025"
            label="Explore Our Portfolio"
            className="mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
          />

          {/* Exact Headline from Screenshot */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.12]">
            Check Out <span className="text-silver-fade font-normal">Some</span>
            <span className="block mt-1 font-semibold text-white">
              Extra-Ordinary <span className="text-silver-fade font-normal">Work.</span>
            </span>
          </h1>

          {/* Exact Subcopy from Screenshot */}
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            From startups to established brands, we create tailored solutions that drive success and make a real impact.
          </p>

          {/* Exact CTA Button from Screenshot: Get Experience */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-xl bg-[#0055ff] text-white font-sans text-sm font-semibold hover:bg-[#1a66ff] shadow-[0_8px_30px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Get Experience</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FILTERABLE CATEGORY PILLS                                            */}
      {/* ==================================================================== */}
      <section className="relative w-full py-8 px-6 sm:px-12 md:px-20 border-t border-b border-white/[0.06] bg-[#05070e]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0055ff] text-white shadow-[0_0_15px_rgba(0,85,255,0.4)]'
                    : 'bg-white/[0.04] text-[#8a919e] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-[#8a919e]">
            Showing {filteredProjects.length} of {SITE_CONFIG.projects.length} Works
          </span>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2-COLUMN PORTFOLIO CARDS — EXACT RECONSTRUCTION FROM SCREENSHOT       */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-[24px] bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-80" />

                  {/* Year Tag Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">
                    {project.year}
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0055ff]">
                        {project.category}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="font-mono text-[11px] text-[#8a919e]">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2 group-hover:text-[#0055ff] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm text-[#8a919e] line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Metric Highlights */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.06]">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="block font-display text-lg font-bold text-white">
                          {m.value}
                        </span>
                        <span className="block font-mono text-[10px] text-[#8a919e] uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Direct Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="Custom AI SaaS & Web Development"
      />
    </div>
  );
}
