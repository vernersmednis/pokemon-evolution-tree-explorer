import React from "react";

export type FooterVariant = "page" | "section";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: FooterVariant;
}
