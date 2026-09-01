import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-panel/20" aria-label="Projects">
      <Reveal>
        <span className="kicker">04 · projects</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">Backend Projects</h2>
        <p className="text-muted max-w-2xl">
          These are some of the backend projects I have built using Java, Spring Boot, and MySQL. Each project showcases my skills in designing and implementing REST APIs, database management, and software architecture. 

        </p>
      </Reveal>

      <div className="space-y-10 mt-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
