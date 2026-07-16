import { Link } from 'react-router-dom';
import { C, font } from '../lib/design';
import { useLang } from '../lib/useLang';

function Footer() {
  const { lang } = useLang();
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: '22px 0' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 10, fontFamily: font.mono, fontSize: '0.75rem', color: C.textMuted,
      }}>
        <span>© {new Date().getFullYear()} Kürsat Darcan</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link to="/datenschutz" style={{ color: C.textMuted }}>Datenschutz</Link>
          <Link to="/impressum" style={{ color: C.textMuted }}>Impressum</Link>
          <a href="#top" style={{ color: C.textMuted }}>
            {lang === 'de' ? 'Nach oben ↑' : 'Back to top ↑'}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
