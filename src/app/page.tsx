'use client';

// ==============================================================================
// HYBRID STUDIOZ — OFFICIAL HOMEPAGE
// 100% Visual and Structural Fidelity matching hybridstudioz.framer.ai
// AI SaaS & Web Development & Services, Digital Marketing, Branding
// ==============================================================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  const openModal = (service?: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const benefitsList = [
    'Enhanced UX',
    'Boosted Conversions',
    'Fast Loading',
    'SEO Optimized',
    'Customizable',
    'Scalable',
    'Increased Engagement',
    'Expandable',
    'Secure',
    'User-Friendly',
  ];

  const galleryRow1 = [
    { src: '/assets/framer/gallery-1.jpg', alt: 'Street Culture' },
    { src: '/assets/framer/gallery-2.jpg', alt: 'Automotive Precision' },
    { src: '/assets/framer/gallery-3.jpg', alt: 'Neon Architecture' },
    { src: '/assets/framer/gallery-4.jpg', alt: 'Deep Oceanic Blue' },
    { src: '/assets/framer/gallery-5.jpg', alt: 'Digital Studio' },
    { src: '/assets/framer/gallery-6.jpg', alt: 'Organic Motion' },
  ];

  const testimonials = [
    {
      avatar: '/assets/framer/avatar-1.png',
      quote:
        'Hybrid StudioZ transformed our project management process! Their custom solution perfectly fits our needs. We’re not just operating; we’re thriving!',
      company: 'HorizonBeam',
      role: 'Innovate Solutions',
    },
    {
      avatar: '/assets/framer/avatar-2.png',
      quote:
        'The team understood our complex requirements and provided a user-friendly, high-performing service that stands out in the market.',
      company: 'DAPL',
      role: 'Product Manager, SAAS Development',
    },
    {
      avatar: '/assets/framer/avatar-3.png',
      quote:
        'As a startup, we needed a partner who could help us optimize our processes without overwhelming us with complexity. They provided us with a intuitive CRM solution.',
      company: 'OTMS',
      role: 'Founder, CRM Platforms',
    },
    {
      avatar: '/assets/framer/avatar-4.png',
      quote:
        'We were blown away by the creative approach and attention to detail. The team understood our problems and provided tailored solutions.',
      company: 'Devforge Technologies',
      role: 'Creative Director',
    },
    {
      avatar: '/assets/framer/avatar-5.png',
      quote:
        'They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.',
      company: 'Nova Hub',
      role: 'Brian Clark · Team Lead',
    },
    {
      avatar: '/assets/framer/avatar-6.png',
      quote:
        'The team’s dedication and attention to detail are unmatched. They understood our requirements and delivered exactly what we were looking for.',
      company: 'Fusion Studios',
      role: 'Daniel Carter · Founder',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white overflow-hidden font-sans">
      {/* Background Volumetric Cobalt Light Bleeds */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(0,85,255,0.25)_0%,rgba(5,38,136,0.1)_45%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,85,255,0.15)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[10%] right-[-100px] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,85,255,0.18)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* ==================================================================== */}
        {/* 1. HERO SECTION (Exact Framer Loop & Floating Showcase Card)         */}
        {/* ==================================================================== */}
        <section className="relative w-full min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8 overflow-hidden">
          {/* Framer Hero Loop MP4 Background Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover opacity-70"
            >
              <source src="/assets/framer/hero-loop.mp4" type="video/mp4" />
            </video>
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            {/* Left Column: Headline, Copy & CTAs */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Highlight Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8">
                <span className="px-2 py-0.5 rounded-[5px] bg-[#0055ff] text-white text-[11px] font-bold uppercase tracking-wider">
                  NEW
                </span>
                <span className="text-white/90 text-xs font-medium">
                  SaaS Solution
                </span>
              </div>

              {/* Main Headline (DM Sans 400 with -3.8px tracking) */}
              <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-normal tracking-[-0.04em] text-white leading-[1.05]">
                Hybrid Studioz – <br />
                <span className="text-white">Shaping the Future</span>
              </h1>

              {/* Subcopy */}
              <p className="mt-6 text-base sm:text-lg text-[#8a919e] max-w-lg leading-relaxed font-sans font-normal">
                At Hybrid StudioZ, we specialize in providing innovative SaaS solutions that help modern businesses streamline their operations.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openModal('Connect With Us')}
                  className="px-6 py-3 rounded-[10px] bg-[#efeeec] hover:bg-white text-[#050814] font-sans text-xs font-semibold tracking-normal transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-95"
                >
                  Connect With Us
                </button>

                <a
                  href="#about"
                  className="px-6 py-3 rounded-[10px] bg-white/[0.12] hover:bg-white/20 border border-white/10 text-white font-sans text-xs font-medium backdrop-blur-md transition-all"
                >
                  What is Hybrid Studioz ?
                </a>
              </div>
            </div>

            {/* Right Column: Floating Video Showcase Card with Centered Play Button */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="relative group w-full max-w-[320px]">
                {/* Thin Hairline Crosshairs */}
                <div className="absolute -top-6 -left-6 w-12 h-px bg-white/20 pointer-events-none" />
                <div className="absolute -top-6 -left-6 w-px h-12 bg-white/20 pointer-events-none" />

                <div
                  onClick={() => openModal('Hero Video Preview')}
                  className="relative aspect-[16/10] rounded-[10px] overflow-hidden border border-white/[0.15] bg-[#05070e] shadow-[0_20px_50px_rgba(0,85,255,0.3)] cursor-pointer group-hover:border-[#0055ff]/60 transition-all"
                >
                  <Image
                    src="/assets/framer/hero-preview.jpg"
                    alt="Hybrid Studioz Hero Preview"
                    fill
                    priority
                    className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle radial inner glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,85,255,0.25)_0%,transparent_70%)] pointer-events-none" />

                  {/* Centered Frosted Play Button Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-[#0055ff] transition-all">
                      <svg className="w-5 h-5 fill-white ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 2. ABOUT HYBRID STUDIOZ SECTION (Woman Halo Ring Light Portrait)     */}
        {/* ==================================================================== */}
        <section id="about" className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authentic Framer Portrait Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-[22px] overflow-hidden border border-white/[0.10] bg-[#05070e] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <Image
                  src="/assets/framer/about-portrait.jpg"
                  alt="About Hybrid Studioz"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative & Ratings */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                <span>About Hybrid Studioz</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-white leading-[1.1]">
                Innovating the Future <br />
                <span className="text-[#8a919e]">Leaving Impressions!</span>
              </h2>

              <p className="mt-6 text-base text-[#8a919e] max-w-xl leading-relaxed">
                Delivering innovative SaaS solutions with precision. Empower your business seamlessly, one step at a time.
              </p>

              {/* Two Authentic Checklist Items */}
              <div className="mt-6 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                    <svg className="w-3 h-3 stroke-white stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    IT software products that boost productivity & operations.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                    <svg className="w-3 h-3 stroke-white stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    50% growth in new customers.
                  </span>
                </div>
              </div>

              {/* Actions & Rating */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_8px_32px_rgba(0,85,255,0.5)] transition-all active:scale-95"
                >
                  View About Us
                </Link>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-xs text-white/80 font-medium mt-1">
                    150+ Customer Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 3. HOW WE WORK? SECTION (3-Stage Sticky Roadmap + Blue Spiral Light)  */}
        {/* ==================================================================== */}
        <section className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                <span>How We Work?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
                Optimizing Your Path. <br />
                <span className="text-[#8a919e]">From Idea to Execution</span>
              </h2>
              <p className="mt-4 text-base text-[#8a919e]">
                We turn your ideas into reality, guiding you from concept to a fully integrated SaaS solution.
              </p>
            </div>

            {/* Stages & Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 3 Stages */}
              <div className="lg:col-span-7 space-y-4">
                {/* Stage 1 */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-[#0055ff]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#8a919e]">
                      Stage 1
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Consultation & Research
                  </h3>
                  <p className="text-sm text-[#8a919e] leading-relaxed mb-4">
                    Understand client needs through detailed discussions and market analysis to inform development decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Comprehensive Consultation
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Project Roadmap
                    </span>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-[#0055ff]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#8a919e]">
                      Stage 2
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Development & Testing
                  </h3>
                  <p className="text-sm text-[#8a919e] leading-relaxed mb-4">
                    Create customized solutions using agile methodologies, followed by rigorous quality assurance to ensure high standards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Seamless Implementation
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Evaluation
                    </span>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-[#0055ff]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#8a919e]">
                      Stage 3
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Deployment & Support
                  </h3>
                  <p className="text-sm text-[#8a919e] leading-relaxed mb-4">
                    Launch the solution and provide ongoing support to ensure continued success and satisfaction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Completion
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/80">
                      Feedback
                    </span>
                    <button
                      onClick={() => openModal('Stage 3 Deployment')}
                      className="px-3 py-1 rounded-lg bg-[#0055ff]/20 text-[#0055ff] border border-[#0055ff]/30 text-xs font-semibold hover:bg-[#0055ff] hover:text-white transition-colors"
                    >
                      Book an Appointment
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Spiral Light Card (Authentic Framer Asset) */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden border border-white/[0.10] bg-[#05070e] shadow-2xl">
                  <Image
                    src="/assets/framer/spiral-light.jpg"
                    alt="How We Work Spiral Light"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 4. UNLIMITED SAAS SOLUTION (OUR SERVICES)                            */}
        {/* ==================================================================== */}
        <section id="services" className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* Section Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
              <span>Features</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-white leading-tight">
              Unlimited SaaS Solution <br />
              <span className="text-[#8a919e]">Our Services</span>
            </h2>

            <p className="mt-4 text-base text-[#8a919e] max-w-xl">
              Get limitless SaaS solutions with HS, empowering you to innovate without boundaries
            </p>

            <Link
              href="/about"
              className="mt-6 px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_8px_32px_rgba(0,85,255,0.5)] transition-all active:scale-95"
            >
              View About Hybrid Studioz
            </Link>

            {/* 6 Services Grid (matching Framer) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full text-left">
              {/* Service 1 */}
              <div
                onClick={() => openModal('Custom SaaS Development')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5e1a] text-white font-bold text-sm shadow-[0_0_15px_rgba(255,94,26,0.4)]">
                      $
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Custom SaaS Development
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    Solving Challenges
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    Creating custom software solutions for seamless system integration
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div
                onClick={() => openModal('Comprehensive IT Software Products')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      ⚡
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Comprehensive IT Software Products
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    All-in-One Software Solutions
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    Offering a diverse portfolio of tools to support key business functions.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div
                onClick={() => openModal('Expert Consultation Services')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0055ff] text-white font-bold text-sm shadow-[0_0_15px_rgba(0,85,255,0.5)]">
                      💬
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Expert Consultation Services
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    Feedbacks
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    Offering expert advice to choose the right tech for growth.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div
                onClick={() => openModal('Cloud Migration Services')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00bcd4] text-white font-bold text-sm shadow-[0_0_15px_rgba(0,188,212,0.4)]">
                      ☁
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Cloud Migration Services
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    Cloud Onboarding
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    We helps businesses transition to cloud solutions with minimal disruption.
                  </p>
                </div>
              </div>

              {/* Service 5 */}
              <div
                onClick={() => openModal('Ongoing Support & Maintenance')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5cf6] text-white font-bold text-sm shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                      🛠
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Ongoing Support & Maintenance
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    Real - Time Feedback
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    We provide ongoing support, including updates and troubleshooting.
                  </p>
                </div>
              </div>

              {/* Service 6 */}
              <div
                onClick={() => openModal('Project Management Software')}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981] text-white font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      📊
                    </div>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Project Management Software
                  </h3>
                  <span className="font-sans text-xs text-[#8a919e] block mb-3">
                    Responsive
                  </span>
                  <p className="text-xs text-[#8a919e] leading-relaxed">
                    Tools that help teams collaborate effectively, and manage resources efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 5. BENEFITS SECTION (Pills + 5 Authentic Feature Cards)              */}
        {/* ==================================================================== */}
        <section className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                <span>Hybrid Studioz Benefits</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
                We Just Don’t Develop, We Build. <br />
                <span className="text-[#8a919e]">If You Can Imagine It, We Can Build It!</span>
              </h2>
            </div>

            {/* Pill Badges Matrix + Contact Now button */}
            <div className="flex flex-wrap items-center gap-2.5 max-w-4xl">
              {benefitsList.map((benefit) => (
                <span
                  key={benefit}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/90"
                >
                  {benefit}
                </span>
              ))}
              <button
                onClick={() => openModal('Benefits Contact')}
                className="px-5 py-2 rounded-xl bg-white text-black font-sans text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
              >
                Contact Now
              </button>
            </div>

            {/* 5 Showcase Feature Cards (Row 1: 2 cards; Row 2: 3 cards) */}
            <div className="mt-14 space-y-6">
              {/* Row 1: 2 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* Feature 1: User-Friendly Interface */}
                <div className="md:col-span-7 rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black">
                    <Image
                      src="/assets/framer/feature-blue3d.jpg"
                      alt="User-Friendly Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      User-Friendly Interface
                    </h3>
                    <p className="text-xs text-[#8a919e] leading-relaxed">
                      We provide a user-friendly interface designed for seamless navigation, ensuring a smooth and intuitive experience for all users.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Customizable Dashboards */}
                <div className="md:col-span-5 rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black">
                    <Image
                      src="/assets/framer/feature-stats.jpg"
                      alt="Customizable Dashboards"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium text-white">
                        Customizable Dashboards
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#0055ff] text-white text-[10px] font-bold uppercase">
                        NEW
                      </span>
                    </div>
                    <p className="text-xs text-[#8a919e] leading-relaxed">
                      We offer customizable dashboards that allow users to tailor their view, providing quick access to key insights and improving decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Feature 3: Real-Time Data Analytics */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-black">
                    <Image
                      src="/assets/framer/feature-mobile.jpg"
                      alt="Real-Time Data Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-medium text-white">
                        Real-Time Data Analytics
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#0055ff] text-white text-[10px] font-bold uppercase">
                        NEW
                      </span>
                    </div>
                    <p className="text-xs text-[#8a919e] leading-relaxed">
                      We deliver real-time data analytics, enabling informed decision.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Multi-Platform Compatibility */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-black">
                    <Image
                      src="/assets/framer/feature-ui.png"
                      alt="Multi-Platform Compatibility"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-2">
                      Multi–Platform Compatibility
                    </h3>
                    <p className="text-xs text-[#8a919e] leading-relaxed">
                      We provide multi – platform compatibility across all devices.
                    </p>
                  </div>
                </div>

                {/* Feature 5: API Integrations */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-black">
                    <Image
                      src="/assets/framer/feature-3dabstract.jpg"
                      alt="API Integrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-medium text-white">
                        API Integrations for Seamless Connectivity
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#0055ff] text-white text-[10px] font-bold uppercase">
                        NEW
                      </span>
                    </div>
                    <p className="text-xs text-[#8a919e] leading-relaxed">
                      We provide robust API integrations that ensure seamless connectivity with various systems and tools, enabling smooth data flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 6. SELECTED PROJECTS SECTION (Authentic Framer Projects)              */}
        {/* ==================================================================== */}
        <section id="portfolio" className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
              <span>Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-white leading-tight">
              Our Selected Projects <br />
              <span className="text-[#8a919e]">That Propel Your Website.</span>
            </h2>

            <p className="mt-4 text-base text-[#8a919e] max-w-xl">
              Explore our curated work, showcasing collaborations with visionary clients across diverse industries.
            </p>

            <Link
              href="/portfolio"
              className="mt-6 px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_8px_32px_rgba(0,85,255,0.5)] transition-all active:scale-95"
            >
              View Portfolio
            </Link>

            {/* 3 Authentic Framer Projects Showcase */}
            <div className="grid grid-cols-1 gap-8 mt-14 w-full text-left max-w-5xl">
              {/* Project 1: Smart Timepiece Companion (Ultra Watch with Orange Dial) */}
              <div className="group rounded-[22px] border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black">
                  <Image
                    src="/assets/framer/project-watch.jpg"
                    alt="Project Management Software"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-[#0055ff] transition-colors">
                      Project Management Software
                    </h3>
                    <span className="text-xs text-[#8a919e] mt-1 block">
                      Platform, Solution · 2025
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      Platform
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      Solution
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2: Concentric Light Loops (Data Analytics Platform) */}
              <div className="group rounded-[22px] border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black">
                  <Image
                    src="/assets/framer/project-cap.jpg"
                    alt="Data Analytics Platform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-[#0055ff] transition-colors">
                      Data Analytics Platform
                    </h3>
                    <span className="text-xs text-[#8a919e] mt-1 block">
                      Solutions, Data Collection · 2024
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      Solutions
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      Data Collection
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3: Aerosol Finishing Suite */}
              <div className="group rounded-[22px] border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 hover:border-[#0055ff]/40 transition-all">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black">
                  <Image
                    src="/assets/framer/project-spray.jpg"
                    alt="Customized CRM System"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-[#0055ff] transition-colors">
                      Customized CRM System
                    </h3>
                    <span className="text-xs text-[#8a919e] mt-1 block">
                      Platform, User-Friendly · 2024
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      Platform
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/80">
                      User-Friendly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 7. MARQUEE IMAGE WALL (2 Infinite Scrolling Authentic Photo Rows)     */}
        {/* ==================================================================== */}
        <section className="relative w-full py-20 overflow-hidden border-t border-white/[0.04]">
          <div className="text-center mb-10">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_8px_32px_rgba(0,85,255,0.5)] transition-all active:scale-95"
            >
              View About Hybrid Studioz
            </Link>
          </div>

          <div className="space-y-4">
            {/* Row 1: Scrolling Left */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee-left flex gap-4">
                {[...galleryRow1, ...galleryRow1].map((img, i) => (
                  <div
                    key={i}
                    className="relative w-[320px] sm:w-[400px] h-[240px] sm:h-[280px] shrink-0 rounded-[18px] overflow-hidden border border-white/[0.08] bg-[#05070e]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee-right flex gap-4">
                {[...galleryRow1.slice().reverse(), ...galleryRow1.slice().reverse()].map((img, i) => (
                  <div
                    key={i}
                    className="relative w-[320px] sm:w-[400px] h-[240px] sm:h-[280px] shrink-0 rounded-[18px] overflow-hidden border border-white/[0.08] bg-[#05070e]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 8. PRICING SECTION (₹15K and ₹30K Cards matching Framer)              */}
        {/* ==================================================================== */}
        <section className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
              <span>Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-white leading-tight">
              Plans for all businesses, Suitable for <br />
              <span className="text-[#8a919e]">Personal, Agencies, Startups.</span>
            </h2>

            <p className="mt-4 text-base text-[#8a919e] max-w-xl">
              Our pricing plans are designed to make getting started as effortless as possible. With flexible options tailored to suit a variety of needs and budgets.
            </p>

            {/* 2 Pricing Cards (matching Framer ₹15K and ₹30K) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mt-14 text-left">
              {/* Basic Plan */}
              <div className="rounded-3xl border border-white/[0.08] bg-[#05070e] p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.08] text-[#0055ff]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white">
                      Most Pick
                    </span>
                  </div>

                  <span className="text-sm font-medium text-[#8a919e] uppercase tracking-wider block mb-1">
                    Basic
                  </span>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      ₹15K
                    </span>
                    <span className="text-sm text-[#8a919e]">/ Month</span>
                    <span className="relative text-lg text-white/40 line-through ml-2">
                      ₹30K
                      <span className="absolute inset-x-0 top-1/2 h-[2px] bg-[#0055ff] -rotate-12" />
                    </span>
                  </div>

                  <p className="text-xs text-[#8a919e] leading-relaxed mb-6">
                    Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/90 font-medium">
                      <strong className="text-white">100+</strong> Projects
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/90 font-medium">
                      <strong className="text-white">75+</strong> Revisions
                    </span>
                  </div>

                  {/* Checkmarks */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Custom SaaS development for MSME</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Up to 10 users</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Basic integrations with existing systems</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Dedicated support and training</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>30-Days Money-back Guarantee</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openModal('Basic Plan ₹15K')}
                  className="mt-8 w-full py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.10] text-white font-sans text-xs font-semibold transition-all active:scale-95"
                >
                  Book an Appointment
                </button>
              </div>

              {/* Custom Plan (Recommended) */}
              <div className="relative rounded-3xl border border-[#0055ff]/40 bg-[#05070e] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,85,255,0.2)] hover:border-[#0055ff] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0055ff]/20 border border-[#0055ff]/40 text-[#0055ff]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-[#0055ff]/20 border border-[#0055ff]/40 text-xs font-medium text-[#0055ff]">
                      Recommended
                    </span>
                  </div>

                  <span className="text-sm font-medium text-[#8a919e] uppercase tracking-wider block mb-1">
                    Custom
                  </span>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      ₹30K
                    </span>
                    <span className="text-sm text-[#8a919e]">/ Month</span>
                  </div>

                  <p className="text-xs text-[#8a919e] leading-relaxed mb-6">
                    Our custom pricing plan is designed for businesses looking for advanced features and customized solutions
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/90 font-medium">
                      <strong className="text-white">650+</strong> Projects
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/90 font-medium">
                      <strong className="text-white">250+</strong> Revisions
                    </span>
                  </div>

                  {/* Checkmarks */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Fully tailored SaaS solution based on your business needs</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Integrations with all existing systems</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Ongoing updates and feature enhancements</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>Dedicated support and training</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0055ff] text-white">
                        ✓
                      </span>
                      <span>30-Days Money-back Guarantee</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openModal('Custom Plan ₹30K')}
                  className="mt-8 w-full py-3.5 rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_4px_20px_rgba(0,85,255,0.4)] transition-all active:scale-95"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 9. TESTIMONIALS SECTION (With 6 Authentic Framer Avatars)             */}
        {/* ==================================================================== */}
        <section className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
              <span>Testimonial</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-white leading-tight">
              Customer Reviews About <br />
              <span className="text-[#8a919e]">Efficiency & Innovation</span>
            </h2>

            <p className="mt-4 text-base text-[#8a919e] max-w-xl">
              Hear from our happy clients! See how we’ve helped them achieve their goals and create lasting impact.
            </p>

            {/* Testimonials Grid (6 cards matching Framer) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full text-left">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#05070e] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    {/* Avatar & 5 Stars */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 bg-white/5">
                        <Image
                          src={item.avatar}
                          alt={item.company}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed mb-6 font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <h4 className="text-sm font-semibold text-white">
                      {item.company}
                    </h4>
                    <span className="text-xs text-[#8a919e]">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 10. FREQUENTLY ASKED QUESTIONS (6 Exact Framer Questions)            */}
        {/* ==================================================================== */}
        <section id="faq" className="relative w-full py-24 px-6 sm:px-8 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                <span>FAQ</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
                Frequently <br />
                <span className="text-[#8a919e]">Asked Questions</span>
              </h2>

              <p className="mt-4 text-base text-[#8a919e] max-w-md">
                Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
              </p>
            </div>

            {/* Right Column: Accordion Stack */}
            <div className="lg:col-span-7 space-y-3">
              {SITE_CONFIG.faqs?.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/[0.08] bg-[#05070e] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:text-[#0055ff] transition-colors"
                    >
                      <span className="text-base font-medium text-white pr-4">
                        {faq.question}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white text-lg">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-[#8a919e] leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 11. JOIN US NOW CTA BANNER                                          */}
        {/* ==================================================================== */}
        <section className="relative w-full py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto rounded-3xl border border-blue-500/20 bg-gradient-to-b from-[#0037c3]/40 via-[#05070e] to-[#02040a] p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_20px_80px_rgba(0,85,255,0.25)]">
            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.10] text-xs font-medium text-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                <span>Join Us Now</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight max-w-2xl">
                Each Project we Undertake <br />
                <span className="text-white">is a Unique Opportunity.</span>
              </h2>

              <p className="mt-4 text-base text-[#8a919e] max-w-xl">
                Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
              </p>

              <button
                onClick={() => openModal('Join Us Banner Appointment')}
                className="mt-8 px-8 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shadow-[0_4px_25px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Global Direct Consultation Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={modalService}
      />
    </div>
  );
}
