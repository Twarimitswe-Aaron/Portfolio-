import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <WhoWeAre />
        <Services />
        <PricingSection />
        <BlogSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
