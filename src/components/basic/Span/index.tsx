import React from 'react';
import type { SpanProps } from './types';
import { twMerge } from 'tailwind-merge';
import { baseSpanStyles, variantStyles } from './styles';

const Span: React.FC<SpanProps> = ({ 
  children, 
  className = "",
  variant = "default",
  ...props 
}) => (
  <span 
    className={twMerge(baseSpanStyles, variantStyles[variant], className)} 
    {...props}
  >
    {children}
  </span>
);

export default Span;
