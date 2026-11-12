// ============================================================
// Feature Mockups — Assignment, Attendance, AI, Study Hub
// ============================================================
import { FileText, Download, CheckCircle, XCircle, Clock, Calendar, Users, MessageSquare, Bot, Search, BookOpen, Tag, ChevronRight } from 'lucide-react';

// Shared mini-bar
function Bar({ pct, color = 'var(--color-primary)' }: { pct: number; color?: string }) {
  return (
    <div className="h-1 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-surface-active)' }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

// ── Assignment Management Mockup ─────────────────────────────
export function AssignmentMockup() {
  const submissions = [
    { name: 'Arjun Sharma',    type: 'code', status: 'submitted',  time: '2h ago' },
    { name: 'Priya Mehta',     type: 'pdf',  status: 'submitted',  time: '5h ago' },
    { name: 'Rohit Verma',     type: 'code', status: 'pending',    time: '—' },
    { name: 'Sneha Patel',     type: 'pdf',  status: 'late',       time: '1d ago' },
    { name: 'Vikram Singh',    type: 'code', status: 'submitted',  time: '8h ago' },
  ];

  const statusIcon = (s: string) =>
    s === 'submitted' ? <CheckCircle size={9} style={{ color: 'var(--color-success)' }} /> :
    s === 'pending'   ? <Clock size={9} style={{ color: 'var(--color-warning)' }} /> :
    <XCircle size={9} style={{ color: 'var(--color-error)' }} />;

  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Data Structures — Lab 4</div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: 9 }}>Batch CS-2024-A · Due Nov 15, 2026</div>
        </div>
        <button className="flex items-center gap-1 px-2 py-1 rounded-[var(--radius-md)]" style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--color-text-secondary)' }}>
          <Download size={9} /> <span>PDF</span>
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
        {[
          { label: 'Submitted', value: '32/42', color: 'var(--color-success)' },
          { label: 'Pending',   value: '8',     color: 'var(--color-warning)' },
          { label: 'Late',      value: '2',     color: 'var(--color-error)' },
          { label: 'Rate',      value: '76%',   color: 'var(--color-text-primary)' },
        ].map(s => (
          <div key={s.label}>
            <div style={{ color: s.color, fontWeight: 700, fontSize: 14 }}>{s.value}</div>
            <div style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Submission list */}
      <div>
        {submissions.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2 border-b last:border-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px]" style={{ backgroundColor: 'var(--color-surface-active)', color: 'var(--color-text-muted)' }}>
              {s.name[0]}
            </div>
            <div className="flex-1" style={{ color: 'var(--color-text-primary)' }}>{s.name}</div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--color-surface-active)', color: 'var(--color-text-muted)' }}>
              {s.type === 'code' ? <FileText size={8} /> : <FileText size={8} />}
              <span style={{ fontSize: 8 }}>{s.type.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-1">
              {statusIcon(s.status)}
              <span style={{ color: 'var(--color-text-muted)', fontSize: 9 }}>{s.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Attendance Dashboard Mockup ──────────────────────────────
export function AttendanceMockup() {
  const batches = [
    { name: 'CS-2024-A', pct: 94, present: 38, total: 40 },
    { name: 'CS-2024-B', pct: 87, present: 35, total: 40 },
    { name: 'CS-2023-A', pct: 91, present: 37, total: 41 },
    { name: 'IT-2024-A', pct: 82, present: 33, total: 40 },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      <div className="px-4 py-3 border-b" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Attendance Overview</div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: 9 }}>November 12, 2026 · Session 3</div>
      </div>

      {/* Overview badges */}
      <div className="grid grid-cols-3 gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
        {[
          { label: 'Present', value: '143', color: 'var(--color-success)' },
          { label: 'Absent',  value: '18',  color: 'var(--color-error)' },
          { label: 'Overall', value: '88.8%', color: 'var(--color-text-primary)' },
        ].map(s => (
          <div key={s.label} className="flex flex-col gap-0.5">
            <div style={{ color: s.color, fontWeight: 700, fontSize: 14 }}>{s.value}</div>
            <div style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Batch breakdown */}
      <div className="px-4 py-3 flex flex-col gap-3">
        <div style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontSize: 10 }}>Batch-wise Attendance</div>
        {batches.map(b => (
          <div key={b.name} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Users size={9} style={{ color: 'var(--color-text-muted)' }} />
                <span style={{ color: 'var(--color-text-primary)' }}>{b.name}</span>
              </div>
              <span style={{ color: 'var(--color-text-secondary)' }}>{b.present}/{b.total}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1"><Bar pct={b.pct} color={b.pct > 90 ? 'var(--color-success)' : b.pct > 85 ? 'var(--color-warning)' : 'var(--color-error)'} /></div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 9, width: 28 }}>{b.pct}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scheduled sessions */}
      <div className="px-4 py-3 border-t flex flex-col gap-2" style={{ borderColor: 'var(--color-border-subtle)' }}>
        <div style={{ color: 'var(--color-text-secondary)', fontWeight: 500, fontSize: 10 }}>Today's Sessions</div>
        {[
          { time: '09:00', subject: 'Data Structures', room: 'Lab 2', done: true },
          { time: '11:00', subject: 'Operating Systems', room: 'Room 301', done: true },
          { time: '14:00', subject: 'DBMS Lecture', room: 'Room 205', done: false },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <Calendar size={9} style={{ color: 'var(--color-text-muted)' }} />
            <span style={{ color: 'var(--color-text-disabled)', width: 28 }}>{s.time}</span>
            <span className="flex-1" style={{ color: 'var(--color-text-primary)' }}>{s.subject}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 8 }}>{s.room}</span>
            {s.done
              ? <CheckCircle size={9} style={{ color: 'var(--color-success)' }} />
              : <Clock size={9} style={{ color: 'var(--color-warning)' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── AI Academic Assistant Mockup ─────────────────────────────
export function AIAssistantMockup() {
  const messages = [
    { role: 'user', text: 'Explain the concept of deadlock in OS with a real example.' },
    { role: 'ai', text: 'A deadlock occurs when two or more processes are blocked forever, each waiting for a resource held by another.\n\n**Example:** Process A holds Lock 1 and waits for Lock 2. Process B holds Lock 2 and waits for Lock 1 — neither can proceed.' },
    { role: 'user', text: 'What are the four necessary conditions?' },
    { role: 'ai', text: 'The four Coffman conditions are:\n1. **Mutual Exclusion** — resource held exclusively\n2. **Hold & Wait** — holding one, waiting for another\n3. **No Preemption** — resources cannot be forcibly taken\n4. **Circular Wait** — circular chain of dependencies' },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div className="w-6 h-6 rounded-[var(--radius-md)] flex items-center justify-center" style={{ backgroundColor: 'var(--color-surface-active)' }}>
          <Bot size={12} style={{ color: 'var(--color-text-secondary)' }} />
        </div>
        <div>
          <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>AcadFlow AI</div>
          <div style={{ color: 'var(--color-success)', fontSize: 8 }}>● Online · Academic context loaded</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 p-4" style={{ maxHeight: 240, overflowY: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'ai' && (
              <div className="w-4 h-4 rounded-full flex items-center justify-center mr-1.5 mt-0.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-surface-active)' }}>
                <Bot size={8} style={{ color: 'var(--color-text-muted)' }} />
              </div>
            )}
            <div
              className="max-w-[80%] px-2.5 py-2 rounded-[var(--radius-lg)]"
              style={{
                backgroundColor: m.role === 'user' ? 'var(--color-secondary)' : 'var(--color-surface-active)',
                color: 'var(--color-text-primary)',
                lineHeight: 1.6,
              }}
            >
              {m.text.split('\n').map((line, j) => (
                <div key={j} className={j > 0 ? 'mt-1' : ''}
                  dangerouslySetInnerHTML={{
                    __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t flex items-center gap-2" style={{ borderColor: 'var(--color-border-subtle)' }}>
        <div className="flex-1 h-7 rounded-[var(--radius-md)] flex items-center px-2" style={{ backgroundColor: 'var(--color-input-bg)', border: '1px solid var(--color-input-border)' }}>
          <span style={{ color: 'var(--color-input-placeholder)' }}>Ask anything academic...</span>
        </div>
        <button className="w-7 h-7 rounded-[var(--radius-md)] flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
          <MessageSquare size={9} style={{ color: 'var(--color-primary-foreground)' }} />
        </button>
      </div>
    </div>
  );
}

// ── Study Hub Mockup ─────────────────────────────────────────
export function StudyHubMockup() {
  const resources = [
    { subject: 'Data Structures', items: 12, type: 'PDF' },
    { subject: 'Operating Systems', items: 8, type: 'Notes' },
    { subject: 'DBMS', items: 15, type: 'Mixed' },
    { subject: 'Computer Networks', items: 7, type: 'PDF' },
    { subject: 'Software Engineering', items: 10, type: 'Notes' },
    { subject: 'Theory of Computation', items: 6, type: 'PDF' },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border overflow-hidden text-[10px]" style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border-default)', boxShadow: 'var(--shadow-elevated)' }}>
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderColor: 'var(--color-border-subtle)' }}>
        <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 11 }}>Study Hub</div>
        <div className="flex items-center gap-1.5 h-6 px-2 rounded-[var(--radius-sm)]" style={{ backgroundColor: 'var(--color-surface-hover)' }}>
          <Search size={9} style={{ color: 'var(--color-text-disabled)' }} />
          <span style={{ color: 'var(--color-text-disabled)' }}>Search resources...</span>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-1.5 px-4 py-2 border-b overflow-x-auto no-scrollbar" style={{ borderColor: 'var(--color-border-subtle)' }}>
        {['All', 'PDF', 'Notes', 'Videos', 'Practice'].map((c, i) => (
          <span key={c} className="px-2 py-0.5 rounded-[var(--radius-pill)] whitespace-nowrap flex-shrink-0"
            style={{
              backgroundColor: i === 0 ? 'var(--color-primary)' : 'var(--color-surface-active)',
              color: i === 0 ? 'var(--color-primary-foreground)' : 'var(--color-text-muted)',
            }}>
            {c}
          </span>
        ))}
      </div>

      {/* Resource grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {resources.map((r, i) => (
          <div key={i} className="rounded-[var(--radius-lg)] p-2.5 border flex flex-col gap-1.5"
            style={{ backgroundColor: 'var(--color-surface-default)', borderColor: 'var(--color-border-subtle)' }}>
            <div className="w-6 h-6 rounded-[var(--radius-md)] flex items-center justify-center" style={{ backgroundColor: 'var(--color-surface-active)' }}>
              <BookOpen size={10} style={{ color: 'var(--color-text-muted)' }} />
            </div>
            <div style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: 9, lineHeight: 1.3 }}>{r.subject}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <Tag size={7} style={{ color: 'var(--color-text-disabled)' }} />
                <span style={{ color: 'var(--color-text-disabled)', fontSize: 8 }}>{r.type}</span>
              </div>
              <div className="flex items-center gap-0.5" style={{ color: 'var(--color-text-disabled)', fontSize: 8 }}>
                {r.items} files <ChevronRight size={7} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

