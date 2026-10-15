# AGENTS.md — Hybrid Studioz AI Architecture Rules

<!-- BEGIN:nextjs-agent-rules -->
## Next.js Rules
Follow App Router conventions in `src/app/`, TypeScript strict standards, and modern React 19 / Next.js best practices.
<!-- END:nextjs-agent-rules -->

## Registered Skills & Guidelines

### 1. `skill-all-intra-video-pipeline`
- Executes `scripts/encode.sh` using FFmpeg (`-c:v libx264 -g 1 -pix_fmt yuv420p -an -movflags +faststart`).
- Generates 4 required tiers per scrubbed scene: `{name}.mp4`, `{name}-m.mp4`, `{name}-lo.mp4`, and `{name}-poster.webp`.
- Enforces keyframe-only output verified via `ffprobe`.
- Provides procedural SVG/Canvas fallbacks in `src/lib/scrubber.ts` when videos are not present.

### 2. `skill-gsap-lenis-scrubber`
- Enforces single-clock synchronization between Lenis smooth scroll and GSAP ScrollTrigger (`gsap.ticker.add`).
- Manages memory Blob URL pre-fetching for zero-latency random seeking on scrubbed scenes.
- Enforces strict `prefers-reduced-motion` fallbacks to static posters and non-pinned layouts.

### 3. `skill-shock-ui-system`
- Implements high-contrast dark/light editorial components from the Shock reference design system:
  - Super Headings with gradient marks (`<SuperHeading />`)
  - Double-Edge & Outline Cards (`<DoubleEdgeCard />`)
  - Magnetic Tilt Cards (`<MagneticCard />`)
  - Rotating SVG Circular Badges (`<CircularText />`)
  - Swiper Touch Carousels (`insights/page.tsx`)
  - Global Direct Modal Form (`<DirectModal />`)
  - Collapsible Accordions with Search (`<DarkAccordion />`)
