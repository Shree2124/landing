// ============================================================
// Shared primitive UI components — consume design tokens only
// ============================================================
import React from 'react';
import { clsx } from 'clsx';

// ── Button ──────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 select-none cursor-pointer disabled:opacity-40 disabled:pointer-events-none';

  const sizes = {
    sm: 'h-8 px-3 text-xs rounded-[var(--radius-md)] gap-1.5',
    md: 'h-10 px-5 text-sm rounded-[var(--radius-lg)] gap-2',
    lg: 'h-12 px-7 text-base rounded-[var(--radius-xl)] gap-2.5',
  };

  const variants = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]',
    secondary: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)] border border-[var(--color-border-default)]',
    ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] active:bg-[var(--color-surface-active)]',
    outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)]',
  };

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      style={{ transitionDuration: 'var(--duration-standard)', transitionTimingFunction: 'var(--ease-standard)' }}
      {...props}
    >
      {children}
    </button>
  );
}

// ── Badge ───────────────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border-[var(--color-border-default)]',
    success: 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20',
    warning: 'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20',
    error:   'bg-[var(--color-error)]/10 text-[var(--color-error)] border-[var(--color-error)]/20',
    info:    'bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/20',
  };

  return (
    <span className={clsx(
      'inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-[var(--radius-pill)] border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

// ── Card ────────────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, className, elevated, style }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[var(--radius-xl)] border',
        elevated
          ? 'bg-[var(--color-surface-elevated)]'
          : 'bg-[var(--color-card-bg)]',
        'border-[var(--color-card-border)]',
        className
      )}
      style={{ boxShadow: elevated ? 'var(--shadow-elevated)' : 'var(--shadow-card)', ...style }}
    >
      {children}
    </div>
  );
}

// ── SectionLabel ────────────────────────────────────────────
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase',
      'text-[var(--color-text-muted)]',
      className
    )}>
      <span className="w-4 h-px bg-[var(--color-border-strong)]" />
      {children}
      <span className="w-4 h-px bg-[var(--color-border-strong)]" />
    </span>
  );
}

// ── SectionHeading ──────────────────────────────────────────
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({ children, className, as: Tag = 'h2' }: HeadingProps) {
  return (
    <Tag className={clsx(
      'font-semibold text-[var(--color-text-primary)] leading-tight tracking-tight',
      className
    )}>
      {children}
    </Tag>
  );
}

// ── Divider ─────────────────────────────────────────────────
export function Divider({ className }: { className?: string }) {
  return <hr className={clsx('border-[var(--color-border-subtle)]', className)} />;
}
