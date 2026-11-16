import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react';
import { useLang } from '../lang/context';
import { person, profile, stations, projects, stack } from '../content';
import { copyEmail, openPalette, shortcut, useReveal, useScrollProgress } from '../lib/ui';
import ParticleName from '../components/ParticleName';
import LocalTime from '../components/LocalTime';

const NAME_LINES = ['KÜRSAT', 'DARCAN'];

const delay = (i: number) => ({ '--i': i }) as CSSProperties;

function SectionHead({ nr, label, title, aside }: { nr: string; label: string; title: ReactNode; aside?: ReactNode }) {
  return (
    <header className="section__head">
      <div className="reveal">
        <p className="section__eyebrow mono">
          <span>{nr}</span>
          <span>{label}</span>
        </p>
        <h2 className="section__title">{title}</h2>
      </div>
      {aside && <p className="section__aside reveal" style={delay(1)}>{aside}</p>}
    </header>
  );
}

/** Gleiche Füllkante wie die Hauptlinie (60 % der Viewport-Höhe). */
const timelineProgress = (r: DOMRect, vh: number) => (vh * 0.6 - r.top) / r.height;

/** Nebenzweig im Graph; füllt sich synchron mit der Hauptlinie. */
function Branch() {
  const ref = useRef<HTMLSpanElement>(null);
  useScrollProgress(ref, timelineProgress);
  return <span ref={ref} className="station__branch" aria-hidden="true" />;
}

/** Lichtkegel der Projektkarten folgt dem Zeiger. */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

