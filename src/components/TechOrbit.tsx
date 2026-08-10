import type { ComponentType } from 'react';
import photoProfil2 from '../assets/photo-profil-2.jpeg';
import { Reveal } from './Reveal';
import {
  Css3Logo,
  DjangoLogo,
  FigmaLogo,
  FlutterLogo,
  Html5Logo,
  JsLogo,
  PostgresLogo,
  ReactLogo,
  TailwindLogo,
  TsLogo,
} from './icons/TechIcons';
import { GitBranch, Zap } from 'lucide-react';

type Tech = { label: string; Icon: ComponentType<{ size?: number; className?: string }> };

const outerRing: Tech[] = [
  { label: 'React', Icon: ReactLogo },
  { label: 'Figma', Icon: FigmaLogo },
  { label: 'Supabase', Icon: (p) => <Zap {...p} color="#3ECF8E" /> },
  { label: 'HTML5', Icon: Html5Logo },
  { label: 'Flutter', Icon: FlutterLogo },
  { label: 'Git', Icon: (p) => <GitBranch {...p} color="#F05032" /> },
];

const innerRing: Tech[] = [
  { label: 'TypeScript', Icon: TsLogo },
  { label: 'JavaScript', Icon: JsLogo },
  { label: 'CSS3', Icon: Css3Logo },
  { label: 'Tailwind CSS', Icon: TailwindLogo },
  { label: 'Django', Icon: DjangoLogo },
  { label: 'PostgreSQL', Icon: PostgresLogo },
];

function Ring({ techs, radius, size }: { techs: Tech[]; radius: number; size: number }) {
  return (
    <>
      {techs.map((tech, i) => {
        const angle = (2 * Math.PI * i) / techs.length - Math.PI / 2;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        return (
          <div
            key={tech.label}
            title={tech.label}
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${i * 0.3}s` }}
            className="float-badge absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-border bg-surface shadow-lg"
          >
            <div className="flex h-full w-full items-center justify-center p-1.5">
              <tech.Icon size={size - 14} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export function TechOrbit() {
  return (
    <section id="tech" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Reveal className="mx-auto">
          <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
            Technologies <span className="gradient-text">maîtrisées</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 aspect-square w-full max-w-[26rem] md:max-w-xl">
          <div className="absolute inset-[4%] rounded-full border border-dashed border-border" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-border" />

          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-surface shadow-2xl ring-2 ring-accent/50 md:h-44 md:w-44">
            <img src={photoProfil2} alt="" className="h-full w-full object-cover object-top" />
          </div>

          <Ring techs={innerRing} radius={38} size={44} />
          <Ring techs={outerRing} radius={49} size={48} />
        </div>
      </div>
    </section>
  );
}
