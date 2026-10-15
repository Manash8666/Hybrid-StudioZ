const sharp = require('sharp');

async function generateTechVisuals() {
  console.log('Generating AI Studio Architecture & Contact Finale Brand Visuals...');

  // 1. Scene 10 Contact Finale Emblem Graphic (Replacing "closing-muse")
  const finaleSvg = `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1920" height="1080" fill="#02040a" />

    <!-- Ambient Volumetric Cobalt and Sapphire Mesh Glows -->
    <circle cx="1500" cy="540" r="700" fill="url(#cobaltGlow)" />
    <circle cx="1300" cy="400" r="450" fill="url(#electricGlow)" />
    <circle cx="1600" cy="700" r="500" fill="url(#deepSapphire)" />

    <!-- Isometric Digital Tech Grid -->
    <g opacity="0.12" stroke="#0055ff" stroke-width="1">
      ${Array.from({ length: 25 }, (_, i) => `<line x1="${800 + i * 50}" y1="0" x2="${800 + i * 50}" y2="1080" />`).join('')}
      ${Array.from({ length: 22 }, (_, i) => `<line x1="800" y1="${i * 50}" x2="1920" y2="${i * 50}" />`).join('')}
    </g>

    <defs>
      <radialGradient id="cobaltGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0055ff" stop-opacity="0.45" />
        <stop offset="50%" stop-color="#052688" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#02040a" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="electricGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1a66ff" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#0055ff" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="deepSapphire" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0a3ce8" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#02040a" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="wingTop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#949cb0" />
      </linearGradient>
      <linearGradient id="wingBottom" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#686e7a" />
        <stop offset="100%" stop-color="#dce0e8" />
      </linearGradient>
    </defs>

    <!-- Monumental 3D Metallic Hybrid Studioz Emblem Floating in Cobalt Bleed -->
    <g transform="translate(1150, 240) scale(4.8)">
      <!-- Top-Left Crescent Wing -->
      <path
        d="M46 6C24 14 8 30 4 46C12 56 20 62 28 66C32 44 40 24 46 6Z"
        fill="url(#wingTop)"
      />

      <!-- Bottom-Right Crescent Wing -->
      <path
        d="M58 68C62 86 58 102 52 116C72 108 86 92 90 78C82 66 70 62 58 68Z"
        fill="url(#wingBottom)"
      />

      <!-- Core Interlocking White 'H/S' Ribbon -->
      <path
        d="M78 10C48 16 28 38 28 58C28 74 44 76 62 74C78 72 90 80 86 98C98 84 102 62 86 50C72 40 52 44 48 32C44 22 58 14 78 10Z"
        fill="#ffffff"
      />
    </g>

    <!-- Floating Futuristic Telemetry Tags -->
    <g font-family="monospace" font-size="12" fill="#8a919e" letter-spacing="2">
      <text x="1350" y="860">HYBRID STUDIOZ // SYSTEM ZERO-CUT</text>
      <text x="1350" y="885" fill="#0055ff">NODE STATUS: 100% OPERATIONAL</text>
      <text x="1350" y="910">ENCRYPTED TELEMETRY STREAM // 2026</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(finaleSvg)).webp({ quality: 95 }).toFile('public/assets/about/closing-muse.webp');
  await sharp(Buffer.from(finaleSvg)).jpeg({ quality: 95 }).toFile('public/assets/about/closing-muse.jpg');

  // 2. Scene 06 Studio DNA and Architect Command Center Graphic (Replacing "portrait")
  const portraitSvg = `
  <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="900" fill="#05070e" />

    <!-- Ambient Cobalt Radial Bleed -->
    <circle cx="600" cy="450" r="450" fill="url(#centerGlow)" />

    <defs>
      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0055ff" stop-opacity="0.25" />
        <stop offset="60%" stop-color="#052688" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#05070e" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0055ff" />
        <stop offset="100%" stop-color="#00ddff" />
      </linearGradient>
    </defs>

    <!-- Tech Grid Matrix -->
    <g opacity="0.08" stroke="#ffffff" stroke-width="1">
      ${Array.from({ length: 24 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="900" />`).join('')}
      ${Array.from({ length: 18 }, (_, i) => `<line x1="0" y1="${i * 50}" x2="1200" y2="${i * 50}" />`).join('')}
    </g>

    <!-- Glassmorphic Tech Architecture Node Container -->
    <rect x="80" y="80" width="1040" height="740" rx="24" fill="#0b1020" fill-opacity="0.85" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Terminal Top Bar -->
    <rect x="80" y="80" width="1040" height="54" rx="24" fill="#05070e" />
    <circle cx="120" cy="107" r="6" fill="#ff5e1a" />
    <circle cx="140" cy="107" r="6" fill="#f59e0b" />
    <circle cx="160" cy="107" r="6" fill="#10b981" />
    <text x="200" y="112" font-family="monospace" font-size="13" fill="#8a919e" letter-spacing="1">HYBRID STUDIOZ // ARCHITECTURE COMMAND CENTER</text>

    <!-- Architecture Nodes -->
    <!-- Node 1: AI SaaS Kernel -->
    <g transform="translate(140, 180)">
      <rect width="260" height="150" rx="16" fill="#121629" stroke="rgba(0,85,255,0.4)" stroke-width="1" />
      <text x="24" y="40" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">AI SaaS Engine</text>
      <text x="24" y="65" font-family="monospace" font-size="11" fill="#0055ff">v4.2.0 • ACTIVE</text>
      <text x="24" y="95" font-family="sans-serif" font-size="12" fill="#8a919e">Autonomous Agents</text>
      <text x="24" y="115" font-family="sans-serif" font-size="12" fill="#8a919e">Multi-Tenant Cloud DB</text>
    </g>

    <!-- Node 2: Web Architecture -->
    <g transform="translate(470, 180)">
      <rect width="260" height="150" rx="16" fill="#121629" stroke="rgba(0,221,255,0.4)" stroke-width="1" />
      <text x="24" y="40" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">Web Engineering</text>
      <text x="24" y="65" font-family="monospace" font-size="11" fill="#00ddff">NEXT.JS 15 • 60 FPS</text>
      <text x="24" y="95" font-family="sans-serif" font-size="12" fill="#8a919e">All-Intra Scrubbing</text>
      <text x="24" y="115" font-family="sans-serif" font-size="12" fill="#8a919e">Sub-Millisecond Ticks</text>
    </g>

    <!-- Node 3: Digital Marketing and Creative -->
    <g transform="translate(800, 180)">
      <rect width="260" height="150" rx="16" fill="#121629" stroke="rgba(255,94,26,0.4)" stroke-width="1" />
      <text x="24" y="40" font-family="sans-serif" font-weight="bold" font-size="16" fill="#ffffff">Growth &amp; Creativity</text>
      <text x="24" y="65" font-family="monospace" font-size="11" fill="#ff5e1a">HIGH CONVERSION</text>
      <text x="24" y="95" font-family="sans-serif" font-size="12" fill="#8a919e">Brand Identity Systems</text>
      <text x="24" y="115" font-family="sans-serif" font-size="12" fill="#8a919e">Omni-Channel Funnels</text>
    </g>

    <!-- Live Performance Visualizer Bars -->
    <g transform="translate(140, 380)">
      <rect width="920" height="380" rx="18" fill="#070a14" stroke="rgba(255,255,255,0.06)" />
      <text x="30" y="45" font-family="sans-serif" font-weight="bold" font-size="15" fill="#ffffff">Global Production Nodes // Real-Time Telemetry</text>

      <!-- Connecting Data Flow Graph -->
      <path d="M50 240 Q 250 120 450 200 T 850 140" fill="none" stroke="url(#codeGrad)" stroke-width="3" />
      <circle cx="50" cy="240" r="5" fill="#0055ff" />
      <circle cx="250" cy="155" r="5" fill="#00ddff" />
      <circle cx="450" cy="200" r="5" fill="#0055ff" />
      <circle cx="650" cy="170" r="5" fill="#00ddff" />
      <circle cx="850" cy="140" r="7" fill="#ffffff" stroke="#0055ff" stroke-width="3" />

      <!-- Metric Pills -->
      <g transform="translate(30, 80)">
        <text x="0" y="20" font-family="monospace" font-size="12" fill="#8a919e">LATENCY: <tspan fill="#10b981">14ms</tspan></text>
        <text x="180" y="20" font-family="monospace" font-size="12" fill="#8a919e">UPTIME: <tspan fill="#10b981">99.99%</tspan></text>
        <text x="360" y="20" font-family="monospace" font-size="12" fill="#8a919e">CONVERSION: <tspan fill="#00ddff">+340%</tspan></text>
        <text x="560" y="20" font-family="monospace" font-size="12" fill="#8a919e">CLIENTS: <tspan fill="#ffffff">GLOBAL ENTERPRISE</tspan></text>
      </g>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(portraitSvg)).webp({ quality: 95 }).toFile('public/assets/about/portrait.webp');
  await sharp(Buffer.from(portraitSvg)).jpeg({ quality: 95 }).toFile('public/assets/about/portrait.jpg');

  console.log('All Tech and Brand visual assets successfully generated.');
}

generateTechVisuals().catch(console.error);
