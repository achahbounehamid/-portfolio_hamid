import { HomePageData } from './home.models';

export const HOME_PAGE_DATA: HomePageData = {
  profile: {
    fullName: 'Hamid Achahboune',
    role: 'Développeur Java Backend · CDI',
    location: 'Lyon, France',
    email: 'Hamid.achahboune@gmail.com',
    github: 'github.com/achahboune',
    profile: 'Spécialisé Spring Boot, APIs REST et architectures microservices.',
    objective: 'Trouver un CDI dans un environnement technique stimulant à Lyon.',
    available: true,
    avatarUrl: 'assets/images/photo.jpg',
  },

  skills: [
    { name: 'Java 17/21', level: 90 },
    { name: 'Spring Boot', level: 88 },
    { name: 'Microservices', level: 82 },
    { name: 'Spring Security', level: 78 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'JUnit / Mockito', level: 76 },
  ],

  experiences: [
    {
      title: 'Développeur Java Back-End',
      company: 'Shepe IT (EasiPromo)',
      location: 'Lyon',
      period: 'Avr. 2025 → Août 2025',
      description:
        "Développement de microservices Spring Boot, conception d'APIs REST avec PostgreSQL, tests unitaires JUnit et optimisation des performances.",
      tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit'],
    },
    {
      title: 'Développeur Web',
      company: 'ID Conseils (Transports Prudent)',
      location: 'Feillens',
      period: 'Nov. 2023 → Déc. 2023',
      description:
        'Développement intranet MVC, authentification sécurisée, intégration d’APIs externes et optimisation MySQL.',
      tags: ['PHP 8', 'MySQL', 'JavaScript'],
    },
  ],

  projects: [
    {
      name: 'Prédiction du risque de diabète',
      description:
        'Architecture microservices avec services patients, notes et diagnostic, API Gateway et conteneurisation Docker complète.',
      githubUrl: 'https://github.com/achahboune',
      tags: [
        { label: 'Java 17' },
        { label: 'Spring Boot' },
        { label: 'MongoDB', type: 'amber' },
        { label: 'Docker', type: 'green' },
        { label: 'Gateway', type: 'blue' },
      ],
    },
    {
      name: "Service d'urgence — API REST",
      description:
        'API REST complète avec Spring Data JPA, gestion des entités métier et persistance relationnelle.',
      githubUrl: 'https://github.com/achahboune',
      tags: [
        { label: 'Java 17' },
        { label: 'Spring Boot' },
        { label: 'Spring Data JPA', type: 'blue' },
      ],
    },
    {
      name: 'Application Spring Boot sécurisée',
      description:
        'Mise en place de Spring Security avec JWT, pipeline CI/CD GitHub Actions et déploiement Docker automatisé.',
      githubUrl: 'https://github.com/achahboune',
      tags: [
        { label: 'Spring Boot' },
        { label: 'Spring Security', type: 'blue' },
        { label: 'JWT', type: 'blue' },
        { label: 'Docker', type: 'green' },
        { label: 'GitHub Actions', type: 'green' },
      ],
    },
  ],

  formation: [
    'Titre Pro Développeur Concepteur Logiciel — OpenClassrooms (2024–2025)',
    'Développeur Web et Web Mobile — Online Formapro (2023–2024)',
  ],

  contacts: [
    {
      label: 'email',
      value: 'Hamid.achahboune@gmail.com',
      href: 'mailto:Hamid.achahboune@gmail.com',
    },
    {
      label: 'téléphone',
      value: '+33 6 51 32 00 33',
      href: 'tel:+33651320033',
    },
    {
      label: 'github',
      value: 'github.com/achahboune',
      href: 'https://github.com/achahboune',
    },
    {
      label: 'linkedin',
      value: 'Hamid ACHAHBOUNE',
      href: 'https://www.linkedin.com/in/hamid-achahboune',
    },
  ],
};
