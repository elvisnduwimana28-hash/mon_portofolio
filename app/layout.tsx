
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elvis NDUWIMANA | Admin Système & Data',
  description: "Portfolio d'Elvis NDUWIMANA, Administrateur Systèmes & Réseaux, Infrastructure & Data. Automatisation, sécurité, analyse de données.",
  openGraph: {
    title: 'Elvis NDUWIMANA | Admin Système & Data',
    description: "Portfolio d'Elvis NDUWIMANA, Administrateur Systèmes & Réseaux, Infrastructure & Data. Automatisation, sécurité, analyse de données.",
    url: 'https://elvisnduwimana.vercel.app/',
    siteName: 'Elvis NDUWIMANA Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elvis NDUWIMANA Portfolio',
      },
    ],
  },
  metadataBase: new URL('https://elvisnduwimana.vercel.app'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-black text-zinc-100 antialiased dark">
        {children}
      </body>
    </html>
  );
}
