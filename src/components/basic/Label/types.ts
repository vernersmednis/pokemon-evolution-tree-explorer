import React from "react";

export type LabelVariant = "form" | "stat";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: LabelVariant;
}
