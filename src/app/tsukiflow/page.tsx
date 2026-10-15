'use client';

// ==============================================================================
// HYBRID STUDIOZ — /tsukiflow PRODUCT SHOWCASE
// Flagship Autonomous Agentic Workflow & AI Automation SaaS Platform
// Built with Next.js, Obsidian & Electric Cobalt design system
// ==============================================================================

import React, { useState } from 'react';
import Link from 'next/link';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import DirectModal from '@/components/shock/DirectModal';

export default function TsukiFlowPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<'triage' | 'codegen' | 'analytics'>('triage');

  const workflows = {
    triage: {
      title: 'Autonomous Enterprise Triage Agent',
      latency: '42ms',
      accuracy: '99.8%',
      steps: [
        { label: 'Event Ingestion', desc: 'Webhook stream parsing across Slack, Jira, GitHub' },
        { label: 'Multi-Modal Reasoning', desc: 'Context synthesis via fine-tuned Claude / OpenAI' },
        { label: 'Autonomous Resolution', desc: 'Dispatches PRs, updates DB, alerts engineering leads' },
      ],
    },
    codegen: {
      title: 'Full-Stack Code Synthesis Pipeline',
      latency: '110ms',
      accuracy: '99.4%',
      steps: [
        { label: 'Framer / Figma Spec', desc: 'Automated token extraction and DOM tree breakdown' },
        { label: 'Next.js 16 Synthesis', desc: 'Strict TypeScript App Router component generation' },
        { label: 'Zero-Lag Deployment', desc: 'Instant Vercel / Edge container propagation with tests' },
      ],
    },
    analytics: {
      title: 'Real-Time Telemetry & Conversion Engine',
      latency: '18ms',
      accuracy: '100%',
      steps: [
        { label: 'Omnichannel Signals', desc: 'High-frequency clickstream and user behavior tracing' },
        { label: 'Predictive Churn Model', desc: 'Identifies high-value enterprise accounts dynamically' },
        { label: 'Algorithmic Personalization', desc: 'Dynamically optimizes hero copy and pricing tiers' },
      ],
    },
  };

  const current = workflows[activeWorkflow];

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white">
      {/* ==================================================================== */}
      {/* HERO SECTION — TSUKIFLOW FLAGSHIP SAAS                               */}
      {/* ==================================================================== */}
      <section className="relative w-full hybrid-hero-bg pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-12 md:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,85,255,0.45)_0%,transparent_50%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <EyebrowBadge
            year="2025"
            label="TsukiFlow • Flagship AI Agentic SaaS"
            className="mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
          />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
            Autonomous Workflows. <br />
            <span className="text-silver-fade font-normal">
              Sub-Millisecond Execution.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            TsukiFlow is Hybrid Studioz&apos; proprietary multi-agent automation platform. Orchestrate resilient AI agents, synchronize complex SaaS pipelines, and scale without bottlenecks.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
            >
              Request Access
            </button>

            <a
              href="#simulator"
              className="px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              Explore Live Simulator ↓
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* INTERACTIVE WORKFLOW SIMULATOR                                       */}
      {/* ==================================================================== */}
      <section id="simulator" className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-2">
                Live Interactive Telemetry
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Inspect Agent Choreography
              </h2>
            </div>

            {/* Workflow Mode Switcher */}
            <div className="inline-flex rounded-xl bg-white/[0.04] p-1 border border-white/[0.08]">
              {(['triage', 'codegen', 'analytics'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveWorkflow(key)}
                  className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-medium capitalize transition-all ${
                    activeWorkflow === key
                      ? 'bg-[#0055ff] text-white shadow-md'
                      : 'text-[#8a919e] hover:text-white'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Agent Terminal Visualizer */}
          <div className="relative overflow-hidden rounded-3xl bg-[#05070e] border border-white/[0.08] p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
              <div>
                <span className="font-mono text-xs text-[#0055ff] font-bold uppercase tracking-wider block mb-1">
                  Active Agent Process
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs">
                <div>
                  <span className="text-[#8a919e] block">P99 LATENCY</span>
                  <span className="text-white font-bold text-base">{current.latency}</span>
                </div>
                <div>
                  <span className="text-[#8a919e] block">ACCURACY</span>
                  <span className="text-[#0055ff] font-bold text-base">{current.accuracy}</span>
                </div>
                <div>
                  <span className="text-[#8a919e] block">STATUS</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Step Sequence Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.steps.map((step, idx) => (
                <div
                  key={step.label}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#0055ff]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#0055ff]">
                      STEP 0{idx + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-white mb-2">
                    {step.label}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#8a919e] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Live Terminal Output Feed */}
            <div className="mt-8 p-4 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-xs text-white/70 overflow-x-auto">
              <p className="text-[#0055ff]">$ tsukiflow agent --dispatch --runtime=v8-isolate --concurrency=64</p>
              <p className="text-emerald-400">[READY] Worker mesh synchronized across 12 global edge regions.</p>
              <p className="text-white/50">[INFO] Context window streaming at 148 tokens/sec. Zero errors detected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* ENTERPRISE CALL TO ACTION                                            */}
      {/* ==================================================================== */}
      <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#05070e] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-3">
            Deploy TsukiFlow Into Your Stack
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            Ready to automate your <br />
            <span className="text-silver-fade">enterprise workflows?</span>
          </h2>
          <p className="mt-4 font-sans text-base text-[#8a919e] max-w-lg mx-auto">
            Contact Hybrid Studioz to integrate TsukiFlow custom agent infrastructure into your product or engineering operations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
            >
              Get In Touch
            </button>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              Direct Studio Contact →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Direct Modal */}
      <DirectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="TsukiFlow AI Automation"
      />
    </div>
  );
}
