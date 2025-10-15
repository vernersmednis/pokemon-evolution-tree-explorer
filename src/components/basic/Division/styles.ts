import type { ContainerVariant } from "./types";

export const variantStyles: Record<ContainerVariant, string> = {
  none: "",
  main: "my-8 flex flex-col items-center flex-grow",
  "horizontal-stack": "flex flex-row items-center",
  "vertical-stack": "flex flex-col",
};