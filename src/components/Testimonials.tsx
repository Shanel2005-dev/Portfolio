import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function Testimonials() {
  const { content, t } = useLanguage();

  return (
    <section id="testimonials" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.testimonials_eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-text md:text-3xl">
              {t.testimonials_title}
            </h2>
          </div>
          <a
            href={`mailto:${content.profile.email}?subject=${encodeURIComponent('Mon avis sur ton travail')}`}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text hover:border-accent-light hover:text-accent-light"
          >
            {t.testimonials_leave}
          </a>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-0.5 text-warm">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote size={20} className="mt-3 text-accent-light/60" />
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent-light">
                    {initials(item.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
