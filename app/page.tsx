import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import SingleColumnSection from '@/components/SingleColumnSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <SingleColumnSection />
      <AboutSection />
      <Footer />
    </>
  );
}
