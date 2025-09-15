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
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'upcycling. crafted. conscious.',
      position: 'left',
      verticalPosition: 'center'
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'sustainable fashion',
      position: 'center',
      verticalPosition: 'bottom'
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'limited edition',
      position: 'right',
      verticalPosition: 'top'
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'Asymmetrical and straight, soft and always strongly feminine, big and small, dresses envelope the body with ethereal lightness, creating interweavings and daring meekness.',
      position: 'center',
      verticalPosition: 'center'
    }
  ]), []);

  const slides = slidesProp && slidesProp.length > 0 ? slidesProp : defaultSlides;

  const [currentSlide, setCurrentSlide] = useState(() => {
    const i = Math.max(0, Math.min(startIndex, slides.length - 1));
    return i;
  });

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
              }}
            ></div>
            
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayClass}`}></div>
            
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