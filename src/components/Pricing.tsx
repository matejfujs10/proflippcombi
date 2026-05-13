import { useState } from "react";
import { Check, Star, ChevronRight } from "lucide-react";
import BookingDialog from "./BookingDialog";

const tiers = [
  { days: "1–4 dni", old: "100€", price: "75", note: "Krajši izleti in vikendi" },
  { days: "5–7 dni", old: "90€", price: "69", note: "Najbolj izbrano", popular: true },
  { days: "8+ dni", old: "80€", price: "65", note: "Možnost daljšega najema po dogovoru." },
];

const Pricing = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="cenik" className="relative py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-eyebrow">Cenik 2026</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Akcijske cene <span className="text-gradient">2026</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-3">
              Več dni najema = nižja cena na dan
            </p>
            <p className="text-sm text-muted-foreground/70">
              Redna cena: <span className="line-through">90€ / dan</span>
            </p>
            <p className="mt-4 inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold">
              Akcijske cene že od 60€ / dan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-12">
            {tiers.map((t, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all ${
                  t.popular
                    ? "bg-gradient-cta text-primary-foreground glow-gold md:scale-105 md:-translate-y-2"
                    : "bg-gradient-card border border-border"
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-background text-accent border border-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Star size={12} fill="currentColor" /> Najbolj izbrano
                  </div>
                )}
                <p className={`text-xs uppercase tracking-[0.25em] mb-4 ${t.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {t.days}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-sm line-through ${t.popular ? "opacity-60" : "text-muted-foreground"}`}>
                    {t.old}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-6xl md:text-7xl leading-none">{t.price}</span>
                  <span className="text-lg font-bold">€</span>
                  <span className={`text-sm ml-1 ${t.popular ? "opacity-80" : "text-muted-foreground"}`}>/ dan</span>
                </div>
                <p className={`text-sm mb-6 ${t.popular ? "opacity-90" : "text-muted-foreground"}`}>
                  {t.note}
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className={`w-full inline-flex items-center justify-center gap-1 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition ${
                    t.popular
                      ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                      : "bg-accent text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Preveri termin <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-xs md:text-sm text-muted-foreground">
              {["Polna oprema", "Zatemnjena stekla", "Hitra rezervacija", "Brez skritih stroškov"].map((x) => (
                <div key={x} className="flex items-center justify-center gap-1.5">
                  <Check size={14} className="text-accent" /> {x}
                </div>
              ))}
            </div>
            <button onClick={() => setOpen(true)} className="btn-hero">
              Preveri termin
            </button>
          </div>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Pricing;
