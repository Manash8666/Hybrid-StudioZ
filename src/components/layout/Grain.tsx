'use client';

// ==============================================================================
// HYBRID STUDIOZ — PROCEDURAL FILM GRAIN CANVAS OVERLAY
// Ultra-lightweight noise generator for that cinematic film grain texture
// ==============================================================================

import { useEffect, useRef } from 'react';

export default function Grain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 128);
    const height = (canvas.height = 128);

    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = width;
    patternCanvas.height = height;
    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) return;

    const imgData = patternCtx.createImageData(width, height);
    const buffer32 = new Uint32Array(imgData.data.buffer);

    let frameCount = 0;

    const loop = () => {
      // Update grain noise every 3 frames for subtle analog motion
      if (frameCount % 3 === 0) {
        for (let i = 0; i < buffer32.length; i++) {
          const val = (Math.random() * 255) | 0;
          // Monochrome noise with subtle alpha
          buffer32[i] = (22 << 24) | (val << 16) | (val << 8) | val;
        }
        patternCtx.putImageData(imgData, 0, 0);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      frameCount++;
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-40 mix-blend-overlay"
      aria-hidden="true"
    />
  );
}
