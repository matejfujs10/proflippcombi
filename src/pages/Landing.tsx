import { useEffect } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";
import { applyPageSEO, breadcrumb, SITE } from "@/lib/pageSeo";
import { landingGroups } from "@/lib/landingConfigs";
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
  /** shared key for language-equivalent pages (hreflang cluster) */
  group?: string;
  areaServed?: object[];
}

const SEOHead = ({ cfg }: { cfg: LandingConfig }) => {
  useEffect(() => {
    const url = `${SITE}${cfg.path}`;
    const group = cfg.group ? landingGroups[cfg.group] : undefined;
    return applyPageSEO({
      path: cfg.path,
      title: cfg.title,
      description: cfg.description,
      keywords: cfg.keywords,
      alternates: group ?? { [cfg.lang.toLowerCase()]: cfg.path },
      jsonLd: [
        {
          "@type": "WebPage",
          name: cfg.title,
          description: cfg.description,
          url,
          inLanguage: cfg.lang.toLowerCase(),
          isPartOf: { "@id": `${SITE}/#website` },
          about: { "@id": `${SITE}/#business` },
        },
        {
          "@type": "Service",
          name: cfg.h1,
          description: cfg.description,
          serviceType: "Campervan / van rental",
          url,
          provider: { "@id": `${SITE}/#business` },
          areaServed: cfg.areaServed ?? [{ "@type": "Country", name: "Slovenia" }, { "@type": "AdministrativeArea", name: "Steiermark" }],
          offers: { "@type": "AggregateOffer", lowPrice: "65", highPrice: "75", priceCurrency: "EUR", url },
        },
        breadcrumb([{ name: "Proflipp Kombi", path: "/" }, { name: cfg.h1, path: cfg.path }]),
      ],
    });
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
