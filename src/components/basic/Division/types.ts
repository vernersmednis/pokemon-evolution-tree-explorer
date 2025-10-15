import React from "react";

export type ContainerVariant = "none" | "main" | "horizontal-stack" | "vertical-stack";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
}