import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Kako poteka rezervacija?", a: "Pošlješ povpraševanje preko obrazca ali nas pokličeš. V nekaj urah ti pošljemo potrditev, navodila in lokacijo prevzema." },
  { q: "Kje lahko prevzamem kombi?", a: "Prevzem je v Mariboru, po dogovoru tudi v drugih krajih po Sloveniji ali ob avtocestnih izvozih." },
  { q: "Ali je možen najem za več dni?", a: "Seveda – več dni kot najameš, nižja je cena na dan. Možna je tudi dolgoročna rezervacija po dogovoru." },
  { q: "Koliko oseb lahko spi v kombiju?", a: "Udobno za 2 osebi v kamper konfiguraciji. Za prevoz pa do 5+1 sedežev." },
  { q: "Ali je kombi primeren za športno opremo?", a: "Da – prostor je optimiziran za kolesa, smuči, surfe in drugo opremo." },
  { q: "Ali lahko potujem tudi v tujino?", a: "Da, potovanja po Avstriji, Hrvaški in Italiji so dovoljena. Za druge države nas vprašaj." },
  { q: "Kako hitro dobim odgovor?", a: "Običajno odgovorimo v nekaj urah, najkasneje v 24 urah." },
  { q: "Kaj je vključeno v ceno?", a: "Tehnično brezhibno vozilo, popolna oprema kamperja, čiščenje, zatemnjena stekla in osnovna športna oprema." },
];

const FAQSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <span className="section-eyebrow">FAQ</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
          Pogosta <span className="text-gradient">vprašanja</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-gradient-card rounded-2xl border border-border px-6 data-[state=open]:border-accent/40 transition-colors"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 text-base md:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 text-sm md:text-base leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
