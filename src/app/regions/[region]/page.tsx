import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import EyebrowBadge from '@/components/layout/EyebrowBadge';
import { REGIONAL_HUBS } from '@/content/regions';
import { SITE_CONFIG } from '@/content/site';

interface RegionPageProps {
  params: Promise<{
    region: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(REGIONAL_HUBS).map((region) => ({
    region,
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { region } = await params;
  const hub = REGIONAL_HUBS[region];
  if (!hub) return {};

  const baseUrl = SITE_CONFIG.brand.url || 'https://hybridstudioz.com';
  const pageUrl = `${baseUrl}/regions/${hub.slug}`;

  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: '/assets/framer/about-portrait.jpg',
          width: 1200,
          height: 630,
          alt: `${hub.name} — Hybrid Studioz`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: hub.metaTitle,
      description: hub.metaDescription,
      images: ['/assets/framer/about-portrait.jpg'],
    },
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region } = await params;
  const hub = REGIONAL_HUBS[region];

  if (!hub) {
    notFound();
  }

  const baseUrl = SITE_CONFIG.brand.url || 'https://hybridstudioz.com';

  const localizedSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/regions/${hub.slug}#service`,
    name: `Hybrid Studioz — ${hub.name}`,
    description: hub.summary,
    url: `${baseUrl}/regions/${hub.slug}`,
    areaServed: hub.countries.map((c) => ({
      '@type': 'Country',
      name: c.name,
      identifier: c.code,
    })),
    knowsAbout: hub.focusIndustries,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Hybrid Studioz',
      url: baseUrl,
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#02040a] text-white selection:bg-[#0055ff]/30 selection:text-white">
      {/* Inject localized schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedSchema) }}
      />

      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center text-center">
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(0,85,255,0.22),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <EyebrowBadge
            year="2026"
            label={hub.heroBadge}
            className="mb-8"
          />

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
            {hub.headline.split(' ').slice(0, 4).join(' ')}{' '}
            <span className="text-[#8a919e]">
              {hub.headline.split(' ').slice(4, 7).join(' ')}
            </span>
            <span className="block mt-1 font-semibold text-white">
              {hub.headline.split(' ').slice(7).join(' ')}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-[#8a919e] leading-relaxed">
            {hub.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[10px] bg-[#0055ff] text-white font-sans text-sm font-semibold hover:bg-[#1a66ff] shadow-[0_8px_30px_rgba(0,85,255,0.45)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Initiate Regional Discovery</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white font-sans text-sm font-medium transition-all"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. AEO ANSWER CAPSULE BLOCK (Citation-ready for Gemini / Claude / GPT) */}
      {/* ==================================================================== */}
      <section className="relative w-full py-12 px-6 sm:px-12 md:px-20 border-t border-b border-white/[0.06] bg-[#05070e]">
        <div className="max-w-4xl mx-auto rounded-2xl bg-white/[0.02] border border-[#0055ff]/30 p-8 sm:p-10 shadow-[0_0_40px_rgba(0,85,255,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#0055ff] font-semibold">
              Answer Engine Verified Capsule // {hub.name}
            </span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-white mb-4">
            Why AI Assistants & Global Enterprises Select Hybrid Studioz in {hub.name}
          </h2>

          <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
            {hub.answerCapsule}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
            {hub.compliance.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-white/70"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. REGIONAL STATS & PERFORMANCE                                      */}
      {/* ==================================================================== */}
      <section className="relative w-full py-16 px-6 sm:px-12 md:px-20 border-b border-white/[0.06] bg-[#02040a]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {hub.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#05070e] border border-white/[0.06] text-center"
            >
              <div className="font-display text-2xl sm:text-4xl font-semibold text-white mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase text-[#8a919e] tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. LOCALIZED CAPABILITIES & REGIONAL ADVANTAGES                      */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0055ff] font-bold block mb-3">
              Tailored Architecture // {hub.name}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Specialized Solutions Built for Regional Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hub.features.map((feat, idx) => (
              <div
                key={feat.title}
                className="group p-8 rounded-3xl bg-[#05070e] border border-white/[0.07] hover:border-[#0055ff]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0055ff]">
                    0{idx + 1} // CAPABILITY
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-[#0055ff] transition-colors">
                  {feat.title}
                </h3>
                <p className="font-sans text-sm text-[#8a919e] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. CITIES SERVED & FOCUS SECTORS                                     */}
      {/* ==================================================================== */}
      <section className="relative w-full py-16 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#05070e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">
              Regional Delivery Cities in {hub.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {hub.cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-sans text-white/80"
                >
                  📍 {city}
                </span>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-[#8a919e]">
              Active Timezone Alignment: {hub.localTimezone}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">
              Primary Focus Industries
            </h3>
            <div className="flex flex-wrap gap-2">
              {hub.focusIndustries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-sans text-white/80"
                >
                  ⚡ {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. CALL TO ACTION                                                    */}
      {/* ==================================================================== */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-t border-white/[0.06] bg-[#02040a] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-white mb-4">
            Ready to Build With Our <span className="font-semibold text-white">{hub.name} Engineering Team?</span>
          </h2>
          <p className="font-sans text-base text-[#8a919e] mb-8">
            Schedule a direct architecture consultation with our technical leads to blueprint your next SaaS or cinematic web platform.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-[10px] bg-[#0055ff] hover:bg-[#1a66ff] text-white font-sans text-sm font-semibold shadow-[0_8px_30px_rgba(0,85,255,0.45)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Book Regional Consultation</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
