import { useState, useEffect } from "react";
import { MessageCircle, Calendar } from "lucide-react";
import BookingDialog from "./BookingDialog";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp - always visible */}
      <a
        href="https://wa.me/38668169430"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed z-50 bottom-20 md:bottom-6 right-4 md:right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile sticky CTA */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-3 pt-2 bg-background/90 backdrop-blur-md border-t border-border transition-transform ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground font-bold uppercase tracking-wider py-3.5 rounded-full shadow-lg"
        >
          <Calendar size={18} />
          Rezerviraj zdaj
        </button>
      </div>

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FloatingActions;
