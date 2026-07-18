import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred-language";
const MANUAL_FLAG = "preferred-language-manual";
const SUPPORTED: Language[] = ["SL", "EN", "DE", "HR"];

// Map an ISO country code to our supported languages (country takes priority over browser UI language)
const countryToLang = (country: string): Language | null => {
  const c = country.toUpperCase();
  if (c === "SI") return "SL";
  if (c === "HR" || c === "BA") return "HR";
  if (["DE", "AT", "CH", "LI"].includes(c)) return "DE";
  // Any other known country → English
  if (c.length === 2) return "EN";
  return null;
};

// Map a BCP47 language tag (e.g. "hr-HR", "de-AT", "sl", "en-US") to our languages
const bcp47ToLang = (tag: string): Language | null => {
  if (!tag) return null;
  const [primaryRaw, regionRaw] = tag.split("-");
  const primary = (primaryRaw || "").toLowerCase();
  const region = (regionRaw || "").toUpperCase();

  // Region wins if it maps clearly to a country we care about
  if (region) {
    const byRegion = countryToLang(region);
    if (byRegion && (primary === "" || byRegion !== "EN" || primary === "en")) {
      // Trust region for SL/HR/DE. For EN we require primary to be en to avoid mis-labelling.
      if (["SL", "HR", "DE"].includes(byRegion)) return byRegion;
    }
  }

  if (primary === "sl") return "SL";
  if (primary === "hr" || primary === "bs" || primary === "sr") return "HR";
  if (primary === "de") return "DE";
  if (primary === "en") return "EN";
  return null;
};

const detectFromBrowser = (): Language | null => {
  try {
    const tags: string[] = [];
    if (Array.isArray(navigator.languages)) tags.push(...navigator.languages);
    if (navigator.language) tags.push(navigator.language);
    for (const t of tags) {
      const m = bcp47ToLang(t);
      if (m) return m;
    }
  } catch {}
  return null;
};

const detectFromIP = async (): Promise<Language | null> => {
  // Try multiple geo-IP endpoints for reliability
  const endpoints = [
    { url: "https://ipapi.co/json/", key: "country_code" },
    { url: "https://ipwho.is/", key: "country_code" },
    { url: "https://get.geojs.io/v1/ip/country.json", key: "country" },
  ];
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep.url, { cache: "no-store" });
      if (!res.ok) continue;
      const data = await res.json();
      const country = (data[ep.key] || data.country || "").toString();
      const mapped = countryToLang(country);
      if (mapped) return mapped;
    } catch {
      // try next
    }
  }
  return null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Start from stored manual preference so returning users see their language instantly.
  const initial: Language = (() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch {}
    return "EN"; // safe default until detection completes
  })();

  const [lang, setLang] = useState<Language>(initial);

  useEffect(() => {
    const isManual = (() => {
      try { return localStorage.getItem(MANUAL_FLAG) === "1"; } catch { return false; }
    })();
    // If the user has explicitly chosen a language before, never auto-override.
    if (isManual) return;

    let cancelled = false;

    (async () => {
      // 1) Geo-IP first — country is a much better signal than browser UI language
      //    (e.g. a Croatian traveller may have an English-language browser).
      const ip = await detectFromIP();
      if (cancelled) return;
      if (ip) {
        setLang(ip);
        try { localStorage.setItem(STORAGE_KEY, ip); } catch {}
        return;
      }

      // 2) Fallback: Accept-Language / navigator.languages
      const browser = detectFromBrowser();
      if (cancelled) return;
      if (browser) {
        setLang(browser);
        try { localStorage.setItem(STORAGE_KEY, browser); } catch {}
        return;
      }

      // 3) Final fallback
      setLang("EN");
      try { localStorage.setItem(STORAGE_KEY, "EN"); } catch {}
    })();

    return () => { cancelled = true; };
  }, []);

  // Keep <html lang="..."> in sync for SEO / a11y
  useEffect(() => {
    try {
      const map: Record<Language, string> = { SL: "sl", EN: "en", DE: "de", HR: "hr" };
      document.documentElement.lang = map[lang];
    } catch {}
  }, [lang]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      localStorage.setItem(MANUAL_FLAG, "1"); // remember that the user chose manually
    } catch {}
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
