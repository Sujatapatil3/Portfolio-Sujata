import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'connecting to sujatapatil.dev ...',
  'GET /portfolio  200 OK',
  'loading modules: projects, experience, skills ...',
  'ready.',
];

interface LoadingScreenProps {
  onComplete: () => void;
}

/**
 * A terminal-style boot sequence instead of a generic spinner —
 * establishes the backend/systems tone before the hero even loads.
 */
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex < BOOT_LINES.length) {
      const timer = setTimeout(() => setLineIndex((i) => i + 1), 380);
      return () => clearTimeout(timer);
    }
    const finish = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 500);
    }, 300);
    return () => clearTimeout(finish);
  }, [lineIndex, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-base flex items-center justify-center px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="w-full max-w-md font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="term-dot bg-[#FF5F56]" />
              <span className="term-dot bg-[#FFBD2E]" />
              <span className="term-dot bg-[#27C93F]" />
            </div>
            <div className="space-y-2 text-signal min-h-[120px]">
              {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
                <div key={i} className={i === BOOT_LINES.length - 1 ? 'text-signal font-semibold' : 'text-muted'}>
                  <span className="text-signal">$</span> {line}
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-signal animate-blink align-middle" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
