// ============================================================
// AcadFlow — ThemeProvider
// Theme switching uses the native View Transitions API so the
// ACTUAL PAGE CONTENT is revealed through the growing circle —
// no solid-colour overlay, no content hiding.
//
// How it works:
//   1. Browser freezes current page as ::view-transition-old
//   2. We apply new theme tokens → DOM updates to new theme
//   3. The new page is clipped to circle(0 at btn-center)
//   4. Circle expands to cover viewport → new theme revealed
//   5. Old screenshot fades under it  → seamless Nothing-style
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

// ── Context ──────────────────────────────────────────────────
interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  switchWithRipple: (newMode: ThemeMode, originX: number, originY: number) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ── DOM applicator ────────────────────────────────────────────
export function applyThemeToDom(theme: Theme) {
  const root = document.documentElement;
  const { colors, shadows, motion, radius } = theme;

  root.style.setProperty('--color-bg-primary',   colors.background.primary);
  root.style.setProperty('--color-bg-secondary', colors.background.secondary);
  root.style.setProperty('--color-bg-tertiary',  colors.background.tertiary ?? colors.background.secondary);

  root.style.setProperty('--color-surface-default',  colors.surface.default);
  root.style.setProperty('--color-surface-elevated', colors.surface.elevated);
  root.style.setProperty('--color-surface-hover',    colors.surface.hover);
  root.style.setProperty('--color-surface-active',   colors.surface.active);

  root.style.setProperty('--color-text-primary',   colors.text.primary);
  root.style.setProperty('--color-text-secondary', colors.text.secondary);
  root.style.setProperty('--color-text-muted',     colors.text.muted);
  root.style.setProperty('--color-text-disabled',  colors.text.disabled);
  root.style.setProperty('--color-text-inverse',   colors.text.inverse);

  root.style.setProperty('--color-border-default', colors.border.default);
  root.style.setProperty('--color-border-subtle',  colors.border.subtle);
  root.style.setProperty('--color-border-strong',  colors.border.strong);

  root.style.setProperty('--color-primary',            colors.primary.default);
  root.style.setProperty('--color-primary-hover',      colors.primary.hover);
  root.style.setProperty('--color-primary-active',     colors.primary.active);
  root.style.setProperty('--color-primary-foreground', colors.primary.foreground);

  root.style.setProperty('--color-secondary',            colors.secondary.default);
  root.style.setProperty('--color-secondary-hover',      colors.secondary.hover);
  root.style.setProperty('--color-secondary-active',     colors.secondary.active);
  root.style.setProperty('--color-secondary-foreground', colors.secondary.foreground);

  root.style.setProperty('--color-input-bg',          colors.input.background);
  root.style.setProperty('--color-input-border',      colors.input.border);
  root.style.setProperty('--color-input-placeholder', colors.input.placeholder);
  root.style.setProperty('--color-input-focus',       colors.input.focus);

  root.style.setProperty('--color-overlay',       colors.overlay.default);
  root.style.setProperty('--color-overlay-light', colors.overlay.light);

  root.style.setProperty('--color-nav-bg',     colors.nav.bg);
  root.style.setProperty('--color-nav-border', colors.nav.border);

  root.style.setProperty('--color-card-bg',     colors.card.bg);
  root.style.setProperty('--color-card-border', colors.card.border);

  root.style.setProperty('--color-modal-bg',    colors.modal.bg);
  root.style.setProperty('--color-dropdown-bg', colors.dropdown.bg);
  root.style.setProperty('--color-tooltip-bg',  colors.tooltip.bg);

  root.style.setProperty('--color-focus-ring', colors.focusRing);

  root.style.setProperty('--color-scrollbar-track', colors.scrollbar.track);
  root.style.setProperty('--color-scrollbar-thumb', colors.scrollbar.thumb);

  root.style.setProperty('--color-success', colors.status.success);
  root.style.setProperty('--color-warning', colors.status.warning);
  root.style.setProperty('--color-error',   colors.status.error);
  root.style.setProperty('--color-info',    colors.status.info);

  for (let i = 1; i <= 8; i++) {
    root.style.setProperty(`--color-chart-${i}`, colors.chart[i as keyof typeof colors.chart]);
  }

  root.style.setProperty('--shadow-card',     shadows.card);
  root.style.setProperty('--shadow-elevated', shadows.elevated);
  root.style.setProperty('--shadow-modal',    shadows.modal);
  root.style.setProperty('--shadow-dropdown', shadows.dropdown);
  root.style.setProperty('--shadow-floating', shadows.floating);

  root.style.setProperty('--duration-fast',     motion.durationFast);
  root.style.setProperty('--duration-standard', motion.durationStandard);
  root.style.setProperty('--duration-complex',  motion.durationComplex);
  root.style.setProperty('--ease-standard',     motion.easeStandard);
  root.style.setProperty('--ease-spring',       motion.easeSpring);

  root.style.setProperty('--radius-sm',   radius.sm);
  root.style.setProperty('--radius-md',   radius.md);
  root.style.setProperty('--radius-lg',   radius.lg);
  root.style.setProperty('--radius-xl',   radius.xl);
  root.style.setProperty('--radius-2xl',  radius['2xl']);
  root.style.setProperty('--radius-pill', radius.pill);

  root.setAttribute('data-theme', theme.mode);
}

