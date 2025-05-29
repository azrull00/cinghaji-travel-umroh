import Hero from '@/components/Hero';
import About from '@/components/About';
import HajjPackages from '@/components/HajjPackages';
import UmrohPackages from '@/components/UmrohPackages';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Map from '@/components/Map';


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HajjPackages />
      <UmrohPackages />
      <Schedule />
      <Gallery />
      <Map />
      <Footer />
    </main>
  );
}
