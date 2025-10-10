import React from "react";

export type UnorderedListVariant = "none" | "tips";

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: UnorderedListVariant;
}

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;
