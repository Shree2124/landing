// ============================================================
// AcadFlow — ThemeProvider
// Applies the active theme as CSS custom properties on <html>.
// Architecture supports instant theme-switching without
// touching any individual component.
// ============================================================
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeMode } from './theme.types';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

const THEMES: Record<ThemeMode, Theme> = {
  dark:  darkTheme,
  light: lightTheme,
};

const DEFAULT_THEME: ThemeMode = 'dark';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement;
  const { colors, shadows, motion, radius } = theme;

  // — Background
  root.style.setProperty('--color-bg-primary',   colors.background.primary);
  root.style.setProperty('--color-bg-secondary', colors.background.secondary);
  root.style.setProperty('--color-bg-tertiary',  colors.background.tertiary ?? colors.background.secondary);

  // — Surface
  root.style.setProperty('--color-surface-default',  colors.surface.default);
  root.style.setProperty('--color-surface-elevated', colors.surface.elevated);
  root.style.setProperty('--color-surface-hover',    colors.surface.hover);
  root.style.setProperty('--color-surface-active',   colors.surface.active);

  // — Text
  root.style.setProperty('--color-text-primary',   colors.text.primary);
  root.style.setProperty('--color-text-secondary', colors.text.secondary);
  root.style.setProperty('--color-text-muted',     colors.text.muted);
  root.style.setProperty('--color-text-disabled',  colors.text.disabled);
  root.style.setProperty('--color-text-inverse',   colors.text.inverse);

  // — Border
  root.style.setProperty('--color-border-default', colors.border.default);
  root.style.setProperty('--color-border-subtle',  colors.border.subtle);
  root.style.setProperty('--color-border-strong',  colors.border.strong);

  // — Primary
  root.style.setProperty('--color-primary',            colors.primary.default);
  root.style.setProperty('--color-primary-hover',      colors.primary.hover);
  root.style.setProperty('--color-primary-active',     colors.primary.active);
  root.style.setProperty('--color-primary-foreground', colors.primary.foreground);

  // — Secondary
  root.style.setProperty('--color-secondary',            colors.secondary.default);
  root.style.setProperty('--color-secondary-hover',      colors.secondary.hover);
  root.style.setProperty('--color-secondary-active',     colors.secondary.active);
  root.style.setProperty('--color-secondary-foreground', colors.secondary.foreground);

  // — Input
  root.style.setProperty('--color-input-bg',          colors.input.background);
  root.style.setProperty('--color-input-border',      colors.input.border);
  root.style.setProperty('--color-input-placeholder', colors.input.placeholder);
  root.style.setProperty('--color-input-focus',       colors.input.focus);

  // — Overlay
  root.style.setProperty('--color-overlay',       colors.overlay.default);
  root.style.setProperty('--color-overlay-light', colors.overlay.light);

  // — Nav
  root.style.setProperty('--color-nav-bg',     colors.nav.bg);
  root.style.setProperty('--color-nav-border', colors.nav.border);

  // — Card
  root.style.setProperty('--color-card-bg',     colors.card.bg);
  root.style.setProperty('--color-card-border', colors.card.border);

  // — Modal / Dropdown / Tooltip
  root.style.setProperty('--color-modal-bg',    colors.modal.bg);
  root.style.setProperty('--color-dropdown-bg', colors.dropdown.bg);
  root.style.setProperty('--color-tooltip-bg',  colors.tooltip.bg);

  // — Focus ring
  root.style.setProperty('--color-focus-ring', colors.focusRing);

  // — Scrollbar
  root.style.setProperty('--color-scrollbar-track', colors.scrollbar.track);
  root.style.setProperty('--color-scrollbar-thumb', colors.scrollbar.thumb);

  // — Status
  root.style.setProperty('--color-success', colors.status.success);
  root.style.setProperty('--color-warning', colors.status.warning);
  root.style.setProperty('--color-error',   colors.status.error);
  root.style.setProperty('--color-info',    colors.status.info);

  // — Chart
  for (let i = 1; i <= 8; i++) {
    root.style.setProperty(`--color-chart-${i}`, colors.chart[i as keyof typeof colors.chart]);
  }

  // — Shadows
  root.style.setProperty('--shadow-card',     shadows.card);
  root.style.setProperty('--shadow-elevated', shadows.elevated);
  root.style.setProperty('--shadow-modal',    shadows.modal);
  root.style.setProperty('--shadow-dropdown', shadows.dropdown);
  root.style.setProperty('--shadow-floating', shadows.floating);

  // — Motion
  root.style.setProperty('--duration-fast',     motion.durationFast);
  root.style.setProperty('--duration-standard', motion.durationStandard);
  root.style.setProperty('--duration-complex',  motion.durationComplex);
  root.style.setProperty('--ease-standard',     motion.easeStandard);
  root.style.setProperty('--ease-spring',       motion.easeSpring);

  // — Radius
  root.style.setProperty('--radius-sm',   radius.sm);
  root.style.setProperty('--radius-md',   radius.md);
  root.style.setProperty('--radius-lg',   radius.lg);
  root.style.setProperty('--radius-xl',   radius.xl);
  root.style.setProperty('--radius-2xl',  radius['2xl']);
  root.style.setProperty('--radius-pill', radius.pill);

  // — data-theme attribute for CSS selector hooks
  root.setAttribute('data-theme', theme.mode);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_THEME);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try { localStorage.setItem('acadflow-theme', newMode); } catch { /* noop */ }
  };

  const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('acadflow-theme') as ThemeMode | null;
      if (stored && THEMES[stored]) setModeState(stored);
    } catch { /* noop */ }
  }, []);

  // Apply CSS vars whenever mode changes
  useEffect(() => {
    applyThemeToDom(THEMES[mode]);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme: THEMES[mode], mode, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}

