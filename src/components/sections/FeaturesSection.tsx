// ============================================================
// FeaturesSection — with scroll-triggered stagger animations
// ============================================================
import { FileText, Calendar, Bot, BookOpen, Users, BarChart3, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, SectionLabel, SectionHeading } from '../ui';
import { AssignmentMockup, AttendanceMockup, AIAssistantMockup, StudyHubMockup } from '../mockups/FeatureMockups';
import { Reveal, StaggerReveal, StaggerItem, HoverLift, fadeUp, scaleIn } from '../../lib/animations';

const FEATURES = [
  {
    icon: FileText,
    label: 'Assignment Management',
    desc: 'Create, distribute, and track assignments across batches. Monitor submission rates, deadlines, and export reports instantly.',
    mockup: AssignmentMockup,
  },
  {
    icon: Calendar,
    label: 'Attendance Tracking',
    desc: 'Real-time attendance marking with batch-wise breakdowns, session scheduling, and automated summaries.',
    mockup: AttendanceMockup,
  },
  {
    icon: Bot,
    label: 'AI Academic Assistant',
    desc: 'Context-aware academic AI integrated directly into the platform. Students get instant help grounded in their coursework.',
    mockup: AIAssistantMockup,
  },
  {
    icon: BookOpen,
    label: 'Study Hub',
    desc: 'Centralized resource library for PDFs, notes, and videos — organized by subject and accessible to every student.',
    mockup: StudyHubMockup,
  },
];

const SECONDARY_FEATURES = [
  { icon: Users,     label: 'Role-Based Access',  desc: 'Students, teachers, HODs, and coordinators each see exactly what they need.' },
  { icon: BarChart3, label: 'Analytics',           desc: 'Actionable insights on engagement, submission rates, and attendance trends.' },
  { icon: Shield,    label: 'Secure & Compliant',  desc: 'Institution-grade security with granular permissions and audit logs.' },
  { icon: Zap,       label: 'Real-time Updates',   desc: 'Live data across all dashboards — no refreshing, no delays.' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Subtle section divider glow */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-border-subtle), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Platform Features</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl max-w-2xl">
            Everything academic management needs
          </SectionHeading>
          <p className="text-base max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
            Purpose-built tools for every stakeholder — from individual students to institutional administrators.
          </p>
        </Reveal>

        {/* Primary feature cards */}
        <StaggerReveal className="grid md:grid-cols-2 gap-6 mb-10">
          {FEATURES.map(({ icon: Icon, label, desc, mockup: Mockup }) => (
            <StaggerItem key={label}>
              <HoverLift>
                <Card
                  elevated
                  className="p-6 flex flex-col gap-6 h-full border-[var(--color-card-border)] hover:border-[var(--color-border-strong)] transition-colors"
                  style={{ transitionDuration: 'var(--duration-standard)' }}
                >
                  <div className="flex flex-col gap-3">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
                    </motion.div>
                    <div>
                      <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
                    </div>
                  </div>
                  <Reveal variants={scaleIn} className="overflow-hidden rounded-[var(--radius-lg)]">
                    <Mockup />
                  </Reveal>
                </Card>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Secondary features grid */}
        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" fast>
          {SECONDARY_FEATURES.map(({ icon: Icon, label, desc }) => (
            <StaggerItem key={label} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'var(--color-border-strong)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card
                  className="p-5 flex flex-col gap-3 h-full cursor-default"
                  style={{ transitionDuration: 'var(--duration-standard)' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-subtle)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{label}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
