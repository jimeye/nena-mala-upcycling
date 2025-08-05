'use client';
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'upcycling. crafted. conscious.',
      button: 'shop now'
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'sustainable fashion',
      button: 'shop now'
    },
    {
      image: '/nena-mala-hero-static-acceuil.webp',
      title: 'limited edition',
      button: 'shop now'
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
    <div className="relative h-screen overflow-hidden">
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
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full h-full flex items-center justify-end">
                <div className="text-white text-right" style={{ marginRight: '15px' }}>
                  <p className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                    {slide.title}
                  </p>
                  <button className="text-xl font-bold tracking-tight hover:no-underline transition-all">
                    {slide.button}
                  </button>
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