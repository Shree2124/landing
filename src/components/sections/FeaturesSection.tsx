// ============================================================
// FeaturesSection
// ============================================================
import { FileText, Calendar, Bot, BookOpen, Users, BarChart3, Shield, Zap } from 'lucide-react';
import { Card, SectionLabel, SectionHeading } from '../ui';
import { AssignmentMockup, AttendanceMockup, AIAssistantMockup, StudyHubMockup } from '../mockups/FeatureMockups';

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
  { icon: Users,    label: 'Role-Based Access',  desc: 'Students, teachers, HODs, and coordinators each see exactly what they need.' },
  { icon: BarChart3, label: 'Analytics',         desc: 'Actionable insights on student engagement, submission rates, and attendance trends.' },
  { icon: Shield,   label: 'Secure & Compliant', desc: 'Institution-grade security with granular permissions and audit logs.' },
  { icon: Zap,      label: 'Real-time Updates',  desc: 'Live data across all dashboards — no refreshing, no delays.' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Platform Features</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl max-w-2xl">
            Everything academic management needs
          </SectionHeading>
          <p className="text-base max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
            Purpose-built tools for every stakeholder — from individual students to institutional administrators.
          </p>
        </div>

        {/* Primary feature cards with mockups */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {FEATURES.map(({ icon: Icon, label, desc, mockup: Mockup }) => (
            <Card key={label} elevated className="p-6 flex flex-col gap-6 group hover:border-[var(--color-border-strong)] transition-colors" style={{ transitionDuration: 'var(--duration-standard)' }}>
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                >
                  <Icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
                </div>
              </div>
              {/* Mockup */}
              <div className="overflow-hidden rounded-[var(--radius-lg)]" style={{ transform: 'scale(0.98)', transformOrigin: 'top center' }}>
                <Mockup />
              </div>
            </Card>
          ))}
        </div>

        {/* Secondary features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECONDARY_FEATURES.map(({ icon: Icon, label, desc }) => (
            <Card key={label} className="p-5 flex flex-col gap-3 hover:bg-[var(--color-surface-hover)] transition-colors" style={{ transitionDuration: 'var(--duration-standard)' }}>
              <div
                className="w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-subtle)' }}
              >
                <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

