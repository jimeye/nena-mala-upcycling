"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProducts, getAllCategories, type Product } from '@/lib/products';

export default function AllItemsGrid() {
  const allItems = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => ['all', ...getAllCategories()] as Array<'all' | Product['category']>, []);

  const [selected, setSelected] = useState<'all' | Product['category']>('all');

  const items = useMemo(() => {
    if (selected === 'all') return allItems;
    return allItems.filter((p) => p.category === selected);
  }, [allItems, selected]);

  return (
    <section className="px-[15px] py-8 md:py-12">
      <div className="mb-4 flex items-center justify-end">
        <label className="text-sm mr-2" htmlFor="cat">Category:</label>
        <select
          id="cat"
          value={selected}
          onChange={(e) => setSelected(e.target.value as any)}
          className="border border-black px-2 py-1 text-sm bg-white"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c === 'all' ? 'All' : c}</option>
          ))}
        </select>
      </div>

      <div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {items.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block relative overflow-hidden">
              <div className="relative w-full aspect-[3/4]">
                <Image src={p.images[0]} alt={p.title} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-transparent text-black font-bold border border-black text-[10px] md:text-xs px-3 py-1">shop now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


