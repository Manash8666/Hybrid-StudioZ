'use client';

// ==============================================================================
// HYBRID STUDIOZ — FAQ KNOWLEDGE BASE (PAGE-FAQ-2)
// Dark Creative Stunning Accordion with instant search and default open state
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import SuperHeading from '@/components/shock/SuperHeading';
import DarkAccordion from '@/components/shock/DarkAccordion';
import { SITE_CONFIG } from '@/content/site';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Architecture & Tech Stack',
    'Process & Timelines',
    'Pricing & Retainers',
    'AI & IP',
  ];

  const filteredFaqs = SITE_CONFIG.faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      selectedCategory === 'All' ? true : faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12 select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 right-1/3 w-[60vw] h-[400px] bg-gradient-to-b from-[#1fb6e8]/10 via-[#6f4bff]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ff5e1a] font-bold">Knowledge Base & FAQ</span>
        </nav>

        {/* Hero Super Heading */}
        <div className="mb-12">
          <SuperHeading
            eyebrow="Architectural Documentation // FAQ"
            title="Knowledge &"
            highlight="Inquiries"
            subtitle="Transparent explanations of our All-Intra video scrubbing engine, single-clock Lenis/GSAP synchronization, project timelines, and engagement tiers."
            size="lg"
          />
        </div>

        {/* Search Bar & Category Filter Row */}
        <div className="mb-12 rounded-3xl bg-[#0b1020] border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search architecture, pricing, video pipelines, or AI IP ownership..."
              className="w-full rounded-2xl bg-white/5 border border-white/15 px-5 py-4 pl-12 text-sm text-white placeholder-white/40 focus:border-[#ff5e1a] focus:outline-none transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 font-display text-xs font-black uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-[#070913] shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collapsible FAQ Drawer System */}
        <div className="mb-20">
          <DarkAccordion items={filteredFaqs} />
        </div>

        {/* Unanswered Questions CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1020] to-[#0f1424] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8] block mb-2">
              Have a Custom Technical Requirement?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
              Speak directly with our technical director.
            </h3>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 transition-opacity shrink-0"
          >
            Ask a Question →
          </Link>
        </div>
      </div>
    </div>
  );
}
