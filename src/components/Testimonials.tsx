import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Testimonials = () => {
  const { lang } = useLanguage();
  const reviews = [
    { name: "Matej K.", text: t("testimX.r1", lang) },
    { name: "Ana P.", text: t("testimX.r2", lang) },
    { name: "Luka R.", text: t("testimX.r3", lang) },
    { name: "Nina B.", text: t("testimX.r4", lang) },
    { name: "Tim S.", text: t("testimX.r5", lang) },
    { name: "Eva M.", text: t("testimX.r6", lang) },
  ];

  return (
    <section id="mnenja" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-eyebrow">{t("testimX.eyebrow", lang)}</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t("testimX.h1", lang)} <span className="text-gradient">{t("testimX.h2", lang)}</span>
          </h2>
          <p className="text-muted-foreground mt-4">{t("testimX.sub", lang)}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="card-feature relative">
              <Quote className="absolute top-5 right-5 text-accent/20" size={40} />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Slovenija</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
