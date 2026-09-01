import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

const OFFSETS = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: -24 },
  right: { y: 0, x: 24 },
  none: { y: 0, x: 0 },
};

/** Wraps children in a scroll-triggered fade/slide reveal. */
export default function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const offset = OFFSETS[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
