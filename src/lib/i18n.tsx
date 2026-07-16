import { useState, type ReactNode } from 'react';
import { LangContext, type Lang } from './langContext';

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de');
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
