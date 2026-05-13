import { useState } from "react";
import { Flame, Calendar, AlertTriangle } from "lucide-react";
import BookingDialog from "./BookingDialog";

const UrgencySection = () => {
  const [open, setOpen] = useState(false);
  const stats = [
    { value: "70%", label: "Vikendov že rezerviranih" },
    { value: "2026", label: "Zadnji prosti termini" },
    { value: "60€", label: "Akcijska cena / dan" },
  ];
  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/15 border border-destructive/30 mb-6">
            <AlertTriangle size={16} className="text-destructive" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-destructive">
              Omejena razpoložljivost
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Poletni termini 2026 se{" "}
            <span className="text-gradient">hitro polnijo</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto mb-12">
            Najbolj iskani vikendi in poletni termini so omejeni. Veliko gostov rezervira več mesecev vnaprej.
            Rezerviraj svoj termin pravočasno in izkoristi akcijske cene.
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-12 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:p-8"
              >
                <p className="font-display text-3xl md:text-5xl lg:text-6xl text-gradient leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-2 md:mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <button onClick={() => setOpen(true)} className="btn-hero">
            <Flame size={18} className="mr-2" />
            Rezerviraj zdaj
          </button>
          <p className="text-xs text-muted-foreground mt-4">
            <Calendar className="inline mr-1" size={12} /> Hiter odgovor v nekaj urah
          </p>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default UrgencySection;
