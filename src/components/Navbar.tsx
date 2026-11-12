// ============================================================
// Navbar — with Nothing Phone ripple theme toggle
// ============================================================
import { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui';
import { clsx } from 'clsx';
import { useTheme } from '../theme/ThemeProvider';

const NAV_LINKS = [
  { label: 'Features',  href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Workflow',  href: '#workflow' },
  { label: 'Roles',     href: '#roles' },
  { label: 'Pricing',   href: '#pricing' },
];

/** Returns the viewport-relative center of an element */
function getCenter(el: HTMLElement): { x: number; y: number } {
  const r = el.getBoundingClientRect();
  return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { mode, switchWithRipple } = useTheme();
  const toggleBtnRef  = useRef<HTMLButtonElement>(null);
  const toggleMBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggle = (ref: React.RefObject<HTMLButtonElement | null>) => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    const origin  = ref.current ? getCenter(ref.current) : { x: window.innerWidth / 2, y: 32 };
    switchWithRipple(newMode, origin.x, origin.y);
  };

  const ThemeIcon = ({ size = 15 }: { size?: number }) => (
    <AnimatePresence mode="wait">
      {mode === 'dark' ? (
        <motion.span
          key="sun"
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          exit   ={{ rotate:  90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          style={{ display: 'flex' }}
        >
          <Sun size={size} />
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          initial={{ rotate:  90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          exit   ={{ rotate: -90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          style={{ display: 'flex' }}
        >
          <Moon size={size} />
        </motion.span>
      )}
    </AnimatePresence>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all',
        scrolled ? 'backdrop-blur-xl border-b' : 'border-b border-transparent'
      )}
      style={{
        backgroundColor: scrolled ? 'var(--color-nav-bg)' : 'transparent',
        borderColor:      scrolled ? 'var(--color-nav-border)' : 'transparent',
        transitionDuration: 'var(--duration-standard)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)', boxShadow: '0 0 0 1px var(--color-border-default)' }}
            >
              <GraduationCap size={16} style={{ color: 'var(--color-primary-foreground)' }} />
            </motion.div>
            <span className="font-semibold text-sm tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
              Acad<span style={{ color: 'var(--color-text-secondary)' }}>Flow</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm rounded-[var(--radius-md)] transition-all"
                style={{ color: 'var(--color-text-secondary)', transitionDuration: 'var(--duration-fast)' }}
                onMouseEnter={e => {
                  (e.currentTarget).style.color = 'var(--color-text-primary)';
                  (e.currentTarget).style.backgroundColor = 'var(--color-surface-hover)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.color = 'var(--color-text-secondary)';
                  (e.currentTarget).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* ── Nothing Phone ripple toggle ── */}
            <motion.button
              ref={toggleBtnRef}
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.06 }}
              onClick={() => handleToggle(toggleBtnRef)}
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative w-9 h-9 rounded-[var(--radius-lg)] flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <ThemeIcon size={15} />
            </motion.button>

            <Button variant="ghost"   size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Get started</Button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              ref={toggleMBtnRef}
              whileTap={{ scale: 0.88 }}
              onClick={() => handleToggle(toggleMBtnRef)}
              className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border-default)',
                color: 'var(--color-text-secondary)',
              }}
              aria-label="Toggle theme"
            >
              <ThemeIcon size={14} />
            </motion.button>

            <button
              className="p-2 rounded-[var(--radius-md)]"
              style={{ color: 'var(--color-text-secondary)' }}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b"
            style={{ backgroundColor: 'var(--color-nav-bg)', borderColor: 'var(--color-nav-border)' }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0,   opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  href={link.href}
                  className="px-3 py-2 text-sm rounded-[var(--radius-md)]"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                <Button variant="ghost"   size="sm">Sign in</Button>
                <Button variant="primary" size="sm">Get started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
