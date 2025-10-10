import React from 'react';
import type { HeaderProps, HeaderVariant } from './types';
import { twMerge } from 'tailwind-merge';

// Base header styles
const baseHeaderStyles = "text-center";

// Variant styles
const variantStyles: Record<HeaderVariant, string> = {
  page: "sticky top-0 z-10 pt-8 pb-8 border-b border-gray-300 bg-white shadow-sm",  // Page header - sticky at top, with shadow
  section: "pt-3 pb-3 mb-3 border-b border-gray-400 text-sm",                       // Section header - subtle, compact, smaller
};

const Header: React.FC<HeaderProps> = ({ 
  children, 
  className = "",
  variant = "page",
  ...props 
}) => (
  <header 
    className={twMerge(baseHeaderStyles, variantStyles[variant], className)} 
    {...props}
  >
    {children}
  </header>
);

export default Header;
