// ============================================================
// WorkflowSection — How it works
// ============================================================
import { SectionLabel, SectionHeading, Card } from '../ui';
import { Plus, ArrowRight, BarChart3 } from 'lucide-react';

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
    <section id="workflow" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">
            From creation to insight
          </SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            A clean three-stage loop that keeps every stakeholder aligned and informed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 8%, var(--color-border-default) 15%, var(--color-border-default) 85%, transparent 92%)',
              marginLeft: '16.666%',
              marginRight: '16.666%',
            }}
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {STEPS.map(({ num, icon: Icon, label, desc, details }, i) => (
              <div key={num} className="relative flex flex-col gap-6">
                {/* Step number circle */}
                <div className="flex lg:justify-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-default)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>{num}</span>
                  </div>
                </div>

                {/* Card */}
                <Card elevated className="p-6 flex flex-col gap-4 h-full">
                  <div
                    className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-surface-active)', border: '1px solid var(--color-border-default)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{label}</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{desc}</p>
                  </div>

                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {details.map(d => (
                      <li key={d} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-border-strong)' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Mobile arrow */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center lg:hidden">
                    <ArrowRight size={16} style={{ color: 'var(--color-text-disabled)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

