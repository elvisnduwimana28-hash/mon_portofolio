import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elvis NDUWIMANA | Admin Système & Data',
  description: "Portfolio d'Elvis NDUWIMANA, Administrateur Systèmes & Réseaux, Infrastructure & Data. Automatisation, sécurité, analyse de données.",
  
  // ✅ CORRECTION : La vérification doit être ICI, à la racine
  verification: {
    google: 'ObGF0kE914gOKmq0JU8D8ubsGzW5dF10asyobByx1KQ',
  },

  openGraph: {
    title: 'Elvis NDUWIMANA | Admin Système & Data',
    description: "Portfolio d'Elvis NDUWIMANA, Administrateur Systèmes & Réseaux, Infrastructure & Data. Automatisation, sécurité, analyse de données.",
    url: 'https://elvis-nduwimana-portofolio.vercel.app/',
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
  }, // Plus besoin du "as Record..." car le code est maintenant valide

  metadataBase: new URL('https://elvis-nduwimana-portofolio.vercel.app/'),
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