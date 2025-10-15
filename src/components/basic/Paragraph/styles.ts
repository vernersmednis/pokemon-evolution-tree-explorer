import type { ParagraphVariant } from "./types";

// Base paragraph styles
export const baseParagraphStyle = "leading-relaxed";

// Variant styles
export const variantStyles: Record<ParagraphVariant, string> = {
  body: "text-base",                              // 16px - default paragraph text
  tagline: "text-lg text-gray-600",               // 18px - subtitle/tagline under headings
  help: "text-sm text-red-400",                  // 14px - instructional/helper text
  attribution: "text-xs text-gray-600",           // 12px - credits, citations, sources
  caption: "text-xs text-gray-500 italic",        // 12px - captions, footnotes
};