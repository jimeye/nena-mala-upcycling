'use client';
import { useCart } from '@/lib/cart';
import { useEffect, useState } from 'react';

export default function CartIcon({ onClick, className, color }: { onClick?: () => void; className?: string; color?: string }) {
  const { items } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  if (!mounted) {
    return (
      <button aria-label="Cart" className={`relative ${className ?? ''}`} onClick={onClick} suppressHydrationWarning>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
        </svg>
      </button>
    );
  }

  return (
    <button aria-label="Cart" className={`relative ${className ?? ''}`} onClick={onClick}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] leading-none px-1 py-[2px] rounded">{count}</span>
      )}
    </button>
  );
}


