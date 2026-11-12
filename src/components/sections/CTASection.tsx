// ============================================================
// CTASection — animated with pulsing glow
// ============================================================
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, SectionHeading } from '../ui';
import { Reveal } from '../../lib/animations';

export function CTASection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[var(--radius-2xl)] p-12 text-center flex flex-col items-center gap-6"
            style={{
              backgroundColor: 'var(--color-surface-elevated)',
              border: '1px solid var(--color-border-default)',
              boxShadow: 'var(--shadow-elevated)',
            }}
          >
            {/* Animated dot-grid background */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Pulsing center glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, var(--color-primary), transparent)' }}
              animate={{ opacity: [0.03, 0.07, 0.03] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
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
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button variant="primary" size="lg">
                    Get started free <ArrowRight size={16} />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button variant="secondary" size="lg">Schedule a demo</Button>
                </motion.div>
              </div>
              <p className="text-xs" style={{ color: 'var(--color-text-disabled)' }}>
                No credit card required · Free 30-day trial for Institution plan
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
