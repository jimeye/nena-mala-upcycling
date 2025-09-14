"use client";

import { useEffect, useState } from 'react';
import { formatPriceCents } from '@/lib/locale';

export default function Price({ cents, className, style }: { cents: number; className?: string; style?: React.CSSProperties }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (typeof window === 'undefined' || !mounted) {
    // Évite le rendu SSR pour prévenir les erreurs d'hydratation liées à la langue/devise
    return <span className={className} style={style} suppressHydrationWarning></span>;
  }
  return (
    <span className={className} style={style} suppressHydrationWarning>
      {formatPriceCents(cents)}
    </span>
  );
}


