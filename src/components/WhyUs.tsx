import { Bike, Moon, Wallet, Compass, ParkingSquare, Laptop, Map, Sofa, Sun, Activity } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const WhyUs = () => {
  const { lang } = useLanguage();
  const features = [
    { icon: Bike, key: "sport" },
    { icon: Moon, key: "sleep" },
    { icon: Wallet, key: "hotels" },
    { icon: Compass, key: "free" },
    { icon: ParkingSquare, key: "park" },
    { icon: Laptop, key: "office" },
    { icon: Map, key: "road" },
    { icon: Sofa, key: "practical" },
    { icon: Sun, key: "weekend" },
    { icon: Activity, key: "active" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-eyebrow">{t("whyx.eyebrow", lang)}</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t("whyx.h1", lang)} <span className="text-gradient">{t("whyx.h2", lang)}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="card-feature group text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-all">
                <f.icon size={22} className="text-accent group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1.5 leading-tight">
                {t(`whyx.f.${f.key}.t`, lang)}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug">{t(`whyx.f.${f.key}.x`, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
