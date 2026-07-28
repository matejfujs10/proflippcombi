import { useEffect } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export interface LandingConfig {
  lang: Language;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string;
}

const BASE = "https://kombi.proflipp.com";

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const SEOHead = ({ cfg }: { cfg: LandingConfig }) => {
  useEffect(() => {
    const url = `${BASE}${cfg.path}`;
    document.title = cfg.title;
    setMeta('meta[name="description"]', "content", cfg.description);
    setMeta('meta[name="keywords"]', "content", cfg.keywords);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", cfg.title);
    setMeta('meta[property="og:description"]', "content", cfg.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", cfg.title);
    setMeta('meta[name="twitter:description"]', "content", cfg.description);
    setMeta('meta[name="twitter:url"]', "content", url);

    // Page-level JSON-LD (WebPage)
    const scriptId = "landing-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: cfg.title,
      description: cfg.description,
      url,
      inLanguage: cfg.lang.toLowerCase(),
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#business` },
    });

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [cfg]);
  return null;
};

const LandingPage = ({ cfg }: { cfg: LandingConfig }) => {
  return (
    <LanguageProvider forceLang={cfg.lang}>
      <SEOHead cfg={cfg} />
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main>
          <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {cfg.h1}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {cfg.intro}
              </p>
            </div>
          </section>
          <Pricing />
          <WhyUs />
          <Gallery />
          <Testimonials />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
};

export default LandingPage;
