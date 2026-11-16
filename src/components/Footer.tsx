import { Link } from 'react-router-dom';
import { useLang } from '../lang/context';
import { person } from '../content';

function Footer() {
  const { lang } = useLang();

  return (
    <footer className="footer">
      <div className="frame footer__row">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <nav className="footer__links" aria-label={lang === 'de' ? 'Rechtliches' : 'Legal'}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>
            {lang === 'de' ? 'Nach oben ↑' : 'Back to top ↑'}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
