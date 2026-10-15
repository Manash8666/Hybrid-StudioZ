'use client';

// ==============================================================================
// HYBRID STUDIOZ — WORK / PORTFOLIO (PORTFOLIO-7)
// Dynamic category filterable showcase featuring interactive Magnetic 3D tilt cards
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import SuperHeading from '@/components/shock/SuperHeading';
import MagneticCard from '@/components/shock/MagneticCard';
import FilterGrid from '@/components/shock/FilterGrid';
import { SITE_CONFIG } from '@/content/site';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SaaS & AI', 'Brand Identity', 'WebGL & Motion', 'eCommerce'];

  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === 'All') {
      acc[cat] = SITE_CONFIG.projects.length;
    } else {
      acc[cat] = SITE_CONFIG.projects.filter((p) => p.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const filteredProjects =
    activeCategory === 'All'
      ? SITE_CONFIG.projects
      : SITE_CONFIG.projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute top-20 right-1/4 w-[60vw] h-[400px] bg-gradient-to-b from-[#6f4bff]/10 via-[#e9449a]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1fb6e8] font-bold">Selected Case Studies</span>
        </nav>

        {/* Hero Super Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SuperHeading
            eyebrow="Portfolio Architecture // 2026"
            title="Selected"
            highlight="Client Works"
            subtitle="Explore our flagship collaborations across AI platforms, luxury hardware, spatial computing, and digital flagships."
            size="lg"
          />

          {/* Interactive Filter Pills */}
          <div className="md:mb-4">
            <FilterGrid
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={categoryCounts}
            />
          </div>
        </div>

        {/* Asymmetric Magnetic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => {
            // First item is given a 2-column span for asymmetric hero emphasis
            const isHeroCard = idx === 0 && activeCategory === 'All';

            return (
              <MagneticCard
                key={proj.slug}
                href={`/work/${proj.slug}`}
                image={proj.heroImage}
                title={proj.title}
                category={proj.category}
                year={proj.year}
                tagline={proj.tagline}
                className={isHeroCard ? 'md:col-span-2' : ''}
              />
            );
          })}
        </div>

        {/* Next Project Teaser Footer Banner */}
        <div className="mt-28 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0b1020] to-[#070913] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a] block mb-2">
              Next Engagement Window
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
              Ready to create your defining case study?
            </h3>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 transition-opacity shrink-0"
          >
            Initiate Project Brief →
          </Link>
        </div>
      </div>
    </div>
  );
}
