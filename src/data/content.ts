export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  live?: boolean;
  image?: string;
};

export type Lang = 'fr' | 'en';

const shared = {
  name: 'Mahugnon Chanel AKOUEHOU',
  location: 'Parakou, Bénin',
  email: 'chanochanel70@gmail.com',
  phones: ['+229 01 64 61 38 61', '+229 01 44 29 42 94'],
  whatsapp: 'https://wa.me/2290164613861',
  github: 'https://github.com/Shanel2005-dev',
  githubHandle: 'github.com/Shanel2005-dev',
};

export const content = {
  fr: {
    profile: {
      ...shared,
      title: 'Développeur Full Stack',
      tagline: "Je conçois des interfaces web modernes et performantes, et je construis les API qui vont avec.",
      availability: 'Disponible pour un projet',
      headline: 'Des applications web solides, du concept au déploiement.',
      heroBullets: [
        'Plus de 20 projets réalisés, pas des maquettes',
        'Du frontend React au backend Django, code propre',
        'Développeur Full Stack junior, rigoureux et autonome',
      ],
      bio: "Développeur Full Stack junior, passionné par la conception de solutions numériques innovantes. J'ai réalisé plus de vingt projets web et applicatifs dans les domaines de la réservation, de la mobilité, de l'immobilier et de la gestion. Je maîtrise le développement backend avec Python/Django, les bases de données relationnelles, Git et les API REST. Rigoureux, autonome et orienté résultats, je suis motivé à mettre mes compétences au service de projets ambitieux.",
    },
    stats: [
      { value: '20+', label: 'Projets réalisés' },
      { value: '2', label: "Ans d'expérience" },
      { value: '3', label: 'Langues parlées' },
      { value: '100%', label: 'Motivation' },
    ],
    skillGroups: [
      { label: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
      { label: 'Backend', skills: ['Python', 'Django', 'API REST', 'PostgreSQL', 'Supabase', 'SQLite'] },
      { label: 'Mobile', skills: ['Flutter (bases)'] },
      { label: 'Outils & Design', skills: ['Git', 'GitHub', 'VS Code', 'Figma'] },
      { label: 'En apprentissage', skills: ['Node.js', 'Express.js', 'MongoDB'] },
    ],
    services: [
      {
        title: 'Développement Web',
        description: 'Sites vitrines et plateformes web sur-mesure avec React, TypeScript et Tailwind CSS, connectés à des API REST robustes en Django.',
      },
      {
        title: 'Applications Full Stack',
        description: "Conception de bout en bout : base de données PostgreSQL, backend Django/API REST, interfaces React modernes et responsives.",
      },
      {
        title: 'Intégration & UI',
        description: "Transformation de maquettes en interfaces fidèles, propres et responsives, avec une attention particulière à l'expérience utilisateur.",
      },
    ],
    projects: [
      {
        name: 'TalentBJ',
        description: "Marketplace mettant en relation talents tech & business vérifiés avec des PME et particuliers en Afrique de l'Ouest. Paiement sécurisé via Mobile Money (escrow).",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://talentbj.vercel.app/',
        live: true,
      },
      {
        name: 'PHAROS BÉNIN',
        description: "Plateforme de réservation d'hébergements adaptée au marché béninois : hôtels, résidences, villas et auberges, paiement Mobile Money sécurisé.",
        tags: ['Django', 'PostgreSQL', 'React'],
        url: 'https://pharos-mu.vercel.app/',
        live: true,
      },
      {
        name: 'ImmoConnect',
        description: "Plateforme immobilière pour Parakou : achat, location et estimation de biens dans tous les quartiers (Titirou, Guéma, Banikanni...), avec espace propriétaire et back-office admin.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://immoconnect-rho.vercel.app/',
        live: true,
      },
      {
        name: 'JusticeBJ',
        description: "Plateforme d'accès au droit béninois : textes de loi, procédures administratives et judiciaires détaillées, et assistant IA pour répondre aux questions juridiques courantes.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://justicebj.vercel.app/',
        live: true,
      },
      {
        name: 'SecureID',
        description: "Plateforme de vérification d'identité (KYC) pour le Bénin : soumission de dossiers, scoring de risque et tableau de bord de suivi des demandes en temps réel.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://secureid-six.vercel.app/',
        live: true,
      },
      {
        name: 'PrudoPagne',
        description: "Boutique en ligne de tissus africains (wax, bazin, guipure, dentelle) : catalogue par catégorie, fiches produit et commande directe via WhatsApp, back-office de gestion des produits.",
        tags: ['React', 'TypeScript', 'Supabase'],
        url: 'https://prudopagne.vercel.app/',
        live: true,
      },
      {
        name: 'MediConnect',
        description: "Plateforme de prise de rendez-vous médicaux et téléconsultation : recherche de médecins par spécialité, profils détaillés, réservation de créneaux et tableau de bord patient.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://mediconnect-inky-three.vercel.app/',
        live: true,
      },
      {
        name: 'RideBenin',
        description: "Application de VTC pour le Bénin : suivi de course en temps réel sur carte, mise en relation chauffeur-passager et interface sombre inspirée des apps de mobilité modernes.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://ridebenin1.vercel.app/',
        live: true,
      },
      {
        name: 'EduBenin',
        description: "Plateforme d'apprentissage en ligne : catalogue de matières, cours structurés en chapitres, suivi de progression et quiz interactifs.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://edubenin-seven.vercel.app/',
        live: true,
      },
      {
        name: 'EnergieBJ',
        description: "Tableau de bord de gestion énergétique solaire : simulation de production et de stockage en temps réel, suivi des appareils connectés et estimation des coûts.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://energiebj.vercel.app/',
        live: true,
      },
      {
        name: 'AgroSmart',
        description: "Plateforme d'aide à l'agriculture : diagnostic de maladies des cultures par photo, suivi des prix du marché par région avec graphiques et outils pour producteurs.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://agrosmart-oa9p.vercel.app/',
        live: true,
      },
      {
        name: 'FoodHub',
        description: "Marketplace de livraison de repas : parcours client complet (restaurants, panier, paiement Mobile Money, suivi de commande en temps réel) et tableau de bord restaurateur.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://foodhub-gamma-pearl.vercel.app/',
        live: true,
      },
      {
        name: 'ExportAgro',
        description: "Marketplace B2B d'export agricole connectant les coopératives béninoises aux acheteurs internationaux : certifications (GlobalGAP, Fair Trade), fiches producteurs et devis en ligne.",
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://exportagro.vercel.app/',
        live: true,
      },
      {
        name: 'TransportBenin',
        description: "API backend pour la gestion du transport et de la mobilité (trajets, réservations, suivi), développée en Django REST Framework. Frontend web en cours de développement.",
        tags: ['Django', 'API REST', 'PostgreSQL'],
      },
    ] as Project[],
    experience: [
      {
        role: 'Stagiaire Développeur Full Stack',
        org: 'Light Innovation — Parakou',
        period: 'Avr. – Juil. 2026',
        points: [
          "Stage académique (3 mois) : conception et développement de PHAROS BENIN, plateforme de réservation d'hébergements.",
          'Travail en équipe sur MonBudget+, plateforme de gestion budgétaire intelligente adaptée au contexte béninois.',
        ],
      },
      {
        role: 'Gérant intérimaire',
        org: 'GD SOSSI',
        period: 'Juil. – Août 2024',
        points: ['Gestion des mises à jour logicielles et sécurité.'],
      },
    ],
    education: [
      { title: 'Licence Professionnelle – Informatique de Gestion', org: 'Université de Parakou – IUT', period: '2023 – 2026' },
      { title: 'Baccalauréat Série D', org: '', period: '2023' },
    ],
    languages: [
      { name: 'Français', level: 'Lu · Écrit · Parlé' },
      { name: 'Fon', level: 'Parlé · Lu' },
      { name: 'Mahi', level: 'Parlé · Lu' },
    ],
    faqs: [
      {
        question: 'Quels types de projets réalises-tu ?',
        answer: "Des sites vitrines, des plateformes web complètes (réservation, gestion, marketplace) et des interfaces connectées à des API REST — du frontend React au backend Django.",
      },
      {
        question: 'Quelle est ta stack technique préférée ?',
        answer: 'React + TypeScript + Tailwind CSS côté frontend, Python/Django + PostgreSQL côté backend.',
      },
      {
        question: 'Es-tu disponible pour un stage ou une alternance ?',
        answer: 'Oui, je termine ma Licence Professionnelle en 2026 et je suis disponible pour un stage, une alternance ou une première expérience professionnelle.',
      },
      {
        question: 'Travailles-tu à distance ?',
        answer: 'Oui, je peux travailler à distance ou en présentiel selon les besoins du projet.',
      },
    ],
    testimonials: [
      {
        name: 'Encadrant de stage',
        role: 'Light Innovation — Parakou',
        quote: "Chanel a rapidement pris en main le développement de PHAROS BENIN. Sérieux, autonome et à l'écoute des retours, il livre un travail propre dans les délais.",
      },
      {
        name: 'Camarade de promotion',
        role: 'Licence Informatique de Gestion — IUT Parakou',
        quote: "On a travaillé ensemble sur plusieurs projets académiques. Chanel est toujours partant pour approfondir un sujet technique et aider le reste de l'équipe à avancer.",
      },
      {
        name: 'Collaborateur projet',
        role: 'MonBudget+',
        quote: "Bonne communication, code lisible et respect des échéances. Un développeur junior sur qui on peut compter.",
      },
    ],
  },
  en: {
    profile: {
      ...shared,
      title: 'Full Stack Developer',
      tagline: 'I design modern, high-performance web interfaces, and I build the APIs behind them.',
      availability: 'Available for a project',
      headline: 'Solid web applications, from concept to deployment.',
      heroBullets: [
        '20+ projects delivered, not mockups',
        'From React frontend to Django backend, clean code',
        'Junior Full Stack developer, rigorous and autonomous',
      ],
      bio: "Junior Full Stack developer, passionate about building innovative digital solutions. I've built more than twenty web and app projects in booking, mobility, real estate and management. I'm skilled in backend development with Python/Django, relational databases, Git and REST APIs. Rigorous, autonomous and results-driven, I'm motivated to put my skills to work on ambitious projects.",
    },
    stats: [
      { value: '20+', label: 'Projects delivered' },
      { value: '2', label: 'Years of experience' },
      { value: '3', label: 'Languages spoken' },
      { value: '100%', label: 'Motivation' },
    ],
    skillGroups: [
      { label: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
      { label: 'Backend', skills: ['Python', 'Django', 'REST API', 'PostgreSQL', 'Supabase', 'SQLite'] },
      { label: 'Mobile', skills: ['Flutter (basics)'] },
      { label: 'Tools & Design', skills: ['Git', 'GitHub', 'VS Code', 'Figma'] },
      { label: 'Currently learning', skills: ['Node.js', 'Express.js', 'MongoDB'] },
    ],
    services: [
      {
        title: 'Web Development',
        description: 'Custom showcase sites and web platforms with React, TypeScript and Tailwind CSS, connected to robust Django REST APIs.',
      },
      {
        title: 'Full Stack Applications',
        description: 'End-to-end design: PostgreSQL database, Django/REST API backend, modern and responsive React interfaces.',
      },
      {
        title: 'UI Integration',
        description: 'Turning designs into faithful, clean and responsive interfaces, with close attention to user experience.',
      },
    ],
    projects: [
      {
        name: 'TalentBJ',
        description: 'Marketplace connecting verified tech & business talent with SMEs and individuals across West Africa. Secure Mobile Money payments (escrow).',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://talentbj.vercel.app/',
        live: true,
      },
      {
        name: 'PHAROS BÉNIN',
        description: 'Accommodation booking platform tailored to the Beninese market: hotels, residences, villas and guesthouses, secure Mobile Money payment.',
        tags: ['Django', 'PostgreSQL', 'React'],
        url: 'https://pharos-mu.vercel.app/',
        live: true,
      },
      {
        name: 'ImmoConnect',
        description: 'Real estate platform for Parakou: buying, renting and property estimation across every neighborhood (Titirou, Guéma, Banikanni...), with an owner portal and admin back-office.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://immoconnect-rho.vercel.app/',
        live: true,
      },
      {
        name: 'JusticeBJ',
        description: 'Access-to-justice platform for Benin: legal texts, detailed administrative and judicial procedures, and an AI assistant answering common legal questions.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://justicebj.vercel.app/',
        live: true,
      },
      {
        name: 'SecureID',
        description: 'Identity verification (KYC) platform for Benin: application submission, risk scoring and a real-time dashboard to track requests.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://secureid-six.vercel.app/',
        live: true,
      },
      {
        name: 'PrudoPagne',
        description: 'Online boutique for African fabrics (wax, bazin, guipure, lace): category catalogue, product pages and direct WhatsApp ordering, plus an admin back-office for product management.',
        tags: ['React', 'TypeScript', 'Supabase'],
        url: 'https://prudopagne.vercel.app/',
        live: true,
      },
      {
        name: 'MediConnect',
        description: 'Doctor booking and telehealth platform: search doctors by specialty, detailed profiles, appointment scheduling and a patient dashboard.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://mediconnect-inky-three.vercel.app/',
        live: true,
      },
      {
        name: 'RideBenin',
        description: 'Ride-hailing app for Benin: real-time ride tracking on a map, driver-passenger matching and a dark UI inspired by modern mobility apps.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://ridebenin1.vercel.app/',
        live: true,
      },
      {
        name: 'EduBenin',
        description: 'Online learning platform: subject catalogue, courses structured into chapters, progress tracking and interactive quizzes.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://edubenin-seven.vercel.app/',
        live: true,
      },
      {
        name: 'EnergieBJ',
        description: 'Solar energy management dashboard: real-time production and storage simulation, connected device tracking and cost estimation.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://energiebj.vercel.app/',
        live: true,
      },
      {
        name: 'AgroSmart',
        description: 'Farming assistance platform: photo-based crop disease diagnosis, regional market price tracking with charts, and tools for producers.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://agrosmart-oa9p.vercel.app/',
        live: true,
      },
      {
        name: 'FoodHub',
        description: 'Food delivery marketplace: full customer journey (restaurants, cart, Mobile Money checkout, real-time order tracking) and a restaurant-owner dashboard.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://foodhub-gamma-pearl.vercel.app/',
        live: true,
      },
      {
        name: 'ExportAgro',
        description: 'B2B agro-export marketplace connecting Beninese cooperatives to international buyers: certifications (GlobalGAP, Fair Trade), producer profiles and online quote requests.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        url: 'https://exportagro.vercel.app/',
        live: true,
      },
      {
        name: 'TransportBenin',
        description: 'Backend API for transport and mobility management (trips, bookings, tracking), built with Django REST Framework. Web frontend currently in development.',
        tags: ['Django', 'REST API', 'PostgreSQL'],
      },
    ] as Project[],
    experience: [
      {
        role: 'Full Stack Developer Intern',
        org: 'Light Innovation — Parakou',
        period: 'Apr. – Jul. 2026',
        points: [
          'Academic internship (3 months): design and development of PHAROS BENIN, an accommodation booking platform.',
          'Teamwork on MonBudget+, a smart budgeting platform tailored to the Beninese context.',
        ],
      },
      {
        role: 'Interim Manager',
        org: 'GD SOSSI',
        period: 'Jul. – Aug. 2024',
        points: ['Software updates and security management.'],
      },
    ],
    education: [
      { title: 'Professional Bachelor – Business Informatics', org: 'University of Parakou – IUT', period: '2023 – 2026' },
      { title: 'High School Diploma (Série D)', org: '', period: '2023' },
    ],
    languages: [
      { name: 'French', level: 'Read · Written · Spoken' },
      { name: 'Fon', level: 'Spoken · Read' },
      { name: 'Mahi', level: 'Spoken · Read' },
    ],
    faqs: [
      {
        question: 'What kind of projects do you build?',
        answer: 'Showcase sites, full web platforms (booking, management, marketplace) and interfaces connected to REST APIs — from React frontend to Django backend.',
      },
      {
        question: "What's your preferred tech stack?",
        answer: 'React + TypeScript + Tailwind CSS on the frontend, Python/Django + PostgreSQL on the backend.',
      },
      {
        question: 'Are you available for an internship or apprenticeship?',
        answer: "Yes, I'm finishing my Professional Bachelor's degree in 2026 and I'm available for an internship, apprenticeship or first professional role.",
      },
      {
        question: 'Do you work remotely?',
        answer: 'Yes, I can work remotely or on-site depending on the project.',
      },
    ],
    testimonials: [
      {
        name: 'Internship supervisor',
        role: 'Light Innovation — Parakou',
        quote: 'Chanel quickly took ownership of PHAROS BENIN. Serious, autonomous and receptive to feedback, he delivers clean work on time.',
      },
      {
        name: 'Fellow student',
        role: 'Business Informatics — University of Parakou (IUT)',
        quote: "We worked together on several academic projects. Chanel is always ready to dig into a technical topic and help the rest of the team move forward.",
      },
      {
        name: 'Project collaborator',
        role: 'MonBudget+',
        quote: 'Good communication, readable code and respect for deadlines. A junior developer you can rely on.',
      },
    ],
  },
} satisfies Record<Lang, unknown>;
