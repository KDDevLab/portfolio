import { useNavigate } from 'react-router-dom';

const C = {
  bg:    "#000",
  bg2:   "#0f0f0f",
  cyan:  "#00d4ff",
  white: "#f2f2f2",
  grey:  "#666",
  grey2: "#aaa",
} as const;

const font = {
  sans: "'Space Grotesk', sans-serif",
  mono: "'Fira Code', monospace",
} as const;

function Impressum() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.white, fontFamily: font.sans, paddingTop: 80 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 40px' }}>

        {/* Back button */}
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

        {/* Eyebrow */}
        <div style={{ fontFamily: font.mono, fontSize: '0.62rem', color: C.cyan, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          Legal
          <span style={{ width: 40, height: 1, background: C.cyan, display: 'inline-block' }} />
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: font.sans, fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: C.white, marginBottom: 48, lineHeight: 1 }}>
          Impressum<span style={{ color: C.cyan }}>.</span>
        </h1>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>

          <LegalSection title="Angaben gemäß § 5 TMG">
            <p>Kürsat Darcan<br />47445 Moers<br />Deutschland</p>
          </LegalSection>

          <LegalSection title="Kontakt">
            <p>E-Mail: <a href="mailto:Darcankursat@gmail.com" style={{ color: C.cyan, textDecoration: 'none' }}>Darcankursat@gmail.com</a></p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </LegalSection>

          <LegalSection title="Urheberrecht">
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.</p>
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.</p>
          </LegalSection>

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

export default Impressum;