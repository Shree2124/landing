// ============================================================
// DashboardPreviewSection — Student & Teacher dashboards
// ============================================================
import { useState } from 'react';
import { SectionLabel, SectionHeading, Card } from '../ui';
import {
  CheckCircle, Calendar, BookOpen, TrendingUp,
  Star, FileText, Users, Plus, ChevronRight, Bell, Award
} from 'lucide-react';

function StatusDot({ status }: { status: 'done' | 'pending' | 'late' }) {
  const colors = { done: 'var(--color-success)', pending: 'var(--color-warning)', late: 'var(--color-error)' };
  return <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: colors[status] }} />;
}

function MiniBar({ pct }: { pct: number }) {
  return (
    <div className="h-1 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-surface-active)' }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: 'var(--color-primary)' }} />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Good morning, Arjun 👋</div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: 9 }}>3 assignments due this week</div>
        </div>
        <div className="flex items-center gap-2">
          <Bell size={11} style={{ color: 'var(--color-text-muted)' }} />
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-pill)]" style={{ backgroundColor: 'var(--color-success)}/10', border: '1px solid var(--color-success)' }}>
            <Star size={8} style={{ color: 'var(--color-warning)' }} />
            <span style={{ color: 'var(--color-warning)', fontSize: 9 }}>1,240 pts</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Attendance', value: '94%', icon: Calendar },
            { label: 'Submitted', value: '12/14', icon: CheckCircle },
            { label: 'Resources', value: '48', icon: BookOpen },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[var(--radius-lg)] p-2 border flex flex-col gap-1" style={{ backgroundColor: 'var(--color-surface-default)', borderColor: 'var(--color-border-subtle)' }}>
              <Icon size={9} style={{ color: 'var(--color-text-muted)' }} />
              <div style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: 13 }}>{value}</div>
              <div style={{ color: 'var(--color-text-disabled)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Upcoming assignments */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Upcoming</span>
            <div className="flex items-center gap-0.5" style={{ color: 'var(--color-text-disabled)', fontSize: 9 }}>View all <ChevronRight size={9} /></div>
          </div>
          {[
            { title: 'DS Lab 4', due: 'Nov 15', status: 'pending' as const, pct: 0 },
            { title: 'OS Assignment', due: 'Nov 18', status: 'pending' as const, pct: 60 },
            { title: 'DBMS ER Diagram', due: 'Nov 20', status: 'done' as const, pct: 100 },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <StatusDot status={a.status} />
              <div className="flex-1">
                <div style={{ color: 'var(--color-text-primary)' }}>{a.title}</div>
                <div style={{ color: 'var(--color-text-disabled)', fontSize: 8 }}>Due {a.due}</div>
              </div>
              <div className="w-16"><MiniBar pct={a.pct} /></div>
            </div>
          ))}
        </div>

        {/* Recent study resources */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Recent Resources</span>
          </div>
          {[
            'Deadlock Avoidance — Lecture Notes',
            'B+ Trees — PDF Handout',
            'SQL Query Practice Set',
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <FileText size={9} style={{ color: 'var(--color-text-muted)' }} />
              <span className="flex-1" style={{ color: 'var(--color-text-primary)' }}>{r}</span>
              <ChevronRight size={9} style={{ color: 'var(--color-text-disabled)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeacherDashboard() {
  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Faculty Dashboard</div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: 9 }}>Dr. Priya Nair · CS Department</div>
        </div>
        <button className="flex items-center gap-1 px-2 py-1 rounded-[var(--radius-md)]" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' }}>
          <Plus size={9} /> <span style={{ fontSize: 9 }}>New Assignment</span>
        </button>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Batch stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Batches',   value: '4',   icon: Users },
            { label: 'Students', value: '161',  icon: Award },
            { label: 'Active Assign.', value: '8', icon: FileText },
            { label: 'Avg. Submit', value: '78%', icon: TrendingUp },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[var(--radius-lg)] p-2 border flex flex-col gap-1" style={{ backgroundColor: 'var(--color-surface-default)', borderColor: 'var(--color-border-subtle)' }}>
              <Icon size={9} style={{ color: 'var(--color-text-muted)' }} />
              <div style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: 13 }}>{value}</div>
              <div style={{ color: 'var(--color-text-disabled)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Assignment tracking */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Assignment Tracking</span>
          </div>
          {[
            { title: 'DS Lab 4',         batch: 'CS-2024-A', pct: 76, due: 'Nov 15' },
            { title: 'OS Assignment 2',  batch: 'CS-2024-B', pct: 55, due: 'Nov 18' },
            { title: 'DBMS ER Diagram',  batch: 'CS-2023-A', pct: 92, due: 'Nov 20' },
            { title: 'CN Wireshark Lab', batch: 'IT-2024-A', pct: 38, due: 'Nov 22' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <div className="flex-1">
                <div style={{ color: 'var(--color-text-primary)' }}>{a.title}</div>
                <div style={{ color: 'var(--color-text-disabled)', fontSize: 8 }}>{a.batch} · Due {a.due}</div>
              </div>
              <div className="flex items-center gap-2 w-28">
                <MiniBar pct={a.pct} />
                <span style={{ color: 'var(--color-text-secondary)', fontSize: 9, width: 24, textAlign: 'right' }}>{a.pct}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div>
          <div className="mb-2" style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Recent Activity</div>
          {[
            'Arjun Sharma submitted DS Lab 4 · 2h ago',
            'Priya Mehta marked late — OS Assignment · 5h ago',
            'Attendance marked for CS-2024-A · 9h ago',
          ].map((a, i) => (
            <div key={i} className="py-1 border-b last:border-0" style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border-subtle)', fontSize: 9 }}>{a}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardPreviewSection() {
  const [active, setActive] = useState<'student' | 'teacher'>('student');

  return (
    <section id="dashboard" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <SectionLabel>Role Dashboards</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">
            Tailored for every role
          </SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Students and faculty each get a focused workspace that surfaces only what matters to them.
          </p>

          {/* Tab switcher */}
          <div
            className="flex p-1 rounded-[var(--radius-lg)] mt-2"
            style={{ backgroundColor: 'var(--color-surface-elevated)', border: '1px solid var(--color-border-default)' }}
          >
            {(['student', 'teacher'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="px-5 py-2 text-sm font-medium rounded-[var(--radius-md)] capitalize transition-all"
                style={{
                  backgroundColor: active === tab ? 'var(--color-surface-active)' : 'transparent',
                  color: active === tab ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  transitionDuration: 'var(--duration-fast)',
                }}
              >
                {tab} View
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card elevated>
            <div className="p-4">
              {active === 'student' ? <StudentDashboard /> : <TeacherDashboard />}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
