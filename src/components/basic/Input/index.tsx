import React from 'react';
import type { InputProps } from "./types";
import { twMerge } from 'tailwind-merge';
import { baseInputStyle } from './styles';

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input className={twMerge(baseInputStyle, className)} {...props} />
);

export default Input;
