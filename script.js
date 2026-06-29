const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

const translations = {
  "Početna": "Home",
  "Usluge": "Services",
  "Cenovnik": "Pricing",
  "Kontakt": "Contact",
  "Otvori navigaciju": "Open navigation",
  "Glavna navigacija": "Main navigation",
  "Designeca početna": "Designeca home",
  "Izbor jezika": "Language selection",
  "Mockupovi izrađenih sajtova": "Website mockups",
  "Izdvojeni projekti": "Selected projects",
  "Horizontalni prikaz mockupova": "Horizontal mockup preview",
  "Mockup sajta Abraxas Cattery": "Abraxas Cattery website mockup",
  "Mockup sajta Designeca 1": "Designeca website mockup 1",
  "Mockup sajta Designeca 2": "Designeca website mockup 2",
  "Mockup sajta Designeca 3": "Designeca website mockup 3",
  "Mockup sajta Designeca 4": "Designeca website mockup 4",
  "Mockup showcase sajta Apetit": "Apetit showcase website mockup",
  "Vidi showcase sajt Apetit": "View Apetit showcase website",
  "Mockup sajta": "Website mockup",
  "Vidi sajt": "View website",
  "Vidi sajt Abraxas Cattery": "View Abraxas Cattery website",
  "Vidi sajt Dental Grupa BiH": "View Dental Grupa BiH website",
  "Vidi sajt EduZone": "View EduZone website",
  "Vidi sajt Mons Medical": "View Mons Medical website",
  "Prednosti Designeca usluge": "Benefits of Designeca services",
  "Dizajn po meri": "Custom design",
  "Responzivna izrada": "Responsive development",
  "Jasna struktura": "Clear structure",
  "Podrška nakon objave": "Post-launch support",
  "Pogledajte usluge": "View services",
  "Kontaktirajte nas": "Contact us",
  "Pošaljite upit": "Send inquiry",
  "Zatvori formu": "Close form",
  "Recite nam kako možemo da vam pomognemo.": "Tell us how we can help.",
  "Ostavite email, a mi ćemo vam se javiti sa sledećim koracima.": "Leave your email and we will get back to you with the next steps.",
  "Broj telefona": "Phone number",
  "(opciono)": "(optional)",
  "Ukratko opišite šta vam je potrebno.": "Briefly describe what you need.",
  "Upit je spreman za slanje.": "Your inquiry is ready to send.",
  "Saznajte više": "Learn more",
  "Uskoro u ponudi": "Coming soon",
  "O studiju": "About the studio",
  "Radimo sa biznisima kojima je potreban sajt koji izgleda ozbiljno i radi jasno.": "We work with businesses that need a website that looks professional and communicates clearly.",
  "Designeca je mali digitalni studio specijalizovan za izradu web sajtova, landing stranica i digitalnih prezentacija za tržište Srbije i Balkana.": "Designeca is a small digital studio focused on websites, landing pages and digital presentations for Serbia and the Balkans.",
  "Pomažemo preduzetnicima, lokalima, uslužnim delatnostima i organizatorima događaja da dobiju pregledno, moderno i profesionalno online prisustvo bez nepotrebne kompleksnosti.": "We help entrepreneurs, local businesses, service providers and event organizers build a clear, modern and professional online presence without unnecessary complexity.",
  "Zašto se izdvajamo": "Why we stand out",
  "Sajt izrađen namenski, ne iz šablona.": "A purpose-built website, not a template.",
  "Bez gotovih tema": "No ready-made themes",
  "Ne koristimo podrazumevane teme, generičke šablone niti brz pristup izrade sajta samo da bi što pre bio online.": "We do not use default themes, generic templates or a rushed website process just to get something online quickly.",
  "Gradimo od početka": "Built from the ground up",
  "Svaki sajt planiramo i izrađujemo od nule, prema vašem biznisu, ponudi, publici i cilju koji sajt treba da ispuni.": "Every website is planned and built from scratch around your business, offer, audience and the goal the website needs to achieve.",
  "Temeljna priprema": "Thorough preparation",
  "Pre programiranja definišemo strukturu i vizuelni pravac, šaljemo dizajn na proveru i tek nakon odobrenja krećemo u izradu.": "Before development, we define the structure and visual direction, send the design for review and start building only after approval.",
  "Tri ponude koje pokrivaju najčešće potrebe klijenata": "Three offers that cover the most common client needs",
  "Sajtovi za biznise": "Business websites",
  "Sajtovi za biznis": "Business websites",
  "Poslovni sajtovi za firme, lokale, ordinacije, salone, restorane i druge delatnosti.": "Business websites for companies, venues, clinics, salons, restaurants and other industries.",
  "Lični sajtovi": "Personal websites",
  "Lični sajt": "Personal website",
  "Pregledni sajtovi za trenere, edukatore, fotografe, konsultante i lične brendove.": "Clear websites for trainers, educators, photographers, consultants and personal brands.",
  "Interaktivne pozivnice": "Interactive invitations",
  "Interaktivna pozivnica": "Interactive invitation",
  "Uskoro u ponudi: digitalne pozivnice za venčanja, rođendane, mature, proslave i posebne događaje.": "Coming soon: digital invitations for weddings, birthdays, graduations, celebrations and special events.",
  "Proces rada": "Work process",
  "Od ideje do objavljenog sajta": "From idea to published website",
  "Razumevanje cilja": "Understanding the goal",
  "Definišemo kome se obraćate, šta nudite i šta posetilac treba da uradi.": "We define who you are speaking to, what you offer and what the visitor should do next.",
  "Struktura i početni dizajn": "Structure and initial design",
  "Planiramo sekcije, hijerarhiju informacija i pripremamo vizuelni pravac sajta.": "We plan the sections, information hierarchy and visual direction of the website.",
  "Verifikacija dizajna": "Design approval",
  "Pre programiranja šaljemo dizajn na pregled, slušamo vaše komentare i usklađujemo pravac.": "Before development, we send the design for review, listen to your feedback and align the direction.",
  "Programiranje i objava": "Development and launch",
  "Nakon prihvaćenog dizajna krećemo sa izradom web sajta, testiranjem i pripremom za objavu.": "After the design is approved, we start building the website, testing it and preparing it for launch.",
  "Spremni za novi web sajt?": "Ready for a new website?",
  "Hajde da napravimo online prezentaciju koja jasno predstavlja vaš biznis.": "Let’s build an online presentation that clearly represents your business.",
  "Dizajniramo i izrađujemo moderne web sajtove za male biznise, usluge i događaje.": "We design and build modern websites for small businesses, services and events.",
  "Navigacija": "Navigation",
  "© 2026 Designeca. Sva prava zadržana.": "© 2026 Designeca. All rights reserved.",
  "Sva prava zadržana.": "All rights reserved.",
  "Web usluge za biznise, usluge, kampanje i posebne događaje.": "Web services for businesses, services, campaigns and special events.",
  "Dizajniramo i izrađujemo digitalna rešenja koja imaju urednu strukturu, prepoznatljiv vizuelni pravac i jasan put ka kontaktu.": "We design and build digital solutions with a clear structure, recognizable visual direction and a direct path to contact.",
  "Ponuda": "Offer",
  "Glavne usluge koje izrađujemo": "Main services we create",
  "Sajtovi za prezentaciju usluga": "Service presentation websites",
  "Landing stranice": "Landing pages",
  "Stranice za kampanje, ponude i promocije sa jasnim tokom i jakim pozivom na akciju.": "Pages for campaigns, offers and promotions with a clear flow and strong call to action.",
  "Redizajn postojećih sajtova": "Website redesign",
  "Osvežavamo strukturu, vizuelni identitet i korisničko iskustvo postojećih web sajtova.": "We refresh the structure, visual identity and user experience of existing websites.",
  "Održavanje sajtova": "Website maintenance",
  "Pomažemo oko izmena sadržaja, tehničkih podešavanja i kontinuiranog unapređenja.": "We help with content updates, technical setup and ongoing improvements.",
  "Niste sigurni šta vam treba?": "Not sure what you need?",
  "Pošaljite nam kratak opis, a mi ćemo predložiti najpraktičniji format.": "Send us a short description and we will suggest the most practical format.",
  "Orijentacione cene za najčešće tipove projekata.": "Indicative prices for the most common project types.",
  "Svaki projekat procenjujemo prema obimu, sadržaju, rokovima i funkcionalnostima. Cene služe kao početni okvir za razgovor.": "Each project is estimated based on scope, content, timeline and functionality. Prices are a starting point for discussion.",
  "Biznis": "Business",
  "od 350 EUR": "from 350 EUR",
  "Za lokale, firme, ordinacije, salone i uslužne delatnosti kojima treba profesionalna prezentacija.": "For venues, companies, clinics, salons and service businesses that need a professional presentation.",
  "Struktura sajta": "Website structure",
  "Responzivan dizajn": "Responsive design",
  "Kontakt i mapa": "Contact and map",
  "Osnovna SEO priprema": "Basic SEO setup",
  "Lični brend": "Personal brand",
  "od 300 EUR": "from 300 EUR",
  "Za trenere, edukatore, fotografe, konsultante i stručnjake koji žele jasnu online prezentaciju.": "For trainers, educators, photographers, consultants and experts who want a clear online presentation.",
  "Predstavljanje usluga": "Service presentation",
  "Biografija i rezultati": "Bio and results",
  "Paketi ili ponuda": "Packages or offer",
  "Kontakt tok": "Contact flow",
  "Događaji": "Events",
  "Uskoro": "Coming soon",
  "Interaktivne pozivnice za venčanja, rođendane, mature i posebne događaje biće uskoro u ponudi.": "Interactive invitations for weddings, birthdays, graduations and special events will be available soon.",
  "Datum i lokacija": "Date and location",
  "Mapa i galerija": "Map and gallery",
  "RSVP priprema": "RSVP setup",
  "Odbrojavanje po potrebi": "Countdown if needed",
  "Napomena": "Note",
  "Konačna cena zavisi od detalja, ali okvir brzo definišemo.": "The final price depends on the details, but we define the range quickly.",
  "Šta utiče na cenu": "What affects the price",
  "Broj strana, količina sadržaja, forma, galerija, dodatne animacije, rok i priprema tekstova.": "Number of pages, amount of content, forms, gallery, extra animations, deadline and copy preparation.",
  "Kako krećemo": "How we start",
  "Pošaljete nam kratak opis, mi predložimo strukturu, okvirnu cenu i početni dizajn. Programiranje počinje tek nakon što pregledate i prihvatite dizajn.": "You send us a short description, and we suggest the structure, estimated price and initial design. Development starts only after you review and approve the design.",
  "Plaćanje na rate": "Payment in installments",
  "Postoji mogućnost plaćanja u dve rate: 50% pre početka programiranja, nakon prihvaćenog početnog dizajna, i 50% po završetku sajta.": "Payment can be split into two installments: 50% before development begins, after the initial design is approved, and 50% when the website is completed.",
  "Domen i hosting": "Domain and hosting",
  "Klijent može sam obezbediti domen i hosting, ili to možemo uraditi mi. Okvirni godišnji trošak za domen i hosting je oko 50 EUR.": "The client can provide the domain and hosting independently, or we can handle it. The estimated yearly cost for domain and hosting is around 50 EUR.",
  "Održavanje sajta": "Website maintenance",
  "Održavanje sajta je opciono. Mesečno održavanje, manje izmene i osnovna tehnička podrška koštaju 30 EUR mesečno.": "Website maintenance is optional. Monthly maintenance, small updates and basic technical support cost 30 EUR per month.",
  "Recite nam šta želite da napravimo, a mi ćemo predložiti jasan sledeći korak.": "Tell us what you want to build, and we will suggest a clear next step.",
  "Radimo sa malim biznisima, preduzetnicima, uslužnim delatnostima i organizatorima događaja koji žele profesionalan web nastup.": "We work with small businesses, entrepreneurs, service providers and event organizers who want a professional web presence.",
  "Ime i prezime": "Full name",
  "Email": "Email",
  "Tip projekta": "Project type",
  "Sajt za biznis": "Business website",
  "Lični sajt": "Personal website",
  "Poruka": "Message",
  "Vaše ime": "Your name",
  "Ukratko opišite projekat, rok i šta vam je najvažnije.": "Briefly describe the project, deadline and what matters most to you.",
  "Forma je pripremljena za povezivanje sa backend-om ili email servisom.": "The form is prepared for connection to a backend or email service.",
  "Direktan kontakt": "Direct contact",
  "Hajde da razjasnimo šta vam je potrebno.": "Let’s clarify what you need.",
  "Pošaljite nam osnovne informacije o biznisu, usluzi ili događaju. Pomažemo da se ideja pretvori u pregledan sajt koji klijenti mogu lako da razumeju.": "Send us the basic information about your business, service or event. We help turn the idea into a clear website that clients can easily understand.",
  "Poslovni sajt koji jasno predstavlja ko ste, šta radite i kako klijenti dolaze do vas.": "A business website that clearly presents who you are, what you do and how clients reach you.",
  "Izrađujemo web sajtove za firme, male biznise, lokale, odgajivačnice, ordinacije, salone, restorane i druge delatnosti kojima je potreban profesionalan online nastup.": "We build websites for companies, small businesses, venues, catteries, clinics, salons, restaurants and other industries that need a professional online presence.",
  "Kome je namenjeno": "Who it is for",
  "Za biznise koji žele da budu lako pronađeni i ozbiljno predstavljeni.": "For businesses that want to be easy to find and professionally presented.",
  "Radimo sa lokalima, uslužnim delatnostima, stručnim praksama, malim firmama, porodičnim biznisima i brendovima koji žele da zamene improvizovano online prisustvo jasnom web prezentacijom.": "We work with venues, service businesses, professional practices, small companies, family businesses and brands that want to replace an improvised online presence with a clear web presentation.",
  "Restorani, kafići, saloni i ordinacije": "Restaurants, cafes, salons and clinics",
  "Agencije, radionice i lokalne firme": "Agencies, workshops and local companies",
  "Odgajivačnice, klubovi i specijalizovane delatnosti": "Catteries, clubs and specialized businesses",
  "Preduzetnici kojima je potreban kredibilan nastup": "Entrepreneurs who need a credible presentation",
  "Šta uključuje": "What is included",
  "Sve što je potrebno za pregledan poslovni sajt": "Everything needed for a clear business website",
  "Planiramo stranice i sekcije tako da posetilac brzo razume ponudu.": "We plan pages and sections so visitors quickly understand the offer.",
  "Sajt prilagođavamo telefonu, tabletu i desktop ekranu.": "We adapt the website for phone, tablet and desktop screens.",
  "Postavljamo jasne kontakt opcije, upite, lokaciju i pozive na akciju.": "We set up clear contact options, inquiries, location and calls to action.",
  "Prednosti": "Benefits",
  "Poslovni sajt pomaže da poverenje počne pre prvog poziva.": "A business website helps trust begin before the first call.",
  "Profesionalan utisak": "Professional impression",
  "Klijenti dobijaju jasnu sliku o vašem radu, prostoru, uslugama i načinu kontakta.": "Clients get a clear picture of your work, space, services and contact options.",
  "Bolja dostupnost": "Better availability",
  "Važne informacije su dostupne u svakom trenutku, bez prepiski i dodatnih objašnjenja.": "Important information is available at any time, without extra messages and explanations.",
  "Jasniji upiti": "Clearer inquiries",
  "Dobro strukturisan sajt usmerava posetioce ka pozivu, poruci ili rezervaciji.": "A well-structured website guides visitors toward a call, message or booking.",
  "Moguće sekcije": "Possible sections",
  "Primeri sekcija poslovnog sajta": "Examples of business website sections",
  "O nama": "About us",
  "Galerija": "Gallery",
  "Recenzije": "Reviews",
  "Lokacija": "Location",
  "Kontakt forma": "Contact form",
  "Pokrenimo poslovni sajt": "Let’s start a business website",
  "Pošaljite nam nekoliko informacija o biznisu, a mi ćemo predložiti strukturu sajta.": "Send us a few details about the business and we will suggest the website structure.",
  "Prezentacija usluga": "Service presentation",
  "Sajt koji vaše usluge pretvara u jasnu, preglednu i uverljivu online ponudu.": "A website that turns your services into a clear, organized and convincing online offer.",
  "Dizajniramo sajtove za lične brendove, trenere, fotografe, edukatore, konsultante, kozmetičke salone, stomatološke ordinacije i sve koji žele da predstave svoje usluge.": "We design websites for personal brands, trainers, photographers, educators, consultants, beauty salons, dental clinics and everyone who wants to present their services.",
  "Za stručnjake i uslužne biznise kojima je važno poverenje.": "For experts and service businesses where trust matters.",
  "Pomažemo da se usluge predstave tako da posetilac razume vrednost, proces rada i sledeći korak.": "We help present services so visitors understand the value, work process and next step.",
  "Treneri, edukatori i konsultanti": "Trainers, educators and consultants",
  "Fotografi, kreativci i lični brendovi": "Photographers, creatives and personal brands",
  "Kozmetički saloni i wellness usluge": "Beauty salons and wellness services",
  "Stomatološke ordinacije i stručne prakse": "Dental clinics and professional practices",
  "Kako radimo": "How we work",
  "Usluge predstavljamo kroz strukturu koja vodi ka upitu": "We present services through a structure that leads to inquiry",
  "Jasna hijerarhija": "Clear hierarchy",
  "Najvažnije informacije stavljamo na mesta gde posetilac očekuje odgovor.": "We place the most important information where visitors expect answers.",
  "Dokaz poverenja": "Proof of trust",
  "Dodajemo rezultate, iskustva klijenata, fotografije rada i profesionalne detalje.": "We add results, client experiences, work photos and professional details.",
  "Poziv na akciju": "Call to action",
  "Planiramo kontakt tok za zakazivanje, konsultacije, poziv ili direktan upit.": "We plan the contact flow for booking, consultations, calls or direct inquiries.",
  "Sekcije sajta": "Website sections",
  "Sajt može da sadrži sve što klijentu treba za odluku.": "The website can include everything a client needs to make a decision.",
  "Hero ponuda": "Hero offer",
  "Paketi": "Packages",
  "Rezultati": "Results",
  "Dobar servisni sajt smanjuje nejasnoće i povećava kvalitet upita.": "A strong service website reduces confusion and improves inquiry quality.",
  "Bolje razumevanje ponude": "Better understanding of the offer",
  "Klijenti vide šta radite, kome pomažete i po čemu se razlikujete.": "Clients see what you do, who you help and what makes you different.",
  "Manje ponavljanja u komunikaciji": "Less repetition in communication",
  "Česta pitanja, proces i uslovi nalaze se na jednom mestu.": "Frequently asked questions, process and terms are in one place.",
  "Profesionalniji nastup": "More professional presence",
  "Vizuelni sistem i tekstovi predstavljaju vas kao ozbiljan brend.": "The visual system and copy present you as a serious brand.",
  "Predstavite usluge jasno": "Present your services clearly",
  "Napravimo sajt koji klijentima olakšava odluku da vas kontaktiraju.": "Let’s build a website that makes it easier for clients to contact you.",
  "Zakažite razgovor": "Book a call",
  "Digitalne pozivnice": "Digital invitations",
  "Interaktivne pozivnice koje događaj predstavljaju elegantno, praktično i moderno.": "Interactive invitations that present an event elegantly, practically and modernly.",
  "Izrađujemo digitalne pozivnice za venčanja, rođendane, proslave, mature i događaje, sa sadržajem koji gosti mogu lako da otvore na telefonu.": "We create digital invitations for weddings, birthdays, celebrations, graduations and events, with content guests can easily open on their phones.",
  "Venčanja": "Weddings",
  "Elegantna pozivnica sa rasporedom, lokacijama, galerijom i potvrdom dolaska.": "An elegant invitation with schedule, locations, gallery and attendance confirmation.",
  "Rođendani i proslave": "Birthdays and celebrations",
  "Razigrana ili premium digitalna pozivnica usklađena sa stilom događaja.": "A playful or premium digital invitation aligned with the event style.",
  "Mature i događaji": "Graduations and events",
  "Praktična stranica sa svim informacijama koje gosti treba da imaju na jednom mestu.": "A practical page with all information guests need in one place.",
  "Sadržaj pozivnice": "Invitation content",
  "Digitalna pozivnica može da bude mnogo više od slike sa tekstom.": "A digital invitation can be much more than an image with text.",
  "Datum i vreme događaja": "Event date and time",
  "Mapa lokacije i uputstva za dolazak": "Location map and arrival instructions",
  "Galerija fotografija": "Photo gallery",
  "RSVP forma za potvrdu dolaska": "RSVP form for attendance confirmation",
  "Odbrojavanje do događaja": "Countdown to the event",
  "Muzika ili animacije po potrebi": "Music or animations if needed",
  "Primer digitalne pozivnice": "Digital invitation example",
  "Pozivnica": "Invitation",
  "Subota, 18:00": "Saturday, 18:00",
  "Potvrdi dolazak": "Confirm attendance",
  "Lako deljenje": "Easy sharing",
  "Pozivnica se šalje linkom preko poruke, emaila ili društvenih mreža.": "The invitation is shared as a link through messages, email or social media.",
  "Uvek ažurne informacije": "Always up-to-date information",
  "Izmene lokacije, vremena ili dodatnih napomena mogu se uneti bez štampe.": "Changes to location, time or additional notes can be made without printing.",
  "Praktičan odgovor gostiju": "Practical guest response",
  "RSVP tok pomaže da brže prikupite potvrde dolaska.": "The RSVP flow helps collect attendance confirmations faster.",
  "Primer strukture": "Structure example",
  "Kako može da izgleda tok pozivnice": "How the invitation flow can look",
  "Naslov i uvod": "Title and intro",
  "Imena, povod, datum i kratak emotivan uvod.": "Names, occasion, date and a short emotional intro.",
  "Detalji događaja": "Event details",
  "Vreme, lokacija, mapa i dodatne napomene.": "Time, location, map and additional notes.",
  "Galerija i atmosfera": "Gallery and atmosphere",
  "Fotografije, animacije ili muzika po potrebi.": "Photos, animations or music if needed.",
  "Forma za potvrdu dolaska i poruku organizatorima.": "A form for attendance confirmation and a message to the organizers.",
  "Planirate događaj?": "Planning an event?",
  "Izrađujemo pozivnicu koja izgleda svečano, učitava se brzo i lako se deli.": "We create an invitation that looks festive, loads quickly and is easy to share.",
  "Portfolio": "Portfolio",
  "Izdvojeni projekti i koncepti koje koristimo za predstavljanje različitih tipova biznisa.": "Selected projects and concepts we use to present different types of businesses.",
  "Svaki projekat posmatramo kroz cilj klijenta, jasnoću poruke i način na koji posetilac dolazi do kontakta.": "We view every project through the client’s goal, message clarity and the way visitors reach contact.",
  "Web prezentacija": "Web presentation",
  "Elegantna prezentacija odgajivačnice sa fokusom na poverenje, informacije o rasama, galeriju i jednostavan kontakt.": "An elegant cattery presentation focused on trust, breed information, gallery and simple contact.",
  "Pogledaj projekat": "View project",
  "Pogledaj projekat Abraxas Cattery": "View Abraxas Cattery project",
  "Pogledaj projekat EduZone": "View EduZone project",
  "Pogledaj showcase projekat": "View showcase project",
  "Edukativni brend": "Educational brand",
  "Strukturisan sajt za edukativni program, sa jasnim prikazom kurseva, benefita, načina rada i prijave.": "A structured website for an educational program, with a clear overview of courses, benefits, process and application.",
  "Showcase koncept": "Showcase concept",
  "Showcase projekat": "Showcase project",
  "Premium koncept za prezentaciju usluga, namenjen brendovima koji žele snažan prvi utisak i pregledan kontakt tok.": "A premium service presentation concept for brands that want a strong first impression and clear contact flow.",
  "Moderni web sajtovi za biznise, usluge i posebne događaje": "Modern websites for businesses, services and special events",
  "Dizajniramo i izrađujemo moderne, responzivne i pregledne web sajtove koji pomažu klijentima da se profesionalno predstave online.": "We design and build modern, responsive and clear websites that help clients present themselves professionally online."
};

