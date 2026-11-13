// ============================================================
// CinematicLoader — High-end editorial / Nothing OS-style
// preloader with audio-visual telemetry, dynamic counter,
// viewport crosshairs, and a dual-shutter theatrical exit.
// ============================================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TELEMETRY_STEPS = [
  'INITIALIZING ACADEMIC KERNEL',
  'ESTABLISHING SECURE PROTOCOLS',
  'INDEXING WORKFLOW REPOSITORIES',
  'SYNCING REAL-TIME TELEMETRY',
  'ACADFLOW OS READY',
];

interface CinematicLoaderProps {
  onLoadingComplete?: () => void;
}

export function CinematicLoader({ onLoadingComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Disable background scrolling while loader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Accelerated realistic counter
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration: quick start, slight pause around 65-75%, then fast burst to 100%
      const increment = current < 30 ? 3 : current < 70 ? 2 : current < 88 ? 4 : 5;
      current = Math.min(100, current + increment);
      setProgress(current);

      const step = Math.min(
        TELEMETRY_STEPS.length - 1,
        Math.floor((current / 100) * TELEMETRY_STEPS.length)
      );
      setStatusIndex(step);

      if (current >= 100) {
        clearInterval(interval);
        // Brief hold at 100% for punchy impact, then trigger shutter
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 800);
        }, 220);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="cinematic-loader"
          className="fixed inset-0 z-[999999] pointer-events-auto select-none overflow-hidden"
          style={{ backgroundColor: '#050505', color: '#ffffff' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, delay: 0.7 }}
        >
          {/* Top Curtain Panel (Splits upward on exit) */}
          <motion.div
            className="absolute top-0 inset-x-0 h-1/2 z-10"
            style={{ backgroundColor: '#050505', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1] }}
          />

          {/* Bottom Curtain Panel (Splits downward on exit) */}
          <motion.div
            className="absolute bottom-0 inset-x-0 h-1/2 z-10"
            style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.08)' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1] }}
          />

          {/* Central Content Layer */}
          <motion.div
            className="relative z-20 w-full h-full flex flex-col justify-between p-6 sm:p-10 font-mono"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ── Viewport Header Telemetry ── */}
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-zinc-300 font-semibold">SYS_INITIALIZING</span>
                <span className="hidden sm:inline text-zinc-600">// BOOT_SEQUENCE</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-zinc-600">LOC: 127.0.0.1</span>
                <span>OS // v2.6.4</span>
              </div>
            </div>

            {/* ── Ambient Radial Glow & Scanning Line ── */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle 500px at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
              }}
            />

            {/* Grid Lines Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Viewport Crosshair Accents */}
            <div className="absolute top-12 left-12 text-zinc-700 text-xs select-none hidden sm:block">+</div>
            <div className="absolute top-12 right-12 text-zinc-700 text-xs select-none hidden sm:block">+</div>
            <div className="absolute bottom-12 left-12 text-zinc-700 text-xs select-none hidden sm:block">+</div>
            <div className="absolute bottom-12 right-12 text-zinc-700 text-xs select-none hidden sm:block">+</div>

            {/* ── Center Stage: Monogram + Title + Telemetry ── */}
            <div className="my-auto flex flex-col items-center text-center gap-6 relative">
              {/* Animated Orbital Monogram */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Rotating Dashed Ring */}
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                  />
                </motion.svg>

                {/* Inner Counter Ring */}
                <motion.svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="226.2"
                    strokeDashoffset={226.2 - (226.2 * progress) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 40ms linear' }}
                  />
                </motion.svg>

                {/* Brand Monogram */}
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  AF
                </span>
              </div>

              {/* Title & Category */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-[0.35em] text-white uppercase font-sans">
                  AcadFlow
                </h1>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-zinc-400">
                  <span>ACADEMIC OPERATING SYSTEM</span>
                </div>
              </div>

              {/* Dynamic Status Telemetry */}
              <div className="h-6 flex items-center justify-center">
                <motion.span
                  key={statusIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="text-xs tracking-[0.2em] text-zinc-400 uppercase"
                >
                  {`// ${TELEMETRY_STEPS[statusIndex]}`}
                </motion.span>
              </div>
            </div>

            {/* ── Bottom Section: Progress Bar & Huge Counter ── */}
            <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
              {/* Progress Bar Container */}
              <div className="relative w-full h-[2px] bg-zinc-900 overflow-hidden rounded-full">
                {/* Active Progress Fill */}
                <motion.div
                  className="h-full bg-white relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Leading Laser Point */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white blur-[2px]"
                    style={{ boxShadow: '0 0 10px #ffffff' }}
                  />
                </motion.div>
              </div>

              {/* Counter Row */}
              <div className="flex items-center justify-between text-xs text-zinc-500 pt-1">
                <span className="tracking-[0.15em] text-[10px] uppercase text-zinc-400">
                  SYSTEM READY STATE
                </span>
                <span className="tabular-nums font-bold tracking-wider text-white text-sm">
                  {progress < 10 ? `0${progress}` : progress}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

