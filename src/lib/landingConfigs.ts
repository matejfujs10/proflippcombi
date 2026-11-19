import { LandingConfig } from "@/pages/Landing";

const city = (name: string, country = "Slovenia") => [{ "@type": "City", name, containedInPlace: { "@type": "Country", name: country } }];
const CITY_MB = [...city("Maribor"), ...city("Ptuj"), ...city("Slovenska Bistrica")];
const CITY_LJ = city("Ljubljana");
const CITY_CE = city("Celje");
const CITY_MS = city("Murska Sobota");
const CITY_GRAZ = city("Graz", "Austria");
const STYRIA = [{ "@type": "AdministrativeArea", name: "Steiermark", containedInPlace: { "@type": "Country", name: "Austria" } }, ...city("Leibnitz", "Austria"), ...city("Bad Radkersburg", "Austria"), ...city("Feldbach", "Austria"), ...city("Deutschlandsberg", "Austria")];

/** hreflang clusters of language-equivalent landing pages */
export const landingGroups: Record<string, Record<string, string>> = {
  rental: { sl: "/najem-kombija", en: "/campervan-rental-slovenia", de: "/kombi-camper-mieten", hr: "/najam-kombija" },
};

export const landings: LandingConfig[] = [
  {
    lang: "SL",
    path: "/najem-kombija",
    group: "rental",
    title: "Najem kombija Slovenija | Kombi 5+1 & Kombi Kamper | Proflipp",
    description: "Najem kombija v Sloveniji – kombi 5+1 in kombi kamper. Prevzem v Murski Soboti, po dogovoru dostava v Maribor, Ljubljano, Celje. Ugodne cene, hitra rezervacija.",
    h1: "Najem kombija v Sloveniji",
    intro: "Zanesljiv najem kombija za skupinske izlete, selitve, športne dogodke ali roadtripe. Ponujamo kombi 5+1 in popolnoma opremljen kombi kamper. Fleksibilni termini, jasne cene in hitra potrditev rezervacije.",
    keywords: "najem kombija, najem kombija ljubljana, najem kombija maribor, najem kombija celje, kombi najem, izposoja kombija, rent a kombi slovenija",
  },
  {
    lang: "SL",
    path: "/najem-kombi-kamperja",
    title: "Najem kombi kamperja | Campervan Slovenija | Proflipp Kombi",
    description: "Najem kombi kamperja za roadtripe po Sloveniji, Hrvaški in Avstriji. Popolnoma opremljen campervan – postelja, hladilnik, umivalnik. Od 65 €/dan.",
    h1: "Najem kombi kamperja",
    intro: "Popolnoma opremljen kombi kamper za dve osebi z posteljo, hladilnikom, umivalnikom, 12V priključki in zatemnilnimi roloji. Idealen za spontane pobege, festivale, plaže in gorske avanture.",
    keywords: "najem kombi kamperja, kombi kamper najem, campervan najem slovenija, kamper van najem, kamper najem cena, najem avtodoma, najem kombi avtodoma, najem avtodoma slovenija",
  },
  {
    lang: "SL",
    path: "/kombi-5-plus-1",
    title: "Kombi 5+1 najem | Skupinski izleti & smučanje | Proflipp",
    description: "Najem kombija 5+1 v zimski sezoni (november–maj). Udoben kombi s 6 sedeži za smučanje, koncerte, izlete in prevoze skupin. Prevzem Murska Sobota.",
    h1: "Najem kombija 5+1",
    intro: "Udoben kombi s šestimi sedeži (5+1) za skupinske izlete, smučanje, koncerte in prireditve. Na voljo v zimski sezoni (november–maj). Dovolj prostora za potnike in opremo.",
    keywords: "kombi 5+1, kombi 5 plus 1 najem, kombi za smučanje, kombi za skupinski izlet, najem 6 sedežni kombi",
  },
  {
    lang: "EN",
    path: "/campervan-rental-slovenia",
    group: "rental",
    title: "Campervan Rental Slovenia | Van Hire Maribor & Ljubljana | Proflipp",
    description: "Campervan rental in Slovenia. Fully equipped van for road trips across Slovenia, Croatia and Austria. Pickup in Murska Sobota, delivery to Maribor, Ljubljana on request.",
    h1: "Campervan Rental in Slovenia",
    intro: "A fully equipped campervan for two – bed, fridge, sink, 12V outlets and blackout blinds. Perfect for road trips across Slovenia, the Adriatic coast and the Alps. Flexible pickup and fast booking confirmation.",
    keywords: "campervan rental slovenia, van rental slovenia, camper hire slovenia, campervan maribor, campervan ljubljana, road trip slovenia",
  },
  {
    lang: "DE",
    path: "/kombi-camper-mieten",
    group: "rental",
    title: "Kombi Camper mieten Slowenien | Campervan Verleih | Proflipp",
    description: "Kombi Camper mieten in Slowenien – voll ausgestatteter Campervan für Roadtrips durch Slowenien, Kroatien und Österreich. Abholung Murska Sobota, Lieferung nach Graz möglich.",
    h1: "Kombi Camper mieten in Slowenien",
    intro: "Voll ausgestatteter Camper Van für zwei Personen – Bett, Kühlschrank, Waschbecken, 12V-Anschlüsse und Verdunklungsrollos. Ideal für Roadtrips durch Slowenien, an die Adria und in die Alpen.",
    keywords: "kombi camper mieten, campervan mieten slowenien, van mieten slowenien, wohnmobil mieten slowenien, camper mieten graz, wohnmobil mieten graz, wohnmobil mieten steiermark, campingbus mieten leibnitz",
  },
  {
    lang: "HR",
    path: "/najam-kombija",
    group: "rental",
    title: "Najam kombija Slovenija | Kombi Kamper & Kombi 5+1 | Proflipp",
    description: "Najam kombija u Sloveniji – kombi 5+1 i potpuno opremljen kombi kamper za putovanja po Sloveniji, Hrvatskoj i Austriji. Brza rezervacija, povoljne cijene.",
    h1: "Najam kombija u Sloveniji",
    intro: "Potpuno opremljen kombi kamper za dvije osobe i udoban kombi 5+1 za skupine. Idealno za roadtripove, festivale, plažu i planinske avanture. Preuzimanje u Murskoj Soboti, po dogovoru dostava.",
    keywords: "najam kombija, najam kombi kampera, najam kombija slovenija, campervan najam, kombi 5+1 najam",
  },

  // Regional landing pages
  {
    lang: "SL",
    path: "/najem-kombija-maribor",
    title: "Najem kombija Maribor | Kombi kamper & avtodom | Proflipp Kombi",
    description: "Najem kombija in kombi kamperja za Maribor in Štajersko. Prevzem v Murski Soboti, po dogovoru z doplačilom dostava v Maribor. Od 65 €/dan.",
    h1: "Najem kombija – Maribor",
    intro: "Kombi kamper poleti in kombi 5+1 pozimi (november–maj) za Maribor, Ptuj, Slovensko Bistrico in okolico. Prevzem je v Murski Soboti, po dogovoru in z doplačilom vozilo dostavimo v Maribor.",
    keywords: "najem kombija maribor, kombi kamper maribor, najem avtodoma maribor, najem kombija ptuj, najem kombija slovenska bistrica",
    areaServed: CITY_MB,
  },
  {
    lang: "SL",
    path: "/najem-kombija-ljubljana",
    title: "Najem kombija Ljubljana | Kombi kamper & avtodom | Proflipp Kombi",
    description: "Najem kombija in kombi kamperja za Ljubljano in osrednjo Slovenijo. Po dogovoru z doplačilom dostava v Ljubljano. Od 65 €/dan.",
    h1: "Najem kombija – Ljubljana",
    intro: "Kombi kamper za roadtripe in kombi 5+1 za skupine in smučanje (november–maj). Prevzem je v Murski Soboti, po dogovoru in z doplačilom vozilo dostavimo v Ljubljano.",
    keywords: "najem kombija ljubljana, kombi kamper ljubljana, najem avtodoma ljubljana, campervan ljubljana",
    areaServed: CITY_LJ,
  },
  {
    lang: "SL",
    path: "/najem-kombija-celje",
    title: "Najem kombija Celje | Kombi kamper & avtodom | Proflipp Kombi",
    description: "Najem kombija in kombi kamperja za Celje in Savinjsko regijo. Po dogovoru z doplačilom dostava v Celje. Od 65 €/dan.",
    h1: "Najem kombija – Celje",
    intro: "Kombi kamper poleti in kombi 5+1 pozimi (november–maj) za Celje in okolico. Prevzem je v Murski Soboti, po dogovoru in z doplačilom vozilo dostavimo v Celje.",
    keywords: "najem kombija celje, kombi kamper celje, najem avtodoma celje, najem kombija savinjska",
    areaServed: CITY_CE,
  },
  {
    lang: "SL",
    path: "/najem-kombija-murska-sobota",
    title: "Najem kombija Murska Sobota | Kombi kamper & 5+1 | Proflipp Kombi",
    description: "Najem kombija in kombi kamperja v Murski Soboti in Pomurju. Prevzem v Murski Soboti, hitra potrditev rezervacije. Od 65 €/dan.",
    h1: "Najem kombija – Murska Sobota",
    intro: "Prevzem vozila je v Murski Soboti. Kombi kamper poleti in kombi 5+1 pozimi (november–maj) za Pomurje, Prekmurje in vso Slovenijo.",
    keywords: "najem kombija murska sobota, kombi kamper pomurje, najem avtodoma murska sobota, najem kombija prekmurje",
    areaServed: CITY_MS,
  },
  {
    lang: "DE",
    path: "/campervan-mieten-graz",
    title: "Campervan & Wohnmobil mieten Graz | Kombi Camper | Proflipp Kombi",
    description: "Campervan mieten für Graz und Umgebung – kompakter Kombi Camper statt großem Wohnmobil. Lieferung nach Vereinbarung gegen Aufpreis. Ab 65 €/Tag.",
    h1: "Campervan mieten – Graz",
    intro: "Kompakter Kombi Camper für zwei Personen, fahrbar mit Führerschein B. Abholung in Murska Sobota, nach Vereinbarung und gegen Aufpreis Lieferung nach Graz und Umgebung.",
    keywords: "campervan mieten graz, wohnmobil mieten graz, campingbus mieten graz, camper verleih graz, kastenwagen mieten graz",
    areaServed: CITY_GRAZ,
  },
  {
    lang: "DE",
    path: "/camper-mieten-steiermark",
    title: "Camper mieten Steiermark | Leibnitz, Bad Radkersburg | Proflipp Kombi",
    description: "Kombi Camper und Wohnmobil-Alternative mieten in der Steiermark – Leibnitz, Bad Radkersburg, Feldbach, Deutschlandsberg. Ab 65 €/Tag.",
    h1: "Camper mieten in der Steiermark",
    intro: "Für Roadtrips durch die Südsteiermark, entlang der Weinstraßen und zu den Thermen. Abholung in Murska Sobota, nach Vereinbarung gegen Aufpreis Lieferung in die Steiermark bis Graz.",
    keywords: "camper mieten steiermark, wohnmobil mieten steiermark, campingbus mieten südsteiermark, wohnmobil mieten leibnitz, camper bad radkersburg",
    areaServed: STYRIA,
  },
];
