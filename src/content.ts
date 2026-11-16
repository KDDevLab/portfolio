export type Text = { de: string; en: string };

export const person = {
  name: 'Kürsat Darcan',
  email: 'Darcankursat@gmail.com',
  linkedin: 'https://linkedin.com/in/kursat-darcan',
  github: 'https://github.com/DKursat',
  location: 'Moers, NRW',
};

export const profile = {
  statement: {
    de: 'Wirtschaftsinformatiker (B.Sc.) mit Fokus auf Software Engineering.',
    en: 'Information systems graduate (B.Sc.) focused on software engineering.',
  },
  summary: {
    de: 'Ich baue datengetriebene Webanwendungen: vom Datenmodell in PL/SQL bis zur fertigen Oberfläche in Oracle APEX. Dazu moderne Webtechnologien wie Next.js und TypeScript.',
    en: 'I build data-driven web applications: from the PL/SQL data model to the finished Oracle APEX interface. Plus modern web technologies like Next.js and TypeScript.',
  },
  status: { de: 'offen für neue Herausforderungen', en: 'open to new opportunities' },
  facts: [
    { k: { de: 'Rolle', en: 'Role' }, v: { de: 'Junior Berater @ HyPlus', en: 'Junior Consultant @ HyPlus' } },
    { k: { de: 'Erfahrung', en: 'Experience' }, v: { de: '3+ Jahre Oracle APEX', en: '3+ years Oracle APEX' } },
    { k: { de: 'Abschluss', en: 'Degree' }, v: { de: 'B.Sc. Wirtschaftsinformatik', en: 'B.Sc. Information Systems' } },
    { k: { de: 'Standort', en: 'Location' }, v: { de: 'Moers, NRW', en: 'Moers, Germany' } },
  ] satisfies { k: Text; v: Text }[],
};

/** Abschnitte der Startseite (Anker-IDs). */
export const sections = [
  { id: 'werdegang', de: 'Werdegang', en: 'Background' },
  { id: 'projekte', de: 'Projekte', en: 'Projects' },
  { id: 'stack', de: 'Stack', en: 'Stack' },
  { id: 'kontakt', de: 'Kontakt', en: 'Contact' },
] as const;

export interface Entry {
  date: string;
  place: Text;
  role: Text;
  note?: Text;
  /** Kennzeichnung am Nebenzweig, z. B. „Parallel zum Studium“. */
  tag?: Text;
}

export interface Station extends Entry {
  hash: string;
  current?: boolean;
  /** Lief gleichzeitig (Nebenzweig im Graph). */
  parallel?: Entry;
  /** Nebenzweig begann später und läuft noch: steht über der Station, Zweig geht nach oben ab. */
  parallelAbove?: boolean;
}

/** Neueste Station zuerst. */
export const stations: Station[] = [
  {
    hash: 'a3f9c21',
    date: '05.2026 bis heute',
    place: { de: 'HyPlus', en: 'HyPlus' },
    role: { de: 'Junior Berater', en: 'Junior Consultant' },
    note: {
      de: 'Oracle APEX-Entwicklung · PL/SQL & Datenmodellierung · Konzeption von Webanwendungen',
      en: 'Oracle APEX development · PL/SQL & data modeling · Web application design',
    },
    current: true,
    // Später begonnen als die Hauptstation, daher darüber (neueste zuerst)
    parallelAbove: true,
    parallel: {
      date: '10.2026 bis heute',
      place: { de: 'FHDW Mettmann', en: 'FHDW Mettmann' },
      role: {
        de: 'Master Wirtschaftsinformatik (berufsbegleitend)',
        en: "Master's in Information Systems (part-time)",
      },
      note: {
        de: 'Spezialisierung Angewandte Künstliche Intelligenz',
        en: 'Specialization in Applied Artificial Intelligence',
      },
      tag: { de: 'Berufsbegleitend', en: 'Alongside work' },
    },
  },
  {
    hash: '7be40d8',
    date: '09.2025 bis 05.2026',
    place: { de: 'Taxifahrer (Minijob)', en: 'Taxi driver (mini-job)' },
    role: { de: 'Übergangsphase', en: 'Transition phase' },
  },
  {
    hash: 'c15e8a4',
    date: '09.2022 bis 09.2025',
    place: { de: 'FHDW Mettmann & HyPlus', en: 'FHDW Mettmann & HyPlus' },
    role: {
      de: 'Dualer Student (Bachelor) + Junior Berater',
      en: "Dual Bachelor's student + Junior Consultant",
    },
    note: {
      de: 'Wirtschaftsinformatik Software Engineering, Note 2,5\nOracle APEX-Entwicklung · PL/SQL & Datenmodellierung · Konzeption von Webanwendungen',
      en: 'Information Systems, Software Engineering, grade 2.5\nOracle APEX development · PL/SQL & data modeling · Web application design',
    },
    parallel: {
      date: '06.2022 bis 05.2025',
      place: { de: 'Deutsche Post AG', en: 'Deutsche Post AG' },
      role: { de: 'Aushilfe / Lagerhilfe', en: 'Temporary worker / Warehouse assistant' },
      note: {
        de: 'Studentische Nebentätigkeit parallel zum dualen Studium.',
        en: 'Student side job alongside the dual study program.',
      },
      tag: { de: 'Parallel zum Studium', en: 'Alongside studies' },
    },
  },
  {
    hash: 'e04b3c9',
    date: '06.2021 bis 09.2021',
    place: { de: 'Erste Praxiserfahrungen', en: 'Early practical experience' },
    role: { de: 'Praktika & Projekterfahrung', en: 'Internships & project experience' },
    note: {
      de: 'Curv UG: Entwicklung mit Vue.js Framework\nEuroweb: Webentwicklung mit HTML & CSS',
      en: 'Curv UG: development with the Vue.js framework\nEuroweb: web development with HTML & CSS',
    },
  },
  {
    hash: '5f81a2e',
    date: '08.2019 bis 06.2022',
    place: { de: 'Berufskolleg für Technik Moers', en: 'Berufskolleg für Technik Moers' },
    role: {
      de: 'Fachabitur + Informationstechnischer Assistent',
      en: 'Vocational A-levels + IT Assistant certification',
    },
    note: {
      de: 'Berufsabschluss nach Landesrecht NRW',
      en: 'Vocational qualification under NRW state law',
    },
  },
  {
    hash: 'b92c6d7',
    date: '12.2017',
    place: { de: 'My Mediamen', en: 'My Mediamen' },
    role: {
      de: 'Praktikum Telekommunikationstechnik',
      en: 'Internship in telecommunications technology',
    },
    note: {
      de: 'Erwerb grundlegender Kenntnisse in der Telekommunikationsbranche und technischen Systemen.',
      en: 'Gained foundational knowledge of the telecommunications industry and technical systems.',
    },
  },
  {
    hash: '1d4a7f3',
    date: '06.2013 bis 06.2019',
    place: { de: 'Anne-Frank-Gesamtschule Rheinkamp', en: 'Anne-Frank-Gesamtschule Rheinkamp' },
    role: { de: 'Realschulabschluss', en: 'Secondary school diploma' },
  },
];

