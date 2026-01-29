import { Users, Calendar, Mountain, Music, Snowflake } from "lucide-react";
import combiDoors from "@/assets/combi-doors.jpg";

const uses = [
  {
    icon: Users,
    title: "Prevoz oseb",
    description: "Do 6 potnikov udobno in varno.",
  },
  {
    icon: Music,
    title: "Prireditve",
    description: "Koncerte, festivale, športne dogodke.",
  },
  {
    icon: Snowflake,
    title: "Smučanje",
    description: "Prostor za vso zimsko opremo.",
  },
  {
    icon: Mountain,
    title: "Izleti",
    description: "Skupinska potovanja in vikend pobegi.",
  },
];

const CombiSection = () => {
  return (
    <section id="combi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Snowflake size={20} />
            Zimska sezona (november – maj)
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            KOMBI <span className="text-gradient">5+1</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            V zimskem času je naš kombi pretvorjen v udoben 5+1 sedeži prevoz za
            skupinske izlete, prireditve in zimske avanture.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={combiDoors}
              alt="Kombi 5+1 s sedeži"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-cta text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <Calendar size={32} />
                <div>
                  <p className="text-sm opacity-90">Zimska sezona</p>
                  <p className="text-xl font-bold">Nov – Maj</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-navy/5 rounded-3xl p-8 mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                🚐 O kombiju 5+1
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                V zimskem obdobju, predvidoma od novembra do maja, je naš kombi
                opremljen s <strong>6 udobnimi sedeži</strong> (5+1
                konfiguracija). Idealen za skupinske izlete na smučišča, odhode
                na prireditve, koncerte ali enostavno udoben prevoz za večjo
                skupino prijateljev ali družino.
              </p>
            </div>

            {/* Use Cases */}
            <h4 className="font-heading text-xl font-bold text-foreground mb-4">
              Popoln za:
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
            💡 <strong>Isti kombi, dve možnosti!</strong> Poleti kamper za
            avanture, pozimi udoben prevoz za skupino.
          </p>
          <p className="text-accent font-semibold text-xl">
            Za točno ceno in razpoložljivost nam pišite na{" "}
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
