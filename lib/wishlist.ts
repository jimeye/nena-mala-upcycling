'use client';

import { useEffect, useState } from 'react';

export type WishItem = {
  slug: string;
  title: string;
  image: string;
  priceCents: number;
};

const STORAGE_KEY = 'nm_wishlist_v1';

export function useWishlist() {
  const [items, setItems] = useState<WishItem[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const toggle = (item: WishItem) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.slug === item.slug);
      return exists ? prev.filter((p) => p.slug !== item.slug) : [...prev, item];
    });
  };

  const remove = (slug: string) => setItems((prev) => prev.filter((p) => p.slug !== slug));

  return { items, toggle, remove };
}


