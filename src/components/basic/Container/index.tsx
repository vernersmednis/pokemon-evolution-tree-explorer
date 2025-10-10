import { twMerge } from "tailwind-merge";
import type { ContainerProps, ContainerVariant } from "./types";

const variantStyles: Record<ContainerVariant, string> = {
  none: "",
  main: "my-8 flex flex-col items-center flex-grow",
};

const Container: React.FC<ContainerProps> = ({ variant = "none", children, className = '', ...props }) => (
  <div className={twMerge(variantStyles[variant], className)} {...props}>
    {children}
  </div>
);

export default Container;
