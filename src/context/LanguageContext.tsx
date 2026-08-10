import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { content, type Lang } from '../data/content';
import { ui } from '../i18n/ui';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: (typeof content)[Lang];
  t: (typeof ui)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = window.localStorage.getItem('lang');
  return stored === 'en' ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: (next: Lang) => {
        window.localStorage.setItem('lang', next);
        setLangState(next);
      },
      content: content[lang],
      t: ui[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
