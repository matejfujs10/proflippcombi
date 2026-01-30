import { useState } from "react";
import { Check, Truck, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import BookingDialog from "./BookingDialog";

const Pricing = () => {
  const { lang } = useLanguage();
  const t = translations.pricing;
  const [bookingOpen, setBookingOpen] = useState(false);

  const pricingTiers = [
    {
      days: t.days.short[lang],
      price: "55",
      popular: false,
    },
    {
      days: t.days.medium[lang],
      price: "50",
      popular: true,
    },
    {
      days: t.days.long[lang],
      price: "50",
      note: t.discountNote[lang],
      popular: false,
    },
  ];

  const included = [
    t.included.fullEquipment[lang],
    t.included.blinds[lang],
    t.included.sports[lang],
    t.included.cleaning[lang],
    t.included.technical[lang],
  ];

  const extras = [
    t.extras.delivery[lang],
    t.extras.extraCleaning[lang],
  ];

  return (
    <>
      <section id="cenik" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider">
              {t.badge[lang]}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t.title[lang]}{" "}
              <span className="text-gradient">{t.titleHighlight[lang]}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.subtitle[lang]}{" "}
              <a
                href="mailto:info@proflipp.com"
                className="text-primary hover:underline font-semibold"
              >
                info@proflipp.com
              </a>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-6 md:p-8 text-center transition-all ${
                  tier.popular
                    ? "bg-gradient-hero text-white shadow-2xl md:scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-navy px-4 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
                    {t.mostPopular[lang]}
                  </div>
                )}
                <p
                  className={`text-base md:text-lg font-medium mb-2 ${
                    tier.popular ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {tier.days}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span
                    className={`text-4xl md:text-5xl font-heading font-bold ${
                      tier.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm md:text-base ${
                      tier.popular ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {t.perDay[lang]}
                  </span>
                </div>
                {tier.note && (
                  <p
                    className={`text-xs md:text-sm ${
                      tier.popular ? "text-accent" : "text-primary"
                    }`}
                  >
                    ({tier.note})
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center text-lg md:text-xl font-heading font-bold text-foreground mb-16">
            {t.moreDays[lang]}
          </p>

          {/* Included & Extras */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Included */}
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Check className="text-primary" size={24} />
                {t.includedTitle[lang]}
              </h3>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Truck className="text-accent" size={24} />
                {t.extrasTitle[lang]}
              </h3>
              <div className="space-y-4 mb-8">
                {extras.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Truck size={14} className="text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground text-sm md:text-base">{t.deposit[lang]}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {t.depositText[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              {t.bookEarly[lang]}
            </p>
            <button onClick={() => setBookingOpen(true)} className="btn-hero">
              {t.bookNow[lang]}
            </button>
          </div>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Pricing;
