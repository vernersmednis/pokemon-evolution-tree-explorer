import React from 'react';
import type { ButtonProps } from "./types";
import { twMerge } from 'tailwind-merge';
import { baseButtonStyle, variantStyles } from './styles';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = "showPokemon",
  ...props 
}) => {
  return (
    <button 
      className={twMerge(baseButtonStyle, variantStyles[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
