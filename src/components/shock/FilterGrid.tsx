'use client';

// ==============================================================================
// HYBRID STUDIOZ — PORTFOLIO-7 FILTER GRID HEADER
// Dynamic category switcher with active neon pill and item count badges
// ==============================================================================

import React from 'react';

interface FilterGridProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  counts?: Record<string, number>;
  className?: string;
}

export default function FilterGrid({
  categories,
  activeCategory,
  onSelectCategory,
  counts = {},
  className = '',
}: FilterGridProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category];

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              isActive
                ? 'bg-white text-[#070913] shadow-lg shadow-white/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`flex h-4 min-w-[1rem] items-center justify-center rounded-full px-1 text-[9px] font-mono font-bold transition-colors ${
                  isActive
                    ? 'bg-[#070913] text-white'
                    : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
