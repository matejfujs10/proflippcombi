import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const FAQSection = () => {
  const { lang } = useLanguage();
  const faqs = Array.from({ length: 8 }, (_, i) => ({
    q: t(`faqX.q${i + 1}`, lang),
    a: t(`faqX.a${i + 1}`, lang),
  }));

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-eyebrow">{t("faqX.eyebrow", lang)}</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
            {t("faqX.h1", lang)} <span className="text-gradient">{t("faqX.h2", lang)}</span>
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
};

export default FAQSection;
