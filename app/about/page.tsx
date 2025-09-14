import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="text-black">
      <Header fixed enableDynamicColors={false} baseColor="#000" />
      <div className="h-16 md:h-20" />
      <section className="px-[15px] py-8 md:py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Nena Mala</h1>
        <p className="text-lg leading-relaxed mb-6">
          Upcycling. Crafted. Conscious. Nena Mala is a studio dedicated to one-of-a-kind pieces,
          designed between Puerto Escondido, Paris and Ibiza. We transform vintage and forgotten
          garments into limited, expressive silhouettes.
        </p>
        <p className="leading-relaxed mb-6">
          Each drop is crafted in small quantities and often as unique pieces. Our approach embraces
          slow fashion: sourcing carefully, cutting waste, and privileging timeless shapes over trends.
          This page will include a detailed bio and story soon.
        </p>
      </section>
      <Footer />
    </main>
  );
}


