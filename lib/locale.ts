'use client';

import { useEffect, useState } from 'react';

export type LangCode = 'en' | 'fr' | 'mx';

const LANG_STORAGE_KEY = 'nm-lang';

export function getCurrentLang(): LangCode {
  try {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'fr' || saved === 'mx') return saved;
      // Try to read from pathname prefix /en /fr /mx
      const path = window.location.pathname;
      const seg = path.split('/').filter(Boolean)[0];
      if (seg === 'en' || seg === 'fr' || seg === 'mx') return seg as LangCode;
      // Optionally inspect <html lang="...">
      const htmlLang = document.documentElement.lang;
      if (htmlLang?.startsWith('fr')) return 'fr';
      if (htmlLang?.startsWith('es')) return 'mx';
    }
  } catch {}
  return 'en';
}

export function getCurrencyAndLocale(lang: LangCode): { currency: string; locale: string } {
  switch (lang) {
    case 'fr':
      return { currency: 'EUR', locale: 'fr-FR' };
    case 'mx':
      return { currency: 'MXN', locale: 'es-MX' };
    case 'en':
    default:
      return { currency: 'USD', locale: 'en-US' };
  }
}

export function formatPriceCents(cents: number): string {
  const lang = getCurrentLang();
  const { currency, locale } = getCurrencyAndLocale(lang);
  const amount = (cents || 0) / 100;
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  } catch {
    // Fallback simple
    return `${amount.toFixed(2)} ${currency}`;
  }
}

export function useLang(): LangCode {
  const [lang, setLang] = useState<LangCode>(() => getCurrentLang());
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail as LangCode | undefined;
        if (detail === 'en' || detail === 'fr' || detail === 'mx') {
          setLang(detail);
        } else {
          setLang(getCurrentLang());
        }
      } catch {
        setLang(getCurrentLang());
      }
    };
    window.addEventListener('lang:change', handler as EventListener);
    return () => window.removeEventListener('lang:change', handler as EventListener);
  }, []);
  return lang;
}


