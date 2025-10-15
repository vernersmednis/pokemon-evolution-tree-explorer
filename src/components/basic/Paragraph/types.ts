import React from "react";

export type ParagraphVariant = "body" | "tagline" | "attribution" | "help" | "caption";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: ParagraphVariant;
}
