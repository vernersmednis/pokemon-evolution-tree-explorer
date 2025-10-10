import React from 'react';
import type { ParagraphProps, ParagraphVariant } from "./types";
import { twMerge } from 'tailwind-merge';

// Base paragraph styles
const baseParagraphStyle = "leading-relaxed";

// Variant styles
const variants: Record<ParagraphVariant, string> = {
  body: "text-base",                              // 16px - default paragraph text
  tagline: "text-lg text-gray-600",               // 18px - subtitle/tagline under headings
  help: "text-sm text-red-400",                  // 14px - instructional/helper text
  attribution: "text-xs text-gray-600",           // 12px - credits, citations, sources
  caption: "text-xs text-gray-500 italic",        // 12px - captions, footnotes
};

const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className = "",
  variant = "body",
  ...props 
}) => {
  return (
    <p 
      className={twMerge(baseParagraphStyle, variants[variant], className)} 
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
