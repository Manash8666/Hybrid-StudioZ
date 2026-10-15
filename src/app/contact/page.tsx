'use client';

// ==============================================================================
// HYBRID STUDIOZ — /contact PAGE (100% EXACT FRAMER MIRROR)
// Reconstructed directly from hybridstudioz.framer.ai/contact
// Includes authentic Framer form fields, typography, FAQs, and CTA.
// ==============================================================================

import React, { useState } from 'react';
import Image from 'next/image';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyType: '',
        message: '',
      });
    }, 4000);
  };

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
      {/* 1. HERO SECTION & INTERACTIVE FORM                                  */}
      {/* ==================================================================== */}
      <section className="relative w-full pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(0,85,255,0.22),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow Badge */}
          <EyebrowBadge
            year="24/7"
            label="Let's Work Together"
            className="mb-8"
          />

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            Any Questions <span className="text-[#8a919e]">Rising?</span>
            <span className="block mt-1 font-semibold text-white">
              We are All Here.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            Whether you have a question, need assistance, or want to start a new project, our team is here to help.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="relative z-10 mt-16 w-full max-w-2xl mx-auto rounded-3xl bg-[#05070e] border border-white/[0.08] p-8 sm:p-12 text-left shadow-2xl">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold text-white mb-1">
              Fill The Form Out!
            </h3>
            <p className="font-sans text-xs text-[#8a919e]">
              Tell us about your requirements and we will connect within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center animate-in zoom-in-95 duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0055ff]/20 border border-[#0055ff]">
                <svg className="h-6 w-6 text-[#0055ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-display text-xl font-semibold text-white mb-2">
                Message Dispatched
              </h4>
              <p className="font-sans text-sm text-[#8a919e]">
                Thank you! Our engineering lead will review your message and reply promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-medium text-white/80 mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:border-[#0055ff] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-medium text-white/80 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:border-[#0055ff] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-medium text-white/80 mb-2">
                  How can we reach you?*
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@framer.com"
                  className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:border-[#0055ff] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-medium text-white/80 mb-2">
                  What&apos;s the type of your company?*
                </label>
                <select
                  required
                  value={formData.companyType}
                  onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-[10px] bg-[#05070e] border border-white/[0.08] text-sm text-white focus:border-[#0055ff] focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Agency">Agency</option>
                  <option value="SAAS">SAAS</option>
                  <option value="Banking">Banking</option>
                  <option value="Business">Business</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs font-medium text-white/80 mb-2">
                  Message*
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:border-[#0055ff] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Submit Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. FAQ ACCORDION                                                     */}
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
      {/* 3. JOIN US BANNER                                                    */}
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
