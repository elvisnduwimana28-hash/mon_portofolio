import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://elvisnduwimana.vercel.app/',
      lastModified: new Date(),
    },
  ];
}
