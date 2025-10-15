import React from 'react';
import type { ParagraphProps } from "./types";
import { twMerge } from 'tailwind-merge';
import { baseParagraphStyle, variantStyles } from './styles';

const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className = "",
  variant = "body",
  ...props 
}) => {
  return (
    <p 
      className={twMerge(baseParagraphStyle, variantStyles[variant], className)} 
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
