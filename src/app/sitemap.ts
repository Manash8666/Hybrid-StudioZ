import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/content/site';
import { REGIONAL_HUBS } from '@/content/regions';

// ==============================================================================
// HYBRID STUDIOZ — DYNAMIC SITEMAP ENGINE
// Covers all core pages, case studies, and 7 regional authority hubs
// ==============================================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.brand.url || 'https://hybridstudioz.com';
  const currentDate = new Date().toISOString();

  // Core static pages
  const coreRoutes = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/tsukiflow',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.85,
  }));

  // Dynamic regional authority hub pages
  const regionalRoutes = Object.keys(REGIONAL_HUBS).map((slug) => ({
    url: `${baseUrl}/regions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic case study pages
  const projectRoutes = SITE_CONFIG.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...coreRoutes, ...regionalRoutes, ...projectRoutes];
}
