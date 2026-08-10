import { useMemo, useState } from 'react';
import { ExternalLink, Folder, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

export default function Realisations() {
  const { content, t } = useLanguage();
  const { projects } = content;
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))], [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [projects, query, activeTag]);

  const liveCount = projects.filter((p) => p.live).length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.projects_eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text md:text-5xl">
          Mes <span className="gradient-text">réalisations</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">{t.realisations_subtitle}</p>

        <div className="mx-auto mt-8 flex max-w-md justify-center gap-8 border-t border-border pt-8">
          <div>
            <p className="font-display text-2xl font-bold text-text">{projects.length}+</p>
            <p className="text-xs text-muted">{t.projects_eyebrow}</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-text">{liveCount}</p>
            <p className="text-xs text-muted">Live</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-text">{allTags.length}+</p>
            <p className="text-xs text-muted">Technologies</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-xs">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.projects_search}
              className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-text placeholder:text-muted focus:border-accent-light focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                activeTag === null ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'
              }`}
            >
              {t.projects_all}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                  activeTag === tag ? 'bg-accent text-white' : 'bg-surface-2 text-muted hover:text-text'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">{t.projects_empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent/60">
                {project.live && project.url ? (
                  <div className="pointer-events-none aspect-video w-full overflow-hidden bg-surface-2">
                    <iframe
                      src={project.url}
                      title={project.name}
                      loading="lazy"
                      tabIndex={-1}
                      className="h-[400%] w-[400%] origin-top-left scale-[0.25] border-0"
                    />
                  </div>
                ) : project.image ? (
                  <div className="aspect-video w-full overflow-hidden bg-surface-2">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-accent-light">
                    {!project.image && !project.live && <Folder size={20} />}
                    <h3 className="font-display text-lg font-semibold text-text">{project.name}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-text">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:underline"
                    >
                      {t.projects_view}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </main>
  );
}
