import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
}

export function ThemeMenu() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      className="theme-button flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text hover:border-accent-light"
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode rouge/noir'}
      title={theme === 'dark' ? 'Mode clair' : 'Mode rouge/noir'}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}