const pageMeta = {
  "index.html": {
    enTitle: "Designeca | Modern websites for businesses and events",
    srTitle: "Designeca | Moderni web sajtovi za biznise i događaje",
    enDescription: "Designeca designs and builds modern, responsive websites, landing pages and digital solutions for small businesses, services and events.",
    srDescription: "Designeca dizajnira i izrađuje moderne, responzivne web sajtove, landing stranice i digitalna rešenja za male biznise, usluge i događaje."
  },
  "usluge.html": {
    enTitle: "Services | Designeca",
    srTitle: "Usluge | Designeca",
    enDescription: "Designeca services: business websites, service presentations, landing pages, redesign and website maintenance. Interactive invitations coming soon.",
    srDescription: "Designeca usluge: sajtovi za biznis, prezentacija usluga, landing stranice, redizajn i održavanje sajtova. Interaktivne pozivnice uskoro u ponudi."
  },
  "cenovnik.html": {
    enTitle: "Pricing | Designeca",
    srTitle: "Cenovnik | Designeca",
    enDescription: "Indicative Designeca pricing for business websites, personal websites, installment payments, domain, hosting and maintenance.",
    srDescription: "Orijentacioni cenovnik Designeca studija za sajtove za biznise, lične sajtove, plaćanje na rate, domen, hosting i održavanje."
  },
  "kontakt.html": {
    enTitle: "Contact | Designeca",
    srTitle: "Kontakt | Designeca",
    enDescription: "Contact Designeca digital studio for a modern website, landing page, service presentation or digital invitation.",
    srDescription: "Kontaktirajte Designeca digitalni studio za izradu modernog web sajta, landing stranice, prezentacije usluga ili interaktivne pozivnice."
  },
  "sajtovi-za-biznis.html": {
    enTitle: "Business Websites | Designeca",
    srTitle: "Sajtovi za biznis | Designeca",
    enDescription: "We build modern business websites for companies, venues, clinics, salons, restaurants, catteries and other industries in Serbia and the region.",
    srDescription: "Izrađujemo moderne poslovne sajtove za firme, lokale, ordinacije, salone, restorane, odgajivačnice i druge delatnosti u Srbiji i regionu."
  },
  "prezentacija-usluga.html": {
    enTitle: "Service Presentation Websites | Designeca",
    srTitle: "Sajtovi za prezentaciju usluga | Designeca",
    enDescription: "We build websites for personal brands, trainers, photographers, educators, consultants, salons and clinics that want to present their services clearly.",
    srDescription: "Izrađujemo sajtove za lične brendove, trenere, fotografe, edukatore, konsultante, salone i ordinacije koji žele jasno da predstave svoje usluge."
  },
  "interaktivne-pozivnice.html": {
    enTitle: "Interactive Invitations | Designeca",
    srTitle: "Interaktivne pozivnice | Designeca",
    enDescription: "We design digital and interactive invitations for weddings, birthdays, celebrations, graduations and events with RSVP forms, maps and countdowns.",
    srDescription: "Dizajniramo digitalne i interaktivne pozivnice za venčanja, rođendane, proslave, mature i događaje sa RSVP formom, mapom i odbrojavanjem."
  },
  "portfolio.html": {
    enTitle: "Portfolio | Designeca",
    srTitle: "Portfolio | Designeca",
    enDescription: "View selected Designeca projects: Abraxas Cattery, EduZone and a showcase project for modern service presentation.",
    srDescription: "Pogledajte izdvojene Designeca projekte: Abraxas Cattery, EduZone i showcase projekat za modernu prezentaciju usluga."
  }
};

