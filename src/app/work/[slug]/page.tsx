import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/content/site';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.projects.map((proj) => ({
    slug: proj.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = SITE_CONFIG.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for footer loop
  const currentIndex = SITE_CONFIG.projects.findIndex((p) => p.slug === slug);
  const nextProject = SITE_CONFIG.projects[(currentIndex + 1) % SITE_CONFIG.projects.length];

  return (
    <div className="relative min-h-screen bg-[#070913] text-white pt-32 pb-24 px-6 sm:px-8 lg:px-12 select-none">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#1fb6e8]/10 via-[#6f4bff]/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-[#ff5e1a] font-bold">{project.title}</span>
        </nav>

        {/* Full-Bleed Dark Hero Banner */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-[#1fb6e8]/10 border border-[#1fb6e8]/30 px-3 py-1 font-mono text-xs font-bold uppercase text-[#1fb6e8]">
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/50">
              {project.timeline}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
            {project.title}
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-white/70 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#0b1020] mb-20 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />
        </div>

        {/* 2-Column Split: Sticky Metadata Left + Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Sticky Left Metadata Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8 p-8 rounded-3xl bg-[#0b1020] border border-white/10 shadow-xl">
              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff5e1a] mb-1">
                  Client Organization
                </span>
                <span className="font-display text-xl font-bold uppercase text-white">
                  {project.client}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#1fb6e8] mb-1">
                  Timeline & Status
                </span>
                <span className="font-sans text-sm text-white/80">
                  {project.year} • {project.timeline}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#6f4bff] mb-2">
                  Engineered Deliverables
                </span>
                <ul className="space-y-1.5 font-sans text-xs text-white/70">
                  {project.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6f4bff]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff5e1a] to-[#e9449a] font-display text-xs font-black uppercase tracking-wider text-white text-center block shadow-lg shadow-[#ff5e1a]/25 hover:opacity-90 transition-opacity"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge Beat */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5e1a]">
                01 // The Strategic Challenge
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
                Reinventing Category Perception
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                {project.overview.challenge}
              </p>
            </div>

            {/* Measurable ROI Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-6 rounded-2xl bg-[#0b1020] border border-white/10"
                >
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#1fb6e8]">
                    {m.value}
                  </span>
                  <span className="block font-display text-sm font-bold uppercase text-white mt-1">
                    {m.label}
                  </span>
                  <span className="block font-mono text-xs text-white/50 mt-1">
                    {m.change}
                  </span>
                </div>
              ))}
            </div>

            {/* The Hybrid Solution Beat */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
                02 // The Hybrid Engineering Solution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
                All-Intra Scrubbing & Spatial 3D
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                {project.overview.solution}
              </p>
            </div>

            {/* Interactive Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#070913]"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Impact & Results */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6f4bff]">
                03 // Business Impact & Market Result
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
                Category Dominance & Sellout
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                {project.overview.impact}
              </p>
            </div>

            {/* Client Quote Card */}
            {project.quote && (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0f1424] border border-[#ff5e1a]/30 shadow-2xl">
                <blockquote className="font-sans text-lg sm:text-xl italic text-white/90 leading-relaxed mb-6">
                  &ldquo;{project.quote.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff5e1a]" />
                  <div>
                    <span className="block font-display text-sm font-black uppercase text-white">
                      {project.quote.author}
                    </span>
                    <span className="block font-mono text-xs text-white/50">
                      {project.quote.role}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Magnetic Next Project Link */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            ← Back to All Case Studies
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-4 text-right"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-[#ff5e1a]">
                Next Case Study
              </span>
              <span className="font-display text-2xl font-black uppercase text-white group-hover:text-[#1fb6e8] transition-colors">
                {nextProject.title} →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
