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
          {IMAGES.slice(0, 12).map((src, i) => (
            <Link
              key={i}
              href="https://www.instagram.com/nenamala___17/"
              target="_blank"
              className="snap-start block min-w-[33%] md:min-w-[25%] aspect-square overflow-hidden bg-gray-100"
            >
              <img src={src} alt="Instagram preview" className="w-full h-full object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


