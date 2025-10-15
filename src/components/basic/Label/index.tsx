import React from 'react';
import type { LabelProps } from './types';
import { twMerge } from 'tailwind-merge';
import { baseLabelStyles, variantStyles } from './styles';

const Label: React.FC<LabelProps> = ({ 
  children, 
  className = "",
  variant = "form",
  ...props 
}) => (
  <label 
    className={twMerge(baseLabelStyles, variantStyles[variant], className)} 
    {...props}
  >
    {children}
  </label>
);

export default Label;
