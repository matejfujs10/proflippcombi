import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const Testimonials = () => {
  const { lang } = useLanguage();
  const t = translations.testimonials;

  return (
    <section id="mnenja" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider">
            {t.badge[lang]}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            {t.title[lang]} <span className="text-gradient">{t.titleHighlight[lang]}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.reviews.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text[lang]}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
