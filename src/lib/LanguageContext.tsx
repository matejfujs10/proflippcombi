import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Map browser language codes to our supported languages
// Uses navigator.language which is privacy-safe (no external requests)
const browserLanguageToAppLanguage = (browserLang: string): Language => {
  const lang = browserLang.toLowerCase();
  
  // German
  if (lang.startsWith("de")) {
    return "DE";
  }
  
  // Croatian
  if (lang.startsWith("hr")) {
    return "HR";
  }
  
  // Slovenian
  if (lang.startsWith("sl")) {
    return "SL";
  }
  
  // English or any other language - default to Slovenian for this Slovenian business
  // (the site's primary audience is Slovenian)
  return "SL";
};

const detectLanguageFromBrowser = (): Language => {
  try {
    // Use navigator.language - privacy-safe, no external API calls
    const browserLang = navigator.language || (navigator as any).userLanguage || "sl";
    return browserLanguageToAppLanguage(browserLang);
  } catch (error) {
    console.log("Could not detect browser language, defaulting to SL:", error);
    return "SL";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("SL");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has a saved language preference
    const savedLang = localStorage.getItem("preferred-language") as Language | null;
    
    if (savedLang && ["SL", "EN", "DE", "HR"].includes(savedLang)) {
      setLang(savedLang);
      setIsInitialized(true);
    } else {
      // Detect language from browser settings (privacy-safe, no external API)
      const detectedLang = detectLanguageFromBrowser();
      setLang(detectedLang);
      setIsInitialized(true);
    }
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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
