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
      heading: 'AI SaaS Solutions',
      copy: 'From autonomous multi-agent pipelines to custom LLM orchestration, we engineer intelligent software built for scalable enterprise growth.',
    },
    {
      index: '02 / 04',
      heading: 'Bespoke Web Development',
      copy: 'Next.js 16 App Router, TypeScript strict, and single-clock WebGL choreography delivering sub-millisecond execution and 100 Lighthouse performance.',
    },
    {
      index: '03 / 04',
      heading: 'Brand Identity Systems',
      copy: 'Cohesive design systems, kinetic typography, and multi-platform design tokens that give your company immediate market authority.',
    },
    {
      index: '04 / 04',
      heading: 'Digital Marketing & Growth',
      copy: 'Algorithmic conversion funnels, programmatic SEO, and high-velocity acquisition campaigns driving compounding ARR.',
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
      id: 'basic',
      name: 'Basic Plan',
      badge: 'Most Pick',
      price: '₹15K',
      period: '/ Month',
      description: 'Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.',
      turnaround: 'Ideal for MSME & Startups',
      deliverables: [
        'Custom SaaS development for MSME',
        'Up to 10 users access',
        'Basic integrations with existing systems',
        'Dedicated support and training',
        '30-Days Money-back Guarantee',
        '100+ Projects & 75+ Revisions baseline',
      ],
      popular: false,
    },
    {
      id: 'custom',
      name: 'Custom Enterprise',
      badge: 'Recommended',
      price: '₹30K',
      period: '/ Month',
      description: 'Our custom pricing plan is designed for businesses looking for advanced features, custom scalability, and tailored integrations.',
      turnaround: 'Ideal for Scaling Agencies & SaaS',
      deliverables: [
        'Fully tailored SaaS solution based on your business needs',
        'Integrations with all existing enterprise systems',
        'Ongoing updates and continuous feature enhancements',
        'Dedicated account manager & priority technical SLA',
        'Customizable telemetry dashboards & real-time analytics',
        '650+ Projects & 250+ Revisions throughput',
      ],
      popular: true,
    },
  ] as PricingTier[],

  services: [
    {
      id: 'custom-saas',
      number: '01',
      title: 'Custom SaaS Development',
      category: 'Solving Challenges',
      tagline: 'Creating custom software solutions for seamless system integration.',
      description: 'We architect enterprise platforms, custom SaaS architectures, and autonomous AI tools built to solve core business challenges and drive operational growth.',
      deliverables: ['Custom Web Architecture', 'Multi-Tenant Databases', 'API Integration Engine', 'High-Speed Cloud Deployment'],
      tools: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'it-software',
      number: '02',
      title: 'Comprehensive IT Software Products',
      category: 'All-in-One Solutions',
      tagline: 'Offering a diverse portfolio of tools to support key business functions.',
      description: 'From workflow management to client onboarding and internal dashboards, we build robust IT tools that streamline business operations.',
      deliverables: ['Enterprise Dashboards', 'Workflow Automation', 'Secure Data Ingestion', 'Role-Based Access Control'],
      tools: ['React 19', 'Next.js App Router', 'REST APIs', 'Cloudflare Edge'],
      gradient: 'from-indigo-600 to-blue-500',
    },
    {
      id: 'expert-consultation',
      number: '03',
      title: 'Expert Consultation Services',
      category: 'Strategic Guidance',
      tagline: 'Offering expert advice to choose the right tech stack for sustainable growth.',
      description: 'We audit your technical architecture, pinpoint bottlenecks, and chart an actionable roadmap to scale your SaaS infrastructure with high reliability.',
      deliverables: ['Architecture Audits', 'Tech Stack Selection', 'Performance Benchmarks', 'Scalability Roadmaps'],
      tools: ['System Architecture', 'Lighthouse Optimization', 'Security Audits'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'cloud-migration',
      number: '04',
      title: 'Cloud Migration Services',
      category: 'Cloud Onboarding',
      tagline: 'We help businesses transition to cloud solutions with minimal disruption.',
      description: 'Modernize legacy databases, microservices, and apps onto resilient cloud infrastructure with zero data loss and automated failover.',
      deliverables: ['Zero-Downtime Migration', 'Cloud Database Sync', 'Containerization & Docker', 'Multi-Region Edge Caching'],
      tools: ['AWS', 'Vercel Enterprise', 'Docker', 'PostgreSQL', 'Redis'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'support-maintenance',
      number: '05',
      title: 'Ongoing Support & Maintenance',
      category: 'Real-Time Reliability',
      tagline: 'We provide ongoing support, including system updates, monitoring, and troubleshooting.',
      description: 'Never worry about technical downtime. Our team provides continuous 24/7 monitoring, security patching, and proactive performance tuning.',
      deliverables: ['24/7 Server Health Monitoring', 'Security & Patch Updates', 'Bug Resolution SLAs', 'Continuous Feature Enhancements'],
      tools: ['Sentry', 'Datadog', 'GitHub Actions', 'Automated Testing'],
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'project-management',
      number: '06',
      title: 'Project Management Software',
      category: 'Responsive Collaboration',
      tagline: 'Tools that help teams collaborate effectively and manage resources efficiently.',
      description: 'Custom-built collaboration and tracking platforms featuring real-time task sync, Kanban workflows, and automated executive reporting.',
      deliverables: ['Interactive Kanban Boards', 'Resource Allocation Trackers', 'Real-Time Team Chat Integration', 'Customizable KPI Dashboards'],
      tools: ['Next.js', 'WebSockets', 'Tailwind CSS', 'PostgreSQL'],
      gradient: 'from-indigo-700 to-blue-600',
    },
  ] as ServiceItem[],

  projects: [
    {
      slug: 'tsukiflow',
      title: 'TsukiFlow AI',
      tagline: 'Autonomous Agentic SaaS Platform & Growth Architecture',
      client: 'TsukiFlow Inc.',
      category: 'AI SaaS & Architecture',
      year: '2025 - 2026',
      timeline: '8 Weeks Delivery',
      heroImage: '/assets/portfolio/echowear-hero.webp',
      deliverables: [
        'Autonomous AI Agent Workflow Engine',
        'Next.js 15 Enterprise SaaS Dashboard',
        'Real-Time Telemetry & Vector Search Pipeline',
        'High-Conversion Multi-Tier Pricing Matrix',
        'Digital Marketing & Omni-Channel Attribution',
      ],
      galleryImages: [
        '/assets/portfolio/echowear-hero.webp',
        '/assets/portfolio/nexus-ai.webp',
        '/assets/portfolio/vortex-spatial.webp',
      ],
      metrics: [
        { label: 'Pilot Enterprise Conversions', value: '+340%', change: 'from 1.2% to 5.3%' },
        { label: 'Average Session Duration', value: '8m 45s', change: '+210% engagement boost' },
        { label: 'Pipeline ARR Generated', value: '$4.2M', change: 'First 60 days post-launch' },
        { label: 'System Edge Latency', value: '14ms', change: 'Global edge node distribution' },
      ],
      overview: {
        challenge: 'TsukiFlow engineered a groundbreaking autonomous multi-agent SaaS platform for enterprise workflow automation. However, their early preview struggled to demonstrate the power of neural agents without overwhelming non-technical business operators.',
        solution: 'Hybrid Studioz architected TsukiFlow’s end-to-end design system, interactive real-time node visualizer, high-velocity Next.js platform, and complete digital brand identity with volumetric cobalt aesthetic.',
        impact: 'TsukiFlow achieved a 340% increase in enterprise customer pilots, $4.2M in annual recurring revenue pipeline within 60 days, and 99.99% system reliability across global edge nodes.',
      },
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK', 'GSAP ScrollTrigger', 'PostgreSQL / Prisma'],
      quote: {
        text: 'Hybrid Studioz didn’t just build a dashboard; they created the standard for how humans interact with autonomous AI SaaS.',
        author: 'Daisuke Tanaka',
        role: 'Founder & CEO, TsukiFlow AI',
      },
    },
    {
      slug: 'nexus-ai',
      title: 'Nexus AI',
      tagline: 'Autonomous Multi-Agent Enterprise Orchestration Platform',
      client: 'Nexus Systems Ltd.',
      category: 'AI SaaS & Architecture',
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
      category: 'Digital Creativity',
      year: '2025',
      timeline: '7 Weeks Delivery',
      heroImage: '/assets/portfolio/vortex-spatial.webp',
      deliverables: ['Custom WebGL Shaders', '3D Environment Rendering', 'Audio-Reactive Soundscapes', 'Full-Bleed Agency Portfolio'],
      galleryImages: ['/assets/portfolio/vortex-spatial.webp', '/assets/portfolio/echowear-hero.webp'],
      metrics: [
        { label: 'AOT Load Time', value: '480ms', change: 'Custom GLTF compression' },
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
      title: 'Lumina Cloud',
      tagline: 'Minimalist Cloud SaaS Ecosystem for Digital Engineering',
      client: 'Lumina Cloud Labs',
      category: 'AI SaaS & Architecture',
      year: '2025',
      timeline: '5 Weeks Delivery',
      heroImage: '/assets/portfolio/lumina-os.webp',
      deliverables: ['Cloud Dashboard Design System', 'Window Management Engine', 'Typography System', 'Dark/Light Theme Matrix'],
      galleryImages: ['/assets/portfolio/lumina-os.webp', '/assets/portfolio/nexus-ai.webp'],
      metrics: [
        { label: 'Active Monthly Developers', value: '94,000+', change: 'Over 85 countries' },
        { label: 'Platform Satisfaction', value: '4.9/5', change: 'Over 12,000 reviews' },
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
      tagline: 'AI-Powered Performance Marketing & Growth Telemetry Engine',
      client: 'HyperPulse Growth',
      category: 'Digital Marketing',
      year: '2024 - 2025',
      timeline: '6 Weeks Delivery',
      heroImage: '/assets/portfolio/hyperpulse.webp',
      deliverables: ['Predictive Attribution Engine', 'Real-Time Funnel Charting', 'Sub-millisecond Canvas Engine', 'Marketing Flagship'],
      galleryImages: ['/assets/portfolio/hyperpulse.webp', '/assets/portfolio/vortex-spatial.webp'],
      metrics: [
        { label: 'Attributed Revenue Managed', value: '$1.4B+', change: 'Supported by terminal UI' },
        { label: 'Data Update Frequency', value: '60 updates/sec', change: 'Direct WebSocket pipeline' },
        { label: 'Customer Churn', value: '< 0.4%', change: 'Industry low' },
      ],
      overview: {
        challenge: 'Rendering thousands of real-time conversion events, attribution touchpoints, and ad spend ROI ticks simultaneously without browser UI thread lockup.',
        solution: 'Offloading data ingestion to Web Workers and drawing directly to an OffscreenCanvas via high-performance GPU shaders.',
        impact: 'HyperPulse achieved institutional trust among top-tier growth marketing agencies and hyper-scaling SaaS brands.',
      },
      technologies: ['OffscreenCanvas', 'Web Workers', 'WebSockets', 'Next.js', 'Tailwind CSS'],
    },
    {
      slug: 'kroma-studio',
      title: 'Kroma Brand System',
      tagline: 'Global Design System & Digital Brand Architecture Platform',
      client: 'Kroma Global',
      category: 'Brand Identity',
      year: '2025',
      timeline: '8 Weeks Delivery',
      heroImage: '/assets/portfolio/kroma.webp',
      deliverables: ['Digital Brand Architecture', 'Multi-Platform Design Tokens', 'React Component Library', 'Design Guidelines'],
      galleryImages: ['/assets/portfolio/kroma.webp', '/assets/portfolio/echowear-hero.webp'],
      metrics: [
        { label: 'Design System Adoption', value: '100%', change: 'Across 14 global product teams' },
        { label: 'Component Reusability', value: '92%', change: 'Reduced front-end dev cycle by 4x' },
        { label: 'Brand Consistency Score', value: '99/100', change: 'Audited across all web touchpoints' },
      ],
      overview: {
        challenge: 'Unifying disparate product design systems, marketing landing pages, and web apps into one coherent, ultra-sleek visual language.',
        solution: 'A timeless Swiss editorial layout paired with flexible CSS design tokens, dark obsidian theme variants, and electric cobalt accents.',
        impact: 'Set a new gold standard for enterprise SaaS brands transitioning into modern digital design systems.',
      },
      technologies: ['Next.js 15', 'Figma Tokens API', 'Tailwind CSS', 'Storybook', 'Radix UI'],
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
      question: 'What industries do we serve?',
      answer:
        'Hybrid Studioz serves a global client roster across AI & Machine Learning, B2B SaaS, FinTech, iGaming (Malta), CleanTech, HealthTech, and E-Commerce. Every solution is custom-architected to meet regional compliance standards (GDPR, APPI, ISO) and drive sustainable enterprise growth.',
      category: 'Process & Timelines',
      defaultOpen: true,
    },
    {
      id: 'faq-2',
      question: 'Can we customize your software solutions?',
      answer:
        'Yes, 100%. Every software platform, AI workflow, and web architecture delivered by Hybrid Studioz is custom-engineered from scratch. We build tailored multi-tenant databases, bespoke Next.js frontends, and custom API bridges matched precisely to your business requirements.',
      category: 'Architecture & Tech Stack',
    },
    {
      id: 'faq-3',
      question: 'What kind of support do we offer post-launch?',
      answer:
        'Hybrid Studioz provides 24/7 proactive telemetry monitoring, zero-downtime cloud maintenance, continuous vulnerability patching, and iterative feature updates. Dedicated engineering channels and transparent SLAs guarantee your software maintains 99.99% uptime post-launch.',
      category: 'Process & Timelines',
    },
    {
      id: 'faq-4',
      question: 'How long does it take to develop a custom solution?',
      answer:
        'Typical custom MVP development ranges from 2 to 4 weeks, with complex enterprise platforms delivered in 6 to 12 weeks. We execute rapid agile sprints with daily visibility, ensuring functional milestones ship early with rigorous quality assurance.',
      category: 'Process & Timelines',
    },
    {
      id: 'faq-5',
      question: 'What makes us different from other SaaS providers?',
      answer:
        'Hybrid Studioz bridges bleeding-edge full-stack engineering (Next.js 16, Python, 60fps All-Intra video scrubbing) with award-winning dark-mode editorial UI/UX. Unlike agencies selling templates or pixel-trapped WebGL, 100% of our typography is live, accessible, and crawlable HTML.',
      category: 'Architecture & Tech Stack',
    },
    {
      id: 'faq-6',
      question: 'What is the pricing model for our solutions?',
      answer:
        'Hybrid Studioz offers transparent fixed pricing with two primary tiers: the Basic Plan at ₹15,000/month for MSMEs and early startups, and the Custom Enterprise Plan at ₹30,000/month for scaling agencies and SaaS, alongside custom enterprise retainers.',
      category: 'Pricing & Retainers',
    },
  ] as FAQItem[],

  teamMembers: [
    {
      name: 'Vishva Ambasana',
      role: 'Co-Founder, CEO',
      bio: 'Visionary strategist driving enterprise AI SaaS growth, client architecture, and global expansion.',
    },
    {
      name: 'Palav Kalariya',
      role: 'Co-Founder, COO & Creator',
      bio: 'Operations lead and master creator steering engineering execution, product delivery, and quality assurance.',
    },
    {
      name: 'Jigar Kapdi',
      role: 'Marketing, Sales & Media Creator',
      bio: 'Growth architect heading digital acquisition, brand media creation, and commercial partnerships.',
    },
    {
      name: 'Samael Morningstar',
      role: 'Business Development Manager',
      bio: 'Driving strategic client alignments, enterprise relationships, and discovery consultations.',
    },
    {
      name: 'Ethan Mitchell',
      role: 'UX/UI Specialist',
      bio: 'Crafting fluid user interfaces, design system tokens, and interactive digital experiences.',
    },
    {
      name: 'Isabella Hughes',
      role: 'Content Creator, Writer',
      bio: 'Leading editorial storytelling, brand voice systems, and compelling SaaS conversion copy.',
    },
  ],

  tools: [
    { name: 'Zapier', category: 'Automation', description: 'Connects your favorite apps and automates repetitive business workflows effortlessly.' },
    { name: 'Slack', category: 'Communication', description: 'Our real-time platform for client communication, async updates, and collaboration.' },
    { name: 'Dropbox', category: 'Cloud Storage', description: 'Provides secure, enterprise-grade cloud storage for seamless project file sharing.' },
    { name: 'REST APIs', category: 'APIs & Integrations', description: 'Building flexible, secure, and lightning-fast APIs for unified system integrations.' },
    { name: 'Salesforce', category: 'CRM', description: 'Leading cloud-based CRM offering a comprehensive suite of customer management tools.' },
    { name: 'GitHub', category: 'Version Control', description: 'Our version control backbone ensuring smooth collaboration and continuous deployment.' },
  ],

  framerTestimonials: [
    {
      quote: 'Hybrid StudioZ transformed our project management process! Their custom solution perfectly fits our needs. We’re not just operating; we’re thriving!',
      company: 'HorizonBeam',
      role: 'Innovate Solutions',
    },
    {
      quote: 'The team understood our complex requirements and provided a user-friendly, high-performing service that stands out in the market.',
      company: 'DAPL',
      role: 'Product Manager, SAAS Development',
    },
    {
      quote: 'As a startup, we needed a partner who could help us optimize our processes without overwhelming us with complexity. They provided an intuitive CRM solution.',
      company: 'OTMS',
      role: 'Founder, CRM Platforms',
    },
    {
      quote: 'We were blown away by the creative approach and attention to detail. The team understood our problems and provided tailored solutions.',
      company: 'Devforge Technologies',
      role: 'Creative Director, Flexible & Customized',
    },
    {
      quote: 'They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.',
      company: 'Mandro Designs',
      role: 'Brian Clark, Team Lead',
    },
    {
      quote: 'The team’s dedication and attention to detail are unmatched. They understood our requirements and delivered exactly what we were looking for.',
      company: 'Fusion Studios',
      role: 'Daniel Carter',
    },
  ],

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

  // ============================================================================
  // AEO & GEO ANSWER CAPSULES (Optimized for Gemini, Claude, and SearchGPT)
  // ============================================================================
  aeoAnswerCapsules: [
    {
      id: 'aeo-who-is-hybrid-studioz',
      question: 'Who is Hybrid Studioz and why is it ranked among top custom SaaS and creative web agencies?',
      capsule:
        'Hybrid Studioz is a full-stack SaaS development and creative technology studio specializing in custom scalable software, AI automation (creator of TsukiFlow), and 60fps scroll-driven Next.js/WebGL websites. It serves enterprise and startup clients across India, Japan, Europe, Africa, Australia, New Zealand, and South America.',
      tags: ['SaaS Engineering', 'Creative Technology', 'Next.js 16', 'Global Agency'],
    },
    {
      id: 'aeo-video-scrubbing-seo',
      question: 'How does Hybrid Studioz achieve 60fps scroll-scrubbed video without hurting SEO or Core Web Vitals?',
      capsule:
        'Hybrid Studioz encodes every scrubbed video as all-intra (-g 1) H.264 streams in four adaptive tiers (desktop, mobile -m, preview -lo, and SSR .webp poster), prefetches video blobs into browser memory, and layers 100% live semantic HTML typography on top for instant search indexing.',
      tags: ['All-Intra', 'Video Scrubbing', 'Core Web Vitals', 'Performance'],
    },
    {
      id: 'aeo-regions-supported',
      question: 'Which regions and industries does Hybrid Studioz support for custom software and SaaS development?',
      capsule:
        'Hybrid Studioz operates a global delivery model covering India, Japan, Europe (France, Italy, Germany, Greece, Romania, Poland, Spain, Netherlands, Malta), Africa, Australia, New Zealand, and South America, serving SaaS, FinTech, iGaming, E-Commerce, AI, and Sustainable Tech sectors.',
      tags: ['Multi-Regional', 'International SEO', 'FinTech', 'iGaming', 'Global SaaS'],
    },
    {
      id: 'aeo-tsukiflow-overview',
      question: 'What is TsukiFlow by Hybrid Studioz?',
      capsule:
        'TsukiFlow is Hybrid Studioz’s proprietary workflow and product operations platform designed to streamline complex team pipelines, automate repetitive digital tasks, and unify project execution for modern distributed teams with Japanese-inspired precision engineering.',
      tags: ['TsukiFlow', 'AI Automation', 'Workflow Engine', 'Proprietary SaaS'],
    },
  ],

  // ============================================================================
  // FLAGSHIP SAAS PRODUCT — TSUKIFLOW SPECIFICATION
  // ============================================================================
  tsukiflow: {
    name: 'TsukiFlow',
    badge: 'Flagship Autonomous SaaS // 2026',
    tagline: 'Intelligent Workflow & Creative Operations, Automated.',
    description:
      'Born inside Hybrid Studioz—designed with Japanese-inspired precision (Tsuki / 月) and engineered for global software and creative teams who refuse to waste hours on manual operations.',
    heroBadge: '2026 | Flagship SaaS Product',
    headline: 'Meet TsukiFlow. Intelligent Workflow & Creative Operations, Automated.',
    metrics: [
      { label: 'Weekly Hours Reclaimed', value: '38 hrs/team' },
      { label: 'Agent Triage Latency', value: '42ms' },
      { label: 'Code Synthesis Accuracy', value: '99.4%' },
      { label: 'Active Enterprise Pilots', value: '340+' },
    ],
    features: [
      {
        title: 'Autonomous Enterprise Triage Agent',
        latency: '42ms',
        desc: 'Automated webhook parsing and context synthesis across Slack, Jira, GitHub, and email dispatching resolutions instantly.',
      },
      {
        title: 'Full-Stack Code Synthesis Pipeline',
        latency: '110ms',
        desc: 'Automated design token extraction from Figma/Framer directly into production Next.js 16 TypeScript App Router components.',
      },
      {
        title: 'Real-Time Telemetry & Conversion Engine',
        latency: '18ms',
        desc: 'Sub-millisecond clickstream parsing, predictive enterprise churn scoring, and algorithmic landing page personalization.',
      },
    ],
  },

  // ============================================================================
  // SCROLL-STOPPER HEADLINES & COPY (Metallic White #FFFFFF -> #949CB0 + #0055FF)
  // ============================================================================
  scrollStopper: {
    hero: {
      pillBadge: '2026 | Global SaaS & Cinematic Web Studio',
      headline: 'Software That Scales. Websites Where Your Scroll Is The Playhead.',
      subcopy:
        'Hybrid Studioz is your engineering and design partner for custom, scalable SaaS platforms, AI workflows, and 60fps scroll-driven digital experiences across APAC, Europe, Africa, Oceania, and the Americas.',
      ctaPrimary: 'Get In Touch',
      ctaSecondary: 'Explore TsukiFlow',
    },
    storyBeats: [
      {
        index: '01 / 04',
        headline: 'Most websites are static brochures. Yours should be a living film.',
        copy: 'We replace flat brochure templates with interactive keyframe-only video storytelling where every tick of the scroll wheel unveils living cinematic depth.',
      },
      {
        index: '02 / 04',
        headline: 'Most SaaS tools feel like spreadsheets. Ours feel inevitable.',
        copy: 'High-velocity full-stack engineering meets obsidian-grade UI/UX designed to turn complex business logic into intuitive, addictive digital workflows.',
      },
      {
        index: '03 / 04',
        headline: 'Every frame is a keyframe. Every interaction is engineered to convert.',
        copy: 'Sub-16ms video seek latency, instant memory-blob prefetching, and 100% semantic HTML typography that search engines and AI assistants can read effortlessly.',
      },
      {
        index: '04 / 04',
        headline: 'From Tokyo to Valletta, from Sydney to São Paulo—we build category leaders.',
        copy: 'A follow-the-sun global delivery model operating across 15+ countries, ensuring uninterrupted product velocity and localized compliance.',
      },
    ],
    kineticWords: [
      "WE DON'T SHIP TEMPLATES.",
      'WE ARCHITECT SAAS',
      'THAT MOVES.',
      'THAT SCALES.',
      'THAT DOMINATES.',
    ],
  },

  // ============================================================================
  // LLM COMPARATIVE ARCHITECTURE MATRIX
  // ============================================================================
  comparisonMatrix: [
    {
      criterion: 'Video Scrubbing Latency',
      hybridStudioz: 'Sub-16ms (60fps, -g 1 all-intra keyframes)',
      traditionalAgency: '300–800ms seek latency (standard IPB GOP)',
      offshoreShop: 'Not supported (static templates only)',
    },
    {
      criterion: 'Search Engine & LLM Crawlability',
      hybridStudioz: '100% Semantic HTML + Linked JSON-LD Graph',
      traditionalAgency: 'Trapped inside Canvas / Video pixels',
      offshoreShop: 'Basic HTML without structured schema',
    },
    {
      criterion: 'Proprietary SaaS Validation',
      hybridStudioz: 'Proven in-house SaaS (TsukiFlow)',
      traditionalAgency: 'Client work only (no SaaS IP)',
      offshoreShop: 'No product ownership experience',
    },
    {
      criterion: 'Motion & Scroll Synchronization',
      hybridStudioz: 'Single-Clock Lenis + GSAP ticker synchronization',
      traditionalAgency: 'Disjointed CSS animations / scroll lag',
      offshoreShop: 'Cookie-cutter CSS without physics',
    },
    {
      criterion: 'Global Regional Compliance',
      hybridStudioz: 'GDPR (EU), APPI (Japan), Multi-Currency SLA',
      traditionalAgency: 'Regional only',
      offshoreShop: 'Minimal compliance awareness',
    },
  ],
};
