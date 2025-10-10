import React, { type JSX } from 'react';
import type { HeadingProps, HeadingVariant } from './types';
import { twMerge } from 'tailwind-merge';

// Base heading styles by level (matching browser defaults)
const levelStyles: Record<number, string> = {
  1: "text-4xl",     // ~2em / 32px
  2: "text-3xl",     // ~1.5em / 24px
  3: "text-2xl",     // ~1.17em / 18.72px
  4: "text-xl",      // ~1em / 16px
  5: "text-lg",      // ~0.83em / 13.28px
  6: "text-base",    // ~0.67em / 10.72px
};

// Variant styles
const variantStyles: Record<HeadingVariant, string> = {
  display: "font-extrabold tracking-tight",  // Hero/main title - extra bold, tight spacing
  section: "font-bold",                       // Section headings - standard bold
};

const Heading: React.FC<HeadingProps> = ({ 
  level = 1, 
  variant = "section",
  className = "",
  children, 
  ...props 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Tag, 
    { 
      ...props, 
      className: twMerge(levelStyles[level], variantStyles[variant], className) 
    }, 
    children
  );
};

export default Heading;
