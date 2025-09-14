type CategoryCardProps = {
  image?: string;
  name: string;
  description?: string;
  href?: string;
};

export default function CategoryCard({ image, name, description, href }: CategoryCardProps) {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? <a href={href}>{children}</a> : <>{children}</>;

  return (
    <div className="group relative overflow-hidden shadow-lg">
      <Wrapper>
        {/* Image placeholder / image */}
        <div className="aspect-[3/4] bg-gray-200 relative">
          {image && (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {/* Category name overlay */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            {description && (
              <p className="text-white/80 text-xs mt-1 max-w-[160px]">{description}</p>
            )}
          </div>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>
      </Wrapper>
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}

