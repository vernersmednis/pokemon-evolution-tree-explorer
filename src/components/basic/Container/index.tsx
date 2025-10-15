import { twMerge } from "tailwind-merge";
import type { ContainerProps } from "./types";
import { variantStyles } from "./styles";

const Container: React.FC<ContainerProps> = ({ variant = "none", children, className = '', ...props }) => (
  <div className={twMerge(variantStyles[variant], className)} {...props}>
    {children}
  </div>
);

export default Container;
