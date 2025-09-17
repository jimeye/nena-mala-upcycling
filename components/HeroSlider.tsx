'use client';
import { useEffect, useMemo, useState } from 'react';

export type HeroSlide = {
  image: string;
  title?: string;
  button?: string;
  position?: 'left' | 'center' | 'right';
  verticalPosition?: 'top' | 'center' | 'bottom';
};

export type HeroSliderProps = {
  slides?: HeroSlide[];
  mobileSlides?: HeroSlide[];
  intervalMs?: number;
  heightClass?: string; // ex: "h-[85vh] md:h-[95vh]"
  overlayClass?: string; // ex: "bg-black/10"
  autoPlay?: boolean;
  showCounter?: boolean; // conservé pour compat, mais non utilisé
  startIndex?: number;
  onSlideChange?: (index: number) => void;
  className?: string;
};

export default function HeroSlider({
  slides: slidesProp,
  mobileSlides: mobileSlidesProp,
  intervalMs = 5000,
  heightClass = 'h-[85vh] md:h-[95vh]',
  overlayClass = 'bg-black/10',
  autoPlay = true,
  showCounter = false,
  startIndex = 0,
  onSlideChange,
  className = '',
}: HeroSliderProps) {
  const defaultSlides: HeroSlide[] = useMemo(() => ([
    {
      image: '/nena-mala-hero-static-acceuil-1.webp',
      title: 'upcycling. crafted. conscious.',
      position: 'left',
      verticalPosition: 'center'
    },
    {
      image: '/nena-mala-hero-static-acceuil-2.webp',
      title: 'sustainable fashion',
      position: 'center',
      verticalPosition: 'bottom'
    },
    {
      image: '/nena-mala-hero-static-acceuil-3.webp',
      title: 'limited edition',
      position: 'right',
      verticalPosition: 'top'
    },
    {
      image: '/nena-mala-hero-static-acceuil-4.webp',
      title: 'Asymmetrical and straight, soft and always strongly feminine, big and small, dresses envelope the body with ethereal lightness, creating interweavings and daring meekness.',
      position: 'center',
      verticalPosition: 'bottom'
    }
  ]), []);

  const defaultMobileSlides: HeroSlide[] = useMemo(() => ([
    {
      image: '/nena-mala-hero-static-acceuil-1-mob.webp',
      title: 'upcycling. crafted. conscious.',
      position: 'center',
      verticalPosition: 'center'
    },
    {
      image: '/nena-mala-hero-static-acceuil-2-mob.webp',
      title: 'sustainable fashion',
      position: 'center',
      verticalPosition: 'bottom'
    },
    {
      image: '/nena-mala-hero-static-acceuil-3-mob.webp',
      title: 'limited edition',
      position: 'center',
      verticalPosition: 'top'
    },
    {
      image: '/nena-mala-hero-static-acceuil-4-mob.webp',
      title: 'Asymmetrical and straight, soft and always strongly feminine, big and small, dresses envelope the body with ethereal lightness, creating interweavings and daring meekness.',
      position: 'center',
      verticalPosition: 'bottom'
    }
  ]), []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const slidesBase = slidesProp && slidesProp.length > 0 ? slidesProp : defaultSlides;
  const mobileSlidesBase = mobileSlidesProp && mobileSlidesProp.length > 0 ? mobileSlidesProp : defaultMobileSlides;
  const slides = isMobile ? mobileSlidesBase : slidesBase;

  // Eviter les divergences SSR/CSR: n'afficher le slider qu'après montage
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [currentSlide, setCurrentSlide] = useState(() => {
    const i = Math.max(0, Math.min(startIndex, slides.length - 1));
    return i;
  });

  // SUPPR: logique de rotation mobile et ratio — retour à la version originale

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs, autoPlay]);

  useEffect(() => {
    if (onSlideChange) onSlideChange(currentSlide);
  }, [currentSlide, onSlideChange]);

  const goToSlide = (index: number) => {
    const next = (index + slides.length) % slides.length;
    setCurrentSlide(next);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (!mounted) {
    return <div className={`relative ${heightClass} overflow-hidden ${className}`} style={{ maxWidth: '100%', width: '100%' }} suppressHydrationWarning />;
  }

  const previousIndex = (currentSlide - 1 + slides.length) % slides.length;
  const previousImage = slides[previousIndex]?.image || '';
  const cycleStep = currentSlide % 3; // 0: split, 1: right, 2: left

  return (
    <div className={`relative ${heightClass} overflow-hidden ${className}`} style={{ maxWidth: '100%', width: '100%' }}>
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: 'center center'
              }}
            ></div>
            
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayClass}`}></div>

            {/* Combo transition: Photo split → droite → gauche (utilise l'image précédente) */}
            {index === currentSlide && previousImage && (
              <>
                {cycleStep === 0 && (
                  <>
                    <div
                      key={`combo-split-L-${currentSlide}`}
                      className="absolute top-0 bottom-0 right-1/2 w-1/2 animate-curtain-split-left-slow"
                      style={{
                        backgroundImage: `url('${previousImage}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left center',
                        backgroundSize: '200% 100%',
                        zIndex: 5 as unknown as number,
                      }}
                    />
                    <div
                      key={`combo-split-R-${currentSlide}`}
                      className="absolute top-0 bottom-0 left-1/2 w-1/2 animate-curtain-split-right-slow"
                      style={{
                        backgroundImage: `url('${previousImage}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right center',
                        backgroundSize: '200% 100%',
                        zIndex: 5 as unknown as number,
                      }}
                    />
                  </>
                )}
                {cycleStep === 1 && (
                  <div
                    key={`combo-right-${currentSlide}`}
                    className="absolute inset-0 bg-cover bg-center animate-curtain-right-slow"
                    style={{ backgroundImage: `url('${previousImage}')`, zIndex: 5 as unknown as number }}
                  />
                )}
                {cycleStep === 2 && (
                  <div
                    key={`combo-left-${currentSlide}`}
                    className="absolute inset-0 bg-cover bg-center animate-curtain-left-slow"
                    style={{ backgroundImage: `url('${previousImage}')`, zIndex: 5 as unknown as number }}
                  />
                )}
              </>
            )}
            
            {/* Content */}
            <div className={`relative z-10 h-full flex ${
              slide.verticalPosition === 'top' ? 'items-start pt-20' :
              slide.verticalPosition === 'center' ? 'items-center' :
              'items-end pb-20'
            }`}>
              <div className={`w-full h-full flex ${
                slide.position === 'right' ? 'justify-end' :
                slide.position === 'center' ? 'justify-center' :
                'justify-start'
              } ${
                slide.verticalPosition === 'top' ? 'items-start' :
                slide.verticalPosition === 'center' ? 'items-center' :
                'items-end'
              }`}>
                <div className={`text-white ${
                  slide.position === 'right' ? 'text-right' :
                  slide.position === 'center' ? 'text-center' :
                  'text-left'
                }`} style={{ 
                  marginRight: slide.position === 'right' ? '15px' : '0',
                  marginLeft: slide.position === 'left' ? '15px' : '0'
                }}>
                  {slide.title && (
                    <p className="text-3xl md:text-5xl mb-0 tracking-tight">
                      {slide.title}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compteur supprimé volontairement */}
    </div>
  );
} 