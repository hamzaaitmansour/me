/* Portfolio content: every visible string in FR and EN.
   Static page strings: FR lives in index.html, EN lives in STRINGS.en.
   Projects, services and the experience reel are rendered from here. */
(function () {
  'use strict';

  var CV = {
    fr: 'cv/fr/hamza.aitmansour-flutter.pdf',
    en: 'cv/eng/hamza.aitmansour-flutter-en.pdf'
  };

  var STRINGS = {
    en: {
      'leader.credit': 'A production by',
      'skip': 'Skip to content',
      'status.long': 'Available · open to opportunities',
      'status.short': 'Available',
      'nav.label': 'Sections',
      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.experience': 'Experience',
      'nav.about': 'Off camera',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',
      'nav.cvlong': 'Download the CV',
      'lang.label': 'Language',
      'menu': 'Menu',
      'close': 'Close',
      'hero.alt': 'Portrait of Hamza Ait Mansour in a grey blazer',
      'hero.role': 'Flutter Mobile Engineer',
      'hero.line': 'I build Flutter apps, and I ship the API and the cloud they run on too.',
      'hero.links': 'Links',
      'cta.cv': 'Download CV',
      'cta.work': 'See the work',
      'chip.mail': 'Email',
      'chip.phone': 'Phone',
      'chip.city': 'Rabat, Morocco',
      'billing.label': 'Credits',
      'billing.now': 'Now',
      'billing.school': 'Trained at',
      'billing.schoolv': 'ENSA Agadir · State Engineer 2026',
      'billing.cert': 'Certified',
      'billing.lang': 'Languages',
      'work.ghost': 'Now showing',
      'work.title': 'Selected work',
      'work.filter': 'Filter projects',
      'work.github': 'Everything on GitHub',
      'f.all': 'All',
      'f.pro': 'Professional',
      'f.hack': 'Hackathons',
      'f.side': 'School & side',
      'shorts.title': 'Short films',
      'services.ghost': 'Craft',
      'services.title': 'What I do',
      'exp.ghost': 'Filmography',
      'exp.title': 'Experience',
      'exp.aside': 'State Engineer · ENSA Agadir · 2026',
      'about.ghost': 'Backstage',
      'about.title': 'Off camera',
      'about.alt': 'Hamza Ait Mansour smiling, holding a bouquet of roses on his graduation day',
      'about.caption': 'ENSA Agadir · June 2026',
      'about.colour': 'Show the photo in colour',
      'about.lede': 'A State Engineer in Computer Engineering, I work as a Mobile Engineer at Tandeem in Rabat. I build clean, tested Flutter apps, and I like going one floor down: the API, the database, the AWS infrastructure they run on.',
      'about.p2': 'I defended my final-year project on 26 June 2026, on the Tandeem SaaS platform. I work in Scrum, talking directly with the client, alongside the backend, front-end and mobile teams.',
      'facts.edu': 'Education',
      'facts.eduv': 'State Engineering Degree in Computer Engineering, ENSA Agadir, 2021–2026',
      'facts.cert': 'Certification',
      'facts.lang': 'Languages',
      'facts.langv': 'Arabic (native) · French B2 · English B2',
      'facts.vol': 'Volunteering',
      'facts.vol1': '<strong>Motatawi3, 2024.</strong> Workshops on the environment, health, AI and social engagement, then two weeks of volunteering at a neighbourhood hospital in Agadir.',
      'facts.vol2': '<strong>Guidance, 2024.</strong> Three guidance sessions for high-school students on studies after the baccalaureate, presenting ENSA and the paths it opens.',
      'contact.title': 'Hiring?',
      'contact.line': "Mobile, backend or cloud: let's talk about your team and your product.",
      'contact.write': 'Write to me',
      'contact.status': 'Based in Rabat, Morocco · open to opportunities',
      'fin.word': 'The End',
      'fin.printed': 'Printed in Rabat, Morocco',
      'fin.top': 'Back to top'
    }
  };

  /* Interface words used by the rendered parts, both languages. */
  var UI = {
    fr: {
      open: 'Ouvrir le dossier',
      back: 'Retour aux projets',
      context: 'Cadre',
      role: 'Rôle',
      period: 'Période',
      stack: 'Stack',
      built: "Ce que j'ai construit",
      gallery: 'Images',
      next: 'Projet suivant',
      code: 'Voir le code',
      site: 'Voir le site',
      challenge: 'Le défi officiel',
      contact: 'Me contacter',
      kinds: { pro: 'Projet réel', hack: 'Hackathon', side: 'Projet perso' },
      now: 'En cours',
      more: 'Détails',
      less: 'Replier',
      copied: 'Adresse copiée',
      copyFail: 'Copie impossible, sélectionnez l’adresse',
      docTitle: 'Hamza Ait Mansour · Mobile Engineer Flutter',
      confidential: 'Confidentiel',
      shown: function (n) { return n + (n > 1 ? ' projets affichés' : ' projet affiché'); }
    },
    en: {
      open: 'Open the file',
      back: 'Back to the work',
      context: 'Context',
      role: 'Role',
      period: 'Period',
      stack: 'Stack',
      built: 'What I built',
      gallery: 'Images',
      next: 'Next project',
      code: 'View the code',
      site: 'Visit the site',
      challenge: 'The official challenge',
      contact: 'Contact me',
      kinds: { pro: 'Real project', hack: 'Hackathon', side: 'Side project' },
      now: 'Now',
      more: 'Details',
      less: 'Fold',
      copied: 'Address copied',
      copyFail: 'Could not copy, select the address',
      docTitle: 'Hamza Ait Mansour · Flutter Mobile Engineer',
      confidential: 'Confidential',
      shown: function (n) { return n + (n > 1 ? ' projects shown' : ' project shown'); }
    }
  };

  var IMG = 'assets/img/';

  var PROJECTS = [
    {
      id: 'covoiturage', kind: 'pro', year: '2026', art: 'route',
      title: { fr: 'Covoiturage', en: 'Carpooling' },
      sub: { fr: 'Tandeem · module entreprise', en: 'Tandeem · company module' },
      tags: ['Flutter', 'Node.js', 'PostGIS', 'OSRM'],
      summary: {
        fr: "Le covoiturage entre collègues, de bout en bout : l'app Flutter, l'API et un moteur d'itinéraires auto-hébergé.",
        en: 'Carpooling between colleagues, end to end: the Flutter app, the API and a self-hosted routing engine.'
      },
      role: { fr: 'Conception et développement full-stack, mobile et API', en: 'Full-stack design and build, mobile and API' },
      period: { fr: '2026 · Tandeem, Rabat', en: '2026 · Tandeem, Rabat' },
      stack: ['Flutter', 'Provider / MVVM', 'go_router', 'Node.js', 'Prisma', 'PostgreSQL + PostGIS', 'OSRM', 'Docker'],
      built: {
        fr: [
          '11 écrans Flutter : trajets du conducteur, recherche et réservation passager, jour du trajet, chat d’équipage, statistiques et classement.',
          'Mise en relation par corridor avec PostGIS, itinéraires calculés par un OSRM auto-hébergé sur les données OpenStreetMap du Maroc.',
          'Check-in par QR code tournant signé HMAC, registre de récompenses et tableau de bord RSE mensuel.',
          'Anti-triche : détection d’anomalies, gestion des absences et des litiges.',
          'Environ 45 routes d’API et 14 modèles Prisma, couverts par des tests Vitest et Flutter.'
        ],
        en: [
          '11 Flutter screens: driver trips, passenger search and booking, trip day, crew chat, stats and leaderboard.',
          "Corridor matching with PostGIS, with routes computed by a self-hosted OSRM on Morocco's OpenStreetMap data.",
          'Check-in through an HMAC-signed rotating QR code, a reward ledger and a monthly CSR dashboard.',
          'Anti-gaming: anomaly sweeps, no-show handling and disputes.',
          'About 45 API routes and 14 Prisma models, covered by Vitest and Flutter tests.'
        ]
      },
      images: [],
      links: []
    },
    {
      id: 'evenements', kind: 'pro', year: '2026', art: 'screens',
      title: { fr: 'Événements & Formulaires', en: 'Events & Forms' },
      sub: { fr: 'Tandeem · projet de fin d’études', en: 'Tandeem · final-year project' },
      tags: ['Flutter', 'Firebase', 'Dio', 'Clean Architecture'],
      summary: {
        fr: "Deux modules de l'app Tandeem livrés pendant mon PFE : les événements de l'entreprise et des formulaires dynamiques.",
        en: 'Two Tandeem app modules shipped during my final-year project: company events and dynamic forms.'
      },
      role: { fr: 'Développeur mobile Flutter, PFE soutenu le 26/06/2026', en: 'Flutter mobile developer, final-year project defended 26/06/2026' },
      period: { fr: '02 – 06/2026 · Tandeem, Rabat', en: '02 – 06/2026 · Tandeem, Rabat' },
      stack: ['Flutter', 'Provider', 'Dio', 'Firebase Firestore', 'FCM', 'Firebase Analytics', 'Clean Architecture'],
      built: {
        fr: [
          'Événements : découverte, détail, inscription avec QR code, calendrier personnel et discussion par événement.',
          'Formulaires dynamiques rendus à partir d’un schéma : note, choix unique ou multiple, réponses courtes et longues, échelle de satisfaction.',
          'Notifications push (Firebase Cloud Messaging), suivi analytique et intégration des API REST avec Dio.'
        ],
        en: [
          'Events: discovery, detail, sign-up with a QR code, a personal calendar and a discussion per event.',
          'Dynamic forms rendered from a schema: rating, single or multiple choice, short and long answers, satisfaction scale.',
          'Push notifications (Firebase Cloud Messaging), analytics tracking and REST API integration with Dio.'
        ]
      },
      images: [
        { src: IMG + 'tandeem-events-home.webp', w: 540, h: 1200, alt: { fr: 'Écran Événements de l’app Tandeem', en: 'Tandeem app Events screen' } },
        { src: IMG + 'tandeem-event-detail.webp', w: 540, h: 1200, alt: { fr: 'Détail d’un événement avec QR code', en: 'Event detail with QR code' } },
        { src: IMG + 'tandeem-form-rating.webp', w: 540, h: 1200, alt: { fr: 'Question de notation d’un formulaire', en: 'Rating question in a form' } },
        { src: IMG + 'tandeem-event-calendar.webp', w: 540, h: 1200, alt: { fr: 'Calendrier personnel des événements', en: 'Personal events calendar' } },
        { src: IMG + 'tandeem-event-discussion.webp', w: 540, h: 1200, alt: { fr: 'Discussion d’un événement', en: 'Event discussion thread' } },
        { src: IMG + 'tandeem-form-detail.webp', w: 540, h: 1200, alt: { fr: 'Présentation d’un sondage', en: 'Survey introduction' } },
        { src: IMG + 'tandeem-form-success.webp', w: 540, h: 1200, alt: { fr: 'Confirmation d’envoi', en: 'Submission confirmation' } }
      ],
      links: []
    },
    {
      id: 'intranet', kind: 'pro', year: '2026', art: 'classified',
      title: { fr: 'Portail intranet', en: 'Intranet portal' },
      sub: { fr: 'Tandeem · client du secteur bancaire', en: 'Tandeem · banking-sector client' },
      tags: ['Next.js', 'NestJS', 'Terraform', 'AWS'],
      summary: {
        fr: "Le portail interne d'une banque, de l'API à l'infrastructure AWS. Le nom du client reste au coffre.",
        en: "A bank's internal portal, from the API to the AWS infrastructure. The client's name stays in the vault."
      },
      role: { fr: 'Développeur full-stack et infrastructure cloud', en: 'Full-stack and cloud infrastructure developer' },
      period: { fr: '2026 · Tandeem, Rabat', en: '2026 · Tandeem, Rabat' },
      stack: ['Next.js', 'NestJS', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'Keycloak SSO', 'Terraform', 'AWS', 'Docker', 'CI/CD'],
      built: {
        fr: [
          'Infrastructure AWS en Infrastructure as Code avec Terraform : VPC, ALB, ECS, ECR et RDS.',
          'Sécurisation et supervision de la plateforme avec AWS WAF et Amazon CloudWatch.',
          'Environnements Development, Staging et Production, déploiement conteneurisé (Docker) et pipelines CI/CD.',
          'Backend Node.js avec PostgreSQL, Prisma et Redis, authentification unique Keycloak.',
          'Recueil et analyse des besoins directement avec le client, en Scrum avec les équipes backend, front et mobile.'
        ],
        en: [
          'AWS infrastructure as code with Terraform: VPC, ALB, ECS, ECR and RDS.',
          'Platform security and monitoring with AWS WAF and Amazon CloudWatch.',
          'Development, Staging and Production environments, containerised deployment (Docker) and CI/CD pipelines.',
          'Node.js backend with PostgreSQL, Prisma and Redis, single sign-on through Keycloak.',
          'Requirements gathered directly with the client, in Scrum with the backend, front-end and mobile teams.'
        ]
      },
      images: [],
      links: []
    },
    {
      id: 'optifood', kind: 'pro', year: '2026', art: 'screens',
      title: { fr: 'OptiFood', en: 'OptiFood' },
      sub: { fr: 'SaaS de restauration · France, à distance', en: 'Restaurant SaaS · France, remote' },
      tags: ['Flutter', 'Spring Boot', 'PubNub', 'Offline-first'],
      summary: {
        fr: "Le système d'exploitation d'un restaurant : prise de commande, cuisine, borne, écran client et livraisons, en temps réel.",
        en: "A restaurant's operating system: order taking, kitchen, kiosk, customer display and deliveries, in real time."
      },
      role: { fr: 'Software Engineer, Mobile & Backend', en: 'Software Engineer, Mobile & Backend' },
      period: { fr: '04 – 09/2026 · télétravail', en: '04 – 09/2026 · remote' },
      stack: ['Flutter', 'Provider', 'Dio', 'PubNub', 'Sembast / SQLite', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Redis / Valkey', 'AWS'],
      built: {
        fr: [
          'Modules KDS (écran de cuisine), borne de commande (kiosk) et gestion des livraisons.',
          'App manager Flutter en Clean Architecture : Provider, injection de dépendances, Dio (intercepteurs, jetons, gestion d’erreurs) et chat temps réel PubNub.',
          'Mode hors-ligne : base de données locale et synchronisation avec le serveur, validées par un test d’endurance de 8 heures sans crash ni fuite mémoire.',
          'OMS en Java / Spring Boot : environ 200 endpoints, une base PostgreSQL par restaurant, migrations Flyway versionnées, Redis.',
          'Plus de 2 000 tests automatisés côté backend, déploiement et hébergement sur le cloud.'
        ],
        en: [
          'KDS (kitchen display), self-order kiosk and delivery management modules.',
          'Flutter manager app in Clean Architecture: Provider, dependency injection, Dio (interceptors, tokens, error handling) and PubNub real-time chat.',
          'Offline mode: a local database and server sync, validated by an 8-hour soak test with no crash and no memory leak.',
          'Java / Spring Boot OMS: about 200 endpoints, one PostgreSQL database per restaurant, versioned Flyway migrations, Redis.',
          'Over 2,000 automated backend tests, deployed and hosted in the cloud.'
        ]
      },
      images: [
        { src: IMG + 'optifood-kiosk-menu.webp', w: 600, h: 1298, alt: { fr: 'Borne de commande OptiFood, carte du restaurant', en: 'OptiFood kiosk, restaurant menu' } },
        { src: IMG + 'optifood-cds-tv.webp', w: 1280, h: 720, wide: true, alt: { fr: 'Écran client : commandes en cours et prêtes', en: 'Customer display: orders in progress and ready' } },
        { src: IMG + 'optifood-kiosk-order.webp', w: 600, h: 1298, alt: { fr: 'Borne de commande OptiFood, récapitulatif', en: 'OptiFood kiosk, order summary' } }
      ],
      links: []
    },
    {
      id: 'edutraq', kind: 'pro', year: '2025', art: 'print',
      title: { fr: 'EDUTRAQ', en: 'EDUTRAQ' },
      sub: { fr: 'ADMDI · pointage biométrique', en: 'ADMDI · biometric attendance' },
      tags: ['Spring Boot', 'Spring Security', 'ZK9500', 'AWS ECS'],
      summary: {
        fr: 'Les présences prises au doigt près : un lecteur d’empreintes ZK9500 relié à une application Spring Boot, en temps réel.',
        en: 'Attendance taken by fingerprint: a ZK9500 reader wired to a Spring Boot app, in real time.'
      },
      role: { fr: 'Software Engineer stagiaire', en: 'Software Engineer intern' },
      period: { fr: '02 – 05/2025 · ADMDI, Agadir', en: '02 – 05/2025 · ADMDI, Agadir' },
      stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Docker', 'AWS ECS', 'AWS RDS', 'ZK9500'],
      built: {
        fr: [
          'Intégration du capteur d’empreintes ZK9500 pour enregistrer les présences en temps réel.',
          'Espaces étudiant, enseignant, chef de filière et coordinateur, justificatifs d’absence et historique des séances.',
          'Authentification sécurisée des étudiants et des enseignants avec Spring Security et JWT.',
          'Déploiement sur AWS ECS avec Docker, données MySQL sur AWS RDS.'
        ],
        en: [
          'ZK9500 fingerprint reader integration to record attendance in real time.',
          'Student, teacher, head-of-department and coordinator spaces, absence justifications and session history.',
          'Secure authentication for students and teachers with Spring Security and JWT.',
          'Deployed on AWS ECS with Docker, MySQL data on AWS RDS.'
        ]
      },
      images: [],
      links: [{ kind: 'code', href: 'https://github.com/hamzaaitmansour/EDUTRAQ_app_SPRINGBOOT' }]
    },
    {
      id: 'bioquest', kind: 'hack', year: '2025', art: 'orbit',
      title: { fr: 'BioQuest', en: 'BioQuest' },
      sub: { fr: 'NASA Space Apps Challenge 2025 · Agadir', en: 'NASA Space Apps Challenge 2025 · Agadir' },
      tags: ['48 h', 'NASA', 'Space biology'],
      summary: {
        fr: '48 heures pour rendre explorables 608 publications de biologie spatiale de la NASA.',
        en: "48 hours to make 608 of NASA's space-biology papers explorable."
      },
      role: { fr: "Membre d'équipe, hackathon de 48 h", en: 'Team member, 48-hour hackathon' },
      period: { fr: '4 – 5 octobre 2025 · Technopark Agadir', en: '4 – 5 October 2025 · Technopark Agadir' },
      stack: ['NASA OSDR', 'Space Life Sciences Library', 'NASA Task Book'],
      built: {
        fr: [
          'Défi officiel « Build a Space Biology Knowledge Engine » : résumer et explorer les 608 publications de biosciences de la NASA.',
          'Notre réponse, BioQuest : une recherche dans ces travaux pour les scientifiques et les architectes de missions vers la Lune et Mars.',
          'Événement local du NASA International Space Apps Challenge, accueilli par Technopark Agadir.'
        ],
        en: [
          "Official challenge, “Build a Space Biology Knowledge Engine”: summarise and explore NASA's 608 bioscience publications.",
          'Our answer, BioQuest: a search through that research for scientists and Moon and Mars mission architects.',
          'A local event of the NASA International Space Apps Challenge, hosted by Technopark Agadir.'
        ]
      },
      images: [],
      links: [{ kind: 'challenge', href: 'https://www.spaceappschallenge.org/2025/challenges/build-a-space-biology-knowledge-engine/' }]
    },
    {
      id: 'agadir2030', kind: 'hack', year: '2024 – 25', art: 'stadium',
      title: { fr: 'Agadir 2030', en: 'Agadir 2030' },
      sub: { fr: 'Challenge « ville intelligente et accessible à tous »', en: '“Smart city, open to all” challenge' },
      tags: ['Ideathon', 'Hackathon', 'Smart city'],
      summary: {
        fr: 'Une plateforme pour découvrir et réserver les terrains et stades d’Agadir, pensée pour la Coupe du monde 2030.',
        en: "A platform to discover and book Agadir's pitches and stadiums, designed with the 2030 World Cup in mind."
      },
      role: { fr: 'Idée et conception, en équipe', en: 'Idea and design, as a team' },
      period: { fr: 'Ideathon 7 – 8 décembre 2024 · Hackathon avril 2025', en: 'Ideathon 7 – 8 December 2024 · Hackathon April 2025' },
      stack: [],
      built: {
        fr: [
          'Axe « encourager les activités physiques et sportives » du challenge Agadir 2030, ouvert par un ideathon de 60 jeunes participants.',
          'Carte et catalogue des terrains, disponibilités, réservation et calendrier des événements sportifs, pour les habitants comme pour les visiteurs.',
          'Contexte : le Grand Stade d’Agadir (Adrar) fait partie des stades hôtes de la Coupe du monde 2030.'
        ],
        en: [
          'The “encourage physical and sports activity” track of the Agadir 2030 challenge, opened by an ideathon with 60 young participants.',
          'A map and catalogue of pitches, availability, booking and a sports-event calendar, for residents and visitors alike.',
          "Context: Agadir's Grand Stade (Adrar) is one of the host stadiums of the 2030 World Cup."
        ]
      },
      images: [],
      links: []
    },
    {
      id: 'educazen', kind: 'side', year: '2026', art: 'screens',
      title: { fr: 'EducazenKids', en: 'EducazenKids' },
      sub: { fr: 'École inclusive · Agadir', en: 'Inclusive school · Agadir' },
      tags: ['Prototype', 'HTML / CSS / JS', 'GitHub Pages'],
      summary: {
        fr: "L'app des collégiens d'une école inclusive : leçons vidéo, quiz débloqués à mi-parcours, emploi du temps, plus le site des familles et le tableau de bord de l'équipe.",
        en: "The app for a school's middle-schoolers: video lessons, quizzes unlocked halfway, a timetable, plus the families' site and the staff dashboard."
      },
      role: { fr: 'Conception et prototypes, projet personnel', en: 'Design and prototypes, side project' },
      period: { fr: '10/2026', en: '10/2026' },
      stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      built: {
        fr: [
          'Connexion par code personnel, leçons vidéo dont le quiz se débloque à 50 % du visionnage, résumés et exercices.',
          'Emploi du temps, contrôles, minuteur et suivi de la progression.',
          'Site des familles et tableau de bord du personnel pour publier les leçons.'
        ],
        en: [
          'Personal-code sign-in, video lessons whose quiz unlocks at 50 % watched, summaries and exercises.',
          'Timetable, tests, a timer and progress tracking.',
          "A families' site and a staff dashboard to publish lessons."
        ]
      },
      images: [
        { src: IMG + 'educazen-home.webp', w: 540, h: 1169, alt: { fr: 'Accueil élève EducazenKids', en: 'EducazenKids student home' } },
        { src: IMG + 'educazen-lesson.webp', w: 540, h: 1169, alt: { fr: 'Leçon vidéo avec quiz débloqué', en: 'Video lesson with unlocked quiz' } },
        { src: IMG + 'educazen-login.webp', w: 540, h: 1169, alt: { fr: 'Connexion par code élève', en: 'Student code sign-in' } }
      ],
      links: [{ kind: 'site', href: 'https://hamzaaitmansour.github.io/educat-mobile/' }]
    }
  ];

  var SHORTS = [
    {
      title: { fr: 'Gestion d’événements', en: 'Event management' },
      what: { fr: 'Backend Spring Boot · WebSockets · Spring Security · Spring AI · Docker sur AWS', en: 'Spring Boot backend · WebSockets · Spring Security · Spring AI · Docker on AWS' },
      year: '2025'
    },
    {
      title: { fr: 'Réservation de salles', en: 'Classroom booking' },
      what: { fr: 'Java EE · Hibernate JPA · MySQL · API REST de plannings et notifications', en: 'Java EE · Hibernate JPA · MySQL · REST API for schedules and notifications' },
      year: '2024'
    },
    {
      title: { fr: 'fddp_cli', en: 'fddp_cli' },
      what: { fr: 'Paquet Dart open source qui génère une architecture Flutter par fonctionnalité', en: 'Open-source Dart package that scaffolds a feature-first Flutter architecture' },
      year: 'GitHub', href: 'https://github.com/hamzaaitmansour/fddp_cli'
    },
    {
      title: { fr: 'Banque en microservices', en: 'Microservices bank' },
      what: { fr: 'Spring Cloud · Eureka · OpenFeign · configuration centralisée', en: 'Spring Cloud · Eureka · OpenFeign · central configuration' },
      year: 'GitHub', href: 'https://github.com/hamzaaitmansour/smallBankApp-microservices-SPRING-CLOUD'
    }
  ];

  var SERVICES = [
    {
      id: 'mobile', visual: 'screens',
      title: { fr: 'Applications mobiles Flutter', en: 'Flutter mobile apps' },
      text: {
        fr: 'Des apps Android et iOS en Clean Architecture : Provider et MVVM, Dio avec intercepteurs et jetons JWT, Firebase (notifications, Analytics, Crashlytics, Remote Config), mode hors-ligne avec synchronisation et temps réel.',
        en: 'Android and iOS apps in Clean Architecture: Provider and MVVM, Dio with interceptors and JWT tokens, Firebase (push, Analytics, Crashlytics, Remote Config), offline mode with sync, and real time.'
      },
      stack: ['Flutter', 'Dart', 'Provider', 'Dio', 'Firebase', 'PubNub', 'go_router']
    },
    {
      id: 'backend', visual: 'board',
      title: { fr: 'Backend & API', en: 'Backend & APIs' },
      text: {
        fr: 'Des API REST sécurisées et testées : Spring Boot (Java 21) ou Node.js avec Prisma, PostgreSQL et PostGIS, Redis, migrations Flyway, Spring Security, JWT et Keycloak.',
        en: 'Secure, tested REST APIs: Spring Boot (Java 21) or Node.js with Prisma, PostgreSQL and PostGIS, Redis, Flyway migrations, Spring Security, JWT and Keycloak.'
      },
      stack: ['Java', 'Spring Boot', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'Flyway']
    },
    {
      id: 'cloud', visual: 'infra',
      title: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      text: {
        fr: "L'infrastructure AWS écrite en Terraform (VPC, ALB, ECS, ECR, RDS, WAF, CloudWatch), des conteneurs Docker et des environnements Development, Staging et Production reliés par la CI/CD.",
        en: 'AWS infrastructure written in Terraform (VPC, ALB, ECS, ECR, RDS, WAF, CloudWatch), Docker containers and Development, Staging and Production environments tied together by CI/CD.'
      },
      stack: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'GitHub Actions', 'CloudWatch']
    },
    {
      id: 'product', visual: 'kiosk',
      title: { fr: 'Produit SaaS, de bout en bout', en: 'SaaS product, end to end' },
      text: {
        fr: "Du besoin du client à la mise en production : plateformes multi-tenant, rôles et permissions, temps réel. En Scrum, avec les équipes backend, front et mobile.",
        en: "From the client's need to production: multi-tenant platforms, roles and permissions, real time. In Scrum, with the backend, front-end and mobile teams."
      },
      stack: ['Multi-tenant', 'Scrum', 'UML', 'REST', 'Real time']
    }
  ];

  var REEL = [
    {
      id: 'tandeem', now: true, still: IMG + 'still-soutenance.jpg',
      org: 'Tandeem', place: { fr: 'Rabat', en: 'Rabat' },
      role: { fr: 'Mobile Engineer', en: 'Mobile Engineer' },
      dates: { fr: '02.2026 – aujourd’hui', en: '02.2026 – today' },
      points: {
        fr: [
          'App SaaS Flutter : Provider, Dio, Firebase Firestore, Analytics et notifications push.',
          'Module covoiturage de bout en bout, de l’app au moteur d’itinéraires.',
          'Infrastructure AWS en Terraform, WAF et CloudWatch, environnements Dev, Staging et Prod avec CI/CD.',
          'Backend Node.js, PostgreSQL, Prisma et Redis pour un client du secteur bancaire.'
        ],
        en: [
          'Flutter SaaS app: Provider, Dio, Firebase Firestore, Analytics and push notifications.',
          'The carpooling module end to end, from the app to the routing engine.',
          'AWS infrastructure in Terraform, WAF and CloudWatch, Dev, Staging and Prod environments with CI/CD.',
          'Node.js, PostgreSQL, Prisma and Redis backend for a banking-sector client.'
        ]
      }
    },
    {
      id: 'optifood', still: IMG + 'optifood-kiosk-menu.webp',
      org: 'OptiFood', place: { fr: 'France · télétravail', en: 'France · remote' },
      role: { fr: 'Software Engineer · Mobile & Backend', en: 'Software Engineer · Mobile & Backend' },
      dates: { fr: '04 – 09.2026', en: '04 – 09.2026' },
      points: {
        fr: [
          'Modules KDS, borne de commande et livraisons d’un SaaS de restauration.',
          'App Flutter en Clean Architecture, chat temps réel PubNub, stockage local et synchronisation hors-ligne.',
          'Backend Java / Spring Boot, Redis et migrations Flyway, hébergé sur le cloud.'
        ],
        en: [
          'KDS, kiosk and delivery modules of a restaurant SaaS.',
          'Flutter app in Clean Architecture, PubNub real-time chat, local storage and offline sync.',
          'Java / Spring Boot backend, Redis and Flyway migrations, hosted in the cloud.'
        ]
      }
    },
    {
      id: 'admdi', still: 'print',
      org: 'ADMDI', place: { fr: 'Agadir', en: 'Agadir' },
      role: { fr: 'Software Engineer stagiaire', en: 'Software Engineer intern' },
      dates: { fr: '02 – 05.2025', en: '02 – 05.2025' },
      points: {
        fr: [
          'EDUTRAQ : application Spring Boot avec le lecteur d’empreintes ZK9500 pour les présences en temps réel.',
          'Authentification sécurisée des étudiants et des enseignants avec Spring Security.',
          'Déploiement sur AWS ECS avec Docker, base MySQL sur AWS RDS.'
        ],
        en: [
          'EDUTRAQ: a Spring Boot app with the ZK9500 fingerprint reader for real-time attendance.',
          'Secure authentication for students and teachers with Spring Security.',
          'Deployed on AWS ECS with Docker, MySQL database on AWS RDS.'
        ]
      }
    },
    {
      id: 'ensa', still: IMG + 'still-ensa.jpg',
      org: 'ENSA Agadir', place: { fr: 'Université Ibn Zohr', en: 'Ibn Zohr University' },
      role: { fr: 'Ingénieur d’État · Génie Informatique', en: 'State Engineer · Computer Engineering' },
      dates: { fr: '2021 – 2026', en: '2021 – 2026' },
      points: {
        fr: [
          'Cycle ingénieur en Génie Informatique à l’École Nationale des Sciences Appliquées d’Agadir.',
          'Projet de fin d’études chez Tandeem, soutenu le 26 juin 2026.',
          'Certification Oracle Certified Professional: Java SE 17 Developer.'
        ],
        en: [
          'Computer Engineering degree at the National School of Applied Sciences of Agadir.',
          'Final-year project at Tandeem, defended on 26 June 2026.',
          'Oracle Certified Professional: Java SE 17 Developer certification.'
        ]
      }
    }
  ];

  window.PORTFOLIO = {
    CV: CV, STRINGS: STRINGS, UI: UI,
    PROJECTS: PROJECTS, SHORTS: SHORTS, SERVICES: SERVICES, REEL: REEL
  };
})();
