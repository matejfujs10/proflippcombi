import { useState } from "react";
import { Flame, ChevronRight } from "lucide-react";
import BookingDialog from "./BookingDialog";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto px-3 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Flame size={16} className="shrink-0 animate-pulse-soft" />
            <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider truncate">
              Zadnji prosti termini za 2026 po akcijski ceni
              <span className="hidden md:inline opacity-80 normal-case font-medium tracking-normal"> · Akcijske cene že od 60€/dan</span>
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="shrink-0 inline-flex items-center gap-1 bg-background/95 hover:bg-background text-foreground px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition"
          >
            Preveri termin
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default TopBar;
