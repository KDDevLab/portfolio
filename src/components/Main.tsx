import { useEffect, useRef } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { C, font } from "../lib/design";
import { skills, timelineItems, projects } from "../data/profile";

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
      fontFamily: font.sans, fontSize: "clamp(2.6rem,4vw,5.5rem)",
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
      className="kd-tl-card"
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
      <div style={{ fontFamily: font.sans, fontSize: "clamp(0.92rem,1.1vw,1.1rem)", fontWeight: 600, color: C.white, marginBottom: 3 }}>
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
    <div className="kd-tl-mid" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16 }}>
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
    <div ref={ref} className="kd-tl-row">
      {isLeft ? <>{card}{mid}<div className="kd-tl-empty" /></> : <><div className="kd-tl-empty" />{mid}{card}</>}
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
        <div style={{ fontFamily: font.sans, fontSize: "clamp(1.05rem,1.2vw,1.25rem)", fontWeight: 600, color: C.white, marginBottom: 7 }}>
          {project.title}
        </div>
        <div style={{ fontFamily: font.sans, fontSize: "clamp(0.72rem,0.85vw,0.9rem)", color: C.grey, lineHeight: 1.8, marginBottom: 12 }}>
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

        .kd-hero-grid{display:grid;grid-template-columns:55% 45%;align-items:center;gap:48px;padding:100px 60px 60px;max-width:1280px;margin:0 auto;position:relative;z-index:2;}
        .kd-section-inner{padding:120px 60px;max-width:1280px;margin:0 auto;}
        .kd-proj-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;max-width:960px;}
        .kd-tl-row{display:grid;grid-template-columns:1fr 130px 1fr;gap:0 8px;margin-bottom:48px;align-items:start;}
        .kd-stack-cols{padding-left:18px;display:grid;grid-template-columns:1fr 1fr;column-gap:16px;}
        .kd-contact-inner{padding:120px 60px;max-width:680px;margin:0 auto;text-align:center;position:relative;z-index:2;width:100%;}

        @media(min-width:1400px){
          html{font-size:112%;}
          .kd-hero-grid{padding:120px 80px 80px;gap:64px;max-width:1440px;}
          .kd-section-inner{padding:140px 80px;max-width:1440px;}
          .kd-proj-grid{max-width:1100px;gap:28px;}
          .kd-contact-inner{padding:140px 80px;max-width:780px;}
          .kd-tl-row{margin-bottom:56px;}
        }

        @media(min-width:1800px){
          html{font-size:120%;}
          .kd-hero-grid{padding:140px 100px 100px;gap:80px;}
          .kd-section-inner{padding:160px 100px;}
          .kd-contact-inner{padding:160px 100px;}
        }

        @media(max-width:900px){
          .kd-hero-grid{grid-template-columns:1fr;padding:80px 24px 48px;gap:36px;}
          .kd-code-block{display:none;}
          .kd-section-inner{padding:64px 24px;}
          .kd-proj-grid{grid-template-columns:1fr;}
          .kd-tl-row{display:flex!important;flex-direction:column;margin-bottom:24px;}
          .kd-tl-empty{display:none!important;}
          .kd-tl-mid{order:1;padding-top:0!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start;gap:8px;margin-bottom:8px;}
          .kd-tl-mid > div:last-child{margin-top:0!important;}
          .kd-tl-card{order:2;text-align:left!important;margin-bottom:0;}
          .kd-stack-cols{grid-template-columns:1fr;}
          .kd-contact-inner{padding:64px 24px;}
        }

        @media(max-width:480px){
          html{font-size:95%;}
          .kd-hero-grid{padding:72px 16px 40px;}
          .kd-section-inner{padding:48px 16px;}
          .kd-contact-inner{padding:48px 16px;}
        }
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
          minHeight: "100vh",
          background: C.bg, position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(0,212,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.025) 1px,transparent 1px)`,
          backgroundSize: "80px 80px", animation: "gridPulse 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: -100, right: 100, width: 500, height: 500,
          borderRadius: "50%", background: "radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 65%)",
          pointerEvents: "none", animation: "orbFloat 10s ease-in-out infinite" }} />

        <div className="kd-hero-grid">

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

          <h1 style={{ fontFamily: font.sans, fontSize: "clamp(4rem,6vw,8rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.04em", color: C.white, marginBottom: 14 }}>
            Kürsat<br />
            <span style={{ color: C.cyan }}>Darcan</span>
          </h1>

          <div style={{ fontFamily: font.mono, fontSize: "clamp(0.8rem,1vw,1rem)", color: C.grey2, marginBottom: 28, letterSpacing: "0.03em" }}>
            Junior Softwareentwickler
            <span style={{ color: C.cyan, margin: "0 8px" }}>/</span>
            B.Sc. Wirtschaftsinformatik
          </div>

          <div style={{ fontFamily: font.sans, fontSize: "clamp(0.86rem,1vw,1.05rem)", lineHeight: 1.9, color: C.grey2, maxWidth: 520, marginBottom: 32, padding: "16px 20px", background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.08)", borderRadius: 3 }}>
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

        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 6, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.45)" }} className="kd-code-block">
            <div style={{ background: "#161616", padding: "9px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block", flexShrink: 0 }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block", flexShrink: 0 }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block", flexShrink: 0 }} />
              <span style={{ flex: 1, textAlign: "center", fontFamily: font.mono, fontSize: "0.58rem", color: "#666", letterSpacing: "0.05em", marginRight: 28 }}>profile.json</span>
            </div>
            <div style={{ padding: "18px 22px 14px", fontFamily: font.mono, fontSize: "0.76rem", lineHeight: 1.85 }}>
              <div style={{ color: "#858585" }}>{'{'}</div>
              <div style={{ paddingLeft: 18, color: "#5a7a5a", fontStyle: "italic", marginBottom: 6 }}>// Kürsat Darcan - Developer Profile</div>
              <div style={{ height: 6 }} />
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"name"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#ce9178" }}>"Kürsat Darcan"</span><span style={{ color: "#858585" }}>,</span></div>
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"degree"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#ce9178" }}>"B.Sc. Wirtschaftsinformatik"</span><span style={{ color: "#858585" }}>,</span></div>
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"grade"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#b5cea8" }}>2.5</span><span style={{ color: "#858585" }}>,</span></div>
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"location"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#ce9178" }}>"Moers, NRW"</span><span style={{ color: "#858585" }}>,</span></div>
              <div style={{ paddingLeft: 18 }}>
                <span style={{ color: "#9cdcfe" }}>"stack"</span><span style={{ color: "#858585" }}>: [</span>
                <div className="kd-stack-cols">
                  <div><span style={{ color: "#ce9178" }}>"GitHub"</span><span style={{ color: "#858585" }}>, </span>
                  <span style={{ color: "#ce9178" }}>"HTML/CSS"</span><span style={{ color: "#858585" }}>,</span></div><br />
                  <div><span style={{ color: "#ce9178" }}>"Java"</span><span style={{ color: "#858585" }}>, </span>
                  <span style={{ color: "#ce9178" }}>"JavaScript"</span><span style={{ color: "#858585" }}>,</span></div><br />
                  <div><span style={{ color: "#ce9178" }}>"MongoDB"</span><span style={{ color: "#858585" }}>, </span>
                  <span style={{ color: "#ce9178" }}>"Next.js"</span><span style={{ color: "#858585" }}>,</span></div><br />
                  <div><span style={{ color: "#ce9178" }}>"Oracle APEX"</span><span style={{ color: "#858585" }}>, </span>
                  <span style={{ color: "#ce9178" }}>"Oracle Datenbanken"</span><span style={{ color: "#858585" }}>,</span></div><br />
                  <div><span style={{ color: "#ce9178" }}>"PL/SQL"</span><span style={{ color: "#858585" }}>, </span>
                  <span style={{ color: "#ce9178" }}>"Vue.js"</span><span style={{ color: "#858585" }}>,</span></div>
                </div>
                <span style={{ color: "#858585" }}>],</span>
              </div>
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"experience"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#ce9178" }}>"3 Jahre Hyand Solutions"</span><span style={{ color: "#858585" }}>,</span></div>
              <div style={{ paddingLeft: 18 }}><span style={{ color: "#9cdcfe" }}>"status"</span><span style={{ color: "#858585" }}>: </span><span style={{ color: "#ce9178" }}>"open_to_work"</span></div>
              <div style={{ color: "#858585", marginTop: 2 }}>{'}'}</div>
            </div>
            <div style={{ padding: "8px 22px 14px", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: font.mono, fontSize: "0.68rem", color: C.cyan, animation: "blink 1.5s infinite" }}>▶</span>
              <span style={{ fontFamily: font.mono, fontSize: "0.68rem", color: C.cyan, letterSpacing: "0.06em" , animation: "blink 1.5s infinite"}}>ready_for_new_challenges </span>
            </div>
          </div>
        </div>
        </div>{/* end kd-hero-grid */}
      </section>

      <section id="education" style={{ background: C.bg2 }}>
        <div className="kd-section-inner">
        <SectionLabel index="02" text="Werdegang" />
        <SectionTitle>Werdegang & Erfahrung<span style={{ color: C.cyan }}>.</span></SectionTitle>
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: `linear-gradient(180deg,transparent,${C.cbord} 8%,${C.cbord} 92%,transparent)`, transform: "translateX(-50%)" }} />
          {timelineItems.map((item, i) => <TimelineCard key={i} item={item} index={i} />)}
        </div>
        </div>
      </section>

      <section id="projects" style={{ background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,212,255,0.03) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="kd-section-inner">
        <SectionLabel index="03" text="Projekte" />
        <SectionTitle>Was ich entwickelt habe.</SectionTitle>
        <div className="kd-proj-grid">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
        </div>
      </section>

      <section id="contact" style={{ minHeight: "100vh", background: C.bg2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -200, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,212,255,0.03) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div className="kd-contact-inner">
          <SectionLabel index="04" text="Kontakt" />
          <h2 style={{ fontFamily: font.sans, fontSize: "clamp(3rem,5.5vw,6.5rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, color: C.white, marginBottom: 18 }}>
            Bereit für<br /><span style={{ color: C.cyan }}>neue</span><br />Challenges.
          </h2>
          <p style={{ fontFamily: font.sans, fontSize: "0.85rem", color: C.grey, lineHeight: 1.85, marginBottom: 48, maxWidth: 460 }}>
          Offen für spannende Projekte und neue berufliche Möglichkeiten. Ich freue mich über den Austausch.          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:Darcankursat@gmail.com"
              style={{ fontFamily: font.mono, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "15px 28px", borderRadius: 2, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.22s", color: C.cyan, border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ✉ Email
            </a>
            <a href="https://linkedin.com/in/kursat-darcan" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: font.mono, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "15px 28px", borderRadius: 2, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.22s", color: "#7ec8e3", border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#7ec8e3"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <LinkedInIcon style={{ fontSize: "1rem" }} /> LinkedIn
            </a>
            <a href="https://github.com/DKursat" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: font.mono, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "15px 28px", borderRadius: 2, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.22s", color: C.grey2, border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.grey2; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <GitHubIcon style={{ fontSize: "1rem" }} /> GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Main;
