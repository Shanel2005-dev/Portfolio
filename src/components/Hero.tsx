import { ArrowRight, Check, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import photoProfil from '../assets/photo-profil.jpeg';

export function Hero() {
  const { content, t } = useLanguage();
  const { profile } = content;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow-orb -left-32 -top-32 h-96 w-96 bg-accent" />
      <div className="glow-orb -right-32 top-40 h-96 w-96 bg-purple" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-12 md:flex-row md:gap-16 md:pt-28">
        <div className="flex-1">
          <p className="fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            {profile.availability}
          </p>

          <p className="fade-in-up font-heading text-sm font-semibold text-muted" style={{ animationDelay: '0.1s' }}>
            {profile.name} · {profile.title}
          </p>

          <h1
            className="fade-in-up mt-2 font-display text-4xl font-semibold leading-tight text-text md:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            {profile.headline.split(' ').slice(0, -3).join(' ')}{' '}
            <span className="gradient-text">{profile.headline.split(' ').slice(-3).join(' ')}</span>
          </h1>

          <ul className="mt-6 space-y-2">
            {profile.heroBullets.map((bullet, i) => (
              <li
                key={bullet}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                className="fade-in-up flex items-start gap-2 text-sm text-muted"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="fade-in-up mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
            >
              {t.hero_cta_projects}
              <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text hover:border-accent-light hover:text-accent-light"
            >
              <Mail size={16} />
              {t.hero_cta_contact}
            </a>
          </div>
        </div>

        <div className="fade-in-up shrink-0" style={{ animationDelay: '0.3s' }}>
          <div className="float-slow relative">
            <div className="portrait-glow absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent via-purple to-cyan opacity-40 blur-2xl" />
            <img
              src={photoProfil}
              alt={profile.name}
              className="h-64 w-64 rounded-[2rem] border-4 border-surface object-cover object-top shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
