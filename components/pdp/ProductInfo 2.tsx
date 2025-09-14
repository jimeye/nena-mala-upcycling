export default function ProductInfo({
  title,
  price,
  colors,
  sizes
}: {
  title: string;
  price: string;
  colors: string[];
  sizes: string[];
}) {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-medium mb-2">{title}</h1>
      <div className="text-base mb-6">{price}</div>

      <div className="mb-6">
        <div className="text-sm mb-2">Color:</div>
        <div className="flex gap-3">
          {colors.map((c, i) => (
            <span key={i} className="w-8 h-8 rounded-full border" style={{ backgroundColor: c }}></span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm mb-2">Size:</div>
        <div className="flex flex-wrap gap-3">
          {sizes.map((s, i) => (
            <button key={i} className="px-3 py-2 border text-sm hover:bg-black hover:text-white transition-colors">{s}</button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition-colors">AJOUTER AU PANIER</button>
        <button className="px-6 py-3 border hover:bg-gray-50 transition-colors">AJOUTER À VOS COUPS DE COEUR</button>
      </div>
    </div>
  );
}
