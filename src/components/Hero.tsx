import { useState, useEffect } from "react";
import { ChevronRight, Calendar, ShieldCheck, Clock, MapPin, Bed, Users, Mountain, ParkingSquare, TrendingDown, Zap } from "lucide-react";
import heroImage from "@/assets/combi-sunset-hero.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import BookingDialog from "./BookingDialog";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const heroSlides = [heroImage, heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5, heroSlide6];

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const trust = [
    { icon: ShieldCheck, label: t("trust.direct", lang) },
    { icon: TrendingDown, label: t("trust.noFees", lang) },
    { icon: Clock, label: t("trust.fast", lang) },
    { icon: MapPin, label: t("trust.region", lang) },
  ];
  const bullets = [
    { icon: Bed, text: t("bullets.sleep2", lang) },
    { icon: Users, text: t("bullets.seats", lang) },
    { icon: Mountain, text: t("bullets.sport", lang) },
    { icon: ParkingSquare, text: t("bullets.park", lang) },
    { icon: TrendingDown, text: t("bullets.moreDays", lang) },
    { icon: Zap, text: t("bullets.fastBooking", lang) },
  ];

  return (
    <>
      <section id="domov" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32">
        {heroSlides.map((src, i) => (
          <div key={i} className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
            style={{ backgroundImage: `url(${src})`, opacity: slide === i ? 1 : 0 }}
            aria-hidden={slide !== i}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative container mx-auto px-4 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {t("heroX.badge", lang)}
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9] text-foreground mb-6">
              {t("heroX.titleA", lang)}<br />
              <span className="text-gradient">{t("heroX.titleB", lang)}</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/85 mb-2 max-w-2xl leading-relaxed">{t("heroX.lead", lang)}</p>
            <p className="text-base md:text-lg text-foreground/65 mb-8 max-w-2xl">{t("heroX.sub", lang)}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8 max-w-2xl">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm">
                  <b.icon size={16} className="text-accent shrink-0" />
                  <span className="text-xs md:text-sm text-foreground/90 font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={() => setOpen(true)} className="btn-hero group">
                <Calendar size={20} className="mr-2" />
                {t("heroX.book", lang)}
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#cenik" className="btn-ghost-light">{t("heroX.checkDates", lang)}</a>
            </div>

            <p className="font-display text-2xl md:text-3xl tracking-[0.3em] text-gradient mb-6">
              {t("heroX.slogan", lang)}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-foreground/70">
              {trust.map((tr, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm">
                  <tr.icon size={14} className="text-accent" />
                  <span>{tr.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">{t("heroX.scroll", lang)}</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Hero;
