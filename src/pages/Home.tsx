import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProjectsPreview } from '../components/ProjectsPreview';
import { TechOrbit } from '../components/TechOrbit';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsPreview />
      <TechOrbit />
      <Services />
      <Testimonials />
      <Faq />
    </main>
  );
}
