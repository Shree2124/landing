// ============================================================
// AcadFlow — Design Token Types
// Strongly-typed theme interface. All theme objects must conform.
// ============================================================

export interface ColorScale {
  primary: string;
  secondary: string;
  tertiary?: string;
}

export interface SurfaceScale {
  default: string;
  elevated: string;
  hover: string;
  active: string;
}

export interface TextScale {
  primary: string;
  secondary: string;
  muted: string;
  disabled: string;
  inverse: string;
}

export interface BorderScale {
  default: string;
  subtle: string;
  strong: string;
}

export interface InteractiveScale {
  default: string;
  hover: string;
  active: string;
  foreground: string;
}

export interface InputScale {
  background: string;
  border: string;
  placeholder: string;
  focus: string;
}

export interface OverlayScale {
  default: string;
  light: string;
}

export interface StatusScale {
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ChartScale {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
}

export interface ShadowScale {
  card: string;
  elevated: string;
  modal: string;
  dropdown: string;
  floating: string;
}

export interface MotionTokens {
  durationFast: string;
  durationStandard: string;
  durationComplex: string;
  easeStandard: string;
  easeDecelerate: string;
  easeAccelerate: string;
  easeSpring: string;
}

export interface TypographyTokens {
  fontSans: string;
  fontMono: string;
  fontHeading: string;
}

export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  pill: string;
}

export interface ThemeColors {
  background: ColorScale;
  surface: SurfaceScale;
  text: TextScale;
  border: BorderScale;
  primary: InteractiveScale;
  secondary: InteractiveScale;
  input: InputScale;
  overlay: OverlayScale;
  nav: { bg: string; border: string };
  card: { bg: string; border: string };
  modal: { bg: string };
  dropdown: { bg: string };
  tooltip: { bg: string };
  scrollbar: { track: string; thumb: string };
  status: StatusScale;
  chart: ChartScale;
  focusRing: string;
}

export interface Theme {
  name: string;
  mode: 'dark' | 'light';
  colors: ThemeColors;
  shadows: ShadowScale;
  motion: MotionTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
}

export type ThemeMode = 'dark' | 'light';

