import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Grain from '@/components/layout/Grain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.brand.url),
  title: {
    default: 'Hybrid Studioz — AI SaaS & Bespoke Web Development',
    template: '%s | Hybrid Studioz',
  },
  description:
    'Hybrid Studioz is your partner for innovative AI SaaS solutions, specializing in custom, scalable software, bespoke web development, branding, and digital marketing that drives business growth.',
  keywords: [
    'AI SaaS Solutions',
    'Bespoke Web Development',
    'Custom Scalable Software',
    'Digital Marketing Agency',
    'Brand Identity Systems',
    'Next.js Web Applications',
    'Autonomous AI Agents',
    'Digital Creativity',
  ],
  authors: [{ name: 'Hybrid Studioz Engineering Team' }],
  creator: 'Hybrid Studioz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.brand.url,
    title: 'Hybrid Studioz — AI SaaS & Bespoke Web Development',
    description:
      'Innovative AI SaaS solutions, custom scalable software, bespoke web development, branding, and digital marketing.',
    siteName: 'Hybrid Studioz',
    images: [
      {
        url: '/assets/about/closing-muse.webp',
        width: 1920,
        height: 1080,
        alt: 'Hybrid Studioz AI SaaS & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Studioz — AI SaaS & Bespoke Web Development',
    description:
      'Innovative AI SaaS solutions, custom scalable software, bespoke web development, branding, and digital marketing.',
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
      <body className="min-h-screen bg-[#02040a] text-[#f4f7fb] selection:bg-[#0055ff] selection:text-white">
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