// ── Provider ──────────────────────────────────────────────────
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_THEME);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    applyThemeToDom(THEMES[newMode]);
    try { localStorage.setItem('acadflow-theme', newMode); } catch { /* noop */ }
  };

  const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

  /**
   * Nothing Phone-style circular reveal using View Transitions API.
   *
   * originX / originY = absolute viewport coordinates of the toggle button centre.
   *
   * Fast & fluid: 360ms with cubic-bezier(0.16, 1, 0.3, 1).
   * Reveals actual new page content from the switch button.
   */
  const switchWithRipple = (newMode: ThemeMode, originX: number, originY: number) => {
    if (newMode === mode) return;

    const newTheme = THEMES[newMode];

    // Compute exact maximum distance to furthest viewport corner
    const maxRadius = Math.ceil(
      Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY)
      )
    );

    // Remove any previous transition style element if rapid clicking
    const prevStyle = document.getElementById('acadflow-vt-ripple-style');
    if (prevStyle) prevStyle.remove();

    // ── Inject dynamic keyframe with exact button origin ──
    const styleEl = document.createElement('style');
    styleEl.id = 'acadflow-vt-ripple-style';
    styleEl.textContent = `
      ::view-transition-group(root) {
        animation-duration: 360ms;
      }

      /* Disable default cross-fade */
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }

      /* OLD screenshot stays static underneath */
      ::view-transition-old(root) {
        animation: none !important;
        z-index: 1;
      }

      /* NEW theme content expands rapidly from the toggle button */
      ::view-transition-new(root) {
        clip-path: circle(0px at ${originX}px ${originY}px);
        animation: vt-ripple-expand 360ms cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        z-index: 9999;
      }

      @keyframes vt-ripple-expand {
        0% {
          clip-path: circle(0px at ${originX}px ${originY}px);
        }
        100% {
          clip-path: circle(${maxRadius}px at ${originX}px ${originY}px);
        }
      }
    `;
    document.head.appendChild(styleEl);

    const cleanup = () => {
      styleEl.remove();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc = document as any;

    if (typeof doc.startViewTransition === 'function') {
      // ── View Transitions supported (Chrome 111+, Edge 111+) ──
      const vt = doc.startViewTransition(() => {
        applyThemeToDom(newTheme);
        setModeState(newMode);
        try { localStorage.setItem('acadflow-theme', newMode); } catch { /* noop */ }
      });
      (vt.finished as Promise<void>).then(cleanup).catch(cleanup);
    } else {
      // ── Fallback: instant switch (Firefox, older Safari) ──
      cleanup();
      applyThemeToDom(newTheme);
      setModeState(newMode);
      try { localStorage.setItem('acadflow-theme', newMode); } catch { /* noop */ }
    }
  };

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('acadflow-theme') as ThemeMode | null;
      if (stored && THEMES[stored]) {
        setModeState(stored);
        applyThemeToDom(THEMES[stored]);
      } else {
        applyThemeToDom(THEMES[DEFAULT_THEME]);
      }
    } catch {
      applyThemeToDom(THEMES[DEFAULT_THEME]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: THEMES[mode], mode, setMode, toggleTheme, switchWithRipple }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
