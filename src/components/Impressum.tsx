import { useNavigate } from 'react-router-dom';
import { C, font } from '../lib/design';
import { useLang } from '../lib/useLang';

function Impressum() {
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
        Impressum
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <LegalSection title="Angaben gemäß § 5 TMG">
          <p>Kürsat Darcan<br />47445 Moers<br />Deutschland</p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p>E-Mail: <a href="mailto:Darcankursat@gmail.com" style={{ color: C.blue }}>Darcankursat@gmail.com</a></p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p>Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>
        </LegalSection>

        <LegalSection title="Haftung für Links">
          <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.</p>
          <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.</p>
        </LegalSection>
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

export default Impressum;
