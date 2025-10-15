import React from "react";

export type ContainerVariant = "none" | "main";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant;
}