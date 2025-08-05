const products = [
  { id: 1, name: 'Robe Deconstruite', price: '€145', image: '/produit-1.webp' },
  { id: 2, name: 'Top Corset', price: '€90', image: '/produit-2-new.webp' },
  { id: 3, name: 'Robe Vintage', price: '€120', image: '/produit-4-new.webp' },
  { id: 4, name: 'Top Bohème', price: '€75', image: '/produit-3-new.webp' },
];

export default function ProductGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-1">
      {products.map((product) => (
        <article key={product.id} className="group relative overflow-hidden shadow-lg">
          {/* Image */}
          <div className="aspect-[3/5] bg-gray-200 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Product name overlay */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white font-normal text-lg">
                {product.name}
              </h3>
              <p className="text-white text-sm font-normal">
                {product.price}
              </p>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-transparent text-white font-bold border border-white px-6 py-2 hover:bg-white/10 transition-colors">
              shop now
            </button>
          </div>
        </article>
      ))}
    </section>
  );
} 