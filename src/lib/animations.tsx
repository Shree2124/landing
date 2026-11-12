// ============================================================
// Shared Framer Motion animation primitives
// All durations/easings respect design tokens at the values
// they're compiled to. Components import from here.
// ============================================================
import React from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

// ── Variants ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ── Scroll-triggered wrapper ────────────────────────────────

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function Reveal({ children, variants = fadeUp, className, delay = 0, once = true }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger parent wrapper ──────────────────────────────────

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
  delay?: number;
  once?: boolean;
}

export function StaggerReveal({ children, className, fast, delay = 0, once = true }: StaggerRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Individual stagger child ────────────────────────────────

export function StaggerItem({ children, className, variants = fadeUp }: { children: React.ReactNode; className?: string; variants?: Variants }) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

// ── Hover card lift ─────────────────────────────────────────

export function HoverLift({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ── Number counter ──────────────────────────────────────────

export function CountUp({ to, suffix = '', duration = 1.5 }: { to: number; suffix?: string; duration?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const pct = Math.min((ts - start) / (duration * 1000), 1);
      setVal(Math.floor(pct * to));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

