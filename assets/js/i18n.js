/* ============================================================
   TAVERNA — Bilingual content (FR default / EN)
   Each key maps a [data-i18n] element. Placeholders use
   [data-i18n-ph]. Document title uses meta.title.
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    "meta.title": "Taverna — Le Club Social et Bar de Montréal",

    /* nav */
    "nav.home": "Accueil",
    "nav.experience": "L'Expérience",
    "nav.lineup": "Programmation",
    "nav.reservations": "Réservations",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.reserve": "Réserver",

    /* status */
    "status.open": "Ouvert",
    "status.closed": "Fermé",
    "status.opensAt": "Ouvre {time}",
    "status.until": "jusqu'à {time}",

    /* hero */
    "hero.eyebrow": "Plateau Mont-Royal · Montréal",
    "hero.tagline": "Le Club Social et Bar de Montréal",
    "hero.lede": "Le bar-discothèque mythique au coin de Rachel et Saint-Denis. DJ, danse, sports pis du bon temps — bienvenue chez vous.",
    "hero.cta1": "Réserver une table",
    "hero.cta2": "Voir la programmation",
    "hero.scroll": "Descends voir ça",

    /* marquee */
    "marquee.1": "Bienvenue chez nous",
    "marquee.2": "DJ les fins de semaine",
    "marquee.3": "Système de son Meyer",
    "marquee.4": "Karaoké",
    "marquee.5": "Hockey du Canadien",
    "marquee.6": "Billard & babyfoot",
    "marquee.7": "On se voit à soir !",

    /* about */
    "about.eyebrow": "Notre histoire",
    "about.title": "Plus qu'un bar — un vrai club social",
    "about.p1": "Niché au 2<sup>e</sup> étage au coin de Rachel et Saint-Denis, Taverna c'est l'endroit où le Plateau se rassemble pour danser, célébrer pis refaire le monde jusqu'aux petites heures.",
    "about.p2": "Des <span class=\"hl\">DJ du jeudi au samedi</span>, un système de son Meyer qui fait vibrer le plancher, des tables de billard, du babyfoot et une terrasse à portes de garage qui s'ouvre grand sur la ville. Icitte, t'es jamais un étranger ben longtemps.",
    "about.stat1.num": "JEU→SAM",
    "about.stat1.label": "DJ sur le plancher",
    "about.stat2.num": "Meyer",
    "about.stat2.label": "Système de son pro",
    "about.stat3.num": "18 h → 3 h",
    "about.stat3.label": "Les soirs de fin de semaine",
    "about.stat4.num": "Plateau",
    "about.stat4.label": "Coin Rachel & St-Denis",

    /* pillars */
    "pillars.eyebrow": "Bar · Billard · Danse",
    "pillars.title": "Trois bonnes raisons de monter l'escalier",
    "pillars.bar.title": "Le Bar",
    "pillars.bar.text": "Cocktails, bières en fût pis un système de son Meyer. Le cœur de la place.",
    "pillars.pool.title": "Le Billard",
    "pillars.pool.text": "Tables de billard et babyfoot pour la p'tite compétition amicale entre chums.",
    "pillars.dance.title": "La Danse",
    "pillars.dance.text": "DJ du jeudi au samedi, plancher qui lève pis danse jusqu'à 3 h du matin.",

    /* gallery */
    "gallery.eyebrow": "Galerie",
    "gallery.title": "Un aperçu de l'ambiance",
    "gallery.bar": "Le bar",
    "gallery.bartending": "Au comptoir",
    "gallery.pool": "Billard",
    "gallery.drinks": "Cocktails",
    "gallery.holidays": "Le temps des fêtes",
    "gallery.entrance": "L'entrée",
    "gallery.dance": "Soirée dansante",

    /* features */
    "feat.eyebrow": "L'ambiance",
    "feat.title": "Tout ce qu'il te faut pour une soirée parfaite",
    "feat.dj.title": "DJ & Danse",
    "feat.dj.text": "Des DJ qui font lever le plancher du jeudi au samedi. Hits, throwbacks pis des beats jusqu'à la fermeture.",
    "feat.karaoke.title": "Karaoké",
    "feat.karaoke.text": "Prends le micro pis donne-toi un show. Les classiques québécois sont toujours un succès garanti.",
    "feat.sports.title": "Sports & Hockey",
    "feat.sports.text": "Les matchs du Canadien sur grand écran. Go Habs Go ! L'ambiance d'aréna, la bière à portée de main.",
    "feat.games.title": "Billard & Babyfoot",
    "feat.games.text": "Tables de billard et babyfoot pour une p'tite compétition amicale entre chums.",
    "feat.sound.title": "Système Meyer",
    "feat.sound.text": "Un système de son Meyer de calibre pro. Le genre de basses que tu ressens dans ta poitrine.",
    "feat.terrace.title": "Terrasse ouverte",
    "feat.terrace.text": "Des portes de garage qui s'ouvrent grand sur le Plateau. L'air frais, la ville, pis ta gang.",

    /* lineup */
    "line.eyebrow": "Programmation",
    "line.title": "La semaine au Taverna",
    "line.sub": "Cinq soirs par semaine de musique, de sports pis de party. Voici à quoi t'attendre.",
    "line.wed.day": "Mercredi",
    "line.wed.desc": "<strong>Soirée chill</strong> · billard, sports & cocktails",
    "line.thu.day": "Jeudi",
    "line.thu.desc": "<strong>DJ Night</strong> · on réchauffe la fin de semaine",
    "line.fri.day": "Vendredi",
    "line.fri.desc": "<strong>Grosse soirée DJ</strong> · danse jusqu'à 3 h",
    "line.sat.day": "Samedi",
    "line.sat.desc": "<strong>La nuit la plus folle</strong> · DJ &amp; danse",
    "line.sun.day": "Dimanche",
    "line.sun.desc": "<strong>Karaoké & sports</strong> · finir la fin de semaine en beauté",
    "line.mon.day": "Lun & Mar",
    "line.mon.desc": "<strong>Fermé</strong> · on recharge les batteries",
    "line.closed": "Fermé",
    "hours.18to2": "18 h – 2 h",
    "hours.18to3": "18 h – 3 h",
    "line.today": "· Aujourd'hui",

    /* reservations */
    "res.eyebrow": "Réservations",
    "res.title": "Réserve ta place",
    "res.sub": "Pour une soirée entre amis, un party de bureau ou une grande célébration — on a la table qu'il te faut.",
    "res.groups.title": "Groupes",
    "res.groups.text": "Tables privées pour groupes de 8 à 30+ personnes. Parfait pour les anniversaires pis les retrouvailles.",
    "res.corp.title": "Événements corporatifs",
    "res.corp.text": "5 à 7, team building pis partys de bureau. On s'occupe de toute, t'as juste à te présenter.",
    "res.celeb.title": "Célébrations",
    "res.celeb.text": "Mariages, anniversaires pis grandes occasions. Fêtez en grand au cœur du Plateau.",
    "res.cta": "Demander une réservation",
    "res.note": "Réponse rapide · groupes de 8 à 30+",

    /* visit */
    "visit.eyebrow": "Heures & emplacement",
    "visit.title": "Viens nous voir",
    "visit.hoursTitle": "Heures d'ouverture",
    "visit.day.mon": "Lundi",
    "visit.day.tue": "Mardi",
    "visit.day.wed": "Mercredi",
    "visit.day.thu": "Jeudi",
    "visit.day.fri": "Vendredi",
    "visit.day.sat": "Samedi",
    "visit.day.sun": "Dimanche",
    "visit.closed": "Fermé",
    "visit.addressK": "Adresse",
    "visit.addressV": "4177 rue Saint-Denis, 2<sup>e</sup> étage<br>Montréal, QC H2W 2M7",
    "visit.directions": "Au 2<sup>e</sup> étage, coin Rachel & Saint-Denis · Métro Mont-Royal à deux pas.",
    "visit.phoneK": "Téléphone",
    "visit.emailK": "Courriel",
    "visit.follow": "Suis-nous",

    /* contact */
    "contact.eyebrow": "Contact",
    "contact.title": "Écris-nous",
    "contact.sub": "Une question, une réservation ou juste pour jaser ? Envoie-nous un message directement icitte.",
    "contact.name": "Nom",
    "contact.namePh": "Ton nom",
    "contact.email": "Courriel",
    "contact.emailPh": "toi@exemple.com",
    "contact.phone": "Téléphone",
    "contact.phoneOpt": "(optionnel)",
    "contact.phonePh": "(514) 000-0000",
    "contact.subject": "Sujet",
    "contact.subj.res": "Réservation",
    "contact.subj.event": "Événement privé",
    "contact.subj.info": "Information générale",
    "contact.subj.other": "Autre",
    "contact.message": "Message",
    "contact.messagePh": "Dis-nous tout — date, nombre de personnes, occasion…",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours…",
    "contact.note": "On te revient le plus vite possible, promis.",
    "contact.ok": "Merci ! Ton message est parti. On te revient bientôt. 🍻",
    "contact.bad": "Oups, quelque chose a cloché. Réessaie ou écris-nous à info@tavernabar.ca.",
    "contact.err.required": "Ce champ est requis.",
    "contact.err.email": "Entre un courriel valide.",
    "contact.quote": "« On se voit à soir ! »",
    "contact.quoteSub": "Bienvenue chez vous, au cœur du Plateau.",

    /* footer */
    "footer.tagline": "Le club social et bar mythique du Plateau-Mont-Royal. Depuis toujours, l'endroit où Montréal vient célébrer.",
    "footer.explore": "Explorer",
    "footer.visitUs": "Nous visiter",
    "footer.rights": "© 2026 Taverna. Tous droits réservés.",
    "footer.made": "Fait avec",
    "footer.madeEnd": "à Montréal"
  },

  en: {
    "meta.title": "Taverna — Montréal's Social Club & Bar",

    /* nav */
    "nav.home": "Home",
    "nav.experience": "The Experience",
    "nav.lineup": "Lineup",
    "nav.reservations": "Reservations",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve",

    /* status */
    "status.open": "Open",
    "status.closed": "Closed",
    "status.opensAt": "Opens {time}",
    "status.until": "until {time}",

    /* hero */
    "hero.eyebrow": "Plateau Mont-Royal · Montréal",
    "hero.tagline": "Montréal's Social Club & Bar",
    "hero.lede": "The legendary bar-discothèque on the corner of Rachel and Saint-Denis. DJs, dancing, sports and good times — welcome home.",
    "hero.cta1": "Book a table",
    "hero.cta2": "See the lineup",
    "hero.scroll": "Scroll on down",

    /* marquee */
    "marquee.1": "Welcome home",
    "marquee.2": "DJs every weekend",
    "marquee.3": "Meyer sound system",
    "marquee.4": "Karaoke",
    "marquee.5": "Habs hockey nights",
    "marquee.6": "Pool & foosball",
    "marquee.7": "See you tonight!",

    /* about */
    "about.eyebrow": "Our story",
    "about.title": "More than a bar — a real social club",
    "about.p1": "Tucked away on the 2<sup>nd</sup> floor at the corner of Rachel and Saint-Denis, Taverna is where the Plateau comes together to dance, celebrate and put the world to rights into the small hours.",
    "about.p2": "<span class=\"hl\">DJs Thursday through Saturday</span>, a Meyer sound system that makes the floor shake, pool tables, foosball and a garage-door terrace that opens wide onto the city. Around here, you're never a stranger for long.",
    "about.stat1.num": "THU→SAT",
    "about.stat1.label": "DJs on the floor",
    "about.stat2.num": "Meyer",
    "about.stat2.label": "Pro sound system",
    "about.stat3.num": "6 PM → 3 AM",
    "about.stat3.label": "On weekend nights",
    "about.stat4.num": "Plateau",
    "about.stat4.label": "Rachel & St-Denis corner",

    /* pillars */
    "pillars.eyebrow": "Bar · Billiards · Dance",
    "pillars.title": "Three good reasons to climb the stairs",
    "pillars.bar.title": "The Bar",
    "pillars.bar.text": "Cocktails, beer on tap and a Meyer sound system. The heart of the place.",
    "pillars.pool.title": "Billiards",
    "pillars.pool.text": "Pool tables and foosball for a little friendly competition between friends.",
    "pillars.dance.title": "The Dance Floor",
    "pillars.dance.text": "DJs Thursday to Saturday, a floor that moves and dancing till 3 AM.",

    /* gallery */
    "gallery.eyebrow": "Gallery",
    "gallery.title": "A glimpse of the vibe",
    "gallery.bar": "The bar",
    "gallery.bartending": "At the bar",
    "gallery.pool": "Billiards",
    "gallery.drinks": "Cocktails",
    "gallery.holidays": "The holidays",
    "gallery.entrance": "The entrance",
    "gallery.dance": "Dance night",

    /* features */
    "feat.eyebrow": "The vibe",
    "feat.title": "Everything you need for the perfect night out",
    "feat.dj.title": "DJs & Dancing",
    "feat.dj.text": "DJs that get the floor moving Thursday to Saturday. Hits, throwbacks and beats right up to closing time.",
    "feat.karaoke.title": "Karaoke",
    "feat.karaoke.text": "Grab the mic and put on a show. The Québécois classics are always a guaranteed crowd-pleaser.",
    "feat.sports.title": "Sports & Hockey",
    "feat.sports.text": "Habs games on the big screen. Go Habs Go! Arena energy with a cold beer always within reach.",
    "feat.games.title": "Pool & Foosball",
    "feat.games.text": "Pool tables and foosball for a little friendly competition between friends.",
    "feat.sound.title": "Meyer System",
    "feat.sound.text": "A pro-grade Meyer sound system. The kind of bass you feel deep in your chest.",
    "feat.terrace.title": "Open-air terrace",
    "feat.terrace.text": "Garage doors that open wide onto the Plateau. Fresh air, the city and your whole crew.",

    /* lineup */
    "line.eyebrow": "Lineup",
    "line.title": "The week at Taverna",
    "line.sub": "Five nights a week of music, sports and partying. Here's what to expect.",
    "line.wed.day": "Wednesday",
    "line.wed.desc": "<strong>Chill night</strong> · pool, sports & cocktails",
    "line.thu.day": "Thursday",
    "line.thu.desc": "<strong>DJ Night</strong> · warming up the weekend",
    "line.fri.day": "Friday",
    "line.fri.desc": "<strong>Big DJ night</strong> · dancing till 3 AM",
    "line.sat.day": "Saturday",
    "line.sat.desc": "<strong>The wildest night</strong> · DJs &amp; dancing",
    "line.sun.day": "Sunday",
    "line.sun.desc": "<strong>Karaoke & sports</strong> · closing out the weekend in style",
    "line.mon.day": "Mon & Tue",
    "line.mon.desc": "<strong>Closed</strong> · recharging the batteries",
    "line.closed": "Closed",
    "hours.18to2": "6 PM – 2 AM",
    "hours.18to3": "6 PM – 3 AM",
    "line.today": "· Today",

    /* reservations */
    "res.eyebrow": "Reservations",
    "res.title": "Save your spot",
    "res.sub": "For a night with friends, an office party or a big celebration — we've got the table for you.",
    "res.groups.title": "Groups",
    "res.groups.text": "Private tables for groups of 8 to 30+. Perfect for birthdays and reunions.",
    "res.corp.title": "Corporate events",
    "res.corp.text": "After-works, team building and office parties. We handle it all — just show up.",
    "res.celeb.title": "Celebrations",
    "res.celeb.text": "Weddings, birthdays and big occasions. Celebrate in style in the heart of the Plateau.",
    "res.cta": "Request a reservation",
    "res.note": "Quick reply · groups of 8 to 30+",

    /* visit */
    "visit.eyebrow": "Hours & location",
    "visit.title": "Come see us",
    "visit.hoursTitle": "Opening hours",
    "visit.day.mon": "Monday",
    "visit.day.tue": "Tuesday",
    "visit.day.wed": "Wednesday",
    "visit.day.thu": "Thursday",
    "visit.day.fri": "Friday",
    "visit.day.sat": "Saturday",
    "visit.day.sun": "Sunday",
    "visit.closed": "Closed",
    "visit.addressK": "Address",
    "visit.addressV": "4177 Saint-Denis St., 2<sup>nd</sup> floor<br>Montréal, QC H2W 2M7",
    "visit.directions": "On the 2<sup>nd</sup> floor, corner of Rachel & Saint-Denis · Mont-Royal metro a step away.",
    "visit.phoneK": "Phone",
    "visit.emailK": "Email",
    "visit.follow": "Follow us",

    /* contact */
    "contact.eyebrow": "Contact",
    "contact.title": "Drop us a line",
    "contact.sub": "A question, a reservation or just to say hi? Send us a message directly right here.",
    "contact.name": "Name",
    "contact.namePh": "Your name",
    "contact.email": "Email",
    "contact.emailPh": "you@example.com",
    "contact.phone": "Phone",
    "contact.phoneOpt": "(optional)",
    "contact.phonePh": "(514) 000-0000",
    "contact.subject": "Subject",
    "contact.subj.res": "Reservation",
    "contact.subj.event": "Private event",
    "contact.subj.info": "General info",
    "contact.subj.other": "Other",
    "contact.message": "Message",
    "contact.messagePh": "Tell us everything — date, number of people, occasion…",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.note": "We'll get back to you as fast as we can, promise.",
    "contact.ok": "Thanks! Your message is on its way. We'll be in touch soon. 🍻",
    "contact.bad": "Oops, something went wrong. Try again or email us at info@tavernabar.ca.",
    "contact.err.required": "This field is required.",
    "contact.err.email": "Enter a valid email.",
    "contact.quote": "“See you tonight!”",
    "contact.quoteSub": "Welcome home, in the heart of the Plateau.",

    /* footer */
    "footer.tagline": "The legendary social club and bar of Plateau-Mont-Royal. Forever the place where Montréal comes to celebrate.",
    "footer.explore": "Explore",
    "footer.visitUs": "Visit us",
    "footer.rights": "© 2026 Taverna. All rights reserved.",
    "footer.made": "Made with",
    "footer.madeEnd": "in Montréal"
  }
};

/* Expose helpers globally for main.js */
window.TAVERNA_I18N = TRANSLATIONS;

window.t = function (key, lang) {
  const l = lang || window.currentLang || "fr";
  return (TRANSLATIONS[l] && TRANSLATIONS[l][key]) || (TRANSLATIONS.fr[key]) || key;
};

window.applyLanguage = function (lang) {
  if (!TRANSLATIONS[lang]) lang = "fr";
  window.currentLang = lang;
  const dict = TRANSLATIONS[lang];

  // Text content (allows simple inline HTML like <sup>, <strong>, <span>)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] != null) el.setAttribute("placeholder", key in dict ? dict[key] : el.placeholder);
  });

  // Document / meta
  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", dict["hero.lede"]);

  // Toggle buttons state
  document.querySelectorAll("[data-lang-btn]").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
    b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang);
  });

  try { localStorage.setItem("taverna-lang", lang); } catch (e) {}

  // Let other modules (status pill, schedule highlight) re-render
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
};
