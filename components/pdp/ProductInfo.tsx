"use client";
import { useCart } from '@/lib/cart';
import { useState } from 'react';
import { formatPriceCents } from '@/lib/locale';

export default function ProductInfo({
  slug,
  title,
  price,
  image,
  colors,
  sizes
}: {
  slug: string;
  title: string;
  price: string;
  image: string;
  colors: string[];
  sizes: string[];
}) {
  const { addItem } = useCart();
  const priceCents = Number.isFinite(parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.')))
    ? Math.round(parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.')) * 100)
    : 0;
  const [added, setAdded] = useState(false);
  return (
    <div className="text-center">
      <h1 className="text-xl md:text-2xl font-medium mb-2">{title}</h1>
      <div className="text-base mb-6">{formatPriceCents(priceCents)}</div>

      <div className="mb-6">
        <div className="text-sm mb-2">Color:</div>
        <div className="flex gap-3 justify-center items-center">
          <span className="text-sm">Unique piece</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm mb-2">Size:</div>
        <div className="text-sm">36–38</div>
      </div>

      <div className="flex flex-col items-center gap-2 mb-6">
        <button
          className="px-6 py-[0.6rem] bg-black text-white hover:bg-gray-900 transition-colors"
          onClick={() => { addItem({ slug, title, priceCents, image, quantity: 1 }); setAdded(true); setTimeout(()=>setAdded(false), 1500); }}
        >
          ADD TO CART
        </button>
        {added && <span className="text-sm">Added ✓</span>}
        <span className="inline-block px-4 py-1 rounded-full bg-transparent text-black text-sm scale-[0.85]">ADD TO FAVORITES 🖤</span>
      </div>
    </div>
  );
}
