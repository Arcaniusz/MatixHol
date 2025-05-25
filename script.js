document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.top-nav').classList.toggle('active');
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  
      document.querySelector('.top-nav').classList.remove('active');
    });
  });
  
  document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const container = wrapper.querySelector('.slider-container');
    const leftBtn = wrapper.querySelector('.slider-arrow.left');
    const rightBtn = wrapper.querySelector('.slider-arrow.right');
    const scrollAmount = 320;
  
    leftBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    rightBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('dragging');
    });
  
    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('dragging');
    });
  
    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  });
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
        section.classList.add('in-view');
      }
    });
  });
  
  // ----- OBSLUGA ZMIANY JEZYKA -----
  const languageToggle = document.getElementById('language-toggle');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  const currentLangText = document.getElementById('current-lang');
  const currentLangFlag = document.getElementById('current-lang-flag');
  
  // tlumaczenie
  const translations = {
    // pl
    pl: {
      okna: "Okna",
      pvc: "PVC",
      drzwi: "Drzwi",
      drzwiDespiro: "Drzwi Despiro",
      rolety: "Rolety",
      bramy: "Bramy",
      kontakt: "Kontakt",
      miniCatalogText: "Zobacz nasz mini katalog",
      colorCatalogText: "Zobacz nasz katalog kolorów",
      
      heroTitle: "Nowoczesne Rozwiązania <span class='highlight'>Dla Twojego Domu</span>",
      heroSubtitle: "Jakość, profesjonalizm i zadowolenie klienta",
      ctaButton: "Skontaktuj się z nami",
  
      aboutTitle: "O Nas",
      aboutText: "Jesteśmy doświadczoną firmą specjalizującą się w dostarczaniu i montażu wysokiej jakości okien, drzwi oraz rolet. Nasze produkty sprowadzamy bezpośrednio od sprawdzonych polskich producentów, dzięki czemu oferujemy najlepszy stosunek ceny do jakości – bez marży pośredników. Nie projektujemy, ale wybieramy dla Ciebie sprawdzone rozwiązania, które łączą nowoczesny design, funkcjonalność i energooszczędność.",
      satisfiedCustomers: "Zadowolonych Klientów",
      yearsOfExperience: "Lat Doświadczenia",
      completedProjects: "Zrealizowanych Projektów",
      
      zoomMore: "Zobacz więcej...",
      
      windowsTitle: "Okna",
      windowsDesc: "Oferujemy szeroką gamę okien dopasowanych do każdego stylu architektonicznego. Nasze produkty charakteryzują się wysoką efektywnością energetyczną i doskonałą izolacją akustyczną.",
      energySaving: "Energooszczędne",
      energySavingDesc: "Minimalizują straty ciepła",
      soundproof: "Dźwiękoszczelne",
      soundproofDesc: "Skuteczna izolacja akustyczna",
      secure: "Bezpieczne",
      secureDesc: "Zaawansowane systemy zabezpieczeń",
      
      doorsTitle: "Drzwi",
      doorsDesc: "Nasze drzwi łączą w sobie wytrzymałość, bezpieczeństwo i elegancki wygląd. Oferujemy zarówno drzwi wewnętrzne, jak i zewnętrzne w różnych stylach i wykończeniach.",
      reinforced: "Wzmocnione",
      reinforcedDesc: "Solidna konstrukcja",
      finishes: "Różne Wykończenia",
      finishesDesc: "Dopasowane do wnętrza",
      thermalInsulation: "Termoizolacyjne",
      thermalInsulationDesc: "Zapobiegają utracie ciepła",
      
      despiroTitle: "Drzwi Despiro",
      despiroDesc: "Drzwi Despiro to ekskluzywna linia drzwi aluminiowych o wyjątkowym wzornictwie i najwyższej jakości wykonania. Łączą w sobie funkcjonalność, trwałość i nowoczesny design.",
      prestigious: "Prestiżowe",
      prestigiousDesc: "Elegancki wygląd dla wymagających",
      advancedSecurity: "Zaawansowane Zabezpieczenia",
      advancedSecurityDesc: "Inteligentne systemy zamków",
      customProject: "Indywidualny Projekt",
      customProjectDesc: "Dostosowane do potrzeb klienta",
      
      blindsTitle: "Rolety",
      blindsDesc: "Nasze rolety zapewniają ochronę przed słońcem i zwiększają prywatność. Dostępne w różnych kolorach i materiałach, by pasowały do wystroju każdego wnętrza.",
      uvProtection: "Ochrona UV",
      uvProtectionDesc: "Filtrują promienie słoneczne",
      wideColorRange: "Szeroka Gama Kolorów",
      wideColorRangeDesc: "Dopasowane do każdego wnętrza",
      automatic: "Automatyczne",
      automaticDesc: "Sterowanie pilotem lub telefonem",
      
      gatesTitle: "Bramy",
      gatesDesc: "Oferujemy solidne i nowoczesne bramy garażowe i wjazdowe, które zapewniają bezpieczeństwo i komfort użytkowania. Dostępne w różnych wzorach i kolorach.",
      garage: "Garażowe",
      garageDesc: "Segmentowe i rolowane",
      entrance: "Wjazdowe",
      entranceDesc: "Przesuwne i skrzydłowe",
      remoteControl: "Sterowanie Zdalne",
      remoteControlDesc: "Łatwa obsługa z każdego miejsca",

      addonsTitle: "Dodatki",
      addonsDesc: "Oferujemy szeroki wybór dodatków, które zwiększają funkcjonalność i estetykę naszych produktów. Zapoznaj się z poniższymi propozycjami.",
      addons1: "Parapety zewnętrzne i wewnętrzne dopasowane do każdego wnętrza",
      addons2: "Funkcjonalne moskitiery chroniące przed owadami i zanieczyszczeniami",
      addonsContactText: "Po więcej informacji skontaktuj się z nami",
      addonsContactBtn: "Skontaktuj się",
      
      portfolioTitle: "Nasze Realizacje",
      portfolioDesc: "Zobacz nasze wybrane projekty, które zrealizowaliśmy dla zadowolonych klientów",
      project1Title: "Wymiana uszczelnienia w drzwiach oraz oknach",
      project1Desc: "Kompleksowa wymiana uszczelnień okien i drzwi",
      project2Title: "Szklane drzwi na taras",
      project2Desc: "Drzwi z wytrzymałego szkła",
      project3Title: "Wymiana drzwi",
      project3Desc: "Wytrzymałe, dzwiękoszczelne drzwi",
      project4Title: "Wymiana okiennic",
      project4Desc: "System okien dźwiękoszczelnych",
      
      contactTitle: "Skontaktuj Się z Nami",
      addressTitle: "Adres",
      address: "Adres",
      phoneTitle: "Telefon",
      phone: "+31 06 295 791 50",
      emailTitle: "Email",
      email: "info@matixhol.nl",
      hoursTitle: "Godziny otwarcia",
      hours: "Poniedziałek - Piątek: 9:00 - 17:00",
      nameField: "Imię i nazwisko",
      phoneField: "Telefon",
      messageField: "Wiadomość",
      submitButton: "Wyślij wiadomość",
      
      allRightsReserved: "Wszelkie prawa zastrzeżone.",
      
      windowsCatalog: "catalogs/PvcPL.pdf",
      pvcCatalog: "catalogs/PvcPL.pdf",
      doorsCatalog: "catalogs/DrzwiZewPL.pdf",
      despiroCatalog: "catalogs/DespiroPL.pdf",
      blindsCatalog: "catalogs/RoletyPL.pdf",
      gatesCatalog: "catalogs/BramyPL.pdf",
      miniCatalogUrl: "catalogs/MiniPL.pdf",
      colorCatalogUrl: "catalogs/color.pdf",
    },
    
    // nl
    nl: {
      okna: "kunststof kozijnen",
      pvc: "PVC",
      drzwi: "Deuren",
      drzwiDespiro: "Despiro Deuren",
      rolety: "Rolluiken",
      bramy: "Poorten",
      kontakt: "Contact",
      miniCatalogText: "Bekijk onze mini catalogus",
      colorCatalogText: "Bekijk onze kleurencatalogus",
      
      heroTitle: "Moderne oplossingen <span class='highlight'>voor uw huis</span>",
      heroSubtitle: "Kwaliteit, professionaliteit en klanttevredenheid",
      ctaButton: "Neem contact met ons op",
      
      aboutTitle: "Over Ons",
      aboutText: "Wij zijn een ervaren bedrijf gespecialiseerd in het leveren en monteren van hoogwaardige ramen, deuren en rolluiken. Onze producten importeren we rechtstreeks van betrouwbare Poolse producenten, waardoor wij de beste prijs-kwaliteitverhouding kunnen bieden – zonder tussenhandelaren. Wij ontwerpen niet, maar selecteren voor u bewezen oplossingen die modern design, functionaliteit en energiezuinigheid combineren.",
      satisfiedCustomers: "Tevreden Klanten",
      yearsOfExperience: "Jaren Ervaring",
      completedProjects: "Voltooide Projecten",
      
      zoomMore: "Bekijk meer...",
      
      windowsTitle: "kunststof kozijnen",
      windowsDesc: "Wij bieden een breed scala aan ramen die passen bij elke architectonische stijl. Onze producten worden gekenmerkt door hoge energie-efficiëntie en uitstekende geluidsisolatie.",
      energySaving: "Energiebesparend",
      energySavingDesc: "Minimaliseren warmteverlies",
      soundproof: "Geluiddicht",
      soundproofDesc: "Effectieve geluidsisolatie",
      secure: "Veilig",
      secureDesc: "Geavanceerde beveiligingssystemen",
      
      doorsTitle: "Deuren",
      doorsDesc: "Onze deuren combineren sterkte, veiligheid en elegant ontwerp. We bieden zowel binnen- als buitendeuren in verschillende stijlen en afwerkingen.",
      reinforced: "Versterkt",
      reinforcedDesc: "Solide constructie",
      finishes: "Verschillende afwerkingen",
      finishesDesc: "Aangepast aan het interieur",
      thermalInsulation: "Thermische isolatie",
      thermalInsulationDesc: "Voorkomt warmteverlies",
      
      despiroTitle: "Despiro Deuren",
      despiroDesc: "Despiro deuren zijn een exclusieve lijn aluminium deuren met een uniek ontwerp en de hoogste kwaliteit vakmanschap. Ze combineren functionaliteit, duurzaamheid en modern design.",
      prestigious: "Prestigieus",
      prestigiousDesc: "Elegante uitstraling voor veeleisende klanten",
      advancedSecurity: "Geavanceerde beveiliging",
      advancedSecurityDesc: "Intelligente slotsystemen",
      customProject: "Individueel project",
      customProjectDesc: "Aangepast aan de behoeften van de klant",
      
      blindsTitle: "Rolluiken",
      blindsDesc: "Onze rolluiken bieden bescherming tegen de zon en verhogen de privacy. Verkrijgbaar in verschillende kleuren en materialen om bij elk interieur te passen.",
      uvProtection: "UV-bescherming",
      uvProtectionDesc: "Filteren zonnestralen",
      wideColorRange: "Breed kleurenpalet",
      wideColorRangeDesc: "Aangepast aan elk interieur",
      automatic: "Automatisch",
      automaticDesc: "Bediening met afstandsbediening of telefoon",
      
      gatesTitle: "Poorten",
      gatesDesc: "We bieden solide en moderne garage- en toegangspoorten die veiligheid en gebruiksgemak garanderen. Verkrijgbaar in verschillende ontwerpen en kleuren.",
      garage: "Garagepoorten",
      garageDesc: "Segmenteel en rolluiken",
      entrance: "Toegangspoorten",
      entranceDesc: "Schuif- en vleugelhekken",
      remoteControl: "Afstandsbediening",
      remoteControlDesc: "Gemakkelijke bediening vanaf elke locatie",

      addonsTitle: "Accessoires",
      addonsDesc: "Wij bieden een breed scala aan accessoires die de functionaliteit en esthetiek van onze producten verbeteren. Bekijk hieronder onze suggesties.",
      addons1: "Buiten- en binnenvensterbanken passend bij elk interieur",
      addons2: "Functionele horren ter bescherming tegen insecten en vervuiling",
      addonsContactText: "Neem contact met ons op voor meer informatie",
      addonsContactBtn: "Neem contact op",

      
      portfolioTitle: "Onze projecten",
      portfolioDesc: "Bekijk onze geselecteerde projecten die we hebben uitgevoerd voor tevreden klanten",
      project1Title: "Vervanging van deuren en ramen afdichtingen",
      project1Desc: "Uitgebreide vervanging van raam- en deurafdichtingen",
      project2Title: "Glazen terrasdeuren",
      project2Desc: "Deuren van duurzaam glas",
      project3Title: "Deurvervanging",
      project3Desc: "Duurzame, geluiddichte deuren",
      project4Title: "Luikenvervanging",
      project4Desc: "Geluiddicht ramensysteem",
      
      contactTitle: "Neem contact met ons op",
      addressTitle: "Adres",
      address: "Adres",
      phoneTitle: "Telefoon",
      phone: "+31 06 295 791 50",
      emailTitle: "Email",
      email: "info@matixhol.nl",
      hoursTitle: "Openingstijden",
      hours: "Maandag - Vrijdag: 9:00 - 17:00",
      nameField: "Naam en achternaam",
      phoneField: "Telefoon",
      messageField: "Bericht",
      submitButton: "Bericht verzenden",
      
      allRightsReserved: "Alle rechten voorbehouden.",
      
      windowsCatalog: "catalogs/PvcNL.pdf",
      pvcCatalog: "catalogs/PvcNL.pdf",
      doorsCatalog: "catalogs/DrzwiZewNL.pdf",
      despiroCatalog: "catalogs/DespiroEN.pdf",
      blindsCatalog: "catalogs/RoletyNL.pdf",
      gatesCatalog: "catalogs/BramyNL.pdf",
      miniCatalogUrl: "catalogs/MiniNL.pdf",
      colorCatalogUrl: "catalogs/color.pdf",
    },
    
    // eng
    en: {
      okna: "Windows",
      pvc: "PVC",
      drzwi: "Doors",
      drzwiDespiro: "Despiro Doors",
      rolety: "Blinds",
      bramy: "Gates",
      kontakt: "Contact",
      miniCatalogText: "Check our mini Catalog",
      colorCatalogText: "Check our color catalog",
      
      heroTitle: "Modern Solutions <span class='highlight'>For Your Home</span>",
      heroSubtitle: "Quality, professionalism and customer satisfaction",
      ctaButton: "Contact us",
      
      aboutTitle: "About Us",
      aboutText: "We are an experienced company specializing in the supply and installation of high-quality windows, doors, and blinds. Our products are imported directly from trusted Polish manufacturers, allowing us to offer the best price-quality ratio – with no middlemen. We don’t design, but we select proven solutions for you that combine modern design, functionality, and energy efficiency.",
      satisfiedCustomers: "Satisfied Customers",
      yearsOfExperience: "Years of Experience",
      completedProjects: "Completed Projects",
      
      zoomMore: "See more...",
      
      windowsTitle: "Windows",
      windowsDesc: "We offer a wide range of windows tailored to every architectural style. Our products are characterized by high energy efficiency and excellent acoustic insulation.",
      energySaving: "Energy Saving",
      energySavingDesc: "Minimize heat loss",
      soundproof: "Soundproof",
      soundproofDesc: "Effective sound insulation",
      secure: "Secure",
      secureDesc: "Advanced security systems",
      
      doorsTitle: "Doors",
      doorsDesc: "Our doors combine strength, security, and elegant appearance. We offer both interior and exterior doors in various styles and finishes.",
      reinforced: "Reinforced",
      reinforcedDesc: "Solid construction",
      finishes: "Various Finishes",
      finishesDesc: "Adapted to the interior",
      thermalInsulation: "Thermal Insulation",
      thermalInsulationDesc: "Prevent heat loss",
      
      despiroTitle: "Despiro Doors",
      despiroDesc: "Despiro doors are an exclusive line of aluminum doors with unique design and highest quality craftsmanship. They combine functionality, durability, and modern design.",
      prestigious: "Prestigious",
      prestigiousDesc: "Elegant look for demanding customers",
      advancedSecurity: "Advanced Security",
      advancedSecurityDesc: "Intelligent lock systems",
      customProject: "Custom Project",
      customProjectDesc: "Tailored to customer needs",
      
      blindsTitle: "Blinds",
      blindsDesc: "Our blinds provide protection from the sun and increase privacy. Available in various colors and materials to match any interior design.",
      uvProtection: "UV Protection",
      uvProtectionDesc: "Filter sunlight",
      wideColorRange: "Wide Color Range",
      wideColorRangeDesc: "Matched to any interior",
      automatic: "Automatic",
      automaticDesc: "Remote or phone control",
      
      gatesTitle: "Gates",
      gatesDesc: "We offer solid and modern garage and entrance gates that provide security and comfort of use. Available in various designs and colors.",
      garage: "Garage",
      garageDesc: "Sectional and roll-up",
      entrance: "Entrance",
      entranceDesc: "Sliding and swing",
      remoteControl: "Remote Control",
      remoteControlDesc: "Easy operation from any location",

      addonsTitle: "Accessories",
      addonsDesc: "We offer a wide range of accessories that enhance the functionality and aesthetics of our products. Take a look at the suggestions below.",
      addons1: "External and internal window sills tailored to every interior",
      addons2: "Practical mosquito screens protecting against insects and pollution",
      addonsContactText: "For more information, get in touch with us",
      addonsContactBtn: "Contact us",

      
      portfolioTitle: "Our Projects",
      portfolioDesc: "See our selected projects we've completed for satisfied customers",
      project1Title: "Door and window seal replacement",
      project1Desc: "Comprehensive replacement of window and door seals",
      project2Title: "Glass terrace doors",
      project2Desc: "Doors made of durable glass",
      project3Title: "Door replacement",
      project3Desc: "Durable, soundproof doors",
      project4Title: "Shutter replacement",
      project4Desc: "Soundproof window system",
      
      contactTitle: "Contact Us",
      addressTitle: "Address",
      address: "Address",
      phoneTitle: "Phone",
      phone: "+31 06 295 791 50",
      emailTitle: "Email",
      email: "info@matixhol.nl",
      hoursTitle: "Opening Hours",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      nameField: "Full name",
      phoneField: "Phone",
      messageField: "Message",
      submitButton: "Send message",
      
      allRightsReserved: "All rights reserved.",
      
      windowsCatalog: "catalogs/PvcEn.pdf",
      pvcCatalog: "catalogs/PvcEn.pdf",
      doorsCatalog: "catalogs/DrzwiZewEn.pdf",
      despiroCatalog: "catalogs/DespiroEn.pdf",
      blindsCatalog: "catalogs/RoletyEn.pdf",
      gatesCatalog: "catalogs/BramyEn.pdf",
      miniCatalogUrl: "catalogs/MiniEn.pdf",
      colorCatalogUrl: "catalogs/color.pdf",
    }
  };
  
  languageToggle.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', (e) => {
    if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
      languageDropdown.classList.remove('show');
    }
  });
  
  languageOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      const flagSrc = option.querySelector('img').getAttribute('src');
      const flagAlt = option.querySelector('img').getAttribute('alt');
      
      currentLangText.textContent = lang.toUpperCase();
      currentLangFlag.setAttribute('src', flagSrc);
      currentLangFlag.setAttribute('alt', flagAlt);
      
      languageDropdown.classList.remove('show');
      
      setTimeout(() => {
        changeLanguage(lang);
        console.log("Language change triggered for: " + lang);
      }, 50);
    });
  });
  
  
  function changeLanguage(lang) {
    console.log("Changing language to: " + lang);
    if (!translations[lang]) return;
    
    document.documentElement.lang = lang;
    
    // ----- Navigation Links -----
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length > 0) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#okna') link.innerHTML = `<i class="fas fa-window-restore"></i> ${translations[lang].okna}`;
        if (href === '#pvc') link.innerHTML = `<i class="fas fa-window-maximize"></i> ${translations[lang].pvc}`;
        if (href === '#drzwi') link.innerHTML = `<i class="fas fa-door-open"></i> ${translations[lang].drzwi}`;
        if (href === '#drzwi-despiro') link.innerHTML = `<i class="fas fa-door-closed"></i> ${translations[lang].drzwiDespiro}`;
        if (href === '#rolety') link.innerHTML = `<i class="fas fa-bars"></i> ${translations[lang].rolety}`;
        if (href === '#bramy') link.innerHTML = `<i class="fas fa-warehouse"></i> ${translations[lang].bramy}`;
        if (href === '#kontakt') link.innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].kontakt}`;
      });
    }
  
    // ----- Hero Section -----
    const heroHeading = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    if (heroHeading) heroHeading.innerHTML = translations[lang].heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].heroSubtitle;
    if (ctaButton) ctaButton.textContent = translations[lang].ctaButton;
  
    // ----- About Section -----
    const aboutTitle = document.querySelector('.about-section .section-title');
    const aboutText = document.querySelector('.about-text p');
    const statDescs = document.querySelectorAll('.stat-desc');
    
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
    if (aboutText) aboutText.textContent = translations[lang].aboutText;
    if (statDescs.length >= 3) {
      statDescs[0].textContent = translations[lang].satisfiedCustomers;
      statDescs[1].textContent = translations[lang].yearsOfExperience;
      statDescs[2].textContent = translations[lang].completedProjects;
    }
  
    // ----- Mini Catalog Button -----
    const catalogButtons = document.querySelectorAll('.mini-catalog-button .catalog-button');
    if (catalogButtons.length >= 2) {
      // First button (mini catalog)
      catalogButtons[0].textContent = translations[lang].miniCatalogText;
      catalogButtons[0].setAttribute('href', translations[lang].miniCatalogUrl);
      
      // Second button (color catalog)
      catalogButtons[1].textContent = translations[lang].colorCatalogText;
      catalogButtons[1].setAttribute('href', translations[lang].colorCatalogUrl);
    }

  
    // ----- Windows Section -----
    const windowsTitle = document.querySelector('#okna .section-title');
    const windowsDesc = document.querySelector('#okna .product-description');
    const windowsCategories = document.querySelectorAll('#okna .product-category');
    const windowsCatalogBtn = document.querySelector('#okna .catalog-button');
    
    if (windowsTitle) windowsTitle.textContent = translations[lang].windowsTitle;
    if (windowsDesc) windowsDesc.textContent = translations[lang].windowsDesc;
    
    if (windowsCategories.length >= 3) {
      const cat1h3 = windowsCategories[0].querySelector('h3');
      const cat1p = windowsCategories[0].querySelector('p');
      const cat2h3 = windowsCategories[1].querySelector('h3');
      const cat2p = windowsCategories[1].querySelector('p');
      const cat3h3 = windowsCategories[2].querySelector('h3');
      const cat3p = windowsCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].energySaving;
      if (cat1p) cat1p.textContent = translations[lang].energySavingDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].soundproof;
      if (cat2p) cat2p.textContent = translations[lang].soundproofDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].secure;
      if (cat3p) cat3p.textContent = translations[lang].secureDesc;
    }
    
    if (windowsCatalogBtn) {
      windowsCatalogBtn.textContent = translations[lang].zoomMore;
      windowsCatalogBtn.setAttribute('href', translations[lang].windowsCatalog);
    }
  
    // ----- PVC Section -----
    const pvcTitle = document.querySelector('#pvc .section-title');
    const pvcDesc = document.querySelector('#pvc .product-description');
    const pvcCategories = document.querySelectorAll('#pvc .product-category');
    const pvcCatalogBtn = document.querySelector('#pvc .catalog-button');
    
    if (pvcTitle) pvcTitle.textContent = translations[lang].pvcTitle;
    if (pvcDesc) pvcDesc.textContent = translations[lang].pvcDesc;
    
    if (pvcCategories.length >= 3) {
      const cat1h3 = pvcCategories[0].querySelector('h3');
      const cat1p = pvcCategories[0].querySelector('p');
      const cat2h3 = pvcCategories[1].querySelector('h3');
      const cat2p = pvcCategories[1].querySelector('p');
      const cat3h3 = pvcCategories[2].querySelector('h3');
      const cat3p = pvcCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].ecological;
      if (cat1p) cat1p.textContent = translations[lang].ecologicalDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].waterproof;
      if (cat2p) cat2p.textContent = translations[lang].waterproofDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].easyMaintenance;
      if (cat3p) cat3p.textContent = translations[lang].easyMaintenanceDesc;
    }
    
    if (pvcCatalogBtn) {
      pvcCatalogBtn.textContent = translations[lang].zoomMore;
      pvcCatalogBtn.setAttribute('href', translations[lang].pvcCatalog);
    }
  
    // ----- Doors Section -----
    const doorsTitle = document.querySelector('#drzwi .section-title');
    const doorsDesc = document.querySelector('#drzwi .product-description');
    const doorsCategories = document.querySelectorAll('#drzwi .product-category');
    const doorsCatalogBtn = document.querySelector('#drzwi .catalog-button');
  
    if (doorsTitle) doorsTitle.textContent = translations[lang].doorsTitle;
    if (doorsDesc) doorsDesc.textContent = translations[lang].doorsDesc;
    
    if (doorsCategories.length >= 3) {
      const cat1h3 = doorsCategories[0].querySelector('h3');
      const cat1p = doorsCategories[0].querySelector('p');
      const cat2h3 = doorsCategories[1].querySelector('h3');
      const cat2p = doorsCategories[1].querySelector('p');
      const cat3h3 = doorsCategories[2].querySelector('h3');
      const cat3p = doorsCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].reinforced;
      if (cat1p) cat1p.textContent = translations[lang].reinforcedDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].finishes;
      if (cat2p) cat2p.textContent = translations[lang].finishesDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].thermalInsulation;
      if (cat3p) cat3p.textContent = translations[lang].thermalInsulationDesc;
    }
    
    if (doorsCatalogBtn) {
      doorsCatalogBtn.textContent = translations[lang].zoomMore;
      doorsCatalogBtn.setAttribute('href', translations[lang].doorsCatalog);
    }
  
    // ----- Despiro Doors Section -----
    const despiroTitle = document.querySelector('#drzwi-despiro .section-title');
    const despiroDesc = document.querySelector('#drzwi-despiro .product-description');
    const despiroCategories = document.querySelectorAll('#drzwi-despiro .product-category');
    const despiroCatalogBtn = document.querySelector('#drzwi-despiro .catalog-button');
    
    if (despiroTitle) despiroTitle.textContent = translations[lang].despiroTitle;
    if (despiroDesc) despiroDesc.textContent = translations[lang].despiroDesc;
    
    if (despiroCategories.length >= 3) {
      const cat1h3 = despiroCategories[0].querySelector('h3');
      const cat1p = despiroCategories[0].querySelector('p');
      const cat2h3 = despiroCategories[1].querySelector('h3');
      const cat2p = despiroCategories[1].querySelector('p');
      const cat3h3 = despiroCategories[2].querySelector('h3');
      const cat3p = despiroCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].prestigious;
      if (cat1p) cat1p.textContent = translations[lang].prestigiousDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].advancedSecurity;
      if (cat2p) cat2p.textContent = translations[lang].advancedSecurityDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].customProject;
      if (cat3p) cat3p.textContent = translations[lang].customProjectDesc;
    }
    
    if (despiroCatalogBtn) {
      despiroCatalogBtn.textContent = translations[lang].zoomMore;
      despiroCatalogBtn.setAttribute('href', translations[lang].despiroCatalog);
    }
  
    // ----- Blinds Section -----
    const blindsTitle = document.querySelector('#rolety .section-title');
    const blindsDesc = document.querySelector('#rolety .product-description');
    const blindsCategories = document.querySelectorAll('#rolety .product-category');
    const blindsCatalogBtn = document.querySelector('#rolety .catalog-button');
    
    if (blindsTitle) blindsTitle.textContent = translations[lang].blindsTitle;
    if (blindsDesc) blindsDesc.textContent = translations[lang].blindsDesc;
    
    if (blindsCategories.length >= 3) {
      const cat1h3 = blindsCategories[0].querySelector('h3');
      const cat1p = blindsCategories[0].querySelector('p');
      const cat2h3 = blindsCategories[1].querySelector('h3');
      const cat2p = blindsCategories[1].querySelector('p');
      const cat3h3 = blindsCategories[2].querySelector('h3');
      const cat3p = blindsCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].uvProtection;
      if (cat1p) cat1p.textContent = translations[lang].uvProtectionDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].wideColorRange;
      if (cat2p) cat2p.textContent = translations[lang].wideColorRangeDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].automatic;
      if (cat3p) cat3p.textContent = translations[lang].automaticDesc;
    }
    
    if (blindsCatalogBtn) {
      blindsCatalogBtn.textContent = translations[lang].zoomMore;
      blindsCatalogBtn.setAttribute('href', translations[lang].blindsCatalog);
    }

    // ----- Gates Section -----
    const gatesTitle = document.querySelector('#bramy .section-title');
    const gatesDesc = document.querySelector('#bramy .product-description');
    const gatesCategories = document.querySelectorAll('#bramy .product-category');
    const gatesCatalogBtn = document.querySelector('#bramy .catalog-button');
    
    if (gatesTitle) gatesTitle.textContent = translations[lang].gatesTitle;
    if (gatesDesc) gatesDesc.textContent = translations[lang].gatesDesc;
    
    if (gatesCategories.length >= 3) {
      const cat1h3 = gatesCategories[0].querySelector('h3');
      const cat1p = gatesCategories[0].querySelector('p');
      const cat2h3 = gatesCategories[1].querySelector('h3');
      const cat2p = gatesCategories[1].querySelector('p');
      const cat3h3 = gatesCategories[2].querySelector('h3');
      const cat3p = gatesCategories[2].querySelector('p');
      
      if (cat1h3) cat1h3.textContent = translations[lang].garage;
      if (cat1p) cat1p.textContent = translations[lang].garageDesc;
      if (cat2h3) cat2h3.textContent = translations[lang].entrance;
      if (cat2p) cat2p.textContent = translations[lang].entranceDesc;
      if (cat3h3) cat3h3.textContent = translations[lang].remoteControl;
      if (cat3p) cat3p.textContent = translations[lang].remoteControlDesc;
    }
    
    if (gatesCatalogBtn) {
      gatesCatalogBtn.textContent = translations[lang].zoomMore;
      gatesCatalogBtn.setAttribute('href', translations[lang].gatesCatalog);
    }
  
    // ----- Addons Section -----
    const addonsTitle = document.querySelector('#dodatki-section .section-title');
    const addonsDesc = document.querySelector('#dodatki-section .product-description');
    const addonsSliderTexts = document.querySelectorAll('#dodatki-section .slider-description');
    const addonsContactText = document.querySelector('#dodatki-section .contact-text');
    const addonsContactBtn = document.querySelector('#dodatki-section .catalog-button');

    if (addonsTitle) addonsTitle.textContent = translations[lang].addonsTitle;
    if (addonsDesc) addonsDesc.textContent = translations[lang].addonsDesc;

    if (addonsSliderTexts.length >= 2) {
    if (addonsSliderTexts[0]) addonsSliderTexts[0].textContent = translations[lang].addons1;
    if (addonsSliderTexts[1]) addonsSliderTexts[1].textContent = translations[lang].addons2;
    }

    if (addonsContactText) addonsContactText.textContent = translations[lang].addonsContactText;
    if (addonsContactBtn) addonsContactBtn.textContent = translations[lang].addonsContactBtn;

    // ----- Portfolio Section -----
    const portfolioTitle = document.querySelector('#portfolio .section-title');
    const portfolioDesc = document.querySelector('#portfolio .section-description');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (portfolioTitle) portfolioTitle.textContent = translations[lang].portfolioTitle;
    if (portfolioDesc) portfolioDesc.textContent = translations[lang].portfolioDesc;
    
    if (portfolioItems.length >= 4) {
      const item1Title = portfolioItems[0].querySelector('.portfolio-title');
      const item1Desc = portfolioItems[0].querySelector('.portfolio-description');
      const item2Title = portfolioItems[1].querySelector('.portfolio-title');
      const item2Desc = portfolioItems[1].querySelector('.portfolio-description');
      const item3Title = portfolioItems[2].querySelector('.portfolio-title');
      const item3Desc = portfolioItems[2].querySelector('.portfolio-description');
      const item4Title = portfolioItems[3].querySelector('.portfolio-title');
      const item4Desc = portfolioItems[3].querySelector('.portfolio-description');
      
      if (item1Title) item1Title.textContent = translations[lang].project1Title;
      if (item1Desc) item1Desc.textContent = translations[lang].project1Desc;
      if (item2Title) item2Title.textContent = translations[lang].project2Title;
      if (item2Desc) item2Desc.textContent = translations[lang].project2Desc;
      if (item3Title) item3Title.textContent = translations[lang].project3Title;
      if (item3Desc) item3Desc.textContent = translations[lang].project3Desc;
      if (item4Title) item4Title.textContent = translations[lang].project4Title;
      if (item4Desc) item4Desc.textContent = translations[lang].project4Desc;
    }
  
    // ----- Contact Section -----
    const contactTitle = document.querySelector('#kontakt .section-title');
    const addressTitle = document.getElementById('address-title');
    const phoneTitle = document.getElementById('phone-title');
    const emailTitle = document.getElementById('email-title');
    const hoursTitle = document.getElementById('hours-title');
    const workingHoursText = document.getElementById('hours');
    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const messageInput = document.querySelector('textarea');
    const submitBtn = document.querySelector('#submitButton');

    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
    if (addressTitle) addressTitle.textContent = translations[lang].addressTitle;
    if (phoneTitle) phoneTitle.textContent = translations[lang].phoneTitle;
    if (emailTitle) emailTitle.textContent = translations[lang].emailTitle;
    if (hoursTitle) hoursTitle.textContent = translations[lang].hoursTitle;
    if (workingHoursText) workingHoursText.textContent = translations[lang].hours;
    if (nameInput) nameInput.placeholder = translations[lang].nameField;
    if (phoneInput) phoneInput.placeholder = translations[lang].phoneField;
    if (messageInput) messageInput.placeholder = translations[lang].messageField;

    document.getElementById('phone').textContent = translations[lang].phone;
    document.getElementById('email').textContent = translations[lang].email;

    if (submitBtn) submitBtn.textContent = translations[lang].submitButton;
  
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length > 0) {
        footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#okna') link.textContent = translations[lang].okna;
        if (href === '#pvc') link.textContent = translations[lang].pvc;
        if (href === '#drzwi') link.textContent = translations[lang].drzwi;
        if (href === '#drzwi-despiro') link.textContent = translations[lang].drzwiDespiro;
        if (href === '#rolety') link.textContent = translations[lang].rolety;
        if (href === '#bramy') link.textContent = translations[lang].bramy;
        if (href === '#kontakt') link.textContent = translations[lang].kontakt;
        });
    }

    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = `© ${currentYear} MatixHol. ${translations[lang].allRightsReserved}`;
    }

    localStorage.setItem('language', lang);
    }
    
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      const option = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
      if (option) {
        option.click();
      } else {
        changeLanguage('en');
      }
    } else {
      changeLanguage('pl');
    }
  });
