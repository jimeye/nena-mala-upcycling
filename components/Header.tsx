'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOverDarkContent, setIsOverDarkContent] = useState(false);

  // Initialiser les variables CSS au chargement
  useEffect(() => {
    // Définir les variables CSS par défaut
    document.documentElement.style.setProperty('--header-logo-color', '#ffffff');
    document.documentElement.style.setProperty('--header-text-color', '#ffffff');
    document.documentElement.style.setProperty('--header-border-color', '#ffffff');
  }, []);

  useEffect(() => {
    const handleScrollForColor = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Détecter la position pour adapter les couleurs
      if (scrollY < windowHeight * 0.8) {
        // Sur le slider (contenu sombre) : couleurs claires
        setIsOverDarkContent(true);
        document.documentElement.style.setProperty('--header-logo-color', '#ffffff');
        document.documentElement.style.setProperty('--header-text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-border-color', '#ffffff');
        console.log('Header: Couleurs blanches (slider)');
      } else if (scrollY < windowHeight * 2.5) {
        // Sur les produits (contenu foncé avec images) : couleurs claires
        setIsOverDarkContent(true);
        document.documentElement.style.setProperty('--header-logo-color', '#ffffff');
        document.documentElement.style.setProperty('--header-text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-border-color', '#ffffff');
        console.log('Header: Couleurs blanches (produits)');
      } else {
        // Sur le footer (contenu clair) : couleurs sombres
        setIsOverDarkContent(false);
        document.documentElement.style.setProperty('--header-logo-color', '#000000');
        document.documentElement.style.setProperty('--header-text-color', '#000000');
        document.documentElement.style.setProperty('--header-border-color', '#000000');
        console.log('Header: Couleurs noires (footer)');
      }
    };

    window.addEventListener('scroll', handleScrollForColor);
    
    // Appeler une fois au chargement pour définir l'état initial
    handleScrollForColor();
    
    return () => {
      window.removeEventListener('scroll', handleScrollForColor);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navigation supérieure - cadre avec couleurs adaptatives */}
      <div className="relative z-10 py-4 transition-all duration-300 bg-transparent">
        <div className="flex justify-between items-center px-[15px]">
          <div className="w-full md:w-auto md:min-w-[400px] px-6 md:px-8 py-2 border bg-transparent transition-all duration-300" style={{ borderColor: 'var(--header-border-color)' }}>
            <div className="flex items-center justify-between">
              <div 
                className="h-6 transition-all duration-300"
                style={{ color: 'var(--header-text-color)' }}
                dangerouslySetInnerHTML={{
                  __html: `<svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="700" fill="currentColor">
                      Nena Mala
                    </text>
                  </svg>`
                }}
              />
              
              <nav className="flex items-center space-x-2">
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--header-text-color)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--header-text-color)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--header-text-color)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
                  </svg>
                </button>
                <button className="p-1 transition-colors md:hidden hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--header-text-color)' }}>
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