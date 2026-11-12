// ============================================================
// CTASection
// ============================================================
import { ArrowRight } from 'lucide-react';
import { Button, SectionHeading } from '../ui';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[var(--radius-2xl)] p-12 text-center flex flex-col items-center gap-6"
          style={{
            backgroundColor: 'var(--color-surface-elevated)',
            border: '1px solid var(--color-border-default)',
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <SectionHeading as="h2" className="text-3xl sm:text-4xl max-w-2xl">
              Ready to bring clarity to your institution?
            </SectionHeading>
            <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Join 180+ institutions that trust AcadFlow to run their academic operations.
              Set up takes under an hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg">
                Get started free <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a demo
              </Button>
            </div>
            <p className="text-xs" style={{ color: 'var(--color-text-disabled)' }}>
              No credit card required · Free 30-day trial for Institution plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

