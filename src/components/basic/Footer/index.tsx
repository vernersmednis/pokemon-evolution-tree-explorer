import React from 'react';
import type { FooterProps } from './types';
import { twMerge } from 'tailwind-merge';
import { baseFooterStyles, variantStyles } from './styles';

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
