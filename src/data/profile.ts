import type { Text } from '../lib/langContext';

export const stack = [
  "Oracle APEX", "PL/SQL", "Oracle DB", "Next.js", "Vue.js",
  "Java", "JavaScript", "HTML/CSS", "MongoDB", "GitHub",
];

export interface TimelineItem {
  date: string;
  station: Text;
  role: Text;
  desc: Text | null;
  current: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    date: "06.2013 – 06.2019",
    station: "Anne-Frank-Gesamtschule Rheinkamp",
    role: { de: "Realschulabschluss", en: "Secondary school diploma" },
    desc: null,
    current: false,
  },
  {
    date: "12.2017",
    station: "My Mediamen",
    role: { de: "Praktikum – Telekommunikationstechnik", en: "Internship – Telecommunications technology" },
    desc: {
      de: "Erwerb grundlegender Kenntnisse in der Telekommunikationsbranche und technischen Systemen.",
      en: "Gained foundational knowledge of the telecommunications industry and technical systems.",
    },
    current: false,
  },
  {
    date: "08.2019 – 06.2022",
    station: "Berufskolleg für Technik Moers",
    role: { de: "Fachabitur + Informationstechnischer Assistent", en: "Vocational A-levels + IT Assistant certification" },
    desc: { de: "Berufsabschluss nach Landesrecht NRW", en: "Vocational qualification under NRW state law" },
    current: false,
  },
  {
    date: "06.2021 – 09.2021",
    station: { de: "Erste Praxiserfahrungen", en: "Early practical experience" },
    role: { de: "Praktika & Projekterfahrung", en: "Internships & project experience" },
    desc: {
      de: "Curv UG – Entwicklung mit Vue.js Framework\nEuroweb – Webentwicklung mit HTML & CSS",
      en: "Curv UG – development with the Vue.js framework\nEuroweb – web development with HTML & CSS",
    },
    current: false,
  },
  {
    date: "06.2022 – 05.2025",
    station: "Deutsche Post AG",
    role: { de: "Aushilfe / Lagerhilfe", en: "Temporary worker / Warehouse assistant" },
    desc: {
      de: "Studentische Nebentätigkeit parallel zum dualen Studium.",
      en: "Student side job alongside the dual study program.",
    },
    current: false,
  },
  {
    date: "09.2022 – 09.2025",
    station: "FHDW Mettmann & HyPlus",
    role: { de: "Dualer Student (Bachelor) + Junior Berater", en: "Dual Bachelor's student + Junior Consultant" },
    desc: {
      de: "Wirtschaftsinformatik Software Engineering – Note 2,5\nOracle APEX-Entwicklung · PL/SQL & Datenmodellierung · Konzeption von Webanwendungen",
      en: "Information Systems, Software Engineering – Grade 2.5\nOracle APEX development · PL/SQL & data modeling · Web application design",
    },
    current: false,
  },
  {
    date: "09.2025 – 05.2026",
    station: { de: "Taxifahrer (Minijob)", en: "Taxi driver (mini-job)" },
    role: { de: "Übergangsphase", en: "Transition phase" },
    desc: null,
    current: false,
  },
  {
    date: "05.2026 – Heute",
    station: "HyPlus",
    role: { de: "Berater", en: "Consultant" },
    desc: {
      de: "Oracle APEX-Entwicklung · PL/SQL & Datenmodellierung · Konzeption von Webanwendungen",
      en: "Oracle APEX development · PL/SQL & data modeling · Web application design",
    },
    current: true,
  },
];

export interface Project {
  title: Text;
  category: Text;
  desc: Text;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Time2Meet",
    category: { de: "Full-Stack Development & Projektmanagement", en: "Full-stack development & project management" },
    desc: {
      de: "Gruppenplanungssystem für gemeinsame Aktivitäten. Entwickelt im Rahmen der Module Software Testing & DevOps sowie Software Engineering Projects.",
      en: "Group scheduling system for shared activities. Built as part of the Software Testing & DevOps and Software Engineering Projects modules.",
    },
    tech: ["Next.js", "TypeScript", "Cypress"],
    github: "https://github.com/SEPMFWS422A/time2meet",
  },
  {
    title: { de: "Algorithmischer Handel", en: "Algorithmic Trading" },
    category: { de: "Data Analysis & ML-Modellierung", en: "Data analysis & ML modeling" },
    desc: {
      de: "Machine-Learning-Projekt zur Prognose von Aktienkursen mittels technischer Indikatoren und Rohdaten. Entwickelt für Data Analysis and Machine Learning.",
      en: "Machine learning project for predicting stock prices using technical indicators and raw data. Built for the Data Analysis and Machine Learning module.",
    },
    tech: ["Python", "Machine Learning", "Jupyter"],
    github: "https://github.com/KD-Studies/Algorithmischer-Handel",
  },
  {
    title: "Stratify",
    category: { de: "KI-gestützte Trading-Plattform", en: "AI-powered trading platform" },
    desc: {
      de: "Prototyp einer KI-gestützten Investmentplattform mit Long/Short-Positionen auf Basis von Machine-Learning-Prognosen. Entwickelt im Modul Advanced Topics in Computer Science, inklusive Deep-Learning-Notebooks zu neuronalen Netzen, CNNs und RNNs.",
      en: "Prototype of an AI-powered investment platform with long/short positions based on machine learning predictions. Built for the Advanced Topics in Computer Science module, including deep learning notebooks on neural networks, CNNs and RNNs.",
    },
    tech: ["Next.js", "TypeScript", "Python", "Deep Learning"],
    github: "https://github.com/KD-Studies/Advanced-Topics-in-Computer-Science-Stratify",
  },
  {
    title: { de: "SQL-Injection-Demo", en: "SQL Injection Demo" },
    category: { de: "IT-Security & Secure Coding", en: "IT security & secure coding" },
    desc: {
      de: "Vergleich von verwundbarem und abgesichertem PHP-Code zur Veranschaulichung von SQL-Injection-Angriffen und deren Vermeidung durch Prepared Statements.",
      en: "Comparison of vulnerable and secured PHP code demonstrating SQL injection attacks and how prepared statements prevent them.",
    },
    tech: ["PHP", "MySQL", "HTML"],
    github: "https://github.com/KD-Studies/simple_sql_injection",
  },
];
