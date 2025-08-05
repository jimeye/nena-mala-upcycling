'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Navigation supérieure - cadre avec contour blanc et fond transparent */}
      <div className="relative z-10 py-4">
        <div className="flex justify-between items-center px-[15px]">
          <div className="w-full md:w-auto md:min-w-[400px] px-6 md:px-8 py-2 shadow-sm border border-white">
            <div className="flex items-center justify-between">
              <h1 
                className="text-xl font-bold text-white tracking-wide"
                style={{
                  fontFamily: '"Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '23px',
                  color: 'rgb(255, 255, 255)'
                }}
              >
                Nena Mala
              </h1>
              
              <nav className="flex items-center space-x-2">
                <button className="p-1 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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