import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

export function Faq() {
  const { content, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.faq_eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-text md:text-3xl">
            {t.faq_title}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {content.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="rounded-2xl border border-border bg-surface">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-heading font-semibold text-text">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform ${isOpen ? 'rotate-180 text-accent-light' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
