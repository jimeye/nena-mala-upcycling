'use client';

import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '33616993786'; // international format without +

const messages = [
  'Hello! How does the sizing run?',
  'Hello! Where is my order?',
  'Hello! How can I pay?',
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const send = (text: string) => {
    try {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setOpen(false);
    } catch {}
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-[15px] z-[75]" style={{ fontFamily: 'CourierRegular, "Courier New", Courier, monospace' }}>
      {open && (
        <div className="mb-2 w-[260px] bg-white text-black shadow-lg border border-black/10">
          <div className="px-3 py-2 border-b text-sm font-medium">Need help?</div>
          <div className="p-2 flex flex-col gap-2">
            {messages.map((m) => (
              <button
                key={m}
                onClick={() => send(m)}
                className="text-left text-sm px-3 py-2 border hover:bg-black hover:text-white transition-colors"
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        aria-label={open ? 'Close live chat' : 'Open live chat'}
        onClick={() => setOpen((v) => !v)}
        className="group w-11 h-11 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: '#000000' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block transition-transform duration-300 ease-out group-hover:scale-[1.08]">
          <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.6"/>
          <path d="M8 14c1.2 1 2.5 1.5 4 1.5S14.8 15 16 14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="9" cy="10" r="1" fill="#fff"/>
          <circle cx="15" cy="10" r="1" fill="#fff"/>
        </svg>
      </button>
    </div>
  );
}


