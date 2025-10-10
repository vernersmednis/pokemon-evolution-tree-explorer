import React from 'react';
import type { FooterProps, FooterVariant } from './types';
import { twMerge } from 'tailwind-merge';

// Base footer styles
const baseFooterStyles = "text-center";

// Variant styles
const variantStyles: Record<FooterVariant, string> = {
  page: "pt-8 pb-8 border-t-2 border-gray-400 text-base bg-gray-50",     // Page footer - prominent border, background, larger padding
  section: "pt-2 pb-2 mt-2 border-t border-gray-300 text-xs text-gray-600",  // Section footer - subtle, compact, muted
};

const Footer: React.FC<FooterProps> = ({ 
  children, 
  className = "", 
  variant = "page",
  ...props 
}) => (
  <footer 
    className={twMerge(baseFooterStyles, variantStyles[variant], className)} 
    {...props}
  >
    {children}
  </footer>
);

export default Footer;
