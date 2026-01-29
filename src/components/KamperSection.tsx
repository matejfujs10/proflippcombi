import { Check, Moon, Gamepad2 } from "lucide-react";
import interiorBed from "@/assets/interior-bed.jpg";
import interiorSink from "@/assets/interior-sink.jpg";
import interiorFull from "@/assets/interior-full.jpg";
import combiSide from "@/assets/combi-side.jpg";

const equipment = [
  "Umivalnik",
  "Hladilnik",
  "Miza",
  "12V električni priključki",
];

const privacy = [
  "Prednje pregrinjalo za vetrobransko steklo",
  "Vsa stekla je možno popolnoma zatemniti z roloji",
  "Diskretno spanje kjerkoli",
  "Zaščita pred soncem in radovednimi pogledi",
];

const sports = ["Žoga", "Badminton", "Loparji"];

const KamperSection = () => {
  return (
    <section id="kamper" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider">
            🚐 Rent – Poletna sezona
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            KOMBI <span className="text-gradient">KAMPER</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kaj dobiš s PROFLIPP KOMBIJEM? Popolnoma opremljen kamper za
            nepozabne avanture!
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
              ✅ Popolnoma opremljen interier
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
                ✅ Idealno za <strong>2 osebi</strong> + dovolj prostora za kolo
                ali športno opremo
              </p>
              <p className="text-lg text-foreground mb-2">
                ✅ Popoln za <strong>športnike</strong> – kolesari, raziskuj,
                prespi v naravi
              </p>
              <p className="text-lg text-foreground mb-2">
                ✅ <strong>Mobilna pisarna</strong> – delaj z razgledom
              </p>
              <p className="text-lg text-foreground">
                ✅ <strong>Majhna poraba goriva</strong> – potuj daleč, porabi
                malo
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
                🌙 Zasebnost & Udobje
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
                🎾 Brezplačno vključeno
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
              👉 Za aktivno zabavo na poti
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
