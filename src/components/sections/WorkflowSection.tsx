// ============================================================
// WorkflowSection — animated connector + stagger cards
// ============================================================
import { Plus, ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionLabel, SectionHeading, Card } from '../ui';
import { Reveal, StaggerReveal, StaggerItem, fadeUp } from '../../lib/animations';

const STEPS = [
  {
    num: '01',
    icon: Plus,
    label: 'Create & Organize',
    desc: 'Teachers create assignments, schedule sessions, and upload study resources — all from a unified dashboard.',
    details: ['Set batch targets', 'Define deadlines', 'Attach materials', 'Configure grading'],
  },
  {
    num: '02',
    icon: ArrowRight,
    label: 'Submit & Engage',
    desc: 'Students receive instant notifications, submit their work, access study materials, and interact with the AI assistant.',
    details: ['Real-time notifications', 'Code & PDF submissions', 'AI-powered Q&A', 'Resource library access'],
  },
  {
    num: '03',
    icon: BarChart3,
    label: 'Track & Improve',
    desc: 'Faculty and administrators monitor submission rates, attendance trends, and student engagement through live analytics.',
    details: ['Submission analytics', 'Attendance heatmaps', 'PDF report export', 'Performance insights'],
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">From creation to insight</SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            A clean three-stage loop that keeps every stakeholder aligned and informed.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 overflow-hidden" style={{ marginLeft: '16.666%', marginRight: '16.666%' }}>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true }}
              className="h-px origin-left"
              style={{ background: 'linear-gradient(90deg, var(--color-border-subtle), var(--color-border-strong), var(--color-border-subtle))' }}
            />
          </div>

          <StaggerReveal className="grid lg:grid-cols-3 gap-6">
            {STEPS.map(({ num, icon: Icon, label, desc, details }, i) => (
              <StaggerItem key={num} variants={fadeUp}>
                <div className="relative flex flex-col gap-6">
                  {/* Step number */}
                  <div className="flex lg:justify-center">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.15, 1] }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: 'backOut' }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        backgroundColor: 'var(--color-bg-primary)',
                        border: '1px solid var(--color-border-default)',
                        boxShadow: 'var(--shadow-card)',
                      }}
                    >
                      <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>{num}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card elevated className="p-6 flex flex-col gap-4 h-full">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                      >
                        <Icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
                      </motion.div>

                      <div>
                        <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>{desc}</p>
                      </div>

                      <ul className="flex flex-col gap-1.5 mt-auto">
                        {details.map((d, di) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 + di * 0.07, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-xs"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-border-strong)' }} />
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>

                  {i < STEPS.length - 1 && (
                    <motion.div
                      className="flex justify-center lg:hidden"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight size={16} style={{ color: 'var(--color-text-disabled)', transform: 'rotate(90deg)' }} />
                    </motion.div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
