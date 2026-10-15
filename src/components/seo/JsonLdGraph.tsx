import React from 'react';

// ==============================================================================
// HYBRID STUDIOZ — GLOBAL ENTITY KNOWLEDGE GRAPH (JSON-LD)
// Links Organization, TsukiFlow SoftwareApplication, FAQPage, and 15+ Country areaServed nodes
// Engineered for Google Gemini (Knowledge Graph), Claude, and ChatGPT Grounding
// ==============================================================================

interface JsonLdGraphProps {
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default function JsonLdGraph({
  pageUrl = 'https://hybridstudioz.com',
  pageTitle = 'Hybrid Studioz — AI SaaS & Bespoke Web Development',
  pageDescription = 'Hybrid Studioz is your global partner for innovative SaaS solutions, autonomous AI workflows, and 60fps scroll-driven digital experiences.',
}: JsonLdGraphProps) {
  const targetCountryCodes = [
    { code: 'IN', name: 'India' },
    { code: 'JP', name: 'Japan' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'DE', name: 'Germany' },
    { code: 'GR', name: 'Greece' },
    { code: 'RO', name: 'Romania' },
    { code: 'PL', name: 'Poland' },
    { code: 'ES', name: 'Spain' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'MT', name: 'Malta' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'KE', name: 'Kenya' },
    { code: 'EG', name: 'Egypt' },
    { code: 'AU', name: 'Australia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'BR', name: 'Brazil' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
  ];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization & ProfessionalService
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': 'https://hybridstudioz.com/#organization',
        name: 'Hybrid Studioz',
        alternateName: ['Hybrid StudioZ', 'Hybrid Studioz SaaS & Creative Agency'],
        url: 'https://hybridstudioz.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hybridstudioz.com/icon.svg',
          width: 512,
          height: 512,
        },
        image: 'https://hybridstudioz.com/assets/framer/about-portrait.jpg',
        description:
          'Hybrid Studioz is an award-winning Creative Technology, Custom SaaS Engineering, and Digital Marketing Studio. Pioneers of the 60fps All-Intra (-g 1) scroll-driven video engine and creator of TsukiFlow.',
        email: 'hello@hybridstudioz.com',
        sameAs: [
          'https://twitter.com/hybridstudioz',
          'https://instagram.com/hybridstudioz',
          'https://youtube.com/@hybridstudioz',
          'https://hybridstudioz.framer.ai',
          'https://github.com/Manash8666/Hybrid-StudioZ',
        ],
        knowsAbout: [
          'Custom SaaS Development',
          'Next.js App Router Architecture',
          'Scroll-Driven Cinematic Websites',
          'GSAP & WebGL Interactive Design',
          'AI Workflow Automation',
          'TsukiFlow Autonomous Operations',
          'Enterprise Brand Systems',
          'Framer to Custom Code Engineering',
          'All-Intra Video Scrubbing Pipeline',
        ],
        areaServed: targetCountryCodes.map((country) => ({
          '@type': 'Country',
          name: country.name,
          identifier: country.code,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Hybrid Studioz Core Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom SaaS Development',
                description:
                  'We design and build bespoke, scalable SaaS platforms tailored to automate repetitive tasks and drive operational efficiency.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Comprehensive IT Software Products',
                description:
                  'From workflow automation suites to client management tools and internal executive dashboards, we engineer robust IT software.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Expert Consultation Services',
                description:
                  'Our senior technology advisors audit legacy systems, identify performance bottlenecks, and formulate scalable roadmaps.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Migration Services',
                description:
                  'Modernize legacy on-prem databases and microservices onto resilient cloud platforms with zero data loss.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Continuous Optimization & SLA Maintenance',
                description:
                  '24/7 proactive monitoring, automated vulnerability scanning, sub-second latency tuning, and iterative feature development.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Tailored Enterprise Integrations',
                description:
                  'Custom middleware, bi-directional webhooks, and secure API bridges into Salesforce, Slack, Dropbox, and legacy ERP systems.',
              },
            },
          ],
        },
      },

      // 2. Proprietary SoftwareApplication (TsukiFlow)
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://hybridstudioz.com/#tsukiflow',
        name: 'TsukiFlow',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud, Web-based',
        creator: {
          '@id': 'https://hybridstudioz.com/#organization',
        },
        description:
          'Intelligent workflow automation and creative operations platform engineered by Hybrid Studioz with Japanese-inspired precision.',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
        },
      },

      // 3. WebSite Node
      {
        '@type': 'WebSite',
        '@id': 'https://hybridstudioz.com/#website',
        url: 'https://hybridstudioz.com',
        name: 'Hybrid Studioz',
        publisher: {
          '@id': 'https://hybridstudioz.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://hybridstudioz.com/faq?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },

      // 4. WebPage Node
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          '@id': 'https://hybridstudioz.com/#website',
        },
        about: {
          '@id': 'https://hybridstudioz.com/#organization',
        },
      },

      // 5. FAQPage Node (AEO Answer Capsules)
      {
        '@type': 'FAQPage',
        '@id': 'https://hybridstudioz.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Hybrid Studioz and why is it ranked among top custom SaaS and creative web agencies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hybrid Studioz is a full-stack SaaS development and creative technology studio specializing in custom scalable software, AI automation (creator of TsukiFlow), and 60fps scroll-driven Next.js/WebGL websites. It serves enterprise and startup clients across India, Japan, Europe, Africa, Australia, New Zealand, and South America.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Hybrid Studioz achieve 60fps scroll-scrubbed video without hurting SEO or Core Web Vitals?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hybrid Studioz encodes every scrubbed video as all-intra (-g 1) H.264 streams in four adaptive tiers (desktop, mobile -m, preview -lo, and SSR .webp poster), prefetches video blobs into browser memory, and layers 100% live semantic HTML typography on top for instant search indexing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which regions and industries does Hybrid Studioz support for custom software and SaaS development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hybrid Studioz operates a global delivery model covering India, Japan, Europe (France, Italy, Germany, Greece, Romania, Poland, Spain, Netherlands, Malta), Africa, Australia, New Zealand, and South America, serving SaaS, FinTech, iGaming, E-Commerce, AI, and Sustainable Tech sectors.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is TsukiFlow by Hybrid Studioz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TsukiFlow is Hybrid Studioz\'s proprietary workflow and product operations platform designed to streamline complex team pipelines, automate repetitive digital tasks, and unify project execution for modern distributed teams.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the pricing model for Hybrid Studioz software and web development services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hybrid Studioz offers transparent fixed pricing with two primary tiers: Basic Plan at ₹15,000/month for MSMEs and early-stage startups, and Custom Enterprise at ₹30,000/month for scaling agencies and high-growth SaaS, alongside custom enterprise retainers.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
