// ============================================================
// AcadFlow — Dark Monochrome Theme (Default)
// ============================================================
import type { Theme } from '../theme.types';

export const darkTheme: Theme = {
  name: 'Dark Monochrome',
  mode: 'dark',
  colors: {
    background: {
      primary:   '#050505',
      secondary: '#0b0b0b',
      tertiary:  '#111111',
    },
    surface: {
      default:  '#111111',
      elevated: '#181818',
      hover:    '#222222',
      active:   '#292929',
    },
    text: {
      primary:   '#ffffff',
      secondary: '#a1a1aa',
      muted:     '#71717a',
      disabled:  '#52525b',
      inverse:   '#050505',
    },
    border: {
      default: 'rgba(255,255,255,0.10)',
      subtle:  'rgba(255,255,255,0.06)',
      strong:  'rgba(255,255,255,0.20)',
    },
    primary: {
      default:    '#ffffff',
      hover:      '#e5e5e5',
      active:     '#d4d4d4',
      foreground: '#050505',
    },
    secondary: {
      default:    '#222222',
      hover:      '#303030',
      active:     '#383838',
      foreground: '#ffffff',
    },
    input: {
      background:  '#111111',
      border:      '#303030',
      placeholder: '#71717a',
      focus:       '#ffffff',
    },
    overlay: {
      default: 'rgba(0,0,0,0.70)',
      light:   'rgba(0,0,0,0.35)',
    },
    nav: {
      bg:     'rgba(5,5,5,0.80)',
      border: 'rgba(255,255,255,0.08)',
    },
    card: {
      bg:     '#111111',
      border: 'rgba(255,255,255,0.08)',
    },
    modal:    { bg: '#181818' },
    dropdown: { bg: '#181818' },
    tooltip:  { bg: '#222222' },
    scrollbar: {
      track: '#0b0b0b',
      thumb: '#333333',
    },
    focusRing: 'rgba(255,255,255,0.40)',
    status: {
      success: '#22c55e',
      warning: '#eab308',
      error:   '#ef4444',
      info:    '#3b82f6',
    },
    chart: {
      1: '#ffffff',
      2: '#a1a1aa',
      3: '#71717a',
      4: '#52525b',
      5: '#3f3f46',
      6: '#27272a',
      7: '#18181b',
      8: '#09090b',
    },
  },
  shadows: {
    card:     '0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6)',
    elevated: '0 4px 16px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)',
    modal:    '0 24px 64px rgba(0,0,0,0.80), 0 8px 24px rgba(0,0,0,0.6)',
    dropdown: '0 8px 24px rgba(0,0,0,0.70), 0 2px 8px rgba(0,0,0,0.5)',
    floating: '0 16px 48px rgba(0,0,0,0.75)',
  },
  motion: {
    durationFast:     '100ms',
    durationStandard: '200ms',
    durationComplex:  '350ms',
    easeStandard:     'cubic-bezier(0.4, 0, 0.2, 1)',
    easeDecelerate:   'cubic-bezier(0, 0, 0.2, 1)',
    easeAccelerate:   'cubic-bezier(0.4, 0, 1, 1)',
    easeSpring:       'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  typography: {
    fontSans:    "'Inter', system-ui, -apple-system, sans-serif",
    fontMono:    "'JetBrains Mono', ui-monospace, monospace",
    fontHeading: "'Inter', system-ui, -apple-system, sans-serif",
  },
  radius: {
    sm:   '4px',
    md:   '8px',
    lg:   '12px',
    xl:   '16px',
    '2xl':'20px',
    pill: '9999px',
  },
};

