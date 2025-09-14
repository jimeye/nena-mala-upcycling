"use client";
import Link from 'next/link';
import { getAllProducts, type Product } from '@/lib/products';
import Price from './Price';

export default function YouMayAlsoLike({
  excludeSlug,
  title = 'You May Also Like',
  color,
}: {
  excludeSlug?: string;
  title?: string;
  color?: string;
}) {
  const items = (excludeSlug
    ? getAllProducts().filter((p) => p.slug !== excludeSlug)
    : getAllProducts()
  ).slice(0, 8);

  return (
    <section className="px-[15px] py-8 md:py-12">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4" style={color ? { color } : undefined}>{title}</h2>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-2 md:gap-1 pb-2">
          {items.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="min-w-[180px] md:min-w-[220px] block">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 text-xs md:text-sm">
                <div style={color ? { color } : undefined}>{p.title}</div>
                <Price
                  cents={Math.round(parseFloat(p.price.replace(/[^0-9.,]/g, '').replace(',', '.')) * 100) || 0}
                  style={color ? { color } : undefined}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


