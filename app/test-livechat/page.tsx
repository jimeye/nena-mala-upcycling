export const metadata = {
  title: 'LiveChat Icons – Test',
};

export default function TestLiveChatPage() {
  return (
    <main className="px-[15px] py-8 md:py-12 text-black">
      <h1 className="text-xl md:text-2xl mb-4">LiveChat – 10 propositions</h1>
      <p className="text-sm mb-6">Couleurs identiques: fond noir (#000), icône blanche.</p>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
        {/* 1. WhatsApp simplifié */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="block" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 3.5A11 11 0 0 0 2 12.7L1 22l9.5-1A11 11 0 1 0 20.5 3.5Z" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M16.5 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.6-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.1-.3s0-.2-.1-.3c0-.1-.4-1-.5-1.3-.1-.3-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.8 0 1.1.8 2.1.9 2.3.1.1 1.6 2.4 3.8 3.4.5.2.9.4 1.2.5.5.1.9.1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3Z" fill="#fff" />
          </svg>
        </button>

        {/* 2. Bulle de chat */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 15.5H9l-4 3v-3H4A1.5 1.5 0 0 1 2.5 14V7A1.5 1.5 0 0 1 4 5.5Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 3. Téléphone combiné */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2l3 3-2 2c.8 1.9 2.1 3.7 3.8 5.4 1.7 1.7 3.5 3 5.4 3.8l2-2 3 3-1.8 1.8c-.6.6-1.5.9-2.3.6-3.3-1.2-6.5-3.4-9.4-6.3-2.9-2.9-5.1-6.1-6.3-9.4-.3-.9 0-1.8.6-2.3L6 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 4. Bulle + éclairs (urgent) */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16v8H9l-4 3v-3H4V6Z" stroke="#fff" strokeWidth="1.6"/>
            <path d="M12 7l-1.5 3H13L11.5 13" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 5. Casque support */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-3" stroke="#fff" strokeWidth="1.6"/>
            <path d="M4 17h3a2 2 0 0 0 2-2v-1" stroke="#fff" strokeWidth="1.6"/>
          </svg>
        </button>

        {/* 6. Point d’interrogation */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 8A2.5 2.5 0 1 1 14 9.5c0 2-2.5 2-2.5 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="11.5" cy="17.5" r="1.2" fill="#fff"/>
          </svg>
        </button>

        {/* 7. Message bulles double */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5h7v6h-4l-3 2v-2h0V5Z" stroke="#fff" strokeWidth="1.6"/>
            <path d="M4 9h8v6H8l-4 2v-2H4V9Z" stroke="#fff" strokeWidth="1.6"/>
          </svg>
        </button>

        {/* 8. Eclair (réponse rapide) */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L5 13h6l-1 9 8-11h-6l1-9Z" fill="#fff"/>
          </svg>
        </button>

        {/* 9. Lettre (fallback contact) */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="12" rx="1.5" stroke="#fff" strokeWidth="1.6"/>
            <path d="M3.5 7l8.5 6 8.5-6" stroke="#fff" strokeWidth="1.6"/>
          </svg>
        </button>

        {/* 10. Main/hello */}
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12V6a1 1 0 1 1 2 0v5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M11 11V5a1 1 0 1 1 2 0v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M14 12V6a1 1 0 1 1 2 0v7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M6 13c0 3.3 2.7 6 6 6 3 0 5.6-2.2 5.9-5.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </main>
  );
}


