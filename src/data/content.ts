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
        name: 'MonBudget+',
        description: 'Plateforme de gestion budgétaire intelligente adaptée au contexte béninois (FCFA, Mobile Money, tontines), avec anticipation des déficits et recommandations personnalisées.',
        tags: ['Django', 'API REST', 'React'],
      },
      {
        name: 'TransportBenin',
        description: 'Projet web orienté transport et mobilité : gestion des données et développement des fonctionnalités principales.',
        tags: ['Django', 'JavaScript'],
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
        name: 'MonBudget+',
        description: 'Smart budgeting platform tailored to the Beninese context (FCFA, Mobile Money, tontines), with deficit forecasting and personalized recommendations.',
        tags: ['Django', 'REST API', 'React'],
      },
      {
        name: 'TransportBenin',
        description: 'Transport and mobility-focused web project: data management and core feature development.',
        tags: ['Django', 'JavaScript'],
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
