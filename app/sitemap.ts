import type { MetadataRoute } from 'next';
import { getAllProducts, getAllCategories } from '@/lib/products';

const BASE_URL = 'https://nena-mala.com';
const locales = ['en', 'fr', 'mx'] as const;

const staticPaths = [
  '',
  'shop',
  'about',
  'contact',
  'cart',
  'checkout',
  'legal/terms',
  'legal/privacy',
  'legal/cookies',
  'legal/csr',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const categoryPaths = getAllCategories().map((c) => `shop/${c}`);
  const productPaths = getAllProducts().map((p) => `product/${p.slug}`);

  const paths = [...staticPaths, ...categoryPaths, ...productPaths];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    // URL canonique en /en par défaut
    const canonical = `${BASE_URL}/en/${path}`.replace(/\/$/, '');

    const alternates: Record<string, string> = {};
    for (const loc of locales) {
      alternates[loc === 'en' ? 'en-US' : loc === 'fr' ? 'fr-FR' : 'es-MX'] = `${BASE_URL}/${loc}/${path}`.replace(/\/$/, '');
    }

    entries.push({
      url: canonical,
      lastModified: now,
    });
  }

  return entries;
}


