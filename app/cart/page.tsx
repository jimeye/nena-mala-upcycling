'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cart';

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotalCents } = useCart();
  const subtotal = (subtotalCents / 100).toFixed(2);
  return (
    <main className="text-black">
      <Header fixed enableDynamicColors={false} baseColor="#000" />
      <div className="h-16 md:h-20" />
      <section className="px-[15px] py-8 md:py-12">
        {items.length === 0 ? (
          <div>Your cart is empty. <Link href="/shop" className="underline">Continue shopping</Link></div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {items.map((it) => (
              <div key={it.slug} className="flex gap-4 items-center">
                <img src={it.image} alt={it.title} className="w-20 h-24 object-cover bg-gray-100" />
                <div className="flex-1">
                  <div className="text-sm">{it.title}</div>
                  <div className="text-xs text-gray-600">{(it.priceCents/100).toFixed(2)} €</div>
                </div>
                <span className="text-xs">Qty: 1</span>
                <button onClick={() => removeItem(it.slug)} className="underline">Remove</button>
              </div>
            ))}
            <div className="flex justify-between pt-4 border-t">
              <div>Subtotal</div>
              <div>{subtotal} €</div>
            </div>
            <div className="flex justify-end">
              <Link href="/checkout" className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">Checkout</Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}


