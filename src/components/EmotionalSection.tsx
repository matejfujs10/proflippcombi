import combiNature from "@/assets/combi-nature.jpg";
import combiSunset from "@/assets/combi-sunset-1.jpg";

const EmotionalSection = () => (
  <section className="relative py-24 md:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <img
            src={combiNature}
            alt="Camper kombi v naravi ob jezeru"
            loading="lazy"
            className="rounded-3xl object-cover w-full h-72 md:h-96 col-span-2"
          />
          <img
            src={combiSunset}
            alt="Sončni zahod z odprtimi vrati kombija"
            loading="lazy"
            className="rounded-3xl object-cover w-full h-48 md:h-64"
          />
          <div className="rounded-3xl bg-gradient-card border border-border flex flex-col items-center justify-center p-6 text-center">
            <p className="font-display text-5xl md:text-6xl text-gradient leading-none">∞</p>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mt-3">
              Brez omejitev
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="section-eyebrow mb-4">Občutek svobode</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
            Ne potrebuješ hotela, urnikov ali rezervacij{" "}
            <span className="text-gradient">mesece vnaprej</span>.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>Vzemi svobodo v svoje roke.</p>
            <p>Ustavi se ob jezeru. Prespi v naravi. Odpri zadnja vrata in uživaj v razgledu.</p>
            <p>Pojdi na športni vikend, roadtrip ali pobeg iz rutine.</p>
            <p className="text-xl md:text-2xl font-heading font-bold text-foreground pt-4">
              Ta kombi ni samo prevoz.<br />
              <span className="text-gradient">Je občutek svobode.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EmotionalSection;
