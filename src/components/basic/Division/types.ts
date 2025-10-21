import React from "react";

export type ContainerVariant = "none" | "main" | "horizontal-stack" | "vertical-stack" | "horizontal-stack-center" | "vertical-stack-center" | "horizontal-stack-between" | "vertical-stack-between";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
}