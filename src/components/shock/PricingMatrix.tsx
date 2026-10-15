'use client';

// ==============================================================================
// HYBRID STUDIOZ — HOME-6 HIGH-CONVERSION PRICING MATRIX
// Transparent engagement tiers with double-edge borders and feature deliverables
// ==============================================================================

import React from 'react';
import { SITE_CONFIG, type PricingTier } from '@/content/site';
import DoubleEdgeCard from './DoubleEdgeCard';

interface PricingMatrixProps {
  onSelectTier?: (tierName: string) => void;
  className?: string;
}

export default function PricingMatrix({ onSelectTier, className = '' }: PricingMatrixProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {SITE_CONFIG.pricingTiers.map((tier: PricingTier) => (
        <DoubleEdgeCard
          key={tier.id}
          className={`flex flex-col justify-between ${
            tier.popular ? 'border-2 border-[#6f4bff]/50 shadow-[0_0_50px_rgba(111,75,255,0.25)]' : ''
          }`}
          accentColor={tier.popular ? '#ff5e1a' : '#6f4bff'}
        >
          <div>
            {/* Tier Header & Badges */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50">
                Tier // {tier.id}
              </span>
              {tier.badge && (
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] text-white shadow-lg shadow-[#ff5e1a]/30'
                      : 'bg-white/10 text-white/80 border border-white/10'
                  }`}
                >
                  {tier.badge}
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tight text-white mb-2">
              {tier.name}
            </h3>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-4xl lg:text-5xl font-black tracking-tight text-white">
                {tier.price}
              </span>
              <span className="font-mono text-xs text-white/50 uppercase">
                {tier.period}
              </span>
            </div>

            <p className="text-sm text-white/70 font-sans leading-relaxed mb-6">
              {tier.description}
            </p>

            {/* Turnaround Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6 text-xs font-mono text-white/80">
              <svg className="w-3.5 h-3.5 text-[#ff5e1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tier.turnaround}</span>
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-6" />

            {/* Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#1fb6e8]">
                Included Architectural Deliverables:
              </span>
              {tier.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-[#1fb6e8]/20 border border-[#1fb6e8]/50 flex items-center justify-center shrink-0">
                    <svg className="w-2 h-2 text-[#1fb6e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 leading-snug font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <button
            type="button"
            onClick={() => onSelectTier?.(tier.name)}
            className={`w-full py-4 rounded-xl font-display text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              tier.popular
                ? 'bg-gradient-to-r from-[#ff5e1a] via-[#e9449a] to-[#6f4bff] text-white shadow-xl shadow-[#ff5e1a]/25 hover:opacity-90 hover:scale-[1.02]'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span>Initiate {tier.name}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </DoubleEdgeCard>
      ))}
    </div>
  );
}
