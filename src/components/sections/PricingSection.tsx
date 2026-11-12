// ============================================================
// PricingSection
// ============================================================
import { Check } from 'lucide-react';
import { SectionLabel, SectionHeading, Card, Button, Badge } from '../ui';

const PLANS = [
  {
    name: 'Starter',
    price: '₹0',
    period: 'forever',
    desc: 'For small departments getting started.',
    features: [
      'Up to 2 faculty accounts',
      '1 batch / 60 students',
      'Assignment management',
      'Basic attendance tracking',
      'Study hub (5 GB)',
      'Email support',
    ],
    cta: 'Get started free',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Institution',
    price: '₹8,999',
    period: 'per month',
    desc: 'For growing institutions that need full control.',
    features: [
      'Unlimited faculty accounts',
      'Unlimited batches & students',
      'AI Academic Assistant',
      'Advanced analytics',
      'Role-based access control',
      'Study hub (unlimited)',
      'PDF export & reporting',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Start free trial',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    desc: 'For multi-campus universities with custom needs.',
    features: [
      'Everything in Institution',
      'Multi-campus support',
      'SSO & LDAP integration',
      'Dedicated infrastructure',
      'SLA guarantees',
      'On-premise option',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Contact sales',
    variant: 'outline' as const,
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading className="text-3xl sm:text-4xl">
            Simple, transparent pricing
          </SectionHeading>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Start free. Scale as your institution grows. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map(({ name, price, period, desc, features, cta, variant, popular }) => (
            <div key={name} className="relative">
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="default" className="px-3">Most popular</Badge>
                </div>
              )}
              <Card
                elevated={popular}
                className="p-6 flex flex-col gap-6 h-full"
                style={popular ? { border: '1px solid var(--color-border-strong)' } : undefined}
              >
                {/* Plan name + price */}
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>{name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>{price}</span>
                    <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{period}</span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
                </div>

                {/* CTA */}
                <Button variant={variant} size="md" className="w-full">{cta}</Button>

                {/* Divider */}
                <div className="border-t" style={{ borderColor: 'var(--color-border-subtle)' }} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-primary)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
