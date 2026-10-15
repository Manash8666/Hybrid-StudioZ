const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Manas\\.gemini\\antigravity-ide\\brain\\da78518e-16ac-46dc-86b7-a55886afda4f';
const heroSrc = path.join(brainDir, 'hero_ai_saas_platform_1792055065968.jpg');
const storySrc = path.join(brainDir, 'saas_web_engineering_1792055094136.jpg');
const nexusSrc = path.join(brainDir, 'nexus_ai_1792050214770.jpg');
const vortexSrc = path.join(brainDir, 'vortex_spatial_1792050237517.jpg');

async function processAssets() {
  console.log('Processing core AI SaaS assets with Sharp...');

  // 1. Scrub Posters
  await sharp(heroSrc).webp({ quality: 90 }).toFile('public/scrub/hero-poster.webp');
  await sharp(heroSrc).jpeg({ quality: 90 }).toFile('public/scrub/hero-poster.jpg');

  await sharp(storySrc).webp({ quality: 90 }).toFile('public/scrub/story-poster.webp');
  await sharp(storySrc).jpeg({ quality: 90 }).toFile('public/scrub/story-poster.jpg');

  await sharp(nexusSrc).webp({ quality: 90 }).toFile('public/scrub/organism-poster.webp');
  await sharp(nexusSrc).jpeg({ quality: 90 }).toFile('public/scrub/organism-poster.jpg');

  await sharp(vortexSrc).webp({ quality: 90 }).toFile('public/scrub/eye-poster.webp');
  await sharp(vortexSrc).jpeg({ quality: 90 }).toFile('public/scrub/eye-poster.jpg');

  // 2. Services Build
  await sharp(storySrc).webp({ quality: 90 }).toFile('public/assets/services/build.webp');
  await sharp(storySrc).jpeg({ quality: 90 }).toFile('public/assets/services/build.jpg');

  // 3. Pan Panorama
  await sharp(storySrc).resize(1920, 1080).webp({ quality: 90 }).toFile('public/assets/hero/paint-bridge.webp');
  await sharp(storySrc).resize(1920, 1080).jpeg({ quality: 90 }).toFile('public/assets/hero/paint-bridge.jpg');
  await sharp(storySrc).resize(960, 540).webp({ quality: 85 }).toFile('public/assets/hero/paint-bridge-m.webp');

  // 4. Portfolio Projects (AI SaaS, Web Dev, Marketing, Branding)
  await sharp(heroSrc).webp({ quality: 90 }).toFile('public/assets/portfolio/echowear-hero.webp');
  await sharp(heroSrc).jpeg({ quality: 90 }).toFile('public/assets/portfolio/echowear-hero.jpg');

  await sharp(nexusSrc).webp({ quality: 90 }).toFile('public/assets/portfolio/nexus-ai.webp');
  await sharp(nexusSrc).jpeg({ quality: 90 }).toFile('public/assets/portfolio/nexus-ai.jpg');

  await sharp(vortexSrc).webp({ quality: 90 }).toFile('public/assets/portfolio/vortex-spatial.webp');
  await sharp(vortexSrc).jpeg({ quality: 90 }).toFile('public/assets/portfolio/vortex-spatial.jpg');

  await sharp(heroSrc).webp({ quality: 90 }).toFile('public/assets/portfolio/lumina-os.webp');
  await sharp(storySrc).webp({ quality: 90 }).toFile('public/assets/portfolio/hyperpulse.webp');
  await sharp(vortexSrc).webp({ quality: 90 }).toFile('public/assets/portfolio/kroma.webp');

  console.log('Core assets converted and written successfully.');
}

processAssets().catch(console.error);
