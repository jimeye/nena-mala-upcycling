'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOverDarkContent, setIsOverDarkContent] = useState(false);
  const [letterColors, setLetterColors] = useState(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);
  const [borderColor, setBorderColor] = useState('#ffffff');
  const [iconColors, setIconColors] = useState(['#ffffff', '#ffffff', '#ffffff', '#ffffff']);

  // Fonction pour créer un camaïeu entre deux couleurs avec saut d'étape
  const createColorGradient = (startColor: string, endColor: string, steps: number) => {
    const colors = [];
    for (let i = 0; i < steps; i++) {
      // Sauter une étape en utilisant i * 2 au lieu de i
      const ratio = (i * 2) / ((steps - 1) * 2);
      const color = interpolateColor(startColor, endColor, ratio);
      colors.push(color);
    }
    return colors;
  };

  // Fonction pour interpoler entre deux couleurs
  const interpolateColor = (color1: string, color2: string, ratio: number) => {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
    
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);
    
    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

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
      const isMobile = window.innerWidth < 768; // Breakpoint mobile
      
      // Détecter la position pour adapter les couleurs
      if (scrollY < windowHeight * 0.8) {
        // Sur le slider (contenu sombre) : couleurs blanches fixes
        setIsOverDarkContent(true);
        setLetterColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);
        setBorderColor('#ffffff');
        setIconColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff']);
      } else if (isMobile) {
        // Version mobile : produits empilés verticalement (1 par ligne)
        if (scrollY < windowHeight * 1.0) {
          // Produit 1 mobile : Chocolat
          setIsOverDarkContent(true);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        } else if (scrollY < windowHeight * 2.0) {
          // Produit 2 mobile : Rose pastel
          setIsOverDarkContent(true);
          setLetterColors(['#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9']);
          setBorderColor('#f8b4d9');
          setIconColors(['#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9']);
        } else if (scrollY < windowHeight * 3.0) {
          // Produit 3 mobile : Chocolat
          setIsOverDarkContent(true);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        } else if (scrollY < windowHeight * 4.0) {
          // Produit 4 mobile : Rouge foncé
          setIsOverDarkContent(true);
          setLetterColors(['#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14']);
          setBorderColor('#4e1a14');
          setIconColors(['#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14']);
        } else {
          // Footer mobile : Chocolat
          setIsOverDarkContent(false);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        }
      } else {
        // Version desktop : produits en grille
        if (scrollY < windowHeight * 1.0) {
          // Produit 1 desktop : Chocolat
          setIsOverDarkContent(true);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        } else if (scrollY < windowHeight * 1.25) {
          // Produit 2 desktop : Rose pastel
          setIsOverDarkContent(true);
          setLetterColors(['#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9']);
          setBorderColor('#f8b4d9');
          setIconColors(['#f8b4d9', '#f8b4d9', '#f8b4d9', '#f8b4d9']);
        } else if (scrollY < windowHeight * 1.5) {
          // Produit 3 desktop : Chocolat
          setIsOverDarkContent(true);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        } else if (scrollY < windowHeight * 1.75) {
          // Produit 4 desktop : Rouge foncé
          setIsOverDarkContent(true);
          setLetterColors(['#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14']);
          setBorderColor('#4e1a14');
          setIconColors(['#4e1a14', '#4e1a14', '#4e1a14', '#4e1a14']);
        } else {
          // Footer desktop : Chocolat
          setIsOverDarkContent(false);
          setLetterColors(['#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727', '#453727']);
          setBorderColor('#453727');
          setIconColors(['#453727', '#453727', '#453727', '#453727']);
        }
      }
    };

    window.addEventListener('scroll', handleScrollForColor);
    
    // Appeler une fois au chargement pour définir l'état initial
    handleScrollForColor();
    
    return () => {
      window.removeEventListener('scroll', handleScrollForColor);
    };
  }, []);

  // Animation des lettres avec camaïeu (seulement lors des transitions, pas sur les produits)
  useEffect(() => {
    // Ne pas animer si on est sur le slider (couleurs blanches fixes)
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth < 768; // Breakpoint mobile
    
    if (scrollY < windowHeight * 0.8) {
      return;
    }

    // Déterminer la couleur cible selon la position et le device
    let targetColor = '#453727'; // défaut
    if (isMobile) {
      // Version mobile
      if (scrollY < windowHeight * 1.0) {
        targetColor = '#453727'; // Produit 1 mobile : Chocolat
      } else if (scrollY < windowHeight * 2.0) {
        targetColor = '#f8b4d9'; // Produit 2 mobile : Rose pastel
      } else if (scrollY < windowHeight * 3.0) {
        targetColor = '#453727'; // Produit 3 mobile : Chocolat
      } else if (scrollY < windowHeight * 4.0) {
        targetColor = '#4e1a14'; // Produit 4 mobile : Rouge foncé
      } else {
        targetColor = '#453727'; // Footer mobile : Chocolat
      }
    } else {
      // Version desktop
      if (scrollY < windowHeight * 1.0) {
        targetColor = '#453727'; // Produit 1 desktop : Chocolat
      } else if (scrollY < windowHeight * 1.25) {
        targetColor = '#f8b4d9'; // Produit 2 desktop : Rose pastel
      } else if (scrollY < windowHeight * 1.5) {
        targetColor = '#453727'; // Produit 3 desktop : Chocolat
      } else if (scrollY < windowHeight * 1.75) {
        targetColor = '#4e1a14'; // Produit 4 desktop : Rouge foncé
      } else {
        targetColor = '#453727'; // Footer desktop : Chocolat
      }
    }

    // Ne faire le camaïeu que si on change de zone
    const currentColor = letterColors[0]; // Prendre la couleur actuelle de la première lettre
    if (currentColor === targetColor) {
      return; // Pas de changement, pas d'animation
    }

    // Créer un camaïeu de 5 étapes pour chaque lettre
    const gradientSteps = 5;
    const colorGradient = createColorGradient(currentColor, targetColor, gradientSteps);
    
    // Animation progressive des lettres avec camaïeu
    letterColors.forEach((_, letterIndex) => {
      colorGradient.forEach((color, stepIndex) => {
        setTimeout(() => {
          setLetterColors(prev => {
            const newColors = [...prev];
            newColors[letterIndex] = color;
            return newColors;
          });
        }, letterIndex * 50 + stepIndex * 20); // 50ms entre lettres, 20ms entre étapes
      });
    });

    // Animation du cadre avec camaïeu
    const borderGradient = createColorGradient(currentColor, targetColor, gradientSteps);
    borderGradient.forEach((color, stepIndex) => {
      setTimeout(() => {
        setBorderColor(color);
      }, 9 * 50 + stepIndex * 20); // Après les lettres
    });

    // Animation progressive des icônes avec camaïeu
    iconColors.forEach((_, iconIndex) => {
      const iconGradient = createColorGradient(currentColor, targetColor, gradientSteps);
      iconGradient.forEach((color, stepIndex) => {
        setTimeout(() => {
          setIconColors(prev => {
            const newColors = [...prev];
            newColors[iconIndex] = color;
            return newColors;
          });
        }, (10 + iconIndex) * 50 + stepIndex * 20); // Après le cadre
      });
    });
  }, [isOverDarkContent, letterColors]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navigation supérieure - cadre avec couleurs adaptatives */}
      <div className="relative z-10 py-4 transition-all duration-300 bg-transparent">
        <div className="flex justify-between items-center px-[15px]">
          <div className="w-full md:w-auto md:min-w-[400px] px-6 md:px-8 py-2 border bg-transparent transition-all duration-300" style={{ borderColor: borderColor, transition: 'border-color 0.3s ease' }}>
            <div className="flex items-center justify-between">
              {/* Logo avec lettres individuelles */}
              <div className="h-6 flex items-center">
                <span style={{ color: letterColors[0], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>N</span>
                <span style={{ color: letterColors[1], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>e</span>
                <span style={{ color: letterColors[2], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>n</span>
                <span style={{ color: letterColors[3], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>a</span>
                <span style={{ color: letterColors[4], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>&nbsp;</span>
                <span style={{ color: letterColors[5], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>M</span>
                <span style={{ color: letterColors[6], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>a</span>
                <span style={{ color: letterColors[7], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>l</span>
                <span style={{ color: letterColors[8], transition: 'color 0.3s ease', fontSize: '18px', fontWeight: '700' }}>a</span>
              </div>
              
              <nav className="flex items-center space-x-2">
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[0], transition: 'color 0.3s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[1], transition: 'color 0.3s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="p-1 transition-colors hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[2], transition: 'color 0.3s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
                  </svg>
                </button>
                <button className="p-1 transition-colors md:hidden hover:bg-black/10">
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[3], transition: 'color 0.3s ease' }}>
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