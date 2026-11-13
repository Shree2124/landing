// ============================================================
// HeroSection — framer-motion animations + floating effects
// ============================================================
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Badge, SectionLabel } from '../ui';
import { HeroDashboardMockup } from '../mockups/HeroDashboardMockup';
import { fadeUp, fadeRight, staggerContainer, CountUp } from '../../lib/animations';

const STATS = [
  { value: 2400, suffix: '+', label: 'Educators' },
  { value: 180, suffix: '+', label: 'Institutions' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 1, suffix: 'M+', label: 'Submissions tracked' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Animated glow blobs ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 600, height: 600, top: '-10%', left: '55%', transform: 'translateX(-50%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 400, height: 400, bottom: '10%', left: '5%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.055, 0.03] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      </motion.div>

      {/* ── Floating particles ── */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            left: `${8 + (i * 6.5) % 85}%`,
            top: `${10 + (i * 11.3) % 80}%`,
            backgroundColor: 'var(--color-text-primary)',
            opacity: 0.08 + (i % 4) * 0.03,
          }}
          animate={{
            y: [-8, 8, -8],
            x: [-4, 4, -4],
            opacity: [0.06, 0.18, 0.06],
          }}
          transition={{
            duration: 4 + (i % 5) * 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (i * 0.4) % 3,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <SectionLabel>Academic Management Platform</SectionLabel>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                The operating{' '}
                <span style={{ color: 'var(--color-text-secondary)' }}>system</span>
                <br />
                for modern{' '}
                <motion.span
                  className="relative inline-block"
                  style={{
                    WebkitTextStroke: '2px var(--color-border-strong)',
                    color: 'transparent',
                  }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  academia
                </motion.span>
              </h1>
              <p className="text-base sm:text-lg max-w-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                AcadFlow unifies assignment management, attendance tracking, AI assistance,
                and academic resources into a single cohesive platform built for institutions
                that value clarity.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="primary" size="lg">
                  Start for free <ArrowRight size={16} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg">View demo</Button>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              {[
                { icon: Shield, label: 'SOC 2 compliant' },
                { icon: Zap, label: '99.9% uptime' },
                { icon: Sparkles, label: 'AI-powered' },
              ].map(({ icon: Icon, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                  <Badge><Icon size={10} /> {label}</Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 pt-4 border-t"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <div className="flex -space-x-2">
                {['AR', 'PM', 'RV', 'SP', 'VK'].map((initials, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, type: 'spring', stiffness: 300 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-medium border-2"
                    style={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      borderColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {initials}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  Trusted by 2,400+ educators
                </div>
                <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>across 180 institutions</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: dashboard ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow halo */}
            <motion.div
              className="absolute inset-0 rounded-[var(--radius-2xl)] blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Floating dashboard */}
            <motion.div
              className="relative w-full"
              style={{ transform: 'perspective(1200px) rotateY(-6deg) rotateX(2deg)' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HeroDashboardMockup />
            </motion.div>

            {/* Floating mini-badges */}
            <motion.div
              className="absolute -left-6 top-24 hidden lg:flex items-center gap-2 px-3 py-2 rounded-[var(--radius-lg)] border text-xs"
              style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-dropdown)', color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span style={{ color: 'var(--color-success)' }}>●</span> 1,284 students online
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-20 hidden lg:flex items-center gap-2 px-3 py-2 rounded-[var(--radius-lg)] border text-xs"
              style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-dropdown)', color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              ✓ 847 submissions today
            </motion.div>
          </motion.div>
        </div>

        {/* ── Animated stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor: 'var(--color-border-subtle)' }}
        >
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col gap-1 text-center">
              <div className="text-2xl sm:text-3xl font-semibold tabular-nums" style={{ color: 'var(--color-text-primary)' }}>
                <CountUp to={value} suffix={suffix} />
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
