import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AllItemsGrid from '@/components/AllItemsGrid';

export const metadata = {
  title: 'All Items | Nena Mala',
  description: 'Browse all upcycled pieces across all categories.'
};

export default function AllItemsPage() {
  return (
    <main className="text-black">
      <Header fixed={true} enableDynamicColors={false} baseColor="#000000" />
      <div className="h-10 md:h-14 lg:h-6"></div>
      <AllItemsGrid />
      <Footer />
    </main>
  );
}


