import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Map a language/country code to our supported languages
const codeToLang = (code: string): Language | null => {
  const c = code.toLowerCase();
  if (c.startsWith("sl") || c === "si") return "SL";
  if (c.startsWith("de") || c === "at" || c === "ch") return "DE";
  if (c.startsWith("hr") || c === "ba") return "HR";
  if (c.startsWith("en") || c === "us" || c === "gb") return "EN";
  return null;
};

const detectFromBrowser = (): Language | null => {
  try {
    const langs: string[] = [];
    if (navigator.languages) langs.push(...navigator.languages);
    if (navigator.language) langs.push(navigator.language);
    for (const l of langs) {
      // Try full code first (e.g. sl-SI), then primary
      const match = codeToLang(l) || codeToLang(l.split("-")[0]) || codeToLang(l.split("-")[1] || "");
      if (match) return match;
    }
  } catch {}
  return null;
};

const detectFromIP = async (): Promise<Language | null> => {
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "force-cache" });
    if (!res.ok) return null;
    const data = await res.json();
    const country = (data.country_code || data.country || "").toLowerCase();
    // SI -> Slovenia, DE/AT/CH -> German, HR/BA -> Croatian
    if (country === "si") return "SL";
    if (["de", "at", "ch", "li"].includes(country)) return "DE";
    if (["hr", "ba"].includes(country)) return "HR";
    return "EN";
  } catch {
    return null;
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("SL");

  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Language | null;
    if (saved && ["SL", "EN", "DE", "HR"].includes(saved)) {
      setLang(saved);
      return;
    }
    // Try browser first (instant, privacy-safe)
    const browser = detectFromBrowser();
    if (browser) {
      setLang(browser);
      return;
    }
    // Fall back to IP geolocation (async)
    detectFromIP().then((ipLang) => {
      if (ipLang) setLang(ipLang);
      else setLang("EN");
    });
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferred-language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
