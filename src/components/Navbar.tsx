import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { C, font } from '../lib/design';
import { useLang } from '../lib/useLang';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useLang();
  const isLegal = location.pathname === '/impressum' || location.pathname === '/datenschutz';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div style={{ height: 66 }} />
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        background: scrolled ? `${C.bg}b3` : C.bg,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}>
        <div className="nav-inner" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          maxWidth: 1080, margin: '0 auto', padding: '18px 20px',
        }}>
          <button
            onClick={() => isLegal ? navigate('/') : window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily: font.sans, fontWeight: 600, fontSize: '1.05rem',
              color: C.text, background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              flexShrink: 0,
            }}
          >
            Kürsat Darcan
          </button>

          {!isLegal && (
            <span className="nav-status" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: font.mono, fontWeight: 400, fontSize: '0.72rem', color: C.textMuted,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              <span className="status-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: C.amber, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {lang === 'de' ? 'offen für neue Herausforderungen' : 'open to new opportunities'}
              </span>
            </span>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', flexShrink: 0 }}>
            {isLegal && (
              <NavBtn label={lang === 'de' ? '← Startseite' : '← Home'} onClick={() => navigate('/')} />
            )}

            <div style={{
              display: 'inline-flex', border: `1px solid ${C.border}`, borderRadius: 999,
              overflow: 'hidden', fontFamily: font.mono, fontSize: '0.78rem',
            }}>
              <button
                onClick={() => setLang('de')}
                style={{
                  background: lang === 'de' ? C.surface2 : 'transparent', border: 'none',
                  color: lang === 'de' ? C.amber : C.textMuted, padding: '6px 12px', cursor: 'pointer',
                }}
              >DE</button>
              <button
                onClick={() => setLang('en')}
                style={{
                  background: lang === 'en' ? C.surface2 : 'transparent', border: 'none',
                  color: lang === 'en' ? C.amber : C.textMuted, padding: '6px 12px', cursor: 'pointer',
                }}
              >EN</button>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes statusBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
        .status-dot { animation: statusBlink 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .status-dot { animation: none; }
        }
        @media (max-width: 640px){
          .nav-status{ display: none !important; }
        }
      `}</style>
    </>
  );
}

function NavBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: font.mono, fontSize: '0.78rem', letterSpacing: '0.04em',
        padding: '7px 14px', borderRadius: 4, background: 'none', border: 'none',
        cursor: 'pointer', color: C.textMuted, transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = C.blue)}
      onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}
    >
      {label}
    </button>
  );
}

export default Navbar;
