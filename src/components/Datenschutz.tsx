import { useNavigate } from 'react-router-dom';
import { C, font } from '../lib/design';
import { useLang } from '../lib/useLang';

function Datenschutz() {
  const navigate = useNavigate();
  const { lang } = useLang();

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          fontFamily: font.mono, fontSize: '0.65rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '9px 18px', borderRadius: 6,
          background: 'transparent', border: `1px solid ${C.border}`,
          color: C.blue, cursor: 'pointer', marginBottom: 48,
        }}
      >
        {lang === 'de' ? '← Zurück' : '← Back'}
      </button>

      <div style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.blue, letterSpacing: '0.06em', marginBottom: 12 }}>
        // Legal
      </div>

      <h1 style={{ fontFamily: font.sans, fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, margin: '0 0 40px' }}>
        Datenschutz
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <LegalSection title="1. Datenschutz auf einen Blick">
          <p><strong style={{ color: C.text }}>Allgemeine Hinweise</strong></p>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </LegalSection>

        <LegalSection title="2. Allgemeine Hinweise und Pflichtinformationen">
          <p><strong style={{ color: C.text }}>Datenschutz</strong></p>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <p><strong style={{ color: C.text }}>Hinweis zur verantwortlichen Stelle</strong></p>
          <p>
            Kürsat Darcan<br />
            47445 Moers, Deutschland<br />
            E-Mail: <a href="mailto:Darcankursat@gmail.com" style={{ color: C.blue }}>Darcankursat@gmail.com</a>
          </p>
        </LegalSection>

        <LegalSection title="3. Datenerfassung auf dieser Website">
          <p><strong style={{ color: C.text }}>Server-Log-Dateien</strong></p>
          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {['Browsertyp und Browserversion', 'Verwendetes Betriebssystem', 'Referrer URL', 'Hostname des zugreifenden Rechners', 'Uhrzeit der Serveranfrage', 'IP-Adresse'].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: C.blue, fontSize: '0.5rem' }}>▶</span>{item}
              </li>
            ))}
          </ul>
          <p><strong style={{ color: C.text }}>Keine aktive Datenerfassung</strong></p>
          <p>Diese Website ist ein reines Portfolio ohne Kontaktformular oder Login-Funktionen. Es werden keine personenbezogenen Daten aktiv erfasst. Es werden keine Cookies gesetzt und keine Tracking-Tools oder Analyse-Software eingesetzt.</p>
        </LegalSection>

        <LegalSection title="4. Ihre Rechte">
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit gemäß Art. 15–20 DSGVO. Zudem können Sie eine erteilte Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO) und sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO).</p>
        </LegalSection>

        <LegalSection title="5. Hosting">
          <p>
            Diese Website wird gehostet bei:<br /><br />
            <strong style={{ color: C.text }}>netcup GmbH</strong><br />
            Daimlerstraße 25, 76185 Karlsruhe, Deutschland
          </p>
          <p>Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Weitere Informationen: <a href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank" rel="noopener noreferrer" style={{ color: C.blue }}>netcup Datenschutzerklärung</a></p>
        </LegalSection>

        <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.textMuted, letterSpacing: '0.06em', paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
          Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: `2px solid ${C.border}`, paddingLeft: 20 }}>
      <h2 style={{ fontFamily: font.sans, fontSize: '0.95rem', fontWeight: 600, color: C.blue, marginBottom: 12 }}>
        {title}
      </h2>
      <div style={{ fontSize: '0.86rem', color: C.textMuted, lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

export default Datenschutz;
