# ASSETS.md — Media Asset Register & Encoding Specifications

## 1. Required Scrubbed Sequences (`/public/scrub/`)
Each scrubbed sequence provides 4 tiers encoded via `scripts/encode.sh`:
- `{name}.mp4` (Desktop 1080p, All-Intra `-g 1`, 60fps)
- `{name}-m.mp4` (Mobile 720p, All-Intra `-g 1`)
- `{name}-lo.mp4` (Low-bandwidth 540p, All-Intra `-g 1`)
- `{name}-poster.webp` (First-frame WebP still for instant SSR paint)

### Scenes Register:
| Scene | Name | Duration | Frames | FPS | Resolution | Focal Point | Purpose |
|---|---|---|---|---|---|---|---|
| Scene 01 | `hero` | 6.0s | 360 | 60 | 1920x1080 | `[0.66, 0.50]` | Volumetric liquid data clouds (cyan/violet/magenta) |
| Scene 02 | `story` | 6.0s | 360 | 60 | 1920x1080 | `[0.57, 0.50]` | Translucent couture blueprint figure walking left-to-right |
| Scene 04 | `organism` | 6.0s | 360 | 60 | 1920x1080 | `[0.50, 0.50]` | Bioluminescent fibre-optic core erupting from letter "D" |
| Scene 05 | `eye` | 4.0s | 240 | 60 | 1920x1080 | `[0.50, 0.50]` | Macro human eye with natural blink at ~55% duration |

## 2. Looping & Static Showcase Assets (`/public/assets/`)
- `/assets/services/build.mp4`: Seamless ping-pong loop of creator in black technical streetwear against billowing orange (`#ff5e1a`) ink.
- `/assets/hero/paint-bridge.webp`: Visual connector pouring out from Hero cloud into the horizontal gallery pan.
- `/assets/about/portrait.webp`: Swiss Bauhaus mosaic portrait of creator / studio DNA.
- `/assets/about/closing-muse.webp`: Minimalist cobalt-petal portrait on right half with empty left space for finale headline.
- `/assets/portfolio/`: High-resolution editorial visuals for flagship client works (`echowear-hero.webp`, `nexus-ai.webp`, `vortex-spatial.webp`, `lumina-os.webp`, `hyperpulse.webp`, `kroma.webp`).

## 3. High-Art Procedural Fallback Engine
When physical `.mp4` video files are not yet present in `/public/scrub/`, the `VideoScrubber` class automatically boots a procedural 60fps WebGL/Canvas synthetic scrubber engine and ultra-clean high-art SVG posters.
As soon as `.mp4` files are dropped into `/public/scrub/`, the engine auto-detects and upgrades seamlessly to blob-prefetched video scrubbing without changing a single line of application code.
