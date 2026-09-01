import { Code2, Database, Layers, Target } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '@/data/profile';

const PILLARS = [
  {
    icon: Layers,
    title: 'Organized Code',
    text: 'I write clean and organized code that is easy to understand and maintain.',
  },
  {
    icon: Database,
    title: 'Strong Database',
    text: 'I design MySQL databases with proper relationships for efficient data management.',
  },
  {
    icon: Code2,
    title: 'Backend Development',
    text: 'I build REST APIs using Spring Boot and connect them with MySQL databases.',
  },
  {
    icon: Target,
    title: 'Continuous Learning',
    text: 'I enjoy building complete projects and improving my skills with every new challenge.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad" aria-label="About me">
      <Reveal>
        <span className="kicker">01 · about</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">The short version</h2>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-12 mt-10">
        <Reveal className="lg:col-span-2" direction="right">
          <div className="glass rounded-2xl p-8 h-full">
            <p className="text-lg leading-relaxed text-ink">Computer Engineering graduate skilled in Java, Spring Boot, JDBC, and MySQL, with a strong foundation in OOP, REST APIs, and database design. Seeking a Backend/Java Developer role to build scalable, real-world solutions.</p>
            <div className="mt-6 pt-6 border-t border-border space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">cgpa</span>
                <span className="text-signal">8.35 / 10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted"></span>
                <span>Software Developer · Java · Spring Boot</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 h-full hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <p.icon className="text-signal mb-3" size={22} />
                <h3 className="font-mono font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
