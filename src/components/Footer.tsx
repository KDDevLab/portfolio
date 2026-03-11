import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const font = {
  sans: "'Space Grotesk', sans-serif",
  mono: "'Fira Code', monospace",
} as const;

const C = {
  cyan:  "#00d4ff",
  white: "#f2f2f2",
  grey:  "#555",
} as const;

function Footer() {
  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '24px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      {/* Left — Name */}
      <div style={{ fontFamily: font.sans, fontWeight: 700, fontSize: '0.95rem', color: C.white }}>
        Kürsat Darcan<span style={{ color: C.cyan }}>.</span>
      </div>

      {/* Center — Copyright */}
      <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.grey, letterSpacing: '0.06em' }}>
        © {new Date().getFullYear()} — Alle Rechte vorbehalten
      </div>

      {/* Right — Legal links */}
      <div style={{ display: 'flex', gap: 24 }}>
        <FooterLink to="/datenschutz" label="Datenschutz" />
        <FooterLink to="/impressum"   label="Impressum"   />
      </div>
    </footer>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <RouterLink
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: font.mono, fontSize: '0.6rem', letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: hov ? C.cyan : C.grey,
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </RouterLink>
  );
}

export default Footer;