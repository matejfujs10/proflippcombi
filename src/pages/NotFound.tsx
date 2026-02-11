import { useLocation } from "react-router-dom";

const notFoundTranslations = {
  title: { SL: "Stran ne obstaja", EN: "Page not found", DE: "Seite nicht gefunden", HR: "Stranica nije pronađena" },
  back: { SL: "Nazaj na domačo stran", EN: "Back to homepage", DE: "Zurück zur Startseite", HR: "Natrag na početnu stranicu" },
};

type Lang = "SL" | "EN" | "DE" | "HR";

const detectLang = (): Lang => {
  try {
    const saved = localStorage.getItem("preferred-language") as Lang | null;
    if (saved && ["SL", "EN", "DE", "HR"].includes(saved)) return saved;
    const bl = (navigator.language || "en").toLowerCase();
    if (bl.startsWith("sl")) return "SL";
    if (bl.startsWith("de")) return "DE";
    if (bl.startsWith("hr")) return "HR";
    return "EN";
  } catch {
    return "EN";
  }
};

const NotFound = () => {
  const location = useLocation();
  const lang = detectLang();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{notFoundTranslations.title[lang]}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {notFoundTranslations.back[lang]}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
