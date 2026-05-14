import { LanguageProvider } from "@/lib/LanguageContext";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmotionalSection from "@/components/EmotionalSection";
import UrgencySection from "@/components/UrgencySection";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import PsychologySection from "@/components/PsychologySection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import useDynamicSEO from "@/hooks/useDynamicSEO";

const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  useDynamicSEO();
  return <>{children}</>;
};

const Index = () => {
  return (
    <LanguageProvider>
      <SEOWrapper>
        <div className="min-h-screen bg-background">
          <TopBar />
          <Header />
          <main>
            <Hero />
            <EmotionalSection />
            <UrgencySection />
            <Pricing />
            <WhyUs />
            <PsychologySection />
            <Gallery />
            <Testimonials />
            <FAQSection />
            <FinalCTA />
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </SEOWrapper>
    </LanguageProvider>
  );
};

export default Index;
