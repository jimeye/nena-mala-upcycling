import Link from 'next/link';
import Price from '../../../components/Price';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import YouMayAlsoLike from '../../../components/YouMayAlsoLike';
import { getAllCategories, getProductsByCategory, type Product } from '../../../lib/products';

type Params = { params: { category: Product['category'] } };

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c }));
}

export function generateMetadata({ params }: Params) {
  const label = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return { title: `${label} | Nena Mala` };
}

export default function CategoryPage({ params }: Params) {
  const items = getProductsByCategory(params.category);
  const label = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return (
    <main className="text-black">
      <Header fixed={true} enableDynamicColors={false} baseColor="#000000" />
      <div className="h-16 md:h-20"></div>

      {/* Grid */}
      <section className="px-[15px] py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-1">
          {items.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="block group relative overflow-hidden">
              <img src={p.images[0]} alt={p.title} className="w-full aspect-[3/4] object-cover" />
              <div className="mt-2">
                <h3 className="text-sm md:text-base">{p.title}</h3>
                <Price
                  cents={Math.round(parseFloat(p.price.replace(/[^0-9.,]/g, '').replace(',', '.')) * 100) || 0}
                  className="text-xs md:text-sm"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <YouMayAlsoLike />

      <Footer />
    </main>
  );
}



