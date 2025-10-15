// src/components/basic/Button/types.ts
import React from "react";

export type ButtonVariant = "search" | "showPokemon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}