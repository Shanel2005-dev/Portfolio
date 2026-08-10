import { Link } from 'react-router-dom';
import { ExternalLink, Folder } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

export function ProjectsPreview() {
  const { content, t } = useLanguage();
  const preview = content.projects.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">{t.projects_eyebrow}</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text md:text-3xl">
          {t.projects_title}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {preview.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent/60">
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

      <div className="mt-10 text-center">
        <Link
          to="/realisations"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
        >
          {t.projects_see_more}
        </Link>
      </div>
    </section>
  );
}
