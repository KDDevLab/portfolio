import { useEffect, useRef } from "react";

const C = {
  bg:    "#000000",
  bg2:   "#080808",
  bg3:   "#0f0f0f",
  cyan:  "#00d4ff",
  cglow: "rgba(0,212,255,0.12)",
  cbord: "rgba(0,212,255,0.22)",
  white: "#f2f2f2",
  grey:  "#666666",
  grey2: "#aaaaaa",
} as const;

const font = {
  sans: "'Space Grotesk', sans-serif",
  mono: "'Fira Code', monospace",
} as const;

const skills = [
  { label: "Oracle APEX / PL/SQL", advanced: true  },
  { label: "HTML / CSS",           advanced: true },
  { label: "Java",                 advanced: true },
  { label: "JavaScript",           advanced: true },
  { label: "GitHub",               advanced: true },
];

const stats = [
  { label: "Abschluss",  value: "B.Sc.",   accent: "2,5",    bar: 75  },
  { label: "Erfahrung",  value: "3",       accent: "Jahre",  bar: 55  },
  { label: "Haupttech",  value: "Oracle",  accent: "APEX",   bar: 85  },
  { label: "Status",     value: "Open to", accent: " Work",  bar: 100 },
];

const timelineItems = [
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
    desc: "Nebentätigkeit während des Studiums",
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

const projects = [
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

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.45s ${delay}s ease, transform 0.45s ${delay}s ease`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function SectionLabel({ index, text }: { index: string; text: string }) {
  return (
    <div style={{
      fontFamily: font.mono, fontSize: "0.62rem", color: C.cyan,
      letterSpacing: "0.2em", textTransform: "uppercase" as const,
      marginBottom: 12, display: "flex", alignItems: "center", gap: 10,
    }}>
      {index} — {text}
      <span style={{ width: 44, height: 1, background: C.cyan, display: "inline-block" }} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: font.sans, fontSize: "clamp(2.6rem,4vw,4rem)",
      fontWeight: 700, letterSpacing: "-0.035em", color: C.white,
      marginBottom: 64, lineHeight: 1,
    }}>
      {children}
    </div>
  );
}

function TimelineCard({
  item, index,
}: {
  item: typeof timelineItems[0];
  index: number;
}) {
  const ref = useScrollReveal(index * 0.08);
  const isLeft    = item.side === "left";
  const isEdu     = item.type === "edu";
  const isMain    = item.type === "main";
  const isCurrent = item.type === "current";

  const accentColor = isCurrent ? "#ff6b6b" : isEdu ? "#a78bfa" : C.cyan;

  const card = (
    <div
      style={{
        background: C.bg3,
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 3,
        padding: "16px 20px",
        textAlign: isLeft ? "right" : "left",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.22)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,212,255,0.06)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ fontFamily: font.sans, fontSize: "0.92rem", fontWeight: 600, color: C.white, marginBottom: 3 }}>
        {item.company}
      </div>
      <div style={{ fontFamily: font.mono, fontSize: "0.62rem", color: accentColor, letterSpacing: "0.05em", marginBottom: 6 }}>
        {item.role}
      </div>
      {item.desc && (
        <div style={{ fontFamily: font.sans, fontSize: "0.7rem", color: C.grey, lineHeight: 1.8 }}>
          {item.desc.split("\n").map((line, i) => <div key={i}>{line}</div>)}
        </div>
      )}
    </div>
  );

  const mid = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16 }}>
      <div style={{
        width: isMain ? 16 : 12, height: isMain ? 16 : 12, borderRadius: "50%",
        border: `2px solid ${accentColor}`,
        background: isMain ? C.cyan : C.bg2,
        boxShadow: `0 0 12px ${accentColor}55`,
        flexShrink: 0,
      }} />
      <div style={{
        fontFamily: font.mono, fontSize: "0.56rem", color: accentColor,
        letterSpacing: "0.05em", marginTop: 7, whiteSpace: "nowrap" as const,
        textAlign: "center" as const,
      }}>
        {item.date}
      </div>
    </div>
  );

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr", gap: "0 16px", marginBottom: 48, alignItems: "start" }}>
      {isLeft ? <>{card}{mid}<div /></> : <><div />{mid}{card}</>}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useScrollReveal(index * 0.12);
  return (
    <div
      ref={ref}
      style={{
        background: C.bg3, border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 3, overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = C.cbord;
        el.style.boxShadow = "0 8px 32px rgba(0,212,255,0.07)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "rgba(255,255,255,0.05)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      <div style={{ height: 140, background: project.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 18px,rgba(0,212,255,0.025) 18px,rgba(0,212,255,0.025) 19px)" }} />
        <span style={{ fontFamily: font.mono, fontSize: "1.8rem", color: C.cyan, opacity: 0.2 }}>&lt;/&gt;</span>
        <div style={{ position: "absolute", top: 10, right: 10, fontFamily: font.mono, fontSize: "0.52rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "3px 9px", border: `1px solid ${C.cbord}`, borderRadius: 2, color: C.cyan, background: "rgba(0,0,0,0.8)" }}>
          Hochschulprojekt
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: font.mono, fontSize: "0.58rem", color: C.cyan, letterSpacing: "0.05em", marginBottom: 7 }}>
          ▶ {project.category}
        </div>
        <div style={{ fontFamily: font.sans, fontSize: "1.05rem", fontWeight: 600, color: C.white, marginBottom: 7 }}>
          {project.title}
        </div>
        <div style={{ fontFamily: font.sans, fontSize: "0.72rem", color: C.grey, lineHeight: 1.8, marginBottom: 12 }}>
          {project.desc}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily: font.mono, fontSize: "0.56rem", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2, color: C.grey2, letterSpacing: "0.04em" }}>
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: font.mono, fontSize: "0.62rem", color: C.cyan, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5, letterSpacing: "0.06em", transition: "gap 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
          onMouseLeave={e => (e.currentTarget.style.gap = "5px")}
        >
          Auf GitHub verfügbar →
        </a>
      </div>
    </div>
  );
}

function Main() {
  useEffect(() => {
    const id = "kd-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id; link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500&display=swap";
      document.head.appendChild(link);
    }
    const sid = "kd-styles";
    if (!document.getElementById(sid)) {
      const style = document.createElement("style");
      style.id = sid;
      style.textContent = `
        @keyframes gridPulse{0%,100%{opacity:.5;}50%{opacity:1;}}
        @keyframes orbFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-40px);}}
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:.15;}}
      `;
      document.head.appendChild(style);
    }
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: font.sans }}>

      <section
        id="about"
        style={{
          minHeight: "100vh", padding: "100px 60px 60px",
          display: "grid", gridTemplateColumns: "55% 45%",
          alignItems: "center", gap: 48,
          background: C.bg, position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(0,212,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.025) 1px,transparent 1px)`,
          backgroundSize: "80px 80px", animation: "gridPulse 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: -100, right: 100, width: 500, height: 500,
          borderRadius: "50%", background: "radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 65%)",
          pointerEvents: "none", animation: "orbFloat 10s ease-in-out infinite" }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: font.mono, fontSize: "0.62rem", color: C.cyan,
            letterSpacing: "0.16em", textTransform: "uppercase" as const,
            padding: "6px 14px", border: `1px solid ${C.cbord}`,
            borderRadius: 2, background: C.cglow, marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.cyan, display: "inline-block", animation: "blink 1.5s infinite" }} />
            Open to Work
          </div>

          <h1 style={{ fontFamily: font.sans, fontSize: "clamp(4rem,6vw,6rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.04em", color: C.white, marginBottom: 14 }}>
            Kürsat<br />
            <span style={{ color: C.cyan }}>Darcan</span>
          </h1>

          <div style={{ fontFamily: font.mono, fontSize: "0.8rem", color: C.grey2, marginBottom: 28, letterSpacing: "0.03em" }}>
            Junior Softwareentwickler
            <span style={{ color: C.cyan, margin: "0 8px" }}>/</span>
            B.Sc. Wirtschaftsinformatik
          </div>

          <div style={{ fontFamily: font.sans, fontSize: "0.86rem", lineHeight: 1.9, color: C.grey2, maxWidth: 520, marginBottom: 32, padding: "16px 20px", background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.08)", borderRadius: 3 }}>
            Qualifizierter Absolvent mit abgeschlossenem Bachelorstudium der
            Wirtschaftsinformatik, Schwerpunkt Software Engineering. 3 Jahre
            Berufserfahrung bei Hyand Solutions GmbH - Oracle APEX, PL/SQL
            sowie moderne Webtechnologien.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 32 }}>
            {skills.map(s => (
              <span key={s.label} style={{
                fontFamily: font.mono, fontSize: "0.6rem", letterSpacing: "0.07em",
                padding: "5px 12px", borderRadius: 2, textTransform: "uppercase" as const,
                border: s.advanced ? `1px solid ${C.cyan}` : "1px solid rgba(255,255,255,0.1)",
                color: s.advanced ? C.cyan : C.grey,
                background: s.advanced ? "rgba(0,212,255,0.05)" : "transparent",
              }}>{s.label}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { label: "Werdegang",  id: "education", primary: false  },
              { label: "Projekte",   id: "projects",  primary: false },
              { label: "Kontakt",    id: "contact",   primary: false },
            ].map(btn => (
              <button key={btn.label} onClick={() => scrollTo(btn.id)} style={{
                fontFamily: font.mono, fontSize: "0.68rem", letterSpacing: "0.1em",
                textTransform: "uppercase" as const, padding: "13px 26px", borderRadius: 2,
                cursor: "pointer", fontWeight: btn.primary ? 600 : 400,
                background: btn.primary ? C.cyan : "transparent",
                color: btn.primary ? "#000" : C.white,
                border: btn.primary ? `1px solid ${C.cyan}` : "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.22s",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  if (btn.primary) { el.style.background = "transparent"; el.style.color = C.cyan; el.style.boxShadow = "0 8px 28px rgba(0,212,255,0.25)"; }
                  else { el.style.borderColor = C.cyan; el.style.color = C.cyan; }
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.background = btn.primary ? C.cyan : "transparent";
                  el.style.color = btn.primary ? "#000" : C.white;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = btn.primary ? C.cyan : "rgba(255,255,255,0.15)";
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 14 }}>
          {stats.map((s, i) => (
            <div key={i}
              style={{ background: C.bg3, border: "1px solid rgba(0,212,255,0.1)", borderRadius: 4, padding: "16px 20px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.3)"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.1)"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
            >
              <div style={{ fontFamily: font.mono, fontSize: "0.55rem", color: C.grey, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 5 }}>{s.label}</div>
              <div style={{ fontFamily: font.sans, fontSize: "1rem", fontWeight: 600, color: C.white }}>
                {s.value} <span style={{ color: C.cyan }}>{s.accent}</span>
              </div>
              <div style={{ height: 2, background: "rgba(0,212,255,0.1)", borderRadius: 2, marginTop: 8, overflow: "hidden" }}>
                <div style={{ height: "100%", background: C.cyan, borderRadius: 2, width: `${s.bar}%`, transition: `width 1.5s ${i * 0.2}s ease-out` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" style={{ padding: "120px 60px", background: C.bg2 }}>
        <SectionLabel index="02" text="Werdegang" />
        <SectionTitle>Mein Weg.</SectionTitle>
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: `linear-gradient(180deg,transparent,${C.cbord} 8%,${C.cbord} 92%,transparent)`, transform: "translateX(-50%)" }} />
          {timelineItems.map((item, i) => <TimelineCard key={i} item={item} index={i} />)}
        </div>
      </section>

      <section id="projects" style={{ padding: "120px 60px", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,212,255,0.03) 0%,transparent 70%)", pointerEvents: "none" }} />
        <SectionLabel index="03" text="Projekte" />
        <SectionTitle>Was ich gebaut habe.</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 960 }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </section>

      <section id="contact" style={{ minHeight: "100vh", padding: "120px 60px", background: C.bg2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -200, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,212,255,0.03) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 680, position: "relative", zIndex: 2, textAlign: "center" }}>
          <SectionLabel index="04" text="Kontakt" />
          <h2 style={{ fontFamily: font.sans, fontSize: "clamp(3rem,5.5vw,5rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, color: C.white, marginBottom: 18 }}>
            Bereit für<br /><span style={{ color: C.cyan }}>neue</span><br />Challenges.
          </h2>
          <p style={{ fontFamily: font.sans, fontSize: "0.85rem", color: C.grey, lineHeight: 1.85, marginBottom: 48, maxWidth: 460 }}>
            Für Anfragen bezüglich beruflicher Zusammenarbeit stehe ich gerne zur Verfügung. Ich freue mich auf spannende Projekte und neue Herausforderungen.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "✉ Email",     href: "mailto:Darcankursat@gmail.com",          primary: false,  hcolor: C.cyan    },
              { label: "in LinkedIn", href: "https://linkedin.com/in/kursat-darcan",  primary: false, hcolor: "#7ec8e3" },
              { label: "⌥ GitHub",    href: "https://github.com/DKursat",             primary: false, hcolor: C.grey2   },
            ].map(btn => (
              <a key={btn.label} href={btn.href}
                target={btn.primary ? undefined : "_blank"}
                rel={btn.primary ? undefined : "noopener noreferrer"}
                style={{
                  fontFamily: font.mono, fontSize: "0.68rem", letterSpacing: "0.12em",
                  textTransform: "uppercase" as const, padding: "15px 28px", borderRadius: 2,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                  transition: "all 0.22s", cursor: "pointer",
                  background: btn.primary ? C.cyan : "transparent",
                  color: btn.primary ? "#000" : btn.hcolor,
                  border: btn.primary ? `1px solid ${C.cyan}` : "1px solid rgba(255,255,255,0.12)",
                  fontWeight: btn.primary ? 600 : 400,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  if (btn.primary) { el.style.background = "transparent"; el.style.color = C.cyan; el.style.boxShadow = "0 0 26px rgba(0,212,255,0.22)"; }
                  else { el.style.borderColor = btn.hcolor; }
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.background = btn.primary ? C.cyan : "transparent";
                  el.style.color = btn.primary ? "#000" : btn.hcolor;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = btn.primary ? C.cyan : "rgba(255,255,255,0.12)";
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Main;
