import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductGallery from '@/components/pdp/ProductGallery';
import ProductInfo from '@/components/pdp/ProductInfo';
import ProductAccordion from '@/components/pdp/ProductAccordion';
import ProductHeroCarousel from '@/components/pdp/ProductHeroCarousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product not found - Nena Mala' };
  return {
    title: `${product.title} | Nena Mala`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Nena Mala`,
      description: product.description,
      images: product.images?.slice(0, 1).map((src) => ({ url: src }))
    }
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  return (
    <div>
      {/* Header fixe comme sur la home, couleur noire */}
      <Header brandText="Nena Mala" fixed enableDynamicColors={false} baseColor="#000000" />

      {/* Section produit (avant le hero) */}
      <div className="py-[5px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ProductGallery images={product.images} />
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-xl mx-auto">
            <ProductInfo
              slug={product.slug}
              title={product.title}
              price={product.price}
              image={product.images[0]}
              colors={product.colors}
              sizes={product.sizes}
            />
          </div>
          <div className="mt-8 w-full max-w-xl mx-auto">
            <ProductAccordion title="Description" content={product.description} />
            <ProductAccordion title="Delivery" content="Delivery in 3–5 business days." />
            <ProductAccordion title="Returns" content="Returns accepted within 14 days (unused, tags attached)." />
          </div>
        </div>
      </div>

      {/* Hero slider inter‑produits (après le produit) */}
      <div className="py-8">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-6">You May Also Like</h2>
        <ProductHeroCarousel currentSlug={params.slug} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

