import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const seoData: Record<Language, { title: string; description: string; lang: string; ogLocale: string }> = {
  SL: {
    title: "Campervan Rental Slovenia | Najem Kombi Kamperja – Maribor & Ljubljana | Proflipp",
    description: "Campervan rental in Slovenia. Najem kombi kamperja za roadtripe po Sloveniji in Avstriji. Prevzem Maribor, Ljubljana, Celje ali Murska Sobota. Popolnoma opremljen van za avanture.",
    lang: "sl",
    ogLocale: "sl_SI",
  },
  EN: {
    title: "Campervan Rental Slovenia | Najem Kombi Kamperja – Maribor & Ljubljana | Proflipp",
    description: "Campervan rental in Slovenia. Fully equipped van for road trips across Slovenia and Austria. Pickup in Maribor, Ljubljana, Celje or Murska Sobota.",
    lang: "en",
    ogLocale: "en_GB",
  },
  DE: {
    title: "Campervan Rental Slovenia | Kombi Camper mieten – Maribor & Ljubljana | Proflipp",
    description: "Campervan mieten in Slowenien. Voll ausgestatteter Van für Roadtrips durch Slowenien und Österreich. Abholung in Maribor, Ljubljana, Celje oder Murska Sobota.",
    lang: "de",
    ogLocale: "de_AT",
  },
  HR: {
    title: "Campervan Rental Slovenia | Najam Kombi Kampera – Maribor & Ljubljana | Proflipp",
    description: "Najam campervana u Sloveniji. Potpuno opremljen van za putovanja po Sloveniji i Austriji. Preuzimanje u Mariboru, Ljubljani, Celju ili Murskoj Soboti.",
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
