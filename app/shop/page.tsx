import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';

export const metadata = {
  title: 'Shop | Nena Mala',
  description: 'Explore our categories: Dress, Top, Skirt, Denim, Pants, Two-piece.'
};

const categories = [
  { key: 'dress', label: 'Dress', image: '/dress-nena-mala-puerto-escondido-paris-upcycling-fashion.webp' },
  { key: 'top', label: 'Top', image: '/produit-2-new.webp' },
  { key: 'denim', label: 'Denim', image: '/produit-4-new.webp' },
  { key: 'pants', label: 'Pants', image: '/produit-2.webp' },
  { key: 'skirt', label: 'Skirt', image: '/produit-3-new.webp' },
  { key: 'two-piece', label: 'Two-piece', image: '/produit-3.webp' },
];

export default function ShopPage() {
  return (
    <main className="text-black">
      <Header fixed={true} enableDynamicColors={true} baseColor="#da3832" />
      <div className="h-10 md:h-12"></div>

      {/* Categories grid */}
      <section className="px-[15px] py-8 md:py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-1">
          {categories.map((c) => (
            <Link key={c.key} href={`/shop/${c.key}`} className="group block overflow-hidden">
              <img src={c.image} alt={c.label} className="w-full aspect-[3/4] object-cover" />
              <div className="mt-2 text-center">
                <span className="text-[#da3832] text-[22px] md:text-[27px] font-bold">{c.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <YouMayAlsoLike color="#da3832" />

      <Footer color="#da3832" />
    </main>
  );
}

