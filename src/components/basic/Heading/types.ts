import React from "react";

export type HeadingVariant = "display" | "section";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: HeadingVariant;
};
