import { Check, Moon, Gamepad2 } from "lucide-react";
import interiorBed from "@/assets/interior-bed.jpg";
import interiorSink from "@/assets/interior-sink.jpg";
import interiorFull from "@/assets/interior-full.jpg";
import combiSide from "@/assets/combi-side.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const KamperSection = () => {
  const { lang } = useLanguage();
  const t = translations.kamper;

  const equipment = [
    t.equipment.sink[lang],
    t.equipment.fridge[lang],
    t.equipment.table[lang],
    t.equipment.power[lang],
  ];

  const privacy = [
    t.privacy.windshield[lang],
    t.privacy.blackout[lang],
    t.privacy.discreet[lang],
    t.privacy.protection[lang],
  ];

  const sports = [
    t.sports.ball[lang],
    t.sports.badminton[lang],
    t.sports.rackets[lang],
  ];

  return (
    <section id="kamper" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider">
            {t.badge[lang]}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            {t.title[lang]} <span className="text-gradient">{t.titleHighlight[lang]}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={combiSide}
              alt="Proflipp Kombi zunanjost"
              className="col-span-2 rounded-2xl shadow-lg object-cover w-full h-64"
            />
            <img
              src={interiorBed}
              alt="Notranjost - postelja"
              className="rounded-2xl shadow-lg object-cover w-full h-48"
            />
            <img
              src={interiorSink}
              alt="Notranjost - umivalnik"
              className="rounded-2xl shadow-lg object-cover w-full h-48"
            />
          </div>

          {/* Equipment List */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              {t.fullyEquipped[lang]}
            </h3>
            <div className="space-y-4 mb-8">
              {equipment.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center flex-shrink-0">
                    <Check size={18} className="text-white" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-lg text-foreground mb-2">
                {t.idealFor2[lang]}
              </p>
              <p className="text-lg text-foreground mb-2">
                {t.forAthletes[lang]}
              </p>
              <p className="text-lg text-foreground mb-2">
                {t.mobileOffice[lang]}
              </p>
              <p className="text-lg text-foreground">
                {t.lowFuel[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Sports Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Privacy */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center">
                <Moon className="text-white" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t.privacyTitle[lang]}
              </h3>
            </div>
            <div className="space-y-3">
              {privacy.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    className="text-primary flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Equipment */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-cta flex items-center justify-center">
                <Gamepad2 className="text-white" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t.sportsTitle[lang]}
              </h3>
            </div>
            <div className="space-y-3 mb-4">
              {sports.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    className="text-primary flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-accent font-semibold">
              {t.activeFun[lang]}
            </p>
          </div>
        </div>

        {/* Additional Image */}
        <div className="mt-12">
          <img
            src={interiorFull}
            alt="Celotna notranjost kombija"
            className="w-full h-80 object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default KamperSection;
