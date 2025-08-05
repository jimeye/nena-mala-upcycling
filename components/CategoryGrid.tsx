export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      name: 'Bestsellers',
      image: '/bestsellers.jpg',
      description: 'Pink sequined dress with cutout'
    },
    {
      id: 2,
      name: 'Tops',
      image: '/tops.jpg',
      description: 'Bronze corset top with embellishments'
    },
    {
      id: 3,
      name: 'Swim',
      image: '/swim.jpg',
      description: 'Metallic green bikini'
    },
    {
      id: 4,
      name: 'Dresses',
      image: '/dresses.jpg',
      description: 'Yellow backless mini dress'
    }
  ];

  return (
    <section className="pt-2 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden shadow-lg">
              {/* Image placeholder - vous devrez ajouter les vraies images */}
              <div className="aspect-[3/4] bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Category name overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">
                    {category.name}
                  </h3>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 