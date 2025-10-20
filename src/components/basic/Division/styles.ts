import type { ContainerVariant } from "./types";

export const variantStyles: Record<ContainerVariant, string> = {
  none: "",
  main: "my-8 flex flex-col items-center flex-grow",
  "horizontal-stack": "flex flex-row",
  "vertical-stack": "flex flex-col",
  "horizontal-stack-center": "flex flex-row justify-center",
  "vertical-stack-center": "flex flex-col items-center",
  "horizontal-stack-between": "flex flex-row justify-between",
  "vertical-stack-between": "flex flex-col items-between",
};