const reverseTranslations = Object.fromEntries(
  Object.entries(translations).map(([sr, en]) => [en, sr])
);

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const translateValue = (value, lang) => {
  const normalized = normalizeText(value);
  if (!normalized) {
    return value;
  }

  if (lang === "en" && translations[normalized]) {
    return value.replace(normalized, translations[normalized]);
  }

  if (lang === "sr" && reverseTranslations[normalized]) {
    return value.replace(normalized, reverseTranslations[normalized]);
  }

  return value;
};

const translateTextNodes = (root, lang) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.parentElement || ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return normalizeText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    node.nodeValue = translateValue(node.nodeValue, lang);
  });
};

const applyPageMeta = (lang) => {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const meta = pageMeta[page];

  if (!meta) {
    return;
  }

  document.title = lang === "en" ? meta.enTitle : meta.srTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", lang === "en" ? meta.enDescription : meta.srDescription);
  }
};

const translateAttributes = (lang) => {
  document.querySelectorAll("[placeholder], [aria-label], [content], [alt], [title]").forEach((element) => {
    ["placeholder", "aria-label", "content", "alt", "title"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, translateValue(element.getAttribute(attribute), lang));
      }
    });
  });
};

const setLanguage = (lang) => {
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".language-switch button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  translateTextNodes(document.body, lang);
  translateAttributes(lang);
  applyPageMeta(lang);
  localStorage.setItem("designeca-language", lang);
};

