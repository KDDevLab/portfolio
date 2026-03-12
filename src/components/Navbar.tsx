import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { C, font } from '../lib/design';

const menuItems = [
  { label: 'Profil',     id: 'about'     },
  { label: 'Werdegang',  id: 'education' },
  { label: 'Projekte',   id: 'projects'  },
  { label: 'Kontakt',    id: 'contact'   },
];

const Navbar: React.FC = () => {
  const location  = useLocation();
  const navigate  = useNavigate();
  const isLegal   = location.pathname === '/impressum' || location.pathname === '/datenschutz';
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 64,
        background: C.bg,
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? `1px solid ${C.cbord}`
          : '1px solid rgba(255,255,255,0.20)',
        transition: 'border-color 0.5s',
      }}>
        <button
          onClick={() => isLegal ? navigate('/') : scrollTo('about')}
          style={{
            fontFamily: font.sans, fontWeight: 700, fontSize: '1rem',
            color: C.white, background: 'none', border: 'none',
            cursor: 'pointer', letterSpacing: '-0.02em', padding: 0,
          }}
        >
          Kürsat Darcan<span style={{ color: C.cyan }}>.</span>
        </button>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="kd-nav-desktop" style={{ display: 'flex', gap: 4 }}>
            {isLegal ? (
              <NavBtn label="← Startseite" onClick={() => navigate('/')} />
            ) : (
              menuItems.map(item => (
                <NavBtn key={item.id} label={item.label} onClick={() => scrollTo(item.id)} />
              ))
            )}
          </div>

          <button
            className="kd-nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            style={{
              display: 'none', background: 'none', border: `1px solid rgba(255,255,255,0.12)`,
              borderRadius: 2, padding: '7px 10px', cursor: 'pointer',
              color: C.white, flexDirection: 'column', gap: 4,
            }}
          >
            <span style={{ display: 'block', width: 18, height: 1.5, background: C.white }} />
            <span style={{ display: 'block', width: 18, height: 1.5, background: C.white }} />
            <span style={{ display: 'block', width: 12, height: 1.5, background: C.cyan }} />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 600,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s',
        }}
      />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 700,
        width: 280,
        background: '#080808',
        borderLeft: `1px solid ${C.cbord}`,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px', height: 64,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.cyan, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Navigation
          </span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '1.2rem', padding: 4 }}>
            ✕
          </button>
        </div>

        <nav style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {isLegal ? (
            <DrawerBtn label="← Startseite" onClick={() => { navigate('/'); setOpen(false); }} />
          ) : (
            menuItems.map(item => (
              <DrawerBtn key={item.id} label={item.label} onClick={() => scrollTo(item.id)} />
            ))
          )}
        </nav>

        <div style={{ marginTop: 'auto', padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: font.sans, fontSize: '0.82rem', fontWeight: 600, color: C.white, marginBottom: 4 }}>
            Kürsat Darcan<span style={{ color: C.cyan }}>.</span>
          </div>
          <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: '#555', letterSpacing: '0.06em' }}>
            Junior Softwareentwickler
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kd-nav-desktop { display: none !important; }
          .kd-nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

function NavBtn({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: font.mono, fontSize: '0.68rem', letterSpacing: '0.08em',
        textTransform: 'uppercase', padding: '8px 16px', borderRadius: 2,
        background: 'none', border: 'none', cursor: 'pointer',
        color: hov ? C.cyan : C.grey,
        transition: 'color 0.2s',
        position: 'relative',
      }}
    >
      {hov && <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', fontSize: '0.5rem', color: C.cyan }}>// </span>}
      {label}
    </button>
  );
}

function DrawerBtn({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: font.mono, fontSize: '0.75rem', letterSpacing: '0.08em',
        textTransform: 'uppercase', padding: '14px 16px', borderRadius: 2,
        background: hov ? 'rgba(0,212,255,0.06)' : 'none',
        border: hov ? '1px solid rgba(0,212,255,0.18)' : '1px solid transparent',
        cursor: 'pointer', color: hov ? C.cyan : '#aaa',
        textAlign: 'left', width: '100%',
        transition: 'all 0.2s',
        transform: hov ? 'translateX(6px)' : 'translateX(0)',
      }}
    >
      {label}
    </button>
  );
}

export default Navbar;