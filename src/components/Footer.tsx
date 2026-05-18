import { useState } from "react";
import { Facebook, Instagram, Mail, Phone, ShieldCheck, Clock, MapPin, BadgeCheck } from "lucide-react";
import LegalDialog from "./LegalDialog";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const { lang } = useLanguage();

  const trust = [
    { icon: ShieldCheck, label: t("trust.direct", lang) },
    { icon: BadgeCheck, label: t("trust.noFees", lang) },
    { icon: Clock, label: t("trust.fast", lang) },
    { icon: MapPin, label: t("trust.region", lang) },
  ];

  return (
    <>
      <footer className="bg-navy text-foreground pt-16 pb-24 md:pb-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 pb-12 border-b border-border">
            {trust.map((tr, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                <tr.icon size={18} className="text-accent shrink-0" />
                <span>{tr.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-heading font-bold mb-4">
                PROFLIPP <span className="text-accent">KOMBI</span>
              </h3>
              <p className="text-foreground/70 mb-3">{t("footerX.desc", lang)}</p>
              <p className="font-display text-lg text-gradient tracking-wider">
                {t("heroX.slogan", lang)}
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">{t("footerX.quickLinks", lang)}</h4>
              <nav className="flex flex-col gap-2 text-foreground/70">
                <a href="#domov" className="hover:text-accent transition">{t("footerX.home", lang)}</a>
                <a href="#cenik" className="hover:text-accent transition">{t("footerX.pricing", lang)}</a>
                <a href="#mnenja" className="hover:text-accent transition">{t("footerX.reviews", lang)}</a>
                <a href="/blog" className="hover:text-accent transition">{t("footerX.blog", lang)}</a>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">{t("footerX.legal", lang)}</h4>
              <nav className="flex flex-col gap-2 text-foreground/70">
                <button onClick={() => setTermsOpen(true)} className="text-left hover:text-accent transition">{t("footerX.terms", lang)}</button>
                <button onClick={() => setPrivacyOpen(true)} className="text-left hover:text-accent transition">{t("footerX.privacy", lang)}</button>
                <button onClick={() => setCookiesOpen(true)} className="text-left hover:text-accent transition">{t("footerX.cookies", lang)}</button>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">{t("footerX.contact", lang)}</h4>
              <div className="space-y-3">
                <a href="mailto:info@proflipp.com" className="flex items-center gap-3 text-foreground/70 hover:text-accent transition">
                  <Mail size={18} /> info@proflipp.com
                </a>
                <a href="tel:+38668169430" className="flex items-center gap-3 text-foreground/70 hover:text-accent transition">
                  <Phone size={18} /> +386 68 169 430
                </a>
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://www.facebook.com/proflippfotovideo" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center hover:bg-accent hover:text-primary-foreground hover:border-accent transition">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/proflippcom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center hover:bg-accent hover:text-primary-foreground hover:border-accent transition">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} PROFLIPP KOMBI. {t("footerX.rights", lang)}</p>
            <p>Maribor · Ljubljana · Graz · Slovenija + Avstrija</p>
          </div>
        </div>
      </footer>

      <LegalDialog open={termsOpen} onOpenChange={setTermsOpen} type="terms" />
      <LegalDialog open={privacyOpen} onOpenChange={setPrivacyOpen} type="privacy" />
      <LegalDialog open={cookiesOpen} onOpenChange={setCookiesOpen} type="cookies" />
    </>
  );
};

export default Footer;
