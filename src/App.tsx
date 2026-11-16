import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LangProvider } from './lang/LangProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

/** Bei Seitenwechsel nach oben, bei Anker zum Abschnitt scrollen. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const target = () => document.getElementById(hash.slice(1));
    target()?.scrollIntoView();
    // Der Hero bekommt seine Höhe erst nach dem Laden der Schrift – danach nachjustieren
    let raf = 0;
    document.fonts.ready.then(() => {
      raf = requestAnimationFrame(() => target()?.scrollIntoView());
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);
  return null;
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollManager />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
        <CommandPalette />
        <Toast />
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
