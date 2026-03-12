export const skills = [
  { label: "Oracle APEX / PL/SQL", advanced: true },
  { label: "HTML / CSS",           advanced: true },
  { label: "Java",                 advanced: true },
  { label: "JavaScript",           advanced: true },
  { label: "GitHub",               advanced: true },
];

export const timelineItems = [
  {
    date: "06.2013 - 06.2019", side: "right" as const, type: "edu",
    company: "Anne-Frank-Gesamtschule Rheinkamp",
    role: "Realschulabschluss", desc: null,
  },
  {
    date: "12.2017", side: "left" as const, type: "job",
    company: "My Mediamen",
    role: "Praktikum — Telekommunikation Technik",
    desc: "Erwerb grundlegender Kenntnisse in der Telekommunikationsbranche und technischen Systemen.",
  },
  {
    date: "08.2019 - 06.2022", side: "right" as const, type: "edu",
    company: "Berufskolleg für Technik Moers",
    role: "Fachabitur + Informationstechnischer Assistent",
    desc: "Berufsabschluss nach Landesrecht NRW",
  },
  {
    date: "06.2021 - 09.2021", side: "left" as const, type: "job",
    company: "Erste Praxiserfahrungen",
    role: "Praktika & Projekterfahrung",
    desc: "Curv UG - Entwicklung mit Vue.js Framework\nEuroweb - Webentwicklung mit HTML & CSS",
  },
  {
    date: "06.2022 - 05.2025", side: "right" as const, type: "job",
    company: "Deutsche Post AG",
    role: "Aushilfe / Lagerhilfe",
    desc: "Studentische Nebentätigkeit parallel zum dualen Studium.",
  },
  {
    date: "09.2022 - 09.2025", side: "left" as const, type: "main",
    company: "FHDW Mettmann & Hyand Solutions GmbH",
    role: "Dualer Student (Bachelor) + Junior Berater",
    desc: "Wirtschaftsinformatik Software Engineering — Note 2,5\nOracle APEX-Entwicklung · PL/SQL & Datenmodellierung · Konzeption von Webanwendungen",
  },
  {
    date: "09.2025 - Heute", side: "right" as const, type: "current",
    company: "Taxifahrer (Minijob)",
    role: "Übergangsphase", desc: null,
  },
];

export const projects = [
  {
    title: "Time2Meet",
    category: "Full-Stack Development & Projektmanagement",
    desc: "Gruppenplanungssystem für gemeinsame Aktivitäten. Entwickelt im Rahmen der Module Software Testing & DevOps sowie Software Engineering Projects.",
    tech: ["Next.js", "TypeScript", "Cypress"],
    github: "https://github.com/KDDevLab",
    gradient: "linear-gradient(135deg,#00080f,#001a26)",
  },
  {
    title: "Algorithmischer Handel",
    category: "Data Analysis & ML-Modellierung",
    desc: "Machine-Learning-Projekt zur Prognose von Aktienkursen mittels technischer Indikatoren und Rohdaten. Entwickelt für Data Analysis and Machine Learning.",
    tech: ["Python", "Machine Learning", "Jupyter"],
    github: "https://github.com/KDDevLab",
    gradient: "linear-gradient(135deg,#060010,#0f0020)",
  },
];
