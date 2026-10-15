'use client';

// ==============================================================================
// HYBRID STUDIOZ — /services PAGE (100% FRAMER SAAS DESIGN SYSTEM)
// Reconstructed in pure Obsidian & Electric Cobalt Framer design language
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openServiceModal = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  const services = [
    {
      num: '01',
      title: 'Custom SaaS Development',
      badge: 'Solving Challenges',
      subtitle: 'Creating custom software solutions for seamless system integration.',
      desc: 'We design and build bespoke, scalable SaaS platforms tailored to automate repetitive tasks, maximize user engagement, and drive high operational efficiency.',
      deliverables: ['Custom Web Architecture', 'Multi-Tenant Databases', 'API Integration Engine', 'High-Speed Cloud Deployment'],
    },
    {
      num: '02',
      title: 'Comprehensive IT Software Products',
      badge: 'All-in-One Solutions',
      subtitle: 'Offering a diverse portfolio of tools to support key business functions.',
      desc: 'From workflow automation suites to client management tools and internal executive dashboards, we engineer robust IT software products that empower teams.',
      deliverables: ['Enterprise Dashboards', 'Workflow Automation', 'Secure Data Ingestion', 'Role-Based Access Control'],
    },
    {
      num: '03',
      title: 'Expert Consultation Services',
      badge: 'Strategic Guidance',
      subtitle: 'Offering expert advice to choose the right tech stack for sustainable growth.',
      desc: 'Our senior technology advisors audit legacy systems, identify performance bottlenecks, and formulate scalable architectural roadmaps to de-risk development.',
      deliverables: ['Architecture Audits', 'Tech Stack Selection', 'Performance Benchmarks', 'Scalability Roadmaps'],
    },
    {
      num: '04',
      title: 'Cloud Migration Services',
      badge: 'Cloud Onboarding',
      subtitle: 'We help businesses transition to cloud solutions with minimal disruption.',
      desc: 'Modernize legacy on-prem databases and microservices onto resilient cloud platforms with zero data loss, automated failover, and global edge delivery.',
      deliverables: ['Zero-Downtime Migration', 'Cloud Database Sync', 'Containerization & Docker', 'Multi-Region Edge Caching'],
    },
    {
      num: '05',
      title: 'Continuous Optimization',
      badge: 'Maintenance & Care',
      subtitle: 'We ensure continuous updates, security patches, and scalable maintenance.',
      desc: 'Our proactive maintenance engine guarantees maximum uptime, automated vulnerability scanning, sub-second latency tuning, and feature iterations.',
      deliverables: ['24/7 Monitoring & Alerting', 'Security Hardening', 'Database Indexing', 'Continuous Feature Drops'],
    },
    {
      num: '06',
      title: 'Tailored Enterprise Integrations',
      badge: 'Enterprise API',
      subtitle: 'Custom enterprise integrations with existing legacy workflows and third-party APIs.',
      desc: 'Bridge modern AI tools and custom software into Salesforce, Slack, Dropbox, REST APIs, and legacy ERP platforms with strict schema validation.',
      deliverables: ['Bi-Directional Webhooks', 'Custom Middleware', 'Identity & SSO Protocol', 'Strict Schema Contracts'],
    },
  ];

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
            label="Unlimited Services"
            className="mb-8"
          />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            Explore Our Comprehensive <br />
            <span className="font-semibold text-white">Range of Services</span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            From custom SaaS development and IT products to seamless cloud migration and ongoing optimization, we provide end-to-end technology solutions.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => openServiceModal('SaaS Engineering')}
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[10px] bg-[#0055ff] text-white font-sans text-sm font-semibold hover:bg-[#1a66ff] shadow-[0_8px_30px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. 6 UNLIMITED SERVICES GRID                                         */}
      {/* ==================================================================== */}
      <section className="relative w-full py-16 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.num}
              className="group relative rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/40 transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#0055ff]">
                    {svc.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] uppercase tracking-wider text-white/80">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-normal tracking-tight text-white mb-2 group-hover:text-[#0055ff] transition-colors">
                  {svc.title}
                </h3>

                <p className="font-sans text-xs text-[#0055ff] font-medium mb-4">
                  {svc.subtitle}
                </p>

                <p className="font-sans text-sm text-[#8a919e] leading-relaxed mb-6">
                  {svc.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-8">
                  {svc.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-sans text-white/70">
                      <span className="h-1 w-1 rounded-full bg-[#0055ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => openServiceModal(svc.title)}
                  className="w-full py-3 rounded-[10px] bg-white/[0.04] hover:bg-[#0055ff] border border-white/[0.08] hover:border-[#0055ff] text-white font-sans text-xs font-semibold transition-all"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. CTA SECTION                                                       */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a] text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-3xl sm:text-4xl font-normal text-white mb-3">
            Ready to Build Your <span className="font-semibold text-white">Next SaaS Solution?</span>
          </h3>
          <p className="font-sans text-sm text-[#8a919e] mb-8">
            Speak directly with our technical team to plan your architecture, timeline, and custom scope.
          </p>

          <button
            onClick={() => openServiceModal('SaaS Strategy')}
            className="px-8 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
          >
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Global Direct Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
