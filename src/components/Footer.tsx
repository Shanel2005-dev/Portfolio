import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon } from './icons/GithubIcon';

export function Footer() {
  const { content, t } = useLanguage();
  const { profile, skillGroups } = content;

  const stackCategories = skillGroups
    .filter((g) => g.label !== 'Outils & Design' && g.label !== 'Tools & Design')
    .map((g) => g.label);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/realisations', label: t.nav.projects },
    { href: '/#services', label: t.nav.services },
    { href: '/#testimonials', label: t.nav.testimonials },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border/60 bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-text">
            MC<span className="gradient-text">.</span>dev
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.footer_tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.footer_stack}</p>
          <ul className="mt-4 space-y-2">
            {stackCategories.map((label) => (
              <li key={label} className="text-sm text-muted">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.footer_nav}</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-muted hover:text-accent-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.footer_connect}</p>
          <p className="mt-4 text-sm text-muted">{t.footer_connect_body}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:border-accent-light hover:text-accent-light"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:border-accent-light hover:text-accent-light"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. {t.footer_rights}
      </div>
    </footer>
  );
}
