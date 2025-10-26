import React from "react";
import { twMerge } from "tailwind-merge";
import type { ContainerProps } from "./types";
import { variantStyles } from "./styles";

const Division = React.forwardRef<HTMLDivElement, ContainerProps>(({ variant = "none", children, className = '', ...props }, ref) => (
  <div ref={ref} className={twMerge(variantStyles[variant], className)} {...props}>
    {children}
  </div>
));

export default Division;
