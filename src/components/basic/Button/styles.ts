import type { ButtonVariant } from "./types";

// Base button styles
export const baseButtonStyle = `px-4 rounded font-medium transition-all duration-150 active:scale-95 cursor-pointer`;

// Variant styles
export const variantStyles: Record<ButtonVariant, string> = {
  search: "h-10 bg-red-600 text-white hover:bg-red-700 border border-red-600 flex items-center justify-center gap-1",  // Search button with icon space
  showPokemon: "h-10 bg-red-100 text-red-800 hover:bg-red-200 border border-red-800",  // Pokemon selection buttons
};