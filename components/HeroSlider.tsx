'use client';
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'upcycling. crafted. conscious.',
      button: 'shop now',
      position: 'left',
      verticalPosition: 'center' // Milieu vertical
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'sustainable fashion',
      button: 'shop now',
      position: 'center',
      verticalPosition: 'bottom' // Bas de l'image
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'limited edition',
      button: 'shop now',
      position: 'right',
      verticalPosition: 'top' // Haut de l'image
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[85vh] md:h-[95vh] overflow-hidden">
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
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Content */}
            <div className={`relative z-10 h-full flex ${
              slide.verticalPosition === 'top' ? 'items-start pt-20' :
              slide.verticalPosition === 'center' ? 'items-center' :
              'items-end pb-20'
            } ${slide.title === 'sustainable fashion' && index === currentSlide ? 'animate-flip' : ''} ${slide.title === 'upcycling. crafted. conscious.' && index === currentSlide ? 'animate-explode' : ''}`}>
              {slide.title === 'upcycling. crafted. conscious.' && index === currentSlide && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              )}
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
                  <p className="text-3xl md:text-5xl font-bold mb-0 tracking-tight">
                    {slide.title}
                  </p>
                  <div className={`flex items-center ${
                    slide.position === 'right' ? 'justify-end' :
                    slide.position === 'center' ? 'justify-end' :
                    'justify-end'
                  }`}>
                    <span className="text-xl font-bold tracking-tight">
                      {slide.button}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Masquées */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Dots Indicator - Supprimé */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
} 