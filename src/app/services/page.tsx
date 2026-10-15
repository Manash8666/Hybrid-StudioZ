'use client';

// ==============================================================================
// HYBRID STUDIOZ — SERVICES (PAGE-SERVICES-2)
// Dark Creative Gradient Service Matrix, Interactive Process, and Testimonials
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import SuperHeading from '@/components/shock/SuperHeading';
import DoubleEdgeCard from '@/components/shock/DoubleEdgeCard';
import DirectModal from '@/components/shock/DirectModal';
import { SITE_CONFIG } from '@/content/site';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openServiceModal = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  const processSteps = [
    {
      step: '01',
      phase: 'Discovery & Vector Strategy',
      duration: 'Week 1',
      description: 'We audit your category landscape, deconstruct user journey friction, and establish the technical thesis and visual direction.',
      deliverables: ['Competitive Benchmark', 'UX Flow Architecture', 'Design System Tokens'],
    },
    {
      step: '02',
      phase: 'Spatial 3D & All-Intra Prototyping',
      duration: 'Week 2 - 3',
      description: 'Choreographing custom WebGL shaders, Three.js models, and 4-tier All-Intra video sequences with live HTML typography proof-of-concepts.',
      deliverables: ['Clickable 60fps Prototype', 'All-Intra Video Encodes', 'Custom GLSL Shaders'],
    },
    {
      step: '03',
      phase: 'Single-Clock Engineering',
      duration: 'Week 4 - 5',
      description: 'Building in Next.js 16 with TypeScript and Tailwind CSS v4. Synchronizing Lenis smooth scroll and GSAP ScrollTrigger to a single ticker.',
      deliverables: ['Production Next.js Codebase', 'WCAG 2.2 AAA Audit', 'Lighthouse 95+ Tuning'],
    },
    {
      step: '04',
      phase: 'Global Edge Launch & Scale',
      duration: 'Week 6+',
      description: 'Deploying across global CDN edge nodes, configuring real-time telemetry, and optimizing conversion funnels for maximum market impact.',
      deliverables: ['Edge Deployment', 'Analytics Telemetry', 'Full IP Handover'],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-[#1fb6e8]/10 via-[#6f4bff]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ff5e1a] font-bold">Services & Capabilities</span>
        </nav>

        {/* Hero Super Heading */}
        <div className="mb-20">
          <SuperHeading
            eyebrow="Capabilities Matrix // 2026"
            title="Specialized"
            highlight="Capabilities"
            subtitle="We blend avant-garde creative direction with rigorous full-stack engineering to build web architecture that refuses to be ignored."
            size="xl"
          />
        </div>

        {/* 6-Card Interactive Service Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SITE_CONFIG.services.map((svc) => (
            <DoubleEdgeCard
              key={svc.id}
              className="flex flex-col justify-between"
              accentColor="#1fb6e8"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-[#ff5e1a]">
                    {svc.number}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#1fb6e8]">
                    {svc.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  {svc.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm font-semibold text-[#1fb6e8] mb-3">
                  {svc.tagline}
                </p>

                <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="h-[1px] w-full bg-white/10 mb-6" />

                <div className="space-y-2 mb-6">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Core Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white/5 border border-white/10 px-2 py-1 font-sans text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Tooling & Stacks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-[#6f4bff]/10 border border-[#6f4bff]/30 px-2 py-0.5 font-mono text-[11px] text-[#6f4bff]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openServiceModal(svc.title)}
                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 font-display text-xs font-black uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Initiate Brief</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </DoubleEdgeCard>
          ))}
        </div>

        {/* Interactive Process Timeline */}
        <div className="mb-32">
          <div className="mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#ff5e1a] block mb-2">
              Choreography // Execution Flow
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              The 4-Stage Architectural Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-[#0b1020] border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-black text-white/20">
                      {step.step}
                    </span>
                    <span className="font-mono text-[11px] text-[#ff5e1a] font-bold">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-3">
                    {step.phase}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#1fb6e8] mb-2">
                    Key Milestones:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="text-xs text-white/60 font-sans">
                        • {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b1020] via-[#0f1424] to-[#0b1020] border border-white/15 p-8 sm:p-14 overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8] block mb-4">
              Featured Endorsement // EchoWear
            </span>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white leading-snug mb-6">
              &ldquo;Hybrid Studioz transformed our smart wearable launch into a global sensation. The 3D All-Intra scrubber generated $2.8M in pre-orders in 48 hours.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#1fb6e8] to-[#ff5e1a] p-[1.5px]">
                <div className="h-full w-full rounded-full bg-[#070913] flex items-center justify-center font-display font-black text-white">
                  EV
                </div>
              </div>
              <div>
                <span className="block font-display text-base font-black uppercase text-white">
                  Elena Vance
                </span>
                <span className="block font-mono text-xs text-white/60">
                  Founder & CEO, EchoWear Inc.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
