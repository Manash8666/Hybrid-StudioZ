'use client';

// ==============================================================================
// HYBRID STUDIOZ — SHOCK DARK ACCORDION (PAGE-FAQ-2)
// Collapsible FAQ drawer system with default 'show' state and search filtering
// ==============================================================================

import React, { useState } from 'react';
import type { FAQItem } from '@/content/site';

interface DarkAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function DarkAccordion({ items, className = '' }: DarkAccordionProps) {
  // Find default open item ID if any
  const defaultOpenId = items.find((i) => i.defaultOpen)?.id || items[0]?.id;
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const isPrimary = item.defaultOpen;

        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? isPrimary
                  ? 'bg-[#0f1424] border-2 border-[#ff5e1a] shadow-[0_10px_40px_rgba(255,94,26,0.15)]'
                  : 'bg-[#0f1424] border border-white/20 shadow-xl'
                : 'bg-[#0b1020]/60 border border-white/5 hover:border-white/15'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4 pr-4">
                <span
                  className={`font-mono text-xs font-bold uppercase tracking-wider ${
                    isOpen ? 'text-[#ff5e1a]' : 'text-white/40'
                  }`}
                >
                  [{item.category.split(' ')[0]}]
                </span>
                <span className="font-display text-base sm:text-xl font-bold tracking-tight text-white">
                  {item.question}
                </span>
              </div>

              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                  isOpen
                    ? 'border-[#ff5e1a] bg-[#ff5e1a] text-white rotate-180'
                    : 'border-white/10 bg-white/5 text-white/60'
                }`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Smooth Animated Height Drawer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-7 pt-2 sm:px-7">
                  <div className="h-[1px] w-full bg-white/10 mb-4" />
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
