// ============================================================
// HeroDashboard — SVG/HTML mockup replacing hero-dashboard.webp
// Renders a realistic AcadFlow dashboard preview
// ============================================================
import { Users, BookOpen, CheckSquare, TrendingUp, Bell, Search, LayoutDashboard, FileText, Calendar, Settings, ChevronRight } from 'lucide-react';

function StatCard({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="rounded-[var(--radius-lg)] p-3 border flex flex-col gap-1" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-subtle)' }}>
      <span className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>{label}</span>
      <span className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{value}</span>
      <span className="text-[9px]" style={{ color: positive ? 'var(--color-success)' : 'var(--color-error)' }}>{change}</span>
    </div>
  );
}

function MiniBar({ pct }: { pct: number }) {
  return (
    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-surface-active)' }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: 'var(--color-primary)' }} />
    </div>
  );
}

export function HeroDashboardMockup() {
  return (
    <div
      className="w-full max-w-2xl rounded-[var(--radius-2xl)] overflow-hidden border"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border-default)',
        boxShadow: 'var(--shadow-floating)',
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--color-border-strong)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--color-border-strong)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--color-border-strong)' }} />
        <div className="ml-2 flex-1 h-5 rounded-[var(--radius-sm)] flex items-center px-2" style={{ backgroundColor: 'var(--color-surface-hover)', maxWidth: 240 }}>
          <span className="text-[9px]" style={{ color: 'var(--color-text-disabled)' }}>app.acadflow.io/dashboard</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-[340px] text-[10px]">
        {/* Sidebar */}
        <div className="w-[140px] flex-shrink-0 border-r flex flex-col py-3 gap-0.5" style={{ backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border-subtle)' }}>
          <div className="px-3 pb-3 mb-1 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-[var(--radius-sm)] flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <span style={{ color: 'var(--color-primary-foreground)', fontSize: 8, fontWeight: 700 }}>AF</span>
              </div>
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 10 }}>AcadFlow</span>
            </div>
          </div>
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: FileText, label: 'Assignments', active: false },
            { icon: Calendar, label: 'Attendance', active: false },
            { icon: BookOpen, label: 'Study Hub', active: false },
            { icon: Users, label: 'Students', active: false },
            { icon: Settings, label: 'Settings', active: false },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className="mx-2 flex items-center gap-2 px-2 py-1.5 rounded-[var(--radius-md)]"
              style={{
                backgroundColor: active ? 'var(--color-surface-elevated)' : 'transparent',
                color: active ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              }}
            >
              <Icon size={10} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <div className="flex items-center gap-2 h-6 px-2 rounded-[var(--radius-sm)]" style={{ backgroundColor: 'var(--color-surface-hover)', width: 120 }}>
              <Search size={9} style={{ color: 'var(--color-text-disabled)' }} />
              <span style={{ color: 'var(--color-text-disabled)' }}>Search...</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell size={11} style={{ color: 'var(--color-text-muted)' }} />
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-surface-elevated)', border: '1px solid var(--color-border-default)' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: 8 }}>JD</span>
              </div>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex-1 overflow-auto p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Overview</span>
              <span style={{ color: 'var(--color-text-disabled)', fontSize: 9 }}>Nov 2026</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-2">
              <StatCard label="Total Students" value="1,284" change="↑ 12% this month" positive={true} />
              <StatCard label="Submissions" value="847" change="↑ 8% this week" positive={true} />
              <StatCard label="Attendance Rate" value="91.4%" change="↓ 2.1% vs last" positive={false} />
              <StatCard label="Active Courses" value="24" change="↑ 3 new" positive={true} />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-5 gap-2">
              {/* Submissions chart */}
              <div className="col-span-3 rounded-[var(--radius-lg)] p-3 border" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-subtle)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: 10 }}>Submission Activity</span>
                  <TrendingUp size={9} style={{ color: 'var(--color-text-muted)' }} />
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[65, 80, 55, 90, 70, 85, 95, 60, 88, 72, 91, 78].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[var(--radius-sm)] transition-all"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 11 ? 'var(--color-primary)' : 'var(--color-surface-active)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1" style={{ color: 'var(--color-text-disabled)', fontSize: 8 }}>
                  <span>Week 1</span><span>Week 2</span><span>Week 3</span>
                </div>
              </div>

              {/* Attendance donut */}
              <div className="col-span-2 rounded-[var(--radius-lg)] p-3 border flex flex-col gap-2" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-subtle)' }}>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: 10 }}>Attendance</span>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 60 60" className="w-14 h-14">
                    <circle cx="30" cy="30" r="22" fill="none" stroke="var(--color-surface-active)" strokeWidth="6" />
                    <circle cx="30" cy="30" r="22" fill="none" stroke="var(--color-primary)" strokeWidth="6"
                      strokeDasharray={`${0.914 * 138.2} ${138.2}`} strokeLinecap="round"
                      transform="rotate(-90 30 30)" />
                    <text x="30" y="34" textAnchor="middle" style={{ fill: 'var(--color-text-primary)', fontSize: 10, fontWeight: 700 }}>91.4%</text>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  {[{ label: 'Present', pct: 91 }, { label: 'Late', pct: 5 }, { label: 'Absent', pct: 4 }].map(d => (
                    <div key={d.label} className="flex items-center gap-1">
                      <span style={{ color: 'var(--color-text-muted)', fontSize: 8, width: 32 }}>{d.label}</span>
                      <MiniBar pct={d.pct} />
                      <span style={{ color: 'var(--color-text-disabled)', fontSize: 8, width: 20 }}>{d.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent assignments */}
            <div className="rounded-[var(--radius-lg)] border overflow-hidden" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-subtle)' }}>
              <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
                <span style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: 10 }}>Recent Assignments</span>
                <div className="flex items-center gap-0.5" style={{ color: 'var(--color-text-disabled)', fontSize: 9 }}>
                  View all <ChevronRight size={9} />
                </div>
              </div>
              {[
                { title: 'Data Structures — Lab 4', batch: 'CS-2024-A', due: 'Nov 15', pct: 78 },
                { title: 'Operating Systems — Assignment 2', batch: 'CS-2024-B', due: 'Nov 18', pct: 55 },
                { title: 'DBMS — ER Diagram', batch: 'CS-2023-A', due: 'Nov 20', pct: 92 },
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 border-b last:border-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
                  <div className="flex-1">
                    <div style={{ color: 'var(--color-text-primary)', fontSize: 10, fontWeight: 500 }}>{a.title}</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: 8 }}>{a.batch} · Due {a.due}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-20"><MiniBar pct={a.pct} /></div>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 9, width: 24 }}>{a.pct}%</span>
                    <CheckSquare size={9} style={{ color: 'var(--color-text-disabled)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

