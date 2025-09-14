'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWishlist } from '@/lib/wishlist';
import Link from 'next/link';

export default function WishlistPage() {
  const { items, remove } = useWishlist();
  return (
    <main className="text-black">
      <Header fixed enableDynamicColors={false} baseColor="#000" />
      <div className="h-16 md:h-20" />
      <section className="px-[15px] py-8 md:py-12 max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Favorites</h1>
        {items.length === 0 ? (
          <div>No favorites yet. <Link href="/shop" className="underline">Browse the shop</Link></div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((it) => (
              <div key={it.slug} className="group">
                <Link href={`/product/${it.slug}`} className="block">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                    <img src={it.image} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="text-sm mt-2">{it.title}</div>
                  <div className="text-xs text-gray-600">{(it.priceCents/100).toFixed(2)} €</div>
                </Link>
                <button onClick={() => remove(it.slug)} className="text-xs underline mt-1">Remove</button>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}


