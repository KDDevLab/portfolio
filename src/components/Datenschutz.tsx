import { useNavigate } from 'react-router-dom';
import { C, font } from '../lib/design';

function Datenschutz() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.white, fontFamily: font.sans, paddingTop: 80 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 40px' }}>

        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: font.mono, fontSize: '0.65rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '9px 18px', borderRadius: 2,
            background: 'transparent', border: `1px solid rgba(0,212,255,0.22)`,
            color: C.cyan, cursor: 'pointer', marginBottom: 48,
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,212,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(-4px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(0)'; }}
        >
          ← Zurück
        </button>

        <div style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.cyan, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          Legal
          <span style={{ width: 40, height: 1, background: C.cyan, display: 'inline-block' }} />
        </div>

        <h1 style={{ fontFamily: font.sans, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: C.white, marginBottom: 48, lineHeight: 1 }}>
          Datenschutz<span style={{ color: C.cyan }}>.</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

          <LegalSection title="1. Datenschutz auf einen Blick">
            <p><strong style={{ color: C.white }}>Allgemeine Hinweise</strong></p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </LegalSection>

          <LegalSection title="2. Allgemeine Hinweise und Pflichtinformationen">
            <p><strong style={{ color: C.white }}>Datenschutz</strong></p>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p><strong style={{ color: C.white }}>Hinweis zur verantwortlichen Stelle</strong></p>
            <p>
              Kürsat Darcan<br />
              47445 Moers, Deutschland<br />
              E-Mail: <a href="mailto:Darcankursat@gmail.com" style={{ color: C.cyan, textDecoration: 'none' }}>Darcankursat@gmail.com</a>
            </p>
          </LegalSection>

          <LegalSection title="3. Datenerfassung auf dieser Website">
            <p><strong style={{ color: C.white }}>Server-Log-Dateien</strong></p>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:</p>
            <ul style={{ paddingLeft: 20, margin: '8px 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['Browsertyp und Browserversion', 'Verwendetes Betriebssystem', 'Referrer URL', 'Hostname des zugreifenden Rechners', 'Uhrzeit der Serveranfrage', 'IP-Adresse'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: C.cyan, fontSize: '0.5rem' }}>▶</span>{item}
                </li>
              ))}
            </ul>
            <p><strong style={{ color: C.white }}>Keine aktive Datenerfassung</strong></p>
            <p>Diese Website ist ein reines Portfolio ohne Kontaktformular oder Login-Funktionen. Es werden keine personenbezogenen Daten aktiv erfasst. Es werden keine Cookies gesetzt und keine Tracking-Tools oder Analyse-Software eingesetzt.</p>
          </LegalSection>

          <LegalSection title="4. Ihre Rechte">
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit gemäß Art. 15–20 DSGVO. Zudem können Sie eine erteilte Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO) und sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO).</p>
          </LegalSection>

          <LegalSection title="5. Hosting">
            <p>
              Diese Website wird gehostet bei:<br /><br />
              <strong style={{ color: C.white }}>netcup GmbH</strong><br />
              Daimlerstraße 25, 76185 Karlsruhe, Deutschland
            </p>
            <p>Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Weitere Informationen: <a href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank" rel="noopener noreferrer" style={{ color: C.cyan, textDecoration: 'none' }}>netcup Datenschutzerklärung</a></p>
          </LegalSection>

          <div style={{ fontFamily: font.mono, fontSize: '0.58rem', color: '#444', letterSpacing: '0.06em', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

        </div>
      </div>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(0,212,255,0.18)', paddingLeft: 24 }}>
      <h2 style={{ fontFamily: font.sans, fontSize: '0.95rem', fontWeight: 600, color: C.cyan, letterSpacing: '0.04em', marginBottom: 14 }}>
        {title}
      </h2>
      <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: C.grey2, lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

export default Datenschutz;