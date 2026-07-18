import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

export type DetectionSource = "manual" | "cookie" | "storage" | "geo-ip" | "navigator" | "fallback" | "pending";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  source: DetectionSource;
  detail?: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred-language";
const MANUAL_FLAG = "preferred-language-manual";
const COOKIE_KEY = "lang";
const COOKIE_MANUAL = "lang_manual";
const SUPPORTED: Language[] = ["SL", "EN", "DE", "HR"];

// ---------- cookie helpers ----------
const setCookie = (name: string, value: string, days = 365) => {
  try {
    const d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax${secure}`;
  } catch {}
};
const getCookie = (name: string): string | null => {
  try {
    const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : null;
  } catch { return null; }
};

// ---------- language mapping ----------
const countryToLang = (country: string): Language | null => {
  const c = country.toUpperCase();
  if (c === "SI") return "SL";
  if (c === "HR" || c === "BA") return "HR";
  if (["DE", "AT", "CH", "LI"].includes(c)) return "DE";
  if (c.length === 2) return "EN";
  return null;
};

const bcp47ToLang = (tag: string): Language | null => {
  if (!tag) return null;
  const [primaryRaw, regionRaw] = tag.split("-");
  const primary = (primaryRaw || "").toLowerCase();
  const region = (regionRaw || "").toUpperCase();
  if (region) {
    const byRegion = countryToLang(region);
    if (byRegion && ["SL", "HR", "DE"].includes(byRegion)) return byRegion;
  }
  if (primary === "sl") return "SL";
  if (primary === "hr" || primary === "bs" || primary === "sr") return "HR";
  if (primary === "de") return "DE";
  if (primary === "en") return "EN";
  return null;
};

const detectFromBrowser = (): { lang: Language; tag: string } | null => {
  try {
    const tags: string[] = [];
    if (Array.isArray(navigator.languages)) tags.push(...navigator.languages);
    if (navigator.language) tags.push(navigator.language);
    for (const t of tags) {
      const m = bcp47ToLang(t);
      if (m) return { lang: m, tag: t };
    }
  } catch {}
  return null;
};

const detectFromIP = async (): Promise<{ lang: Language; country: string; endpoint: string } | null> => {
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
      if (mapped) return { lang: mapped, country, endpoint: ep.url };
    } catch {}
  }
  return null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const initial = (() => {
    try {
      const cookie = getCookie(COOKIE_KEY);
      if (cookie && SUPPORTED.includes(cookie as Language)) return { lang: cookie as Language, source: "cookie" as DetectionSource };
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && SUPPORTED.includes(saved)) return { lang: saved, source: "storage" as DetectionSource };
    } catch {}
    return { lang: "EN" as Language, source: "pending" as DetectionSource };
  })();

  const [lang, setLangState] = useState<Language>(initial.lang);
  const [source, setSource] = useState<DetectionSource>(initial.source);
  const [detail, setDetail] = useState<string | undefined>(undefined);

  useEffect(() => {
    const isManual = (() => {
      try {
        return localStorage.getItem(MANUAL_FLAG) === "1" || getCookie(COOKIE_MANUAL) === "1";
      } catch { return false; }
    })();
    if (isManual) {
      setSource("manual");
      return;
    }
    let cancelled = false;
    (async () => {
      const ip = await detectFromIP();
      if (cancelled) return;
      if (ip) {
        setLangState(ip.lang);
        setSource("geo-ip");
        setDetail(`country=${ip.country} via ${new URL(ip.endpoint).hostname}`);
        try { localStorage.setItem(STORAGE_KEY, ip.lang); } catch {}
        setCookie(COOKIE_KEY, ip.lang);
        return;
      }
      const browser = detectFromBrowser();
      if (cancelled) return;
      if (browser) {
        setLangState(browser.lang);
        setSource("navigator");
        setDetail(`navigator=${browser.tag}`);
        try { localStorage.setItem(STORAGE_KEY, browser.lang); } catch {}
        setCookie(COOKIE_KEY, browser.lang);
        return;
      }
      setLangState("EN");
      setSource("fallback");
      try { localStorage.setItem(STORAGE_KEY, "EN"); } catch {}
      setCookie(COOKIE_KEY, "EN");
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    try {
      const map: Record<Language, string> = { SL: "sl", EN: "en", DE: "de", HR: "hr" };
      document.documentElement.lang = map[lang];
    } catch {}
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    setSource("manual");
    setDetail("user click");
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      localStorage.setItem(MANUAL_FLAG, "1");
    } catch {}
    setCookie(COOKIE_KEY, newLang);
    setCookie(COOKIE_MANUAL, "1");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, source, detail }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
