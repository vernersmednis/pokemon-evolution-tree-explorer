import React from 'react';
import type { InputProps } from "./types";
import { twMerge } from 'tailwind-merge';
import { baseInputStyle } from './styles';

const Input: React.FC<InputProps> = (props) => (
  <input className={twMerge(baseInputStyle, props.className)} {...props} />
);

export default Input;
