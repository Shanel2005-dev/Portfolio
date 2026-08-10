import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';

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
            <ProjectCard project={project} viewLabel={t.projects_view} />
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
