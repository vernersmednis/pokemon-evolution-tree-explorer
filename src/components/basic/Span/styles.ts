import type { SpanVariant } from "./types";

// Base span styles
export const baseSpanStyles = "";

// Variant styles
export const variantStyles: Record<SpanVariant, string> = {
  default: "",                                                  // No styling - plain inline text
  badge: "px-4 py-1 rounded-full text-sm font-semibold",       // Badge/pill style for categories, types
  id: "text-sm font-semibold text-gray-600",                   // For IDs, numbers, codes
  "stat-value": "font-bold text-base",                         // For stat values, measurements
};