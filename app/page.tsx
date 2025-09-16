import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import InstagramFeed from '@/components/InstagramFeed';
import VideoPlayer from '@/components/VideoPlayer';

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

      {/* Petit espace entre produits et vidéo */}
      <div className="pt-1"></div>
      
      {/* Vidéo process avant Instagram */}
      <section className="px-[15px]">
        <VideoPlayer
          poster="/video/nena-mala-process-poster.jpg"
          sources={[
            { src: '/video/nena-mala-process-720p.webm', type: 'video/webm', media: '(max-width: 768px)' },
            { src: '/video/nena-mala-process-720p.mp4', type: 'video/mp4', media: '(max-width: 768px)' },
            { src: '/video/nena-mala-process-1080p.webm', type: 'video/webm' },
            { src: '/video/nena-mala-process-1080p.mp4', type: 'video/mp4' },
          ]}
        />
      </section>

      {/* Petit espace comme entre hero et cadres */}
      <div className="pt-1"></div>

      {/* Footer après les produits */}
      <InstagramFeed />
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