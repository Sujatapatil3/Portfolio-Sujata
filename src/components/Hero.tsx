import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

const ROLES = ['Software Developer','Fullstack Developer','Java Backend Developer', 'Spring Boot Engineer', 'REST API Builder', 'MySQL & JDBC Practitioner'];

/** Cycles through role strings with a typewriter effect — hero's focal motion. */
function useTypewriter(words: string[], typingSpeed = 55, pauseMs = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-pad pt-32 relative overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal window — the signature element carried through the whole site */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl shadow-panel overflow-hidden max-w-3xl"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <span className="term-dot bg-[#FF5F56]" />
            <span className="term-dot bg-[#FFBD2E]" />
            <span className="term-dot bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted"></span>
          </div>
          <div className="p-6 sm:p-8 font-mono">
            <p className="text-muted text-sm">
              <span className="text-signal">$</span> who i am
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-4 text-balance">
              {profile.name}
            </h1>
            <p className="text-muted text-sm">
              <span className="text-signal">$</span> open to roles
            </p>
            <p className="text-xl sm:text-2xl mt-2 text-signal font-semibold min-h-[2em]">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-signal ml-1 animate-blink align-middle" />
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg text-muted leading-relaxed text-balance"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4 items-center"
        >
          <a
            // Base path is set in vite.config.ts for GitHub Pages deployment
            href="/sujata-portfolio/resume/SujataJresume.pdf"
            download="SujataJresume.pdf"
            className="btn-primary">
            <Download size={16} /> Download Resume
          </a> 
          
          <a href="mailto:patilsujata9870@gmail.com" className="btn-ghost">
            <Mail size={16} /> Get in Touch
          </a>

          <a
            href="https://github.com/Sujatapatil3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-3 rounded-lg border border-border hover:border-signal hover:text-signal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujata-j-patil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3 rounded-lg border border-border hover:border-signal hover:text-signal transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-signal transition-colors animate-floatY"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
