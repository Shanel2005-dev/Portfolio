import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const projectTypesFr = ['Stage', 'Alternance', 'Mission freelance', 'Autre'];
const projectTypesEn = ['Internship', 'Apprenticeship', 'Freelance mission', 'Other'];

export default function Contact() {
  const { content, t, lang } = useLanguage();
  const { profile } = content;
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });

  const projectTypes = lang === 'fr' ? projectTypesFr : projectTypesEn;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type || 'Contact'} — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\n${t.contact_form_name}: ${form.name}\n${t.contact_form_email}: ${form.email}\n${t.contact_form_phone}: ${form.phone}\n${t.contact_form_project_type}: ${form.type}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.contact_eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text md:text-5xl">
          {t.contact_title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="gradient-text">{t.contact_title.split(' ').slice(-1)}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">{t.contact_body}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-[minmax(0,280px)_1fr]">
        <Reveal className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
              <Mail size={18} />
            </div>
            <p className="mt-3 font-display font-semibold text-text">{t.contact_info_email_label}</p>
            <p className="mt-1 text-xs text-muted">{t.contact_info_email_body}</p>
            <a href={`mailto:${profile.email}`} className="mt-2 block text-sm font-medium text-accent-light hover:underline">
              {profile.email}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
              <Send size={18} />
            </div>
            <p className="mt-3 font-display font-semibold text-text">{t.contact_info_whatsapp_label}</p>
            <p className="mt-1 text-xs text-muted">{t.contact_info_whatsapp_body}</p>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-medium text-accent-light hover:underline">
              {profile.phones[0]}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
              <MapPin size={18} />
            </div>
            <p className="mt-3 font-display font-semibold text-text">{t.contact_info_location_label}</p>
            <p className="mt-1 text-xs text-muted">{t.contact_info_location_body}</p>
            <p className="mt-2 text-sm font-medium text-text">{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-text">{t.contact_form_title}</h2>
            <p className="mt-1 text-sm text-muted">{t.contact_form_subtitle}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t.contact_form_name} *
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-normal normal-case text-text placeholder:text-muted focus:border-accent-light focus:outline-none"
                />
              </label>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t.contact_form_email} *
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-normal normal-case text-text placeholder:text-muted focus:border-accent-light focus:outline-none"
                />
              </label>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t.contact_form_phone}
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-normal normal-case text-text placeholder:text-muted focus:border-accent-light focus:outline-none"
                />
              </label>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                {t.contact_form_project_type} *
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                  className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-normal normal-case text-text focus:border-accent-light focus:outline-none"
                >
                  <option value="">{t.contact_form_select}</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
              {t.contact_form_message} *
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-1.5 w-full resize-none rounded-lg border border-border bg-bg px-3 py-2.5 text-sm font-normal normal-case text-text placeholder:text-muted focus:border-accent-light focus:outline-none"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
              >
                <Send size={16} />
                {t.contact_form_submit}
              </button>
              <p className="text-xs text-muted">{t.contact_form_note}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
