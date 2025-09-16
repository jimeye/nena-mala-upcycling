'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [analytics, setAnalytics] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consentRaw = window.localStorage.getItem('cookie-consent');
      if (!consentRaw) { setIsVisible(true); return; }
      const consent = JSON.parse(consentRaw || '{}');
      setAnalytics(!!consent.analytics);
      setMarketing(!!consent.marketing);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    try {
      window.localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() }));
      window.dispatchEvent(new CustomEvent('cookies:change', { detail: { necessary: true, analytics: true, marketing: true } } as any));
    } catch {}
    setIsVisible(false);
  };

  const savePrefs = () => {
    try {
      const payload = { necessary: true, analytics, marketing, date: new Date().toISOString() };
      window.localStorage.setItem('cookie-consent', JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent('cookies:change', { detail: payload } as any));
    } catch {}
    setIsVisible(false);
  };

  const rejectNonEssential = () => {
    setAnalytics(false);
    setMarketing(false);
    try {
      const payload = { necessary: true, analytics: false, marketing: false, date: new Date().toISOString() };
      window.localStorage.setItem('cookie-consent', JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent('cookies:change', { detail: payload } as any));
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[40] flex items-center justify-center p-2 md:p-3 pointer-events-none">
      <div className="bg-white text-black w-full max-w-[380px] md:max-w-[460px] p-3 md:p-4 shadow-xl border pointer-events-auto">
        <p className="text-sm md:text-base leading-snug text-center">
          We use cookies to enhance your experience and analyze traffic.{' '}
          <Link href="/legal/cookies" className="underline">Learn more</Link>
        </p>

        {open && (
          <div className="mt-3 md:mt-4 grid gap-2">
            <label className="flex items-center justify-between text-sm md:text-base">
              <span>Necessary</span>
              <input type="checkbox" checked readOnly className="accent-black" />
            </label>
            <label className="flex items-center justify-between text-sm md:text-base">
              <span>Analytics</span>
              <input type="checkbox" checked={analytics} onChange={(e)=>setAnalytics(e.target.checked)} className="accent-black" />
            </label>
            <label className="flex items-center justify-between text-sm md:text-base">
              <span>Marketing</span>
              <input type="checkbox" checked={marketing} onChange={(e)=>setMarketing(e.target.checked)} className="accent-black" />
            </label>
          </div>
        )}

        <div className="mt-3 md:mt-4 flex items-center justify-center gap-3 md:gap-4">
          <button onClick={() => setOpen((v)=>!v)} className="text-sm md:text-base underline-offset-2 hover:underline" aria-expanded={open}>
            {open ? 'Hide preferences' : 'Preferences'}
          </button>
          <button
            onClick={rejectNonEssential}
            className="px-3 md:px-4 py-1.5 md:py-2 border border-black text-xs md:text-sm hover:bg-black hover:text-white transition-colors"
          >
            Necessary only
          </button>
          <button
            onClick={open ? savePrefs : acceptAll}
            className="px-4 md:px-5 py-1.5 md:py-2 border-2 border-black text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-colors"
            aria-label="Accept cookies"
          >
            {open ? 'Save' : 'Accept all'}
          </button>
        </div>
      </div>
    </div>
  );
}


