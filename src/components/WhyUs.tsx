import { MapPin, Users, Bike, Laptop, Fuel, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Parkiraš kjerkoli",
    description: "Brez kampov, brez komplikacij. Popolna svoboda.",
  },
  {
    icon: Users,
    title: "Idealno za pare",
    description: "Idealno za 2 osebi + dovolj prostora za opremo.",
  },
  {
    icon: Bike,
    title: "Za športnike",
    description: "Prostor za kolo, smuči ali športno opremo.",
  },
  {
    icon: Laptop,
    title: "Mobilna pisarna",
    description: "Delaj z razgledom – digitalni nomadi dobrodošli!",
  },
  {
    icon: Fuel,
    title: "Majhna poraba",
    description: "Potuj daleč, porabi malo – ekonomična vožnja.",
  },
  {
    icon: Shield,
    title: "Diskretno & zasebno",
    description: "Popolna zatemnitev stekel za zasebnost.",
  },
];

const idealFor = [
  "pare",
  "športnike",
  "aktivne popotnike",
  "digitalne nomade",
  "vikend pobege",
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🌍 Zakaj <span className="text-gradient">PROFLIPP KOMBI</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Iščeš pobeg iz vsakdanjika? PROFLIPP KOMBI ni samo prevoz – je tvoja
            baza za avanture, šport, naravo in svobodo.
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
            Kompakten, športen in diskreten kamper je idealen za:
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
            <span>Brez hotelov.</span>
            <span>Brez kampov.</span>
            <span>Brez omejitev.</span>
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            🔑 <span className="text-gradient">Simplicity is the key</span> –
            preprosto, praktično, svobodno
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
