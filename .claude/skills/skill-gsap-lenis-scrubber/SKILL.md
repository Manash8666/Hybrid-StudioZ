---
name: skill-gsap-lenis-scrubber
description: Enforces single-clock synchronization between Lenis smooth scroll and GSAP ScrollTrigger (gsap.ticker.add), Blob URL pre-fetching for zero-latency frame scrubbing, and strict prefers-reduced-motion static fallbacks.
---

# GSAP + Lenis Scrubber Skill

This skill enforces seamless single-clock smooth scrolling and zero-lag video scrubbing:
1. **Single-Clock Synchronization:**
   - Lenis smooth scroll (`duration: 1.1`, `wheelMultiplier: 0.95`) must hook into GSAP's ticker:
     ```ts
     lenis.on('scroll', ScrollTrigger.update);
     gsap.ticker.add((time) => {
       lenis.raf(time * 1000);
     });
     gsap.ticker.lagSmoothing(0);
     ```
   - ScrollTrigger and VideoScrubber never drift out of sync.

2. **Blob URL Pre-Fetching:**
   - Scrubbed videos are fetched completely into memory as `Blob` objects and accessed via `URL.createObjectURL(blob)`.
   - Seeking happens in memory without network request delays, preventing stutter during aggressive wheel scrubbing.

3. **Accessibility & Reduced Motion:**
   - Detects `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - When active, sticky pinning and video scrubbing are gracefully replaced by static poster images and clean stacked editorial layouts.
