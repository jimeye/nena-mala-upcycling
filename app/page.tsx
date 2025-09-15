import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

export default function HomePage() {
  return (
    <>
      <Header brandText="Nena Mala" />
      
      {/* Hero Slider */}
      <HeroSlider
        heightClass="h-[85vh] md:h-[95vh]"
        overlayClass="bg-black/10"
        intervalMs={5000}
        autoPlay
        showCounter
      />
      
      {/* Products après le slider */}
      <div className="pt-1 overflow-x-hidden">
        <main>
          <ProductGrid />
        </main>
      </div>
      
      {/* Footer après les produits */}
      <Footer />
      
      {/* Livechat avec étoile en bas à gauche */}
      <div className="fixed bottom-6 left-[15px] z-50">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
          <div className="text-black text-lg">★</div>
        </button>
      </div>
    </>
  );
} 