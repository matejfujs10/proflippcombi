import { useState } from "react";
import { ChevronRight, Calendar, ShieldCheck, Clock, MapPin, Bed, Users, Mountain, ParkingSquare, TrendingDown, Zap } from "lucide-react";
import heroImage from "@/assets/combi-sunset-hero.jpg";
import BookingDialog from "./BookingDialog";

const trust = [
  { icon: ShieldCheck, label: "Direktna rezervacija" },
  { icon: TrendingDown, label: "Brez skritih stroškov" },
  { icon: Clock, label: "Hiter odgovor" },
  { icon: MapPin, label: "Slovenija + Avstrija" },
];

const bullets = [
  { icon: Bed, text: "Spanje za 2 osebi" },
  { icon: Users, text: "5+1 sedežev" },
  { icon: Mountain, text: "Idealno za športnike in roadtripe" },
  { icon: ParkingSquare, text: "Parkiraš skoraj kjerkoli" },
  { icon: TrendingDown, text: "Več dni = nižja cena" },
  { icon: Zap, text: "Hitra rezervacija" },
];

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="domov" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative container mx-auto px-4 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Akcijske cene 2026
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9] text-foreground mb-6">
              SVOBODA NA<br />
              <span className="text-gradient">4 KOLESIH</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/85 mb-2 max-w-2xl leading-relaxed">
              Najemi športni camper kombi ali 5+1 kombi in odpotuj brez omejitev.
            </p>
            <p className="text-base md:text-lg text-foreground/65 mb-8 max-w-2xl">
              Spanje v naravi. Vikend pobegi. Roadtrip avanture. Športna potovanja. Mobilna svoboda.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8 max-w-2xl">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm"
                >
                  <b.icon size={16} className="text-accent shrink-0" />
                  <span className="text-xs md:text-sm text-foreground/90 font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={() => setOpen(true)} className="btn-hero group">
                <Calendar size={20} className="mr-2" />
                Rezerviraj termin
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#cenik" className="btn-ghost-light">Preveri proste datume</a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-foreground/70">
              {trust.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm">
                  <t.icon size={14} className="text-accent" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Hero;
