import React, { type JSX } from 'react';
import type { HeadingProps } from './types';
import { twMerge } from 'tailwind-merge';
import { levelStyles, variantStyles } from './styles';

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
