'use client';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { formatPriceCents } from '@/lib/locale';

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, setQuantity, removeItem, subtotalCents } = useCart();
  const subtotal = formatPriceCents(subtotalCents);

  if (!open) return null;

  return (
    <div className={`fixed inset-0 z-[80]`}>
      {/* Backdrop */}
      <button
        aria-label="Fermer le panier"
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white text-black transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: 'CourierRegular, "Courier New", Courier, monospace' }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button aria-label="Close" onClick={onClose}>✕</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-190px)]">
          {items.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            items.map((it) => (
              <div key={it.slug} className="flex gap-3 items-start">
                <img src={it.image} alt={it.title} className="w-20 h-24 object-cover bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate">{it.title}</div>
                  <div className="text-xs text-gray-600">{formatPriceCents(it.priceCents)}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs">Qty: 1 (unique piece)</span>
                    <button onClick={()=>removeItem(it.slug)} className="ml-auto underline text-xs">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>
          <div className="text-xs text-gray-600">Shipping calculated at checkout</div>
          <div className="flex gap-2">
            <Link href="/cart" onClick={onClose} className="flex-1 text-center border border-gray-300 px-4 py-3">View cart</Link>
            <Link href="/checkout" onClick={onClose} className="flex-1 text-center border border-black px-4 py-3 hover:bg-black hover:text-white transition-colors">Checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  );
}


