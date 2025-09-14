'use client';

import { useEffect, useState } from 'react';

export type CartItem = {
  slug: string;
  title: string;
  priceCents: number;
  image: string;
  quantity: number;
};

const STORAGE_KEY = 'nm_cart_v1';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    const sync = () => {
      try {
        const rawNow = localStorage.getItem(STORAGE_KEY);
        if (!rawNow) { setItems([]); return; }
        const parsed = JSON.parse(rawNow);
        setItems((prev) => {
          const prevStr = JSON.stringify(prev);
          const nextStr = JSON.stringify(parsed);
          return prevStr === nextStr ? prev : parsed;
        });
      } catch {}
    };
    window.addEventListener('cart:add', sync as EventListener);
    return () => {
      window.removeEventListener('cart:add', sync as EventListener);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.slug === item.slug);
      let next: CartItem[];
      if (idx !== -1) {
        // Unique products: keep quantity at 1
        next = prev.map((p, i) => (i === idx ? { ...p, quantity: 1 } : p));
      } else {
        next = [...prev, { ...item, quantity: 1 }];
      }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      try { window.dispatchEvent(new Event('cart:add')); } catch {}
      return next;
    });
  };

  const removeItem = (slug: string) => setItems((prev) => prev.filter((p) => p.slug !== slug));
  const setQuantity = (slug: string, _quantity: number) =>
    setItems((prev) => prev.map((p) => (p.slug === slug ? { ...p, quantity: 1 } : p))); // force 1 (unique piece)
  const clear = () => setItems([]);

  const subtotalCents = items.reduce((sum, p) => sum + p.priceCents * p.quantity, 0);

  return { items, addItem, removeItem, setQuantity, clear, subtotalCents };
}


