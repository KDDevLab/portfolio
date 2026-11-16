import { createContext, useContext } from 'react';

export type Lang = 'de' | 'en';

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'de',
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);
