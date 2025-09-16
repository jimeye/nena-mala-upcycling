import './globals.css';
import { ReactNode } from 'react';
import CookieBanner from '../components/CookieBanner';
import LiveChat from '../components/LiveChat';

export const metadata = {
  title: 'Nena Mala - Luxury Upcycling & Limited Pieces',
  description: 'Découvrez nos pièces uniques en upcycling. Pièces limitées disponibles à Puerto Escondido, Paris et Ibiza. Mode éthique et durable.',
  keywords: 'upcycling, mode éthique, pièces limitées, Puerto Escondido, Paris, Ibiza, vêtements durables',
  authors: [{ name: 'Nena Mala' }],
  creator: 'Nena Mala',
  publisher: 'Nena Mala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nena-mala.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
      'es-MX': '/mx',
    },
  },
  openGraph: {
    title: 'Nena Mala - Luxury Upcycling & Limited Pieces',
    description: 'Découvrez nos pièces uniques en upcycling. Pièces limitées disponibles à Puerto Escondido, Paris et Ibiza.',
    url: 'https://nena-mala.com',
    siteName: 'Nena Mala',
    images: [
      {
        url: '/nena-mala-hero-static-acceuil.webp',
        width: 1200,
        height: 630,
        alt: 'Nena Mala - Upcycling & Limited Pieces',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nena Mala - Luxury Upcycling & Limited Pieces',
    description: 'Découvrez nos pièces uniques en upcycling. Pièces limitées disponibles à Puerto Escondido, Paris et Ibiza.',
    images: ['/nena-mala-hero-static-acceuil.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nena Mala',
            url: 'https://nena-mala.com',
            logo: 'https://nena-mala.com/logo-black.svg',
            sameAs: [
              'https://www.instagram.com/nenamala___17/'
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Nena Mala',
            url: 'https://nena-mala.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://nena-mala.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }) }}
        />
      </head>
      <body className="bg-white text-black">
        {children}
        <CookieBanner />
        <LiveChat />
      </body>
    </html>
  );
} 