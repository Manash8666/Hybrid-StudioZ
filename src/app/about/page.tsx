'use client';

// ==============================================================================
// HYBRID STUDIOZ — /about PAGE (EXACT FRAMER SAAS IMPLEMENTATION)
// Extracted directly from hybridstudioz.framer.ai screenshots:
// Exact Obsidian & Electric Cobalt palette, radial mesh glow, 2025 pill badge,
// "Learn More About Us / Let's Deep Dive!" typography, and exact CTA buttons.
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'stack' | 'leadership'>('mission');

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white">
      {/* ==================================================================== */}
      {/* HERO SECTION — EXACT RECONSTRUCTION FROM SCREENSHOT                   */}
      {/* ==================================================================== */}
      <section className="relative w-full hybrid-hero-bg pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-12 md:px-20 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Exact Screenshot Eyebrow Badge */}
          <EyebrowBadge
            year="2025"
            label="Dig Deep About Us"
            className="mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
          />

          {/* Exact Headline from Screenshot */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.12]">
            Learn More About <span className="text-silver-fade font-normal">Us</span>
            <span className="block mt-1 font-semibold text-white">
              Let&apos;s Deep Dive!
            </span>
          </h1>

          {/* Exact Subcopy from Screenshot */}
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            Hybrid Studioz is your partner for innovative SaaS solutions, specializing in custom, scalable software that drives business growth.
          </p>

          {/* Exact CTA Buttons from Screenshot */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* High-Contrast Light Button: Mail Us */}
            <a
              href={`mailto:${SITE_CONFIG.brand.email}?subject=Inquiry%20from%20Hybrid%20Studioz`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f2f4f8] text-[#08090c] font-sans text-sm font-semibold hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Mail Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Dark Surface Pill Button: What is Hybrid Studioz? */}
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              <span>What is Hybrid Studioz?</span>
              <svg className="w-3.5 h-3.5 text-[#8a919e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4 CORE CAPABILITIES — AI SAAS, WEB DEV, BRANDING, DIGITAL MARKETING */}
      {/* ==================================================================== */}
      <section id="pillars" className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-3">
                Full-Stack Architecture // 04 Pillars
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                Engineering platforms with <br className="hidden sm:block" />
                <span className="text-silver-fade">compounding business impact.</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm sm:text-base text-[#8a919e] leading-relaxed">
              We bridge autonomous AI infrastructure, bespoke modern web software, iconic brand systems, and high-velocity digital marketing into one cohesive force.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1: AI SaaS Engineering */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055ff]">
                  01 // AI SaaS Solutions
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_10px_#0055ff]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                Autonomous Multi-Agent AI Software
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#8a919e] leading-relaxed mb-6">
                From self-orchestrating agent workforces to customized retrieval-augmented generation (RAG) engines, we design, build, and deploy production AI SaaS products that scale seamlessly.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {['Multi-Agent Orchestration', 'Custom LLM Pipelines', 'Autonomous Automation', 'Enterprise Compliance'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-sans text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: Bespoke Web Development */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055ff]">
                  02 // Web Development & Architecture
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_10px_#0055ff]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                High-Performance Web Platforms
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#8a919e] leading-relaxed mb-6">
                Engineered in Next.js 16, TypeScript, and WebGL, our bespoke web development guarantees sub-100ms render speeds, single-clock GSAP choreography, and fluid interactive 3D experiences.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {['Next.js App Router', 'TypeScript Strict', 'WebGL / Shaders', 'Sub-Millisecond Ticks'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-sans text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: Branding & Identity */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055ff]">
                  03 // Branding & Digital Creativity
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_10px_#0055ff]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                Iconic Brand Systems
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#8a919e] leading-relaxed mb-6">
                We craft unified visual identities that stand out in crowded SaaS markets. Comprehensive design token libraries, custom typography, micro-interactions, and spatial 3D brand marks.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {['Design Systems', 'Kinetic Typography', '3D Brand Assets', 'Design Tokens'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-sans text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 4: Digital Marketing & Growth */}
            <div className="group p-8 sm:p-10 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055ff]">
                  04 // Digital Marketing & Growth
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_10px_#0055ff]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                High-Conversion Acquisition Engines
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#8a919e] leading-relaxed mb-6">
                Product-led growth campaigns, high-converting interactive landing funnels, algorithmic SEO architecture, and telemetry analytics designed to turn initial traffic into recurring revenue.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {['Conversion Funnels', 'Programmatic SEO', 'Telemetry & Analytics', 'Growth Loops'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-sans text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* TECH STACK & EXECUTION MATRIX                                         */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#05070e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-3">
              Engineered For Scale
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              The Technology We Rely On
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Next.js 16', role: 'Full-Stack Web' },
              { name: 'TypeScript', role: 'Type Safety' },
              { name: 'OpenAI / Claude', role: 'Agentic Models' },
              { name: 'Tailwind CSS', role: 'Design Tokens' },
              { name: 'GSAP / Lenis', role: 'Smooth Motion' },
              { name: 'Supabase / Neon', role: 'Cloud Databases' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center flex flex-col items-center justify-center hover:border-white/20 transition-colors"
              >
                <span className="font-display font-semibold text-white text-base block mb-1">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] uppercase text-[#8a919e]">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CALL TO ACTION                                                 */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,85,255,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-3">
            Start Your Journey
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Ready to accelerate your <br />
            <span className="text-silver-fade">AI SaaS or web ecosystem?</span>
          </h2>
          <p className="mt-4 font-sans text-base text-[#8a919e] max-w-lg mx-auto">
            Book a discovery session with our technical leads to architect your next competitive edge.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
            >
              Get In Touch
            </button>
            <Link
              href="/portfolio"
              className="px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              Explore Our Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Direct Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="SaaS & Web Engineering"
      />
    </div>
  );
}
