import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ListChecks, Lightbulb } from 'lucide-react';
import Reveal from './Reveal';
import { Project } from '@/data/projects';

type Tab = 'api' | 'features';

const TABS: { id: Tab; label: string; icon: typeof Layers }[] = [
  { id: 'features', label: 'Features', icon: ListChecks },
  { id: 'api', label: 'API', icon: Layers },
];

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-signal border-signal/40 bg-signal/10',
  POST: 'text-amber border-amber/40 bg-amber/10',
  PUT: 'text-[#818CF8] border-[#818CF8]/40 bg-[#818CF8]/10',
  DELETE: 'text-[#F87171] border-[#F87171]/40 bg-[#F87171]/10',
  PATCH: 'text-[#818CF8] border-[#818CF8]/40 bg-[#818CF8]/10',
};

function ApiTable({ endpoints }: { endpoints: Project['endpoints'] }) {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="text-left text-muted text-xs uppercase tracking-wide border-b border-border">
            <th className="pb-2 pr-4">Method</th>
            <th className="pb-2 pr-4">Endpoint</th>
            <th className="pb-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((ep) => (
            <tr key={ep.method + ep.path} className="border-b border-border/50 last:border-0">
              <td className="py-2.5 pr-4">
                <span className={`px-2 py-0.5 rounded border text-xs font-bold ${METHOD_COLORS[ep.method]}`}>
                  {ep.method}
                </span>
              </td>
              <td className="py-2.5 pr-4 text-ink whitespace-nowrap">{ep.path}</td>
              <td className="py-2.5 text-muted font-sans">{ep.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FeaturesList({ features, learnings }: { features: string[]; learnings: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Key Features</h4>
        <ul className="space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed">
              <span className="text-signal mt-1.5 w-1 h-1 rounded-full bg-signal flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-3 flex items-center gap-1.5">
          <Lightbulb size={12} /> What I Learned
        </h4>
        <ul className="space-y-2.5">
          {learnings.map((l, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed">
              <span className="text-amber mt-1.5 w-1 h-1 rounded-full bg-amber flex-shrink-0" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [activeTab, setActiveTab] = useState<Tab>('features');

  return (
    <Reveal delay={index * 0.1}>
      <article className="glass rounded-2xl overflow-hidden shadow-panel">
        {/* Header — mimics an HTTP response for the project itself */}
        <div className="p-6 sm:p-8 border-b border-border">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl font-bold font-mono">{project.name}</h3>
              <p className="text-signal text-sm mt-1">{project.oneLiner}</p>
            </div>
            <span className="font-mono text-xs text-muted whitespace-nowrap">{project.period}</span>
          </div>

          {project.description.map((p, i) => (
            <p key={i} className="text-sm text-muted leading-relaxed mt-3 max-w-3xl">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 mt-5">
            {project.techStack.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tabbed detail panel */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                  activeTab === tab.id
                    ? 'bg-signal/10 text-signal border border-signal/40'
                    : 'text-muted border border-transparent hover:text-ink'
                }`}
              >
                <tab.icon size={13} />
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'api' && <ApiTable endpoints={project.endpoints} />}
            {activeTab === 'features' && (
              <FeaturesList features={project.features} learnings={project.learnings} />
            )}
          </motion.div>
        </div>
      </article>
    </Reveal>
  );
}
