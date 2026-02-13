import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://elvis-nduwimana-portofolio.vercel.app/sitemap.xml', // 👈 Ton VRAI lien
  };
}
