import { Code2, Layers, PenTool } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

const icons = [Code2, Layers, PenTool];

export function Services() {
  const { content, t } = useLanguage();

  return (
    <section id="services" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.services_eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-text md:text-3xl">
            {t.services_title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
