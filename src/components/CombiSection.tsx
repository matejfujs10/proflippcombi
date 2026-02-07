import { Users, Calendar, Mountain, Music, Snowflake } from "lucide-react";
import combiDoors from "@/assets/combi-doors.jpg";
import combiSpeaker from "@/assets/combi-speaker.jpg";
import combiSportBelt from "@/assets/combi-sport-belt.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const CombiSection = () => {
  const { lang } = useLanguage();
  const t = translations.combi;

  const uses = [
    {
      icon: Users,
      title: t.uses.transport.title[lang],
      description: t.uses.transport.description[lang],
    },
    {
      icon: Music,
      title: t.uses.events.title[lang],
      description: t.uses.events.description[lang],
    },
    {
      icon: Snowflake,
      title: t.uses.skiing.title[lang],
      description: t.uses.skiing.description[lang],
    },
    {
      icon: Mountain,
      title: t.uses.trips.title[lang],
      description: t.uses.trips.description[lang],
    },
  ];

  return (
    <section id="combi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Snowflake size={20} />
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={combiDoors}
              alt="Najem kombija Proflipp Combi Slovenija in Avstrija"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-cta text-white rounded-xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <div>
                  <p className="text-xs opacity-90">{t.winterSeason[lang]}</p>
                  <p className="text-sm font-bold">{t.months[lang]}</p>
                </div>
              </div>
            </div>
            
            {/* Additional feature images */}
            <div className="flex gap-4 mt-8 justify-center">
              <div className="relative group">
                <img
                  src={combiSpeaker}
                  alt="Combi camper za potovanja po Sloveniji in Avstriji"
                  className="rounded-2xl shadow-lg w-32 h-40 sm:w-36 sm:h-44 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative group">
                <img
                  src={combiSportBelt}
                  alt="Najem kombija Proflipp Combi Slovenija in Avstrija"
                  className="rounded-2xl shadow-lg w-32 h-40 sm:w-36 sm:h-44 object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-navy/5 rounded-3xl p-8 mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.aboutTitle[lang]}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.aboutText[lang]}
              </p>
            </div>

            {/* Use Cases */}
            <h4 className="font-heading text-xl font-bold text-foreground mb-4">
              {t.perfectFor[lang]}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {uses.map((use, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-5 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center mb-3">
                    <use.icon className="text-white" size={20} />
                  </div>
                  <h5 className="font-heading font-bold text-foreground mb-1">
                    {use.title}
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    {use.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <p className="text-white/90 text-lg mb-4">
            {t.twoOptions[lang]}
          </p>
          <p className="text-accent font-semibold text-xl">
            {t.forPrice[lang]}{" "}
            <a
              href="mailto:info@proflipp.com"
              className="underline hover:no-underline"
            >
              info@proflipp.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CombiSection;
