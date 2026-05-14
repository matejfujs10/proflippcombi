import combiNature from "@/assets/combi-nature.jpg";
import combiSunset from "@/assets/combi-sunset-1.jpg";
import emotionalFeature from "@/assets/emotional-feature.jpg";
import vanlife1 from "@/assets/vanlife-1.jpg";
import vanlife2 from "@/assets/vanlife-2.jpg";
import vanlife3 from "@/assets/vanlife-3.jpg";

// Uniform cinematic vanlife grade applied to every image in this section
// for visual consistency (slightly warm, lifted shadows, refined contrast).
const grade =
  "rounded-3xl object-cover w-full transition-transform duration-700 hover:scale-[1.02] " +
  "[filter:contrast(1.08)_saturate(1.1)_brightness(1.02)_sepia(0.06)]";

const EmotionalSection = () => (
  <section className="relative py-24 md:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo collage — 6 images, no empty tiles */}
        <div className="order-2 lg:order-1 grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[560px] md:h-[680px]">
          <img
            src={combiNature}
            alt="Kombi camper v naravi ob jezeru"
            loading="lazy"
            className={`${grade} col-span-4 row-span-3 h-full`}
          />
          <img
            src={vanlife1}
            alt="Kombi ob morju s kolesom — vanlife avantura"
            loading="lazy"
            className={`${grade} col-span-2 row-span-2 h-full`}
          />
          <img
            src={vanlife3}
            alt="Sprednji pogled kombija v gozdu"
            loading="lazy"
            className={`${grade} col-span-2 row-span-2 h-full`}
          />
          <img
            src={combiSunset}
            alt="Sončni zahod z odprtimi vrati kombija"
            loading="lazy"
            className={`${grade} col-span-3 row-span-3 h-full`}
          />
          <img
            src={vanlife2}
            alt="Kombi camper na travniku ob gozdu"
            loading="lazy"
            className={`${grade} col-span-3 row-span-2 h-full`}
          />
          <img
            src={emotionalFeature}
            alt="Kombi camper na zelenem travniku"
            loading="lazy"
            className={`${grade} col-span-6 row-span-1 h-full`}
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="section-eyebrow mb-4">Občutek vanlife</span>
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
