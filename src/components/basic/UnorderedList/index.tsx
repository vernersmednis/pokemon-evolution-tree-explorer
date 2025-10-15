import { twMerge } from "tailwind-merge";
import type { UnorderedListProps, ListItemProps } from "./types";
import { variantStyles } from "./styles";

const UnorderedList: React.FC<UnorderedListProps> & { ListItem: React.FC<ListItemProps> } = ({ 
  variant = "none", 
  children, 
  className,
  ...props 
}) => (
  <ul className={twMerge(variantStyles[variant], className)} {...props}>
    {children}
  </ul>
);

UnorderedList.ListItem = ({ children, className, ...props }) => (
  <li className={className} {...props}>{children}</li>
);

export default UnorderedList;
