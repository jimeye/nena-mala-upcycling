'use client';
import { useEffect, useMemo, useState } from 'react';

type Variant = 'elegant' | 'curtain' | 'wipe-blur' | 'parallax' | 'duotone' | 'typo';

const slides = [
  '/nena-mala-hero-static-acceuil-1.webp',
  '/nena-mala-hero-static-acceuil-2.webp',
  '/nena-mala-hero-static-acceuil-3.webp',
  '/nena-mala-hero-static-acceuil-4.webp',
];

export default function HeroTransitionDemo({ variant }: { variant: Variant }) {
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = slides[i];
  const prev = slides[(i - 1 + slides.length) % slides.length];

  if (!mounted) return <div className="h-[60vh] md:h-[80vh]" />;

  if (variant === 'elegant') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] opacity-100 animate-kenburns-in" style={{ backgroundImage: `url(${current})` }} />
          <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] opacity-0" style={{ backgroundImage: `url(${prev})` }} />
        </div>
      </div>
    );
  }

  if (variant === 'curtain') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute inset-0 bg-[#da3832] animate-curtain-wipe" />
      </div>
    );
  }

  if (variant === 'wipe-blur') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-wipe-blur-in" style={{ backgroundImage: `url(${current})` }} />
      </div>
    );
  }

  if (variant === 'parallax') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-parallax-pan" style={{ backgroundImage: `url(${current})` }} />
      </div>
    );
  }

  if (variant === 'duotone') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        {/* voile permanent léger */}
        <div className="absolute inset-0 mix-blend-multiply bg-[#da3832]/10" />
        {/* flash renforcé */}
        <div className="absolute inset-0 mix-blend-multiply bg-[#da3832] opacity-0 animate-flash-duotone" />
      </div>
    );
  }

  // typo
  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
      <div className="absolute inset-0 flex items-end md:items-center justify-center p-6">
        <div className="text-white text-3xl md:text-5xl opacity-0 translate-y-3 md:translate-y-0 md:-translate-y-3 animate-typo-fade-up">upcycling. crafted. conscious.</div>
      </div>
    </div>
  );
}


