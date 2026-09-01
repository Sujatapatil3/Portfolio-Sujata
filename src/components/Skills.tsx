import { motion } from 'framer-motion';
import { Boxes, Code2, Database, Globe, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import { skillCategories, techStack } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ICONS = {
  backend: Boxes,
  language: Code2,
  frontend: Globe,
  database: Database,
  tools: Wrench,
};

function ProgressBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5 font-mono text-sm">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-border/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal-deep to-signal"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-panel/20" aria-label="Technical skills">
      <Reveal>
        <span className="kicker">02 · skills</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">Technical Skills</h2>
        <p className="text-muted max-w-xl">
          
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {skillCategories.map((cat, catIdx) => {
          const Icon = ICONS[cat.icon];
          return (
            <Reveal key={cat.category} delay={catIdx * 0.08}>
              <div className="glass rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-signal/10 text-signal">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono font-semibold">{cat.category}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((s, i) => (
                    <ProgressBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <h3 className="font-mono text-sm text-muted uppercase tracking-widest mb-4">Daily tech stack</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="tag-pill hover:border-signal hover:text-signal transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