const createLanguageSwitch = () => {
  if (!navMenu || document.querySelector(".language-switch")) {
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switch";
  switcher.setAttribute("aria-label", "Izbor jezika");
  switcher.innerHTML = `
    <button type="button" data-lang="sr" aria-pressed="true">SR</button>
    <button type="button" data-lang="en" aria-pressed="false">EN</button>
  `;

  switcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  navMenu.after(switcher);
};

// Mobile navigation keeps the static pages usable on small screens.
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

createLanguageSwitch();
setLanguage(localStorage.getItem("designeca-language") === "en" ? "en" : "sr");

const revealItems = document.querySelectorAll(".reveal");

// Reveal sections only once, with a safe fallback for older browsers.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const contactForm = document.querySelector(".contact-form");

// The form is static for now, so submit feedback stays client-side.
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.classList.add("submitted");
    const button = contactForm.querySelector("button");
    if (button) {
      const message = "Upit je spreman za slanje";
      button.textContent = document.documentElement.lang === "en"
        ? "Inquiry is ready to send"
        : message;
    }
  });
}

const inquiryModal = document.querySelector("#inquiryModal");
const inquiryForm = document.querySelector(".inquiry-form");
const inquiryTriggers = document.querySelectorAll(".inquiry-trigger");

if (inquiryModal && inquiryForm && inquiryTriggers.length) {
  const closeButton = inquiryModal.querySelector(".inquiry-modal-close");
  const projectInput = inquiryForm.querySelector("#inquiryProject");
  const emailInput = inquiryForm.querySelector("#inquiryEmail");
  const status = inquiryForm.querySelector(".inquiry-status");

  const closeInquiryModal = () => {
    inquiryModal.close();
    document.body.classList.remove("modal-open");
  };

  inquiryTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      inquiryForm.reset();
      inquiryForm.classList.remove("submitted");
      status.textContent = document.documentElement.lang === "en"
        ? "The form is ready to be connected to a backend or email service."
        : "Forma je pripremljena za povezivanje sa backend-om ili email servisom.";
      projectInput.value = trigger.dataset.project || "";
      inquiryModal.showModal();
      document.body.classList.add("modal-open");
      window.setTimeout(() => emailInput.focus(), 0);
    });
  });

  closeButton.addEventListener("click", closeInquiryModal);
  inquiryModal.addEventListener("click", (event) => {
    if (event.target === inquiryModal) {
      closeInquiryModal();
    }
  });
  inquiryModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) {
      return;
    }

    inquiryForm.classList.add("submitted");
    status.textContent = document.documentElement.lang === "en"
      ? "Your inquiry is ready to send."
      : "Upit je spreman za slanje.";
  });
}

