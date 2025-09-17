import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const HeroTransitionDemo = dynamic(() => import('@/components/HeroTransitionDemo'), { ssr: false });

export const metadata = {
  title: 'Test Hero Transitions — Nena Mala',
};

export default function TestHeroTransitionsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header brandText="Nena Mala" />
      <main className="space-y-12 px-[15px] md:px-6 py-6 md:py-10">
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Elegant — cross‑fade + Ken Burns</h2>
          <HeroTransitionDemo variant="elegant" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — rideau oblique</h2>
          <HeroTransitionDemo variant="curtain" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — de gauche</h2>
          <HeroTransitionDemo variant="curtain-left" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — de droite</h2>
          <HeroTransitionDemo variant="curtain-right" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — du haut</h2>
          <HeroTransitionDemo variant="curtain-top" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — du bas</h2>
          <HeroTransitionDemo variant="curtain-bottom" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Curtain — split centrale</h2>
          <HeroTransitionDemo variant="curtain-split" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Photo Curtain — de gauche</h2>
          <HeroTransitionDemo variant="photo-curtain-left" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Photo Curtain — de droite</h2>
          <HeroTransitionDemo variant="photo-curtain-right" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Photo Curtain — du haut</h2>
          <HeroTransitionDemo variant="photo-curtain-top" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Photo Curtain — du bas</h2>
          <HeroTransitionDemo variant="photo-curtain-bottom" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Photo Curtain — split</h2>
          <HeroTransitionDemo variant="photo-curtain-split" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Combo — Photo split / Photo bas (alterné)</h2>
          <HeroTransitionDemo variant="combo-photo-split-bottom" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Combo — Curtain haut / Photo droite (alterné)</h2>
          <HeroTransitionDemo variant="combo-top-photo-right" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Wipe + blur</h2>
          <HeroTransitionDemo variant="wipe-blur" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Parallax pan (subtil)</h2>
          <HeroTransitionDemo variant="parallax" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Flash duotone</h2>
          <HeroTransitionDemo variant="duotone" />
        </section>
        <section>
          <h2 className="text-xl md:text-2xl mb-3">Révélation typographique</h2>
          <HeroTransitionDemo variant="typo" />
        </section>
      </main>
      <Footer />
    </div>
  );
}


