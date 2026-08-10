import type { ReactNode } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import type { Project } from '../data/content';

function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 bg-[#1c1c1c] px-3 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
    </div>
  );
}

function LaptopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-surface-2 to-surface px-5 pt-5 pb-3">
      <div className="overflow-hidden rounded-t-lg border-[6px] border-b-0 border-[#3a3a3a] bg-black shadow-[0_10px_20px_-8px_rgba(0,0,0,0.5)]">
        {children}
      </div>
      <div
        className="mx-auto h-[9px] bg-gradient-to-b from-[#4b4b4b] to-[#1e1e1e]"
        style={{ width: '108%', clipPath: 'polygon(4% 0, 96% 0, 100% 100%, 0% 100%)' }}
      />
      <div className="mx-auto h-[3px] w-[30%] rounded-b-sm bg-[#0a0a0a]" />
    </div>
  );
}

export function ProjectCard({
  project,
  viewLabel,
  showTags = false,
}: {
  project: Project;
  viewLabel: string;
  showTags?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent/60">
      <LaptopFrame>
        <BrowserBar />

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
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-surface-2">
            <Folder size={32} className="text-muted" />
          </div>
        )}
      </LaptopFrame>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {showTags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-text">
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:underline"
          >
            {viewLabel}
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
