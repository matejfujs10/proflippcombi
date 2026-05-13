import { useState } from "react";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";
import combiSunset from "@/assets/combi-sunset-hero.jpg";
import BookingDialog from "./BookingDialog";

const FinalCTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="kontakt" className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${combiSunset})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />

        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <span className="section-eyebrow mb-4">Zadnji klic</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4 mb-6 leading-none">
            NE ČAKAJ NA <span className="text-gradient">"ENKRAT"</span>
          </h2>

          <div className="space-y-1 text-lg md:text-2xl text-foreground/85 font-heading font-semibold mb-3">
            <p>Vzemi dopust.</p>
            <p>Vzemi vikend.</p>
            <p className="text-gradient">Vzemi svobodo.</p>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-10">
            Rezerviraj svoj termin zdaj.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <button onClick={() => setOpen(true)} className="btn-hero">
              <Send size={18} className="mr-2" /> Rezerviraj termin
            </button>
            <a href="mailto:info@proflipp.com" className="btn-ghost-light">
              Pošlji povpraševanje
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-foreground/80">
            <a href="tel:+38668169430" className="flex items-center gap-2 hover:text-accent transition">
              <Phone size={18} /> <span className="font-semibold">+386 68 169 430</span>
            </a>
            <span className="hidden md:inline text-border">|</span>
            <a href="mailto:info@proflipp.com" className="flex items-center gap-2 hover:text-accent transition">
              <Mail size={18} /> info@proflipp.com
            </a>
            <span className="hidden md:inline text-border">|</span>
            <a
              href="https://wa.me/38668169430"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FinalCTA;
