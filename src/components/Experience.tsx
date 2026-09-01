import { Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-pad" aria-label="Work experience">
      <Reveal>
        <span className="kicker">03 · experience</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-12">Internships</h2>
      </Reveal>

      <div className="relative max-w-3xl">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full glass flex items-center justify-center text-signal">
                  <Briefcase size={16} />
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-mono font-semibold text-lg">{exp.role}</h3>
                    <span className="font-mono text-xs text-signal">{exp.period}</span>
                  </div>
                  <p className="text-muted text-sm mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed">
                        <span className="text-signal mt-1.5 w-1 h-1 rounded-full bg-signal flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
