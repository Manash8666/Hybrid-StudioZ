# CLAUDE.md — Hybrid Studioz Command & Workflow Reference

## Architecture Overview
Hybrid Studioz fuses two paradigms:
1. **SlaqAI Cinematic Scroll-Scrub Engine:** Scroll wheel controls the video playhead mapped to All-Intra (`-g 1`) H.264 video blobs, featuring seamless "nothing cuts" hand-offs, live HTML/CSS editorial typography, film grain, custom trailing cursor, and chapter progress index.
2. **Shock Creative Agency UI System:** High-conversion agency structures (`home-6`, `home-5`, `portfolio-7`, `portfolio-project-4`, `page-services-2`, `blog-10`, `page-contact-2`, and `page-faq-2`).

## Common Commands
- `npm run dev`: Start Next.js development server
- `npm run build`: Compile production bundle and typecheck
- `npm run lint`: Run ESLint checks
- `bash scripts/encode.sh <input-video> <scene-name>`: Encode all-intra video into 4 tiers in `/public/scrub/`

## Golden Rules
- All text is live HTML/CSS layered over media—never rasterized into video/image files.
- Single-clock synchronization: Lenis driven by `gsap.ticker.add`.
- Blob URL pre-fetching for instant scrubbing without network lag.
- Respect `prefers-reduced-motion` with graceful static poster degradation.
