import { createContext } from 'react';

export type Lang = 'de' | 'en';
export type Text = string | { de: string; en: string };

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'de',
  setLang: () => {},
});

export function pick(field: Text, lang: Lang): string {
  return typeof field === 'string' ? field : field[lang];
}
