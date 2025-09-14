'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cart';
import { useEffect, useMemo, useState } from 'react';
import { formatPriceCents } from '@/lib/locale';

const IBAN = 'FR76 2823 3000 0140 7700 7418 491';
const BIC = 'REVOFRP2';
const HOLDER = 'Aliya Fellous';
const BANK = 'Revolut Bank UAB, 10 avenue Kléber, 75116 Paris, France';

export default function CheckoutPage() {
  const { items, subtotalCents, clear } = useCart();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('EU'); // MX, US, CA, EU, UK, ROW
  const [method, setMethod] = useState<'standard' | 'express'>('standard');
  const [orderRef, setOrderRef] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setOrderRef(`NM-${Date.now()}`); setMounted(true); }, []);
  const shippingCents = useMemo(() => {
    const sub = subtotalCents/100;
    // Thresholds (EUR)
    const thresholds: Record<string, number> = { MX: 110, US: 200, CA: 200, EU: 220, UK: 220, ROW: 250 };
    const free = sub >= (thresholds[country] ?? 99999);
    if (free) return 0;
    const table: Record<string, { standard: number; express: number }> = {
      MX: { standard: 6.5, express: 12 },
      US: { standard: 14.9, express: 24.9 },
      CA: { standard: 14.9, express: 24.9 },
      EU: { standard: 16.9, express: 29.9 },
      UK: { standard: 16.9, express: 29.9 },
      ROW: { standard: 19.9, express: 34.9 },
    };
    const zone = table[country] ?? table.ROW;
    return Math.round((zone[method] ?? zone.standard) * 100);
  }, [subtotalCents, country, method]);
  const totalCents = subtotalCents + shippingCents;

  const copy = async (txt: string) => { try { await navigator.clipboard.writeText(txt); } catch {} };

  return (
    <main className="text-black">
      <Header fixed enableDynamicColors={false} baseColor="#000" />
      <div className="h-16 md:h-20" />
      <section className="px-[15px] py-8 md:py-12 max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl mb-4 font-bold">Instant Bank Transfer</h1>
        <div className="space-y-4 mb-8">
          <input className="w-full border px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border px-3 py-2" placeholder="Full name" value={fullName} onChange={e=>setFullName(e.target.value)} />
          {/* Shipping selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Shipping country</label>
              <select className="border px-3 py-2 w-full" value={country} onChange={e=>setCountry(e.target.value)}>
                <option value="MX">Mexico</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="EU">European Union</option>
                <option value="UK">United Kingdom</option>
                <option value="ROW">Rest of World</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Shipping method</label>
              <select className="border px-3 py-2 w-full" value={method} onChange={e=>setMethod(e.target.value as 'standard'|'express')}>
                <option value="standard">Standard</option>
                <option value="express">Express</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border p-4 space-y-2">
          <div>
            Subtotal: {mounted ? (
              <span suppressHydrationWarning>{formatPriceCents(subtotalCents)}</span>
            ) : (
              <span suppressHydrationWarning></span>
            )}
          </div>
          <div>
            Shipping: {mounted ? (
              <span suppressHydrationWarning>{formatPriceCents(shippingCents)}</span>
            ) : (
              <span suppressHydrationWarning></span>
            )}
          </div>
          <div className="font-bold">
            Total: {mounted ? (
              <span suppressHydrationWarning>{formatPriceCents(totalCents)}</span>
            ) : (
              <span suppressHydrationWarning></span>
            )}
          </div>
          <div>Payment reference (add this in your bank transfer): <span className="font-bold" suppressHydrationWarning>{orderRef || '—'}</span></div>
          <div>IBAN: <span className="font-bold">{IBAN}</span> <button className="underline ml-2" onClick={()=>copy(IBAN)}>copy</button></div>
          <div>BIC: <span className="font-bold">{BIC}</span> <button className="underline ml-2" onClick={()=>copy(BIC)}>copy</button></div>
          <div>Account holder: {HOLDER}</div>
          <div>Bank: {BANK}</div>
        </div>
        <p className="text-sm text-gray-600 mt-3">Important: include the reference for faster reconciliation. Your order will be created as pending; you will receive the instructions via email.</p>
        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">I have sent the transfer</button>
          <button className="px-6 py-3 border border-gray-300" onClick={clear}>Clear cart</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}


