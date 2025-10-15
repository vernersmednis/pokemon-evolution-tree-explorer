import React from 'react';
import type { HeaderProps } from './types';
import { twMerge } from 'tailwind-merge';
import { baseHeaderStyles, variantStyles } from './styles';

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
