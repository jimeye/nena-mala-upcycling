import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import Price from '../Price';

export default function ProductHeroCarousel({ currentSlug }: { currentSlug: string }) {
  const products = getAllProducts();
  const items = products.filter((p) => p.slug !== currentSlug).slice(0, 6);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 px-4 pb-4">
        {items.map((p) => (
          <Link key={p.slug} href={`/product/${p.slug}`} className="min-w-[240px] relative block group">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="mt-2 text-sm">
              <div className="font-medium">{p.title}</div>
              <Price
                cents={Math.round(parseFloat(p.price.replace(/[^0-9.,]/g, '').replace(',', '.')) * 100) || 0}
                className="text-gray-600"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
