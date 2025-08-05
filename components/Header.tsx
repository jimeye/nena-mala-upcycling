'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOverDarkContent, setIsOverDarkContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas et plus de 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleScrollForColor = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Détecter si on est sur le slider (contenu sombre)
      const isOnSlider = scrollY < windowHeight;
      
      // Détecter si on est sur les produits (contenu clair)
      const isOnProducts = scrollY > windowHeight && scrollY < windowHeight * 2;
      
      // Détecter si on est sur le footer (contenu clair)
      const isOnFooter = scrollY > windowHeight * 2;
      
      // Adapter les couleurs selon le contenu en dessous
      if (isOnSlider) {
        // Sur le slider : texte blanc sur fond transparent
        setIsOverDarkContent(true);
      } else {
        // Sur les produits ou footer : texte noir sur fond blanc
        setIsOverDarkContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollForColor);
    
    // Appeler une fois au chargement pour définir l'état initial
    handleScrollForColor();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollForColor);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Navigation supérieure - cadre avec couleurs adaptatives */}
      <div className={`relative z-10 py-4 transition-all duration-300 ${
        isOverDarkContent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="flex justify-between items-center px-[15px]">
          <div className={`w-full md:w-auto md:min-w-[400px] px-6 md:px-8 py-2 shadow-sm border transition-all duration-300 ${
            isOverDarkContent 
              ? 'border-white bg-transparent' 
              : 'border-gray-300 bg-white/90'
          }`}>
            <div className="flex items-center justify-between">
              <h1 
                className={`text-xl font-bold tracking-wide transition-all duration-300 ${
                  isOverDarkContent ? 'text-white' : 'text-black'
                }`}
                style={{
                  fontFamily: '"Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '23px'
                }}
              >
                Nena Mala
              </h1>
              
              <nav className="flex items-center space-x-2">
                <button className={`p-1 transition-colors ${
                  isOverDarkContent 
                    ? 'hover:bg-white/20' 
                    : 'hover:bg-black/10'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${
                    isOverDarkContent ? 'text-white' : 'text-black'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className={`p-1 transition-colors ${
                  isOverDarkContent 
                    ? 'hover:bg-white/20' 
                    : 'hover:bg-black/10'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${
                    isOverDarkContent ? 'text-white' : 'text-black'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className={`p-1 transition-colors ${
                  isOverDarkContent 
                    ? 'hover:bg-white/20' 
                    : 'hover:bg-black/10'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${
                    isOverDarkContent ? 'text-white' : 'text-black'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                <button className={`p-1 transition-colors ${
                  isOverDarkContent 
                    ? 'hover:bg-white/20' 
                    : 'hover:bg-black/10'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${
                    isOverDarkContent ? 'text-white' : 'text-black'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 