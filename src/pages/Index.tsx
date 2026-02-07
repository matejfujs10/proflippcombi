import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import KamperSection from "@/components/KamperSection";
import CombiSection from "@/components/CombiSection";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyUs />
          <KamperSection />
          <CombiSection />
          <Pricing />
          <FAQSection />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
