import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import photoProfil2 from '../assets/photo-profil-2.jpeg';

export function About() {
  const { content, t } = useLanguage();
  const { profile, stats, experience, education } = content;
  const experienceYears = stats.find((s) => s.label.toLowerCase().includes('expérience') || s.label.toLowerCase().includes('experience'));

  return (
    <section id="about" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:items-center">
          <div className="relative mx-auto w-full max-w-[220px] md:mx-0">
            <img
              src={photoProfil2}
              alt={profile.name}
              className="aspect-square w-full rounded-2xl border-4 border-surface object-cover shadow-2xl"
            />
            {experienceYears && (
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-surface px-4 py-2 text-center shadow-xl">
                <p className="font-display text-lg font-bold text-accent-light">{experienceYears.value}</p>
                <p className="text-[10px] uppercase tracking-wide text-muted">{experienceYears.label}</p>
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.about_eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-text md:text-3xl">
              {t.about_title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{profile.bio}</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-surface px-3 py-4 text-center">
                  <p className="font-display text-xl font-bold text-text">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-light">
              <Briefcase size={16} />
              {t.experience_work}
            </h3>
            <ol className="mt-5 space-y-6 border-l border-border pl-6">
              {experience.map((item) => (
                <li key={item.role} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-xs font-medium text-muted">{item.period}</p>
                  <p className="font-display font-semibold text-text">{item.role}</p>
                  <p className="text-sm text-accent-light">{item.org}</p>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-light">
              <GraduationCap size={16} />
              {t.experience_education}
            </h3>
            <ol className="mt-5 space-y-6 border-l border-border pl-6">
              {education.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-xs font-medium text-muted">{item.period}</p>
                  <p className="font-display font-semibold text-text">{item.title}</p>
                  {item.org && <p className="text-sm text-accent-light">{item.org}</p>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
