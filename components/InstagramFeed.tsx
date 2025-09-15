'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Fallback local images (used if API is empty)
const IMAGES_FALLBACK = [
  '/dress-nena-mala-puerto-escondido-paris-upcycling-fashion.webp',
  '/produit-1.webp',
  '/produit-2-new.webp',
  '/produit-3-new.webp',
  '/produit-4-new.webp',
  '/produit-2.webp',
  '/produit-3.webp',
  '/produit-4.webp',
  '/nena-mala-hero-static-acceuil.webp',
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

type Post = { mediaUrl: string; permalink: string; caption?: string };

function useInstagram(): { posts: Post[] } {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/instagram');
        const data = await res.json();
        if (!cancelled) {
          const items = Array.isArray(data?.items) ? data.items.slice(0, 9) : [];
          if (items.length > 0) {
            setPosts(items);
          } else {
            // Build fallback posts from local images
            const fallback = IMAGES_FALLBACK.slice(0, 9).map((src) => ({
              mediaUrl: src,
              permalink: 'https://www.instagram.com/nenamala___17/',
              caption: '',
            }));
            setPosts(fallback);
          }
        }
      } catch {
        const fallback = IMAGES_FALLBACK.slice(0, 9).map((src) => ({
          mediaUrl: src,
          permalink: 'https://www.instagram.com/nenamala___17/',
          caption: '',
        }));
        setPosts(fallback);
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return { posts };
}

export default function InstagramFeed() {
  const { posts } = useInstagram();
  const widgetUrl = process.env.NEXT_PUBLIC_IG_WIDGET_URL;
  return (
    <section className="px-[15px]">
      <div className="mb-0 flex flex-col items-center gap-1">
        <Link href="https://www.instagram.com/nenamala___17/" target="_blank" className="underline-offset-4 hover:underline">
          <h2 className="text-xl md:text-2xl font-bold text-center">Instagram</h2>
        </Link>
      </div>
      <div className="pt-1"></div>
      {widgetUrl ? (
        <div className="w-full flex justify-center">
          <iframe
            src={widgetUrl}
            scrolling="no"
            allowTransparency
            className="w-full h-[520px] md:h-[600px] border-0 overflow-hidden"
          />
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="flex gap-1 md:gap-1 pb-2 snap-x snap-mandatory">
            {posts.map((p, i) => (
              <div key={i} className="snap-start min-w-[33%] md:min-w-[25%]">
                <Link
                  href={p.permalink}
                  target="_blank"
                  className="relative block aspect-square overflow-hidden bg-gray-100"
                >
                  <img src={p.mediaUrl} alt="Instagram preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center gap-2 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                      <path d="M12.76 20.68c-.47.35-1.05.35-1.52 0C6.4 16.94 3 13.86 3 10.2 3 7.72 4.9 6 7.13 6c1.37 0 2.7.66 3.37 1.9C11.54 6.66 12.87 6 14.24 6 16.5 6 18.4 7.72 18.4 10.2c0 3.66-3.4 6.74-5.64 10.48z"/>
                    </svg>
                    <span className="text-[11px] md:text-[12px] opacity-95">{LIKES[i % LIKES.length]}</span>
                    <span className="text-[11px] md:text-[12px] opacity-95 truncate">{p.caption || CAPTIONS[i % CAPTIONS.length]}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}


