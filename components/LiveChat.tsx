'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '33616993786'; // international format without +

const messages = [
  'Hello! How does the sizing run?',
  'Hello! Where is my order?',
  'Hello! How can I pay?',
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);

  const send = (text: string) => {
    try {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setOpen(false);
    } catch {}
  };

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
        className="w-11 h-11 rounded-full bg-white text-black shadow-lg border border-black/10 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <span className="text-lg">★</span>
      </button>
    </div>
  );
}


