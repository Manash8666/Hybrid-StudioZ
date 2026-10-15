'use client';

// ==============================================================================
// HYBRID STUDIOZ — /faq PAGE (EXACT FRAMER STYLING & KNOWLEDGE BASE)
// Reconstructed in pure Obsidian & Electric Cobalt Framer design language
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      q: 'What industries do we serve?',
      a: 'We serve a wide range of industries including eCommerce, Healthcare, Finance, Real Estate, Education, and Logistics. Our SaaS solutions are custom-built to address industry-specific workflows and compliance standards.',
      category: 'General',
    },
    {
      q: 'Can we customize your software solutions?',
      a: 'Yes, absolutely. Every solution we deliver is engineered from scratch or tailored modularly to fit your exact business logic, branding guidelines, and integration requirements.',
      category: 'Development',
    },
    {
      q: 'What kind of support do we offer post-launch?',
      a: 'We provide continuous 24/7 monitoring, zero-downtime maintenance, proactive feature updates, security patches, and dedicated engineering channels.',
      category: 'Support',
    },
    {
      q: 'How long does it take to develop a custom solution?',
      a: 'Typical MVP development ranges from 2 to 4 weeks, with full enterprise deployments spanning 6 to 12 weeks depending on scale and integrations.',
      category: 'Timelines',
    },
    {
      q: 'What makes us different from other SaaS providers?',
      a: 'We bridge bleeding-edge AI multi-agent orchestration, ultra-performant modern web engineering (Next.js, WebGL), and bespoke high-conversion brand design under a single roof.',
      category: 'General',
    },
    {
      q: 'What is the pricing model for our solutions?',
      a: 'We offer transparent fixed-price tier packages (₹15K Starter, ₹30K Professional) as well as enterprise retainers tailored to custom scopes.',
      category: 'Pricing',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white selection:bg-[#0055ff]/30 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(0,85,255,0.22),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <EyebrowBadge
            year="2025"
            label="Frequently Asked Questions"
            className="mb-8"
          />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            Have Any <span className="text-[#8a919e]">Questions?</span>
            <span className="block mt-1 font-semibold text-white">
              We&apos;re Here to Help.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            Find answers to common questions about our custom SaaS development, timelines, post-launch support, and pricing models.
          </p>

          {/* Search Bar */}
          <div className="mt-10 w-full max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions (e.g. pricing, timelines, support)..."
                className="w-full px-5 py-4 pl-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:border-[#0055ff] focus:outline-none transition-colors"
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
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. FAQ LIST                                                          */}
      {/* ==================================================================== */}
      <section className="relative w-full py-16 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-[#8a919e]">
              No questions matched your search query.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
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
            })
          )}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. STILL HAVE QUESTIONS CTA                                          */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a] text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="font-sans text-sm text-[#8a919e] mb-8">
            Can’t find what you’re looking for? Reach out to our team directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-7 py-3.5 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              Book an Appointment
            </button>
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
