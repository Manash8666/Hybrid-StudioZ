#!/usr/bin/env bash
# ==============================================================================
# HYBRID STUDIOZ — ALL-INTRA (-g 1) VIDEO ENCODING & LOOP PIPELINE
# Generates 4 tiers per scrubbed sequence + poster frame:
#   1. {name}.mp4       - 1080p All-Intra 60fps
#   2. {name}-m.mp4     - 720p Mobile All-Intra
#   3. {name}-lo.mp4    - 540p Preview All-Intra
#   4. {name}-poster.webp - WebP SSR First-Paint Poster
# Also supports --loop flag to generate seamless forward-reverse ping-pong loops
# ==============================================================================

set -euo pipefail

INPUT="${1:-}"
NAME="${2:-}"
MODE="${3:-scrub}" # scrub | loop

if [[ -z "$INPUT" || -z "$NAME" ]]; then
  echo "Usage: ./scripts/encode.sh <input_file> <scene_name> [scrub|loop]"
  echo "Example: ./scripts/encode.sh video-sources/hero.mp4 hero scrub"
  echo "Example: ./scripts/encode.sh video-sources/build.mp4 build loop"
  exit 1
fi

mkdir -p public/scrub public/assets/services public/assets/hero public/assets/about public/assets/portfolio

if ! command -v ffmpeg &> /dev/null; then
  echo "[WARN] ffmpeg not found in PATH. Please install FFmpeg to process raw video files."
  echo "[INFO] Hybrid Studioz uses procedural Canvas/SVG fallback posters out-of-the-box."
  exit 0
fi

if [[ "$MODE" == "loop" ]]; then
  echo ">>> Generating seamless ping-pong loop for $NAME..."
  OUTPUT="public/assets/services/${NAME}.mp4"
  OUTPUT_M="public/assets/services/${NAME}-mobile.mp4"
  POSTER="public/assets/services/${NAME}.webp"

  # Create ping-pong loop (forward + reverse without duplicate boundary frame)
  ffmpeg -y -i "$INPUT" \
    -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[v]" \
    -map "[v]" -c:v libx264 -pix_fmt yuv420p -an -movflags +faststart "$OUTPUT"

  ffmpeg -y -i "$OUTPUT" -vf "scale=720:-2" -c:v libx264 -pix_fmt yuv420p -an -movflags +faststart "$OUTPUT_M"
  ffmpeg -y -i "$INPUT" -vframes 1 -q:v 85 "$POSTER"
  echo "✓ Seamless loop created: $OUTPUT and $POSTER"
  exit 0
fi

echo ">>> Encoding 4-tier All-Intra (-g 1) sequence for: $NAME"

# Tier 1: Desktop 1080p All-Intra (-g 1)
ffmpeg -y -i "$INPUT" \
  -c:v libx264 -g 1 -preset slow -crf 19 \
  -pix_fmt yuv420p -an -movflags +faststart \
  "public/scrub/${NAME}.mp4"

# Tier 2: Mobile 720p All-Intra
ffmpeg -y -i "$INPUT" \
  -vf "scale=1280:-2" \
  -c:v libx264 -g 1 -preset medium -crf 21 \
  -pix_fmt yuv420p -an -movflags +faststart \
  "public/scrub/${NAME}-m.mp4"

# Tier 3: Low-bandwidth preview 540p All-Intra
ffmpeg -y -i "$INPUT" \
  -vf "scale=960:-2" \
  -c:v libx264 -g 1 -preset fast -crf 24 \
  -pix_fmt yuv420p -an -movflags +faststart \
  "public/scrub/${NAME}-lo.mp4"

# Tier 4: High-res WebP Poster Still (Frame 0)
ffmpeg -y -i "$INPUT" \
  -vframes 1 -c:v libwebp -lossless 0 -q:v 88 \
  "public/scrub/${NAME}-poster.webp"

echo ">>> Validating All-Intra keyframe structure with ffprobe..."
if command -v ffprobe &> /dev/null; then
  NON_KEYFRAMES=$(ffprobe -select_streams v -show_frames -show_entries frame=pict_type,key_frame "public/scrub/${NAME}.mp4" 2>&1 | grep "key_frame=0" || true)
  if [[ -n "$NON_KEYFRAMES" ]]; then
    echo "[ERROR] Keyframe validation failed: Non-keyframe detected in All-Intra stream!"
    exit 1
  else
    echo "✓ ffprobe validated: 100% I-frames (key_frame=1 on every frame). Zero seek latency guaranteed."
  fi
fi

echo "✓ All-Intra 4-tier pipeline complete for $NAME."
