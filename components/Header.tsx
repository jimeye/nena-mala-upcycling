'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartIcon from './cart/CartIcon';
import CartDrawer from './cart/CartDrawer';

export type HeaderProps = {
  brandText?: string;
  fixed?: boolean;
  enableDynamicColors?: boolean;
  baseColor?: string; // nouvelle prop
  onSearchClick?: () => void;
  onWishlistClick?: () => void;
  onBagClick?: () => void;
  onMenuClick?: () => void;
};

export default function Header({
  brandText = 'Nena Mala',
  fixed = true,
  enableDynamicColors = true,
  baseColor = '#ffffff',
  onSearchClick,
  onWishlistClick,
  onBagClick,
  onMenuClick,
}: HeaderProps) {
  const brandChars = useMemo(() => Array.from(brandText), [brandText]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const pathname = usePathname();
  const localeFromPath = useMemo(() => {
    try {
      const seg = (pathname || '').split('/').filter(Boolean)[0];
      return ['en','fr','mx'].includes(seg) ? `/${seg}` : '';
    } catch { return ''; }
  }, [pathname]);

  const hexToRgba = (hex: string, alpha: number) => {
    try {
      const h = hex.replace('#','');
      const full = h.length === 3 ? h.split('').map(c=>c+c).join('') : h;
      const r = parseInt(full.substring(0,2),16);
      const g = parseInt(full.substring(2,4),16);
      const b = parseInt(full.substring(4,6),16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch { return 'rgba(0,0,0,0.4)'; }
  };
  const isShopTheme = (baseColor || '').toLowerCase() === '#da3832';

  const [isOverDarkContent, setIsOverDarkContent] = useState(false);
  const [letterColors, setLetterColors] = useState<string[]>(() => Array(brandChars.length).fill(baseColor));
  const [borderColor, setBorderColor] = useState(baseColor);
  const [iconColors, setIconColors] = useState<string[]>([baseColor, baseColor, baseColor, baseColor]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartPop, setCartPop] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'mx' | 'fr'>('en');

  // Ajuster la longueur/couleur si le texte change ou si baseColor change
  useEffect(() => {
    setLetterColors(Array(brandChars.length).fill(baseColor));
    setBorderColor(baseColor);
    setIconColors([baseColor, baseColor, baseColor, baseColor]);
  }, [brandChars.length, baseColor]);

  const createColorGradient = (startColor: string, endColor: string, steps: number) => {
    const colors: string[] = [];
    for (let i = 0; i < steps; i++) {
      const ratio = (i * 2) / ((steps - 1) * 2);
      const color = interpolateColor(startColor, endColor, ratio);
      colors.push(color);
    }
    return colors;
  };

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

  useEffect(() => {
    document.documentElement.style.setProperty('--header-logo-color', baseColor);
    document.documentElement.style.setProperty('--header-text-color', baseColor);
    document.documentElement.style.setProperty('--header-border-color', baseColor);
  }, [baseColor]);

  // Initialiser la langue depuis localStorage
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('nm-lang');
      if (saved === 'en' || saved === 'fr' || saved === 'mx') setLang(saved as 'en' | 'fr' | 'mx');
    } catch {}
  }, []);

  const setLanguage = (code: 'en' | 'mx' | 'fr') => {
    setLang(code);
    try {
      window.localStorage.setItem('nm-lang', code);
      window.dispatchEvent(new CustomEvent('lang:change', { detail: code } as any));
      // Rediriger vers l'URL préfixée correspondante en conservant le chemin
      const { pathname, search, hash } = window.location;
      const segments = pathname.split('/').filter(Boolean);
      const currentMaybeLocale = segments[0];
      const locales = ['en','fr','mx'];
      if (locales.includes(currentMaybeLocale)) {
        segments[0] = code;
      } else {
        segments.unshift(code);
      }
      const nextPath = '/' + segments.join('/');
      const next = `${nextPath}${search || ''}${hash || ''}`;
      window.location.assign(next);
    } catch {}
  };

  // Petit pop "ajouté au panier" quand un article est ajouté
  useEffect(() => {
    const handler = () => {
      setCartPop(true);
      setTimeout(() => setCartPop(false), 1500);
      setDrawerOpen(true);
    };
    window.addEventListener('cart:add', handler as EventListener);
    return () => window.removeEventListener('cart:add', handler as EventListener);
  }, []);

  useEffect(() => {
    if (!enableDynamicColors) return; // si désactivé, on reste sur baseColor

    let ticking = false;
    const run = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      if (scrollY < windowHeight * 0.8) {
        // Initial state: use baseColor (shop can pass red)
        setIsOverDarkContent(true);
        setLetterColors((prev) => prev.map(() => baseColor));
        setBorderColor(baseColor);
        setIconColors([baseColor, baseColor, baseColor, baseColor]);
      } else if (isMobile) {
        if (scrollY < windowHeight * 1.0) {
          const c = '#453727';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 2.0) {
          const c = '#f8b4d9';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 3.0) {
          const c = '#453727';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 4.0) {
          const c = '#4e1a14';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else {
          const c = '#453727';
          setIsOverDarkContent(false);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        }
      } else {
        if (scrollY < windowHeight * 1.0) {
          const c = '#453727';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 1.25) {
          const c = '#f8b4d9';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 1.5) {
          const c = '#453727';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else if (scrollY < windowHeight * 1.75) {
          const c = '#4e1a14';
          setIsOverDarkContent(true);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        } else {
          const c = '#453727';
          setIsOverDarkContent(false);
          setLetterColors((prev) => prev.map(() => c));
          setBorderColor(c);
          setIconColors([c, c, c, c]);
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          run();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    run();
    return () => window.removeEventListener('scroll', onScroll);
  }, [enableDynamicColors]);

  useEffect(() => {
    if (!enableDynamicColors) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth < 768;
    if (scrollY < windowHeight * 0.8) return;

    let targetColor = '#453727';
    if (isMobile) {
      if (scrollY < windowHeight * 1.0) targetColor = '#453727';
      else if (scrollY < windowHeight * 2.0) targetColor = '#f8b4d9';
      else if (scrollY < windowHeight * 3.0) targetColor = '#453727';
      else if (scrollY < windowHeight * 4.0) targetColor = '#4e1a14';
      else targetColor = '#453727';
    } else {
      if (scrollY < windowHeight * 1.0) targetColor = '#453727';
      else if (scrollY < windowHeight * 1.25) targetColor = '#f8b4d9';
      else if (scrollY < windowHeight * 1.5) targetColor = '#453727';
      else if (scrollY < windowHeight * 1.75) targetColor = '#4e1a14';
      else targetColor = '#453727';
    }

    const currentColor = letterColors[0];
    if (!currentColor || currentColor === targetColor) return;

    const gradientSteps = 5;
    const colorGradient = createColorGradient(currentColor, targetColor, gradientSteps);

    brandChars.forEach((_, letterIndex) => {
      colorGradient.forEach((color, stepIndex) => {
        setTimeout(() => {
          setLetterColors((prev) => {
            const next = [...prev];
            next[letterIndex] = color;
            return next;
          });
        }, letterIndex * 30 + stepIndex * 10);
      });
    });

    const borderGradient = createColorGradient(currentColor, targetColor, gradientSteps);
    borderGradient.forEach((color, stepIndex) => {
      setTimeout(() => setBorderColor(color), brandChars.length * 30 + stepIndex * 10);
    });

    iconColors.forEach((_, iconIndex) => {
      const iconGradient = createColorGradient(currentColor, targetColor, gradientSteps);
      iconGradient.forEach((color, stepIndex) => {
        setTimeout(() => {
          setIconColors((prev) => {
            const next = [...prev];
            next[iconIndex] = color;
            return next;
          });
        }, (brandChars.length + iconIndex) * 30 + stepIndex * 10);
      });
    });
  }, [enableDynamicColors, brandChars, letterColors, iconColors]);

  if (!mounted) {
    return null;
  }

  return (
    <header className={`${fixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-[60] transition-all duration-300 font-sans`}>
      <div className="relative z-10 py-4 transition-all duration-300 bg-transparent">
        <div className="flex justify-between items-center px-[15px]">
          <div
            className="w-full md:w-auto md:min-w-[400px] px-6 md:px-8 py-2 border bg-transparent transition-all duration-300"
            style={{ borderColor: borderColor, transition: 'border-color 0.3s ease' }}
          >
            <div className="flex items-center justify-between">
              {/* Logo / Marque avec lettres individuelles cliquable vers home */}
              <Link href={localeFromPath || '/'} className="h-6 flex items-center">
                {brandChars.map((ch, idx) => (
                  <span
                    key={`${ch}-${idx}`}
                    style={{ color: letterColors[idx] ?? baseColor, transition: 'color 0.3s ease', fontSize: '22px', fontWeight: 800, fontStyle: 'italic', fontFamily: 'FuturaXBoldItalic, sans-serif' }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                ))}
              </Link>

              <nav className="flex items-center space-x-2">
                <button className="transition-colors p-0" onClick={onSearchClick} aria-label="Search">
                  <svg className="transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[0], transition: 'color 0.3s ease', width: '23px', height: '23px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="transition-colors p-0" onClick={onWishlistClick} aria-label="Wishlist">
                  <svg className="transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[1], transition: 'color 0.3s ease', width: '23px', height: '23px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="p-0 flex items-center justify-center" style={{ transform: 'scale(1.15)' }}>
                  <CartIcon onClick={() => setDrawerOpen(true)} color={iconColors[2]} />
                </div>
                <button className="transition-colors p-0" onClick={() => { onMenuClick?.(); setMenuOpen((v) => !v); }} aria-label="Menu">
                  <svg className="transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: iconColors[3], transition: 'color 0.3s ease', width: '23px', height: '23px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {cartPop && (
        <div className="fixed top-14 right-[15px] z-[60] bg-black text-white text-xs px-3 py-2" style={{ fontFamily: 'CourierRegular, \"Courier New\", Courier, monospace' }}>
          Added to cart ✓
        </div>
      )}

      {cartPop && (
        <div className="fixed top-14 right-[15px] z-[60] bg-black text-white text-xs px-3 py-2" style={{ fontFamily: 'CourierRegular, \"Courier New\", Courier, monospace' }}>
          Added to cart ✓
        </div>
      )}

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {menuOpen && (
        <div className="fixed inset-0 z-40">
          <button aria-label="Close menu overlay" className="absolute inset-0" style={{ backgroundColor: isShopTheme ? 'rgba(0,0,0,0.65)' : hexToRgba(baseColor, 0.35) }} onClick={() => setMenuOpen(false)}></button>
          <div
            className="absolute right-0 top-0 h-full w-[calc(41%+30px)] md:w-3/4 max-w-xs p-6 flex flex-col gap-4"
            style={{
              fontFamily: 'CourierRegular, "Courier New", Courier, monospace',
              backgroundColor: isShopTheme ? baseColor : '#ffffff',
              color: isShopTheme ? '#ffffff' : '#000000',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm tracking-wide">Menu</span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="p-1">✕</button>
            </div>
            <Link href={`${localeFromPath || ''}/`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Home</Link>
            <Link href={`${localeFromPath || ''}/shop`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Shop</Link>
            <Link href={`${localeFromPath || ''}/shop/dress`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Dress</Link>
            <Link href={`${localeFromPath || ''}/shop/top`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Top</Link>
            <Link href={`${localeFromPath || ''}/shop/skirt`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Skirt</Link>
            <Link href={`${localeFromPath || ''}/shop/denim`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Denim</Link>
            <Link href={`${localeFromPath || ''}/shop/pants`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Pants</Link>
            <Link href={`${localeFromPath || ''}/shop/two-piece`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">2-piece</Link>
            <Link href={`${localeFromPath || ''}/all-items`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">All Items</Link>
            <Link href={`${localeFromPath || ''}/about`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">About</Link>
            <Link href={`${localeFromPath || ''}/contact`} onClick={() => setMenuOpen(false)} className="underline-offset-2 hover:underline">Contact</Link>
            <div className="h-px w-full" style={{ backgroundColor: isShopTheme ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
            <div className="flex items-center gap-4">
              <Link href={`${localeFromPath || ''}/shop`} onClick={() => setMenuOpen(false)} aria-label="Search" className="p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"/></svg>
              </Link>
              <Link href={`${localeFromPath || ''}/cart`} onClick={() => setMenuOpen(false)} aria-label="Cart" className="p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0"/></svg>
              </Link>
              <Link href={`${localeFromPath || ''}/wishlist`} onClick={() => setMenuOpen(false)} aria-label="Favorites" className="p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </Link>
            </div>

            {/* Sélecteur de langue par drapeaux (🇬🇧 🇲🇽 🇫🇷) */}
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className="text-sm p-0"
                style={{ color: isShopTheme ? '#ffffff' : '#000000', background: 'transparent', border: 'none', fontSize: '150%' }}
                aria-pressed={lang === 'en'}
                aria-label="English"
              >
                🇬🇧
              </button>
              <button
                type="button"
                onClick={() => setLanguage('mx')}
                className="text-sm p-0"
                style={{ color: isShopTheme ? '#ffffff' : '#000000', background: 'transparent', border: 'none', fontSize: '150%' }}
                aria-pressed={lang === 'mx'}
                aria-label="Español (México)"
              >
                🇲🇽
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className="text-sm p-0"
                style={{ color: isShopTheme ? '#ffffff' : '#000000', background: 'transparent', border: 'none', fontSize: '150%' }}
                aria-pressed={lang === 'fr'}
                aria-label="Français"
              >
                🇫🇷
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 