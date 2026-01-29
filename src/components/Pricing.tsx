import { Check, Truck, AlertTriangle } from "lucide-react";

const pricingTiers = [
  {
    days: "1–4 dni",
    price: "55",
    popular: false,
  },
  {
    days: "5–7 dni",
    price: "50",
    popular: true,
  },
  {
    days: "8+ dni",
    price: "50",
    note: "dodatni popust že vključen",
    popular: false,
  },
];

const included = [
  "Polna oprema kombija",
  "Senčila + pregrinjalo",
  "Športni rekviziti",
  "Osnovno čiščenje",
  "Tehnična brezhibnost",
];

const extras = [
  "Dostava kombija: po dogovoru",
  "Dodatno čiščenje: po potrebi",
];

const Pricing = () => {
  return (
    <section id="cenik" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider">
            💶 Cenik
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Pregleden, pošten in{" "}
            <span className="text-gradient">brez skritih stroškov</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cena je odvisna tudi od števila kilometrov. Za točno ceno in popust
            nam pišite na{" "}
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
              className={`relative rounded-3xl p-8 text-center transition-all ${
                tier.popular
                  ? "bg-gradient-hero text-white shadow-2xl scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-navy px-4 py-1 rounded-full text-sm font-bold">
                  NAJBOLJ PRILJUBLJEN
                </div>
              )}
              <p
                className={`text-lg font-medium mb-2 ${
                  tier.popular ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {tier.days}
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span
                  className={`text-5xl font-heading font-bold ${
                    tier.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={
                    tier.popular ? "text-white/80" : "text-muted-foreground"
                  }
                >
                  € / dan
                </span>
              </div>
              {tier.note && (
                <p
                  className={`text-sm ${
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
        <p className="text-center text-xl font-heading font-bold text-foreground mb-16">
          👉 Več dni = več svobode, ista cena
        </p>

        {/* Included & Extras */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Included */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="text-primary" size={24} />
              Vključeno v ceno
            </h3>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Truck className="text-accent" size={24} />
              Doplačila (po želji)
            </h3>
            <div className="space-y-4 mb-8">
              {extras.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Truck size={14} className="text-accent" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Varščina</p>
                  <p className="text-sm text-muted-foreground">
                    Varščina po dogovoru (vrnjena ob vračilu vozila v
                    brezhibnem stanju)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            👉 Rezerviraj pravočasno – termini se hitro zapolnijo!
          </p>
          <a href="#kontakt" className="btn-hero">
            Rezerviraj zdaj
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
