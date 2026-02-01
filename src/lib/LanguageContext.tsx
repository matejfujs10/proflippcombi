import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Map country codes to languages
const countryToLanguage: Record<string, Language> = {
  // German-speaking countries
  AT: "DE", // Austria
  DE: "DE", // Germany
  CH: "DE", // Switzerland (default to German)
  LI: "DE", // Liechtenstein
  
  // Croatian
  HR: "HR", // Croatia
  BA: "HR", // Bosnia (Croatian as fallback)
  
  // Slovenian
  SI: "SL", // Slovenia
  
  // English for other countries (default)
};

const detectLanguageFromCountry = async (): Promise<Language> => {
  try {
    // Use ipapi.co for free geo-location
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    
    if (!response.ok) {
      throw new Error("Geo-location request failed");
    }
    
    const data = await response.json();
    const countryCode = data.country_code?.toUpperCase();
    
    if (countryCode && countryToLanguage[countryCode]) {
      return countryToLanguage[countryCode];
    }
    
    // Default to Slovenian if country not recognized
    return "SL";
  } catch (error) {
    console.log("Could not detect country, defaulting to SL:", error);
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
      // Detect language from country
      detectLanguageFromCountry().then((detectedLang) => {
        setLang(detectedLang);
        setIsInitialized(true);
      });
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
