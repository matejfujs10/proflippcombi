import { MapPin, Users, Bike, Laptop, Fuel, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const WhyUs = () => {
  const { lang } = useLanguage();
  const t = translations.whyUs;

  const features = [
    {
      icon: MapPin,
      title: t.features.parkAnywhere.title[lang],
      description: t.features.parkAnywhere.description[lang],
    },
    {
      icon: Users,
      title: t.features.idealForCouples.title[lang],
      description: t.features.idealForCouples.description[lang],
    },
    {
      icon: Bike,
      title: t.features.forAthletes.title[lang],
      description: t.features.forAthletes.description[lang],
    },
    {
      icon: Laptop,
      title: t.features.mobileOffice.title[lang],
      description: t.features.mobileOffice.description[lang],
    },
    {
      icon: Fuel,
      title: t.features.lowConsumption.title[lang],
      description: t.features.lowConsumption.description[lang],
    },
    {
      icon: Shield,
      title: t.features.privateDiscrete.title[lang],
      description: t.features.privateDiscrete.description[lang],
    },
  ];

  const idealFor = [
    t.idealForItems.couples[lang],
    t.idealForItems.athletes[lang],
    t.idealForItems.travelers[lang],
    t.idealForItems.nomads[lang],
    t.idealForItems.weekends[lang],
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header - H2 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.title[lang]} <span className="text-gradient">{t.titleBrand[lang]}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Ideal For Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
            {t.idealFor[lang]}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {idealFor.map((item, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/10 rounded-full text-white font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/90 font-medium">
            <span>{t.noHotels[lang]}</span>
            <span>{t.noCamps[lang]}</span>
            <span>{t.noLimits[lang]}</span>
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {t.simplicity[lang]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
