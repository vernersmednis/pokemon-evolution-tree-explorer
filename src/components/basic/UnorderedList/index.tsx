import { twMerge } from "tailwind-merge";
import type { UnorderedListProps, UnorderedListVariant, ListItemProps } from "./types";

const variantStyles: Record<UnorderedListVariant, string> = {
  none: "list-none",
  tips: "list-none space-y-4 pl-6 border-l-4 border-red-400 bg-red-50 py-4 pr-4 rounded-r-lg",
};

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
