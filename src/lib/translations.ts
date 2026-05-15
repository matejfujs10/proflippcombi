export type Language = "SL" | "EN" | "DE" | "HR";

export const translations = {
  // Header
  header: {
    home: { SL: "Domov", EN: "Home", DE: "Startseite", HR: "Početna" },
    camper: { SL: "Kombi Kamper", EN: "Camper Van", DE: "Camper Van", HR: "Kombi Kamper" },
    combi: { SL: "Kombi 5+1", EN: "Kombi 5+1", DE: "Kombi 5+1", HR: "Kombi 5+1" },
    pricing: { SL: "Cenik", EN: "Pricing", DE: "Preise", HR: "Cjenik" },
    testimonials: { SL: "Mnenja", EN: "Reviews", DE: "Bewertungen", HR: "Recenzije" },
    book: { SL: "Rezerviraj", EN: "Book Now", DE: "Buchen", HR: "Rezerviraj" },
  },

  // Hero
  hero: {
    badge: { SL: "TOP RENT – PROFLIPP KOMBI", EN: "TOP RENT – PROFLIPP COMBI", DE: "TOP MIETE – PROFLIPP KOMBI", HR: "TOP NAJAM – PROFLIPP KOMBI" },
    title1: { SL: "Najemi kombi 5+1 ali", EN: "Rent a 5+1 van or", DE: "Miete einen 5+1 Kombi oder", HR: "Najmi kombi 5+1 ili" },
    titleHighlight: { SL: "kombi kamper.", EN: "campervan.", DE: "Campervan.", HR: "kombi kamper." },
    title2: { SL: "Uživaj svobodo.", EN: "Enjoy freedom.", DE: "Genieße die Freiheit.", HR: "Uživaj slobodu." },
    subtitle: { SL: "Kombi za spontane in daljše izlete, roadtripe in aktivne vikende.", EN: "A van for spontaneous and longer trips, road trips and active weekends.", DE: "Ein Kombi für spontane und längere Ausflüge, Roadtrips und aktive Wochenenden.", HR: "Kombi za spontane i duže izlete, roadtripove i aktivne vikende." },
    introText: { SL: "Primeren za športne dogodke, snemanja, festivale in pobege v naravo. Majhen, praktičen, enostavno parkiranje. Najem je hiter in enostaven, kombi pa vedno pripravljen.", EN: "Suitable for sports events, filming, festivals and escapes into nature. Small, practical, easy to park. Rental is fast and simple, and the van is always ready.", DE: "Geeignet für Sportveranstaltungen, Dreharbeiten, Festivals und Ausflüge in die Natur. Klein, praktisch, einfach zu parken. Die Miete ist schnell und unkompliziert, der Kombi immer bereit.", HR: "Prikladan za sportske događaje, snimanja, festivale i bijeg u prirodu. Malen, praktičan, jednostavno parkiranje. Najam je brz i jednostavan, a kombi je uvijek spreman." },
    priceLabel: { SL: "Tvoj športni kombi/kamper", EN: "Your sports van/camper", DE: "Dein Sport-Kombi/Camper", HR: "Tvoj sportski kombi/kamper" },
    priceFrom: { SL: "že od", EN: "from only", DE: "ab nur", HR: "već od" },
    priceDay: { SL: "/dan", EN: "/day", DE: "/Tag", HR: "/dan" },
    limited: { SL: "Najemi zdaj – omejeno število terminov!", EN: "Rent now – limited number of slots!", DE: "Jetzt mieten – begrenzte Anzahl an Terminen!", HR: "Unajmi sada – ograničen broj termina!" },
    bookNow: { SL: "Rezerviraj svoj kombi", EN: "Book your van", DE: "Jetzt Kombi reservieren", HR: "Rezerviraj svoj kombi" },
    sendInquiry: { SL: "Pošlji povpraševanje za najem kombija", EN: "Send an inquiry for van rental", DE: "Anfrage für Kombi-Miete senden", HR: "Pošalji upit za najam kombija" },
    moreInfo: { SL: "Več o kombiju", EN: "More about the van", DE: "Mehr über den Kombi", HR: "Više o kombiju" },
    flexibleBooking: { SL: "Fleksibilne rezervacije", EN: "Flexible bookings", DE: "Flexible Buchungen", HR: "Fleksibilne rezervacije" },
    persons: { SL: "1-5 oseb", EN: "1-5 persons", DE: "1-5 Personen", HR: "1-5 osoba" },
    locationNote: { SL: "🌍 Od doma do najlepših poti po Evropi.", EN: "🌍 From home to the most beautiful trails in Europe.", DE: "🌍 Von zu Hause zu den schönsten Wegen Europas.", HR: "🌍 Od doma do najljepših staza po Europi." },
  },

  slogans: {
    SL: [
      "POTUJ · UŽIVAJ · RAZISKUJ",
      "Življenje so izkušnje!",
      "Življenje je to, kar iz njega narediš!",
      "ENO ŽIVLJENJE – ŽIVI GA",
    ],
    EN: [
      "TRAVEL · ENJOY · EXPLORE",
      "Life is about Experience!",
      "Life is what you make it, so make it well!",
      "ONE LIFE – LIVE IT",
    ],
    DE: [
      "REISEN · GENIESSEN · ENTDECKEN",
      "Leben bedeutet Erfahrung!",
      "Das Leben ist, was du daraus machst!",
      "EIN LEBEN – LEBE ES",
    ],
    HR: [
      "PUTUJ · UŽIVAJ · ISTRAŽI",
      "Život je iskustvo!",
      "Život je ono što sam stvoriš!",
      "JEDAN ŽIVOT – ŽIVI GA",
    ],
  },

  // WhyUs
  whyUs: {
    title: { SL: "Zakaj izbrati", EN: "Why Choose", DE: "Warum", HR: "Zašto odabrati" },
    titleBrand: { SL: "Proflipp Kombi", EN: "Proflipp Combi", DE: "Proflipp Kombi wählen", HR: "Proflipp Kombi" },
    subtitle: { SL: "Proflipp Combi nudi osebni pristop, zanesljivo vozilo in jasne pogoje najema. Kombi je redno servisiran, udoben in prilagodljiv različnim potrebam. Primeren je za daljša potovanja, večdnevne dogodke ali aktivne vikende.", EN: "Proflipp Combi provides personal service, a well-maintained vehicle and clear rental conditions. The van is comfortable, reliable and suitable for short or long trips.", DE: "Proflipp Combi steht für persönlichen Service, ein technisch einwandfreies Fahrzeug und transparente Mietbedingungen. Der Kombi ist komfortabel und vielseitig einsetzbar.", HR: "Proflipp Combi nudi osobni pristup, pouzdano vozilo i jasne uvjete najma. Kombi je redovno servisiran, udoban i prilagodljiv različitim potrebama." },
    rentalIncludesTitle: { SL: "Kaj vključuje najem kombija", EN: "What Is Included in the Van Rental", DE: "Was ist in der Kombi-Vermietung enthalten", HR: "Što uključuje najam kombija" },
    rentalIncludesText: { SL: "Najem vključuje tehnično brezhiben in redno vzdrževan kombi, pripravljen za takojšnjo uporabo. Vozilo je primerno za več oseb in daljše razdalje ter omogoča udobno in varno vožnjo.", EN: "The rental includes a regularly serviced van, ready for immediate use. The vehicle offers comfort, space and a safe driving experience.", DE: "Die Vermietung umfasst einen regelmäßig gewarteten Kombi, der sofort einsatzbereit ist. Das Fahrzeug bietet Komfort, Platz und Sicherheit.", HR: "Najam uključuje tehnički ispravan i redovno održavan kombi, spreman za trenutnu upotrebu. Vozilo je prikladno za više osoba i duže udaljenosti." },
    adventuresTitle: { SL: "Kombi za potovanja, dogodke in avanture", EN: "Van for Travel, Events and Adventures", DE: "Kombi für Reisen, Events und Abenteuer", HR: "Kombi za putovanja, događaje i avanture" },
    adventuresText: { SL: "Kombi je primeren za potovanja po Sloveniji in Avstriji, športne in glasbene dogodke, snemanja, fotografiranja ter aktivne izlete v naravo. Zaradi prostornosti in udobja je odlična izbira za raznolike namene.", EN: "The van is suitable for travel in Slovenia and Austria, as well as for events, filming, photography and outdoor activities.", DE: "Der Kombi eignet sich für Reisen in Slowenien und Österreich sowie für Events, Drehs, Fotoshootings und Outdoor-Aktivitäten.", HR: "Kombi je prikladan za putovanja po Sloveniji i Austriji, sportske i glazbene događaje, snimanja, fotografiranja i aktivne izlete u prirodu." },
    features: {
      parkAnywhere: { 
        title: { SL: "Parkiraš kjerkoli", EN: "Park anywhere", DE: "Überall parken", HR: "Parkiraj bilo gdje" },
        description: { SL: "Brez kampov, brez komplikacij. Popolna svoboda.", EN: "No campsites, no complications. Complete freedom.", DE: "Keine Campingplätze, keine Komplikationen. Völlige Freiheit.", HR: "Bez kampova, bez komplikacija. Potpuna sloboda." }
      },
      idealForCouples: {
        title: { SL: "Idealno za pare", EN: "Ideal for couples", DE: "Ideal für Paare", HR: "Idealno za parove" },
        description: { SL: "Idealno za 2 osebi + dovolj prostora za opremo.", EN: "Ideal for 2 people + plenty of space for equipment.", DE: "Ideal für 2 Personen + genug Platz für Ausrüstung.", HR: "Idealno za 2 osobe + dovoljno prostora za opremu." }
      },
      forAthletes: {
        title: { SL: "Za športnike", EN: "For athletes", DE: "Für Sportler", HR: "Za sportaše" },
        description: { SL: "Prostor za kolo, smuči ali športno opremo.", EN: "Space for bike, skis or sports equipment.", DE: "Platz für Fahrrad, Ski oder Sportausrüstung.", HR: "Prostor za bicikl, skije ili sportsku opremu." }
      },
      mobileOffice: {
        title: { SL: "Mobilna pisarna", EN: "Mobile office", DE: "Mobiles Büro", HR: "Mobilni ured" },
        description: { SL: "Delaj z razgledom – digitalni nomadi dobrodošli!", EN: "Work with a view – digital nomads welcome!", DE: "Arbeiten mit Aussicht – digitale Nomaden willkommen!", HR: "Radi s pogledom – digitalni nomadi dobrodošli!" }
      },
      lowConsumption: {
        title: { SL: "Majhna poraba", EN: "Low consumption", DE: "Niedriger Verbrauch", HR: "Mala potrošnja" },
        description: { SL: "Potuj daleč, porabi malo – ekonomična vožnja.", EN: "Travel far, spend little – economical driving.", DE: "Weit reisen, wenig verbrauchen – wirtschaftliches Fahren.", HR: "Putuj daleko, troši malo – ekonomična vožnja." }
      },
      privateDiscrete: {
        title: { SL: "Diskretno & zasebno", EN: "Discreet & private", DE: "Diskret & privat", HR: "Diskretno i privatno" },
        description: { SL: "Popolna zatemnitev stekel za zasebnost.", EN: "Complete window blackout for privacy.", DE: "Vollständige Fensterverdunkelung für Privatsphäre.", HR: "Potpuno zatamnjenje stakala za privatnost." }
      },
    },
    idealFor: { SL: "Kompakten, športen in diskreten kamper je idealen za:", EN: "Compact, sporty and discreet camper is ideal for:", DE: "Kompakter, sportlicher und diskreter Camper ist ideal für:", HR: "Kompaktan, sportski i diskretan kamper je idealan za:" },
    idealForItems: {
      couples: { SL: "pare", EN: "couples", DE: "Paare", HR: "parove" },
      athletes: { SL: "športnike", EN: "athletes", DE: "Sportler", HR: "sportaše" },
      travelers: { SL: "aktivne popotnike", EN: "active travelers", DE: "aktive Reisende", HR: "aktivne putnike" },
      nomads: { SL: "digitalne nomade", EN: "digital nomads", DE: "digitale Nomaden", HR: "digitalne nomade" },
      weekends: { SL: "vikend pobege", EN: "weekend getaways", DE: "Wochenendausflüge", HR: "vikend izlete" },
    },
    noHotels: { SL: "Brez hotelov.", EN: "No hotels.", DE: "Keine Hotels.", HR: "Bez hotela." },
    noCamps: { SL: "Brez kampov.", EN: "No campsites.", DE: "Keine Campingplätze.", HR: "Bez kampova." },
    noLimits: { SL: "Brez omejitev.", EN: "No limits.", DE: "Keine Grenzen.", HR: "Bez ograničenja." },
    simplicity: { SL: "🔑 Preprostost je ključ – preprosto, praktično, svobodno", EN: "🔑 Simplicity is the key – simple, practical, free", DE: "🔑 Einfachheit ist der Schlüssel – einfach, praktisch, frei", HR: "🔑 Jednostavnost je ključ – jednostavno, praktično, slobodno" },
  },

  // KamperSection
  kamper: {
    badge: { SL: "🚐 Rent – Poletna sezona", EN: "🚐 Rent – Summer season", DE: "🚐 Mieten – Sommersaison", HR: "🚐 Najam – Ljetna sezona" },
    title: { SL: "KOMBI", EN: "COMBI", DE: "KOMBI", HR: "KOMBI" },
    titleHighlight: { SL: "KAMPER", EN: "CAMPER", DE: "CAMPER", HR: "KAMPER" },
    subtitle: { SL: "Kaj dobiš s PROFLIPP KOMBIJEM? Popolnoma opremljen kamper za nepozabne avanture!", EN: "What do you get with PROFLIPP KOMBI? Fully equipped camper for unforgettable adventures!", DE: "Was bekommst du mit PROFLIPP KOMBI? Vollausgestatteter Camper für unvergessliche Abenteuer!", HR: "Što dobivaš s PROFLIPP KOMBIJEM? Potpuno opremljen kamper za nezaboravne avanture!" },
    fullyEquipped: { SL: "✅ Popolnoma opremljen interier", EN: "✅ Fully equipped interior", DE: "✅ Vollausgestatteter Innenraum", HR: "✅ Potpuno opremljen interijer" },
    equipment: {
      sink: { SL: "Umivalnik", EN: "Sink", DE: "Waschbecken", HR: "Umivaonik" },
      fridge: { SL: "Hladilnik", EN: "Refrigerator", DE: "Kühlschrank", HR: "Hladnjak" },
      table: { SL: "Miza", EN: "Table", DE: "Tisch", HR: "Stol" },
      power: { SL: "12V električni priključki", EN: "12V power outlets", DE: "12V Stromanschlüsse", HR: "12V električni priključci" },
    },
    idealFor2: { SL: "✅ Idealno za 2 osebi + dovolj prostora za kolo ali športno opremo", EN: "✅ Ideal for 2 people + plenty of space for bike or sports equipment", DE: "✅ Ideal für 2 Personen + genug Platz für Fahrrad oder Sportausrüstung", HR: "✅ Idealno za 2 osobe + dovoljno prostora za bicikl ili sportsku opremu" },
    forAthletes: { SL: "✅ Popoln za športnike – kolesari, raziskuj, prespi v naravi", EN: "✅ Perfect for athletes – cycle, explore, sleep in nature", DE: "✅ Perfekt für Sportler – Radfahren, Erkunden, in der Natur schlafen", HR: "✅ Savršeno za sportaše – bicikliraj, istraži, prespavaj u prirodi" },
    mobileOffice: { SL: "✅ Mobilna pisarna – delaj z razgledom", EN: "✅ Mobile office – work with a view", DE: "✅ Mobiles Büro – Arbeiten mit Aussicht", HR: "✅ Mobilni ured – radi s pogledom" },
    lowFuel: { SL: "✅ Majhna poraba goriva – potuj daleč, porabi malo", EN: "✅ Low fuel consumption – travel far, spend little", DE: "✅ Niedriger Kraftstoffverbrauch – weit reisen, wenig verbrauchen", HR: "✅ Mala potrošnja goriva – putuj daleko, troši malo" },
    privacyTitle: { SL: "🌙 Zasebnost & Udobje", EN: "🌙 Privacy & Comfort", DE: "🌙 Privatsphäre & Komfort", HR: "🌙 Privatnost i udobnost" },
    privacy: {
      windshield: { SL: "Prednje pregrinjalo za vetrobransko steklo", EN: "Front windshield cover", DE: "Frontscheibenabdeckung", HR: "Prednji pokrov za vjetrobransko staklo" },
      blackout: { SL: "Vsa stekla je možno popolnoma zatemniti z roloji", EN: "All windows can be completely blacked out with blinds", DE: "Alle Fenster können mit Rollos komplett verdunkelt werden", HR: "Sva stakla se mogu potpuno zatamniti roletama" },
      discreet: { SL: "Diskretno spanje kjerkoli", EN: "Discreet sleeping anywhere", DE: "Diskretes Schlafen überall", HR: "Diskretno spavanje bilo gdje" },
      protection: { SL: "Zaščita pred soncem in radovednimi pogledi", EN: "Protection from sun and curious looks", DE: "Schutz vor Sonne und neugierigen Blicken", HR: "Zaštita od sunca i znatiželjnih pogleda" },
    },
    sportsTitle: { SL: "🎾 Brezplačno vključeno", EN: "🎾 Included for free", DE: "🎾 Kostenlos inklusive", HR: "🎾 Besplatno uključeno" },
    sports: {
      ball: { SL: "Žoga", EN: "Ball", DE: "Ball", HR: "Lopta" },
      badminton: { SL: "Badminton", EN: "Badminton", DE: "Badminton", HR: "Badminton" },
      rackets: { SL: "Loparji", EN: "Rackets", DE: "Schläger", HR: "Reketi" },
    },
    activeFun: { SL: "👉 Za aktivno zabavo na poti", EN: "👉 For active fun on the road", DE: "👉 Für aktiven Spaß unterwegs", HR: "👉 Za aktivnu zabavu na putu" },
  },

  // CombiSection
  combi: {
    badge: { SL: "Zimska sezona (november – maj)", EN: "Winter season (November – May)", DE: "Wintersaison (November – Mai)", HR: "Zimska sezona (studeni – svibanj)" },
    title: { SL: "KOMBI", EN: "COMBI", DE: "KOMBI", HR: "KOMBI" },
    titleHighlight: { SL: "5+1", EN: "5+1", DE: "5+1", HR: "5+1" },
    subtitle: { SL: "V zimskem času je naš kombi pretvorjen v udoben 5+1 sedeži prevoz za skupinske izlete, prireditve in zimske avanture.", EN: "In winter, our kombi is converted to a comfortable 5+1 seat transport for group trips, events and winter adventures.", DE: "Im Winter wird unser Kombi in einen komfortablen 5+1-Sitzer für Gruppenausflüge, Veranstaltungen und Winterabenteuer umgebaut.", HR: "Zimi se naš kombi pretvara u udoban 5+1 sjedala prijevoz za grupne izlete, događanja i zimske avanture." },
    aboutTitle: { SL: "🚐 O kombiju 5+1", EN: "🚐 About the 5+1 kombi", DE: "🚐 Über den 5+1 Kombi", HR: "🚐 O kombiju 5+1" },
    aboutText: { SL: "V zimskem obdobju, predvidoma od novembra do maja, je naš kombi opremljen s 6 udobnimi sedeži (5+1 konfiguracija). Idealen za skupinske izlete na smučišča, odhode na prireditve, koncerte ali enostavno udoben prevoz za večjo skupino prijateljev ali družino.", EN: "In winter, from November to May, our kombi is equipped with 6 comfortable seats (5+1 configuration). Ideal for group trips to ski resorts, events, concerts or simply comfortable transport for a larger group of friends or family.", DE: "Im Winter, von November bis Mai, ist unser Kombi mit 6 bequemen Sitzen (5+1-Konfiguration) ausgestattet. Ideal für Gruppenausflüge zu Skigebieten, Veranstaltungen, Konzerten oder einfach für komfortablen Transport für eine größere Gruppe von Freunden oder Familie.", HR: "Zimi, od studenog do svibnja, naš kombi je opremljen sa 6 udobnih sjedala (5+1 konfiguracija). Idealan za grupne izlete na skijališta, odlaske na događanja, koncerte ili jednostavno udoban prijevoz za veću grupu prijatelja ili obitelj." },
    perfectFor: { SL: "Popoln za:", EN: "Perfect for:", DE: "Perfekt für:", HR: "Savršeno za:" },
    uses: {
      transport: { title: { SL: "Prevoz oseb", EN: "People transport", DE: "Personentransport", HR: "Prijevoz osoba" }, description: { SL: "Do 6 potnikov udobno in varno.", EN: "Up to 6 passengers comfortably and safely.", DE: "Bis zu 6 Passagiere komfortabel und sicher.", HR: "Do 6 putnika udobno i sigurno." } },
      events: { title: { SL: "Prireditve", EN: "Events", DE: "Veranstaltungen", HR: "Događanja" }, description: { SL: "Koncerte, festivale, športne dogodke.", EN: "Concerts, festivals, sports events.", DE: "Konzerte, Festivals, Sportveranstaltungen.", HR: "Koncerti, festivali, sportski događaji." } },
      skiing: { title: { SL: "Smučanje", EN: "Skiing", DE: "Skifahren", HR: "Skijanje" }, description: { SL: "Prostor za vso zimsko opremo.", EN: "Space for all winter equipment.", DE: "Platz für alle Winterausrüstung.", HR: "Prostor za svu zimsku opremu." } },
      trips: { title: { SL: "Izleti", EN: "Trips", DE: "Ausflüge", HR: "Izleti" }, description: { SL: "Skupinska potovanja in vikend pobegi.", EN: "Group travels and weekend getaways.", DE: "Gruppenreisen und Wochenendausflüge.", HR: "Grupna putovanja i vikend izleti." } },
    },
    winterSeason: { SL: "Zimska sezona", EN: "Winter season", DE: "Wintersaison", HR: "Zimska sezona" },
    months: { SL: "Nov – Maj", EN: "Nov – May", DE: "Nov – Mai", HR: "Stu – Svi" },
    twoOptions: { SL: "💡 Isti kombi, dve možnosti! Poleti kamper za avanture, pozimi udoben prevoz za skupino.", EN: "💡 Same kombi, two options! Summer camper for adventures, winter comfortable transport for groups.", DE: "💡 Derselbe Kombi, zwei Optionen! Sommer-Camper für Abenteuer, Winter komfortabler Transport für Gruppen.", HR: "💡 Isti kombi, dvije opcije! Ljeti kamper za avanture, zimi udoban prijevoz za grupu." },
    forPrice: { SL: "Za točno ceno in razpoložljivost nam pišite na", EN: "For exact price and availability, write to us at", DE: "Für genauen Preis und Verfügbarkeit schreiben Sie uns an", HR: "Za točnu cijenu i dostupnost pišite nam na" },
  },

  // Pricing
  pricing: {
    badge: { SL: "💶 Cenik", EN: "💶 Pricing", DE: "💶 Preise", HR: "💶 Cjenik" },
    title: { SL: "Pregleden, pošten in", EN: "Clear, fair and", DE: "Übersichtlich, fair und", HR: "Pregledan, pošten i" },
    titleHighlight: { SL: "brez skritih stroškov", EN: "no hidden costs", DE: "ohne versteckte Kosten", HR: "bez skrivenih troškova" },
    subtitle: { SL: "Cena je odvisna tudi od števila kilometrov. Za točno ceno in popust nam pišite na", EN: "Price also depends on the number of kilometers. For exact price and discount, write to us at", DE: "Der Preis hängt auch von der Kilometeranzahl ab. Für genauen Preis und Rabatt schreiben Sie uns an", HR: "Cijena ovisi i o broju kilometara. Za točnu cijenu i popust pišite nam na" },
    days: { 
      short: { SL: "1–4 dni", EN: "1–4 days", DE: "1–4 Tage", HR: "1–4 dana" },
      medium: { SL: "5–7 dni", EN: "5–7 days", DE: "5–7 Tage", HR: "5–7 dana" },
      long: { SL: "8+ dni", EN: "8+ days", DE: "8+ Tage", HR: "8+ dana" },
    },
    perDay: { SL: "€ / dan", EN: "€ / day", DE: "€ / Tag", HR: "€ / dan" },
    discountNote: { SL: "dodatni popust že vključen", EN: "additional discount already included", DE: "zusätzlicher Rabatt bereits enthalten", HR: "dodatni popust već uključen" },
    mostPopular: { SL: "NAJBOLJ PRILJUBLJEN", EN: "MOST POPULAR", DE: "BELIEBTESTE", HR: "NAJPOPULARNIJE" },
    moreDays: { SL: "👉 Več dni = nižja cena na dan!", EN: "👉 More days = lower price per day!", DE: "👉 Mehr Tage = niedrigerer Tagespreis!", HR: "👉 Više dana = niža cijena po danu!" },
    includedTitle: { SL: "Vključeno v ceno", EN: "Included in price", DE: "Im Preis enthalten", HR: "Uključeno u cijenu" },
    included: {
      fullEquipment: { SL: "Polna oprema kombija", EN: "Full van equipment", DE: "Volle Fahrzeugausstattung", HR: "Puna oprema kombija" },
      blinds: { SL: "Senčila + pregrinjalo", EN: "Blinds + windshield cover", DE: "Jalousien + Frontscheibenabdeckung", HR: "Sjenila + pokrov vjetrobrana" },
      sports: { SL: "Športni rekviziti", EN: "Sports equipment", DE: "Sportausrüstung", HR: "Sportski rekviziti" },
      cleaning: { SL: "Osnovno čiščenje", EN: "Basic cleaning", DE: "Grundreinigung", HR: "Osnovno čišćenje" },
      technical: { SL: "Tehnična brezhibnost", EN: "Technical reliability", DE: "Technische Zuverlässigkeit", HR: "Tehnička ispravnost" },
    },
    extrasTitle: { SL: "Doplačila (po želji)", EN: "Extras (optional)", DE: "Extras (optional)", HR: "Doplate (opcionalno)" },
    extras: {
      delivery: { SL: "Dostava kombija: po dogovoru", EN: "Van delivery: by arrangement", DE: "Fahrzeuglieferung: nach Vereinbarung", HR: "Dostava kombija: po dogovoru" },
      extraCleaning: { SL: "Dodatno čiščenje: po potrebi", EN: "Extra cleaning: if needed", DE: "Zusätzliche Reinigung: bei Bedarf", HR: "Dodatno čišćenje: po potrebi" },
    },
    deposit: { SL: "Varščina", EN: "Deposit", DE: "Kaution", HR: "Jamčevina" },
    depositText: { SL: "Varščina po dogovoru (vrnjena ob vračilu vozila v brezhibnem stanju)", EN: "Deposit by agreement (returned when vehicle is returned in perfect condition)", DE: "Kaution nach Vereinbarung (zurückgegeben bei Rückgabe des Fahrzeugs in einwandfreiem Zustand)", HR: "Jamčevina po dogovoru (vraćena pri povratu vozila u ispravnom stanju)" },
    bookEarly: { SL: "👉 Rezerviraj pravočasno – termini se hitro zapolnijo!", EN: "👉 Book early – dates fill up quickly!", DE: "👉 Früh buchen – Termine füllen sich schnell!", HR: "👉 Rezerviraj na vrijeme – termini se brzo popune!" },
    bookNow: { SL: "Rezerviraj zdaj", EN: "Book now", DE: "Jetzt buchen", HR: "Rezerviraj sada" },
  },

  // Testimonials
  testimonials: {
    badge: { SL: "⭐ Mnenja strank", EN: "⭐ Customer reviews", DE: "⭐ Kundenbewertungen", HR: "⭐ Mišljenja kupaca" },
    title: { SL: "Kaj pravijo naši", EN: "What our", DE: "Was unsere", HR: "Što kažu naši" },
    titleHighlight: { SL: "popotniki", EN: "travelers say", DE: "Reisende sagen", HR: "putnici" },
    reviews: [
      { 
        name: "Iva & Igor", 
        text: { 
          SL: "Popolna izkušnja. Kombi je top opremljen, diskreten in zelo udoben. Spanje v naravi brez skrbi.", 
          EN: "Perfect experience. The van is well equipped, discreet and very comfortable. Sleeping in nature without worries.", 
          DE: "Perfekte Erfahrung. Der Van ist gut ausgestattet, diskret und sehr komfortabel. Schlafen in der Natur ohne Sorgen.",
          HR: "Savršeno iskustvo. Kombi je odlično opremljen, diskretan i vrlo udoban. Spavanje u prirodi bez briga." 
        } 
      },
      { 
        name: "Ana P.", 
        text: { 
          SL: "Zatemnitev stekel je game changer. Občutek zasebnosti in svobode. Definitivno ponovimo!", 
          EN: "Window blackout is a game changer. Feeling of privacy and freedom. Definitely doing it again!", 
          DE: "Die Fensterverdunkelung ist ein Game Changer. Gefühl von Privatsphäre und Freiheit. Machen wir definitiv wieder!",
          HR: "Zatamnjenje stakala je game changer. Osjećaj privatnosti i slobode. Definitivno ponavljamo!" 
        } 
      },
      { 
        name: "Luka R.", 
        text: { 
          SL: "Kot kolesar sem navdušen. Dovolj prostora za kolo, vse pripravljeno za aktiven vikend.", 
          EN: "As a cyclist, I'm thrilled. Enough space for the bike, everything ready for an active weekend.", 
          DE: "Als Radfahrer bin ich begeistert. Genug Platz für das Fahrrad, alles bereit für ein aktives Wochenende.",
          HR: "Kao biciklist, oduševljen sam. Dovoljno prostora za bicikl, sve spremno za aktivan vikend." 
        } 
      },
      { 
        name: "Nina & Tim", 
        text: { 
          SL: "Preprosto, praktično, brez kompliciranja. Točno to, kar sva iskala za mini pobeg.", 
          EN: "Simple, practical, no complications. Exactly what we were looking for a mini getaway.", 
          DE: "Einfach, praktisch, ohne Komplikationen. Genau das, was wir für einen Mini-Ausflug gesucht haben.",
          HR: "Jednostavno, praktično, bez kompliciranja. Točno to što smo tražili za mini bijeg." 
        } 
      },
      { 
        name: "David S.", 
        text: { 
          SL: "Odlična komunikacija, fer cene in res lep kombi. Priporočam vsem vanlife navdušencem.", 
          EN: "Excellent communication, fair prices and a really nice van. I recommend to all vanlife enthusiasts.", 
          DE: "Ausgezeichnete Kommunikation, faire Preise und ein wirklich schöner Van. Ich empfehle es allen Vanlife-Enthusiasten.",
          HR: "Odlična komunikacija, fer cijene i stvarno lijep kombi. Preporučam svim vanlife entuzijastima." 
        } 
      },
      { 
        name: "Žana & Mitja", 
        text: { 
          SL: "Preprost, praktičen z njim lahko greš povsod po mestih brez omejitev, prav tako tudi parkiraš kjerkoli.", 
          EN: "Simple, practical – you can go everywhere in cities without restrictions, and park anywhere.", 
          DE: "Einfach, praktisch – man kann überall in Städten ohne Einschränkungen fahren und überall parken.",
          HR: "Jednostavan, praktičan – možeš ići svuda po gradovima bez ograničenja, a isto tako i parkirati bilo gdje." 
        } 
      },
    ],
  },

  // Contact
  contact: {
    badge: { SL: "🌍 Tvoj #vanlife se začne tukaj", EN: "🌍 Your #vanlife starts here", DE: "🌍 Dein #vanlife beginnt hier", HR: "🌍 Tvoj #vanlife počinje ovdje" },
    title: { SL: "Rezervacija in kontakt", EN: "Booking and Contact", DE: "Reservierung und Kontakt", HR: "Rezervacija i kontakt" },
    titleHighlight: { SL: "Ustvari ga.", EN: "Create it.", DE: "Erschaffe ihn.", HR: "Stvori ga." },
    subtitle: { SL: "Piši zdaj in si zagotovi svoj termin! Število prostih dni je omejeno.", EN: "Write now and secure your date! Available days are limited.", DE: "Schreibe jetzt und sichere dir deinen Termin! Verfügbare Tage sind begrenzt.", HR: "Piši sada i osiguraj svoj termin! Broj slobodnih dana je ograničen." },
    email: { SL: "Email", EN: "Email", DE: "E-Mail", HR: "Email" },
    phone: { SL: "Telefon / WhatsApp", EN: "Phone / WhatsApp", DE: "Telefon / WhatsApp", HR: "Telefon / WhatsApp" },
    location: { SL: "Lokacija", EN: "Location", DE: "Standort", HR: "Lokacija" },
    country: { SL: "Slovenija", EN: "Slovenia", DE: "Slowenien", HR: "Slovenija" },
    bookToday: { SL: "Rezerviraj PROFLIPP KOMBI še danes", EN: "Book your PROFLIPP KOMBI today", DE: "Reserviere deinen PROFLIPP KOMBI noch heute", HR: "Rezerviraj PROFLIPP KOMBI već danas" },
    limitedDays: { SL: "👉 Število prostih dni je omejeno. Zagotovi si svoj termin pravočasno!", EN: "👉 Available days are limited. Secure your date in time!", DE: "👉 Verfügbare Tage sind begrenzt. Sichere dir deinen Termin rechtzeitig!", HR: "👉 Broj slobodnih dana je ograničen. Osiguraj svoj termin na vrijeme!" },
    sendInquiry: { SL: "Pošlji povpraševanje za najem kombija", EN: "Send an inquiry for van rental", DE: "Anfrage für Kombi-Miete senden", HR: "Pošalji upit za najam kombija" },
  },

  // FAQ Section
  faq: {
    title: { SL: "Pogosta vprašanja", EN: "Frequently Asked Questions", DE: "Häufig gestellte Fragen", HR: "Česta pitanja" },
    questions: {
      longTrips: {
        question: { SL: "Ali je kombi primeren za daljša potovanja?", EN: "Is the van suitable for long trips?", DE: "Ist der Kombi für längere Reisen geeignet?", HR: "Je li kombi prikladan za duža putovanja?" },
        answer: { SL: "Da, kombi je zasnovan za udobna daljša potovanja in roadtripe ter omogoča dovolj prostora za potnike in prtljago.", EN: "Yes, the van is designed for comfortable long-distance travel and road trips.", DE: "Ja, der Kombi ist für komfortable Langstrecken- und Roadtrip-Reisen ausgelegt.", HR: "Da, kombi je dizajniran za udobna duža putovanja i roadtripove te pruža dovoljno prostora za putnike i prtljagu." },
      },
      pickup: {
        question: { SL: "Kje je možen prevzem kombija?", EN: "Where is van pickup available?", DE: "Wo ist die Abholung möglich?", HR: "Gdje je moguće preuzimanje kombija?" },
        answer: { SL: "Prevzem kombija je možen po dogovoru v Sloveniji ali v Avstriji do območja Gradca, glede na termin in trajanje najema.", EN: "Pickup is available by arrangement in Slovenia or in Austria up to the Graz area.", DE: "Die Abholung ist nach Vereinbarung in Slowenien oder in Österreich bis zum Raum Graz möglich.", HR: "Preuzimanje kombija moguće je po dogovoru u Sloveniji ili u Austriji do područja Graza, ovisno o terminu i trajanju najma." },
      },
      events: {
        question: { SL: "Ali je možen najem za dogodke ali snemanja?", EN: "Is rental possible for events or productions?", DE: "Ist eine Anmietung für Events oder Drehs möglich?", HR: "Je li najam moguć za događaje ili snimanja?" },
        answer: { SL: "Da, kombi je primeren tudi za dogodke, športne prireditve, snemanja in fotografske projekte.", EN: "Yes, the van is suitable for events, filming and productions.", DE: "Ja, der Kombi eignet sich auch für Events, Drehs und Produktionen.", HR: "Da, kombi je prikladan i za događaje, sportske priredbe, snimanja i fotografske projekte." },
      },
    },
  },

  // Footer
  footer: {
    tagline: { SL: "POTUJ · UŽIVAJ · RAZISKUJ", EN: "TRAVEL · ENJOY · EXPLORE", DE: "REISEN · GENIESSEN · ENTDECKEN", HR: "PUTUJ · UŽIVAJ · ISTRAŽI" },
    description: { SL: "Tvoj športni kombi/kamper za nepozabne avanture.", EN: "Your sports kombi/camper for unforgettable adventures.", DE: "Dein Sport-Kombi/Camper für unvergessliche Abenteuer.", HR: "Tvoj sportski kombi/kamper za nezaboravne avanture." },
    navigation: { SL: "Navigacija", EN: "Navigation", DE: "Navigation", HR: "Navigacija" },
    contact: { SL: "Kontakt", EN: "Contact", DE: "Kontakt", HR: "Kontakt" },
    allRights: { SL: "Vse pravice pridržane.", EN: "All rights reserved.", DE: "Alle Rechte vorbehalten.", HR: "Sva prava pridržana." },
    simplicity: { SL: "🔑 Preprostost je ključ", EN: "🔑 Simplicity is the key", DE: "🔑 Einfachheit ist der Schlüssel", HR: "🔑 Jednostavnost je ključ" },
  },

  // ===== Landing redesign =====
  topbar: {
    alert: { SL: "Zadnji prosti termini za 2026 po akcijski ceni", EN: "Last available 2026 dates at promo price", DE: "Letzte freie Termine 2026 zum Aktionspreis", HR: "Zadnji slobodni termini za 2026. po akcijskoj cijeni" },
    altPrice: { SL: "Akcijske cene že od 60€/dan", EN: "Promo prices from just €60/day", DE: "Aktionspreise schon ab 60€/Tag", HR: "Akcijske cijene već od 60€/dan" },
    check: { SL: "Preveri termin", EN: "Check date", DE: "Termin prüfen", HR: "Provjeri termin" },
  },
  heroX: {
    badge: { SL: "Akcijske cene 2026", EN: "2026 Promo prices", DE: "Aktionspreise 2026", HR: "Akcijske cijene 2026" },
    titleA: { SL: "SVOBODA NA", EN: "FREEDOM ON", DE: "FREIHEIT AUF", HR: "SLOBODA NA" },
    titleB: { SL: "4 KOLESIH", EN: "4 WHEELS", DE: "4 RÄDERN", HR: "4 KOTAČA" },
    lead: { SL: "Najemi športni kombi kamper ali 5+1 kombi in odpotuj brez omejitev.", EN: "Rent a sporty campervan or 5+1 van and travel without limits.", DE: "Miete einen sportlichen Campervan oder 5+1 Kombi und reise ohne Grenzen.", HR: "Unajmi sportski kombi kamper ili 5+1 kombi i putuj bez ograničenja." },
    sub: { SL: "Spanje v naravi. Vikend pobegi. Roadtrip avanture. Športna potovanja. Mobilna svoboda.", EN: "Sleep in nature. Weekend getaways. Road trip adventures. Sport travels. Mobile freedom.", DE: "Schlafen in der Natur. Wochenend-Ausflüge. Roadtrip-Abenteuer. Sportreisen. Mobile Freiheit.", HR: "Spavanje u prirodi. Vikend bijegovi. Roadtrip avanture. Sportska putovanja. Mobilna sloboda." },
    book: { SL: "Rezerviraj termin", EN: "Book your dates", DE: "Termin reservieren", HR: "Rezerviraj termin" },
    checkDates: { SL: "Preveri proste datume", EN: "Check available dates", DE: "Freie Termine prüfen", HR: "Provjeri slobodne datume" },
    slogan: { SL: "POTUJ · UŽIVAJ · RAZISKUJ", EN: "TRAVEL · ENJOY · EXPLORE", DE: "REISEN · GENIESSEN · ENTDECKEN", HR: "PUTUJ · UŽIVAJ · ISTRAŽI" },
    scroll: { SL: "Scroll", EN: "Scroll", DE: "Scrollen", HR: "Scroll" },
  },
  bullets: {
    sleep2: { SL: "Spanje za 2 osebi", EN: "Sleeps 2 people", DE: "Schlafplatz für 2", HR: "Spavanje za 2 osobe" },
    seats: { SL: "5+1 sedežev", EN: "5+1 seats", DE: "5+1 Sitze", HR: "5+1 sjedala" },
    sport: { SL: "Idealno za športnike in roadtripe", EN: "Ideal for athletes and road trips", DE: "Ideal für Sportler & Roadtrips", HR: "Idealno za sportaše i roadtripove" },
    park: { SL: "Parkiraš skoraj kjerkoli", EN: "Park almost anywhere", DE: "Fast überall parken", HR: "Parkiraš gotovo bilo gdje" },
    moreDays: { SL: "Več dni = nižja cena", EN: "More days = lower price", DE: "Mehr Tage = niedrigerer Preis", HR: "Više dana = niža cijena" },
    fastBooking: { SL: "Hitra rezervacija", EN: "Fast booking", DE: "Schnelle Buchung", HR: "Brza rezervacija" },
  },
  trust: {
    direct: { SL: "Direktna rezervacija", EN: "Direct booking", DE: "Direkte Buchung", HR: "Direktna rezervacija" },
    noFees: { SL: "Brez skritih stroškov", EN: "No hidden fees", DE: "Keine versteckten Kosten", HR: "Bez skrivenih troškova" },
    fast: { SL: "Hiter odgovor", EN: "Fast reply", DE: "Schnelle Antwort", HR: "Brzi odgovor" },
    region: { SL: "Slovenija + Avstrija", EN: "Slovenia + Austria", DE: "Slowenien + Österreich", HR: "Slovenija + Austrija" },
  },
  emotional: {
    eyebrow: { SL: "Občutek svobode", EN: "Feeling of freedom", DE: "Gefühl der Freiheit", HR: "Osjećaj slobode" },
    h1: { SL: "Ne potrebuješ hotela, urnikov ali rezervacij", EN: "You don't need hotels, schedules or reservations", DE: "Du brauchst keine Hotels, Zeitpläne oder Reservierungen", HR: "Ne trebaš hotele, rasporede ni rezervacije" },
    h2: { SL: "mesece vnaprej", EN: "months in advance", DE: "Monate im Voraus", HR: "mjesecima unaprijed" },
    p1: { SL: "Vzemi svobodo v svoje roke.", EN: "Take freedom into your own hands.", DE: "Nimm die Freiheit selbst in die Hand.", HR: "Uzmi slobodu u svoje ruke." },
    p2: { SL: "Ustavi se ob jezeru. Prespi v naravi. Odpri zadnja vrata in uživaj v razgledu.", EN: "Stop by a lake. Sleep in nature. Open the back doors and enjoy the view.", DE: "Halte am See. Schlafe in der Natur. Öffne die Hecktür und genieße die Aussicht.", HR: "Zaustavi se uz jezero. Prespavaj u prirodi. Otvori stražnja vrata i uživaj u pogledu." },
    p3: { SL: "Pojdi na športni vikend, roadtrip ali pobeg iz rutine.", EN: "Go for a sports weekend, a road trip or escape from routine.", DE: "Mach ein Sport-Wochenende, einen Roadtrip oder eine Auszeit von der Routine.", HR: "Idi na sportski vikend, roadtrip ili bijeg od rutine." },
    p4a: { SL: "Ta kombi ni samo prevoz.", EN: "This van is not just transport.", DE: "Dieser Kombi ist nicht nur Transport.", HR: "Ovaj kombi nije samo prijevoz." },
    p4b: { SL: "Je občutek svobode.", EN: "It is the feeling of freedom.", DE: "Es ist das Gefühl der Freiheit.", HR: "On je osjećaj slobode." },
  },
  urgency: {
    limited: { SL: "Omejena razpoložljivost", EN: "Limited availability", DE: "Begrenzte Verfügbarkeit", HR: "Ograničena dostupnost" },
    h1: { SL: "Poletni termini 2026 se", EN: "2026 summer dates are", DE: "Sommer-Termine 2026", HR: "Ljetni termini 2026. se" },
    h2: { SL: "hitro polnijo", EN: "filling up fast", DE: "füllen sich schnell", HR: "brzo popunjavaju" },
    text: { SL: "Najbolj iskani vikendi in poletni termini so omejeni. Veliko gostov rezervira več mesecev vnaprej. Rezerviraj svoj termin pravočasno in izkoristi akcijske cene.", EN: "The most wanted weekends and summer dates are limited. Many guests book months in advance. Reserve your date in time and grab the promo prices.", DE: "Die beliebtesten Wochenenden und Sommer-Termine sind begrenzt. Viele Gäste buchen Monate im Voraus. Sichere dir deinen Termin rechtzeitig zum Aktionspreis.", HR: "Najtraženiji vikendi i ljetni termini su ograničeni. Mnogi gosti rezerviraju mjesecima unaprijed. Rezerviraj svoj termin na vrijeme i iskoristi akcijske cijene." },
    s1: { SL: "Vikendov že rezerviranih", EN: "Weekends already booked", DE: "Wochenenden schon gebucht", HR: "Vikenda već rezervirano" },
    s2: { SL: "Zadnji prosti termini", EN: "Last available dates", DE: "Letzte freie Termine", HR: "Zadnji slobodni termini" },
    s3: { SL: "Akcijska cena / dan", EN: "Promo price / day", DE: "Aktionspreis / Tag", HR: "Akcijska cijena / dan" },
    book: { SL: "Rezerviraj zdaj", EN: "Book now", DE: "Jetzt buchen", HR: "Rezerviraj sada" },
    fast: { SL: "Hiter odgovor v nekaj urah", EN: "Fast reply within hours", DE: "Schnelle Antwort innerhalb weniger Stunden", HR: "Brz odgovor u nekoliko sati" },
  },
  pricingX: {
    eyebrow: { SL: "Cenik 2026", EN: "Pricing 2026", DE: "Preise 2026", HR: "Cjenik 2026" },
    h1: { SL: "Akcijske cene", EN: "Promo prices", DE: "Aktionspreise", HR: "Akcijske cijene" },
    sub: { SL: "Več dni najema = nižja cena na dan", EN: "More rental days = lower price per day", DE: "Mehr Miettage = niedrigerer Tagespreis", HR: "Više dana najma = niža cijena po danu" },
    regular: { SL: "Redna cena:", EN: "Regular price:", DE: "Regulärer Preis:", HR: "Redovna cijena:" },
    promoChip: { SL: "Akcijske cene že od 60€ / dan", EN: "Promo prices from just €60 / day", DE: "Aktionspreise schon ab 60€ / Tag", HR: "Akcijske cijene već od 60€ / dan" },
    days1: { SL: "1–4 dni", EN: "1–4 days", DE: "1–4 Tage", HR: "1–4 dana" },
    days2: { SL: "5–7 dni", EN: "5–7 days", DE: "5–7 Tage", HR: "5–7 dana" },
    days3: { SL: "8+ dni", EN: "8+ days", DE: "8+ Tage", HR: "8+ dana" },
    note1: { SL: "Krajši izleti in vikendi", EN: "Short trips and weekends", DE: "Kurztrips und Wochenenden", HR: "Kraći izleti i vikendi" },
    note2: { SL: "Najbolj izbrano", EN: "Most chosen", DE: "Am häufigsten gewählt", HR: "Najbiraniji" },
    note3: { SL: "Možnost daljšega najema po dogovoru.", EN: "Longer rental possible by arrangement.", DE: "Längere Miete nach Absprache möglich.", HR: "Duži najam moguć po dogovoru." },
    popularBadge: { SL: "Najbolj izbrano", EN: "Most chosen", DE: "Am beliebtesten", HR: "Najbiraniji" },
    perDay: { SL: "/ dan", EN: "/ day", DE: "/ Tag", HR: "/ dan" },
    inc1: { SL: "Polna oprema", EN: "Full equipment", DE: "Volle Ausstattung", HR: "Puna oprema" },
    inc2: { SL: "Zatemnjena stekla", EN: "Tinted windows", DE: "Getönte Scheiben", HR: "Zatamnjena stakla" },
    inc3: { SL: "Hitra rezervacija", EN: "Fast booking", DE: "Schnelle Buchung", HR: "Brza rezervacija" },
    inc4: { SL: "Brez skritih stroškov", EN: "No hidden fees", DE: "Keine versteckten Kosten", HR: "Bez skrivenih troškova" },
    cta: { SL: "Preveri termin", EN: "Check availability", DE: "Termin prüfen", HR: "Provjeri termin" },
  },
  whyx: {
    eyebrow: { SL: "Zakaj ravno ta kombi", EN: "Why this van", DE: "Warum genau dieser Kombi", HR: "Zašto baš ovaj kombi" },
    h1: { SL: "Zakaj ljudje izberejo", EN: "Why people choose", DE: "Warum Menschen", HR: "Zašto ljudi biraju" },
    h2: { SL: "ta kombi?", EN: "this van?", DE: "diesen Kombi wählen?", HR: "ovaj kombi?" },
    f: {
      sport: { t: { SL: "Idealen za športnike", EN: "Ideal for athletes", DE: "Ideal für Sportler", HR: "Idealan za sportaše" }, x: { SL: "Prostor za kolo, smuči, opremo.", EN: "Space for bike, skis, gear.", DE: "Platz für Fahrrad, Ski, Ausrüstung.", HR: "Prostor za bicikl, skije, opremu." } },
      sleep: { t: { SL: "Spanje v naravi", EN: "Sleep in nature", DE: "Schlafen in der Natur", HR: "Spavanje u prirodi" }, x: { SL: "Diskretno, udobno, kjerkoli.", EN: "Discreet, comfy, anywhere.", DE: "Diskret, bequem, überall.", HR: "Diskretno, udobno, bilo gdje." } },
      hotels: { t: { SL: "Brez dragih hotelov", EN: "No expensive hotels", DE: "Keine teuren Hotels", HR: "Bez skupih hotela" }, x: { SL: "Prihrani in potuj več.", EN: "Save and travel more.", DE: "Spare und reise mehr.", HR: "Uštedi i putuj više." } },
      free: { t: { SL: "Popolna svoboda potovanja", EN: "Total travel freedom", DE: "Volle Reisefreiheit", HR: "Potpuna sloboda putovanja" }, x: { SL: "Brez urnikov in omejitev.", EN: "No schedules, no limits.", DE: "Keine Zeitpläne, keine Grenzen.", HR: "Bez rasporeda i ograničenja." } },
      park: { t: { SL: "Enostavno parkiranje", EN: "Easy parking", DE: "Einfach parken", HR: "Lako parkiranje" }, x: { SL: "Kompakten, parkiraš povsod.", EN: "Compact, park anywhere.", DE: "Kompakt, überall parken.", HR: "Kompaktan, parkiraj svuda." } },
      office: { t: { SL: "Mobilna pisarna z razgledom", EN: "Mobile office with a view", DE: "Mobiles Büro mit Aussicht", HR: "Mobilni ured s pogledom" }, x: { SL: "Delaj od koderkoli.", EN: "Work from anywhere.", DE: "Arbeite von überall.", HR: "Radi odakle želiš." } },
      road: { t: { SL: "Roadtrip brez omejitev", EN: "Road trip without limits", DE: "Roadtrip ohne Grenzen", HR: "Roadtrip bez ograničenja" }, x: { SL: "Slovenija, Avstrija in dlje.", EN: "Slovenia, Austria and beyond.", DE: "Slowenien, Österreich und mehr.", HR: "Slovenija, Austrija i dalje." } },
      practical: { t: { SL: "Praktičen in udoben", EN: "Practical and comfortable", DE: "Praktisch und komfortabel", HR: "Praktičan i udoban" }, x: { SL: "Vse na pravem mestu.", EN: "Everything in its place.", DE: "Alles am richtigen Platz.", HR: "Sve na pravom mjestu." } },
      weekend: { t: { SL: "Odličen za vikend pobeg", EN: "Great for weekend getaways", DE: "Super für Wochenend-Trips", HR: "Sjajan za vikend bijeg" }, x: { SL: "Petek zvečer – nazaj v ponedeljek.", EN: "Friday evening – back on Monday.", DE: "Freitagabend – zurück am Montag.", HR: "Petak navečer – natrag u ponedjeljak." } },
      active: { t: { SL: "Popoln za aktivni stil", EN: "Perfect for active lifestyle", DE: "Perfekt für aktiven Lebensstil", HR: "Savršen za aktivni stil" }, x: { SL: "Športniki, surferji, kolesarji.", EN: "Athletes, surfers, cyclists.", DE: "Sportler, Surfer, Radfahrer.", HR: "Sportaši, surferi, biciklisti." } },
    },
  },
  psych: {
    eyebrow: { SL: "Iskreno povedano", EN: "Honestly speaking", DE: "Ehrlich gesagt", HR: "Iskreno rečeno" },
    h1: { SL: "Večina ljudi vedno čaka na", EN: "Most people are always waiting for", DE: "Die meisten warten immer auf", HR: "Većina ljudi uvijek čeka" },
    one: { SL: '"enkrat".', EN: '"someday".', DE: '"irgendwann".', HR: '"jednom".' },
    a1: { SL: "Enkrat bom šel na roadtrip.", EN: "Someday I'll go on a road trip.", DE: "Irgendwann mache ich einen Roadtrip.", HR: "Jednom ću otići na roadtrip." },
    a2: { SL: "Enkrat si bom vzel čas zase.", EN: "Someday I'll take time for myself.", DE: "Irgendwann nehme ich mir Zeit für mich.", HR: "Jednom ću uzeti vrijeme za sebe." },
    a3: { SL: "Enkrat bom šel raziskovat.", EN: "Someday I'll go explore.", DE: "Irgendwann gehe ich auf Entdeckung.", HR: "Jednom ću otići istraživati." },
    a4: { SL: "Enkrat bom pobegnil iz rutine.", EN: "Someday I'll escape the routine.", DE: "Irgendwann fliehe ich der Routine.", HR: "Jednom ću pobjeći iz rutine." },
    b1: { SL: "Potem pa mine sezona.", EN: "And then the season passes.", DE: "Und dann ist die Saison vorbei.", HR: "A onda prođe sezona." },
    b2: { SL: "Mine poletje.", EN: "Summer is gone.", DE: "Der Sommer ist vorbei.", HR: "Prođe ljeto." },
    b3: { SL: "Minejo vikendi.", EN: "Weekends pass.", DE: "Wochenenden vergehen.", HR: "Prođu vikendi." },
    c1: { SL: "Najlepši trenutki niso planirani popolno.", EN: "The best moments aren't perfectly planned.", DE: "Die schönsten Momente sind nicht perfekt geplant.", HR: "Najljepši trenuci nisu savršeno isplanirani." },
    c2: { SL: "Najlepši trenutki se zgodijo, ko greš.", EN: "The best moments happen when you go.", DE: "Die schönsten Momente passieren, wenn du losfährst.", HR: "Najljepši trenuci se dogode kad kreneš." },
    cta: { SL: "Rezerviraj svojo avanturo", EN: "Book your adventure", DE: "Buche dein Abenteuer", HR: "Rezerviraj svoju avanturu" },
  },
  galleryX: {
    eyebrow: { SL: "Galerija", EN: "Gallery", DE: "Galerie", HR: "Galerija" },
    h1: { SL: "Občutek", EN: "The feeling of", DE: "Das Gefühl von", HR: "Osjećaj" },
    h2: { SL: "vanlife", EN: "vanlife", DE: "vanlife", HR: "vanlife" },
    sub: { SL: "Roadtripi, sončni zahodi, gore in jezera – takšne so naše poti.", EN: "Road trips, sunsets, mountains and lakes – these are our journeys.", DE: "Roadtrips, Sonnenuntergänge, Berge und Seen – das sind unsere Reisen.", HR: "Roadtripovi, zalasci sunca, planine i jezera – takva su naša putovanja." },
  },
  testimX: {
    eyebrow: { SL: "Mnenja", EN: "Reviews", DE: "Bewertungen", HR: "Mišljenja" },
    h1: { SL: "Izkušnje", EN: "Experiences of", DE: "Erfahrungen unserer", HR: "Iskustva" },
    h2: { SL: "najemnikov", EN: "renters", DE: "Mieter", HR: "najmoprimaca" },
    sub: { SL: "Veliko zadovoljnih najemnikov iz Slovenije in Avstrije.", EN: "Many happy renters from Slovenia and Austria.", DE: "Viele zufriedene Mieter aus Slowenien und Österreich.", HR: "Mnogo zadovoljnih najmoprimaca iz Slovenije i Austrije." },
    r1: { SL: "Odlična izkušnja. Kombi je praktičen, udoben in idealen za spontane izlete.", EN: "Great experience. The van is practical, comfortable and ideal for spontaneous trips.", DE: "Tolle Erfahrung. Der Kombi ist praktisch, komfortabel und ideal für spontane Trips.", HR: "Odlično iskustvo. Kombi je praktičan, udoban i idealan za spontane izlete." },
    r2: { SL: "Veliko boljša izkušnja kot klasičen hotel. Spanje v naravi je nekaj posebnega.", EN: "Much better than a classic hotel. Sleeping in nature is something special.", DE: "Viel besser als ein klassisches Hotel. Schlafen in der Natur ist etwas Besonderes.", HR: "Mnogo bolje od klasičnog hotela. Spavanje u prirodi je nešto posebno." },
    r3: { SL: "Popoln za športne vikende in roadtrip potovanja. Vse je bilo pripravljeno.", EN: "Perfect for sport weekends and road trips. Everything was ready.", DE: "Perfekt für Sport-Wochenenden und Roadtrips. Alles war vorbereitet.", HR: "Savršen za sportske vikende i roadtripove. Sve je bilo spremno." },
    r4: { SL: "Občutek svobode je nekaj posebnega. Definitivno spet.", EN: "The feeling of freedom is special. Definitely again.", DE: "Das Freiheitsgefühl ist besonders. Definitiv wieder.", HR: "Osjećaj slobode je poseban. Definitivno opet." },
    r5: { SL: "Hiter odgovor, jasni pogoji, top kombi. Priporočam vsem.", EN: "Fast reply, clear terms, top van. Recommended to everyone.", DE: "Schnelle Antwort, klare Bedingungen, top Kombi. Klare Empfehlung.", HR: "Brz odgovor, jasni uvjeti, top kombi. Preporučam svima." },
    r6: { SL: "Vikend pobeg v hribe – kombi je idealen za par s športno opremo.", EN: "Weekend escape to the mountains – ideal van for a couple with sports gear.", DE: "Wochenend-Trip in die Berge – idealer Kombi für ein Paar mit Sportausrüstung.", HR: "Vikend bijeg u planine – idealan kombi za par sa sportskom opremom." },
  },
  faqX: {
    eyebrow: { SL: "FAQ", EN: "FAQ", DE: "FAQ", HR: "FAQ" },
    h1: { SL: "Pogosta", EN: "Frequently asked", DE: "Häufige", HR: "Česta" },
    h2: { SL: "vprašanja", EN: "questions", DE: "Fragen", HR: "pitanja" },
    intro: { SL: "POTUJ · UŽIVAJ · RAZISKUJ — Preprostost je ključ.", EN: "TRAVEL · ENJOY · EXPLORE — Simplicity is the Key.", DE: "REISEN · GENIESSEN · ENTDECKEN — Einfachheit ist der Schlüssel.", HR: "PUTUJ · UŽIVAJ · ISTRAŽI — Jednostavnost je ključ." },
    q1: { SL: "Kako poteka rezervacija?", EN: "How does booking work?", DE: "Wie funktioniert die Buchung?", HR: "Kako ide rezervacija?" },
    a1: { SL: "Pošlješ povpraševanje preko obrazca ali nas pokličeš. V nekaj urah ti pošljemo potrditev, navodila in lokacijo prevzema.", EN: "Send an inquiry via the form or call us. Within hours we send confirmation, instructions and pickup location.", DE: "Sende eine Anfrage über das Formular oder ruf uns an. Innerhalb weniger Stunden erhältst du Bestätigung, Anleitung und Abholort.", HR: "Pošalji upit preko obrasca ili nas nazovi. U par sati šaljemo potvrdu, upute i lokaciju preuzimanja." },
    q2: { SL: "Kje lahko prevzamem kombi?", EN: "Where can I pick up the van?", DE: "Wo kann ich den Kombi abholen?", HR: "Gdje mogu preuzeti kombi?" },
    a2: { SL: "Prevzem je v Mariboru, po dogovoru tudi v drugih krajih po Sloveniji ali ob avtocestnih izvozih.", EN: "Pickup is in Maribor, by arrangement also at other locations in Slovenia or near highway exits.", DE: "Abholung in Maribor, nach Absprache auch an anderen Orten in Slowenien oder an Autobahnausfahrten.", HR: "Preuzimanje je u Mariboru, po dogovoru i drugdje u Sloveniji ili kod autocestnih izlaza." },
    q3: { SL: "Ali je možen najem za več dni?", EN: "Can I rent for several days?", DE: "Ist eine mehrtägige Miete möglich?", HR: "Je li moguć višednevni najam?" },
    a3: { SL: "Seveda – več dni kot najameš, nižja je cena na dan. Možna je tudi dolgoročna rezervacija po dogovoru.", EN: "Of course – more days you rent, lower the daily price. Long-term rental possible by arrangement.", DE: "Natürlich – mehr Tage = niedrigerer Tagespreis. Auch langfristige Miete nach Absprache möglich.", HR: "Naravno – više dana = niža dnevna cijena. Dugoročni najam moguć po dogovoru." },
    q4: { SL: "Koliko oseb lahko spi v kombiju?", EN: "How many people can sleep in the van?", DE: "Wie viele Personen können im Kombi schlafen?", HR: "Koliko osoba može spavati u kombiju?" },
    a4: { SL: "Udobno za 2 osebi v kamper konfiguraciji. Za prevoz pa do 5+1 sedežev.", EN: "Comfortable for 2 in camper mode. For transport up to 5+1 seats.", DE: "Komfortabel für 2 Personen im Camper-Modus. Für Transport bis zu 5+1 Sitze.", HR: "Udobno za 2 osobe u kamper konfiguraciji. Za prijevoz do 5+1 sjedala." },
    q5: { SL: "Ali je kombi primeren za športno opremo?", EN: "Is the van suitable for sports equipment?", DE: "Ist der Kombi für Sportausrüstung geeignet?", HR: "Je li kombi prikladan za sportsku opremu?" },
    a5: { SL: "Da – prostor je optimiziran za kolesa, smuči, surfe in drugo opremo.", EN: "Yes – the space is optimized for bikes, skis, surfboards and other gear.", DE: "Ja – der Raum ist optimiert für Fahrräder, Ski, Surfbretter und mehr.", HR: "Da – prostor je optimiziran za bicikle, skije, daske i drugu opremu." },
    q6: { SL: "Ali lahko potujem tudi v tujino?", EN: "Can I travel abroad?", DE: "Darf ich auch ins Ausland fahren?", HR: "Mogu li putovati u inozemstvo?" },
    a6: { SL: "Da, potovanja po Avstriji, Hrvaški in Italiji so dovoljena. Za druge države nas vprašaj.", EN: "Yes, travel in Austria, Croatia and Italy is allowed. Ask us for other countries.", DE: "Ja, Reisen in Österreich, Kroatien und Italien sind erlaubt. Für andere Länder bitte anfragen.", HR: "Da, putovanja po Austriji, Hrvatskoj i Italiji su dopuštena. Za druge zemlje nas pitaj." },
    q7: { SL: "Kako hitro dobim odgovor?", EN: "How fast do I get a reply?", DE: "Wie schnell bekomme ich Antwort?", HR: "Koliko brzo dobivam odgovor?" },
    a7: { SL: "Običajno odgovorimo v nekaj urah, najkasneje v 24 urah.", EN: "We usually reply within hours, no later than 24h.", DE: "Wir antworten meist innerhalb weniger Stunden, spätestens in 24h.", HR: "Obično odgovaramo u par sati, najkasnije u 24h." },
    q8: { SL: "Kaj je vključeno v ceno?", EN: "What's included in the price?", DE: "Was ist im Preis enthalten?", HR: "Što je uključeno u cijenu?" },
    a8: { SL: "Tehnično brezhibno vozilo, popolna oprema kamperja, čiščenje, zatemnjena stekla in osnovna športna oprema.", EN: "Technically perfect vehicle, full camper equipment, cleaning, tinted windows and basic sports gear.", DE: "Technisch einwandfreies Fahrzeug, volle Camper-Ausstattung, Reinigung, getönte Scheiben und Sportausrüstung.", HR: "Tehnički ispravno vozilo, puna oprema kampera, čišćenje, zatamnjena stakla i osnovna sportska oprema." },
  },
  finalCta: {
    eyebrow: { SL: "Zadnji klic", EN: "Last call", DE: "Letzter Aufruf", HR: "Posljednji poziv" },
    h1: { SL: "NE ČAKAJ NA", EN: "DON'T WAIT FOR", DE: "WARTE NICHT AUF", HR: "NE ČEKAJ NA" },
    h2: { SL: '"ENKRAT"', EN: '"SOMEDAY"', DE: '"IRGENDWANN"', HR: '"JEDNOM"' },
    l1: { SL: "Vzemi dopust.", EN: "Take a break.", DE: "Nimm dir frei.", HR: "Uzmi odmor." },
    l2: { SL: "Vzemi vikend.", EN: "Take the weekend.", DE: "Nimm dir das Wochenende.", HR: "Uzmi vikend." },
    l3: { SL: "Vzemi svobodo.", EN: "Take the freedom.", DE: "Nimm dir die Freiheit.", HR: "Uzmi slobodu." },
    sub: { SL: "Rezerviraj svoj termin zdaj.", EN: "Book your dates now.", DE: "Reserviere jetzt deinen Termin.", HR: "Rezerviraj svoj termin sada." },
    book: { SL: "Rezerviraj termin", EN: "Book your dates", DE: "Termin reservieren", HR: "Rezerviraj termin" },
    inquiry: { SL: "Pošlji povpraševanje", EN: "Send an inquiry", DE: "Anfrage senden", HR: "Pošalji upit" },
  },
  floating: {
    book: { SL: "Rezerviraj zdaj", EN: "Book now", DE: "Jetzt buchen", HR: "Rezerviraj sada" },
  },
  footerX: {
    desc: { SL: "Tvoj športni kombi za roadtripe, vikend pobege in spanje v naravi.", EN: "Your sports van for road trips, weekend getaways and sleeping in nature.", DE: "Dein Sport-Kombi für Roadtrips, Wochenend-Trips und Schlafen in der Natur.", HR: "Tvoj sportski kombi za roadtripove, vikend bijegove i spavanje u prirodi." },
    quickLinks: { SL: "Hitre povezave", EN: "Quick links", DE: "Schnelllinks", HR: "Brze poveznice" },
    legal: { SL: "Pravno", EN: "Legal", DE: "Rechtliches", HR: "Pravno" },
    contact: { SL: "Kontakt", EN: "Contact", DE: "Kontakt", HR: "Kontakt" },
    home: { SL: "Domov", EN: "Home", DE: "Startseite", HR: "Početna" },
    pricing: { SL: "Cenik", EN: "Pricing", DE: "Preise", HR: "Cjenik" },
    reviews: { SL: "Mnenja", EN: "Reviews", DE: "Bewertungen", HR: "Recenzije" },
    blog: { SL: "Blog", EN: "Blog", DE: "Blog", HR: "Blog" },
    terms: { SL: "Pogoji najema", EN: "Rental terms", DE: "Mietbedingungen", HR: "Uvjeti najma" },
    privacy: { SL: "Zasebnost", EN: "Privacy", DE: "Datenschutz", HR: "Privatnost" },
    cookies: { SL: "Piškotki", EN: "Cookies", DE: "Cookies", HR: "Kolačići" },
    rights: { SL: "Vse pravice pridržane.", EN: "All rights reserved.", DE: "Alle Rechte vorbehalten.", HR: "Sva prava pridržana." },
  },

  // ===== Blog =====
  blog: {
    nav: { SL: "Blog", EN: "Blog", DE: "Blog", HR: "Blog" },
    backHome: { SL: "← Nazaj na domačo stran", EN: "← Back to home", DE: "← Zurück zur Startseite", HR: "← Natrag na početnu" },
    heroEyebrow: { SL: "Blog & Stories", EN: "Blog & Stories", DE: "Blog & Stories", HR: "Blog & Priče" },
    heroTitle: { SL: "POTUJ · UŽIVAJ · RAZISKUJ", EN: "TRAVEL · ENJOY · EXPLORE", DE: "REISEN · GENIESSEN · ENTDECKEN", HR: "PUTUJ · UŽIVAJ · ISTRAŽI" },
    heroSub: { SL: "Zgodbe, nasveti in navdih za tvojo naslednjo avanturo s PROFLIPP KOMBI KAMPER.", EN: "Stories, tips and inspiration for your next adventure with PROFLIPP KOMBI KAMPER.", DE: "Geschichten, Tipps und Inspiration für dein nächstes Abenteuer mit PROFLIPP KOMBI KAMPER.", HR: "Priče, savjeti i inspiracija za tvoju sljedeću avanturu s PROFLIPP KOMBI KAMPER." },
    simplicity: { SL: "Preprostost je ključ.", EN: "Simplicity is the Key.", DE: "Einfachheit ist der Schlüssel.", HR: "Jednostavnost je ključ." },
    micro1: { SL: "Travel light. Explore more.", EN: "Travel light. Explore more.", DE: "Travel light. Explore more.", HR: "Travel light. Explore more." },
    micro2: { SL: "Freedom without limits.", EN: "Freedom without limits.", DE: "Freedom without limits.", HR: "Freedom without limits." },
    micro3: { SL: "Small camper. Big adventure.", EN: "Small camper. Big adventure.", DE: "Small camper. Big adventure.", HR: "Small camper. Big adventure." },
    micro4: { SL: "Park anywhere. Explore everything.", EN: "Park anywhere. Explore everything.", DE: "Park anywhere. Explore everything.", HR: "Park anywhere. Explore everything." },
    micro5: { SL: "More experiences. Less complications.", EN: "More experiences. Less complications.", DE: "More experiences. Less complications.", HR: "More experiences. Less complications." },
    readMore: { SL: "Preberi članek", EN: "Read article", DE: "Artikel lesen", HR: "Pročitaj članak" },
    block1Title: { SL: "TRAVEL — ENJOY — EXPLORE", EN: "TRAVEL — ENJOY — EXPLORE", DE: "TRAVEL — ENJOY — EXPLORE", HR: "TRAVEL — ENJOY — EXPLORE" },
    block1Sub: { SL: "Odkrij svobodo s kompaktnim PROFLIPP KOMBI KAMPER.", EN: "Discover freedom with the compact PROFLIPP KOMBI KAMPER.", DE: "Entdecke Freiheit mit dem kompakten PROFLIPP KOMBI KAMPER.", HR: "Otkrij slobodu s kompaktnim PROFLIPP KOMBI KAMPER." },
    block1Btn: { SL: "Rezerviraj termin", EN: "Book your dates", DE: "Termin reservieren", HR: "Rezerviraj termin" },
    block2Title: { SL: "Simplicity is the Key!", EN: "Simplicity is the Key!", DE: "Simplicity is the Key!", HR: "Simplicity is the Key!" },
    block2Sub: { SL: "Brez stresa. Brez prevelikega kamperja. Samo svoboda in avantura.", EN: "No stress. No oversized camper. Just freedom and adventure.", DE: "Kein Stress. Kein überdimensionierter Camper. Nur Freiheit und Abenteuer.", HR: "Bez stresa. Bez prevelikog kampera. Samo sloboda i avantura." },
    block2Btn: { SL: "Preveri proste termine", EN: "Check available dates", DE: "Freie Termine prüfen", HR: "Provjeri slobodne termine" },
    block3Title: { SL: "Your next adventure starts now.", EN: "Your next adventure starts now.", DE: "Your next adventure starts now.", HR: "Your next adventure starts now." },
    block3Sub: { SL: "Majhen športni kamper za velike zgodbe.", EN: "A small sports camper for big stories.", DE: "Ein kleiner Sport-Camper für große Geschichten.", HR: "Mali sportski kamper za velike priče." },
    block3Btn: { SL: "Pošlji povpraševanje", EN: "Send an inquiry", DE: "Anfrage senden", HR: "Pošalji upit" },
    whyTitle: { SL: "Why people love compact campers", EN: "Why people love compact campers", DE: "Why people love compact campers", HR: "Why people love compact campers" },
    why: {
      fuel: { SL: "Nižja poraba goriva", EN: "Lower fuel consumption", DE: "Niedrigerer Kraftstoffverbrauch", HR: "Niža potrošnja goriva" },
      park: { SL: "Lažje parkiranje", EN: "Easier parking", DE: "Einfacheres Parken", HR: "Lakše parkiranje" },
      fast: { SL: "Hitrejše potovanje", EN: "Faster travel", DE: "Schnelleres Reisen", HR: "Brže putovanje" },
      flex: { SL: "Več fleksibilnosti", EN: "More flexibility", DE: "Mehr Flexibilität", HR: "Više fleksibilnosti" },
      hidden: { SL: "Skriti camper videz", EN: "Hidden camper look", DE: "Unauffälliges Camper-Design", HR: "Skriveni izgled kampera" },
      cities: { SL: "Idealen za mesta in naravo", EN: "Ideal for cities and nature", DE: "Ideal für Städte und Natur", HR: "Idealan za gradove i prirodu" },
      sport: { SL: "Športen občutek vožnje", EN: "Sporty driving feeling", DE: "Sportliches Fahrgefühl", HR: "Sportski osjećaj vožnje" },
      weekend: { SL: "Praktično za vikend pobege", EN: "Practical for weekend trips", DE: "Praktisch für Wochenend-Trips", HR: "Praktično za vikend bijegove" },
    },
    socialProof: { SL: "Ljubitelji avantur, fotografi, kolesarji in pari že izbirajo PROFLIPP KOMBI KAMPER za spontane roadtripe po Sloveniji, Avstriji, Hrvaški in Alpah.", EN: "Adventure lovers, photographers, cyclists and couples already choose PROFLIPP KOMBI KAMPER for spontaneous road trips across Slovenia, Austria, Croatia and the Alps.", DE: "Abenteuerliebhaber, Fotografen, Radfahrer und Paare wählen bereits PROFLIPP KOMBI KAMPER für spontane Roadtrips durch Slowenien, Österreich, Kroatien und die Alpen.", HR: "Ljubitelji avantura, fotografi, biciklisti i parovi već biraju PROFLIPP KOMBI KAMPER za spontane roadtripove po Sloveniji, Austriji, Hrvatskoj i Alpama." },
    articleEnd1: { SL: "PROFLIPP KOMBI KAMPER ni samo prevoz.", EN: "PROFLIPP KOMBI KAMPER is not just transport.", DE: "PROFLIPP KOMBI KAMPER ist nicht nur Transport.", HR: "PROFLIPP KOMBI KAMPER nije samo prijevoz." },
    articleEnd2: { SL: "Je občutek svobode, spontanosti in avanture.", EN: "It's a feeling of freedom, spontaneity and adventure.", DE: "Es ist ein Gefühl von Freiheit, Spontaneität und Abenteuer.", HR: "Osjećaj je slobode, spontanosti i avanture." },
    articleEndCta: { SL: "Rezerviraj svoj termin še danes.", EN: "Book your date today.", DE: "Reserviere deinen Termin noch heute.", HR: "Rezerviraj svoj termin već danas." },
    articles: {
      a1: {
        title: { SL: "Roadtrip po slovenskih jezerih s kombi kamperjem", EN: "Road trip across Slovenian lakes with a campervan", DE: "Roadtrip zu Sloweniens Seen mit dem Campervan", HR: "Roadtrip po slovenskim jezerima s kombi kamperom" },
        excerpt: { SL: "Bohinj, Bled, Cerknica – trije dnevi, tri jezera, neskončna svoboda.", EN: "Bohinj, Bled, Cerknica – three days, three lakes, endless freedom.", DE: "Bohinj, Bled, Cerknica – drei Tage, drei Seen, grenzenlose Freiheit.", HR: "Bohinj, Bled, Cerknica – tri dana, tri jezera, beskrajna sloboda." },
        body: { SL: "Začneš v petek po službi. Ne planiraš preveč. Vržeš kolo zadaj, vzameš kavo in pelješ proti Bohinju. Ko sonce zaide nad jezerom, odpreš zadnja vrata kombija in skuhaš večerjo. To je preprostost. To je svoboda. Drugi dan se odpelješ na Bled, tretji v Cerknico. Brez hotelov, brez urnikov, brez kompromisov.", EN: "You leave Friday after work. Don't plan too much. Throw the bike in the back, grab a coffee and head for Bohinj. When the sun sets over the lake, open the back doors and cook dinner. That's simplicity. That's freedom. Day two — Bled. Day three — Cerknica. No hotels, no schedules, no compromises.", DE: "Freitag nach der Arbeit. Nicht zu viel planen. Fahrrad nach hinten, Kaffee, los Richtung Bohinj. Wenn die Sonne über dem See untergeht, Hecktür öffnen und kochen. Das ist Einfachheit. Das ist Freiheit. Tag zwei — Bled. Tag drei — Cerknica. Keine Hotels, keine Pläne, keine Kompromisse.", HR: "Krećeš u petak nakon posla. Ne planiraš previše. Bacaš bicikl pozada, uzimaš kavu i kreneš prema Bohinju. Kad sunce zađe nad jezerom, otvoriš stražnja vrata i skuhaš večeru. To je jednostavnost. To je sloboda. Drugi dan — Bled. Treći — Cerknica. Bez hotela, bez rasporeda, bez kompromisa." },
      },
      a2: {
        title: { SL: "Zakaj kompakten kamper premaga klasične avtodome", EN: "Why a compact camper beats classic motorhomes", DE: "Warum ein kompakter Camper klassische Wohnmobile schlägt", HR: "Zašto kompaktni kamper pobjeđuje klasične autodomove" },
        excerpt: { SL: "Nižja poraba, lažje parkiranje, več dostopnih cest. Manj je več.", EN: "Lower consumption, easier parking, more accessible roads. Less is more.", DE: "Weniger Verbrauch, einfacher parken, mehr Zugang zu Straßen. Weniger ist mehr.", HR: "Manja potrošnja, lakše parkiranje, više dostupnih cesta. Manje je više." },
        body: { SL: "Veliki avtodomi izgledajo impresivno, dokler ne iščeš parkirišča v Piranu, Portorožu ali alpski vasici. PROFLIPP KOMBI KAMPER je velik dovolj za udobje dveh oseb in majhen dovolj, da te pelje povsod. Travel light. Explore more.", EN: "Big motorhomes look impressive — until you try to park in Piran, Portorož or an Alpine village. PROFLIPP KOMBI KAMPER is big enough for two and small enough to take you anywhere. Travel light. Explore more.", DE: "Große Wohnmobile sehen beeindruckend aus — bis du in Piran, Portorož oder einem Alpendorf parken willst. PROFLIPP KOMBI KAMPER ist groß genug für zwei und klein genug, um überall hinzukommen. Travel light. Explore more.", HR: "Veliki autodomi izgledaju impresivno — sve dok ne pokušaš parkirati u Piranu, Portorožu ili alpskom selu. PROFLIPP KOMBI KAMPER je dovoljno velik za dvoje i dovoljno malen da te odvede svuda. Travel light. Explore more." },
      },
      a3: {
        title: { SL: "Vikend pobeg z kolesom: kombi + MTB = popolna kombinacija", EN: "Weekend escape with your bike: van + MTB = perfect combo", DE: "Wochenend-Trip mit dem Bike: Kombi + MTB = perfekte Kombi", HR: "Vikend bijeg s biciklom: kombi + MTB = savršena kombinacija" },
        excerpt: { SL: "Spakiraj kolo, pojdi v Pohorje ali Karavanke. Spi tam, kjer si končal trail.", EN: "Pack the bike, head to Pohorje or Karavanke. Sleep where the trail ends.", DE: "Bike einpacken, ab zum Pohorje oder Karawanken. Schlafen, wo der Trail endet.", HR: "Spakiraj bicikl, kreni na Pohorje ili Karavanke. Spavaj tamo gdje završi staza." },
        body: { SL: "Kolesarji vedo: najlepši trenutki se zgodijo, ko ne hitiš nazaj v hotel. Pelješ trail. Skuhaš kavo. Ležeš v kombi. Naslednje jutro vstaneš in spet pelješ. Small camper. Big adventure.", EN: "Cyclists know: the best moments happen when you don't rush back to a hotel. Ride the trail. Brew coffee. Sleep in the van. Wake up and ride again. Small camper. Big adventure.", DE: "Radfahrer wissen: Die besten Momente passieren, wenn du nicht zurück ins Hotel hetzt. Trail fahren. Kaffee kochen. Im Kombi schlafen. Aufwachen und weiterfahren. Small camper. Big adventure.", HR: "Biciklisti znaju: najljepši trenuci se događaju kad ne juriš natrag u hotel. Voziš stazu. Skuhaš kavu. Spavaš u kombiju. Ujutro voziš opet. Small camper. Big adventure." },
      },
    },
  },
};

export const t = (key: string, lang: Language): string => {
  const keys = key.split(".");
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }
  if (typeof value === "object" && value[lang]) {
    return value[lang];
  }
  return typeof value === "string" ? value : key;
};
