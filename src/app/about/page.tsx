'use client';

// ==============================================================================
// HYBRID STUDIOZ — /about PAGE (100% EXACT FRAMER MIRROR)
// Reconstructed directly from hybridstudioz.framer.ai/about
// Includes authentic Framer assets, typography, team roster, tools, FAQs, and CTA.
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const teamMembers = [
    {
      name: 'Vishva Ambasana',
      role: 'Co-Founder, CEO',
      image: '/assets/framer/team-vishva.jpg',
    },
    {
      name: 'Palav Kalariya',
      role: 'Co-Founder, COO & Creater',
      image: '/assets/framer/team-palav.jpg',
    },
    {
      name: 'Jigar Kapdi',
      role: 'Marketing, Sales & Media Creater',
      image: '/assets/framer/team-jigar.jpg',
    },
    {
      name: 'Samael Morningstar',
      role: 'Business Development Manager',
      image: '/assets/framer/team-samael.jpg',
    },
    {
      name: 'Ethan Mitchell',
      role: 'UX/UI Specialist',
      image: '/assets/framer/team-ethan.jpg',
    },
    {
      name: 'Isabella Hughes',
      role: 'Content Creator, Writer',
      image: '/assets/framer/team-isabella.jpg',
    },
  ];

  const toolsList = [
    {
      name: 'Zapier',
      category: 'Automation',
      description: 'Zapier connects your favorite apps and automates your workflows.',
      icon: '/assets/framer/tool-zapier.png',
    },
    {
      name: 'Slack',
      category: 'Communication',
      description: 'Slack is our go-to platform for real-time communication and collaboration.',
      icon: '/assets/framer/tool-slack.png',
    },
    {
      name: 'Dropbox',
      category: 'Cloud Storage',
      description: 'Dropbox provides secure cloud storage, enabling us to share files and collaborate.',
      icon: '/assets/framer/tool-dropbox.svg',
    },
    {
      name: 'REST APIs',
      category: 'APIs & Integrations',
      description: 'Tools for building flexible and secure APIs for seamless system integrations.',
      icon: '/assets/framer/tool-restapi.jpg',
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Leading cloud-based CRM solution offering a full suite of tools for sales and services.',
      icon: '/assets/framer/tool-salesforce.jpg',
    },
    {
      name: 'Github',
      category: 'Version Control',
      description: 'GitHub is our version control system, enabling smooth collaboration.',
      icon: '/assets/framer/tool-github.svg',
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
      <section className="relative w-full pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle background loop video */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/framer/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/70 via-transparent to-[#02040a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(0,85,255,0.22),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Exact Framer Eyebrow Badge */}
          <EyebrowBadge
            year="2025"
            label="Dig Deep About Us"
            className="mb-8"
          />

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            Learn More About <span className="text-[#8a919e]">Us</span>
            <span className="block mt-1 font-semibold text-white">
              Let&apos;s Deep Dive!
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            Hybrid Studioz is your partner for innovative SaaS solutions, specializing in custom, scalable software that drives business growth.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.brand.email}?subject=Inquiry%20from%20Hybrid%20Studioz`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-[#f2f4f8] text-[#08090c] font-sans text-sm font-semibold hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Mail Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="#about-classic"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
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
      {/* 2. ABOUT 1 — A PLATFORM WITH CLASSIC REVOLUTIONARY SKILLS            */}
      {/* ==================================================================== */}
      <section id="about-classic" className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
              About Hybrid Studioz
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight mb-8">
              A Platform With Classic <br />
              <span className="font-semibold text-white">Revolutionary Skills!</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="p-6 rounded-2xl bg-[#05070e] border border-white/[0.06]">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Your Success, Our Priority
                </h3>
                <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
                  We believe in empowering businesses with tailored SaaS solutions. Our team works closely with you to drive efficiency and growth.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#05070e] border border-white/[0.06]">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Partners You Can Rely On
                </h3>
                <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
                  Hybrid Studioz is here to ensure your success with expert guidance and collaborative teamwork.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-7 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_25px_rgba(0,85,255,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                Book an Appointment
              </button>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 text-xs">
                  {'★★★★★'}
                </div>
                <span className="font-sans text-xs text-[#8a919e] font-medium">
                  200+ Customer Rated
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#05070e] border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/framer/about-platform.jpg"
                alt="A Platform With Classic Revolutionary Skills"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. ABOUT 2 — WORK SMARTER NOT HARDER IN EVERY MINUTES!               */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Frame */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#05070e] border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/framer/about-laptop.jpg"
                alt="Work Smarter Not Harder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
              About Hybrid Studioz
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight mb-8">
              Work Smarter Not Harder <br />
              <span className="font-semibold text-white">in Every Minutes!</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="p-6 rounded-2xl bg-[#05070e] border border-white/[0.06]">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Guided Every Step
                </h3>
                <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
                  We ensure a smooth journey from concept to completion, providing expert support to bring your vision to life effortlessly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#05070e] border border-white/[0.06]">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Support Beyond Delivery
                </h3>
                <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
                  Our commitment doesn’t end at launch—We is here to support you with ongoing updates and expertise whenever you need it.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-7 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_25px_rgba(0,85,255,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                Book an Appointment
              </button>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 text-xs">
                  {'★★★★★'}
                </div>
                <span className="font-sans text-xs text-[#8a919e] font-medium">
                  200+ People Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. TEAM MEMBERS                                                      */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
                Team Members
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
                Meet the Team Making <br />
                <span className="font-semibold text-white">Things Happen Every Day</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="max-w-xs font-sans text-sm text-[#8a919e] leading-relaxed">
                Our team is made up of passionate professionals who bring their expertise and creativity to every project.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shrink-0 shadow-[0_4px_20px_rgba(0,85,255,0.35)] transition-all hover:scale-105"
              >
                Book a 15-min call
              </button>
            </div>
          </div>

          {/* Team Grid (6 members) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-6 relative z-10 -mt-6">
                  <h3 className="font-display text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-[#8a919e]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. TOOLS AND TECHNOLOGIES                                            */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-white/80 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
                Tools
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
                Tools and Technologies <br />
                <span className="font-semibold text-white">Powering Our Productivity</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="max-w-xs font-sans text-sm text-[#8a919e] leading-relaxed">
                Our toolkit is made up of the latest and most reliable tech to ensure your project is executed to perfection.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-xs font-semibold shrink-0 shadow-[0_4px_20px_rgba(0,85,255,0.35)] transition-all hover:scale-105"
              >
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Tools Grid (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsList.map((tool) => (
              <div
                key={tool.name}
                className="group p-8 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="relative h-12 w-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center p-2.5 overflow-hidden">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#8a919e]">
                    {tool.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="font-sans text-xs text-[#8a919e] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. FAQ ACCORDION                                                     */}
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
      {/* 7. JOIN US BANNER                                                    */}
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
