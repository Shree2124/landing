// ============================================================
// TestimonialsSection
// ============================================================
import { SectionLabel, SectionHeading, Card } from '../ui';

const TESTIMONIALS = [
  {
    quote: "AcadFlow eliminated the chaos of tracking 160 student submissions across 4 batches. The attendance module alone saved our coordinator 2 hours a day.",
    author: 'Dr. Priya Nair',
    role: 'Head of Computer Science, VJIT',
    initials: 'PN',
  },
  {
    quote: "The AI assistant actually understands our syllabus context. Students get relevant answers, not generic responses. It's become essential for exam prep.",
    author: 'Prof. Rahul Sharma',
    role: 'Faculty, DBMS & OS, MIT Pune',
    initials: 'RS',
  },
  {
    quote: "As a student, having my assignments, attendance, and study materials in one place with zero friction is exactly what I needed. The dashboard is clean and fast.",
    author: 'Arjun Verma',
    role: 'B.Tech CSE, 3rd Year',
    initials: 'AV',
  },
  {
    quote: "Switching from spreadsheets to AcadFlow took one afternoon. The institution-wide analytics gave us insights we simply couldn't get before.",
    author: 'Dr. Meena Krishnan',
    role: 'Dean of Academics, SIT Bangalore',
    initials: 'MK',
  },
  {
    quote: "The role-based access model is exactly right. Faculty see what they need, students see what they need, and I get the oversight view I need as HOD.",
    author: 'Prof. Suresh Gupta',
    role: 'HOD Information Technology',
    initials: 'SG',
  },
  {
    quote: "Report generation that used to take a full day now takes 10 seconds. The PDF export is formatted perfectly for administration.",
    author: 'Anjali Patel',
    role: 'Attendance Coordinator, LDCE',
    initials: 'AP',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">
            Trusted by educators and students
          </SectionHeading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, author, role, initials }) => (
            <Card key={author} className="p-6 flex flex-col gap-5 hover:bg-[var(--color-surface-hover)] transition-colors" style={{ transitionDuration: 'var(--duration-standard)' }}>
              {/* Quote marks */}
              <div className="text-3xl font-serif leading-none" style={{ color: 'var(--color-border-strong)' }}>"</div>
              <p className="text-sm flex-1" style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                {quote}
              </p>
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: 'var(--color-border-subtle)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border-default)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{author}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

