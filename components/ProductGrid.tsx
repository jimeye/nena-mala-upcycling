import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1, name: 'Robe Deconstruite', price: '€145', image: '/produit-1.webp', slug: 'robe-deconstruite' },
  { id: 2, name: 'Top Corset', price: '€90', image: '/produit-2-new.webp', slug: 'top-corset' },
  { id: 3, name: 'Robe Vintage', price: '€120', image: '/produit-4-new.webp', slug: 'robe-vintage' },
  { id: 4, name: 'Top Bohème', price: '€75', image: '/produit-3-new.webp', slug: 'top-boheme' },
];

export default function ProductGrid() {
  return (
    <section className="flex md:grid md:grid-cols-4 gap-2 md:gap-1 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4">
      {products.map((product) => (
        <div key={product.id} className="shrink-0 snap-start w-[40vw] md:w-auto">
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            href="/shop"
          />
        </div>
      ))}
    </section>
  );
}