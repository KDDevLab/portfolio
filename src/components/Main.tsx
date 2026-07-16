import { useEffect, useRef, useState, useCallback } from 'react';
import { C, font } from '../lib/design';
import { useLang } from '../lib/useLang';
import { pick } from '../lib/langContext';
import { stack, timelineItems, projects } from '../data/profile';

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function EntityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <rect x="1" y="2" width="12" height="2.2" fill="none" stroke={C.blue} strokeWidth="1" />
      <rect x="1" y="6" width="12" height="2.2" fill="none" stroke={C.blue} strokeWidth="1" />
      <rect x="1" y="10" width="12" height="2.2" fill="none" stroke={C.blue} strokeWidth="1" />
    </svg>
  );
}

function SchemaSection() {
  const { lang } = useLang();
  const canvasRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const studiumRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [revealed, setRevealed] = useState(reduceMotion);
  const [connectors, setConnectors] = useState('');

  const drawConnectors = useCallback(() => {
    const svg = svgRef.current;
    const canvas = canvasRef.current;
    if (!svg || !canvas || window.innerWidth <= 780) { setConnectors(''); return; }
    const root = rootRef.current?.getBoundingClientRect();
    const targets = [studiumRef, positionRef, stackRef]
      .map(r => r.current?.getBoundingClientRect())
      .filter((r): r is DOMRect => !!r);
    if (!root || targets.length !== 3) return;

    const canvasRect = canvas.getBoundingClientRect();
    const startX = root.left + root.width / 2 - canvasRect.left;
    const startY = root.bottom - canvasRect.top;

    let html = '';
    targets.forEach(t => {
      const endX = t.left + t.width / 2 - canvasRect.left;
      const endY = t.top - canvasRect.top;
      const midY = startY + (endY - startY) * 0.55;
      html += `<path class="drawn" d="M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}" />`;
      html += `<circle class="drawn" cx="${endX}" cy="${endY}" r="3" />`;
    });
    html += `<circle class="drawn" cx="${startX}" cy="${startY}" r="3" />`;
    setConnectors(html);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), reduceMotion ? 0 : 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const t = setTimeout(drawConnectors, reduceMotion ? 0 : 700);
    return () => clearTimeout(t);
  }, [revealed, drawConnectors]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(timer); timer = setTimeout(drawConnectors, 120); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawConnectors]);

  return (
    <section className="wrap" style={{ padding: '56px 0 20px', position: 'relative' }}>
      <div ref={canvasRef} style={{ position: 'relative' }}>
        <svg ref={svgRef} className="connectors" dangerouslySetInnerHTML={{ __html: connectors }} />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 78, position: 'relative', zIndex: 2 }}>
          <Entity refEl={rootRef} name="PERSON" show={revealed} maxWidth={270}>
            <EntityRow k={lang === 'de' ? 'NAME' : 'NAME'} v="Kürsat Darcan" />
            <EntityRow k={lang === 'de' ? 'STANDORT' : 'LOCATION'} v="Moers, NRW" />
          </Entity>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 24, position: 'relative', zIndex: 2 }} className="entity-satellites">
          <SatelliteSlot label={lang === 'de' ? '↳ studierte_an' : '↳ studied_at'} show={revealed} delay={1}>
            <Entity refEl={studiumRef} name="STUDIUM" show={revealed}>
              <EntityRow k={lang === 'de' ? 'ABSCHLUSS' : 'DEGREE'} v={lang === 'de' ? 'B.Sc. Wirtschaftsinformatik' : 'B.Sc. Information Systems'} />
              <EntityRow k={lang === 'de' ? 'SCHWERPUNKT' : 'FOCUS'} v="Software Engineering" />
              <EntityRow k={lang === 'de' ? 'HOCHSCHULE' : 'INSTITUTION'} v="FHDW Mettmann" />
              <EntityRow k={lang === 'de' ? 'NOTE' : 'GRADE'} v={lang === 'de' ? '2,5' : '2.5'} />
            </Entity>
          </SatelliteSlot>

          <SatelliteSlot label={lang === 'de' ? '↳ arbeitet_als' : '↳ works_as'} show={revealed} delay={2}>
            <Entity refEl={positionRef} name="POSITION" show={revealed}>
              <EntityRow k={lang === 'de' ? 'ROLLE' : 'ROLE'} v={lang === 'de' ? 'Berater' : 'Consultant'} />
              <EntityRow k={lang === 'de' ? 'UNTERNEHMEN' : 'COMPANY'} v="HyPlus" />
              <EntityRow k={lang === 'de' ? 'ERFAHRUNG' : 'EXPERIENCE'} v={lang === 'de' ? '3 Jahre' : '3 years'} />
            </Entity>
          </SatelliteSlot>

          <SatelliteSlot label={lang === 'de' ? '↳ nutzt' : '↳ uses'} show={revealed} delay={3}>
            <Entity refEl={stackRef} name="STACK" show={revealed}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '14px 16px' }}>
                {stack.map(s => (
                  <span key={s} style={{
                    fontFamily: font.mono, fontSize: '0.72rem', background: C.surface2,
                    border: `1px solid ${C.border}`, borderRadius: 6, padding: '5px 9px', color: C.text,
                  }}>{s}</span>
                ))}
              </div>
            </Entity>
          </SatelliteSlot>
        </div>
      </div>

      <style>{`
        svg.connectors{ position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; overflow:visible; }
        svg.connectors path{ fill:none; stroke:${C.borderStrong}; stroke-width:1.5; }
        svg.connectors circle{ fill:${C.bg}; stroke:${C.blue}; stroke-width:1.5; }
        @media (max-width: 780px){
          svg.connectors{ display:none; }
          .entity-satellites{ grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}

function Entity({ refEl, name, show, maxWidth = 300, children }: {
  refEl: React.RefObject<HTMLDivElement | null>; name: string; show: boolean; maxWidth?: number; children: React.ReactNode;
}) {
  return (
    <div
      ref={refEl}
      style={{
        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10,
        width: '100%', maxWidth,
        opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(10px) scale(0.98)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px',
        borderBottom: `1px solid ${C.border}`, background: C.surface2,
        borderRadius: '10px 10px 0 0',
      }}>
        <EntityIcon />
        <span style={{ fontFamily: font.mono, fontSize: '0.82rem', letterSpacing: '0.06em', color: C.text, fontWeight: 500 }}>
          {name}
        </span>
      </div>
      <div style={{ padding: '6px 0' }}>{children}</div>
    </div>
  );
}

function EntityRow({ k, v }: { k: string; v: string }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '112px 1fr', gap: 10,
      padding: '9px 16px', fontSize: '0.85rem', borderBottom: `1px solid ${C.border}`,
    }}>
      <span style={{ fontFamily: font.mono, color: C.amber, fontSize: '0.72rem', alignSelf: 'start', paddingTop: 2 }}>{k}</span>
      <span style={{ color: C.text }}>{v}</span>
    </div>
  );
}

function SatelliteSlot({ label, show, delay, children }: { label: string; show: boolean; delay: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        fontFamily: font.mono, fontSize: '0.72rem', color: C.textMuted, letterSpacing: '0.04em', marginBottom: 10,
        opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(-4px)',
        transition: `opacity 0.5s ease ${reduceMotion ? 0 : delay * 0.18}s, transform 0.5s ease ${reduceMotion ? 0 : delay * 0.18}s`,
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function WerdegangSection() {
  const { lang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [path, setPath] = useState('');

  const drawLine = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const nodes = container.querySelectorAll('.tl-node');
    if (nodes.length < 2) { setPath(''); return; }

    const containerRect = container.getBoundingClientRect();
    const points = Array.from(nodes).map(n => {
      const r = n.getBoundingClientRect();
      return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
    });

    const isStraightColumn = points.every(p => Math.abs(p.x - points[0].x) < 1);

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1], curr = points[i];
      if (isStraightColumn) {
        d += ` L ${curr.x} ${curr.y}`;
      } else {
        const midY = prev.y + (curr.y - prev.y) * 0.5;
        const sign = i % 2 === 0 ? 1 : -1;
        const bulgeX = prev.x + sign * 22;
        d += ` C ${bulgeX} ${midY}, ${bulgeX} ${midY}, ${curr.x} ${curr.y}`;
      }
    }
    setPath(d);
  }, []);

  useEffect(() => {
    const t = setTimeout(drawLine, 60);
    window.addEventListener('load', drawLine);
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(timer); timer = setTimeout(drawLine, 120); };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', drawLine);
      window.removeEventListener('resize', onResize);
    };
  }, [drawLine, lang]);

  useEffect(() => {
    const svg = svgRef.current;
    const p = svg?.querySelector('path');
    if (!p) return;
    const length = p.getTotalLength();
    if (reduceMotion) { p.style.strokeDasharray = 'none'; return; }
    p.style.strokeDasharray = String(length);
    p.style.strokeDashoffset = String(length);
    requestAnimationFrame(() => {
      p.classList.add('drawn');
      p.style.strokeDashoffset = '0';
    });
  }, [path]);

  return (
    <section className="wrap" style={{ padding: '20px 0 8px' }} id="education">
      <RelationHeader tag="1:n" title={lang === 'de' ? 'Werdegang' : 'Background'} />
      <div ref={containerRef} style={{ position: 'relative', padding: '4px 0' }}>
        <svg ref={svgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
          {path && <path d={path} style={{ fill: 'none', stroke: C.borderStrong, strokeWidth: 1.5, transition: reduceMotion ? 'none' : 'stroke-dashoffset 1.4s ease' }} />}
        </svg>
        {timelineItems.map((item, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          const station = pick(item.station, lang);
          const role = pick(item.role, lang);
          const desc = item.desc ? pick(item.desc, lang) : null;
          const card = (
            <div style={{ maxWidth: 340 }}>
              <div style={{ fontFamily: font.mono, fontSize: '0.76rem', color: C.textMuted, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                {item.date}
                {item.current && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: font.mono, fontSize: '0.65rem', color: C.amber }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.amber, display: 'inline-block' }} />
                    {lang === 'de' ? 'aktuell' : 'current'}
                  </span>
                )}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.96rem' }}>{station}</div>
              <div style={{ color: C.blue, fontSize: '0.87rem', marginTop: 2 }}>{role}</div>
              {desc && (
                <div style={{ color: C.textMuted, fontSize: '0.84rem', marginTop: 8, whiteSpace: 'pre-line' }}>{desc}</div>
              )}
            </div>
          );
          const node = (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }} className="tl-spine-col">
              <div className="tl-node" style={{
                width: 12, height: 12, borderRadius: '50%', background: C.bg,
                border: `2px solid ${item.current ? C.amber : C.borderStrong}`,
                zIndex: 2, position: 'relative',
              }} />
            </div>
          );
          return (
            <div
              key={idx}
              className="tl-row"
              style={{
                display: 'grid', gridTemplateColumns: '1fr 40px 1fr', columnGap: 24,
                paddingBottom: idx === timelineItems.length - 1 ? 0 : 34, position: 'relative',
              }}
            >
              {side === 'left' ? (
                <div className="tl-side" style={{ display: 'flex', justifyContent: 'flex-end' }}>{card}</div>
              ) : (
                <div className="tl-side-empty" style={{ display: 'flex' }} />
              )}
              {node}
              {side === 'right' ? (
                <div className="tl-side" style={{ display: 'flex', justifyContent: 'flex-start' }}>{card}</div>
              ) : (
                <div className="tl-side-empty" style={{ display: 'flex' }} />
              )}
            </div>
          );
        })}
      </div>
      <style>{`
        @media (max-width: 780px){
          .tl-row{ grid-template-columns: 28px 1fr !important; column-gap: 16px !important; }
          .tl-side-empty{ display: none !important; }
          .tl-side{ grid-column: 2; justify-content: flex-start !important; }
          .tl-spine-col{ grid-column: 1; }
        }
      `}</style>
    </section>
  );
}

function RelationHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 30,
      paddingTop: 40, borderTop: `1px dashed ${C.border}`,
    }}>
      <span style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.textMuted, border: `1px solid ${C.border}`, borderRadius: 5, padding: '3px 8px' }}>
        {tag}
      </span>
      <h2 style={{ fontFamily: font.sans, fontSize: '1.3rem', fontWeight: 600, margin: 0 }}>{title}</h2>
    </div>
  );
}

function ProjekteSection() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(0);
  const p = projects[selected];

  return (
    <section className="wrap" style={{ padding: '20px 0 8px' }} id="projects">
      <RelationHeader tag="1:n" title={lang === 'de' ? 'Projekte' : 'Projects'} />
      <div className="master-detail" style={{
        display: 'grid', gridTemplateColumns: '260px 1fr',
        border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden',
      }}>
        <div className="pd-list" style={{ background: C.surface, borderRight: `1px solid ${C.border}` }}>
          {projects.map((proj, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                position: 'relative', padding: '16px 16px 16px 18px',
                borderBottom: i === projects.length - 1 ? 'none' : `1px solid ${C.border}`,
                cursor: 'pointer', background: i === selected ? C.surface2 : 'none',
                border: 'none', borderLeft: i === selected ? `2px solid ${C.amber}` : '2px solid transparent',
                width: '100%', textAlign: 'left', color: C.text, display: 'block',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: 4 }}>{pick(proj.title, lang)}</div>
              <div style={{ fontFamily: font.mono, fontSize: '0.66rem', color: C.textMuted }}>{pick(proj.category, lang)}</div>
            </button>
          ))}
        </div>
        <div className="pd-detail" style={{ padding: 26, background: C.surface2 }}>
          <div style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.blue, marginBottom: 12 }}>{pick(p.category, lang)}</div>
          <h3 style={{ fontFamily: font.sans, fontSize: '1.2rem', margin: '0 0 12px' }}>{pick(p.title, lang)}</h3>
          <p style={{ color: C.textMuted, fontSize: '0.9rem', margin: '0 0 18px', maxWidth: 520 }}>{pick(p.desc, lang)}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {p.tech.map(t => (
              <span key={t} style={{ fontFamily: font.mono, fontSize: '0.7rem', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, padding: '4px 8px' }}>
                {t}
              </span>
            ))}
          </div>
          <a
            href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: font.mono, fontSize: '0.85rem', border: `1px solid ${C.border}`, borderRadius: 7, padding: '8px 14px', display: 'inline-block', color: C.text }}
          >
            GitHub →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 780px){
          .master-detail{ grid-template-columns: 1fr !important; }
          .pd-list{ border-right: none !important; border-bottom: 1px solid ${C.border}; }
          .pd-detail{ padding: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function KontaktSection() {
  const { lang } = useLang();
  return (
    <section className="wrap" style={{ padding: '70px 0 64px', marginTop: 40, borderTop: `1px dashed ${C.border}` }} id="contact">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 24 }}>
        <h2 style={{ fontFamily: font.sans, fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>
          {lang === 'de' ? 'Verbindung aufnehmen' : 'Get in touch'}
        </h2>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="mailto:Darcankursat@gmail.com" style={linkStyle}>Email</a>
          <a href="https://linkedin.com/in/kursat-darcan" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
          <a href="https://github.com/DKursat" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
        </div>
      </div>
    </section>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: font.mono, fontSize: '0.88rem', border: `1px solid ${C.border}`,
  borderRadius: 8, padding: '10px 16px', color: C.text,
};

function Main() {
  const { lang } = useLang();
  return (
    <>
      <section className="wrap" style={{ padding: '30px 0 10px' }} id="about">
        <div style={{ fontFamily: font.mono, fontSize: '0.78rem', color: C.blue, letterSpacing: '0.06em', marginBottom: 12 }}>
          {lang === 'de' ? '// Kurzprofil' : '// Quick profile'}
        </div>
        <h1 style={{
          fontFamily: font.sans, fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', fontWeight: 700,
          lineHeight: 1.2, margin: '0 0 12px', maxWidth: 720,
        }}>
          {lang === 'de'
            ? 'Wirtschaftsinformatiker (B.Sc.) mit Fokus auf Software Engineering.'
            : 'Information systems graduate (B.Sc.) focused on software engineering.'}
        </h1>
        <p style={{ color: C.textMuted, fontSize: '1rem', maxWidth: 620, margin: 0 }}>
          {lang === 'de'
            ? 'Qualifizierter Absolvent mit 3 Jahren Berufserfahrung bei HyPlus: Oracle APEX, PL/SQL sowie moderne Webtechnologien.'
            : 'Qualified graduate with 3 years of professional experience at HyPlus: Oracle APEX, PL/SQL and modern web technologies.'}
        </p>
      </section>

      <SchemaSection />
      <WerdegangSection />
      <ProjekteSection />
      <KontaktSection />

      <style>{`
        .wrap{ max-width: 1080px; margin: 0 auto; padding: 0 24px; }
        @media (max-width: 640px){
          .wrap{ padding: 0 16px; }
        }
      `}</style>
    </>
  );
}

export default Main;
