import { useState, useEffect } from "react";
import { ChevronRight, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/combi-sunset-hero.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import BookingDialog from "./BookingDialog";

const Hero = () => {
  const { lang } = useLanguage();
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const t = translations.hero;
  const slogans = translations.slogans[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <>
      <section id="domov" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>

        {/* Wave Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute bottom-0 w-[200%] h-32 animate-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-accent"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t.badge[lang]}
              </span>
            </div>

            {/* Title - H1 */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t.title1[lang]}{" "}
              <span className="text-accent">{t.titleHighlight[lang]}</span> {t.title2[lang]}
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-medium mb-4">
              {t.subtitle[lang]}
            </p>

            {/* Intro Text */}
            <p className="text-base md:text-lg text-white/80 mb-6">
              {t.introText[lang]}
            </p>

            {/* Rotating Slogan */}
            <div className="h-12 mb-6">
              <p
                key={currentSlogan}
                className="text-lg md:text-xl text-accent font-heading font-semibold slogan-animate"
              >
                {slogans[currentSlogan]}
              </p>
            </div>

            {/* Price Highlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
                {t.priceLabel[lang]}
              </p>
              <p className="text-3xl md:text-4xl font-heading font-bold text-white">
                {t.priceFrom[lang]} <span className="text-accent">60 €</span>{t.priceDay[lang]} 🛻💨
              </p>
              <p className="text-white/70 mt-2">
                {t.limited[lang]}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="btn-hero group"
              >
                <span>{t.bookNow[lang]}</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#kamper"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                {t.moreInfo[lang]}
              </a>
            </div>

            {/* Location Note */}
            <p className="text-sm text-white/70 mt-6 italic">
              {t.locationNote[lang]}
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Calendar size={20} className="text-accent" />
                </div>
                <span>{t.flexibleBooking[lang]}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users size={20} className="text-accent" />
                </div>
                <span>{t.persons[lang]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
              className="wave-fill"
            />
          </svg>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Hero;
