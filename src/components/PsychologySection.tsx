import { useState } from "react";
import combiDoors from "@/assets/combi-doors.jpg";
import BookingDialog from "./BookingDialog";

const PsychologySection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${combiDoors})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-4">Iskreno povedano</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-8 leading-tight">
              Večina ljudi vedno čaka na <span className="text-gradient">"enkrat"</span>.
            </h2>

            <div className="space-y-2 text-base md:text-lg text-foreground/80 mb-8">
              <p>Enkrat bom šel na roadtrip.</p>
              <p>Enkrat si bom vzel čas zase.</p>
              <p>Enkrat bom šel raziskovat.</p>
              <p>Enkrat bom pobegnil iz rutine.</p>
            </div>

            <div className="space-y-2 text-base md:text-lg text-muted-foreground mb-10 italic">
              <p>Potem pa mine sezona.</p>
              <p>Mine poletje.</p>
              <p>Minejo vikendi.</p>
            </div>

            <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Najlepši trenutki niso planirani popolno.
            </p>
            <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-10">
              Najlepši trenutki se zgodijo, ko greš.
            </p>

            <button onClick={() => setOpen(true)} className="btn-hero">
              Rezerviraj svojo avanturo
            </button>
          </div>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default PsychologySection;
