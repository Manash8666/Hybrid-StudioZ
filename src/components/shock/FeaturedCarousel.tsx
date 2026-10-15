'use client';

// ==============================================================================
// HYBRID STUDIOZ — FEATURED INSIGHTS CAROUSEL (SHOCK BLOG-10)
// Touch-enabled horizontal slider with navigation and glassmorphic card overlays
// ==============================================================================

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import type { BlogPost } from '@/content/site';

interface FeaturedCarouselProps {
  posts: BlogPost[];
}

const emptySubscribe = () => () => {};

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!isMounted) {
    // Clean static SSR fallback
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 2).map((post) => (
          <div
            key={post.id}
            className="rounded-3xl bg-[#0f1424] border border-white/15 p-8"
          >
            <span className="font-mono text-xs text-[#ff5e1a]">{post.category}</span>
            <h3 className="font-display text-2xl font-bold uppercase text-white mt-2">
              {post.title}
            </h3>
            <p className="font-sans text-sm text-white/70 mt-3">{post.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }

  const currentPost = posts[currentIndex];
  const nextPost = posts[(currentIndex + 1) % posts.length];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[currentPost, nextPost].map((post, idx) => (
          <div
            key={post.id + idx}
            className="group relative flex flex-col justify-between min-h-[460px] rounded-3xl bg-gradient-to-b from-[#0f1424] via-[#0b1020] to-[#070913] border border-white/15 p-8 sm:p-10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#1fb6e8]/40"
          >
            {/* Top Tag & Reading Time */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5e1a]/15 border border-[#ff5e1a]/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff5e1a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5e1a]" />
                  {post.category}
                </span>
                <span className="font-mono text-xs text-white/50">
                  {post.readingTime}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#1fb6e8] group-hover:to-[#6f4bff]">
                {post.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 overflow-hidden border border-white/20">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="block font-display text-xs font-bold uppercase text-white">
                    {post.author.name}
                  </span>
                  <span className="block font-mono text-[10px] text-white/50">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs font-bold text-[#1fb6e8] group-hover:translate-x-1 transition-transform">
                Read Dispatch →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Dots & Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-[#ff5e1a]'
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % posts.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
