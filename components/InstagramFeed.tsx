'use client';

import Link from 'next/link';

const IMAGES = [
  '/dress-nena-mala-puerto-escondido-paris-upcycling-fashion.webp',
  '/produit-1.webp',
  '/produit-2-new.webp',
  '/produit-3-new.webp',
  '/produit-4-new.webp',
  '/produit-2.webp',
  '/produit-3.webp',
  '/produit-4.webp',
  '/nena-mala-hero-static-acceuil.webp',
  '/logo-white.svg',
  '/logo-black.svg',
  '/og-image.svg',
];

const CAPTIONS = [
  'Upcycled dress drop',
  'Puerto Escondido sunset',
  'Studio details',
  'Limited edition',
  'Handcrafted textures',
  'Behind the scenes',
  'Strong feminine lines',
  'Ethereal lightness',
  'New arrivals',
];

const LIKES = ['1.2k', '980', '1.5k', '1.1k', '760', '890', '1.3k', '640', '1k'];

export default function InstagramFeed() {
  return (
    <section className="px-[15px] py-8 md:py-12">
      <div className="mb-3 flex flex-col items-center gap-1">
        <Link href="https://www.instagram.com/nenamala___17/" target="_blank" className="underline-offset-4 hover:underline">
          <h2 className="text-xl md:text-2xl font-bold text-center">Instagram</h2>
        </Link>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-1 md:gap-1 pb-2 snap-x snap-mandatory">
          {IMAGES.slice(0, 9).map((src, i) => (
            <div key={i} className="snap-start min-w-[33%] md:min-w-[25%]">
              <Link
                href="https://www.instagram.com/nenamala___17/"
                target="_blank"
                className="block aspect-square overflow-hidden bg-gray-100"
              >
                <img src={src} alt="Instagram preview" className="w-full h-full object-cover" />
              </Link>
              <Link href="https://www.instagram.com/nenamala___17/" target="_blank" className="block px-1 py-1">
                <div className="flex items-center gap-1 text-[11px] md:text-[12px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                    <path d="M12.76 20.68c-.47.35-1.05.35-1.52 0C6.4 16.94 3 13.86 3 10.2 3 7.72 4.9 6 7.13 6c1.37 0 2.7.66 3.37 1.9C11.54 6.66 12.87 6 14.24 6 16.5 6 18.4 7.72 18.4 10.2c0 3.66-3.4 6.74-5.64 10.48z"/>
                  </svg>
                  <span className="text-black">{LIKES[i % LIKES.length]}</span>
                  <span className="text-black/80 truncate">{CAPTIONS[i % CAPTIONS.length]}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


