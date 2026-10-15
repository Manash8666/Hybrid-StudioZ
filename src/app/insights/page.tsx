'use client';

// ==============================================================================
// HYBRID STUDIOZ — EDITORIAL INSIGHTS (BLOG-10)
// Touch carousel + typed prompt search hub + filterable technical articles
// ==============================================================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SuperHeading from '@/components/shock/SuperHeading';
import FeaturedCarousel from '@/components/shock/FeaturedCarousel';
import { SITE_CONFIG } from '@/content/site';

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Rotating typed prompt animation
  const promptPhrases = [
    'Exploring All-Intra 60fps video seeking...',
    'Synchronizing Lenis & GSAP single-clock...',
    'Deploying autonomous AI agents into Next.js...',
    'Building high-conversion luxury 3D flagships...',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % promptPhrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [promptPhrases.length]);

  const popularTags = ['#WebGL', '#AIWorkflows', '#DesignSystems', '#NextJS', '#BrandStrategy', '#MotionEngine'];

  const filteredPosts = SITE_CONFIG.blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  const featuredPosts = SITE_CONFIG.blogPosts.filter((p) => p.featured);

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12 select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/3 w-[70vw] h-[400px] bg-gradient-to-b from-[#e9449a]/10 via-[#6f4bff]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#e9449a] font-bold">Editorial Insights</span>
        </nav>

        {/* Hero Super Heading */}
        <div className="mb-12">
          <SuperHeading
            eyebrow="Architectural Dispatches // 2026"
            title="Insights &"
            highlight="Engineering"
            subtitle="Deep dives into zero-lag motion pipelines, autonomous AI agents, spatial typography, and high-conversion design systems."
            size="lg"
          />
        </div>

        {/* Typed Search Bar & Tag Pills (Shock blog-10 style) */}
        <div className="mb-16 rounded-3xl bg-[#0b1020] border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={promptPhrases[phraseIndex]}
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

            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 rounded-xl bg-white/10 font-mono text-xs text-white/60 hover:text-white"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a] mr-2">
              Filter by Tag:
            </span>
            {popularTags.map((tag) => {
              const isSelected = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(isSelected ? null : tag)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] text-white shadow-md'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Touch Carousel */}
        {!searchTerm && !activeTag && (
          <div className="mb-24">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
                Featured Architecture Reports
              </span>
              <span className="font-mono text-xs text-white/40">
                Touch / Swipe Interactive
              </span>
            </div>

            <FeaturedCarousel posts={featuredPosts} />
          </div>
        )}

        {/* Editorial Article Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
              All Editorial Dispatches ({filteredPosts.length})
            </h2>
            <span className="font-mono text-xs text-white/40">
              Live Filtered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-between rounded-3xl bg-[#0b1020] border border-white/10 p-6 sm:p-8 hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1fb6e8]">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      {post.publishedAt}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-[#ff5e1a] transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/60">{post.readingTime}</span>
                    <span className="text-[#ff5e1a] font-bold group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
