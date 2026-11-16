import { useEffect, useState, type ReactNode } from 'react';
import { LangContext, type Lang } from './context';

const KEY = 'lang';

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === 'de' || stored === 'en') return stored;
  } catch {
    /* Speicher nicht verfügbar */
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignorieren */
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
