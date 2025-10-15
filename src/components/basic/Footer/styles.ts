import type { FooterVariant } from './types';

// Base footer styles
export const baseFooterStyles = "text-center";

// Variant styles
export const variantStyles: Record<FooterVariant, string> = {
  page: "pt-8 pb-8 border-t-2 border-gray-400 text-base bg-gray-50",     // Page footer - prominent border, background, larger padding
  section: "pt-2 pb-2 mt-2 border-t border-gray-300 text-xs text-gray-600",  // Section footer - subtle, compact, muted
};