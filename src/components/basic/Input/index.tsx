import React from 'react';
import type { InputProps } from "./types";
import { twMerge } from 'tailwind-merge';

const inputStyle = `border border-black focus:outline-none`;

const Input: React.FC<InputProps> = (props) => (
  <input className={twMerge(inputStyle, props.className)} {...props} />
);

export default Input;
