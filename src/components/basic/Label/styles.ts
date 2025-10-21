import type { LabelVariant } from "./types";

// Base label styles
export const baseLabelStyles = "block";

// Variant styles
export const variantStyles: Record<LabelVariant, string> = {
  form: "text-sm font-medium text-gray-700 mb-1",      // For form inputs
  stat: "text-xs font-semibold text-gray-700",         // For stats/data labels
};
