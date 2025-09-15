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
        className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-colors"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48C18.23 1.19 15.21 0 12 0 5.37 0 .01 5.37.01 12c0 2.11.55 4.16 1.6 5.97L0 24l6.17-1.61c1.74.95 3.71 1.45 5.83 1.45h0c6.63 0 12-5.37 12-12 0-3.21-1.19-6.23-3.48-8.52ZM12 21.82h0c-1.86 0-3.66-.5-5.23-1.45l-.37-.22-3.66.96.98-3.57-.24-.37C2.48 15.58 1.96 13.82 1.96 12 1.96 6.45 6.45 1.96 12 1.96c2.69 0 5.22 1.05 7.12 2.94 1.9 1.9 2.94 4.42 2.94 7.12 0 5.55-4.49 10.04-10.04 10.04Zm5.53-7.54c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.27-.25-.6-.51-.5-.69-.51-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.16.15.2 2.14 3.27 5.19 4.59.72.31 1.29.49 1.73.63.73.23 1.39.2 1.91.12.58-.09 1.79-.73 2.05-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" fill="#fff"/>
        </svg>
      </button>
    </div>
  );
}


