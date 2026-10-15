import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/content/site';

// ==============================================================================
// HYBRID STUDIOZ — ROBOTS.TXT WITH FULL GENERATIVE AI ENGINE WHITELISTS
// Explicitly permits Google Gemini, ChatGPT, Claude, and Perplexity ingestion
// ==============================================================================

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.brand.url || 'https://hybridstudioz.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // Google Gemini & AI Overviews
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
      },
      // OpenAI ChatGPT Search & GPTBot
      {
        userAgent: ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User'],
        allow: '/',
      },
      // Anthropic Claude & ClaudeBot
      {
        userAgent: ['ClaudeBot', 'Claude-Web', 'anthropic-ai'],
        allow: '/',
      },
      // Perplexity & Other Generative Answer Engines
      {
        userAgent: ['PerplexityBot', 'Applebot-Extended', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
