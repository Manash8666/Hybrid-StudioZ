'use client';

// ==============================================================================
// HYBRID STUDIOZ — /portfolio PAGE (100% EXACT FRAMER MIRROR)
// Reconstructed directly from hybridstudioz.framer.ai/portfolio
// Includes authentic Framer assets, typography, projects, FAQs, and CTA.
// ==============================================================================

import React, { useState } from 'react';
import Image from 'next/image';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const projects = [
    {
      title: 'Project Management Software',
      year: '2024',
      tag: 'Platform, User - Friendly',
      image: '/assets/framer/project-watch.jpg',
      description: 'Streamlined task allocation, real-time telemetry, and autonomous sprint tracking engineered for rapid-growth engineering teams.',
    },
    {
      title: 'Customized CRM System',
      year: '2025',
      tag: 'CRM',
      image: '/assets/framer/project-cap.jpg',
      description: 'End-to-end client lifecycle management, automated deal forecasting, and bespoke multi-system enterprise API integrations.',
    },
    {
      title: 'Data Analytics Platform',
      year: '2024',
      tag: 'Data Analytics Platform',
      image: '/assets/framer/project-spray.jpg',
      description: 'Sub-millisecond query streaming, high-velocity cloud data ingestion, and actionable predictive business intelligence dashboards.',
    },
  ];

  const faqs = [
    {
      q: 'What industries do we serve?',
      a: 'We serve a wide range of industries including eCommerce, Healthcare, Finance, Real Estate, Education, and Logistics. Our SaaS solutions are custom-built to address industry-specific workflows and compliance standards.',
    },
    {
      q: 'Can we customize your software solutions?',
      a: 'Yes, absolutely. Every solution we deliver is engineered from scratch or tailored modularly to fit your exact business logic, branding guidelines, and integration requirements.',
    },
    {
      q: 'What kind of support do we offer post-launch?',
      a: 'We provide continuous 24/7 monitoring, zero-downtime maintenance, proactive feature updates, security patches, and dedicated engineering channels.',
    },
    {
      q: 'How long does it take to develop a custom solution?',
      a: 'Typical MVP development ranges from 2 to 4 weeks, with full enterprise deployments spanning 6 to 12 weeks depending on scale and integrations.',
    },
    {
      q: 'What makes us different from other SaaS providers?',
      a: 'We bridge bleeding-edge AI multi-agent orchestration, ultra-performant modern web engineering (Next.js, WebGL), and bespoke high-conversion brand design under a single roof.',
    },
    {
      q: 'What is the pricing model for our solutions?',
      a: 'We offer transparent fixed-price tier packages (₹15K Starter, ₹30K Professional) as well as enterprise retainers tailored to custom scopes.',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white selection:bg-[#0055ff]/30 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center text-center">
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(0,85,255,0.22),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow Badge */}
          <EyebrowBadge
            year="2025"
            label="Explore Our Portfolio"
            className="mb-8"
          />

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            Check Out <span className="text-[#8a919e]">Some</span>
            <span className="block mt-1 font-semibold text-white">
              Extra-Ordinary <span className="text-[#8a919e] font-normal">Work.</span>
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            From startups to established brands, we create tailored solutions that drive success and make a real impact.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[10px] bg-[#0055ff] text-white font-sans text-sm font-semibold hover:bg-[#1a66ff] shadow-[0_8px_30px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
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
      {/* 2. SELECTED PROJECTS (3 FULL-BLEED EDITORIAL CARDS)                  */}
      {/* ==================================================================== */}
      <section className="relative w-full py-16 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="group relative rounded-3xl overflow-hidden bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/40 transition-all duration-300 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-white/80">
                      {proj.year}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#0055ff] font-semibold">
                      {proj.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-normal tracking-tight text-white mb-4 group-hover:text-[#0055ff] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-sm text-[#8a919e] leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-white group-hover:text-[#0055ff] transition-colors"
                  >
                    <span>Request Live Demo</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visual Image */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070e]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. FAQ ACCORDION                                                     */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
              How We Work?
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
              Frequently <br />
              <span className="font-semibold text-white">Asked Questions</span>
            </h2>
            <p className="mt-4 font-sans text-sm text-[#8a919e] max-w-md mx-auto">
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#05070e] border border-white/[0.07] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-medium text-white hover:text-[#0055ff] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`h-7 w-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-sm shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-[#0055ff]' : 'text-white/60'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 font-sans text-sm text-[#8a919e] leading-relaxed border-t border-white/[0.04] mt-2 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. JOIN US BANNER                                                    */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
          <Image
            src="/assets/framer/join-banner.png"
            alt="Join Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
            Join Us Now
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
            Each Project we Undertake <br />
            <span className="font-semibold text-white">is a Unique Opportunity.</span>
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#8a919e] max-w-lg mx-auto">
            Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-8 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
          >
            Book an Appointment
          </button>
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
