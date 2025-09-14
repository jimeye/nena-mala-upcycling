import CategoryCard from '@/components/CategoryCard';

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
            <CategoryCard
              key={category.id}
              image={category.image}
              name={category.name}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 