import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#02040a',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};
import { Plus_Jakarta_Sans, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Grain from '@/components/layout/Grain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLdGraph from '@/components/seo/JsonLdGraph';
import { SITE_CONFIG } from '@/content/site';

// 3-Font Variable Typography System (Google Fonts via Next.js)
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = SITE_CONFIG.brand.url || 'https://hybridstudioz.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hybrid Studioz — Global SaaS, AI Workflows & Cinematic Web Engineering Studio',
    template: '%s | Hybrid Studioz',
  },
  description:
    'Hybrid Studioz is a global Creative Technology and Custom SaaS Engineering Studio. Pioneers of the 60fps All-Intra (-g 1) scroll-driven video engine and creator of TsukiFlow. Operating across India, Japan, Europe, Africa, Oceania, and the Americas.',
  keywords: [
    'Custom SaaS Development',
    'Next.js 16 Web Agency',
    'Autonomous AI Agents',
    'TsukiFlow Creative Operations',
    'Scroll-Driven Cinematic Websites',
    'All-Intra Video Scrubbing',
    'WebGL Three.js Studio',
    'Digital Marketing & Growth',
    'Full-Stack Cloud Architecture',
    'SaaS Engineering Studio India',
    'SaaS UI/UX Design Tokyo Japan',
    'GDPR Compliant Web Agency Europe',
    'iGaming FinTech Portals Malta',
  ],
  authors: [{ name: 'Hybrid Studioz Engineering Team' }],
  creator: 'Hybrid Studioz',
  publisher: 'Hybrid Studioz',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Hybrid Studioz — Global SaaS, AI Workflows & Cinematic Web Engineering Studio',
    description:
      'We partner with startups and enterprises to build custom scalable SaaS, autonomous AI workflows (TsukiFlow), and 60fps scroll-driven interactive experiences.',
    siteName: 'Hybrid Studioz',
    images: [
      {
        url: '/assets/framer/about-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Hybrid Studioz — Global SaaS & Cinematic Web Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Studioz — Global SaaS, AI Workflows & Cinematic Web Engineering Studio',
    description:
      'Custom scalable SaaS platforms, autonomous AI workflows (TsukiFlow), and 60fps scroll-driven digital experiences.',
    images: ['/assets/framer/about-portrait.jpg'],
  },
  icons: {
    icon: '/icon.svg',
  },
  other: {
    'display-density': 'retina-ready, 2x, 3x, 4k-uhd',
    'compliance-ergonomics': 'ISO 9241-307 Class I Visual Ergonomics',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${jakarta.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
      data-theme="dark"
    >
      <body className="min-h-screen bg-[#02040a] font-sans text-[#f4f7fb] selection:bg-[#0055ff] selection:text-white">
        {/* Linked JSON-LD Knowledge Graph for Gemini, Claude, and ChatGPT */}
        <JsonLdGraph />

        <SmoothScroll>
          <Grain />
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
