// ============================================================
// RolesSection — Role-based access visualization
// ============================================================
import { SectionLabel, SectionHeading, Card } from '../ui';
import { GraduationCap, BookOpen, Shield, ClipboardCheck, ArrowRight } from 'lucide-react';

const ROLES = [
  {
    icon: GraduationCap,
    label: 'Student',
    color: 'var(--color-text-primary)',
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
    color: 'var(--color-text-primary)',
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
    color: 'var(--color-text-primary)',
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
    color: 'var(--color-text-primary)',
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
    <section id="roles" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Role-Based Access</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">
            One platform. Every role.
          </SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            AcadFlow adapts its interface and permissions to each user's role —
            so everyone sees exactly what they need.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="flex flex-col items-center gap-8">
          {/* Central platform */}
          <div
            className="flex flex-col items-center gap-2 px-8 py-5 rounded-[var(--radius-2xl)] border"
            style={{
              backgroundColor: 'var(--color-surface-elevated)',
              borderColor: 'var(--color-border-strong)',
              boxShadow: 'var(--shadow-elevated)',
            }}
          >
            <div className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
              <span style={{ color: 'var(--color-primary-foreground)', fontSize: 14, fontWeight: 700 }}>AF</span>
            </div>
            <div className="text-center">
              <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>AcadFlow Platform</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Centralized academic OS</div>
            </div>
          </div>

          {/* Connector arrows */}
          <div className="flex items-center gap-6 opacity-30">
            {[...Array(4)].map((_, i) => (
              <ArrowRight key={i} size={14} style={{ color: 'var(--color-text-primary)', transform: 'rotate(90deg)' }} />
            ))}
          </div>

          {/* Role cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {ROLES.map(({ icon: Icon, label, capabilities }) => (
              <Card key={label} elevated className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-[var(--radius-lg)] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                </div>

                <ul className="flex flex-col gap-2">
                  {capabilities.map(cap => (
                    <li key={cap} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-text-muted)' }}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

