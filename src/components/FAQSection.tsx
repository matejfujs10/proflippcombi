import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const FAQSection = () => {
  const { lang } = useLanguage();
  const t = translations.faq;

  const faqs = [
    {
      question: t.questions.longTrips.question[lang],
      answer: t.questions.longTrips.answer[lang],
    },
    {
      question: t.questions.pickup.question[lang],
      answer: t.questions.pickup.answer[lang],
    },
    {
      question: t.questions.events.question[lang],
      answer: t.questions.events.answer[lang],
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title[lang]}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-6">
                  <h3 className="text-lg">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
