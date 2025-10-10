// Color palettes for theming components
export const colorPalettes = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
] as const;

export type ColorPalette = typeof colorPalettes[number];
