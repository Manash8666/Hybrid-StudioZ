import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Grain from '@/components/layout/Grain';
import Cursor from '@/components/layout/Cursor';
import Intro from '@/components/layout/Intro';
import Chapters from '@/components/layout/Chapters';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.brand.url),
  title: {
    default: 'Hybrid Studioz — Creative Technology & AI Design Agency',
    template: '%s | Hybrid Studioz',
  },
  description:
    'Award-winning Creative Technology, AI Design, and WebGL Digital Experience Studio. We engineer high-converting digital products, all-intra cinematic motion, and category-dominating brand systems.',
  keywords: [
    'Creative Agency',
    'AI Design Studio',
    'WebGL Development',
    'Next.js 16 Agency',
    'GSAP ScrollTrigger',
    'All-Intra Video Scrubbing',
    'SaaS Architecture',
    'Brand Identity',
  ],
  authors: [{ name: 'Hybrid Studioz Engineering Team' }],
  creator: 'Hybrid Studioz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.brand.url,
    title: 'Hybrid Studioz — Smart Tools & Digital Experiences',
    description:
      'Award-winning Creative Technology, AI Design, and Digital Product Studio operating with zero seek-latency video scrubbing and single-clock motion.',
    siteName: 'Hybrid Studioz',
    images: [
      {
        url: '/assets/about/closing-muse.webp',
        width: 1920,
        height: 1080,
        alt: 'Hybrid Studioz Cinematic Flagship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Studioz — Smart Tools & Digital Experiences',
    description:
      'Award-winning Creative Technology, AI Design, and Digital Product Studio operating with zero seek-latency video scrubbing and single-clock motion.',
    images: ['/assets/about/closing-muse.webp'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="dark">
      <body className="min-h-screen bg-[#070913] text-[#f4f7fb] selection:bg-[#ff5e1a] selection:text-white">
        <SmoothScroll>
          <Grain />
          <Cursor />
          <Intro />
          <Chapters />
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
