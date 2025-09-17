'use client';
import { useEffect, useMemo, useState } from 'react';

type Variant = 'elegant' | 'curtain' | 'wipe-blur' | 'parallax' | 'duotone' | 'typo' | 'curtain-left' | 'curtain-right' | 'curtain-top' | 'curtain-bottom' | 'curtain-split' | 'photo-curtain-left' | 'photo-curtain-right' | 'photo-curtain-top' | 'photo-curtain-bottom' | 'photo-curtain-split' | 'combo-photo-split-bottom' | 'combo-top-photo-right';

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
        <div className="absolute top-0 bottom-0 left-0 w-[6px] bg-white/50 mix-blend-overlay animate-curtain-wipe" />
      </div>
    );
  }

  if (variant === 'curtain-left') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute inset-0 bg-[#da3832] animate-curtain-left" />
      </div>
    );
  }
  if (variant === 'curtain-right') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute inset-0 bg-[#da3832] animate-curtain-right" />
      </div>
    );
  }
  if (variant === 'curtain-top') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute inset-0 bg-[#da3832] animate-curtain-top" />
      </div>
    );
  }
  if (variant === 'curtain-bottom') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute inset-0 bg-[#da3832] animate-curtain-bottom" />
      </div>
    );
  }
  if (variant === 'curtain-split') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div className="absolute top-0 bottom-0 left-1/2 w-1/2 bg-[#da3832] origin-left animate-curtain-split-right" />
        <div className="absolute top-0 bottom-0 right-1/2 w-1/2 bg-[#da3832] origin-right animate-curtain-split-left" />
      </div>
    );
  }

  // ===== Photo-curtains (le rideau est la photo précédente) =====
  if (variant === 'photo-curtain-left') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-left-slow" style={{ backgroundImage: `url(${prev})` }} />
      </div>
    );
  }
  if (variant === 'photo-curtain-right') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-right-slow" style={{ backgroundImage: `url(${prev})` }} />
      </div>
    );
  }
  if (variant === 'photo-curtain-top') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-top-slow" style={{ backgroundImage: `url(${prev})` }} />
      </div>
    );
  }
  if (variant === 'photo-curtain-bottom') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-bottom-slow" style={{ backgroundImage: `url(${prev})` }} />
      </div>
    );
  }
  if (variant === 'photo-curtain-split') {
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        {/* deux moitiés de la photo précédente */}
        <div key={`L-${i}`} className="absolute top-0 bottom-0 right-1/2 w-1/2 animate-curtain-split-left-slow" style={{ backgroundImage: `url(${prev})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '200% 100%' }} />
        <div key={`R-${i}`} className="absolute top-0 bottom-0 left-1/2 w-1/2 animate-curtain-split-right-slow" style={{ backgroundImage: `url(${prev})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '200% 100%' }} />
      </div>
    );
  }

  // ===== Combos =====
  // Combo 1: alterne Photo Curtain split (pairs) / Photo Curtain bas (impairs)
  if (variant === 'combo-photo-split-bottom') {
    const useSplit = i % 2 === 0;
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        {useSplit ? (
          <>
            <div key={`L-${i}`} className="absolute top-0 bottom-0 right-1/2 w-1/2 animate-curtain-split-left-slow" style={{ backgroundImage: `url(${prev})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '200% 100%' }} />
            <div key={`R-${i}`} className="absolute top-0 bottom-0 left-1/2 w-1/2 animate-curtain-split-right-slow" style={{ backgroundImage: `url(${prev})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '200% 100%' }} />
          </>
        ) : (
          <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-bottom-slow" style={{ backgroundImage: `url(${prev})` }} />
        )}
      </div>
    );
  }

  // Combo 2: alterne Curtain haut (rouge) (pairs) / Photo Curtain droite (impairs)
  if (variant === 'combo-top-photo-right') {
    const useTop = i % 2 === 0;
    return (
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${current})` }} />
        {useTop ? (
          <div className="absolute inset-0 bg-[#da3832] animate-curtain-top" />
        ) : (
          <div key={i} className="absolute inset-0 bg-cover bg-center animate-curtain-right-slow" style={{ backgroundImage: `url(${prev})` }} />
        )}
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
        <div key={i} className="absolute inset-0 mix-blend-multiply bg-[#da3832] opacity-0 animate-flash-duotone" />
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


