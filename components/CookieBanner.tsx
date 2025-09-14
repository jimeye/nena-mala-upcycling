'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem('cookie-consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    try {
      window.localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() }));
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[40] flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-white text-black w-full max-w-[720px] p-4 md:p-5 shadow-xl border pointer-events-auto">
        <p className="text-base md:text-xl leading-snug text-center">
          This website uses cookies to ensure you get the best experience.{' '}
          <Link href="/legal/cookies" className="underline">Learn more</Link>
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 md:gap-8">
          <Link href="/legal/cookies" className="text-base md:text-lg font-medium underline-offset-2 hover:underline">
            Preferences
          </Link>
          <button
            onClick={acceptAll}
            className="px-6 md:px-8 py-2 md:py-3 border-2 border-black text-base md:text-lg font-semibold hover:bg-black hover:text-white transition-colors"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}


