import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import combiNature from "@/assets/combi-nature.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import BookingDialog from "./BookingDialog";

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations.contact;
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section id="kontakt" className="py-20 bg-muted relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${combiNature})` }}
        />

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              {t.badge[lang]}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t.title[lang]}{" "}
              <span className="text-gradient">{t.titleHighlight[lang]}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t.subtitle[lang]}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {/* Email */}
            <a
              href="mailto:info@proflipp.com"
              className="bg-card rounded-3xl p-6 md:p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">{t.email[lang]}</p>
              <p className="font-heading font-bold text-foreground text-sm md:text-lg break-all">
                info@proflipp.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+38668169430"
              className="bg-card rounded-3xl p-6 md:p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                {t.phone[lang]}
              </p>
              <p className="font-heading font-bold text-foreground text-sm md:text-lg">
                +386 68 169 430
              </p>
            </a>

            {/* Location */}
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-wave flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">{t.location[lang]}</p>
              <p className="font-heading font-bold text-foreground text-sm md:text-lg">
                {t.country[lang]}
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-hero rounded-3xl p-6 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              {t.bookToday[lang]}
            </h3>
            <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
              {t.limitedDays[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-navy font-bold rounded-full hover:bg-accent hover:text-navy transition-colors text-sm md:text-base"
              >
                <Send size={18} />
                {t.sendInquiry[lang]}
              </button>
              <a
                href="https://wa.me/38668169430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Contact;
