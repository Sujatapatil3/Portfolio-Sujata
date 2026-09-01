import { Award, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { certifications, education, languages } from '@/data/profile';

export default function Education() {
  return (
    <section id="education" className="section-pad" aria-label="Education and certifications">
      <Reveal>
        <span className="kicker">05 · education</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-12">Education &amp; Certifications</h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Education timeline */}
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-6 flex items-center gap-2">
            <GraduationCap size={16} className="text-signal" /> Timeline
          </h3>
          <div className="relative pl-6 border-l border-border space-y-8">
            {education.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-signal shadow-glow" />
                  <p className="font-mono text-xs text-signal mb-1">{edu.period}</p>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted mt-1">{edu.institution}</p>
                  <p className="text-sm mt-1 font-mono">{edu.detail}</p>
                  {edu.note && <p className="text-xs text-amber mt-1">{edu.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="tag-pill">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-muted mb-6 flex items-center gap-2">
            <Award size={16} className="text-signal" /> Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.1} direction="right">
                <div className="glass rounded-xl p-5 flex items-start justify-between gap-4 hover:border-signal/50 transition-colors">
                  <div>
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-signal whitespace-nowrap">{cert.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
