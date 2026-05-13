import { useState } from "react";
import { Facebook, Instagram, Mail, Phone, ShieldCheck, Clock, MapPin, BadgeCheck } from "lucide-react";
import LegalDialog from "./LegalDialog";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  const trust = [
    { icon: ShieldCheck, label: "Direktna rezervacija" },
    { icon: BadgeCheck, label: "Brez skritih stroškov" },
    { icon: Clock, label: "Hiter odgovor" },
    { icon: MapPin, label: "Slovenija + Avstrija" },
  ];

  return (
    <>
      <footer className="bg-navy text-foreground pt-16 pb-24 md:pb-12 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Trust strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 pb-12 border-b border-border">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                <t.icon size={18} className="text-accent shrink-0" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-heading font-bold mb-4">
                PROFLIPP <span className="text-accent">KOMBI</span>
              </h3>
              <p className="text-foreground/70 mb-3">
                Tvoj športni kombi za roadtripe, vikend pobege in spanje v naravi.
              </p>
              <p className="font-display text-lg text-gradient tracking-wider">
                TRAVEL · ENJOY · EXPLORE
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Hitre povezave</h4>
              <nav className="flex flex-col gap-2 text-foreground/70">
                <a href="#domov" className="hover:text-accent transition">Domov</a>
                <a href="#cenik" className="hover:text-accent transition">Cenik</a>
                <a href="#mnenja" className="hover:text-accent transition">Mnenja</a>
                <a href="#kontakt" className="hover:text-accent transition">Kontakt</a>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Pravno</h4>
              <nav className="flex flex-col gap-2 text-foreground/70">
                <button onClick={() => setTermsOpen(true)} className="text-left hover:text-accent transition">Pogoji najema</button>
                <button onClick={() => setPrivacyOpen(true)} className="text-left hover:text-accent transition">Zasebnost</button>
                <button onClick={() => setCookiesOpen(true)} className="text-left hover:text-accent transition">Piškotki</button>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
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
            <p>© {new Date().getFullYear()} PROFLIPP KOMBI. Vse pravice pridržane.</p>
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
