// ============================================================
// AcadFlow — Light Monochrome Theme (Future-ready)
// ============================================================
import type { Theme } from '../theme.types';

export const lightTheme: Theme = {
  name: 'Light Monochrome',
  mode: 'light',
  colors: {
    background: {
      primary:   '#fafafa',
      secondary: '#f4f4f5',
      tertiary:  '#e4e4e7',
    },
    surface: {
      default:  '#ffffff',
      elevated: '#f9f9f9',
      hover:    '#f4f4f5',
      active:   '#e4e4e7',
    },
    text: {
      primary:   '#09090b',
      secondary: '#52525b',
      muted:     '#71717a',
      disabled:  '#a1a1aa',
      inverse:   '#fafafa',
    },
    border: {
      default: 'rgba(0,0,0,0.10)',
      subtle:  'rgba(0,0,0,0.06)',
      strong:  'rgba(0,0,0,0.20)',
    },
    primary: {
      default:    '#09090b',
      hover:      '#18181b',
      active:     '#27272a',
      foreground: '#fafafa',
    },
    secondary: {
      default:    '#e4e4e7',
      hover:      '#d4d4d8',
      active:     '#c4c4c8',
      foreground: '#09090b',
    },
    input: {
      background:  '#ffffff',
      border:      '#d4d4d8',
      placeholder: '#a1a1aa',
      focus:       '#09090b',
    },
    overlay: {
      default: 'rgba(0,0,0,0.50)',
      light:   'rgba(0,0,0,0.20)',
    },
    nav: {
      bg:     'rgba(250,250,250,0.90)',
      border: 'rgba(0,0,0,0.08)',
    },
    card: {
      bg:     '#ffffff',
      border: 'rgba(0,0,0,0.08)',
    },
    modal:    { bg: '#ffffff' },
    dropdown: { bg: '#ffffff' },
    tooltip:  { bg: '#18181b' },
    scrollbar: {
      track: '#f4f4f5',
      thumb: '#d4d4d8',
    },
    focusRing: 'rgba(9,9,11,0.30)',
    status: {
      success: '#16a34a',
      warning: '#ca8a04',
      error:   '#dc2626',
      info:    '#2563eb',
    },
    chart: {
      1: '#09090b',
      2: '#27272a',
      3: '#3f3f46',
      4: '#52525b',
      5: '#71717a',
      6: '#a1a1aa',
      7: '#d4d4d8',
      8: '#f4f4f5',
    },
  },
  shadows: {
    card:     '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
    elevated: '0 4px 16px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
    modal:    '0 24px 64px rgba(0,0,0,0.20), 0 8px 24px rgba(0,0,0,0.12)',
    dropdown: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
    floating: '0 16px 48px rgba(0,0,0,0.15)',
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

