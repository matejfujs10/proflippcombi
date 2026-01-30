import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations.footer;
  const h = translations.header;

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              PROFLIPP <span className="text-accent">KOMBI</span>
            </h3>
            <p className="text-white/70 mb-4">
              {t.tagline[lang]}
            </p>
            <p className="text-white/60 text-sm">
              {t.description[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t.navigation[lang]}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#domov" className="text-white/70 hover:text-accent transition-colors">
                {h.home[lang]}
              </a>
              <a href="#kamper" className="text-white/70 hover:text-accent transition-colors">
                {h.camper[lang]}
              </a>
              <a href="#combi" className="text-white/70 hover:text-accent transition-colors">
                {h.combi[lang]}
              </a>
              <a href="#cenik" className="text-white/70 hover:text-accent transition-colors">
                {h.pricing[lang]}
              </a>
              <a href="#kontakt" className="text-white/70 hover:text-accent transition-colors">
                {t.contact[lang]}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t.contact[lang]}</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@proflipp.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                info@proflipp.com
              </a>
              <a
                href="tel:+38668169430"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                +386 68 169 430
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/proflippfotovideo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-navy transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/proflippcom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-navy transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} PROFLIPP KOMBI. {t.allRights[lang]}
          </p>
          <p className="text-white/50 text-sm">
            {t.simplicity[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
