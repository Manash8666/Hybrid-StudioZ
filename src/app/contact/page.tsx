'use client';

// ==============================================================================
// HYBRID STUDIOZ — CONTACT (PAGE-CONTACT-2)
// Dark & Direct Interactive Discovery Form + Global Studio Branch Hub
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import SuperHeading from '@/components/shock/SuperHeading';
import { SITE_CONFIG } from '@/content/site';

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Cinematic Web & WebGL']);
  const [budget, setBudget] = useState('$25k - $50k');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        agreed: false,
      });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12 select-none">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[70vw] h-[500px] bg-gradient-to-b from-[#ff5e1a]/10 via-[#e9449a]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ff5e1a] font-bold">Contact & Brief</span>
        </nav>

        {/* Hero Super Heading */}
        <div className="mb-16">
          <SuperHeading
            eyebrow="Direct Architecture Channel // 2026"
            title="Initiate"
            highlight="Discovery"
            subtitle="Submit your project blueprint or contact one of our global studio nodes in San Francisco, London, Tokyo, or Zurich."
            size="lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive Project Planner (Mode A Inline Form) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0b1020] border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-16 text-center animate-in zoom-in-95 duration-300">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5e1a]/20 border border-[#ff5e1a]">
                    <svg className="h-8 w-8 text-[#ff5e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-black uppercase text-white mb-2">
                    Transmission Established
                  </h3>
                  <p className="font-sans text-sm text-white/70 max-w-md mx-auto">
                    Your architecture brief has been dispatched to our Principal Technologist. Expect a detailed response within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Services Selection */}
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8] mb-3">
                      01 // Required Capabilities (Select All That Apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SITE_CONFIG.services.map((svc) => {
                        const isSelected = selectedServices.includes(svc.title);
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => toggleService(svc.title)}
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all ${
                              isSelected
                                ? 'border-[#ff5e1a] bg-[#ff5e1a]/15 text-white'
                                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                            }`}
                          >
                            <span
                              className={`h-3.5 w-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-[#ff5e1a] border-[#ff5e1a]' : 'border-white/30'
                              }`}
                            >
                              {isSelected && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            <span className="font-display text-xs font-bold uppercase tracking-wide">
                              {svc.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget Selector */}
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-[#6f4bff] mb-3">
                      02 // Projected Capital Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`py-3 px-2 rounded-xl text-center font-mono text-xs font-bold transition-all ${
                            budget === tier
                              ? 'bg-white text-[#070913] shadow-md'
                              : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Inputs */}
                  <div className="space-y-4">
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-[#e9449a]">
                      03 // Contact & Stakeholder Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Full Name *"
                          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/35 focus:border-[#ff5e1a] focus:outline-none"
                        />
                      </div>
                      <div>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Work / Corporate Email *"
                          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/35 focus:border-[#ff5e1a] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company / Brand"
                          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/35 focus:border-[#ff5e1a] focus:outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Direct Phone / WhatsApp"
                          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/35 focus:border-[#ff5e1a] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your venture, core challenge, or desired motion / WebGL interactions..."
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/35 focus:border-[#ff5e1a] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Terms & Submit Switch */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-[#ff5e1a] focus:ring-0"
                      />
                      <span className="text-xs text-white/60 font-sans leading-relaxed">
                        I agree to share project requirements under Hybrid Studioz&apos; zero-data-retention NDA charter.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!formData.agreed}
                      className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-[#ff5e1a] via-[#e9449a] to-[#6f4bff] font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 disabled:opacity-40 transition-opacity flex items-center justify-center gap-2"
                    >
                      <span>Transmit Architecture Brief</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Studio Branches (Shock page-contact-2 style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b1020] border border-white/10">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a] block mb-2">
                Direct Channels
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white mb-4">
                Rapid Dispatch Desk
              </h3>
              <p className="font-sans text-sm text-white/70 mb-6">
                Prefer an informal introduction or technical feasibility chat? Reach our leads directly:
              </p>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-[#1fb6e8]">Email:</span>
                  <a href={`mailto:${SITE_CONFIG.brand.email}`} className="hover:underline">
                    {SITE_CONFIG.brand.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-[#1fb6e8]">SLA:</span>
                  <span>4 Hours Average Response Window</span>
                </div>
              </div>
            </div>

            {/* Studio Branches Grid */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 block">
                Global Studio Coordinates
              </span>

              {SITE_CONFIG.branches.map((b) => (
                <div
                  key={b.city}
                  className="p-6 rounded-2xl bg-[#070913] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-lg font-black uppercase text-white">
                      {b.city}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {b.timezone}
                    </span>
                  </div>
                  <span className="block font-mono text-[11px] text-[#ff5e1a] mb-2">
                    {b.tag}
                  </span>
                  <p className="font-sans text-xs text-white/60 mb-2">
                    {b.address}, {b.zip}
                  </p>
                  <a
                    href={`tel:${b.phone}`}
                    className="font-mono text-xs text-white/80 hover:text-white"
                  >
                    {b.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
