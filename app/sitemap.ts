import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://elvis-nduwimana-portofolio.vercel.app/', // 👈 Ton VRAI lien
      lastModified: new Date(),
    },
  ];
}