function Home() {
  const { lang } = useLang();
  const de = lang === 'de';
  useReveal();

  const timelineRef = useRef<HTMLDivElement>(null);
  useScrollProgress(timelineRef, timelineProgress);

  const formatDate = (d: string) => (de ? d : d.replace('bis', 'to').replace('heute', 'today'));

  const allTech =[...new Set([...stack.flatMap(g => g.items), ...projects.flatMap(p => p.tech)])];

  return (
    <main id="top">
      {/* Hero ------------------------------------------------------- */}
      <section className="hero">
        <div className="frame">
          <div className="hero__top mono">
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              {profile.status[lang]}
            </span>
            <span>
              {person.location} · <LocalTime />
            </span>
          </div>

          <h1 className="hero__name">
            <span className="sr-only">{person.name}</span>
            <ParticleName lines={NAME_LINES} />
          </h1>

          <div className="hero__bottom">
            <div className="reveal">
              <p className="hero__statement">
                {de ? (
                  <>Ich verwandle <em>Daten</em> in Anwendungen, die Menschen gerne benutzen.</>
                ) : (
                  <>I turn <em>data</em> into applications people actually enjoy using.</>
                )}
              </p>
              <p className="hero__summary">
                {profile.statement[lang]} {profile.summary[lang]}
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#kontakt">
                  {de ? 'Lass uns sprechen' : "Let's talk"} <span className="btn__arrow">→</span>
                </a>
                <a className="btn btn--ghost" href="#projekte">
                  {de ? 'Projekte ansehen' : 'View projects'}
                </a>
              </div>
            </div>

            <dl className="facts reveal" style={delay(2)}>
              {profile.facts.map(f => (
                <div key={f.k.en}>
                  <dt className="mono">{f.k[lang]}</dt>
                  <dd>{f.v[lang]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <span className="scroll-hint" aria-hidden="true" />
      </section>

      {/* Laufband --------------------------------------------------- */}
      <div className="marquee" aria-hidden="true">
        {[0, 1].map(n => (
          <ul key={n} className="marquee__track">
            {allTech.map(t => (
              <li key={t} className="marquee__item">{t}</li>
            ))}
          </ul>
        ))}
      </div>

      {/* Werdegang -------------------------------------------------- */}
      <section id="werdegang" className="section">
        <div className="frame">
          <SectionHead
            nr="01"
            label={de ? 'Werdegang' : 'Background'}
            title={de ? <>Der Weg<br />bis hierher.</> : <>The road<br />so far.</>}
            aside={
              de
                ? 'Von der Gesamtschule über die Berufsausbildung und das duale Studium bis zum Junior Berater für Oracle APEX, berufsbegleitend im Master mit Schwerpunkt KI.'
                : "From secondary school through vocational training and a dual degree to junior Oracle APEX consultant, now pursuing a part-time master's in applied AI."
            }
          />

          <div ref={timelineRef} className="timeline">
            <span className="timeline__rail" aria-hidden="true" />
            <ol>
            {stations.map(s => {
              const above = !!(s.parallel && s.parallelAbove);
              const main = (
                <>
                  <span className="station__date mono">{formatDate(s.date)}</span>
                  <div>
                    <h3 className="station__title">
                      {s.place[lang]}
                      {s.current && <span className="badge">{de ? 'Aktuell' : 'Now'}</span>}
                    </h3>
                    <p className="station__role">{s.role[lang]}</p>
                    {s.note && <p className="station__note">{s.note[lang]}</p>}
                  </div>
                </>
              );
              const parallel = s.parallel && (
                <div className={`station__parallel${above ? ' station__parallel--above' : ''}`}>
                  {above && <Branch />}
                  <span className="station__date mono">{formatDate(s.parallel.date)}</span>
                  <div>
                    <h4 className="station__title station__title--sub">
                      {s.parallel.place[lang]}
                      {s.parallel.tag && <span className="station__tag">{s.parallel.tag[lang]}</span>}
                    </h4>
                    <p className="station__role">{s.parallel.role[lang]}</p>
                    {s.parallel.note && <p className="station__note">{s.parallel.note[lang]}</p>}
                  </div>
                </div>
              );
              const fork = above ? ' station--fork-up' : s.parallel ? ' station--fork' : '';
              return (
                <li key={s.hash} className={`station reveal${s.current ? ' station--current' : ''}${fork}`}>
                  {above ? (
                    <>
                      {parallel}
                      <div className="station__row">{main}</div>
                    </>
                  ) : (
                    <>
                      {main}
                      {s.parallel && <Branch />}
                      {parallel}
                    </>
                  )}
                </li>
              );
            })}
            </ol>
          </div>
        </div>
      </section>

      {/* Projekte --------------------------------------------------- */}
      <section id="projekte" className="section">
        <div className="frame">
          <SectionHead
            nr="02"
            label={de ? 'Ausgewählte Projekte' : 'Selected work'}
            title={de ? <>Gebaut,<br />nicht nur gelernt.</> : <>Built,<br />not just learned.</>}
            aside={
              de
                ? 'Von Full-Stack über Machine Learning bis IT-Security. Jedes Projekt mit Code auf GitHub.'
                : 'From full-stack to machine learning to IT security. Every project with code on GitHub.'
            }
          />

          <ul className="projects">
            {projects.map((p, i) => (
              <li key={p.slug} className="card reveal" style={delay(i % 2)} onPointerMove={trackPointer}>
                <div className="card__top">
                  <span className="card__nr" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <a
                    className="card__link"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title[lang]}: ${de ? 'Code auf GitHub' : 'code on GitHub'}`}
                  >
                    ↗
                  </a>
                </div>
                <p className="card__cat mono">{p.category[lang]}</p>
                <h3 className="card__title">{p.title[lang]}</h3>
                <p className="card__desc">{p.desc[lang]}</p>
                <div className="card__foot">
                  <ul className="tags" aria-label="Tech">
                    {p.tech.map(t => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack ------------------------------------------------------ */}
      <section id="stack" className="section">
        <div className="frame">
          <SectionHead
            nr="03"
            label="Stack"
            title={de ? <>Werkzeuge,<br />die ich beherrsche.</> : <>Tools<br />I work with.</>}
          />
          <dl className="stack">
            {stack.map((g, i) => (
              <div key={g.group.en} className="stack__group reveal" style={delay(i)}>
                <dt className="mono">{g.group[lang]}</dt>
                <dd>
                  {g.items.map(item => <span key={item} className="chip">{item}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Kontakt ---------------------------------------------------- */}
      <section id="kontakt" className="contact">
        <div className="frame">
          <p className="section__eyebrow mono reveal">
            <span>04</span>
            <span>{de ? 'Kontakt' : 'Contact'}</span>
          </p>
          <h2 className="contact__title reveal" style={delay(1)}>
            {de ? <>Lass uns etwas<br />bauen<span>.</span></> : <>Let's build<br />something<span>.</span></>}
          </h2>
          <p className="contact__lead reveal" style={delay(2)}>
            {de
              ? 'Ich bin offen für neue Herausforderungen. Schreib mir, ich antworte schnell.'
              : "I'm open to new opportunities. Drop me a line, I reply quickly."}
          </p>

          <div className="mail reveal" style={delay(3)}>
            <a className="mail__link" href={`mailto:${person.email}`}>{person.email}</a>
            <button type="button" className="btn btn--ghost" onClick={() => copyEmail(lang)}>
              {de ? 'Kopieren' : 'Copy'}
            </button>
          </div>

          <div className="contact__links reveal" style={delay(4)}>
            <a className="btn btn--ghost" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="btn__arrow">↗</span>
            </a>
            <a className="btn btn--ghost" href={person.github} target="_blank" rel="noopener noreferrer">
              GitHub <span className="btn__arrow">↗</span>
            </a>
            <button type="button" className="btn btn--ghost" onClick={openPalette}>
              {de ? 'Schnellzugriff' : 'Quick access'} <kbd className="hide-touch">{shortcut}</kbd>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
