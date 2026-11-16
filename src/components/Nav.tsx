import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lang/context';
import { openPalette, shortcut, useScrollProgress } from '../lib/ui';
import { sections } from '../content';
import LangSwitch from './LangSwitch';

const pageProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
};

function Nav() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  useScrollProgress(barRef, pageProgress);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div ref={barRef} className="progress" aria-hidden="true" />
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="frame nav__row">
          <Link to="/" className="nav__logo" aria-label="Kürsat Darcan, Startseite">
            KD<span>.</span>
          </Link>
          <nav className="nav__links" aria-label={lang === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
            {sections.map(s => (
              <Link key={s.id} to={{ pathname: '/', hash: `#${s.id}` }}>
                {s[lang]}
              </Link>
            ))}
          </nav>
          <div className="nav__tools">
            <button type="button" className="kbd-btn" onClick={openPalette}>
              <span className="kbd-btn__label">{lang === 'de' ? 'Schnellzugriff' : 'Quick access'}</span>
              <span className="kbd-btn__menu">{lang === 'de' ? 'Menü' : 'Menu'}</span>
              <kbd>{shortcut}</kbd>
            </button>
            <LangSwitch />
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
