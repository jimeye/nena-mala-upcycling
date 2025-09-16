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
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: '#000000' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M20.5 3.5A11 11 0 0 0 2 12.7L1 22l9.5-1A11 11 0 1 0 20.5 3.5Z" stroke="#fff" strokeWidth="1.5" fill="none" />
          <path d="M16.5 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.6-1.0-.6-.5-1.0-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.1-.3s0-.2-.1-.3c0-.1-.4-1-.5-1.3-.1-.3-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.8 0 1.1.8 2.1.9 2.3.1.1 1.6 2.4 3.8 3.4.5.2.9.4 1.2.5.5.1.9.1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3Z" fill="#fff" />
        </svg>
      </button>
    </div>
  );
}


