import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const seoData: Record<Language, { title: string; description: string; lang: string; ogLocale: string }> = {
  SL: {
    title: "Najem kombija in kombi kamperja | Slovenija & Avstrija | Proflipp Kombi",
    description: "Najem kombija 5+1 in kombi kamperja v Sloveniji (Murska Sobota, Maribor, Celje, Ljubljana) ter Avstriji (Bad Radkersburg, Leibnitz, Graz). Popolnoma opremljen campervan za potovanja, roadtripe in avanture. Od 50€/dan.",
    lang: "sl",
    ogLocale: "sl_SI",
  },
  EN: {
    title: "Van & Campervan Rental | Slovenia & Austria | Proflipp Kombi",
    description: "Rent a fully equipped 5+1 van or campervan in Slovenia (Murska Sobota, Maribor, Celje, Ljubljana) and Austria (Bad Radkersburg, Leibnitz, Graz). Perfect for road trips, events and adventures. From €50/day.",
    lang: "en",
    ogLocale: "en_GB",
  },
  DE: {
    title: "Kombi & Campervan mieten | Slowenien & Österreich | Proflipp Kombi",
    description: "Mieten Sie einen voll ausgestatteten 5+1 Kombi oder Campervan in Slowenien (Murska Sobota, Maribor, Celje, Ljubljana) und Österreich (Bad Radkersburg, Leibnitz, Graz). Ideal für Roadtrips, Events und Abenteuer. Ab 50€/Tag.",
    lang: "de",
    ogLocale: "de_AT",
  },
  HR: {
    title: "Najam kombija i kombi kampera | Slovenija i Austrija | Proflipp Kombi",
    description: "Najam kombija 5+1 i kombi kampera u Sloveniji (Murska Sobota, Maribor, Celje, Ljubljana) i Austriji (Bad Radkersburg, Leibnitz, Graz). Potpuno opremljen campervan za putovanja, roadtripove i avanture. Od 50€/dan.",
    lang: "hr",
    ogLocale: "hr_HR",
  },
};

const useDynamicSEO = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    const data = seoData[lang];

    // Update document language
    document.documentElement.lang = data.lang;

    // Update title
    document.title = data.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.description);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", data.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", data.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", data.ogLocale);

    // Update Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", data.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", data.description);
  }, [lang]);
};

export default useDynamicSEO;
