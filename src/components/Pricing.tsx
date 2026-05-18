import { useState } from "react";
import { Check, Star, ChevronRight } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const tiers = [
    { days: t("pricingX.days1", lang), old: "100€", price: "75", note: t("pricingX.note1", lang) },
    { days: t("pricingX.days2", lang), old: "90€", price: "69", note: t("pricingX.note2", lang), popular: true },
    { days: t("pricingX.days3", lang), old: "80€", price: "65", note: t("pricingX.note3", lang) },
  ];
  const includes = [
    t("pricingX.inc1", lang),
    t("pricingX.inc2", lang),
    t("pricingX.inc3", lang),
    t("pricingX.inc4", lang),
  ];
  return (
    <>
      <section id="cenik" className="relative py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-eyebrow">{t("pricingX.eyebrow", lang)}</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              {t("pricingX.h1", lang)} <span className="text-gradient">2026</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-3">{t("pricingX.sub", lang)}</p>
            <p className="text-sm text-muted-foreground/70">
              {t("pricingX.regular", lang)} <span className="line-through">90€ / {t("pricingX.perDay", lang).replace("/ ", "")}</span>
            </p>
            <p className="mt-4 inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold">
              {t("pricingX.promoChip", lang)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-12">
            {tiers.map((tier, i) => (
              <div key={i} className={`relative rounded-3xl p-8 transition-all ${tier.popular ? "bg-gradient-cta text-primary-foreground glow-gold md:scale-105 md:-translate-y-2" : "bg-gradient-card border border-border"}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-background text-accent border border-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Star size={12} fill="currentColor" /> {t("pricingX.popularBadge", lang)}
                  </div>
                )}
                <p className={`text-xs uppercase tracking-[0.25em] mb-4 ${tier.popular ? "opacity-80" : "text-muted-foreground"}`}>{tier.days}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-sm line-through ${tier.popular ? "opacity-60" : "text-muted-foreground"}`}>{tier.old}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-6xl md:text-7xl leading-none">{tier.price}</span>
                  <span className="text-lg font-bold">€</span>
                  <span className={`text-sm ml-1 ${tier.popular ? "opacity-80" : "text-muted-foreground"}`}>{t("pricingX.perDay", lang)}</span>
                </div>
                <p className={`text-sm mb-6 ${tier.popular ? "opacity-90" : "text-muted-foreground"}`}>{tier.note}</p>
                <button onClick={() => setOpen(true)} className={`w-full inline-flex items-center justify-center gap-1 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition ${tier.popular ? "bg-background text-foreground hover:bg-foreground hover:text-background" : "bg-accent text-primary-foreground hover:opacity-90"}`}>
                  {t("pricingX.cta", lang)} <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-xs md:text-sm text-muted-foreground">
              {includes.map((x) => (
                <div key={x} className="flex items-center justify-center gap-1.5">
                  <Check size={14} className="text-accent" /> {x}
                </div>
              ))}
            </div>
            <button onClick={() => setOpen(true)} className="btn-hero">{t("pricingX.cta", lang)}</button>
          </div>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Pricing;
