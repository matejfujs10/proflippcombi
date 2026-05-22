import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, Language } from "@/lib/translations";
import BookingDialog from "./BookingDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const t = translations.header;

  const menuItems = [
    { name: t.home[lang], href: "/#domov", isRoute: false },
    { name: t.pricing[lang], href: "/#cenik", isRoute: false },
    { name: t.testimonials[lang], href: "/#mnenja", isRoute: false },
    { name: "BLOG", href: "/blog", isRoute: true },
  ];

  const languages: Language[] = ["SL", "EN", "DE", "HR"];

  return (
    <>
      <header className="fixed top-9 md:top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#domov" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-heading font-bold text-white">
                PROFLIPP <span className="text-accent">KOMBI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white/80 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <button
                onClick={() => setBookingOpen(true)}
                className="text-accent hover:text-white transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {t.book[lang]}
              </button>
            </nav>

            {/* Right side - Language & Social */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                      lang === l
                        ? "bg-accent text-navy"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/proflippfotovideo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-navy transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/proflippcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-navy transition-all"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Phone */}
              <a
                href="tel:+38668169430"
                className="flex items-center gap-2 text-accent hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm font-semibold">+386 68 169 430</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="lg:hidden relative z-[70] w-10 h-10 flex items-center justify-center text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 z-[65] bg-navy shadow-2xl border-t border-white/10 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
              <nav className="flex flex-col py-4">
                {menuItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setBookingOpen(true);
                  }}
                  className="px-6 py-3 text-accent hover:bg-white/5 transition-colors font-medium text-left"
                >
                  {t.book[lang]}
                </button>
                <div className="px-6 py-4 border-t border-white/10 mt-2">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          lang === l
                            ? "bg-accent text-navy"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                  <a
                    href="tel:+38668169430"
                    className="flex items-center gap-2 text-accent"
                  >
                    <Phone size={18} />
                    <span className="font-semibold">+386 68 169 430</span>
                  </a>
                </div>
              </nav>
          </div>
        </div>
      </header>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Header;
