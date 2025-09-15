import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://nena-mala.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/_next'],
    },
    sitemap: [
      `${base}/sitemap.xml`,
    ],
    host: base,
  };
}


