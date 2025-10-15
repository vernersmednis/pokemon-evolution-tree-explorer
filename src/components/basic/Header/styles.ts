import type { HeaderVariant } from './types';

// Base header styles
export const baseHeaderStyles = "text-center";

// Variant styles
export const variantStyles: Record<HeaderVariant, string> = {
  page: "sticky top-0 z-10 pt-8 pb-8 border-b border-gray-300 bg-white shadow-sm",  // Page header - sticky at top, with shadow
  section: "pt-3 pb-3 mb-3 border-b border-gray-400 text-sm",                       // Section header - subtle, compact, smaller
};