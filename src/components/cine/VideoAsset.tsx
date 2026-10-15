'use client';

// ==============================================================================
// HYBRID STUDIOZ — LAZY-LOADED ACCESSIBLE VIDEO ASSET
// Looping background video with WebP fallback poster and reduced motion compliance
// ==============================================================================

import React, { useRef, useSyncExternalStore } from 'react';

interface VideoAssetProps {
  src: string;
  poster: string;
  className?: string;
  overlayOpacity?: number;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
};

export default function VideoAsset({
  src,
  poster,
  className = '',
  overlayOpacity = 0.2,
}: VideoAssetProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );

  const [videoError, setVideoError] = React.useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Underlying poster is always pre-rendered so there is zero black frame */}
      <img
        src={poster}
        alt="Visual Still"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {!reduced && !videoError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Atmospheric dark gradient overlay */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