const mockupSlider = document.querySelector(".mockup-slider");

if (mockupSlider) {
  const slides = Array.from(mockupSlider.querySelectorAll(".mockup-slide"));
  let isDragging = false;
  let didDrag = false;
  let startX = 0;
  let activeIndex = 0;

  const getPreviousIndex = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNextIndex = () => (activeIndex + 1) % slides.length;

  const renderCarousel = () => {
    slides.forEach((slide) => {
      slide.classList.remove("prev", "active", "next");
      const projectLink = slide.querySelector(".mockup-project-link");
      if (projectLink) {
        projectLink.setAttribute("tabindex", "-1");
        projectLink.setAttribute("aria-hidden", "true");
      }
    });

    slides[getPreviousIndex()].classList.add("prev");
    slides[activeIndex].classList.add("active");
    slides[getNextIndex()].classList.add("next");

    const activeProjectLink = slides[activeIndex].querySelector(".mockup-project-link");
    if (activeProjectLink) {
      activeProjectLink.removeAttribute("tabindex");
      activeProjectLink.removeAttribute("aria-hidden");
    }
  };

  const moveCarousel = (direction) => {
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    renderCarousel();
  };

  mockupSlider.addEventListener("pointerdown", (event) => {
    isDragging = true;
    didDrag = false;
    startX = event.clientX;
    mockupSlider.classList.add("dragging");
  });

  const stopDragging = (event) => {
    if (!isDragging) {
      return;
    }

    const dragDistance = event.clientX - startX;
    didDrag = Math.abs(dragDistance) > 34;
    isDragging = false;
    mockupSlider.classList.remove("dragging");

    if (didDrag) {
      moveCarousel(dragDistance < 0 ? 1 : -1);
    }
  };

  mockupSlider.querySelectorAll(".mockup-project-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (didDrag) {
        event.preventDefault();
      }
    });
  });

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (slide.classList.contains("prev")) {
        activeIndex = index;
        renderCarousel();
      }

      if (slide.classList.contains("next")) {
        activeIndex = index;
        renderCarousel();
      }
    });
  });

  mockupSlider.addEventListener("pointerup", stopDragging);
  mockupSlider.addEventListener("pointercancel", stopDragging);
  renderCarousel();
}