export interface Project {
  slug: string;
  title: Text;
  category: Text;
  desc: Text;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    slug: 'time2meet',
    title: { de: 'Time2Meet', en: 'Time2Meet' },
    category: {
      de: 'Full-Stack Development & Projektmanagement',
      en: 'Full-stack development & project management',
    },
    desc: {
      de: 'Gruppenplanungssystem für gemeinsame Aktivitäten. Entwickelt im Rahmen der Module Software Testing & DevOps sowie Software Engineering Projects.',
      en: 'Group scheduling system for shared activities. Built as part of the Software Testing & DevOps and Software Engineering Projects modules.',
    },
    tech: ['Next.js', 'TypeScript', 'Cypress'],
    github: 'https://github.com/SEPMFWS422A/time2meet',
  },
  {
    slug: 'algo-trading',
    title: { de: 'Algorithmischer Handel', en: 'Algorithmic Trading' },
    category: { de: 'Data Analysis & ML-Modellierung', en: 'Data analysis & ML modeling' },
    desc: {
      de: 'Machine-Learning-Projekt zur Prognose von Aktienkursen mittels technischer Indikatoren und Rohdaten. Entwickelt für Data Analysis and Machine Learning.',
      en: 'Machine learning project for predicting stock prices using technical indicators and raw data. Built for the Data Analysis and Machine Learning module.',
    },
    tech: ['Python', 'Machine Learning', 'Jupyter'],
    github: 'https://github.com/KD-Studies/Algorithmischer-Handel',
  },
  {
    slug: 'stratify',
    title: { de: 'Stratify', en: 'Stratify' },
    category: { de: 'KI-gestützte Trading-Plattform', en: 'AI-powered trading platform' },
    desc: {
      de: 'Prototyp einer KI-gestützten Investmentplattform mit Long/Short-Positionen auf Basis von Machine-Learning-Prognosen. Entwickelt im Modul Advanced Topics in Computer Science, inklusive Deep-Learning-Notebooks zu neuronalen Netzen, CNNs und RNNs.',
      en: 'Prototype of an AI-powered investment platform with long/short positions based on machine learning predictions. Built for the Advanced Topics in Computer Science module, including deep learning notebooks on neural networks, CNNs and RNNs.',
    },
    tech: ['Next.js', 'TypeScript', 'Python', 'Deep Learning'],
    github: 'https://github.com/KD-Studies/Advanced-Topics-in-Computer-Science-Stratify',
  },
  {
    slug: 'sql-injection',
    title: { de: 'SQL-Injection-Demo', en: 'SQL Injection Demo' },
    category: { de: 'IT-Security & Secure Coding', en: 'IT security & secure coding' },
    desc: {
      de: 'Vergleich von verwundbarem und abgesichertem PHP-Code zur Veranschaulichung von SQL-Injection-Angriffen und deren Vermeidung durch Prepared Statements.',
      en: 'Comparison of vulnerable and secured PHP code demonstrating SQL injection attacks and how prepared statements prevent them.',
    },
    tech: ['PHP', 'MySQL', 'HTML'],
    github: 'https://github.com/KD-Studies/simple_sql_injection',
  },
];

export const stack: { group: Text; items: string[] }[] = [
  {
    group: { de: 'Datenbank & Backend', en: 'Database & backend' },
    items: ['Oracle APEX', 'PL/SQL', 'Oracle DB', 'MongoDB', 'Java'],
  },
  { group: { de: 'Web', en: 'Web' }, items: ['Next.js', 'Vue.js', 'JavaScript', 'HTML/CSS'] },
  { group: { de: 'Werkzeuge', en: 'Tools' }, items: ['GitHub'] },
];
