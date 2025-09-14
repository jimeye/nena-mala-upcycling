import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="text-black">
      <Header fixed enableDynamicColors={false} baseColor="#000" />
      <div className="h-16 md:h-20" />
      <section className="px-[15px] py-8 md:py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>
        <p className="mb-6">Send us a message. We’ll get back to you within 24–48 hours.</p>
        <form className="space-y-4">
          <input className="w-full border px-3 py-2" type="text" placeholder="Full name" />
          <input className="w-full border px-3 py-2" type="email" placeholder="Email" />
          <textarea className="w-full border px-3 py-2 h-32" placeholder="Your message" />
          <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors" type="submit">Send</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}


