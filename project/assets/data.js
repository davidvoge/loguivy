// Loguivy-Plougras — shared data (structure alignée sur loguivy-plougras.fr, réorganisée pour la nav à 5 piliers)
window.SITE_DATA = {
  contact: {
    phoneDisplay: '02 96 38 52 59',
    phoneTel: '+33296385259',
    faxDisplay: '02 96 38 53 86',
    faxTel: '+33296385386',
    email: 'mairie@loguivy-plougras.fr',
    addressShort: '1 place de la Mairie',
    addressFull: '1 place de la Mairie, 22780 Loguivy-Plougras',
  },

  nav: [
    { id: 'accueil', label: 'Accueil', targetPage: 'home', theme: 'teal' },
    { id: 'territoire', label: 'Le territoire', targetPage: 'territoire', theme: 'green' },
    { id: 'mairie', label: 'La mairie', targetPage: 'mairie', theme: 'teal' },
    { id: 'demarches', label: 'Mes démarches', targetPage: 'demarches', theme: 'purple' },
    { id: 'culture', label: 'Culture & tourisme', targetPage: 'culture', theme: 'orange' },
    { id: 'vie-locale', label: 'Vie locale', targetPage: 'vie-locale', theme: 'green' },
  ],

  /** Sections du plan du site (navigation interne du prototype) */
  siteMapSections: [
    {
      title: 'Accueil',
      theme: 'teal',
      page: 'home',
      links: [{ label: "Fil d'actualités & agenda", page: 'home' }],
    },
    {
      title: 'Le territoire',
      theme: 'green',
      page: 'territoire',
      links: [
        { label: 'Le bourg et les hameaux', page: 'territoire' },
        { label: 'Carte interactive des quartiers', page: 'territoire' },
      ],
    },
    {
      title: 'La mairie',
      theme: 'teal',
      page: 'mairie',
      links: [
        { label: 'Le conseil municipal', page: 'mairie' },
        { label: 'Nous trouver & horaires', page: 'mairie' },
        { label: 'Comptes rendus & procès-verbaux', page: 'mairie' },
        { label: 'Arrêtés de délégation', page: 'mairie' },
        { label: "Calendrier d'événements", page: 'mairie' },
      ],
    },
    {
      title: 'Mes démarches',
      theme: 'purple',
      page: 'demarches',
      links: [
        { label: 'Urbanisme & PLU(iH)', page: 'demarches' },
        { label: 'État civil', page: 'demarches' },
        { label: 'Démarches citoyennes', page: 'demarches' },
        { label: 'École & enfance', page: 'demarches' },
        { label: 'Social & solidaire', page: 'demarches' },
        { label: 'Réservations (salles, gîte, matériel)', page: 'demarches' },
        { label: 'Déchets & tri', page: 'demarches' },
        { label: 'Commerces, artisans & services', page: 'demarches' },
      ],
    },
    {
      title: 'Culture & tourisme',
      theme: 'orange',
      page: 'culture',
      links: [
        { label: 'Patrimoine & histoire', page: 'culture' },
        { label: 'Médiathèque', page: 'culture' },
        { label: 'Associations & vie festive', page: 'culture' },
        { label: 'Équipements & loisirs', page: 'culture' },
        { label: 'Randonnées & cartes', page: 'culture' },
      ],
    },
    {
      title: 'Vie locale',
      theme: 'green',
      page: 'vie-locale',
      links: [
        { label: 'Associations & contacts', page: 'vie-locale' },
        { label: 'Équipements de proximité', page: 'vie-locale' },
        { label: 'Commerces & services du quotidien', page: 'vie-locale' },
        { label: 'Événements récurrents', page: 'vie-locale' },
      ],
    },
    {
      title: 'Informations transverses',
      theme: 'teal',
      page: 'plan-site',
      links: [
        { label: 'Plan du site', page: 'plan-site' },
        { label: 'Mentions légales', page: 'mentions-legales' },
        { label: 'Données personnelles', page: 'donnees-personnelles' },
        { label: "Déclaration d'accessibilité", page: 'accessibilite' },
      ],
    },
  ],

  mairieTiles: [
    { theme: 'teal', eyebrow: 'Institution', title: 'Le conseil municipal', desc: 'Composition, commissions, ordres du jour et dates des séances publiques.', icon: 'users' },
    { theme: 'teal', eyebrow: 'Accueil', title: 'Nous trouver & horaires', desc: 'Mairie et agence postale : accueil du lundi au samedi 9h–12h, permanences sur rendez-vous.', icon: 'map-pin' },
    { theme: 'teal', eyebrow: 'Transparence', title: 'Comptes rendus & PV', desc: 'Convocations, procès-verbaux et documents budgéaires à consulter ou télécharger.', icon: 'file' },
    { theme: 'teal', eyebrow: 'Gouvernance', title: "Arrêtés de délégation aux adjoints", desc: 'Pouvoirs délégués et signatures autorisées, mis à jour après chaque mandature.', icon: 'book' },
    { theme: 'teal', eyebrow: 'Agenda', title: "Calendrier d'événements", desc: 'Réunions publiques, cérémonies et temps forts de la vie communale.', icon: 'calendar' },
  ],

  vieLocaleTiles: [
    { theme: 'green', eyebrow: 'Tissu associatif', title: 'Associations & clubs', desc: 'Liste des associations, permanences, débit de boissons et événements récurrents.', icon: 'users' },
    { theme: 'green', eyebrow: 'Proximité', title: 'Équipements & loisirs', desc: 'City-stade, boulodrome, espaces verts, cabane à livres, borne recharge, parkings.', icon: 'map' },
    { theme: 'green', eyebrow: 'Économie', title: 'Commerces & artisans', desc: 'Annuaire des commerces, artisans et services utiles au quotidien sur le territoire.', icon: 'building' },
    { theme: 'green', eyebrow: 'Convivialité', title: 'Villages & fêtes', desc: 'Vie dans les hameaux, fêtes patronales et rendez-vous intergénérationnels.', icon: 'heart' },
  ],

  culturePillars: [
    { t: 'orange', l: 'Patrimoine & histoire', title: 'Églises, fontaines, rivière', desc: 'Histoire locale, patrimoine bâti, flore & faune du territoire.', icon: 'book' },
    { t: 'orange', l: 'Médiathèque', title: 'Lire & emprunter', desc: 'Horaires, animations et accès au réseau de lecture publique.', icon: 'book' },
    { t: 'orange', l: 'Associations', title: 'Vie festive & culturelle', desc: 'Contacts, événements musicaux et pratiques associatives.', icon: 'users' },
    { t: 'orange', l: 'Équipements', title: 'Lieux & pratique sportive', desc: 'Terrain de foot, city stade, toilettes publiques, espaces verts.', icon: 'map-pin' },
    { t: 'orange', l: 'Randonnées', title: 'Cartes & sentiers', desc: 'Forêt de Beffou, balisage, cabane du sabotier, points de vue.', icon: 'tree' },
  ],

  cultureDiscoverTitles: [
    "L'espace Lomic borde le Saint-Emilion",
    'De nombreux concerts dans nos chapelles',
    'En forêt de Beffou, la cabane du sabotier',
    'Des fêtes dans tous les villages de la commune',
    'Au Dresnay, le gîte communal vous accueille',
    'Des spectacles avec la Convergence des Loutres',
    'La danse bretonne parmi les activités au bourg',
    'Dès les beaux jours, les fleurs du Saint-Emilion',
    'Fêtes patronales, course de caisses à savon',
  ],

  quickAccess: [
    { theme: 'purple', icon: 'building',  title: "Urbanisme", desc: "Permis, déclarations, règles du PLU(iH).", targetPage: 'demarches' },
    { theme: 'purple', icon: 'id-card',   title: "État civil", desc: "Actes, mariage, PACS, reconnaissance.", targetPage: 'demarches' },
    { theme: 'green',  icon: 'recycle',   title: "Déchets", desc: "Calendrier, points de tri, compostage.", targetPage: 'demarches' },
    { theme: 'orange', icon: 'key',       title: "Réservations", desc: "Salles, gîte, matériel communal.", targetPage: 'demarches' },
  ],

  rubrics: [
    { theme: 'teal',   count: '01', eyebrow: "Mairie", title: "Le conseil\n& les élus", desc: "Qui fait quoi, comptes rendus, commissions, calendrier des séances.", targetPage: 'mairie' },
    { theme: 'purple', count: '02', eyebrow: "Démarches", title: "Vos\ndémarches", desc: "État civil, urbanisme, école, social — 42 services en un clic.", targetPage: 'demarches' },
    { theme: 'orange', count: '03', eyebrow: "Découverte", title: "Culture\n& tourisme", desc: "Patrimoine, chapelles, fontaines, randonnées en forêt de Beffou.", targetPage: 'culture' },
    { theme: 'green',  count: '04', eyebrow: "Vie locale", title: "Associations\n& équipements", desc: "Clubs, salles, city-stade, cabane à livres, événements récurrents.", targetPage: 'vie-locale' },
  ],

  news: [
    {
      featured: true,
      theme: 'teal',
      category: "Conseil municipal",
      date: "17 mars 2026",
      title: "Convocation au conseil municipal du 21 mars",
      excerpt: "L'ordre du jour et les pièces jointes sont disponibles en téléchargement. La séance est publique et commence à 20h en salle du conseil.",
    },
    {
      theme: 'purple',
      category: "Procès-verbal",
      date: "29 janvier 2026",
      title: "PV de la séance du 29 janvier 2026",
      excerpt: "Budget primitif, travaux de voirie, convention médiathèque — lire le compte rendu intégral.",
    },
    {
      theme: 'green',
      category: "Vie associative",
      date: "25 novembre 2025",
      title: "Vente de sapins de Noël par l'école",
      excerpt: "L'amicale laïque organise sa vente annuelle. Bon de commande à remettre avant le 5 décembre.",
    },
  ],

  agenda: [
    { theme: 'teal',   day: '21', month: 'Mars', title: "Conseil municipal", meta: ["20h00", "Salle du conseil", "Public"] },
    { theme: 'orange', day: '28', month: 'Mars', title: "Concert à la chapelle de Loc-Maria", meta: ["20h30", "Musique sacrée", "Entrée libre"] },
    { theme: 'green',  day: '05', month: 'Avril', title: "Nettoyage de printemps", meta: ["9h30", "Départ place de la mairie"] },
    { theme: 'purple', day: '12', month: 'Avril', title: "Permanence urbanisme", meta: ["14h00", "Mairie", "Sur RDV"] },
  ],

  discover: [
    { theme: 'orange', tag: "Patrimoine", title: "L'espace Lomic, au bord du Saint-Emilion", desc: "Un lieu de promenade familial, ombragé, ouvert toute l'année.", targetPage: 'culture' },
    { theme: 'orange', tag: "Randonnée",  title: "La forêt de Beffou & la cabane du sabotier", desc: "Huit kilomètres balisés à travers hêtraie et clairières.", targetPage: 'culture' },
    { theme: 'orange', tag: "Culture",    title: "Les chapelles en concert", desc: "Programme musical de mai à septembre, 6 rendez-vous.", targetPage: 'culture' },
  ],

  /** Textes page « Le territoire » */
  territoireIntro: {
    title: 'Le bourg et ses hameaux',
    lead: "Loguivy-Plougras, c'est un bourg et une vingtaine de villages et lieux-dits répartis sur 4 800 hectares. Chaque hameau a son caractère, son chemin, sa fontaine.",
    noteCarte: "Cliquez sur une zone colorée ou sur un nom dans la liste pour zoomer et afficher le descriptif. Les contours sont indicatifs (prototype) : à remplacer par un tracé officiel (cadastre, SIG) en production.",
  },

  /**
   * Quartiers / hameaux — carte Leaflet (cercles en mètres, centrages approximatifs pour le prototype).
   * Ajuster lat, lng, radiusM ou remplacer par un tableau polygon: [[lat,lng], ...] si vous exportez du GeoJSON.
   */
  quartiers: [
    { id: 'bourg', nom: 'Le Bourg', lat: 48.7363, lng: -3.2415, radiusM: 900, desc: 'Centre administratif, école, commerces de proximité, agence postale.' },
    { id: 'dresnay', nom: 'Le Dresnay', lat: 48.7285, lng: -3.2210, radiusM: 750, desc: 'Hameau au sud-est, gîte communal et chemins de randonnée.' },
    { id: 'kerprigent', nom: 'Kerprigent', lat: 48.7448, lng: -3.2520, radiusM: 700, desc: 'Bocage et hameaux dispersés vers le nord-ouest.' },
    { id: 'loc-maria', nom: 'Loc-Maria', lat: 48.7215, lng: -3.2580, radiusM: 650, desc: 'Chapelle et patrimoine religieux, concerts estivaux.' },
    { id: 'kergadiou', nom: 'Kergadiou', lat: 48.7510, lng: -3.2180, radiusM: 720, desc: 'Hameaux vallonnés, vue vers la forêt de Beffou.' },
    { id: 'kerguiniou', nom: 'Kerguiniou', lat: 48.7310, lng: -3.2780, radiusM: 680, desc: 'Secteur ouest, chemins creux et fontaines.' },
    { id: 'coat-glas', nom: 'Coat-Glas', lat: 48.7475, lng: -3.2680, radiusM: 700, desc: 'Landes et haies, accès sentiers pédestres.' },
    { id: 'pen-ar-hoat', nom: 'Pen-ar-Hoat', lat: 48.7175, lng: -3.2280, radiusM: 800, desc: 'Sud du territoire, liaison vers les routes de Plougras.' },
    { id: 'keribyou', nom: 'Keribyou', lat: 48.7535, lng: -3.2390, radiusM: 620, desc: 'Nord-est, habitat groupé et lotissements ruraux.' },
  ],

  /** Emprise carte (ajustée aux quartiers ci-dessus) */
  territoryMap: {
    center: [48.735, -3.24],
    zoom: 12,
    bounds: [[48.705, -3.30], [48.765, -3.18]],
  },

  demarchesCategories: [
    { id: 'urbanisme',  label: "Urbanisme",   count: 5, theme: 'purple' },
    { id: 'etat-civil', label: "État civil",  count: 9, theme: 'purple' },
    { id: 'ecole',      label: "École",       count: 5, theme: 'teal' },
    { id: 'social',     label: "Social & solidaire", count: 7, theme: 'orange' },
    { id: 'dechets',    label: "Déchets",     count: 5, theme: 'green' },
    { id: 'reservations', label: "Réservations", count: 5, theme: 'orange' },
    { id: 'citoyen',    label: "Citoyenneté", count: 2, theme: 'purple' },
    { id: 'commerces',  label: "Commerces",   count: 1, theme: 'green' },
  ],

  demarchesByGroup: {
    urbanisme: {
      theme: 'purple', label: "Urbanisme",
      items: [
        { icon: 'file', title: "PLU(iH)", desc: "Plan local d'urbanisme intercommunal" },
        { icon: 'map', title: "Zones",  desc: "Règlement par zonage" },
        { icon: 'book', title: "Règles d'urbanisme", desc: "Ce que vous pouvez construire" },
        { icon: 'send', title: "Demande en ligne", desc: "Déposer un dossier dématérialisé" },
        { icon: 'coin', title: "Infos taxes", desc: "Taxe d'aménagement, redevances" },
      ],
    },
    etatCivil: {
      theme: 'purple', label: "État civil",
      items: [
        { icon: 'file',  title: "Demande d'actes", desc: "Naissance, mariage, décès" },
        { icon: 'baby',  title: "Infos naissance", desc: "Déclaration et livret" },
        { icon: 'heart', title: "Mariage", desc: "Dossier, publication des bans" },
        { icon: 'link',  title: "PACS", desc: "Conclure ou modifier un PACS" },
        { icon: 'users', title: "Reconnaissance", desc: "Reconnaître un enfant" },
        { icon: 'file',  title: "Dossiers à télécharger", desc: "Formulaires officiels" },
        { icon: 'flag',  title: "Recensement jeunes", desc: "Obligatoire à 16 ans" },
        { icon: 'tree',  title: "Décès & cimetière", desc: "Démarches et concessions" },
        { icon: 'key',   title: "Certificat de baptême", desc: "Ouvrir l'église, archives" },
      ],
    },
    dechets: {
      theme: 'green', label: "Déchets & tri",
      items: [
        { icon: 'calendar', title: "Jours de collecte", desc: "Calendrier 2026 par secteur" },
        { icon: 'truck',   title: "Encombrants", desc: "Prise de rendez-vous trimestrielle" },
        { icon: 'recycle', title: "Points recyclage", desc: "Verre, textile, papier" },
        { icon: 'send',    title: "Demande de bac", desc: "Via Lannion-Trégor Communauté" },
        { icon: 'leaf',    title: "Compostage", desc: "Retirer un composteur" },
      ],
    },
    ecole: {
      theme: 'teal', label: "École & enfance",
      items: [
        { icon: 'book', title: "École & garderie", desc: "Présentation et horaires" },
        { icon: 'fork', title: "Cantine", desc: "Menus et inscription" },
        { icon: 'bus',  title: "Transport scolaire", desc: "Lignes et tarifs" },
        { icon: 'users', title: "Amicale laïque", desc: "Événements et projets" },
        { icon: 'heart', title: "Parents d'élèves", desc: "Représentants et réunions" },
      ],
    },
    social: {
      theme: 'orange', label: "Social & solidaire",
      items: [
        { icon: 'users', title: "Présentation CCAS", desc: "Aides, orientation et permanences" },
        { icon: 'heart', title: "Portage de repas", desc: "Portage à domicile sur inscription" },
        { icon: 'leaf', title: "Banque alimentaire", desc: "Dates et modalités de distribution" },
        { icon: 'phone', title: "Professionnels de santé", desc: "Contacts utiles sur le territoire" },
        { icon: 'users', title: "Garde d'enfants", desc: "Solutions locales et listes" },
        { icon: 'building', title: "France Services", desc: "Permanence et démarches accompagnées" },
        { icon: 'heart', title: "EHPAD", desc: "Établissement et lien avec la mairie" },
      ],
    },
    reservations: {
      theme: 'orange', label: "Réservations",
      items: [
        { icon: 'building', title: "Salles communales", desc: "Disponibilités et demandes" },
        { icon: 'calendar', title: "Gîte communal", desc: "Agenda et conditions de location" },
        { icon: 'key', title: "Matériel communal", desc: "Prêt et réservation en ligne" },
        { icon: 'coin', title: "Tarifs", desc: "Grilles et caution" },
        { icon: 'send', title: "Paiement en ligne", desc: "Règlement des locations" },
      ],
    },
    citoyen: {
      theme: 'purple', label: "Démarches citoyennes",
      items: [
        { icon: 'flag', title: "Liste électorale", desc: "Inscription, transfert et radiation" },
        { icon: 'users', title: "Recensement", desc: "Obligation à 16 ans et rendez-vous" },
      ],
    },
    commerces: {
      theme: 'green', label: "Commerces, artisans & services",
      items: [
        { icon: 'building', title: "Annuaire local", desc: "Commerces, artisans et services de proximité" },
      ],
    },
  },

  /** Ordre d'affichage des blocs sur le hub Démarches */
  demarchesGroupOrder: [
    'urbanisme', 'etatCivil', 'citoyen', 'ecole', 'social', 'reservations', 'dechets', 'commerces',
  ],

  tweakDefaults: /*EDITMODE-BEGIN*/{
    "variation": "a",
    "density": "comfortable",
    "showStripes": true,
    "primaryTone": "teal"
  }/*EDITMODE-END*/,

  bulletin: [
    { type: 'urgent',  theme: 'orange', label: "Info pratique", title: "Travaux rue des Ajoncs", text: "Circulation alternée du 3 au 14 avril. Ramassage des ordures décalé au mercredi." },
    { type: 'avis',    theme: 'purple', label: "Enquête publique", title: "PLU(iH) — phase de concertation", text: "Registre consultable en mairie jusqu'au 30 avril. Permanence du commissaire le 18 avril." },
    { type: 'info',    theme: 'green',  label: "Environnement", title: "Concours maisons fleuries 2026", text: "Inscriptions ouvertes jusqu'au 31 mai auprès de Marie-Hélène au secrétariat." },
  ],

  services: [
    { icon: 'bus',     title: "Transport scolaire", meta: "Ligne 15 · direction Plouaret" },
    { icon: 'heart',   title: "Portage de repas", meta: "Tous les midis, 7j/7" },
    { icon: 'book',    title: "Médiathèque", meta: "Mer. 14h–17h · Sam. 10h–12h" },
    { icon: 'users',   title: "France Services", meta: "Permanence le jeudi matin" },
    { icon: 'leaf',    title: "Banque alimentaire", meta: "Distribution 2ᵉ et 4ᵉ mardi" },
    { icon: 'fork',    title: "Cantine scolaire", meta: "Menu 100% local, 2 fois/semaine" },
  ],

  villages: [
    "Le Bourg", "Le Dresnay", "Kerprigent", "Loc-Maria", "Kergadiou",
    "Kerguiniou", "Coat-Glas", "Pen-ar-Hoat", "Keribyou",
  ],

  keyFigures: [
    { n: "650", l: "habitants" },
    { n: "4 800", l: "hectares" },
    { n: "17", l: "associations" },
    { n: "5", l: "chapelles" },
    { n: "12", l: "fontaines" },
  ],

  footerColumns: [
    {
      title: 'La mairie',
      links: [
        { label: 'Le conseil municipal', page: 'mairie' },
        { label: 'Nous trouver', page: 'mairie' },
        { label: 'Comptes rendus', page: 'mairie' },
        { label: "Délégations d'adjoints", page: 'mairie' },
        { label: "Calendrier d'événements", page: 'mairie' },
      ],
    },
    {
      title: 'Démarches',
      links: [
        { label: 'Urbanisme', page: 'demarches' },
        { label: 'État civil', page: 'demarches' },
        { label: 'École', page: 'demarches' },
        { label: 'Social & solidaire', page: 'demarches' },
        { label: 'Réservations de salles', page: 'demarches' },
      ],
    },
    {
      title: 'Découvrir',
      links: [
        { label: 'Le territoire', page: 'territoire' },
        { label: 'Patrimoine & histoire', page: 'culture' },
        { label: 'Médiathèque', page: 'culture' },
        { label: 'Randonnées', page: 'culture' },
        { label: 'Associations', page: 'culture' },
        { label: 'Vie locale', page: 'vie-locale' },
      ],
    },
  ],
};
