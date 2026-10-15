---
name: skill-all-intra-video-pipeline
description: Executes scripts/encode.sh using FFmpeg (-c:v libx264 -g 1 -pix_fmt yuv420p -an -movflags +faststart) to generate 4 tiers per scrubbed scene and validates keyframe-only output via ffprobe.
---

# All-Intra Video Pipeline Skill

This skill enforces high-performance, frame-accurate scrubbed video assets:
1. **FFmpeg Encoding Flags:**
   - Codec: `-c:v libx264`
   - GOP size: `-g 1` (All-Intra, keyframe on every single frame for instantaneous random seeking)
   - Pixel Format: `-pix_fmt yuv420p`
   - Audio: `-an` (stripped for optimal payload size)
   - Flags: `-movflags +faststart` (streamable header placed at start of file)

2. **Generated 4 Tiers per Scene:**
   - `{name}.mp4`: Full 1080p desktop 60fps
   - `{name}-m.mp4`: 720p mobile / tablet
   - `{name}-lo.mp4`: 540p fast preview tier
   - `{name}-poster.webp`: WebP poster frame for instant SSR / initial paint

3. **Validation Gate:**
   - Validates keyframe structure using `ffprobe -select_streams v -show_frames -show_entries frame=pict_type,key_frame` ensuring every frame has `key_frame=1` and `pict_type=I`.
   - Generates procedural/SVG fallbacks when video source is unavailable.
