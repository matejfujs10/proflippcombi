import { useState, useEffect } from "react";
import { ChevronRight, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/combi-front.jpg";

const slogans = [
  "TRAVEL · ENJOY · EXPLORE",
  "Life is about Experience!",
  "Life is what you make it, so make it well!",
  "ONE LIFE – LIVE IT",
];

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
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
              TOP RENT – PROFLIPP KOMBI
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Rezerviraj svojo{" "}
            <span className="text-accent">avanturo</span> zdaj
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-medium mb-2">
            Kombi + Camper | Svoboda brez meja
          </p>

          {/* Rotating Slogan */}
          <div className="h-12 mb-8">
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
              Tvoj športni kombi/kamper
            </p>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white">
              že od <span className="text-accent">50 €</span>/dan 🛻💨
            </p>
            <p className="text-white/70 mt-2">
              Najemi zdaj – omejene zaloge!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="btn-hero group"
            >
              <span>Rezerviraj zdaj</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#kamper"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Več o kombiju
            </a>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar size={20} className="text-accent" />
              </div>
              <span>Fleksibilne rezervacije</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Users size={20} className="text-accent" />
              </div>
              <span>2-6 oseb</span>
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
  );
};

export default Hero;
