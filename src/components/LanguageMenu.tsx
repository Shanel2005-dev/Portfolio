import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const options = [
  { code: 'fr' as const, flag: '🇫🇷', label: 'FR' },
  { code: 'en' as const, flag: '🇬🇧', label: 'EN' },
];

export function LanguageMenu() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.code === lang) ?? options[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Changer de langue"
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text hover:border-accent-light"
      >
        <span>{current.flag}</span>
        {current.label}
        <ChevronDown size={12} className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul className="absolute right-0 top-full z-10 mt-2 w-32 overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
          {options.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium hover:bg-surface-2 ${
                  option.code === lang ? 'text-accent-light' : 'text-text'
                }`}
              >
                <span>{option.flag}</span>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
