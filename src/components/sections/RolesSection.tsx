// ============================================================
// RolesSection — animated architecture diagram
// ============================================================
import { GraduationCap, BookOpen, Shield, ClipboardCheck, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionLabel, SectionHeading, Card } from '../ui';
import { Reveal, StaggerReveal, StaggerItem, fadeUp } from '../../lib/animations';

const ROLES = [
  {
    icon: GraduationCap,
    label: 'Student',
    capabilities: [
      'View & submit assignments',
      'Check attendance records',
      'Access study materials',
      'AI academic assistant',
      'Track personal progress',
    ],
  },
  {
    icon: BookOpen,
    label: 'Teacher / Faculty',
    capabilities: [
      'Create & manage assignments',
      'Mark & schedule attendance',
      'Upload study resources',
      'View batch analytics',
      'Export submission reports',
    ],
  },
  {
    icon: Shield,
    label: 'HOD / Administrator',
    capabilities: [
      'Oversee all departments',
      'Manage faculty accounts',
      'Institution-wide analytics',
      'Configure role permissions',
      'Audit logs & compliance',
    ],
  },
  {
    icon: ClipboardCheck,
    label: 'Attendance Coordinator',
    capabilities: [
      'Dedicated attendance portal',
      'Session scheduling',
      'Batch-wise reports',
      'Absence notifications',
      'Monthly attendance export',
    ],
  },
];

export function RolesSection() {
  return (
    <section id="roles" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-border-subtle), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Role-Based Access</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">One platform. Every role.</SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            AcadFlow adapts its interface and permissions to each user's role.
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-8">
          {/* Central node */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="flex flex-col items-center gap-2 px-8 py-5 rounded-[var(--radius-2xl)] border cursor-default"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                borderColor: 'var(--color-border-strong)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
                animate={{ boxShadow: ['0 0 0 0px var(--color-primary)', '0 0 0 8px transparent'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              >
                <span style={{ color: 'var(--color-primary-foreground)', fontSize: 14, fontWeight: 700 }}>AF</span>
              </motion.div>
              <div className="text-center">
                <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>AcadFlow Platform</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Centralized academic OS</div>
              </div>
            </motion.div>
          </Reveal>

          {/* Animated arrow */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} style={{ color: 'var(--color-text-disabled)' }} />
          </motion.div>

          {/* Role cards */}
          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {ROLES.map(({ icon: Icon, label, capabilities }, i) => (
              <StaggerItem key={label} variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, borderColor: 'var(--color-border-strong)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card elevated className="p-5 flex flex-col gap-4 h-full cursor-default">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: [-4, 4, -4, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-9 h-9 rounded-[var(--radius-lg)] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                      >
                        <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                      </motion.div>
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {capabilities.map((cap, ci) => (
                        <motion.li
                          key={cap}
                          initial={{ opacity: 0, x: -6 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 + ci * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-xs"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-text-muted)' }} />
                          {cap}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
