import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';

export const metadata = {
  title: 'Shop | Nena Mala',
  description: 'Explore our categories: Dress, Top, Skirt, Denim, Pants, 2-piece.'
};

const categories = [
  { key: 'dress', label: 'Dress', image: '/dress-nena-mala-puerto-escondido-paris-upcycling-fashion.webp' },
  { key: 'top', label: 'Top', image: '/produit-2-new.webp' },
  { key: 'denim', label: 'Denim', image: '/produit-4-new.webp' },
  { key: 'pants', label: 'Pants', image: '/produit-2.webp' },
  { key: 'skirt', label: 'Skirt', image: '/produit-3-new.webp' },
  { key: 'two-piece', label: '2-piece', image: '/produit-3.webp' },
];

export default function ShopPage() {
  return (
    <main className="text-black">
      <Header fixed={true} enableDynamicColors={true} baseColor="#da3832" />
      <div className="h-10 md:h-14 lg:h-6"></div>

      {/* Categories grid */}
      <section className="px-[15px] py-8 md:py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-1">
          {categories.map((c, i) => (
            <Link key={c.key} href={`/shop/${c.key}`} className="group block overflow-hidden">
              <div className="relative w-full aspect-[3/4] bg-gray-200">
                <Image src={c.image} alt={c.label} fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" unoptimized priority={i===0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-transparent text-[#da3832] font-bold border border-[#da3832] text-xs md:text-base px-4 py-1.5 md:px-6 md:py-2" style={{ transform: 'scale(0.85)' }}>shop now</span>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[#da3832] text-[18px] md:text-[22px] font-bold">{c.label}</span>
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

