import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageMenu } from './LanguageMenu';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/realisations', label: t.nav.projects },
    { href: '/#services', label: t.nav.services },
    { href: '/#testimonials', label: t.nav.testimonials },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold text-text">
          MC<span className="gradient-text">.</span>dev
        </Link>

        <ul className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="text-sm font-medium text-muted hover:text-text">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageMenu />
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-light"
          >
            {t.nav_cta}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageMenu />
          <button
            type="button"
            className="text-text"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-6 py-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-muted hover:text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
