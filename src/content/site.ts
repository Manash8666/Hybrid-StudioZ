// ==============================================================================
// HYBRID STUDIOZ — CENTRALIZED CONTENT & TUNING CONFIGURATION
// Single source of truth for all copy, sequences, projects, services, FAQs, blog
// ==============================================================================

export interface SequenceConfig {
  name: 'hero' | 'story' | 'organism' | 'eye';
  scrollVh: number;
  lead?: number;
  tail?: number;
  focal: [number, number];
  frames: number;
  fps: number;
  reducedFrame: number;
  eager?: boolean;
}

export interface CapabilityNode {
  label: string;
  left: number; // percentage 0-100
  top: number; // percentage 0-100
  sizeVw: number; // font-size in vw
  weight: number; // 300 to 900
  depth: number; // parallax factor (e.g. 0.2 to 1.8)
  category: 'core' | 'ai' | 'motion' | 'design' | 'eng';
}

export interface PortfolioProject {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  category: 'SaaS & AI' | 'Brand Identity' | 'WebGL & Motion' | 'eCommerce';
  year: string;
  timeline: string;
  deliverables: string[];
  heroImage: string;
  galleryImages: string[];
  metrics: { label: string; value: string; change: string }[];
  overview: {
    challenge: string;
    solution: string;
    impact: string;
  };
  technologies: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  gradient: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Architecture & Tech Stack' | 'Process & Timelines' | 'Pricing & Retainers' | 'AI & IP';
  defaultOpen?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Hybrid Studioz',
    tagline: 'Creative Technology, AI Design & Digital Product Agency',
    url: 'https://hybridstudioz.framer.ai',
    email: 'hello@hybridstudioz.com',
    established: '2026',
    address: 'Studio 08, 450 Mission St, San Francisco, CA',
  },

  sequences: {
    hero: {
      name: 'hero',
      scrollVh: 480,
      tail: 160,
      focal: [0.66, 0.5],
      frames: 360,
      fps: 60,
      reducedFrame: 0,
      eager: true,
    } as SequenceConfig,

    story: {
      name: 'story',
      scrollVh: 960,
      lead: 160,
      focal: [0.57, 0.5],
      frames: 360,
      fps: 60,
      reducedFrame: 0,
    } as SequenceConfig,

    organism: {
      name: 'organism',
      scrollVh: 520,
      focal: [0.5, 0.5],
      frames: 360,
      fps: 60,
      reducedFrame: 0,
    } as SequenceConfig,

    eye: {
      name: 'eye',
      scrollVh: 420,
      focal: [0.5, 0.5],
      frames: 240,
      fps: 60,
      reducedFrame: 132, // ~55% blink frame
    } as SequenceConfig,
  },

  storyBeats: [
    {
      index: '01 / 04',
      heading: 'Raw Ambition',
      copy: 'Every digital product starts as raw ambition. An untamed impulse waiting for an architecture bold enough to hold it.',
    },
    {
      index: '02 / 04',
      heading: 'Intelligence & Motion',
      copy: 'Then we engineer the intelligence and motion. Fluid neural interfaces, all-intra pipelines, and ultra-responsive WebGL geometry.',
    },
    {
      index: '03 / 04',
      heading: 'Micro-Choreography',
      copy: 'We choreograph every micro-interaction in between. Physics-based inertia, magnetic tactile feedback, and single-clock time sync.',
    },
    {
      index: '04 / 04',
      heading: 'Category Dominance',
      copy: 'And we ship brands that dominate their category. Unforgettable first impressions that convert curiosity into lasting obsession.',
    },
  ],

  kineticWords: [
    "We don't build boring.",
    "We engineer SaaS",
    "that moves.",
    "that converts.",
    "that gets remembered.",
  ],

  capabilityMetrics: [
    { label: 'Next.js / WebGL Architecture', value: 100 },
    { label: 'AI Workflow Automation & Multi-Agents', value: 95 },
    { label: 'High-Impact Brand & Design Systems', value: 98 },
    { label: 'All-Intra Zero-Lag Video Pipelines', value: 99 },
  ],

  capabilityNodes: [
    { label: 'Next.js 16', left: 8, top: 18, sizeVw: 4.8, weight: 900, depth: 1.4, category: 'eng' },
    { label: 'WebGL 3D', left: 48, top: 12, sizeVw: 3.6, weight: 700, depth: 0.8, category: 'motion' },
    { label: 'AI Multi-Agents', left: 74, top: 22, sizeVw: 4.2, weight: 800, depth: 1.6, category: 'ai' },
    { label: 'GSAP Motion', left: 22, top: 32, sizeVw: 3.8, weight: 700, depth: 1.0, category: 'motion' },
    { label: 'Three.js Shaders', left: 62, top: 36, sizeVw: 3.2, weight: 600, depth: 0.5, category: 'motion' },
    { label: 'Framer to Code', left: 5, top: 48, sizeVw: 3.4, weight: 600, depth: 1.2, category: 'design' },
    { label: 'Design Systems', left: 34, top: 46, sizeVw: 5.2, weight: 900, depth: 1.8, category: 'design' },
    { label: 'SaaS Architecture', left: 78, top: 52, sizeVw: 4.0, weight: 800, depth: 1.3, category: 'eng' },
    { label: 'Product Strategy', left: 16, top: 62, sizeVw: 3.6, weight: 700, depth: 0.7, category: 'core' },
    { label: 'Tailwind CSS', left: 52, top: 60, sizeVw: 3.0, weight: 600, depth: 0.9, category: 'eng' },
    { label: 'Brand Identity', left: 70, top: 68, sizeVw: 4.6, weight: 800, depth: 1.5, category: 'design' },
    { label: 'eCommerce Scaling', left: 10, top: 76, sizeVw: 3.4, weight: 600, depth: 0.6, category: 'eng' },
    { label: 'Fluid Motion Dir', left: 44, top: 78, sizeVw: 4.2, weight: 800, depth: 1.7, category: 'motion' },
    { label: 'TypeScript Strict', left: 76, top: 82, sizeVw: 3.2, weight: 600, depth: 0.8, category: 'eng' },
    { label: 'Zero-Lag Video Scrub', left: 28, top: 88, sizeVw: 3.8, weight: 700, depth: 1.1, category: 'motion' },
    { label: 'Micro-Interactions', left: 60, top: 90, sizeVw: 3.0, weight: 600, depth: 0.4, category: 'design' },
    { label: 'Serverless Functions', left: 88, top: 34, sizeVw: 2.8, weight: 500, depth: 0.9, category: 'eng' },
    { label: 'Spatial UI', left: 2, top: 28, sizeVw: 3.2, weight: 700, depth: 1.3, category: 'design' },
    { label: 'Autonomous Pipelines', left: 36, top: 24, sizeVw: 3.0, weight: 600, depth: 0.5, category: 'ai' },
    { label: 'Interactive 3D Rings', left: 82, top: 8, sizeVw: 2.6, weight: 500, depth: 0.7, category: 'motion' },
    { label: 'High Lighthouse 100', left: 24, top: 8, sizeVw: 3.4, weight: 800, depth: 1.2, category: 'eng' },
    { label: 'Continuous Hand-Offs', left: 54, top: 2, sizeVw: 3.1, weight: 700, depth: 1.0, category: 'core' },
  ] as CapabilityNode[],

  pricingTiers: [
    {
      id: 'sprint',
      name: 'Sprint Prototype',
      badge: 'High Velocity',
      price: '$12,500',
      period: 'per sprint',
      description: 'Ideal for early-stage founders & AI startups validating product-market fit with interactive clickable 3D/Next.js prototypes.',
      turnaround: '2 Weeks Delivery',
      deliverables: [
        'Complete UX Architecture & User Journeys',
        'Interactive Figma + Framer Prototype',
        'Functional Next.js App Router Shell',
        'Design System Foundation (Tokens & Components)',
        'Investor Pitch Presentation Deck Styling',
      ],
      popular: false,
    },
    {
      id: 'flagship',
      name: 'Full-Stack Brand & Web',
      badge: 'Most Popular',
      price: '$28,000',
      period: 'fixed project',
      description: 'Our signature agency engagement: complete end-to-end brand evolution, cinematic 60fps website, and custom WebGL/AI interactions.',
      turnaround: '5-7 Weeks Delivery',
      deliverables: [
        'Comprehensive Brand Identity & Guidelines',
        'Custom 3D / WebGL Shaders & Canvas FX',
        'All-Intra Zero-Lag Video Scrubbing Engine',
        'Next.js 16 Production Codebase + CMS',
        'Full Responsive & WCAG 2.2 AAA Accessibility',
        'SEO Metadata Architecture & Lighthouse 100',
      ],
      popular: true,
    },
    {
      id: 'retainer',
      name: 'Dedicated AI & Motion Retainer',
      badge: 'Enterprise Partner',
      price: '$9,500',
      period: 'per month',
      description: 'An embedded hybrid squad of creative technologists, motion directors, and full-stack engineers continuously scaling your platform.',
      turnaround: 'Ongoing Bi-Weekly Sprints',
      deliverables: [
        'Dedicated Senior Creative Technologist & Motion Lead',
        'Unlimited Design & Engineering Requests',
        'Autonomous AI Workflows & Multi-Agent Logic',
        'Continuous A/B Performance Testing & CRO',
        'Priority 24/7 Private Slack / Linear Channel',
      ],
      popular: false,
    },
  ] as PricingTier[],

  services: [
    {
      id: 'product-saas',
      number: '01',
      title: 'Product & SaaS Design',
      category: 'Digital Engineering',
      tagline: 'Translating deep technological complexity into effortless, high-converting interfaces.',
      description: 'We architect enterprise platforms, consumer apps, and generative AI workspaces that users genuinely love to open every single morning.',
      deliverables: ['Information Architecture', 'User Journey Mapping', 'Figma Design System', 'Component Libraries', 'Clickable Micro-Prototypes'],
      tools: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Figma', 'Radix UI'],
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      id: 'brand-identity',
      number: '02',
      title: 'Brand Identity & Creation',
      category: 'Brand Strategy',
      tagline: 'Formulating iconic visual languages designed to cut through market noise.',
      description: 'From avant-garde typography systems to kinetic logos and comprehensive digital design guidelines that cement category leadership.',
      deliverables: ['Logo & Mark Systems', 'Typography Lockups', 'Editorial Art Direction', 'Brand Strategy Guidelines', 'Investor Pitch Collateral'],
      tools: ['Custom Typography', 'Vector Geometry', 'Motion Guidelines', 'Print & Digital Assets'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'cinematic-web',
      number: '03',
      title: 'Cinematic Web & WebGL',
      category: 'Creative Tech',
      tagline: 'Single-clock smooth scroll with All-Intra video scrubbing and real-time 3D shaders.',
      description: 'Websites that feel like interactive cinematic films. Scroll-wheel bound video scrubbers with zero seek latency, custom canvas particles, and seamless zero-cut scene hand-offs.',
      deliverables: ['All-Intra (-g 1) Video Engine', 'WebGL Shaders & Three.js', 'Lenis Single-Clock Sync', 'GSAP ScrollTrigger Choreography', 'Lighthouse 95+ Performance'],
      tools: ['GSAP 3', 'Lenis', 'Three.js', 'All-Intra H.264', 'Custom Canvas GL'],
      gradient: 'from-indigo-500 to-fuchsia-600',
    },
    {
      id: 'ai-automation',
      number: '04',
      title: 'AI Workflow & Automation',
      category: 'Autonomous Systems',
      tagline: 'Integrating multi-agent LLM systems into your core digital products.',
      description: 'We build durable background workers, generative canvas tools, and AI agent frameworks that supercharge your operational throughput by 12x.',
      deliverables: ['Multi-Agent Architectures', 'Durable Tool-Calling Pipelines', 'Fine-Tuned Prompt Systems', 'Vector Search & Embeddings', 'Model Context Protocol (MCP)'],
      tools: ['Vercel AI SDK', 'OpenAI', 'Anthropic Claude', 'LangGraph', 'Context7'],
      gradient: 'from-fuchsia-500 to-pink-600',
    },
    {
      id: 'ecommerce',
      number: '05',
      title: 'High-Conversion eCommerce',
      category: 'Commercial Architecture',
      tagline: 'Direct-to-consumer digital flagships engineered for astronomical average order value.',
      description: 'Sub-second page speeds, dynamic 3D product customizers, frictionless multi-step checkouts, and bespoke micro-interactions that obliterate drop-off.',
      deliverables: ['Interactive 3D Configurator', 'Headless Commerce Architecture', 'Custom Cart & Checkout Flows', 'Micro-Animation Polish', 'Conversion Rate Optimization'],
      tools: ['Next.js App Router', 'Shopify Storefront API', 'Stripe Elements', 'Zustand'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 'motion-video',
      number: '06',
      title: 'Motion & Video Direction',
      category: 'Visual Art',
      tagline: 'Generative AI visual generation choreographed into frame-accurate video art.',
      description: 'We direct high-concept visual assets, volumetric pigment simulations, and custom video loops specifically balanced for live HTML typography layering.',
      deliverables: ['Prompt-Engineered 16:9 Visuals', 'Ping-Pong Seamless Background Loops', '4-Tier Scrub Video Encoding', 'Editorial Kinetic Typography', 'Audio/Sound Branding'],
      tools: ['FFmpeg Libx264', 'Midjourney', 'Google Veo', 'Kling AI', 'After Effects'],
      gradient: 'from-orange-500 to-amber-600',
    },
  ] as ServiceItem[],

  projects: [
    {
      slug: 'echowear',
      title: 'EchoWear',
      tagline: 'Sustainable Luxury Wearable Tech & 3D Web Flagship',
      client: 'EchoWear Inc.',
      category: 'SaaS & AI',
      year: '2025 - 2026',
      timeline: '8 Weeks Delivery',
      heroImage: '/assets/portfolio/echowear-hero.webp',
      deliverables: [
        'End-to-End Brand System & Packaging',
        'Interactive 3D Product Customizer (Three.js)',
        'Headless Next.js eCommerce Platform',
        'All-Intra Product Scrubbing Experience',
        'Custom iOS App Companion Interface',
      ],
      galleryImages: [
        '/assets/portfolio/echowear-hero.webp',
        '/assets/portfolio/vortex-spatial.webp',
        '/assets/portfolio/nexus-ai.webp',
      ],
      metrics: [
        { label: 'E-commerce Conversion Rate', value: '+340%', change: 'from 1.2% to 5.3%' },
        { label: 'Average Time on Site', value: '4m 12s', change: '+210% engagement boost' },
        { label: 'Pre-Order Volume Shipped', value: '$2.8M', change: 'Sold out within 48 hours' },
        { label: 'Lighthouse Performance Score', value: '99/100', change: 'Sub-second first contentful paint' },
      ],
      overview: {
        challenge: 'EchoWear engineered a groundbreaking bio-sensing titanium ring and wrist cuff made from 100% recycled aerospace metals. However, their legacy web presence resembled a generic electronics catalog, failing to convey the luxury craftsmanship and revolutionary telemetry inside.',
        solution: 'Hybrid Studioz reconceptualized EchoWear as a high-fashion cybernetic luxury label. We built a cinematic Next.js flagship featuring an interactive 3D anatomy viewer, a continuous all-intra scroll scrubber showing the internal titanium chassis exploding into view, and an earthy/neon color palette that emphasizes sustainable biology.',
        impact: 'Within 48 hours of launch, EchoWear’s inaugural production run was completely sold out, generating $2.8M in direct pre-orders and winning Site of the Month honors across major creative tech design awards.',
      },
      technologies: ['Next.js 16', 'Three.js / WebGL', 'Tailwind CSS v4', 'GSAP ScrollTrigger', 'Shopify Storefront API', 'Lenis Smooth Scroll'],
      quote: {
        text: 'Hybrid Studioz did not just build a website for us; they defined our brand soul. The interactive 3D scrubber alone has transformed our conversion rates and elevated our market valuation.',
        author: 'Elena Vance',
        role: 'Founder & CEO, EchoWear',
      },
    },
    {
      slug: 'nexus-ai',
      title: 'Nexus AI',
      tagline: 'Autonomous Multi-Agent Enterprise Orchestration Platform',
      client: 'Nexus Systems Ltd.',
      category: 'SaaS & AI',
      year: '2025',
      timeline: '6 Weeks Delivery',
      heroImage: '/assets/portfolio/nexus-ai.webp',
      deliverables: ['Product Architecture', 'Glassmorphic Design System', 'Live Agent Graph Visualizer', 'Marketing Web Platform'],
      galleryImages: ['/assets/portfolio/nexus-ai.webp', '/assets/portfolio/vortex-spatial.webp'],
      metrics: [
        { label: 'Enterprise Pilot Inquiries', value: '180+', change: '+420% MoM' },
        { label: 'System Latency', value: '18ms', change: 'Global edge distribution' },
        { label: 'Series A Funding Raised', value: '$16M', change: 'Led by Top-tier VCs' },
      ],
      overview: {
        challenge: 'Nexus needed to demonstrate the power of autonomous multi-agent tool execution without intimidating enterprise CTOs with black-box complexity.',
        solution: 'We engineered an interactive, real-time node-graph workspace that visually displays agent thought trees and tool invocations with silky smooth 60fps animations.',
        impact: 'Nexus secured $16M in Series A funding following product demonstrations powered by the interface we designed and developed.',
      },
      technologies: ['Next.js App Router', 'WebSockets', 'Canvas 2D Engine', 'Tailwind CSS', 'Vercel AI SDK'],
      quote: {
        text: 'The best design and engineering team in the AI space. Period.',
        author: 'Dr. Aaron Chen',
        role: 'Chief Scientist, Nexus AI',
      },
    },
    {
      slug: 'vortex-spatial',
      title: 'Vortex Spatial',
      tagline: 'Next-Gen Spatial Computing & Immersive WebGL Architecture',
      client: 'Vortex Studios',
      category: 'WebGL & Motion',
      year: '2025',
      timeline: '7 Weeks Delivery',
      heroImage: '/assets/portfolio/vortex-spatial.webp',
      deliverables: ['Custom WebGL Shaders', '3D Environment Rendering', 'Audio-Reactive Soundscapes', 'Full-Bleed Agency Portfolio'],
      galleryImages: ['/assets/portfolio/vortex-spatial.webp', '/assets/portfolio/echowear-hero.webp'],
      metrics: [
        { label: 'AOT (Ahead of Time) Load', value: '480ms', change: 'Custom GLTF compression' },
        { label: 'Frame Rate', value: '60 FPS', change: 'Rock solid on mobile' },
        { label: 'Industry Design Awards', value: '6 Won', change: 'FWA of the Day, Awwwards Site of the Day' },
      ],
      overview: {
        challenge: 'Rendering monumental twisting iridescent glass sculptures inside a browser tab while maintaining universal 60fps mobile compatibility.',
        solution: 'We authored custom GLSL vertex and fragment shaders with screen-space refraction, coupled with a progressive Level of Detail (LOD) geometry loader.',
        impact: 'Universally hailed as a benchmark for what modern web browsers are capable of achieving without native apps.',
      },
      technologies: ['Three.js', 'Custom GLSL', 'Web Audio API', 'GSAP', 'Next.js'],
    },
    {
      slug: 'lumina-os',
      title: 'Lumina OS',
      tagline: 'Minimalist Generative Operating System for Digital Creators',
      client: 'Lumina Labs',
      category: 'SaaS & AI',
      year: '2025',
      timeline: '5 Weeks Delivery',
      heroImage: '/assets/portfolio/lumina-os.webp',
      deliverables: ['OS Design System', 'Window Management Engine', 'Typography System', 'Dark/Light Theme Matrix'],
      galleryImages: ['/assets/portfolio/lumina-os.webp', '/assets/portfolio/nexus-ai.webp'],
      metrics: [
        { label: 'Active Monthly Creators', value: '94,000+', change: 'Over 85 countries' },
        { label: 'App Store Rating', value: '4.9/5', change: 'Over 12,000 reviews' },
        { label: 'Daily Session Time', value: '52 mins', change: 'High retention indicator' },
      ],
      overview: {
        challenge: 'Building a distraction-free digital workplace that fosters deep work while incorporating powerful generative intelligence features.',
        solution: 'A radical monochromatic obsidian interface that steps back entirely, allowing creators’ work to take absolute center stage.',
        impact: 'Lumina became one of the fastest growing creative productivity tools of 2025.',
      },
      technologies: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    },
    {
      slug: 'hyperpulse',
      title: 'HyperPulse',
      tagline: 'Algorithmic Financial Telemetry & High-Frequency Terminal',
      client: 'HyperPulse Financial',
      category: 'Brand Identity',
      year: '2024 - 2025',
      timeline: '6 Weeks Delivery',
      heroImage: '/assets/portfolio/hyperpulse.webp',
      deliverables: ['Brand Architecture', 'Real-time Charting System', 'Sub-millisecond Canvas Engine', 'Marketing Flagship'],
      galleryImages: ['/assets/portfolio/hyperpulse.webp', '/assets/portfolio/vortex-spatial.webp'],
      metrics: [
        { label: 'Daily Trading Volume', value: '$1.4B+', change: 'Supported by terminal UI' },
        { label: 'Data Update Frequency', value: '60 updates/sec', change: 'Direct WebSocket pipeline' },
        { label: 'Customer Churn', value: '< 0.4%', change: 'Industry low' },
      ],
      overview: {
        challenge: 'Rendering thousands of real-time candlestick and order-book ticks simultaneously without causing browser UI thread lockup.',
        solution: 'Offloading data ingestion to Web Workers and drawing directly to an OffscreenCanvas via high-performance GPU shaders.',
        impact: 'HyperPulse achieved institutional trust among Tier-1 hedge funds and prop desks.',
      },
      technologies: ['OffscreenCanvas', 'Web Workers', 'WebSockets', 'Next.js', 'Tailwind CSS'],
    },
    {
      slug: 'kroma-studio',
      title: 'Kroma Studio',
      tagline: 'Haute Couture Digital Fashion & Generative Textile Platform',
      client: 'Kroma Paris',
      category: 'Brand Identity',
      year: '2025',
      timeline: '8 Weeks Delivery',
      heroImage: '/assets/portfolio/kroma.webp',
      deliverables: ['Digital Brand Book', 'Virtual Showroom 3D', 'Editorial Direction', 'E-Commerce Integration'],
      galleryImages: ['/assets/portfolio/kroma.webp', '/assets/portfolio/echowear-hero.webp'],
      metrics: [
        { label: 'VIP Showroom RSVPs', value: '14,000+', change: 'Exclusive digital pass' },
        { label: 'Editorial Press Mentions', value: '45+', change: 'Vogue, GQ, Hypebeast, Wallpaper' },
        { label: 'NFT / Digital Asset Volume', value: '$840k', change: 'First digital drop' },
      ],
      overview: {
        challenge: 'Merging high-end Parisian couture with cutting-edge digital fashion avatars and interactive WebGL showroom experiences.',
        solution: 'A timeless, Swiss editorial layout paired with hyper-detailed digital garment physics and dynamic lighting.',
        impact: 'Set a new gold standard for luxury fashion brands transitioning into digital and immersive web environments.',
      },
      technologies: ['Next.js 16', 'Three.js Cloth Simulation', 'GSAP ScrollTrigger', 'Tailwind CSS'],
    },
  ] as PortfolioProject[],

  blogPosts: [
    {
      id: 'blog-1',
      slug: 'all-intra-video-scrubbing-at-60fps',
      title: 'All-Intra Video Scrubbing at 60 FPS: Engineering Zero Seek Latency in the Browser',
      excerpt: 'Why standard H.264 GOP encodings cause scroll stutter, and how using -g 1 keyframe flags combined with memory Blob URLs creates a frictionless playhead.',
      category: 'Engineering',
      tags: ['#WebGL', '#NextJS', '#MotionEngine', '#FFmpeg'],
      readingTime: '6 min read',
      publishedAt: 'October 2026',
      author: {
        name: 'Julian Thorne',
        role: 'Head of Creative Technology',
        avatar: '/assets/about/portrait.webp',
      },
      featured: true,
      content: [
        'When developers attempt to bind HTML5 video.currentTime directly to scroll progress, they inevitably hit a wall of stuttering frames. The culprit is almost never JavaScript performance—it is inter-frame video compression.',
        'Standard streaming video utilizes Long GOP (Group of Pictures) compression where only one frame every 2 to 5 seconds is a standalone image (an I-frame). The intervening frames are delta approximations (P-frames and B-frames). When seeking backward or forward, the browser’s media decoder must seek back to the previous keyframe and compute all intermediate deltas.',
        'By re-encoding video clips with FFmpeg using the -g 1 flag, every single frame becomes an independent I-frame (All-Intra). When this file is prefetched completely into RAM as a Blob URL, seeking latency drops to virtually 0 milliseconds. The scroll wheel becomes a literal hardware scrub wheel.',
      ],
    },
    {
      id: 'blog-2',
      slug: 'single-clock-synchronization-lenis-gsap',
      title: 'Single-Clock Synchronization: Unifying Lenis Smooth Scroll with the GSAP Ticker',
      excerpt: 'How running smooth scroll algorithms and animation rendering pipelines on disparate requestAnimationFrame loops causes micro-jitters, and how to fix it.',
      category: 'Motion Design',
      tags: ['#GSAP', '#Lenis', '#UXMotion', '#CreativeTech'],
      readingTime: '5 min read',
      publishedAt: 'September 2026',
      author: {
        name: 'Maya Lin',
        role: 'Principal Motion Choreographer',
        avatar: '/assets/about/closing-muse.webp',
      },
      featured: true,
      content: [
        'A frequent pitfall in ambitious interactive websites is the "two-clock syndrome". Lenis or locomotive-scroll runs on its own internal rAF clock, while GSAP ScrollTrigger updates on a separate tick. At 120Hz or variable refresh displays, tiny phase misalignments cause visual vibration.',
        'The solution is to turn over clock management exclusively to the GSAP ticker. By adding lenis.raf directly inside gsap.ticker.add and setting lagSmoothing(0), both the smooth scroll interpolation and the transform matrices resolve simultaneously on the exact same frame render pass.',
      ],
    },
    {
      id: 'blog-3',
      slug: 'ai-agents-in-production-design-systems',
      title: 'Deploying Autonomous AI Agents Inside Modern Production Design Systems',
      excerpt: 'Moving beyond simple chatbot textboxes: how we integrate durable background agents, structured tool outputs, and MCP servers directly into enterprise workflows.',
      category: 'AI Architecture',
      tags: ['#AIWorkflows', '#DesignSystems', '#Agents', '#NextJS'],
      readingTime: '8 min read',
      publishedAt: 'September 2026',
      author: {
        name: 'Julian Thorne',
        role: 'Head of Creative Technology',
        avatar: '/assets/about/portrait.webp',
      },
      featured: false,
      content: [
        'The first wave of AI apps merely wrapped OpenAI completions in chat bubbles. The next wave is deeply architectural: autonomous agents that read project schemas, generate compliant SVG geometry, execute lint checks, and propose pull requests without human micro-management.',
        'At Hybrid Studioz, our design systems are encoded semantically so that AI tools can programmatically inspect design tokens, verify contrast ratios, and scaffold fully responsive components that match human aesthetic standards.',
      ],
    },
    {
      id: 'blog-4',
      slug: 'the-death-of-boring-saas-editorial-future',
      title: 'The Death of Boring SaaS: Why High-End Editorial Aesthetics Win Deals',
      excerpt: 'Why generic bootstrap templates and flat illustration libraries are losing conversion ground to dark obsidian canvases, tight typography, and tactile physics.',
      category: 'Brand Strategy',
      tags: ['#BrandStrategy', '#SaaS', '#EditorialDesign'],
      readingTime: '4 min read',
      publishedAt: 'August 2026',
      author: {
        name: 'Elena Rostova',
        role: 'Creative Director',
        avatar: '/assets/about/closing-muse.webp',
      },
      featured: false,
      content: [
        'Enterprise software buyers are human beings who spend their evenings immersed in cinematic television, high-fashion editorial platforms, and tactile luxury products. When they encounter a SaaS platform that looks like a 2018 corporate portal, trust immediately erodes.',
        'High contrast typography, double-edge borders, and confident negative space communicate engineering rigor before a user even signs up for a trial.',
      ],
    },
    {
      id: 'blog-5',
      slug: 'nothing-cuts-seamless-visual-handoffs',
      title: 'Nothing Cuts: The Architecture of Seamless Visual Hand-Offs in Web Cinema',
      excerpt: 'Techniques for choreographing seamless continuous camera transitions where the visual anchor of one scene literally grows out of the previous scene.',
      category: 'Creative Tech',
      tags: ['#MotionEngine', '#WebGL', '#CreativeTech'],
      readingTime: '7 min read',
      publishedAt: 'August 2026',
      author: {
        name: 'Maya Lin',
        role: 'Principal Motion Choreographer',
        avatar: '/assets/about/portrait.webp',
      },
      featured: false,
      content: [
        'In traditional web design, users scroll down to cross an invisible hard boundary line between sections. In cinematic web design, "Nothing cuts". Every scene terminates on a focal anchor: the stem of a letter, a glowing sphere, or the pupil of an eye.',
        'By sharing screen-space coordinates between components and choreographing lead and tail scroll overlaps, the user never feels like they are reading a page—they feel like they are exploring a continuous digital universe.',
      ],
    },
  ] as BlogPost[],

  faqs: [
    {
      id: 'faq-1',
      question: 'How does Hybrid Studioz combine cinematic motion with high Lighthouse performance?',
      answer: 'We achieve 95+ Lighthouse scores by decoupling visual assets from the critical rendering path. All typography, layout geometry, and UI widgets are 100% server-rendered HTML/CSS. Large scrubbed video streams are encoded using custom All-Intra (-g 1) keyframe flags, split into 4 responsive bandwidth tiers, and prefetched asynchronously into memory as Blob URLs only when the user scrolls near the section. For search engine crawlers and users with prefers-reduced-motion, we automatically render instant SSR WebP poster stills and bypass sticky pinning entirely.',
      category: 'Architecture & Tech Stack',
      defaultOpen: true, // Shock page-faq-2 specification: primary question pre-opened with highlighted border
    },
    {
      id: 'faq-2',
      question: 'What is the SlaqAI Cinematic Scroll-Scrub Engine and how does it work?',
      answer: 'The SlaqAI engine treats the browser scroll wheel as a literal video playhead. By binding scroll progress directly to video.currentTime on All-Intra H.264 video streams, users scrub through high-production visual narratives forward and backward without buffering or dropped frames. Furthermore, scenes connect via "Nothing cuts" hand-offs: the visual anchor of one scene (such as a color plume, letter stem, or pupil) expands to birth the subsequent section.',
      category: 'Architecture & Tech Stack',
    },
    {
      id: 'faq-3',
      question: 'What tech stack do you recommend and build with?',
      answer: 'Our flagship stack is built on Next.js 16 (App Router with TypeScript), Tailwind CSS v4 for custom design token styling, Lenis for smooth scrolling, and GSAP ScrollTrigger for animation orchestration. For 3D immersive scenes, we leverage Three.js and custom GLSL shaders. When building AI agent systems, we utilize Vercel AI SDK, durable workflow engines, and Model Context Protocol (MCP) servers.',
      category: 'Architecture & Tech Stack',
    },
    {
      id: 'faq-4',
      question: 'How long does a typical flagship agency engagement take?',
      answer: 'Our Sprint Prototypes deliver an interactive, clickable 3D/Next.js foundation in exactly 2 weeks. Full-Stack Brand & Web flagship builds typically range from 5 to 7 weeks from discovery through to production deployment. For enterprises scaling multi-agent platforms and digital products, our Dedicated Retainer operates on continuous 2-week agile sprints with daily Slack synchronization.',
      category: 'Process & Timelines',
    },
    {
      id: 'faq-5',
      question: 'What does your collaborative development process look like?',
      answer: 'We operate in four distinct phases: 01. Strategic Discovery & Creative Direction, 02. Interactive Architecture & All-Intra Video Generation, 03. Single-Clock Motion Choreography & Next.js Engineering, and 04. Multi-Device QA, Lighthouse Optimization & Global Edge Deployment. Clients receive live preview URLs at every milestone with transparent Linear issue tracking.',
      category: 'Process & Timelines',
    },
    {
      id: 'faq-6',
      question: 'What are your pricing structures and retainer terms?',
      answer: 'We provide transparent, fixed-scope pricing for predictability. Our Sprint Prototype is $12,500; our Full-Stack Brand & Web is $28,000; and our Dedicated AI & Motion Retainer is $9,500/month. We do not do hourly billing or surprise change orders; every engagement includes defined deliverables, clear turnaround SLAs, and comprehensive post-launch warranties.',
      category: 'Pricing & Retainers',
    },
    {
      id: 'faq-7',
      question: 'Who owns the intellectual property and source code?',
      answer: 'You retain 100% complete ownership of all created IP, design files (Figma tokens, 3D geometry), code repositories, custom shaders, and generated media assets upon project completion. We do not lock you into proprietary hosting platforms; your Next.js application can be deployed anywhere, including Vercel, AWS, Cloudflare, or self-hosted Docker clusters.',
      category: 'AI & IP',
    },
    {
      id: 'faq-8',
      question: 'How do you handle AI ethics and custom dataset confidentiality?',
      answer: 'All proprietary client data, codebases, and brand assets are processed under strict non-disclosure agreements with zero-data-retention API agreements. We never train public foundation models on client intellectual property.',
      category: 'AI & IP',
    },
  ] as FAQItem[],

  branches: [
    {
      city: 'San Francisco',
      tag: 'Headquarters & R&D Lab',
      address: '450 Mission Street, Suite 800',
      zip: 'San Francisco, CA 94105',
      timezone: 'PST (UTC-8)',
      status: 'Studio Open',
      phone: '+1 (415) 890-4820',
      email: 'sf@hybridstudioz.com',
    },
    {
      city: 'London',
      tag: 'European Creative Direction',
      address: '14 Shoreditch High Street',
      zip: 'London E1 6PG, United Kingdom',
      timezone: 'GMT (UTC+0)',
      status: 'Studio Open',
      phone: '+44 20 7946 0912',
      email: 'ldn@hybridstudioz.com',
    },
    {
      city: 'Tokyo',
      tag: 'Spatial Tech & Motion Lab',
      address: 'Roppongi Hills Mori Tower 28F',
      zip: 'Minato-ku, Tokyo 106-6108, Japan',
      timezone: 'JST (UTC+9)',
      status: 'Studio Open',
      phone: '+81 3 5555 0143',
      email: 'tyo@hybridstudioz.com',
    },
    {
      city: 'Zurich',
      tag: 'Autonomous AI Systems',
      address: 'Gotthardstrasse 26',
      zip: '8002 Zürich, Switzerland',
      timezone: 'CET (UTC+1)',
      status: 'Studio Open',
      phone: '+41 44 211 4800',
      email: 'zrh@hybridstudioz.com',
    },
  ],

  footerSearches: [
    'Next.js 16 WebGL Agency',
    'All-Intra Video Scrubbing',
    'AI Multi-Agent Development',
    'Three.js 3D Product Customizer',
    'Framer to Next.js Migration',
    'GSAP Lenis Smooth Scroll',
    'High Lighthouse Creative Agency',
    'Sustainable Wearable Tech Design',
  ],
};
