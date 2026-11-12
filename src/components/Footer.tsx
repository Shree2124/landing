// ============================================================
// Footer — consumes design tokens exclusively
// ============================================================
import { GraduationCap } from 'lucide-react';

const LINKS = {
  Product: ['Features', 'Dashboard', 'AI Assistant', 'Study Hub', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export function Footer() {
  return (
    <footer
      className="mt-auto border-t"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <GraduationCap size={16} style={{ color: 'var(--color-primary-foreground)' }} />
              </div>
              <span className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>AcadFlow</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              The academic management platform built for modern institutions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <div className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--color-text-disabled)' }}>
                {category}
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{
                        color: 'var(--color-text-muted)',
                        transitionDuration: 'var(--duration-fast)',
                      }}
                      onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--color-text-primary)'}
                      onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--color-text-muted)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t text-xs"
          style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-disabled)' }}
        >
          <span>© 2026 AcadFlow Technologies Pvt. Ltd. All rights reserved.</span>
          <span>Made with precision for academia.</span>
        </div>
      </div>
    </footer>
  );
}

