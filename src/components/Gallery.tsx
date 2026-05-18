import combiSide from "@/assets/combi-side.jpg";
import combiBack from "@/assets/combi-back.jpg";
import combiFront from "@/assets/combi-front.jpg";
import combiNature from "@/assets/combi-nature.jpg";
import combiSunset from "@/assets/combi-sunset-1.jpg";
import combiDoors from "@/assets/combi-doors.jpg";
import combiSpeaker from "@/assets/combi-speaker.jpg";
import combiSportBelt from "@/assets/combi-sport-belt.jpg";
import interiorBed from "@/assets/interior-bed.jpg";
import interiorFull from "@/assets/interior-full.jpg";
import interiorSink from "@/assets/interior-sink.jpg";
import galleryFrontGrass from "@/assets/gallery-front-grass.jpg";
import gallerySeaBike from "@/assets/gallery-sea-bike.jpg";
import galleryBackGrass from "@/assets/gallery-back-grass.jpg";

import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Gallery = () => {
  const { lang } = useLanguage();
  const items = [
    { src: combiSunset, alt: "Sončni zahod ob kombiju", span: "row-span-2" },
    { src: interiorBed, alt: "Postelja v kombi kamperju" },
    { src: gallerySeaBike, alt: "Kombi ob morju s kolesom", span: "col-span-2" },
    { src: combiNature, alt: "Kombi v naravi" },
    { src: combiDoors, alt: "Odprta zadnja vrata kombija", span: "col-span-2" },
    { src: galleryFrontGrass, alt: "Kombi sprednji pogled v travi", span: "row-span-2" },
    { src: interiorFull, alt: "Notranjost kamperja" },
    { src: combiSide, alt: "Stranski pogled kombija" },
    { src: combiSportBelt, alt: "Športna oprema v kombiju" },
    { src: galleryBackGrass, alt: "Kombi pogled od zadaj v naravi", span: "col-span-2" },
    { src: combiSpeaker, alt: "Bluetooth zvočnik" },
    { src: interiorSink, alt: "Kuhinja z umivalnikom" },
    { src: combiBack, alt: "Pogled od zadaj" },
    { src: combiFront, alt: "Sprednji pogled" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-eyebrow">{t("galleryX.eyebrow", lang)}</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            {t("galleryX.h1", lang)} <span className="text-gradient">{t("galleryX.h2", lang)}</span>
          </h2>
          <p className="text-muted-foreground mt-4">{t("galleryX.sub", lang)}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
