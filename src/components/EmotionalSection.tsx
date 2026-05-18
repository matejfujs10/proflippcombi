import combiNature from "@/assets/combi-nature.jpg";
import combiSunset from "@/assets/combi-sunset-1.jpg";
import emotionalFeature from "@/assets/emotional-feature.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const EmotionalSection = () => {
  const { lang } = useLanguage();
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img src={combiNature} alt="" loading="lazy" className="rounded-3xl object-cover w-full h-72 md:h-96 col-span-2" />
            <img src={combiSunset} alt="" loading="lazy" className="rounded-3xl object-cover w-full h-48 md:h-64" />
            <img src={emotionalFeature} alt="" loading="lazy" className="rounded-3xl object-cover w-full h-48 md:h-64" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-eyebrow mb-4">{t("emotional.eyebrow", lang)}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
              {t("emotional.h1", lang)} <span className="text-gradient">{t("emotional.h2", lang)}</span>.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>{t("emotional.p1", lang)}</p>
              <p>{t("emotional.p2", lang)}</p>
              <p>{t("emotional.p3", lang)}</p>
              <p className="text-xl md:text-2xl font-heading font-bold text-foreground pt-4">
                {t("emotional.p4a", lang)}<br />
                <span className="text-gradient">{t("emotional.p4b", lang)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
