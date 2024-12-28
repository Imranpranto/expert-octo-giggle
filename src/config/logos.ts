export const LOGO_CONFIG = {
  variants: {
    light: 'https://wttwdqxijxvzylavmsrw.supabase.co/storage/v1/object/public/assets/lienrich-icon.png?t=2024-12-15T06%3A02%3A43.076Z',
    dark: 'https://wttwdqxijxvzylavmsrw.supabase.co/storage/v1/object/public/assets/lienrich-icon.png?t=2024-12-15T06%3A02%3A43.076Z'
  },
  sizes: {
    small: {
      width: 32,
      height: 32
    },
    medium: {
      width: 48,
      height: 48
    },
    large: {
      width: 64,
      height: 64
    }
  },
  contexts: {
    header: 'medium',
    sidebar: 'small',
    auth: 'large',
    marketing: 'large'
  },
  defaults: {
    size: 'medium',
    variant: 'light',
    alt: 'LiEnrich Logo'
  }
};

export type LogoSize = keyof typeof LOGO_CONFIG.sizes;
export type LogoVariant = keyof typeof LOGO_CONFIG.variants;
export type LogoContext = keyof typeof LOGO_CONFIG.contexts;

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
  showText?: boolean;
}

export function getLogoPath(variant: LogoVariant = 'light'): string {
  return LOGO_CONFIG.variants[variant];
}

export function getLogoSize(size: LogoSize = 'medium'): { width: number; height: number } {
  return LOGO_CONFIG.sizes[size];
}

export function getContextSize(context: LogoContext): LogoSize {
  return LOGO_CONFIG.contexts[context];
}