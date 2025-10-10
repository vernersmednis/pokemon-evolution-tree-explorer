import React from "react";

export type HeaderVariant = "page" | "section";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: HeaderVariant;
}
